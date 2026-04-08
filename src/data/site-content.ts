import type {
  CustomerReviews,
  PaintingServices,
  ProjectGallery,
  TrustIndicators,
} from "@/entities";

export const siteImages = {
  logo: "/images/meadowlark/branding/logo.jpg",
  hero: "/images/meadowlark/home/hero.png",
  aboutOwner: "/images/meadowlark/about/owner-portrait.jpg",
  aboutWork: "/images/meadowlark/about/work-example.png",
  galleryFallback: "/images/meadowlark/gallery/fallback.png",
} as const;

export const paintingServices: PaintingServices[] = [
  {
    _id: "wr-service-interior",
    serviceName: "Interior Painting",
    shortSummary: "Clean walls, crisp trim lines, and rooms that feel new again.",
    description:
      "From single-room refreshes to full-home repaints, Will Rayners Custom Painting handles walls, ceilings, trim, and doors with careful prep, sharp cut-ins, and a finish built to hold up to daily life.",
    serviceImage: "/images/meadowlark/services/interior-painting.png",
    serviceAreaContext: "Flowood, Brandon, Jackson, and nearby communities",
    isFeatured: true,
  },
  {
    _id: "wr-service-exterior",
    serviceName: "Exterior Painting",
    shortSummary: "Protect curb appeal with durable coatings and proper prep.",
    description:
      "Exterior painting starts long before the first coat. Surfaces are cleaned, scraped, repaired, and primed where needed so the final finish looks better and lasts longer in Mississippi heat and humidity.",
    serviceImage: "/images/meadowlark/services/exterior-painting.png",
    serviceAreaContext: "Flowood, Brandon, Jackson, and nearby communities",
    isFeatured: true,
  },
  {
    _id: "wr-service-cabinets",
    serviceName: "Cabinet Painting",
    shortSummary: "Update kitchens and built-ins without the cost of replacement.",
    description:
      "Cabinet painting is ideal for homeowners who want a cleaner, brighter look while keeping the layout they already love. The process focuses on prep, sanding, priming, and smooth topcoats for a polished result.",
    serviceImage: "/images/meadowlark/services/kitchen-cabinet-painting.png",
    serviceAreaContext: "Flowood, Brandon, Jackson, and nearby communities",
    isFeatured: true,
  },
  {
    _id: "wr-service-prep",
    serviceName: "Drywall Repair & Surface Prep",
    shortSummary: "A quality finish starts with smooth walls and solid prep work.",
    description:
      "Cracks, dents, nail pops, and texture issues can ruin the look of new paint. Will handles the prep work that makes the finished project look clean, even, and professionally done.",
    serviceImage: "/images/meadowlark/services/wall-repair-prep.png",
    serviceAreaContext: "Flowood, Brandon, Jackson, and nearby communities",
    isFeatured: true,
  },
  {
    _id: "wr-service-trim",
    serviceName: "Trim, Doors & Detail Work",
    shortSummary: "The detail work that makes the entire room feel finished.",
    description:
      "Baseboards, crown molding, window trim, doors, and accent details all need a steady hand. Careful trim painting adds contrast, sharpens the space, and elevates the overall look of the home.",
    serviceImage: "/images/meadowlark/services/trim-detail-work.png",
    serviceAreaContext: "Flowood, Brandon, Jackson, and nearby communities",
    isFeatured: true,
  },
  {
    _id: "wr-service-stain",
    serviceName: "Deck, Fence & Wood Staining",
    shortSummary: "Bring outdoor wood surfaces back to life with a lasting finish.",
    description:
      "Decks, fences, and wood accents need the right products and prep to stand up to the weather. Staining and sealing help preserve the wood while improving the look of the entire property.",
    serviceImage: "/images/meadowlark/services/deck-fence-staining.png",
    serviceAreaContext: "Flowood, Brandon, Jackson, and nearby communities",
    isFeatured: false,
  },
];

export const nickCapponyProject = {
  title: "Nick Cappony Exterior Paint & Carpentry Project",
  location: "Central Mississippi",
  summary:
    "A full exterior refresh featuring new paint, trim detailing, a replacement fiberglass door, and polished carpentry work across multiple elevations of the home.",
  photos: [
    "/images/will-rayners/jobs/nick-cappony/01-front-lawn-view.png",
    "/images/will-rayners/jobs/nick-cappony/02-driveway-front-view.png",
    "/images/will-rayners/jobs/nick-cappony/03-entry-door.png",
    "/images/will-rayners/jobs/nick-cappony/04-window-trim.png",
    "/images/will-rayners/jobs/nick-cappony/05-garage-door.png",
    "/images/will-rayners/jobs/nick-cappony/06-side-elevation.png",
    "/images/will-rayners/jobs/nick-cappony/07-rear-door.png",
    "/images/will-rayners/jobs/nick-cappony/08-rear-wall-deck.png",
    "/images/will-rayners/jobs/nick-cappony/09-glass-door-detail.png",
  ],
} as const;

