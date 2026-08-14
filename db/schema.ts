import { pgTable, text, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const adminUsers = pgTable("admin_users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const heroSlides = pgTable("hero_slides", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  order: integer("order").default(0),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const institutions = pgTable("institutions", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  features: text("features").notNull(),
  image: text("image"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const curriculumItems = pgTable("curriculum_items", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  description: text("description").notNull(),
  iconName: text("icon_name").default("BookOpen"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const galleryItems = pgTable("gallery_items", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  caption: text("caption"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const articles = pgTable("articles", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  content: text("content").notNull(),
  image: text("image"),
  author: text("author").default("Hidayatullah Buru"),
  published: boolean("published").default(true),
  publishedAt: timestamp("published_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  role: text("role").notNull(),
  quote: text("quote").notNull(),
  image: text("image"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const siteSettings = pgTable("site_settings", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
