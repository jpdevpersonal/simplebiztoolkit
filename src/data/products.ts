export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  heroImage: string; // placeholder
  items: Array<{
    title: string;
    problem: string;
    bullets: string[];
    image: string;
    etsyUrl: string; // link to listing
  }>;
};

export const categories: ProductCategory[] = [
  {
    slug: "accounting-ledgers",
    name: "Accounting Ledgers",
    summary: "Track income and expenses without complex software.",
    heroImage: "/images/products/thumbnails/accounting-ledger-a4.webp",
    items: [
      {
        title: "Printable Accounting Ledger (General)",
        problem: "You want simple bookkeeping without feeling like you need an accounting degree.",
        bullets: ["Track income & expenses", "Clear categories", "Printable + digital-friendly"],
        image: "/images/products/thumbnails/accounting-ledger-a4.webp",
        etsyUrl: "https://www.etsy.com/shop/simplebiztoolkit",
      },
    ],
  },
  {
    slug: "estimates",
    name: "Estimate and Quote",
    summary: "Provide quick estimate and quotes for your clients.",
    heroImage: "/images/placeholder-hero.png",
    items: [
      {
        title: "Estimate and Quote Template",
        problem: "You need consistent hours tracking that’s easy to print and reuse.",
        bullets: ["Weekly layout", "Clear totals", "Works for staff or self-tracking"],
        image: "/images/products/thumbnails/estimate.webp",
        etsyUrl: "https://www.etsy.com/shop/simplebiztoolkit",
      },
    ],
  },
  {
    slug: "time-sheets",
    name: "Time Sheets",
    summary: "Keep rent payments organised and searchable.",
    heroImage: "/images/placeholder-hero.png",
    items: [
      {
        title: "Rent Payment Ledger",
        problem: "You want a clean payment history without digging through messages and bank apps.",
        bullets: ["Track payments per tenant", "Month-by-month clarity", "Printable record keeping"],
        image: "/images/products/thumbnails/employee-weekly-timesheet.webp",
        etsyUrl: "https://www.etsy.com/shop/simplebiztoolkit",
      },
    ],
  },
];
