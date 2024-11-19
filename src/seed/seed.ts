

export interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: "men" | "women" | "kid" | "unisex";
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type ValidTypes = "gorras" | "pants" | "hoodies" | "hats";

interface SeedData {
  categories: string[];
  products: SeedProduct[];
  users: SeedUser[];
}

export const initialData: SeedData = {
  categories: ["gorras", "Hats", "Hoodies", "Pants"],
  products: [
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["gorramato.webp", "gorramato2.webp"],
      inStock: 7,
      price: 75,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "gorras",
      tags: ["sweatshirt"],
      title: "Gorra Made In Mato",
      gender: "men",
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ["gorragris.webp", "gorragris1.webp"],
      inStock: 5,
      price: 200,
      sizes: ["XS", "S", "M", "XL", "XXL"],
      slug: "men_quilted_shirt_jacket",
      type: "gorras",
      tags: ["jacket"],
      title: "Gorra Made In Mato Gris",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ["jcroynos.webp", "jcroynos1.webp"],
      inStock: 10,
      price: 130,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      type: "gorras",
      tags: ["shirt"],
      title: "Jeans Croydon",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
        images: ["jcargo.webp", "jcargo1.webp"],
      inStock: 50,
      price: 45,
      sizes: ["XS", "S", "M", "L"],
      slug: "men_turbine_long_sleeve_tee",
      type: "gorras",
      tags: ["shirt"],
      title: "Men's Turbine Long Sleeve Tee",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
        images: ["socrates.jpg", "socrates1.jpg"],
      inStock: 50,
      price: 40,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "men_turbine_short_sleeve_tee",
      type: "gorras",
      tags: ["shirt"],
      title: "Socrates Over",
      gender: "men",
    },
    {
      description:
        "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
        images: ["rise.jpg", "rise1.jpg"],
      inStock: 0,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "men_cybertruck_owl_tee",
      type: "gorras",
      tags: ["shirt"],
      title: "Rise Over",
      gender: "men",
    },
    {
      description:
        "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
        images: ["bermuda1.png", "bermuda.png"],
      inStock: 0,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "men_cybertruck_owl_tee",
      type: "gorras",
      tags: ["shirt"],
      title: "Bermuda Maveric",
      gender: "men",
    },
    {
      description:
        "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
        images: ["bermuda2.webp", "bermuda3.webp"],
      inStock: 0,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "men_cybertruck_owl_tee",
      type: "gorras",
      tags: ["shirt"],
      title: "Bermuda Mom Negra",
      gender: "men",
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