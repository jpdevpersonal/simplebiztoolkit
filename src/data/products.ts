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

const PH = {
  hero: "/images/placeholder-hero.png",
  tool: "/images/placeholder-tool.png",
  listing: "https://www.etsy.com/listing/placeholder"
};

/**
 * 1) Grouped by Etsy-defined Shop Sections
 */
export const categories: ProductCategory[] = [
  {
    slug: "business-ledger",
    name: "Business Ledger",
    summary: "Bundles and packs of business ledger templates to keep admin and record-keeping consistent.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Business Ledger Templates, Accounting Ledger, Invoice, Petty Cash, Order Tracker, Estimate and Time Sheet Templates, Instant Download PDF",
        problem:
          "You want one cohesive set of templates to run the admin side of your business without piecing together lots of separate files.",
        bullets: [
          "All-in-one bundle for finance + operations tracking",
          "Includes ledger, invoices, petty cash, order tracking, estimates, time sheets",
          "Instant download PDFs ready to print and reuse",
          "Keeps your record-keeping consistent and organised"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title: "Small Business Ledger Bundle: Accounting, Order & Payment Trackers (PDF)",
        problem:
          "You need a clean way to track money and orders in one place without turning bookkeeping into a second job.",
        bullets: [
          "Accounting ledger + order tracker + payment tracker",
          "Good for small businesses and online sellers",
          "Simple layouts for fast entry",
          "Download once and reuse indefinitely"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Business Ledger Template Bundle, Accounting Ledger, Petty Cash, Order & Payment Trackers, Instant Download",
        problem:
          "You want core financial templates (ledger, petty cash, orders, payments) that work together and look consistent.",
        bullets: [
          "Accounting ledger + petty cash + order tracker + payment tracker",
          "Helps monitor cash flow and sales admin",
          "Easy-to-read printable layouts",
          "Instant download"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    summary: "Track income and expenses simply, without complex accounting tools.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Expense Tracker, Income and Expense Sheet, Simple Accounting Ledger, GoodNotes Template, Ideal For Small Business Bookkeeping",
        problem:
          "You need a simple way to track money in and out, either on paper or digitally, without spreadsheet pain.",
        bullets: [
          "Track income and expenses side-by-side",
          "GoodNotes-friendly digital version plus printable format",
          "Helps keep cash flow visible",
          "Fast, simple bookkeeping habit builder"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "storyboard",
    name: "Storyboard",
    summary: "Storyboard planners for creators to map scenes, shots, and ideas quickly.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Storyboard 6x9 Printable Template, Digital Collage Template and YouTube Planner, A4 and US Letter sizes, 4 Frames on Page",
        problem:
          "You want a clean storyboard layout to plan scenes/shots with space for notes and timing.",
        bullets: [
          "4 frames per page for scene planning",
          "Space for time and description notes",
          "A4 + US Letter formats",
          "Great for video planning and visual projects"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Storyboard Printable Template, Digital Collage Template and YouTube Planner, Ideal for Film Makers, A4 and US Letter",
        problem:
          "You need larger frames per page so you can sketch with more detail and still capture key notes.",
        bullets: [
          "3 frames per page for more detail",
          "Notes areas for each frame/scene",
          "A4 + US Letter formats",
          "Great for filmmakers and creators"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Storyboard Template A4 Printable Storyboard Planner Digital Collage Template and Film Planner, Ideal for Artists and Film Makers",
        problem:
          "You want a high-level storyboard view with multiple frames per page to outline the flow quickly.",
        bullets: [
          "Multiple smaller frames per page for overview planning",
          "Notes under frames for quick cues",
          "Easy to print and compile",
          "Ideal for mapping sequences fast"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "accounting-ledger",
    name: "Accounting Ledger",
    summary: "Printable and fillable ledgers for small business bookkeeping: monthly, yearly, compact, and themed options.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Accounting Ledger, Fillable and Printable Accounts Template, Business Account Ledger, Ideal For Small Business Bookkeeping, Instant Download",
        problem:
          "You want a straightforward ledger to record transactions without complicated accounting software.",
        bullets: [
          "Record income/expenses clearly",
          "Easy alternative to complex forms",
          "Supports accurate record-keeping",
          "Instant download"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Accounting Ledger, Fillable and Printable Ledger, Money Tracker, Ideal For Your Small Business Bookkeeping, With Alternating Rows",
        problem:
          "You want a ledger that’s easier to read (less eye strain) while logging a lot of entries.",
        bullets: [
          "Alternating rows for readability",
          "Fillable + printable workflow",
          "Clear columns for dates/amounts/notes",
          "Good for ongoing bookkeeping"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Accounting Ledger and General Ledger Sheet, Income and Expense and Money Tracker, Columnar Paper, Business Bookkeeping, A5, Half Letter",
        problem:
          "You want compact ledger sheets that fit binders/notebooks and still track the essentials.",
        bullets: [
          "A5 + half-letter sizes",
          "Columnar paper layout",
          "Portable, binder-friendly",
          "Great for simple finance tracking"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Printable Accounting Ledger Money Tracker and General Ledger Sheets, Accounts Receivable, Ideal for Small Business Bookkeeping Template",
        problem:
          "You want to track what’s owed to you and keep your incoming payments visible.",
        bullets: [
          "Accounts receivable-friendly tracking",
          "Helps monitor invoices/payments",
          "Easy to maintain client payment records",
          "Printable template"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Printable Accounting Ledger General Ledger Sheet, Money Tracker and Expense Tracker, Ideal for Small Business",
        problem:
          "You want a simple general ledger format that covers money in and money out in one place.",
        bullets: [
          "General ledger layout",
          "Tracks income and expenses",
          "Simple and reusable",
          "Good for monthly summaries"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Yearly Accounting Ledger, Printable Ledger Sheet, Money Tracker, Ideal For Your Small Business Bookkeeping, PDF A4 and US Letter",
        problem:
          "You want a year-long view so your bookkeeping doesn’t get scattered across random pages.",
        bullets: [
          "Yearly-oriented tracking",
          "A4 + US Letter sizes",
          "Good for annual totals and review",
          "Printable, repeatable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Accounting Ledger, Money Tracker, General Ledger Sheets, Accounting Columnar Paper, Ideal for Your Small Business Bookkeeping, Six Colors.",
        problem:
          "You want the same ledger format with a little visual organization using color themes.",
        bullets: [
          "6 color themes",
          "Standard columnar layout",
          "Good for organizing different accounts/months",
          "Printable sheets"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Printable Accounting General Ledger Sheet, Accounting Ledger and Money Tracker, Ideal For Your Small Business Bookkeeping, Monthly Format",
        problem:
          "You prefer doing bookkeeping month-by-month so each period is clear and self-contained.",
        bullets: [
          "Monthly format per sheet",
          "Good for monthly reconciliation",
          "Clear columns for entries",
          "Printable workflow"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Accounting Ledger and Money Tracker Small Business, Fillable and Printable PDF with Auto Calculating Balance, Ideal For Bookkeeping",
        problem:
          "You want a ledger that reduces math errors by calculating running balances for you.",
        bullets: [
          "Fillable PDF workflow",
          "Auto-calculating balance",
          "Reduces manual errors",
          "Printable backup"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Printable Accounting Ledger Sheets and Money Tracker, ideal General Ledger For Your Small Business Bookkeeping, Yearly Format, Violet",
        problem:
          "You want a year-long ledger with a consistent themed design for easy filing and recognition.",
        bullets: [
          "Yearly format",
          "Consistent violet theme",
          "Clean and readable design",
          "Printable set"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "attendance-record",
    name: "Attendance Record",
    summary: "Attendance sheets for schools, events, clubs, home schooling, and workplaces.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "School Attendance Record Sheet, Class Attendance Register, Monthly Attendance Tracker, A4 Landscape",
        problem:
          "You need an easy monthly attendance view that’s readable and quick to mark each day.",
        bullets: [
          "Monthly attendance at-a-glance",
          "A4 landscape layout for wide tables",
          "Clear structure for names and dates",
          "Printable and reusable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Attendance Tracker Printable Attendance Record Sheet for Schools, Events and Clubs, Monthly Format",
        problem:
          "You need a generic monthly tracker that works for different group settings, not just classrooms.",
        bullets: [
          "Works for events, clubs, workshops",
          "Monthly date grid layout",
          "Easy to review trends",
          "Print and file for records"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Attendance Sheet Printable Attendance Tracker, Ideal for School, Employees and Students",
        problem:
          "You want a straightforward attendance list that works in schools or workplaces.",
        bullets: [
          "Versatile for students or staff",
          "Simple and readable layout",
          "Good for daily roll calls",
          "Printable form"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Attendance Tracker Printable Attendance Sheet Home School Tracker, Ideal for School, Conference and Event Attendance",
        problem:
          "You need an attendance sheet that works for homeschool, conferences, and multi-day events.",
        bullets: [
          "Multi-purpose design",
          "Track sessions/days easily",
          "Good for attendance records",
          "Clear format"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "rent-payment-ledger",
    name: "Rent Payment Ledger",
    summary: "Rent payment tracking templates for landlords to keep a clean tenant payment history.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Rent Payment Tracker, Printable Rent Payment Ledger, Rental Payment Log, Instant Download, Ideal for Landlords",
        problem:
          "You want a clear record of who paid, when, and what’s outstanding—without digging through bank apps.",
        bullets: [
          "Track rent due vs paid",
          "Log dates, amounts, and notes",
          "Spot late/missing payments fast",
          "Printable ledger per property/tenant"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Rent Payment Ledger, Printable Rent Payment Tracker, Rental Payment Log, Ideal for Landlords",
        problem:
          "You want detailed monthly tracking that also captures late fees and comments.",
        bullets: [
          "Monthly ledger format",
          "Includes fields for fees/notes",
          "Keeps tenant payment history tidy",
          "Printable PDF"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Rent Payment Ledger, Tenant Payment Log, Fillable and Printable Payment Tracker, Ideal for any Landlord, Instant Download PDF",
        problem:
          "You want the option to fill digitally OR print, while keeping everything in one structured ledger.",
        bullets: [
          "Fillable + printable",
          "Tracks due dates, amounts, fees, notes",
          "Keeps complete payment history",
          "Instant download"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "petty-cash",
    name: "Petty Cash",
    summary: "Simple petty cash templates to track small cash transactions and balances.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Petty Cash Log Printable Cash Flow Sheet, Simple Petty Cash Template, For Small Business Bookkeeping and Accounting",
        problem:
          "You want to stop petty cash becoming a mystery fund where money disappears without records.",
        bullets: [
          "Track cash in/out with balances",
          "Simple layout for quick entries",
          "Helps reduce missing-cash headaches",
          "Printable and reusable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "amateur-radio",
    name: "Amateur Radio",
    summary: "Ham radio log sheets for recording contacts (QSOs), frequencies, and confirmations.",
    heroImage: PH.hero,
    items: [
      {
        title: "Personalized Ham Radio Log Sheet, Amateur Radio Call Sign (Digital Download)",
        problem:
          "You want a clean, personalised log to record contacts properly during sessions and contests.",
        bullets: [
          "Custom call sign header",
          "Columns for common QSO details",
          "Keeps your log organised",
          "Print as many pages as needed"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Ham Radio Log Sheets, Printable Amateur Radio Log, Logbook and QSL Sheets, Ideal for Binders, Great for a Gift",
        problem:
          "You want binder-friendly pages to build a neat logbook and track QSL confirmations.",
        bullets: [
          "Printable log + QSL tracking sheets",
          "Binder-friendly formatting",
          "Good for ongoing record-keeping",
          "Great gift for radio enthusiasts"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "payment-tracker",
    name: "Payment Tracker",
    summary: "Payment tracking logs for client payments and fees—ideal for online sellers and service providers.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Payment Tracker, Simple Printable Fee Payment Tracker and Client Payment Log, Simplify Your Business Finances, Ideal for Online Sellers",
        problem:
          "You need to track incoming payments and fees so you know what you actually earned per transaction.",
        bullets: [
          "Log client/customer payments",
          "Track associated fees",
          "Great for online sellers",
          "Printable and simple"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Payment Tracker and Client Payment History Log, Simple Fee Payment Tracker, Simplify Your Business Finances, Ideal for Online Sellers",
        problem:
          "You want a running payment history so you can see paid vs due across time.",
        bullets: [
          "Chronological payment history",
          "Includes fees/notes per entry",
          "Good for repeat clients",
          "Keeps finances tidy"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Payment Tracker, Client Payment History and Fee Payment Tracker, Ideal for Small Business, Printable A4 and US Letter",
        problem:
          "You want a structured tracker that works on common paper sizes and files cleanly.",
        bullets: [
          "A4 + US Letter formats",
          "Columns for date/client/amount/fees",
          "Good for invoicing workflows",
          "Printable and reusable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "meeting-notes",
    name: "Meeting Notes",
    summary: "Meeting agenda + notes templates to capture decisions and action items clearly.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Meeting Notes Template, Agenda Planner, Customizable Client Meeting Notes, Printable Word Document A4 and US Letter Format",
        problem:
          "Meetings generate chaos unless you capture decisions and next steps in a consistent format.",
        bullets: [
          "Agenda + notes structure",
          "Includes action items section",
          "Editable Word format",
          "A4 + US Letter included"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "time-sheet",
    name: "Time Sheet",
    summary: "Weekly timesheets and time trackers for employees, contractors, and freelancers.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Printable Employee Time Sheet Template, Hours Worked and Weekly Time Tracker, Ideal For Your Small Business, Digital Download",
        problem:
          "You need a simple weekly format to track hours for payroll without messing about in complex tools.",
        bullets: [
          "Weekly Monday–Sunday layout",
          "Totals row + notes + signature",
          "A4 + US Letter versions",
          "Printable and reusable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Weekly Employee Time Sheet, Time Tracker, Editable Excel Spreadsheet (Printable)",
        problem:
          "You want digital entry and automatic totals while still being able to print and file.",
        bullets: [
          "Editable Excel workflow",
          "Totals calculated via spreadsheet",
          "Weekly structure",
          "Printable output"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Printable Employee Time Sheet, Weekly Work Tracker, Contractor Time Sheet, Digital Download",
        problem:
          "You track contractors and need a format that works for varied schedules and billable hours.",
        bullets: [
          "Contractor-friendly layout",
          "Weekly tracking",
          "Clear totals",
          "Downloadable and printable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Printable Freelancer Time Tracker, Work Time Sheet, Daily Hours Tracker, Ideal for Staff and Small Business Owners and Self Employed",
        problem:
          "You want a daily log to capture hours per task/project for billing and clarity.",
        bullets: [
          "Daily entries per task/project",
          "Great for freelancers",
          "Clear layout for multiple entries",
          "Works for self-employed or staff"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Employee Time Sheet Template Bundle (6 Colors) – Small Business Time Tracker Pack",
        problem:
          "You want consistent time sheets with light customization via color themes.",
        bullets: [
          "6 color themes",
          "Same weekly structure across designs",
          "Good for differentiating teams/weeks",
          "Printable pack"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "estimate",
    name: "Estimate",
    summary: "Estimate and quote templates for professionals to present pricing clearly.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Estimate and Quote Template Fillable and Printable Simple Estimate Form, Ideal for Professionals and Small Business Owners, Fillable PDF",
        problem:
          "You want a clean quote form you can fill quickly and send to clients without it looking homemade.",
        bullets: [
          "Fillable PDF",
          "Professional layout for clients",
          "Itemized pricing sections",
          "Printable and shareable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Estimate and Quote Template, Simple Estimate Form, Printable Quote and Work Estimate Sheet, Ideal for Business Owners and Professionals",
        problem:
          "You want a simple printable quote sheet for fast estimates and signatures/approval.",
        bullets: [
          "Easy to use",
          "Itemized rows for services/products",
          "Fields for dates and quote validity",
          "Clean and minimal"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "receipt",
    name: "Receipt",
    summary: "Receipt templates in multiple sizes and themes for professional order documentation.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Printable Receipt Template, Customer Order Form, Sales Receipt, Six Colors (Digital Download)",
        problem:
          "You want receipts that look consistent with your brand or prefer color options for organization.",
        bullets: [
          "6 color themes",
          "Standard receipt fields",
          "Professional presentation",
          "Printable download"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Receipt, Printable Customer Order Receipt Form, Sales Order Receipt Template, A5 and Half Letter, Ideal for Small Business or Online Shops",
        problem:
          "You want compact receipts that fit packing slips or smaller filing formats.",
        bullets: [
          "A5 + half-letter sizes",
          "Compact and practical",
          "Good for fairs/pop-ups/packages",
          "Clear totals and fields"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Receipt Template Printable Customer Order Receipt, Small Business Sales Receipt Form, A4 and US Letter, PDF",
        problem:
          "You want full-size receipts with plenty of room for details and itemization.",
        bullets: [
          "A4 + US Letter formats",
          "Ample space for itemization",
          "Clear totals and payment fields",
          "Printable PDF"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "sign-in-sheet",
    name: "Sign In Sheet",
    summary: "Visitor sign-in sheets for reception desks, events, and facilities.",
    heroImage: PH.hero,
    items: [
      {
        title: "Printable Sign In Sheet, Reception Check In Form, Front Desk, (A4/US Letter)",
        problem:
          "You need a simple, professional sign-in record for security and attendance tracking.",
        bullets: [
          "Front-desk friendly layout",
          "Easy to read and fill",
          "A4 + US Letter formats",
          "Printable and reusable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title: "Printable Sign In Sheet, Reception Check In/Out Form, A4/US Letter",
        problem:
          "You need check-in AND check-out times so you know who is on-site at any moment.",
        bullets: [
          "Check-in and check-out columns",
          "Good for offices/schools/events",
          "Quick visibility of who’s present",
          "Printable logs"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "invoice",
    name: "Invoice",
    summary: "Minimalist invoice templates for small business billing and bookkeeping.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Invoice Template, Minimalist Business Invoice, Customer Order Form, Simple Printable Invoice, Ideal for Your Small Business Bookkeeping",
        problem:
          "You want invoices that look professional and include all essential billing info without clutter.",
        bullets: [
          "Clean, minimalist design",
          "Itemized lines for products/services",
          "Totals and terms sections",
          "Printable and reusable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "order-form",
    name: "Order Form",
    summary: "Order form templates to capture customer orders cleanly (print or digital note-taking).",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Order Form Template, Purchase Order Form and Simple Printable Customer Order, Ideal For Your Small Business. GoodNotes Template.",
        problem:
          "You want a simple, consistent way to capture customer orders without losing details.",
        bullets: [
          "Fields for customer + delivery details",
          "Itemized list area",
          "GoodNotes compatible option",
          "Printable PDF included"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "tracker",
    name: "Tracker",
    summary: "Specialized trackers for tips and order tracking workflows.",
    heroImage: PH.hero,
    items: [
      {
        title:
          "Tips Tracker, Printable Server Tips Tracker for Bars Restaurants or Service Workers, Simple Excel Spreadsheet Template, A4, US Letter",
        problem:
          "You want a reliable record of tips earned so you can track income accurately.",
        bullets: [
          "Excel-based tracking",
          "Totals easy to calculate",
          "Shift/day entries",
          "Printable formats"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Server Tips Tracker, Printable Simple Tips Record for Bars, Restaurants or Service Workers, Divide Tips, A4, US Letter",
        problem:
          "You pool tips and need a clear way to calculate and document splits fairly.",
        bullets: [
          "Supports tip splitting",
          "Good for teams/pooling",
          "Clear daily records",
          "Printable"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      },
      {
        title:
          "Printable Order Tracker, Customer Order History and Sales, Instant Download PDF",
        problem:
          "You need a simple way to track orders through payment and delivery without forgetting anything.",
        bullets: [
          "Order history log",
          "Track payment + delivery status",
          "Overview of open vs completed orders",
          "Instant download PDF"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  },
  {
    slug: "guides",
    name: "Guides",
    summary: "Educational guides for small business owners (e.g., AI productivity and cost-saving).",
    heroImage: PH.hero,
    items: [
      {
        title:
          "AI for Small Business, Learn How AI Can Help Your Small Business, How to Cut Costs and Reduce Work, AI Prompting, Grow Your Business Smarter",
        problem:
          "You want a practical, non-technical guide to using AI to save time and reduce costs in your business.",
        bullets: [
          "Practical AI applications for small business",
          "Prompting guidance",
          "Productivity + cost-saving focus",
          "Written for non-technical owners"
        ],
        image: PH.tool,
        etsyUrl: PH.listing
      }
    ]
  }
];
