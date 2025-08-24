import express, { type Express } from "express";
import { createReadStream } from "fs";
import { stat } from "fs/promises";
import path from "path";
import { log } from "./utils";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist/server/public");

  // Serve static files
  app.use(express.static(distPath));

  // Handle all other routes by serving index.html
  app.use("*", async (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    try {
      await stat(indexPath);
      const stream = createReadStream(indexPath);
      res.setHeader("Content-Type", "text/html");
      stream.pipe(res);
    } catch (err) {
      log(`Could not find index.html in ${distPath}`);
      res.status(404).send("Not found");
    }
  });
}