export const ceilingWallRepairProject = {
  title: "Ceiling, Wall Repair & Repaint",
  location: "Mississippi",
  summary:
    "A major repair and repaint project focused on damaged ceilings, patched wall surfaces, seam repair, and a clean final coat that brought the entire room back together.",
  photos: [
    "/images/will-rayners/jobs/ceiling-wall-repair-repaint/01-wall-repair-before.png",
    "/images/will-rayners/jobs/ceiling-wall-repair-repaint/03-ceiling-damage-before.png",
    "/images/will-rayners/jobs/ceiling-wall-repair-repaint/06-ceiling-skim-progress.png",
    "/images/will-rayners/jobs/ceiling-wall-repair-repaint/08-wall-corner-progress.png",
    "/images/will-rayners/jobs/ceiling-wall-repair-repaint/10-finished-room-angle-1.png",
    "/images/will-rayners/jobs/ceiling-wall-repair-repaint/11-finished-room-angle-2.png",
    "/images/will-rayners/jobs/ceiling-wall-repair-repaint/12-finished-room-angle-3.png",
  ],
} as const;

export const projectGallery: ProjectGallery[] = [
  {
    _id: "wr-project-nick-cappony",
    projectTitle: "Nick Cappony Exterior Paint & Carpentry Project",
    beforePhoto: "/images/will-rayners/jobs/nick-cappony/02-driveway-front-view.png",
    afterPhoto: "/images/will-rayners/jobs/nick-cappony/01-front-lawn-view.png",
    projectDescription:
      "This featured Will Rayners project included an exterior repaint, trim and window detail work, garage and entry updates, and carpentry improvements that brought the entire home together.",
    projectLocation: "Central Mississippi",
    dateCompleted: "2026-04-08",
  },
  {
    _id: "wr-project-ceiling-wall-repair",
    projectTitle: "Ceiling, Wall Repair & Repaint",
    beforePhoto: "/images/will-rayners/jobs/ceiling-wall-repair-repaint/01-wall-repair-before.png",
    afterPhoto: "/images/will-rayners/jobs/ceiling-wall-repair-repaint/10-finished-room-angle-1.png",
    projectDescription:
      "This repair-focused project covered damaged ceilings, patched wall sections, seam repair, and a full repaint that left the room looking clean, bright, and finished again.",
    projectLocation: "Mississippi",
    dateCompleted: "2026-04-08",
  },
  {
    _id: "wr-project-brick-wall-retaining",
    projectTitle: "Brick Wall & Retaining Wall Refresh",
    beforePhoto: "/images/will-rayners/jobs/brick-wall-retaining-wall/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/brick-wall-retaining-wall/02-after.png",
    projectDescription:
      "This before-and-after project cleaned up a rough exterior side yard, refreshed the brick finish, and gave the retaining wall area a much cleaner, more finished look.",
    projectLocation: "Mississippi",
  },
  {
    _id: "wr-project-french-door",
    projectTitle: "French Door Restoration",
    beforePhoto: "/images/will-rayners/jobs/french-door-restoration/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/french-door-restoration/02-after.png",
    projectDescription:
      "A worn exterior door unit was restored with a cleaner, brighter finish that sharpened the trim and made the entire entry look cared for again.",
    projectLocation: "Mississippi",
  },
  {
    _id: "wr-project-exterior-white",
    projectTitle: "Full Exterior White Brick Transformation",
    beforePhoto: "/images/will-rayners/jobs/full-exterior-white-finish/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/full-exterior-white-finish/02-after.png",
    projectDescription:
      "This home went from dark, dated brick to a bright white exterior with dark accents, dramatically changing the curb appeal and modernizing the whole property.",
    projectLocation: "Mississippi",
  },
  {
    _id: "wr-project-living-room",
    projectTitle: "Full Interior Color Refresh",
    beforePhoto: "/images/meadowlark/projects/312acb2a-before.avif",
    afterPhoto: "/images/meadowlark/projects/312acb2a-after.png",
    projectDescription:
      "A dated main living area was brightened with fresh wall color, updated trim, and cleaner contrast throughout the open floor plan.",
    projectLocation: "Flowood, MS",
    dateCompleted: "2025-10-12",
  },
  {
    _id: "wr-project-cabinets",
    projectTitle: "Kitchen Cabinet Makeover",
    beforePhoto: "/images/meadowlark/projects/13c1f2c0-before.avif",
    afterPhoto: "/images/meadowlark/projects/13c1f2c0-after.png",
    projectDescription:
      "Existing cabinets were prepped and refinished to give the kitchen a brighter, more custom look without a full remodel.",
    projectLocation: "Brandon, MS",
    dateCompleted: "2025-11-07",
  },
  {
    _id: "wr-project-exterior",
    projectTitle: "Exterior Repaint With Crisp Trim",
    beforePhoto: "/images/meadowlark/projects/251399c4-before.avif",
    afterPhoto: "/images/meadowlark/projects/251399c4-after.png",
    projectDescription:
      "This exterior repaint improved curb appeal with a more modern body color, cleaner trim definition, and weather-ready coatings.",
    projectLocation: "Pearl, MS",
    dateCompleted: "2025-09-19",
  },
  {
    _id: "wr-project-bedroom",
    projectTitle: "Bedroom Repaint & Wall Prep",
    beforePhoto: "/images/meadowlark/projects/08420ba1-before.avif",
    afterPhoto: "/images/meadowlark/projects/08420ba1-after.png",
    projectDescription:
      "Wall prep and a new neutral color transformed this room into a cleaner, calmer space with a more finished feel.",
    projectLocation: "Jackson, MS",
    dateCompleted: "2026-01-15",
  },
  {
    _id: "wr-project-theater",
    projectTitle: "Accent Room Transformation",
    beforePhoto: "/images/meadowlark/projects/d2182179-before.avif",
    afterPhoto: "/images/meadowlark/projects/d2182179-after.png",
    projectDescription:
      "A bold color palette and precise edging turned this specialty room into a dramatic, high-impact feature space.",
    projectLocation: "Madison, MS",
    dateCompleted: "2025-08-04",
  },
  {
    _id: "wr-project-exterior-two",
    projectTitle: "Whole-Home Exterior Update",
    beforePhoto: "/images/meadowlark/projects/d5d5f8b4-before.avif",
    afterPhoto: "/images/meadowlark/projects/d5d5f8b4-after.png",
    projectDescription:
      "Prep, priming, and premium exterior paint helped this home look sharper while adding long-term protection against the elements.",
    projectLocation: "Reservoir Area, MS",
    dateCompleted: "2025-07-25",
  },
];

