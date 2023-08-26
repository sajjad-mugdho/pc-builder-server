import express from "express";
import { ProductRouter } from "../app/routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
