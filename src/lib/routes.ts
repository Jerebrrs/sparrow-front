import {
  ShoppingBag,
  ClipboardList,
  User,
  LogOut,
  SquareTerminal,
  LucideSparkles,
} from "lucide-react";
import { LuAlignEndHorizontal } from "react-icons/lu";
export const routesAdmin = [
  {
    title: "Ventas",
    url: "#",
    icon: LuAlignEndHorizontal,
    isActive: true,
  },
  {
    title: "Productos",
    icon: ShoppingBag,
    items: [
      { title: "Crear Producto", url: "/admin/product" },
      { title: "Listado de Productos", url: "/productos" },
      { title: "Categorías", url: "/productos/categorias" },
      { title: "SubCategorías", url: "/productos/categorias" },
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
    icon: LucideSparkles ,
    url: "/cerrar-sesion",
  },
];
