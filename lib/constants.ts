import z from 'zod';
import { Product } from './types';

export const ProductsSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  imageSrc: z.string().nonempty(),
  description: z.string().optional(),
  price: z.number().max(1000000000).min(5),
  status: z.string().default('is-new'),
  raiting: z.number().max(5).min(0),
  stock: z.number().max(1000000000).min(0).int(),
  specs: z.object({
    cpu: z.string(),
    gpu: z.string(),
    ram: z.string(),
    storage: z.string(),
  }),
  isOnSale: z.boolean().default(false),
});

export const FormSchema = z.object({
  maxPrice: z.number().max(1000000000).min(5).default(0),
  raiting: z.number().max(5).min(0),
});

export const ThemeSchema = z.object({
  theme: z.string(),
});

export const products: Product[] = [
  {
    id: '1',
    name: 'ASUS ROG Strix G15',
    imageSrc: '/assets/ASUS ROG Strix G15.webp',
    description: 'This is product 1',
    price: 100,
    status: 'is-new',
    raiting: 4,
    stock: 10,
    specs: {
      cpu: 'Intel i5',
      gpu: 'Nvidia GTX 1050',
      ram: '8GB',
      storage: '512GB',
    },
    isOnSale: true
  },
  {
    id: '2',
    name: 'Lenovo Legion 5',
    imageSrc: '/assets/Lenovo Legion 5.webp',
    description: 'This is product 2',
    price: 200,
    status: 'is-popular',
    raiting: 3,
    stock: 20,
    specs: {
      cpu: 'Intel i7',
      gpu: 'Nvidia GTX 1060',
      ram: '16GB',
      storage: '1TB',
    },
    isOnSale: false
  },
  {
    id: '3',
    name: 'Acer Predator Helios 300',
    imageSrc: '/assets/Acer Predator Helios 300.webp',
    description: 'This is product 3',
    price: 300,
    status: 'is-best-seller',
    raiting: 5,
    stock: 30,
    specs: {
      cpu: 'Intel i9',
      gpu: 'Nvidia GTX 1070',
      ram: '32GB',
      storage: '2TB',
    },
    isOnSale: true
  },
  {
    id: '4',
    name: 'MSI GE66 Raider',
    imageSrc: '/assets/MSI GE66 Raider.webp',
    description: 'This is product 4',
    price: 400,
    status: 'is-out-of-stock',
    raiting: 2,
    stock: 40,
    specs: {
      cpu: 'Intel i9',
      gpu: 'Nvidia GTX 1080',
      ram: '64GB',
      storage: '4TB',
    },
    isOnSale: false,
  },
  {
    id: '5',
    name: 'Razer Blade 15',
    imageSrc: '/assets/Razer Blade 15.webp',
    description: 'This is product 5',
    price: 500,
    status: 'is-popular',
    raiting: 1,
    stock: 50,
    specs: {
      cpu: 'Intel i9',
      gpu: 'Nvidia GTX 1080',
      ram: '128GB',
      storage: '8TB'
    },
    isOnSale: true,
  },
  {
    id: '6',
    name: 'HP Omen 15',
    imageSrc: '/assets/HP Omen 15.webp',
    description: 'This is product 6',
    price: 600,
    status: 'is-on-sale',
    raiting: 0,
    stock: 60,
    specs: {
      cpu: 'Intel i9',
      gpu: 'Nvidia GTX 1080',
      ram: '256GB',
      storage: '16TB'
    },
    isOnSale: false,
  },
  {
    id: '7',
    name: 'Dell G3 15',
    imageSrc: '/assets/Dell G3 15.webp',
    description: 'This is product 7',
    price: 700,
    status: 'is-popular',
    raiting: 4,
    stock: 70,
    specs: {
      cpu: 'Intel i9',
      gpu: 'Nvidia GTX 1080',
      ram: '512GB',
      storage: '32TB'
    },
    isOnSale: true,
  }
]