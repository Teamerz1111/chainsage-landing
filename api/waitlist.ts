import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { waitlistSignups, insertWaitlistSignupSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(req: any, res: any) {
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ message: 'Database not configured' });
  }

  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  if (req.method === 'POST') {
    try {
      const validatedData = insertWaitlistSignupSchema.parse(req.body);

      const existing = await db
        .select()
        .from(waitlistSignups)
        .where(eq(waitlistSignups.email, validatedData.email));

      if (existing.length > 0) {
        return res.status(400).json({ message: 'Email already registered for waitlist' });
      }

      const [signup] = await db.insert(waitlistSignups).values(validatedData).returning();
      return res.status(201).json({
        message: 'Successfully joined waitlist',
        signup: { id: signup.id, name: signup.name, email: signup.email },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Invalid data', errors: error.errors });
      }
      console.error('Waitlist signup error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  if (req.method === 'GET') {
    try {
      const signups = await db.select().from(waitlistSignups);
      return res.json(signups);
    } catch (error) {
      console.error('Waitlist fetch error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
