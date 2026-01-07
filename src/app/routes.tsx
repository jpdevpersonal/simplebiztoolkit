import type { RouteObject } from "react-router";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CategoryPage from "../pages/CategoryPage";
import FreebiePage from "../pages/FreebiePage";
import BlogIndexPage from "../pages/BlogIndexPage";
import BlogPostPage from "../pages/BlogPostPage";
import AboutPage from "../pages/AboutPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import FaqPage from "../pages/FaqPage";
import ContactPage from "../pages/ContactPage";

export const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/products/:categorySlug", element: <CategoryPage /> },
  { path: "/free", element: <FreebiePage /> },
  { path: "/blog", element: <BlogIndexPage /> },
  { path: "/blog/:slug", element: <BlogPostPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/testimonials", element: <TestimonialsPage /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/contact", element: <ContactPage /> },
];
