export interface Product {
    id: string;
    description: string | null;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    // type: ValidTypes;
    gender: "men" | "women" | "kid" | "unisex";
  }
  
  export interface CartProduct {
    id: string;
    slug: string;
    title: string;
    price: number;
    quantity: number;
    sizes: Size;
    image: string;
  }
  
  export type Category = "men" | "women" | "kid" | "unisex";
  export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
  export type Type = "shirts" | "pants" | "hoodies" | "hats";