// Rajasthali Tours - Fleet Database
const vehicles = [
  // Luxury Vehicles
  {
    name: "Mercedes-Benz GLS",
    category: "Luxury Vehicles",
    categorySlug: "luxury",
    type: "Ultra Luxury SUV",
    image: "/rajasthalitours_images/luxury_mercedes_benz_car.jpeg",
    capacity: "7 Passengers",
    luggage: "4 Bags",
    ac: true,
    features: ["Chauffeur Driven", "Leather Interiors", "GPS Tracking", "Ambient Lighting", "Panoramic Sunroof"],
    description: "The Mercedes-Benz GLS is the pinnacle of luxury SUVs. Offering unparalleled comfort, status, and space for executive travel and high-end Rajasthan tours."
  },
  {
    name: "Toyota Vellfire",
    category: "Luxury Vehicles",
    categorySlug: "luxury",
    type: "Luxury MPV",
    image: "/rajasthalitours_images/toyota_vellfire_van.jpeg",
    capacity: "7 Passengers",
    luggage: "6 Bags",
    ac: true,
    features: ["Reclining Captain Seats", "Dual Sunroof", "Chauffeur Driven", "Climate Control", "Premium Sound System"],
    description: "Experience lounge-like comfort on wheels with the Toyota Vellfire. Perfect for VIP guest transfers, corporate travel, and family groups looking for ultimate comfort."
  },
  {
    name: "Mercedes-Benz E-Class",
    category: "Luxury Vehicles",
    categorySlug: "luxury",
    type: "Executive Luxury Sedan",
    image: "/rajasthalitours_images/mercedes_benz_car_3.jpg",
    capacity: "4 Passengers",
    luggage: "3 Bags",
    ac: true,
    features: ["Premium Audio", "Plush Leather Seats", "Chauffeur Driven", "Rear Console Control", "Air Suspension"],
    description: "An elegant, premier sedan perfect for corporate travel, wedding convoys, and long-distance sightseeing in Rajasthan with supreme elegance."
  },

  // SUVs & MUVs
  {
    name: "Toyota Fortuner",
    category: "Premium SUVs & MUVs",
    categorySlug: "suvs",
    type: "Premium SUV",
    image: "/rajasthalitours_images/toyota_fortuner_suv.jpg",
    capacity: "7 Passengers",
    luggage: "4 Bags",
    ac: true,
    features: ["4x4 Capability", "High Ground Clearance", "Chauffeur Driven", "Spacious Cabin", "Rugged Comfort"],
    description: "Jaipur's favorite SUV for rugged terrain, outstation road trips, and exploring offbeat Rajasthani heritage sites with a commanding road presence."
  },
  {
    name: "Toyota Innova Crysta",
    category: "Premium SUVs & MUVs",
    categorySlug: "suvs",
    type: "Premium Multi-Utility Vehicle",
    image: "/rajasthalitours_images/suv_car.jpeg",
    capacity: "7 Passengers",
    luggage: "5 Bags",
    ac: true,
    features: ["Dual AC", "Plush Cabin", "Excellent Suspension", "Chauffeur Driven", "Ample Legroom"],
    description: "The gold standard of tourist vehicles in India. Renowned for its reliability, comfort, and smooth ride over long distances across Rajasthan."
  },

  // Tempo Travellers & Vans
  {
    name: "Force Urbania",
    category: "Luxury Vans & Travellers",
    categorySlug: "vans",
    type: "Luxury Passenger Van",
    image: "/rajasthalitours_images/force_urbania_van_1.jpg",
    capacity: "17 Passengers",
    luggage: "12 Bags",
    ac: true,
    features: ["Individual AC Vents", "Push-back Seats", "USB Charging Ports", "Wide View Windows", "High Headroom"],
    description: "The most modern passenger van in India. Featuring aeroplane-like seating comfort, spacious aisles, and huge panoramic windows for stunning sight-seeing."
  },
  {
    name: "Luxury Tempo Traveller",
    category: "Luxury Vans & Travellers",
    categorySlug: "vans",
    type: "Executive Tourist Van",
    image: "/rajasthalitours_images/tour_vehicle_photo_23.jpeg",
    capacity: "12-16 Passengers",
    luggage: "10 Bags",
    ac: true,
    features: ["LCD Screen", "Reclining Seats", "Ample Boot Space", "Chauffeur Driven", "Music System"],
    description: "Specially modified for premium group travel. It features luxury captain seats, high roof, customized lighting, and a top-quality sound system."
  },

  // Coaches & Buses
  {
    name: "Luxury AC Coach",
    category: "Coaches & Passenger Buses",
    categorySlug: "coaches",
    type: "Premium Tourist Coach",
    image: "/rajasthalitours_images/coach_bus_2.jpg",
    capacity: "45 Passengers",
    luggage: "40 Bags",
    ac: true,
    features: ["Air Suspension", "Push-back Luxury Seats", "LED TV & Audio", "Ample Under-deck Luggage", "Experienced Driver & Helper"],
    description: "Perfect for large tour groups, wedding guest transportation, and corporate MICE events across Rajasthan and North India."
  },
  {
    name: "Deluxe Tourist Coach",
    category: "Coaches & Passenger Buses",
    categorySlug: "coaches",
    type: "Large Passenger Bus",
    image: "/rajasthalitours_images/pink_white_coach_bus_3.jpg",
    capacity: "35-41 Passengers",
    luggage: "35 Bags",
    ac: true,
    features: ["Individual AC controls", "Reclining Comfort Seats", "Ample Overhead Storage", "Chauffeur Driven", "PA System"],
    description: "A comfortable and cost-effective coach option for mid-to-large sized tourist groups travelling across major historic cities in India."
  },

  // Economy Sedans
  {
    name: "Honda Amaze / Maruti Suzuki Dzire",
    category: "Economy Sedans",
    categorySlug: "economy",
    type: "Economy Sedan",
    image: "/rajasthalitours_images/economy_car.jpg",
    capacity: "4 Passengers",
    luggage: "2 Bags",
    ac: true,
    features: ["Compact Design", "Highly Economical", "Chauffeur Driven", "Good Boot Space", "Efficient AC"],
    description: "Comfortable and budget-friendly sedans ideal for couples, local Jaipur city sightseeing, and swift airport transfers."
  }
];

