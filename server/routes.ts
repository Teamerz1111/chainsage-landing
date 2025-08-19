import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSignupSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSignupSchema.parse(req.body);
      
      // Check if email already exists
      const existingSignup = await storage.getWaitlistSignupByEmail(validatedData.email);
      if (existingSignup) {
        return res.status(400).json({ 
          message: "Email already registered for waitlist" 
        });
      }
      
      const signup = await storage.createWaitlistSignup(validatedData);
      res.status(201).json({ 
        message: "Successfully joined waitlist",
        signup: { id: signup.id, name: signup.name, email: signup.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid data",
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get waitlist signups (for admin)
  app.get("/api/waitlist", async (req, res) => {
    try {
      const signups = await storage.getWaitlistSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
