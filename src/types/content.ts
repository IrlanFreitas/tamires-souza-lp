/**
 * Tipos para dados estáticos da aplicação
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
