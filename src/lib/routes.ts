import { ShoppingBag, ClipboardList, User, LucideSparkles } from "lucide-react";
import { LuAlignEndHorizontal } from "react-icons/lu";
export const routesAdmin = [
  {
    title: "Panel",
    url: "/admin",
    icon: LuAlignEndHorizontal,
    isActive: true,
  },
  {
    title: "Productos",
    icon: ShoppingBag,
    items: [
      { title: "Crear Producto", url: "/admin/newProduct" },
      { title: "Listado de Productos", url: "/admin/products" },
      { title: "Categorías", url: "/admin/categories" },
      // { title: "SubCategorías", url: "/admin/categorias" },
    ],
  },
  {
    title: "Órdenes",
    icon: ClipboardList,
    url: "/ordenes",
    items: [
      { title: "Órdenes", url: "/productos/crear" },
      { title: "Órdenes Canceladas", url: "/productos" },
      { title: "Órdenes Pendientes", url: "/productos/categorias" },
    ],
  },
  {
    title: "Proveedores",
    icon: User,
    url: "/perfil",
  },
  {
    title: "Social",
    icon: LucideSparkles,
    url: "/cerrar-sesion",
  },
];
