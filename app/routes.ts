import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  // Ruta principal
  index("routes/home.tsx"),

  // Página de servicios
  {
    path: "services",
    file: "routes/services.tsx",
  },

  // Blog - listado
  {
    path: "blog",
    file: "routes/blog/index.tsx",
  },

  // Blog - entrada individual
  {
    path: "blog/:id",
    file: "routes/blog.$id.tsx",
  }
] satisfies RouteConfig;
