import {
  Building2,
  CalendarDays,
  CircleDollarSign,
  Map,
} from "lucide-react";

export type KnowledgeBaseDocument = {
  id: string;
  category: "listing" | "faq" | "policy" | "location";
  title: string;
  content: string;
};

export const knowledgeBaseDocuments: KnowledgeBaseDocument[] = [
  {
    id: "pricing-waterfront",
    category: "listing",
    title: "Waterfront apartment pricing",
    content:
      "Aurora Bay Residences starts from 1.45 million AED for one-bedroom apartments. Two-bedroom residences start from 2.2 million AED. Flexible payment plans are available for selected units.",
  },
  {
    id: "villa-pricing",
    category: "listing",
    title: "Aurora Cove Villas pricing",
    content:
      "Aurora Cove Villas start from 4.8 million AED for a 4-bedroom garden villa. 5-bedroom corner villas with private pools start from 6.1 million AED. A limited number of units include upgraded landscaping packages.",
  },
  {
    id: "skyline-pricing",
    category: "listing",
    title: "Skyline Crest Apartments pricing",
    content:
      "Skyline Crest Apartments are ready to move in, starting from 980,000 AED for a studio and 1.6 million AED for a 2-bedroom unit. These units are popular with investors due to fast occupancy and strong rental demand.",
  },
  {
    id: "seabrook-pricing",
    category: "listing",
    title: "Seabrook Terrace Homes pricing",
    content:
      "Seabrook Terrace Homes start from 2.9 million AED for a 2-bedroom townhome. 4-bedroom units with rooftop decks start from 4.2 million AED. Launch-phase pricing is available for a limited time.",
  },
  {
    id: "marina-vista-listing",
    category: "listing",
    title: "Marina Vista Towers overview",
    content:
      "Marina Vista Towers is a new luxury high-rise launch starting from 1.9 million AED for 1-bedroom units. It features a private marina walk, sky lounge, and infinity pool on the 40th floor. Handover is expected Q4 2027.",
  },
  {
    id: "palm-grove-listing",
    category: "listing",
    title: "Palm Grove Estates overview",
    content:
      "Palm Grove Estates is a gated villa community starting from 3.6 million AED for 3-bedroom villas. It includes 24/7 security, a dedicated kids' play area, jogging tracks, and a community mosque.",
  },
  {
    id: "northbridge-lofts-listing",
    category: "listing",
    title: "Northbridge Lofts overview",
    content:
      "Northbridge Lofts offers industrial-style loft apartments starting from 1.1 million AED, popular with young professionals. Units feature exposed-brick interiors, double-height ceilings, and co-working lounges on-site.",
  },
  {
    id: "sunset-ridge-listing",
    category: "listing",
    title: "Sunset Ridge Townhomes overview",
    content:
      "Sunset Ridge Townhomes start from 2.4 million AED for a 3-bedroom unit. The community is family-oriented, with a shared pool, landscaped courtyards, and a short walk to Sunset Ridge Primary School.",
  },
  {
    id: "payment-plan",
    category: "faq",
    title: "Installment payment plans",
    content:
      "Selected Aurora Estates developments offer a 20 percent booking amount, 40 percent during construction, and 40 percent on handover. Exact plans vary by project and unit type. Ready units typically require a larger upfront payment.",
  },
  {
    id: "site-visit",
    category: "policy",
    title: "Site visit scheduling",
    content:
      "Site visits can be scheduled from Friday through Sunday between 11 AM and 7 PM, depending on project availability. Visitors can request a call-back from an agent to confirm time slots, or book directly through the chat widget.",
  },
  {
    id: "location-district",
    category: "location",
    title: "Harbor District neighborhood",
    content:
      "Harbor District offers marina access, waterfront dining, premium fitness clubs, and a 15-minute drive to the central business zone. Buyers often choose it for lifestyle and rental demand. Aurora Bay Residences and Marina Vista Towers are both located here.",
  },
  {
    id: "handover",
    category: "listing",
    title: "Project handover timelines",
    content:
      "Aurora Cove Villas are expected to hand over in Q2 2027, Marina Vista Towers in Q4 2027, while Skyline Crest Apartments and Northbridge Lofts are ready to move in. Handover schedules depend on the selected project and are confirmed at booking.",
  },
  {
    id: "lead-capture",
    category: "faq",
    title: "Lead qualification trigger",
    content:
      "When a visitor asks about availability, booking, financing, payment plans, discounts, or site visits, the assistant should invite them to share contact details for agent follow-up.",
  },
  {
    id: "financing",
    category: "faq",
    title: "Financing guidance",
    content:
      "Mortgage and financing guidance is available through partnered advisors. The chatbot can explain that rates and approvals depend on buyer profile and bank requirements, then recommend speaking with an agent.",
  },
  {
    id: "amenities-clubhouse",
    category: "faq",
    title: "Shared amenities across communities",
    content:
      "Most Aurora Estates communities include a shared clubhouse, swimming pool, gym, and children's play area. Villa communities like Aurora Cove Villas and Palm Grove Estates add jogging tracks and community parks.",
  },
  {
    id: "parking-policy",
    category: "policy",
    title: "Parking and storage",
    content:
      "Apartments typically include 1 covered parking space per unit, with an option to purchase a second space where available. Villas include private garages. Storage rooms can be added for a one-time fee, subject to availability.",
  },
  {
    id: "pet-policy",
    category: "policy",
    title: "Pet policy",
    content:
      "Pets are welcome in all Aurora Estates villa communities. Select apartment buildings, including Skyline Crest Apartments and Northbridge Lofts, allow small pets under 15kg with community registration.",
  },
  {
    id: "school-district",
    category: "location",
    title: "Nearby schools",
    content:
      "Sunset Ridge Townhomes and Palm Grove Estates are within a 10-minute drive of top-rated international schools, including Sunset Ridge Primary School. Aurora Estates can share a full school-distance guide on request.",
  },
  {
    id: "resale-policy",
    category: "policy",
    title: "Resale and subletting",
    content:
      "Off-plan units can typically be resold after a percentage of the purchase price is paid, as set by the developer. Ready units may be sublet after registration with the community management office. An agent can confirm exact terms per project.",
  },
  {
    id: "warranty-maintenance",
    category: "policy",
    title: "Warranty and maintenance",
    content:
      "New handovers include a standard 1-year defects liability warranty covering structural and finishing issues. Ongoing community maintenance fees cover shared amenities, security, and landscaping, billed annually.",
  },
  {
    id: "office-hours",
    category: "faq",
    title: "Sales office hours and contact",
    content:
      "The Aurora Estates sales office is open Saturday through Thursday, 9 AM to 6 PM, and Friday 2 PM to 6 PM. Visitors can also request a call-back at any time through the chat widget for after-hours questions.",
  },
  {
    id: "virtual-tour",
    category: "faq",
    title: "Virtual tours",
    content:
      "Virtual 360-degree tours are available for Aurora Bay Residences, Marina Vista Towers, and Skyline Crest Apartments. Ask the assistant for a virtual tour link, or request one to be sent by an agent for other projects.",
  },
];

