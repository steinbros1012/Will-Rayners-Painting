import type {
  CustomerReviews,
  PaintingServices,
  ProjectGallery,
  TrustIndicators,
} from "@/entities";

const primaryServiceArea =
  "Pearl, Gluckstadt, Brandon, Ridgeland, Madison, Flowood, Crystal Springs, Jackson, and nearby communities";

export const siteImages = {
  logo: "/images/will-rayners/branding/business-card.png",
  hero: "/images/will-rayners/jobs/nick-cappony/01-front-lawn-view.png",
  aboutOwner: "/images/will-rayners/jobs/post-frame-building/07-finished-side.png",
  aboutWork: "/images/will-rayners/jobs/nick-cappony/03-entry-door.png",
  galleryFallback: "/images/will-rayners/jobs/nick-cappony/02-driveway-front-view.png",
} as const;

export const paintingServices: PaintingServices[] = [
  {
    _id: "wr-service-interior",
    serviceName: "Interior Painting",
    shortSummary: "Clean walls, crisp trim lines, and rooms that feel new again.",
    description:
      "From single-room refreshes to full-home repaints, Will Rayners Custom Painting handles walls, ceilings, trim, and doors with careful prep, sharp cut-ins, and a finish built to hold up to daily life.",
    serviceImage: "/images/will-rayners/jobs/interior-stairwell-refresh/02-after.png",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "wr-service-exterior",
    serviceName: "Exterior Painting",
    shortSummary: "Protect curb appeal with durable coatings and proper prep.",
    description:
      "Exterior painting starts long before the first coat. Surfaces are cleaned, pressure washed, scraped, repaired, and primed where needed so the final finish looks better and lasts longer in Mississippi heat and humidity.",
    serviceImage: "/images/will-rayners/jobs/nick-cappony/01-front-lawn-view.png",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "wr-service-cabinets",
    serviceName: "Cabinet Painting",
    shortSummary: "Update kitchens and built-ins without the cost of replacement.",
    description:
      "Cabinet painting is ideal for homeowners who want a cleaner, brighter look while keeping the layout they already love. The process focuses on prep, sanding, priming, and smooth topcoats for a polished result.",
    serviceImage: "/images/will-rayners/jobs/cabinet-painting/01-finished-kitchen.png",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "wr-service-prep",
    serviceName: "Sheet Rock & Drywall Repair",
    shortSummary: "A quality finish starts with smooth walls and solid prep work.",
    description:
      "Cracks, dents, nail pops, seam damage, and texture issues can ruin the look of new paint. Will handles sheet rock repair, drywall patching, and the prep work that makes the finished project look clean, even, and professionally done.",
    serviceImage: "/images/will-rayners/jobs/ceiling-wall-repair-repaint/10-finished-room-angle-1.png",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "wr-service-trim",
    serviceName: "Trim, Doors & Detail Work",
    shortSummary: "The detail work that makes the entire room feel finished.",
    description:
      "Baseboards, crown molding, window trim, doors, and accent details all need a steady hand. Careful trim painting adds contrast, sharpens the space, and elevates the overall look of the home.",
    serviceImage: "/images/will-rayners/jobs/nick-cappony/03-entry-door.png",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "wr-service-stain",
    serviceName: "Deck, Fence & Wood Staining",
    shortSummary: "Bring outdoor wood surfaces back to life with a lasting finish.",
    description:
      "Decks, fences, and wood accents need the right products and prep to stand up to the weather. Staining and sealing help preserve the wood while improving the look of the entire property.",
    serviceImage: "/images/will-rayners/jobs/porch-deck-refresh/02-after.png",
    serviceAreaContext: primaryServiceArea,
    isFeatured: true,
  },
  {
    _id: "wr-service-pressure-washing",
    serviceName: "Pressure Washing",
    shortSummary: "Prep exterior surfaces the right way before paint and cleanup work begins.",
    description:
      "Pressure washing helps remove dirt, buildup, mildew, and loose surface grime before painting and can also be a standalone service for homeowners who want a cleaner exterior.",
    serviceImage: "/images/will-rayners/jobs/pressure-washing-walkway/02-after.png",
    serviceAreaContext: primaryServiceArea,
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

export const postFrameBuildingProject = {
  title: "Post-Frame Barn / Workshop Build",
  location: "Mississippi",
  summary:
    "A ground-up post-frame structure showing layout, framing, roof progress, metal skin installation, and the finished shell of the building.",
  photos: [
    "/images/will-rayners/jobs/post-frame-building/01-post-layout.png",
    "/images/will-rayners/jobs/post-frame-building/02-beam-frame.png",
    "/images/will-rayners/jobs/post-frame-building/03-roof-trusses.png",
    "/images/will-rayners/jobs/post-frame-building/04-roof-framing.png",
    "/images/will-rayners/jobs/post-frame-building/05-roof-skin.png",
    "/images/will-rayners/jobs/post-frame-building/06-siding-progress.png",
    "/images/will-rayners/jobs/post-frame-building/07-finished-side.png",
    "/images/will-rayners/jobs/post-frame-building/08-front-opening.png",
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
    projectTitle: "Wood Retaining Wall Refresh",
    beforePhoto: "/images/will-rayners/jobs/brick-wall-retaining-wall/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/brick-wall-retaining-wall/02-after.png",
    projectDescription:
      "Two finished angles from the same project show the cleanup and fresh look of this wood retaining wall area along the side of the home.",
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
    _id: "wr-project-porch-deck",
    projectTitle: "Front Porch Deck Refresh",
    beforePhoto: "/images/will-rayners/jobs/porch-deck-refresh/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/porch-deck-refresh/02-after.png",
    projectDescription:
      "This porch deck went from raw wood boards to a clean, finished painted surface that brightened the entire front entry.",
    projectLocation: "Mississippi",
  },
  {
    _id: "wr-project-deck-stairs",
    projectTitle: "Deck Stair & Rail Refresh",
    beforePhoto: "/images/will-rayners/jobs/deck-stair-refresh/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/deck-stair-refresh/02-after.png",
    projectDescription:
      "Fresh paint transformed this stair and rail system from weathered wood into a crisp finished feature that ties into the deck above.",
    projectLocation: "Mississippi",
  },
  {
    _id: "wr-project-stairwell",
    projectTitle: "Interior Stairwell Repaint",
    beforePhoto: "/images/will-rayners/jobs/interior-stairwell-refresh/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/interior-stairwell-refresh/02-after.png",
    projectDescription:
      "The stairwell went from multiple bold colors and unfinished patches to a cleaner, brighter interior finish.",
    projectLocation: "Mississippi",
  },
  {
    _id: "wr-project-pressure-washing",
    projectTitle: "Pressure Washing Walkway Refresh",
    beforePhoto: "/images/will-rayners/jobs/pressure-washing-walkway/01-before.png",
    afterPhoto: "/images/will-rayners/jobs/pressure-washing-walkway/02-after.png",
    projectDescription:
      "Pressure washing lifted dirt and buildup from this walkway and restored a much cleaner surface finish.",
    projectLocation: "Mississippi",
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
    indicatorImage: "/images/will-rayners/jobs/nick-cappony/01-front-lawn-view.png",
    shortDescription:
      "Serving Flowood, Pearl, Gluckstadt, Brandon, Ridgeland, Madison, Crystal Springs, Jackson, and nearby communities.",
    displayOrder: 1,
    isActive: true,
  },
  {
    _id: "wr-trust-estimates",
    title: "Free Estimates",
    indicatorImage: "/images/will-rayners/branding/business-card.png",
    shortDescription:
      "Straightforward quotes and clear communication before the work starts.",
    displayOrder: 2,
    isActive: true,
  },
  {
    _id: "wr-trust-detail",
    title: "Careful Prep & Cleanup",
    indicatorImage: "/images/will-rayners/jobs/ceiling-wall-repair-repaint/10-finished-room-angle-1.png",
    shortDescription:
      "Surface prep, crisp lines, and respect for your home throughout the job.",
    displayOrder: 3,
    isActive: true,
  },
  {
    _id: "wr-trust-reviews",
    title: "Five-Star Reputation",
    indicatorImage: "/images/will-rayners/jobs/nick-cappony/03-entry-door.png",
    shortDescription:
      "Backed by real customer feedback and repeat business.",
    displayOrder: 4,
    isActive: true,
  },
];