// Actual tour photos showing our vehicles on site
const actionPhotos = [
  { path: "/rajasthalitours_images/tour_vehicle_photo_1.webp", caption: "Our luxury Toyota Vellfire parked in Jaipur" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_4.webp", caption: "Toyota Innova Crysta ready for departure" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_5.webp", caption: "Luxury sedan convoy on a Rajasthan highway" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_6.webp", caption: "Force Urbania parked at a tourist destination" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_7.webp", caption: "Chauffeur-driven tourist cab in Jaipur" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_12.webp", caption: "Tourist group Coach Bus on a Rajasthan tour" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_13.webp", caption: "VIP traveller van transfer in Jaipur" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_15.webp", caption: "Toyota Fortuner off-roading in Jaisalmer dunes" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_19.webp", caption: "Our Mercedes GLS outside a luxury Jaipur hotel" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_21.webp", caption: "AC Coach bus during a corporate tour" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_23.jpeg", caption: "Tempo Traveller on site in Udaipur" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_27.jpeg", caption: "Chauffeur standing by our clean luxury SUV" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_28.jpeg", caption: "Our fleet parked outside the office" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_32.webp", caption: "Mercedes E-Class wedding decoration" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_34.jpeg", caption: "Luxury Force Urbania during sunset in Jodhpur" },
  { path: "/rajasthalitours_images/tour_vehicle_photo_35.webp", caption: "Premium Coach Bus group sightseeing" }
];

module.exports = { vehicles, actionPhotos };