export const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    role: "First-time buyer, Aurora Bay Residences",
    quote:
      "The chat widget answered my pricing and payment plan questions instantly, at 11pm on a Sunday. By the time an agent called me back, I already knew exactly what I wanted to ask.",
  },
  {
    initials: "RD",
    name: "Rafael D.",
    role: "Investor, Skyline Crest Apartments",
    quote:
      "I compare rental yield across a dozen listings a week. Being able to just ask the assistant instead of digging through PDFs saved me a genuinely huge amount of time.",
  },
  {
    initials: "PK",
    name: "Priya K.",
    role: "Family buyer, Aurora Cove Villas",
    quote:
      "We had very specific questions about school distance and payment stages. The assistant handled all of it and booked our site visit in the same conversation.",
  },
  {
    initials: "JO",
    name: "James O.",
    role: "Relocating professional, Marina Vista Towers",
    quote:
      "I was messaging from a different time zone. Having instant, accurate answers instead of waiting on email made Aurora Estates feel far more responsive than other developers I contacted.",
  },
];

export const aboutAgency = {
  story:
    "Aurora Estates has been marketing premium residential communities for over a decade. Our team works directly with developers to keep listing details, pricing, and availability accurate, so buyers can trust every answer they get, whether from an agent or from our AI assistant.",
  stats: [
    { value: "12", label: "years in the property market" },
    { value: "3,400+", label: "units sold across active communities" },
    { value: "24", label: "licensed sales agents on staff" },
    { value: "4.8/5", label: "average buyer satisfaction rating" },
  ],
};

