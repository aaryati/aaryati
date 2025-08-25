import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import multer from "multer";
import axios from "axios";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/zip' || file.originalname.endsWith('.zip')) {
      cb(null, true);
    } else {
      cb(new Error('Only ZIP files are allowed'));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files for SEO
  app.get('/robots.txt', (req, res) => {
    const robotsPath = path.resolve(import.meta.dirname, '..', 'public', 'robots.txt');
    res.sendFile(robotsPath);
  });

  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.resolve(import.meta.dirname, '..', 'public', 'sitemap.xml');
    res.sendFile(sitemapPath);
  });

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Any API routes would go here
  app.get('/api/version', (req, res) => {
    res.json({ 
      version: '1.0.0',
      app: 'Aaryati Technologies',
      environment: process.env.NODE_ENV || 'development'
    });
  });

  // Mule Analyzer API endpoints
  app.post('/api/analyze-mule', upload.single('muleApp'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Create FormData for the Spring Boot service
      const formData = new FormData();
      const fileBlob = new Blob([req.file.buffer], { type: 'application/zip' });
      formData.append('file', fileBlob, req.file.originalname);

      // Call the Spring Boot service
      const response = await axios.post('https://my-spring-api-1042208607375.asia-south1.run.app/api/v1/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 300000, // 5 minutes timeout
      });

      res.json(response.data);
    } catch (error) {
      console.error('Mule analysis error:', error);
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || 'Analysis service unavailable';
        res.status(status).json({ error: message });
      } else {
        res.status(500).json({ error: 'Internal server error during analysis' });
      }
    }
  });

  app.post('/api/export-analysis-csv', async (req, res) => {
    try {
      const analysisData = req.body;

      // Call the Spring Boot service for CSV export
      const response = await axios.post('https://my-spring-api-1042208607375.asia-south1.run.app/api/v1/export-csv', analysisData, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'stream',
      });

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="mule-analysis-${analysisData.applicationName || 'report'}.csv"`);
      
      response.data.pipe(res);
    } catch (error) {
      console.error('CSV export error:', error);
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        res.status(status).json({ error: 'CSV export service unavailable' });
      } else {
        res.status(500).json({ error: 'Internal server error during CSV export' });
      }
    }
  });

  // Enquiry form API endpoint
  app.post('/api/submit-enquiry', async (req, res) => {
    try {
      const enquiryData = req.body;

      // Validate required fields
      if (!enquiryData.name || !enquiryData.email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      // Call the Spring Boot service for enquiry submission
      const response = await axios.post('https://my-spring-api-1042208607375.asia-south1.run.app/api/v1/inquiry', {
        name: enquiryData.name,
        email: enquiryData.email,
        companyName: enquiryData.company || enquiryData.companyName,
        yourRole: enquiryData.role || enquiryData.yourRole,
        applicationSize: enquiryData.appSize || enquiryData.applicationSize,
        requirements: enquiryData.requirements || enquiryData.message
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 seconds timeout
      });

      res.json(response.data);
    } catch (error) {
      console.error('Enquiry submission error:', error);
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || 'Enquiry service unavailable';
        res.status(status).json({ error: message });
      } else {
        res.status(500).json({ error: 'Internal server error during enquiry submission' });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