export const customerReviews: CustomerReviews[] = [
  {
    _id: "wr-review-nick",
    customerName: "Nick Cappony",
    reviewText:
      "I was recommended to Will Rayner Custom Painting & Carpentry by a good friend of mine and I am so glad he did. Will came out the very next day, walked the house with me, sent over the estimate quickly, and kept the process moving. His painters and carpenters were excellent, very professional, and did an awesome job. I highly recommend them if you need your house painted and some carpentry work done.",
    rating: 5,
    reviewSource: "Facebook Review",
  },
  {
    _id: "wr-review-michael",
    customerName: "Michael Easterling",
    reviewText:
      "The paint job looks absolutely stunning, thanks for the exceptional work. It was a pleasure collaborating with you, and we'll definitely be reaching out if we have any paint-related needs in the future.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
  {
    _id: "wr-review-jennifer",
    customerName: "Jennifer Gealogo",
    reviewText:
      "Will did great work. Very knowledgeable and thorough.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
  {
    _id: "wr-review-sophie",
    customerName: "Sophie Villarreal",
    reviewText:
      "Positive experience and great quality.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
  {
    _id: "wr-review-nikki",
    customerName: "Nikki Villarreal",
    reviewText:
      "Five-star service from start to finish.",
    rating: 5,
    reviewSource: "Google Reviews",
  },
];

export const trustIndicators: TrustIndicators[] = [
  {
    _id: "wr-trust-local",
    title: "Flowood-Based Service",
    indicatorImage: "/images/meadowlark/trust/bismarcks-trusted-painters.png",
    shortDescription:
      "Serving Flowood, Brandon, Jackson, Pearl, and nearby communities.",
    displayOrder: 1,
    isActive: true,
  },
  {
    _id: "wr-trust-estimates",
    title: "Free Estimates",
    indicatorImage: "/images/meadowlark/trust/free-no-obligation-estimates.png",
    shortDescription:
      "Straightforward quotes and clear communication before the work starts.",
    displayOrder: 2,
    isActive: true,
  },
  {
    _id: "wr-trust-detail",
    title: "Careful Prep & Cleanup",
    indicatorImage: "/images/meadowlark/trust/superior-quality-workmanship.png",
    shortDescription:
      "Surface prep, crisp lines, and respect for your home throughout the job.",
    displayOrder: 3,
    isActive: true,
  },
  {
    _id: "wr-trust-reviews",
    title: "Five-Star Reputation",
    indicatorImage: "/images/meadowlark/trust/high-customer-satisfaction.png",
    shortDescription:
      "Backed by real customer feedback and repeat business.",
    displayOrder: 4,
    isActive: true,
  },
];
