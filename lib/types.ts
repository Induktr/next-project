import z from 'zod';
import { 
  ProductsSchema, 
  FormSchema,
  ThemeSchema,
} from './constants';

export type Form = z.infer<typeof FormSchema>;

export type Product = z.infer<typeof ProductsSchema>;

export type Theme = z.infer<typeof ThemeSchema>;