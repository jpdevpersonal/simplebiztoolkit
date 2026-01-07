export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  heroImage: string; // placeholder
  items: Array<{
    title: string;
    problem: string;
    bullets: string[];
    image: string; // placeholder
    etsyUrl: string; // link to listing
  }>;
};

export const categories: ProductCategory[] = [
  {
    slug: "accounting-ledgers",
    name: "Accounting Ledgers",
    summary: "Track income and expenses without complex software.",
    heroImage: "/images/placeholder-hero.png",
    items: [
      {
        title: "Printable Accounting Ledger (General)",
        problem: "You want simple bookkeeping without feeling like you need an accounting degree.",
        bullets: ["Track income & expenses", "Clear categories", "Printable + digital-friendly"],
        image: "/images/placeholder-tool.png",
        etsyUrl: "https://www.etsy.com/shop/simplebiztoolkit",
      },
    ],
  },
  {
    slug: "time-sheets",
    name: "Time Sheets",
    summary: "Simple tracking for hours, tasks, and client work.",
    heroImage: "/images/placeholder-hero.png",
    items: [
      {
        title: "Employee Timesheet Template",
        problem: "You need consistent hours tracking that’s easy to print and reuse.",
        bullets: ["Weekly layout", "Clear totals", "Works for staff or self-tracking"],
        image: "/images/placeholder-tool.png",
        etsyUrl: "https://www.etsy.com/shop/simplebiztoolkit",
      },
    ],
  },
  {
    slug: "rent-trackers",
    name: "Rent Trackers",
    summary: "Keep rent payments organised and searchable.",
    heroImage: "/images/placeholder-hero.png",
    items: [
      {
        title: "Rent Payment Ledger",
        problem: "You want a clean payment history without digging through messages and bank apps.",
        bullets: ["Track payments per tenant", "Month-by-month clarity", "Printable record keeping"],
        image: "/images/placeholder-tool.png",
        etsyUrl: "https://www.etsy.com/shop/simplebiztoolkit",
      },
    ],
  },
];
