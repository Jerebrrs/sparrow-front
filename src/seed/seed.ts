export interface SeedProduct {
  id: number;
  description: string;
  images: string[];
  inStock: number;
  priceOriginal: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  category: ValidCategories;
  subcategory?: string;
  isNew: boolean;
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type ValidCategories =
  | "jeans"
  | "remeras"
  | "gorras"
  | "pants"
  | "hoodies"
  | "hats";

type ValidSubcategories = "Mom" | "Slim" | "Oversize";

interface SeedData {
  categories: { name: string; subcategories?: ValidSubcategories[] }[];
  products: SeedProduct[];
  users: SeedUser[];
}

export const initialData: SeedData = {
  categories: [
    { name: "Jeans", subcategories: ["Mom", "Slim"] },
    { name: "Remeras", subcategories: ["Oversize", "Slim"] },
    { name: "Gorras" },
    { name: "Bermudas" },
    { name: "Camisas" },
    { name: "Zapatillas" },
  ],
  products: [
    {
      id: 0,
      description: "Gorra premium de alta calidad.",
      images: ["gorramato.webp", "gorramato2.webp"],
      inStock: 7,
      priceOriginal: 90,
      price: 75,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "gorra_mato",
      tags: ["gorra", "premium"],
      title: "Gorra Made In Mato",
      category: "gorras",
      isNew: true,
    },
    {
      id: 1,
      description: "Jean clásico para un estilo moderno.",
      images: ["jcroynos.webp", "jcroynos1.webp"],
      inStock: 10,
      priceOriginal: 150,
      price: 130,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "jean_croydon",
      tags: ["jean", "casual"],
      title: "Jeans Croydon",
      category: "jeans",
      subcategory: "slim",
      isNew: false,
    },
    {
      id: 2,
      description: "Remera oversized de algodón.",
      images: ["socrates.jpg", "socrates1.jpg"],
      inStock: 50,
      priceOriginal: 50,
      price: 40,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "remera_socrates",
      tags: ["remera", "oversized"],
      title: "Remera Socrates Over",
      category: "remeras",
      subcategory: "oversize",
      isNew: true,
    },
    {
      id: 3,
      description: "Bermuda mom de jean negro.",
      images: ["bermuda2.webp", "bermuda3.webp"],
      inStock: 0,
      priceOriginal: 50,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "bermuda_mom_negra",
      tags: ["bermuda", "jean"],
      title: "Bermuda Mom Negra",
      category: "jeans",
      subcategory: "mom",
      isNew: true,
    },
    {
      id: 4,
      description: "Bermuda mom de jean negro.",
      images: ["bermuda2.webp", "bermuda3.webp"],
      inStock: 0,
      priceOriginal: 50,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "bermuda_mom_negra",
      tags: ["bermuda", "jean"],
      title: "Bermuda Mom Negra",
      category: "jeans",
      subcategory: "mom",
      isNew: true,
    },
  ],
  users: [
    {
      email: "pepe@gmail.com",
      name: "pepe",
      password: "1234",
      role: "admin",
    },
    {
      email: "simon@gmail.com",
      name: "simon",
      password: "1234",
      role: "user",
    },
  ],
};
