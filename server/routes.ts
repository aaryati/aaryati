import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files for SEO
  app.get('/robots.txt', (req, res) => {
    const robotsPath = path.resolve(import.meta.dirname, '..', 'dist/public', 'robots.txt');
    res.sendFile(robotsPath);
  });

  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.resolve(import.meta.dirname, '..', 'dist/public', 'sitemap.xml');
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

  const httpServer = createServer(app);

  return httpServer;
}