export const portfolioHighlights = [
  {
    value: "24/7",
    label: "buyer question handling through a floating chat widget",
  },
  {
    value: `${knowledgeBaseDocuments.length}+`,
    label: "listing, FAQ, and policy documents grounding every answer",
  },
  { value: "1-click", label: "lead capture path for serious property buyers" },
];

export const useCaseTimeline = [
  {
    title: "Problem",
    copy:
      "Property websites attract many interested visitors, but agents lose time answering the same early-stage questions repeatedly.",
  },
  {
    title: "Solution",
    copy:
      "A floating RAG chatbot answers listing and neighborhood questions instantly and stays connected to approved project knowledge.",
  },
  {
    title: "Business win",
    copy:
      "Serious buyers get fast responses, casual visitors self-serve, and agents receive warmer, more qualified leads.",
  },
];

export const featuredProperties = [
  {
    badge: "Waterfront Living",
    name: "Aurora Bay Residences",
    copy:
      "High-rise apartments with marina views, concierge service, and direct access to a curated retail promenade.",
    price: "From 1.45M AED",
    beds: "1-3 Beds",
    type: "Apartments",
    status: "Off-plan",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
  },
  {
    badge: "Family Villas",
    name: "Aurora Cove Villas",
    copy:
      "Private garden villas with clubhouse access, community parks, and flexible installment plans for long-horizon buyers.",
    price: "From 4.8M AED",
    beds: "4-5 Beds",
    type: "Villas",
    status: "Q2 2027",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  },
  {
    badge: "Ready to Move",
    name: "Skyline Crest Apartments",
    copy:
      "City-facing residences near business districts, popular with professionals seeking rental yield and fast occupancy.",
    price: "From 980K AED",
    beds: "Studio-2 Beds",
    type: "Urban",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&q=80",
  },
  {
    badge: "Coastal Premium",
    name: "Seabrook Terrace Homes",
    copy:
      "Low-rise luxury homes near the shore with wellness spaces, boutique retail, and panoramic sunset decks.",
    price: "From 2.9M AED",
    beds: "2-4 Beds",
    type: "Townhomes",
    status: "Launching",
    image: "https://images.unsplash.com/photo-1580216643062-cf460548a66a?w=900&q=80",
  },
  {
    badge: "New Launch",
    name: "Marina Vista Towers",
    copy:
      "A brand-new marina-facing high-rise with a sky lounge, infinity pool, and private marina walk.",
    price: "From 1.9M AED",
    beds: "1-3 Beds",
    type: "Apartments",
    status: "Q4 2027",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80",
  },
  {
    badge: "Gated Community",
    name: "Palm Grove Estates",
    copy:
      "A secure, family-first villa community with jogging tracks, a kids' play area, and round-the-clock security.",
    price: "From 3.6M AED",
    beds: "3-5 Beds",
    type: "Villas",
    status: "Selling Fast",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
  },
  {
    badge: "Urban Loft Living",
    name: "Northbridge Lofts",
    copy:
      "Industrial-style lofts with double-height ceilings, exposed-brick interiors, and on-site co-working lounges.",
    price: "From 1.1M AED",
    beds: "Studio-2 Beds",
    type: "Lofts",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
  },
  {
    badge: "Family Friendly",
    name: "Sunset Ridge Townhomes",
    copy:
      "Landscaped courtyards, a shared pool, and a short walk to top-rated schools make this a favorite for families.",
    price: "From 2.4M AED",
    beds: "3-4 Beds",
    type: "Townhomes",
    status: "Launching",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80",
  },
];

export const serviceCards = [
  {
    icon: CircleDollarSign,
    title: "Price & financing FAQs",
    copy: "Clarifies price ranges, payment plans, booking amounts, and financing guidance.",
  },
  {
    icon: CalendarDays,
    title: "Visit scheduling intent",
    copy: "Detects site-visit interest and prepares the lead for a fast agent callback.",
  },
  {
    icon: Map,
    title: "Location awareness",
    copy: "Answers questions about districts, amenities, commute, and surrounding lifestyle perks.",
  },
  {
    icon: Building2,
    title: "Inventory guidance",
    copy: "Helps visitors explore unit types, handover expectations, and project availability.",
  },
];
