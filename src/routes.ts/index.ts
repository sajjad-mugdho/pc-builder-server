import express from "express";

const router = express.Router();

const productsRoutes = () => {
  console.log("test");
};
const moduleRoutes = [
  {
    path: "/products",
    route: productsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
