const destinations = [
  {
    slug: "udaipur",
    name: "Udaipur",
    nickname: "City of Lakes",
    distance: 395,
    driveTime: "5–6 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Udaipur Tour",
    metaTitle: "Jaipur to Udaipur Tour by Car | Rajasthali Tours & Travels",
    metaDescription: "Book a comfortable Jaipur to Udaipur taxi or tour package with Rajasthali Tours. Luxury SUVs, AC coaches, and professional chauffeurs for the 395 km scenic drive. Govt. approved operator since 2010.",
    description: "Udaipur, the City of Lakes, is one of Rajasthan's most romantic and visually stunning destinations. Nestled among the Aravalli Hills, the city is defined by shimmering Lake Pichola, the magnificent City Palace, and the floating Lake Palace Hotel — an eternal symbol of Rajput grandeur. Rajasthali Tours has operated this route since 2010, covering 395 km on NH48 and the scenic Udaipur bypass.",
    routeHighlights: [
      "NH48 via Ajmer — passes through Beawar and Madar junction",
      "Scenic Aravalli hill stretches from Rajsamand onwards",
      "Nathdwara temple stopover (30 min detour) — Lord Srinathji",
      "Rajsamand Lake viewpoint before entering Udaipur"
    ],
    topAttractions: [
      { name: "City Palace", detail: "World's largest palace complex on a lake; 400 years of Mewar dynasty history" },
      { name: "Lake Pichola", detail: "2 km × 3 km artificial lake built in 1362 CE; iconic sunset boat rides" },
      { name: "Jag Mandir & Lake Palace", detail: "17th-century island palace; now a 5-star Taj hotel" },
      { name: "Saheliyon Ki Bari", detail: "18th-century garden with lotus pools built for the royal ladies-in-waiting" },
      { name: "Bagore Ki Haveli", detail: "83-room haveli with Rajasthani folk dance performances every evening" },
      { name: "Monsoon Palace (Sajjangarh)", detail: "Hilltop palace 944 m above sea level; panoramic views of the Aravallis" }
    ],
    bestTimeToVisit: "October to March (pleasant weather; peak season Nov–Feb)",
    avoidMonths: "May–June (extreme heat, 42–45°C)",
    recommendedVehicle: "Toyota Fortuner or Toyota Vellfire",
    vehicleReason: "The Aravalli terrain and Udaipur's hilly roads benefit from a higher-clearance SUV; Fortuner is ideal for 4–5 pax, Vellfire for families wanting captain seats.",
    popularTours: [
      "Jaipur–Udaipur day trip (one-way drop)",
      "2-night Udaipur heritage circuit",
      "Rajasthan Golden Triangle extension: Jaipur–Pushkar–Udaipur",
      "Udaipur–Mount Abu 2-day combo"
    ],
    faqs: [
      {
        q: "How long is the drive from Jaipur to Udaipur?",
        a: "The distance is approximately 395 km via NH48. With a professional Rajasthali chauffeur the drive takes 5–6 hours including a short break at Nathdwara or Rajsamand."
      },
      {
        q: "Which vehicle is best for a family trip to Udaipur?",
        a: "The Toyota Fortuner (7-seater SUV) is our most popular pick for Udaipur due to its comfort on highway and hilly city roads. For 6–7 pax wanting captain seats and a luxury feel, the Toyota Vellfire is the premium choice."
      },
      {
        q: "Can I add a Nathdwara stopover?",
        a: "Yes. Nathdwara is just 48 km before Udaipur on the same highway. We build in a 30–45 minute stop at the Srinathji temple at no extra charge when requested at the time of booking."
      },
      {
        q: "Does Rajasthali Tours offer return trips from Udaipur to Jaipur?",
        a: "We offer one-way drop, round-trip with waiting, and outstation packages starting from ₹4,800 for a sedan to ₹9,500+ for an SUV. Call +91 97853 07799 for exact quotes."
      }
    ],
    nearbyFrom: ["Pushkar (140 km from Udaipur)", "Mount Abu (160 km from Udaipur)", "Chittorgarh (115 km from Udaipur)"]
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    nickname: "Blue City",
    distance: 335,
    driveTime: "4.5–5.5 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Jodhpur Tour",
    metaTitle: "Jaipur to Jodhpur Taxi & Tour Package | Rajasthali Tours & Travels",
    metaDescription: "Reliable Jaipur to Jodhpur cab and tour packages by Rajasthali Tours. 335 km via NH62 with luxury sedans, SUVs, and coaches. IATA-certified, govt-approved. Book now.",
    description: "Jodhpur, the Blue City, sits at the edge of the Thar Desert and is dominated by the awe-inspiring Mehrangarh Fort — one of India's largest and best-preserved forts. The cobalt-blue painted houses of Brahmpuri create a mesmerizing skyline visible from the fort ramparts. At 335 km from Jaipur via NH62, this is one of the most frequently operated routes by Rajasthali Tours.",
    routeHighlights: [
      "NH62 via Nagaur — flat highway with minimal traffic for faster travel",
      "Nagaur Fort (optional 1-hour stopover) — 4th-century Rajput fort",
      "Osian sand dunes — Rajasthan's Khajuraho en route",
      "Kailana Lake viewpoint on approach to Jodhpur"
    ],
    topAttractions: [
      { name: "Mehrangarh Fort", detail: "410-foot-high fort with 7 gates; museum holds Rajput armour and paintings" },
      { name: "Jaswant Thada", detail: "White marble cenotaph with intricate jaali screens; 5 min from Mehrangarh" },
      { name: "Umaid Bhawan Palace", detail: "Largest private residence in the world; part royal family home, part luxury hotel" },
      { name: "Clock Tower Bazaar (Sardar Market)", detail: "1.5 km market for spices, textiles, and Jodhpuri jootis" },
      { name: "Rao Jodha Desert Rock Park", detail: "72-hectare park at the base of Mehrangarh; native flora and desert ecosystem" },
      { name: "Balsamand Lake", detail: "11th-century man-made lake; heritage garden hotel on the banks" }
    ],
    bestTimeToVisit: "October to February (cool, clear skies; ideal for fort exploration)",
    avoidMonths: "April–June (temperatures touch 46°C in the desert city)",
    recommendedVehicle: "Toyota Innova Crysta or Toyota Fortuner",
    vehicleReason: "NH62 is a smooth, well-maintained highway. Innova Crysta is our most economical 7-seater for this flat route; Fortuner preferred for larger families or self-drive comfort.",
    popularTours: [
      "Jaipur–Jodhpur one-way drop",
      "Jodhpur–Jaisalmer 2-day extension",
      "Rajasthan circuit: Jaipur–Jodhpur–Udaipur",
      "Osian Desert Safari day trip from Jodhpur"
    ],
    faqs: [
      {
        q: "How far is Jodhpur from Jaipur by road?",
        a: "Jodhpur is approximately 335 km from Jaipur via NH62 (through Nagaur). The drive takes 4.5 to 5.5 hours depending on traffic, typically less than the Udaipur route."
      },
      {
        q: "What are the must-see stops between Jaipur and Jodhpur?",
        a: "Nagaur is the most popular en-route stop — the Nagaur Fort and its annual cattle fair are worth a 45-minute visit. Osian, 65 km before Jodhpur, is another option for ancient Jain and Hindu temples plus a mini desert landscape."
      },
      {
        q: "Is there an overnight train option and should I book a cab from Jaipur instead?",
        a: "Yes, the overnight Mandore Express runs Jaipur–Jodhpur, but it departs late evening and offers limited flexibility. Our cab service gives you door-to-door pickup, flexibility to stop at Nagaur or Osian, and is often the better choice for families or corporate groups."
      },
      {
        q: "Can you arrange a Jodhpur–Jaisalmer extension?",
        a: "Absolutely. Jaisalmer is 295 km from Jodhpur (around 4 hours). We offer a seamless 3-city package: Jaipur → Jodhpur → Jaisalmer with fixed pricing. Contact our reservations team at reservation@rajasthalitours.com."
      }
    ],
    nearbyFrom: ["Jaisalmer (295 km from Jodhpur)", "Osian (65 km from Jodhpur)", "Nagaur (135 km from Jodhpur)"]
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    nickname: "Golden City",
    distance: 565,
    driveTime: "7–8 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Jaisalmer Tour",
    metaTitle: "Jaipur to Jaisalmer Tour Package & Taxi | Rajasthali Tours",
    metaDescription: "Book Jaipur to Jaisalmer taxi, cab, or tour package with Rajasthali Tours. 565 km route via Jodhpur with luxury vehicles. Govt-approved, IATA-certified. Desert safari add-ons available.",
    description: "Jaisalmer, the Golden City, rises from the Thar Desert like a sandcastle kingdom. Its honey-coloured sandstone fort — a UNESCO World Heritage Site — is one of the world's few living forts, with residents still living and trading within its 12th-century walls. At 565 km from Jaipur, this is the longest route we commonly operate and best covered overnight or as a 2-day journey via Jodhpur.",
    routeHighlights: [
      "NH62 to Jodhpur (first 335 km) — smooth highway",
      "NH125 post-Jodhpur — desert landscape begins at Phalodi",
      "Sam Sand Dunes visible 42 km before Jaisalmer",
      "Kuldhara ghost village — abandoned 13th-century Paliwal Brahmin settlement"
    ],
    topAttractions: [
      { name: "Jaisalmer Fort (Sonar Quila)", detail: "UNESCO World Heritage living fort; 30 bastions, 12th century; occupied by 3,000+ residents" },
      { name: "Patwon Ki Haveli", detail: "5-storey 19th-century merchant mansion with 60 rooms of golden filigree work" },
      { name: "Sam Sand Dunes", detail: "45 km from city; camel safari, jeep safari, and overnight luxury camps" },
      { name: "Gadisar Lake", detail: "14th-century reservoir; sunrise boat rides; 900 shrines surrounding the shore" },
      { name: "Desert National Park", detail: "3,162 sq km sanctuary — habitat of the critically endangered Great Indian Bustard" },
      { name: "Bada Bagh Cenotaphs", detail: "Royal cremation site with medieval chhatris; dramatic at sunset" }
    ],
    bestTimeToVisit: "November to February (cool nights, 5–15°C; ideal for desert camps)",
    avoidMonths: "May–July (peak desert heat, 48°C possible in June)",
    recommendedVehicle: "Toyota Fortuner or Force Urbania (for groups)",
    vehicleReason: "The desert tracks near Sam Dunes require a vehicle with ground clearance. The Fortuner handles sand approaches well. For groups of 12–17, the Force Urbania with push-back seats makes the long journey comfortable.",
    popularTours: [
      "2-night Jaisalmer desert experience (fort + dunes + overnight camp)",
      "Jaipur–Jodhpur–Jaisalmer 5-night Rajasthan circuit",
      "Jaisalmer camel safari + cultural evening",
      "Khuri Sand Dunes off-beat alternative"
    ],
    faqs: [
      {
        q: "What is the best way to travel from Jaipur to Jaisalmer?",
        a: "For comfort and flexibility, our luxury cab service via NH62 is ideal — stopping at Jodhpur for lunch and Kuldhara village. The train (Jaisalmer Express) runs overnight but does not permit day sightseeing stops."
      },
      {
        q: "Can we stop at Jodhpur on the way to Jaisalmer?",
        a: "Yes. Most of our Jaisalmer packages include a Jodhpur stopover for 3–4 hours (Mehrangarh Fort or Umaid Bhawan Palace). This turns a one-day drive into a comfortable two-city itinerary."
      },
      {
        q: "Do you arrange desert camp stays at Jaisalmer?",
        a: "We partner with curated desert camps at Sam and Khuri dunes offering Swiss tents, cultural evenings, and camel safaris. We can bundle transport + camp into one fixed-price package. Enquire at reservation@rajasthalitours.com."
      },
      {
        q: "How many days should I plan for Jaisalmer?",
        a: "We recommend a minimum of 2 nights: Day 1 for the fort, havelis, and Gadisar Lake; Day 2 for Sam Sand Dunes and a desert sunset. Add a third night for the National Park jeep safari."
      }
    ],
    nearbyFrom: ["Sam Sand Dunes (42 km)", "Khuri Dunes (40 km)", "Longewala War Memorial (120 km)"]
  },
  {
    slug: "agra",
    name: "Agra",
    nickname: "City of the Taj",
    distance: 240,
    driveTime: "3.5–4.5 hours",
    stateWithin: "Uttar Pradesh",
    heroKeyword: "Jaipur to Agra Tour",
    metaTitle: "Jaipur to Agra Taxi & Same-Day Tour | Rajasthali Tours & Travels",
    metaDescription: "Jaipur to Agra cab and tour packages by Rajasthali Tours. 240 km via Fatehpur Sikri. See the Taj Mahal same-day or overnight. Luxury vehicles, professional drivers. Book +91 97853 07799.",
    description: "Agra, home to the Taj Mahal — the world's most recognised monument of love — is Rajasthali Tours' most popular outstation route from Jaipur. At just 240 km via NH21, Agra is the most accessible leg of the famous Golden Triangle (Delhi–Agra–Jaipur). Our chauffeurs have completed this route hundreds of times and are familiar with Taj Mahal entry timings, sunrise slots, and the best parking approaches.",
    routeHighlights: [
      "NH21 via Bharatpur — passes the Keoladeo Bird Sanctuary (UNESCO)",
      "Fatehpur Sikri — Mughal ghost capital, 40 km before Agra; highly recommended 1-hour stop",
      "Darah Wildlife Sanctuary viewpoint near Karauli",
      "Agra cantonment and the first views of the Taj dome on approach"
    ],
    topAttractions: [
      { name: "Taj Mahal", detail: "UNESCO World Heritage; built 1631–1648 by Shah Jahan; sunrise entry recommended for golden light" },
      { name: "Agra Fort", detail: "UNESCO heritage red sandstone fort; holds Diwan-i-Am, Diwan-i-Khas, and Shah Jahan's marble pavilions" },
      { name: "Fatehpur Sikri", detail: "Abandoned Mughal capital 40 km from Agra; Buland Darwaza is India's tallest gateway" },
      { name: "Mehtab Bagh", detail: "Moonlight garden across the river from Taj Mahal; best opposite-angle views" },
      { name: "Itmad-ud-Daulah (Baby Taj)", detail: "First Mughal structure built entirely in white marble; precursor to the Taj" },
      { name: "Kinari Bazaar", detail: "Narrow old-city market for marble inlay work, leather, and Petha sweet" }
    ],
    bestTimeToVisit: "October to March (comfortable 10–25°C; avoid hazy monsoon season for Taj views)",
    avoidMonths: "May–June (45°C heat; outdoor monuments unbearable midday)",
    recommendedVehicle: "Toyota Innova Crysta or Honda Amaze (for solo/couple)",
    vehicleReason: "NH21 to Agra is a well-maintained highway. For 4–5 pax the Innova Crysta offers the best comfort-to-cost ratio. Couples or solo travellers often choose the Honda Amaze for economy.",
    popularTours: [
      "Jaipur–Agra same-day sunrise Taj Mahal trip",
      "Golden Triangle: Jaipur–Agra–Delhi (3 days)",
      "Jaipur–Fatehpur Sikri–Agra with Bharatpur Bird Sanctuary",
      "Agra overnight with Mehtab Bagh moonrise viewing"
    ],
    faqs: [
      {
        q: "Can we do a Jaipur to Agra same-day trip for the Taj Mahal?",
        a: "Yes, this is our most requested itinerary. We depart Jaipur at 5:00 AM, reach Agra by 9:00 AM (sunrise entry window), spend 4–5 hours at Taj Mahal and Agra Fort, and return by evening. A Fatehpur Sikri stop extends the return to night."
      },
      {
        q: "What is the best time to visit the Taj Mahal?",
        a: "Sunrise (opening: 30 minutes before sunrise) is the most recommended slot — golden light falls directly on the marble, there are fewer crowds, and air quality is best in early morning. We plan our Jaipur departure accordingly."
      },
      {
        q: "Is Fatehpur Sikri worth a stop on the way?",
        a: "Absolutely. Fatehpur Sikri takes about 1 hour to explore and is only 40 km from Agra on the same NH21. It is less crowded than the Taj and gives a powerful sense of Mughal architecture. We recommend adding it on the return leg."
      },
      {
        q: "How much does a Jaipur to Agra cab cost with Rajasthali Tours?",
        a: "One-way sedan starts from ₹2,800; Innova Crysta from ₹3,800; SUV from ₹4,500. Round-trip rates include toll and parking. Call +91 97853 07799 for a custom quote."
      }
    ],
    nearbyFrom: ["Fatehpur Sikri (40 km from Agra)", "Bharatpur (55 km from Agra)", "Mathura (58 km from Agra)"]
  },
  {
    slug: "pushkar",
    name: "Pushkar",
    nickname: "Sacred Lake Town",
    distance: 147,
    driveTime: "2.5–3 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Pushkar Tour",
    metaTitle: "Jaipur to Pushkar Taxi & Day Trip | Rajasthali Tours & Travels",
    metaDescription: "Book a Jaipur to Pushkar cab or day-trip tour with Rajasthali Tours. 147 km via Ajmer, visit the famous Pushkar Camel Fair, Brahma Temple, and Pushkar Lake. Govt-approved travel.",
    description: "Pushkar is one of India's oldest and most sacred towns, built around the holy Pushkar Lake where pilgrims have bathed for over 2,000 years. It is home to the world's only Brahma temple and transforms every November into Asia's largest camel fair — the Pushkar Camel Fair — attracting 200,000+ visitors. At just 147 km from Jaipur via NH48, Pushkar is our most popular day-trip destination.",
    routeHighlights: [
      "NH48 via Ajmer — 130 km of smooth highway before the Pushkar turn",
      "Ajmer Sharif Dargah stopover (optional 45 min) — one of South Asia's most visited Sufi shrines",
      "Nag Pahad mountain crossing — serpentine 8 km road from Ajmer to Pushkar with valley views",
      "First sight of Pushkar from the hills — white town surrounding the sacred lake"
    ],
    topAttractions: [
      { name: "Brahma Temple", detail: "One of only 3 Brahma temples in India; 14th century; vermillion-coloured spire" },
      { name: "Pushkar Lake (Sarovar)", detail: "Sacred lake with 52 ghats; religious ceremonies at sunrise and sunset" },
      { name: "Pushkar Camel Fair (November)", detail: "World's largest camel fair; 50,000 camels, 200,000 visitors; desert Olympics events" },
      { name: "Savitri Temple", detail: "Hilltop goddess temple; ropeway available; panoramic views of the town and desert" },
      { name: "Pushkar Bazaar", detail: "Colourful market for tie-dye fabrics, silver jewellery, and Rajasthani handicrafts" },
      { name: "Rangji Temple", detail: "Vaishnava temple combining Rajput and South Indian Dravidian architecture" }
    ],
    bestTimeToVisit: "October to March; November for Camel Fair (book 6+ months ahead during fair week)",
    avoidMonths: "May–June (extreme heat; ghats become crowded with fewer visitors)",
    recommendedVehicle: "Honda Amaze or Toyota Innova Crysta",
    vehicleReason: "The Nag Pahad section from Ajmer to Pushkar is a winding mountain road — our chauffeurs navigate it daily. Any vehicle handles it fine; the Innova is preferred for families with luggage.",
    popularTours: [
      "Jaipur–Pushkar–Ajmer same-day combo",
      "Pushkar Camel Fair package (November)",
      "2-night spiritual circuit: Jaipur–Ajmer–Pushkar",
      "Pushkar–Udaipur (via Chittorgarh) 3-day extension"
    ],
    faqs: [
      {
        q: "Is Pushkar worth a day trip from Jaipur?",
        a: "Yes. With a 5:30–6:00 AM departure from Jaipur you can reach Pushkar by 8:30 AM, visit the Brahma Temple and ghats for sunrise prayers, spend the day at the market and Savitri Temple, and return by 7 PM. Ajmer Dargah can be added on the same route."
      },
      {
        q: "When is the Pushkar Camel Fair and how do I plan transport?",
        a: "The fair runs for 5 days in October–November around the Kartik Purnima full moon (usually November). We see 3–4× usual booking demand during fair week. Book your Jaipur–Pushkar transport and Pushkar accommodation at least 4–6 months in advance."
      },
      {
        q: "Can non-Hindus visit the Pushkar Lake ghats?",
        a: "Yes, all visitors are welcome at the ghats. However, shoes must be removed, leather items kept away, and photography is restricted during rituals. Our drivers brief all guests on local etiquette before arrival."
      },
      {
        q: "Is Ajmer Dargah worth a stopover on the Jaipur–Pushkar route?",
        a: "Absolutely. The Ajmer Sharif Dargah (shrine of Khwaja Moinuddin Chishti) is one of South Asia's most important Sufi pilgrimage sites. It's right on the route (130 km from Jaipur). A 45-minute stop is easy to add."
      }
    ],
    nearbyFrom: ["Ajmer (11 km from Pushkar)", "Merta (70 km from Pushkar)", "Nagaur (120 km from Pushkar)"]
  },
  {
    slug: "bikaner",
    name: "Bikaner",
    nickname: "Camel Country",
    distance: 330,
    driveTime: "4.5–5 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Bikaner Tour",
    metaTitle: "Jaipur to Bikaner Cab & Tour Package | Rajasthali Tours & Travels",
    metaDescription: "Reliable Jaipur to Bikaner taxi and tour packages with Rajasthali Tours. 330 km via NH52. Visit Junagarh Fort, Camel Research Farm, and Karni Mata Temple. Book online or call us.",
    description: "Bikaner is Rajasthan's underrated desert gem — a walled city built by Rao Bika in 1488, filled with magnificent havelis, camel farms, and the extraordinary Junagarh Fort that was never conquered in its 500-year history. Its famous Bikaner bikaneri bhujia snack and the National Camel Research Centre (the only one in Asia) make it a distinctive stop on any Rajasthan itinerary.",
    routeHighlights: [
      "NH52 via Sikar — fastest route at 330 km; passes through the Shekhawati belt",
      "Mandawa (optional 1-hour detour) — painted havelis of the Shekhawati merchants",
      "Fatehpur Shekhawati — open-air museum of murals; off NH52",
      "Bikaner entry through the old city gates — camel carts still in use"
    ],
    topAttractions: [
      { name: "Junagarh Fort", detail: "Never conquered 500-year-old fort; 37 palaces and temples within; military trophies museum" },
      { name: "National Camel Research Centre", detail: "Asia's only camel research farm; 200+ camels; camel milk products for purchase" },
      { name: "Karni Mata Temple (Deshnok)", detail: "30 km from Bikaner; famous Rat Temple housing 20,000+ holy rats" },
      { name: "Lalgarh Palace", detail: "Red sandstone Indo-Saracenic palace with a heritage hotel; museum of royal artifacts" },
      { name: "Bikaneri Haveli Heritage Walk", detail: "Self-guided or guided walk through 5 merchant havelis with intricate frescoes" },
      { name: "Camel Safari (Raisar Desert)", detail: "15 km from city; sunrise/sunset camel safaris through rolling sand dunes" }
    ],
    bestTimeToVisit: "October to February (desert cold, 5–20°C; Bikaner Camel Festival in January)",
    avoidMonths: "April–July (desert heat above 44°C)",
    recommendedVehicle: "Toyota Innova Crysta or Force Urbania (for groups)",
    vehicleReason: "NH52 is a well-maintained national highway. The Innova Crysta handles the 330 km comfortably; Force Urbania for larger groups or corporate teams attending conferences in Bikaner.",
    popularTours: [
      "Jaipur–Mandawa–Bikaner 2-day Shekhawati tour",
      "Bikaner Camel Festival day trip (January)",
      "Bikaner–Jaisalmer 2-day desert extension",
      "Karni Mata Rat Temple half-day excursion from Bikaner"
    ],
    faqs: [
      {
        q: "What is the best route from Jaipur to Bikaner?",
        a: "NH52 via Sikar and Churu is the fastest and most scenic option at 330 km (approximately 4.5–5 hours). If you have an extra day, the Shekhawati detour through Mandawa and Fatehpur adds 2 hours but is worth it for the painted haveli frescoes."
      },
      {
        q: "Is the Karni Mata Rat Temple worth visiting?",
        a: "Yes — it is genuinely unique. The temple at Deshnok (30 km from Bikaner) houses thousands of rats considered sacred descendants of the goddess. It's unlike any other temple in India and takes about 45 minutes. Our drivers include it on most Bikaner itineraries."
      },
      {
        q: "When is the Bikaner Camel Festival?",
        a: "The Bikaner International Camel Festival is held every January (usually 3rd week). Events include camel races, camel beauty contests, and folk performances at Junagarh Fort. Transport demand spikes during this period — book 8–10 weeks in advance."
      },
      {
        q: "Can I do Jaipur to Bikaner as a day trip?",
        a: "It is technically possible (330 km, ~5 hrs each way) but very rushed. We recommend at least one overnight in Bikaner to see Junagarh Fort, the Camel Research Centre, and an evening camel safari."
      }
    ],
    nearbyFrom: ["Deshnok Karni Mata (30 km)", "Kolayat Lake (50 km)", "Mandawa (175 km from Bikaner)"]
  },
  {
    slug: "mount-abu",
    name: "Mount Abu",
    nickname: "Rajasthan's Only Hill Station",
    distance: 485,
    driveTime: "6.5–7.5 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Mount Abu Tour",
    metaTitle: "Jaipur to Mount Abu Cab & Hill Station Tour | Rajasthali Tours",
    metaDescription: "Book Jaipur to Mount Abu taxi or tour package with Rajasthali Tours. 485 km via Udaipur. Rajasthan's only hill station at 1,220 m. Dilwara Temples, Nakki Lake & Guru Shikhar. Govt-approved.",
    description: "Mount Abu is Rajasthan's only hill station, rising to 1,220 metres above sea level in the Aravalli Range. It is a beloved retreat from the desert heat, home to the breathtakingly intricate Dilwara Jain Temples — widely considered the finest examples of marble craftsmanship in the world — and the serene Nakki Lake. Most travellers combine Mount Abu with Udaipur as a 2-day extension.",
    routeHighlights: [
      "NH48 to Udaipur (395 km) — optional lunch stop in Udaipur",
      "NH27 from Udaipur towards Abu Road (70 km)",
      "Mountain ascent from Abu Road to Mount Abu — 28 km of hairpin bends through forests",
      "Arrival at 1,220 m — temperature drops 10–15°C compared to Jaipur"
    ],
    topAttractions: [
      { name: "Dilwara Temples", detail: "5 Jain temples built 11th–16th century; Luna Vasahi ceiling carved from single marble slab in 1230 CE" },
      { name: "Nakki Lake", detail: "Sacred lake at 1,200 m; boating, Toad Rock viewpoint, sunset promenade" },
      { name: "Guru Shikhar", detail: "Rajasthan's highest peak at 1,722 m; Vishnu temple at summit; telescopic views" },
      { name: "Sunset Point", detail: "Most popular sunset viewpoint; 180° view of the Gujarat plains below the Aravallis" },
      { name: "Achalgarh Fort", detail: "15th-century Paramara fort with Shiva temple; forested trekking trail" },
      { name: "Trevor's Tank", detail: "British-era crocodile sanctuary; early morning sightings of marsh crocodiles" }
    ],
    bestTimeToVisit: "March to June (escape Rajasthan heat; 20–30°C at the hill station), November to February (cool and misty)",
    avoidMonths: "July–September (monsoon; roads to hill can be foggy and slippery)",
    recommendedVehicle: "Toyota Fortuner or Toyota Vellfire",
    vehicleReason: "The 28 km mountain ascent from Abu Road has sharp hairpin bends and requires a vehicle with good engine braking and ground clearance. Our Fortuner drivers are experienced on this mountain road. Vellfire is used for corporate VIP trips.",
    popularTours: [
      "Jaipur–Udaipur–Mount Abu 3-day combo",
      "Mount Abu summer retreat (March–June)",
      "Dilwara Temples pilgrimage day trip",
      "Abu Road to Guru Shikhar sunrise hike"
    ],
    faqs: [
      {
        q: "How do I get from Jaipur to Mount Abu by road?",
        a: "The most comfortable route is NH48 via Udaipur (395 km) then NH27 to Abu Road, followed by the 28 km mountain ascent. Total distance: ~485 km, approximately 7 hours. Our drivers are familiar with the mountain road and schedule the ascent during daylight."
      },
      {
        q: "Is Mount Abu safe during monsoon?",
        a: "Mount Abu receives heavy rainfall July–September. The mountain road can become foggy and slippery. We operate on this route year-round but advise confirming road conditions closer to the travel date. We'll reroute or reschedule if conditions are unsafe."
      },
      {
        q: "Are Dilwara Temples photography-allowed?",
        a: "No photography or video is permitted inside the Dilwara temple complex. Entry is free but restricted to non-Jains during certain prayer hours. Modest dress is required and mobile phones must be deposited at the entrance."
      },
      {
        q: "Should we combine Mount Abu with Udaipur?",
        a: "Strongly recommended. Udaipur is only 160 km from Mount Abu. A 3-day itinerary — Jaipur → Udaipur (overnight) → Mount Abu (overnight) → return — is our most popular hill station package."
      }
    ],
    nearbyFrom: ["Abu Road (28 km below Mount Abu)", "Ambaji Temple (45 km)", "Udaipur (160 km)"]
  },
  {
    slug: "ranthambore",
    name: "Ranthambore",
    nickname: "Land of the Tiger",
    distance: 180,
    driveTime: "2.5–3 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Ranthambore Safari Tour",
    metaTitle: "Jaipur to Ranthambore Tiger Safari Tour | Rajasthali Tours & Travels",
    metaDescription: "Book a Jaipur to Ranthambore National Park cab and safari package with Rajasthali Tours. 180 km via Tonk. Best tiger reserve in India. Luxury vehicles + gypsy safari arrangements.",
    description: "Ranthambore National Park is India's most celebrated tiger reserve, covering 1,334 sq km of dry deciduous forest within an ancient fort landscape. Home to approximately 70 Bengal tigers, it offers the country's highest tiger sighting probability. At only 180 km from Jaipur via the Tonk route, it is the easiest national park day trip or weekend getaway from the Pink City.",
    routeHighlights: [
      "NH48 to Tonk (96 km) — then SH52 towards Sawai Madhopur",
      "Tonk — 17th-century Nawabi city with ornate Sunehri Kothi",
      "Sawai Madhopur — gateway town to Ranthambore; 14 km from park gates",
      "Ranthambore Fort approach — UNESCO heritage fort inside the national park"
    ],
    topAttractions: [
      { name: "Ranthambore National Park Safari", detail: "Gypsy (open 6-seater) and Canter (20-seater) safaris; Zone 1–10; Zones 3, 4, 5 best for tiger sightings" },
      { name: "Ranthambore Fort", detail: "10th-century fort inside the park; Ganesh temple; spectacular elevated views over lakes" },
      { name: "Padam Talao", detail: "Park's largest lake; resident mugger crocodiles; tigers regularly drink here" },
      { name: "Rajbagh Ruins & Lake", detail: "Medieval ruins surrounded by water; spectacular wildlife photography location" },
      { name: "Malik Talao Bird Lake", detail: "Marsh crocodile territory; winter migratory birds including bar-headed geese" },
      { name: "Kachida Valley", detail: "Rocky terrain; leopard and sloth bear sightings more frequent than tiger zones" }
    ],
    bestTimeToVisit: "October to June (park open); October–November and February–May best for sightings (tigers near water sources in heat)",
    avoidMonths: "July–September (park closed for monsoon season)",
    recommendedVehicle: "Toyota Innova Crysta or Toyota Fortuner",
    vehicleReason: "The Jaipur–Ranthambore highway is smooth, but Sawai Madhopur town roads can be bumpy. The Fortuner's ground clearance is comfortable; Innova Crysta is the economical choice for families who book gypsies separately inside the park.",
    popularTours: [
      "Jaipur–Ranthambore same-day safari trip",
      "2-night Ranthambore wildlife package (2 safaris)",
      "Ranthambore + Bundi heritage 2-day extension",
      "Ranthambore morning + Keoladeo Bird Sanctuary evening"
    ],
    faqs: [
      {
        q: "How do I book a safari at Ranthambore National Park?",
        a: "Safari permits are issued by the Rajasthan Forest Department through the official portal (rajasthanwildlife.in). Rajasthali Tours assists with permit bookings for our guests — inform us at the time of vehicle booking and we will guide you through the process."
      },
      {
        q: "Which safari zone has the best tiger sighting probability at Ranthambore?",
        a: "Zones 3, 4, and 5 are historically the most productive zones. Zone 3 covers Rajbagh Lake and Ranthambore Fort; Zone 4 is Lahpur area; Zone 5 is Malik Talao. However, tiger movements are unpredictable and zone availability changes daily."
      },
      {
        q: "What time do safaris start at Ranthambore?",
        a: "There are two daily safaris: morning (typically 6:30–10:00 AM) and afternoon (2:30–6:00 PM in summer; later in winter). For a same-day trip from Jaipur, we depart at 4:00 AM to reach the morning safari gate opening on time."
      },
      {
        q: "Is Ranthambore suitable for children?",
        a: "Children above 6 years are permitted on safaris. It is excellent for families — the open gypsy experience, wildlife sightings, and the ancient fort make it one of the most engaging day trips from Jaipur for all ages."
      }
    ],
    nearbyFrom: ["Sawai Madhopur (14 km from park)", "Bundi (88 km from Ranthambore)", "Keoladeo (Bharatpur) Bird Sanctuary (165 km)"]
  },
  {
    slug: "delhi",
    name: "Delhi",
    nickname: "Capital City",
    distance: 280,
    driveTime: "4–5 hours",
    stateWithin: "Delhi NCR",
    heroKeyword: "Jaipur to Delhi Tour",
    metaTitle: "Jaipur to Delhi Taxi & Outstation Cab | Rajasthali Tours & Travels",
    metaDescription: "Book a reliable Jaipur to Delhi cab or taxi with Rajasthali Tours. 280 km via NH48 Jaipur–Delhi Expressway. Luxury sedans, SUVs, and coaches. Airport drop also available. Book now.",
    description: "Delhi, India's capital, is the most frequently booked outstation route from Jaipur by both corporate and leisure travellers. At 280 km via the 6-lane Jaipur–Delhi Expressway (NH48), Rajasthali Tours has refined this route for maximum comfort — with rest stop recommendations, traffic pattern knowledge for Delhi entry, and both Indira Gandhi International Airport and central Delhi hotel deliveries.",
    routeHighlights: [
      "NH48 — India's busiest national highway; 6 lanes from Jaipur to Delhi",
      "Shahpura–Behror toll stretch — most congested section; we time departures to avoid",
      "Neemrana Fort rest stop (145 km mark) — heritage fort with café on the highway",
      "Gurugram industrial corridor before entering Delhi NCR"
    ],
    topAttractions: [
      { name: "Red Fort (Lal Qila)", detail: "UNESCO World Heritage; Mughal fort built 1639; Light & Sound show evenings" },
      { name: "Qutub Minar", detail: "UNESCO heritage; 73-metre minaret built 1193; oldest mosque in India within complex" },
      { name: "Humayun's Tomb", detail: "UNESCO heritage; 1570 CE Mughal mausoleum; architectural precursor to the Taj Mahal" },
      { name: "India Gate", detail: "WWI memorial; surrounding Kartavya Path for evening walks; Rashtrapati Bhavan views" },
      { name: "Old Delhi (Chandni Chowk)", detail: "Mughal bazaar street with parathe wali gali, silver market, and Jama Masjid" },
      { name: "Lotus Temple", detail: "UNESCO-commended Bahá'í House of Worship; meditation hall open to all faiths" }
    ],
    bestTimeToVisit: "October to March (pleasant 10–25°C; avoid December–January foggy mornings on highway)",
    avoidMonths: "November (dense Delhi smog, AQI often 400+; highway visibility can drop); May–June (highway heat)",
    recommendedVehicle: "Toyota Innova Crysta, Honda Amaze, or Luxury AC Coach",
    vehicleReason: "NH48 is a premium expressway. The Innova Crysta is most popular for 4–5 pax. For solo or couple travellers, the Honda Amaze is economical. For 20–45 pax corporate or wedding groups, our Luxury AC Coaches are fully equipped with onboard entertainment.",
    popularTours: [
      "Jaipur–Delhi direct drop (6 AM departure to avoid Gurugram traffic)",
      "Golden Triangle return: Jaipur–Agra–Delhi (3 days)",
      "Delhi airport pickup and Jaipur drop",
      "Corporate bulk bookings: Jaipur–Delhi conference shuttle"
    ],
    faqs: [
      {
        q: "How long does Jaipur to Delhi take by car?",
        a: "280 km via NH48 takes 4–5 hours in normal conditions. We recommend departing before 6:00 AM or after 10:00 AM to avoid Gurugram morning rush hour. Our drivers monitor real-time traffic via Waze and Google Maps to adjust routes."
      },
      {
        q: "Can I book a Jaipur to Delhi airport drop?",
        a: "Yes. IGI Airport drops are one of our most common requests. We coordinate with your flight time, add a 2-hour buffer for check-in, and track any expressway delays. Night departures for 4–5 AM flights are available."
      },
      {
        q: "What is the toll cost from Jaipur to Delhi?",
        a: "Total toll on NH48 is approximately ₹430–470 for a car (FASTag enabled). For larger vehicles (SUV, Innova) tolls are slightly higher. All toll costs are included in our final quoted price — no surprises on the trip."
      },
      {
        q: "Is the Jaipur–Delhi Expressway safe to travel at night?",
        a: "NH48 is well-lit, has service lanes, and is patrolled by highway police. Our drivers are experienced on this route at all hours. For late-night departures, we brief drivers on rest stop safety and minimise overnight stops."
      }
    ],
    nearbyFrom: ["Gurugram (10 km from Delhi)", "Noida (20 km from Delhi)", "Neemrana (135 km from Jaipur)"]
  },
  {
    slug: "ajmer",
    name: "Ajmer",
    nickname: "City of the Dargah",
    distance: 135,
    driveTime: "2–2.5 hours",
    stateWithin: "Rajasthan",
    heroKeyword: "Jaipur to Ajmer Tour",
    metaTitle: "Jaipur to Ajmer Cab & Dargah Visit | Rajasthali Tours & Travels",
    metaDescription: "Book Jaipur to Ajmer taxi and Ajmer Sharif Dargah tour with Rajasthali Tours. 135 km via NH48. Combined Pushkar visits available. Govt-approved, professional drivers. Call +91 97853 07799.",
    description: "Ajmer is one of India's most important pilgrimage cities, home to the Ajmer Sharif Dargah — the shrine of Sufi saint Khwaja Moinuddin Chishti, drawing over 1.5 million visitors annually from across faiths. It sits on Ana Sagar Lake and is the gateway to Pushkar, just 11 km beyond the Nag Pahad pass. Rajasthali Tours operates this as both a standalone pilgrimage route and as part of the Jaipur–Ajmer–Pushkar combo.",
    routeHighlights: [
      "NH48 — 135 km of smooth 4-lane highway; typically 2 hours without stops",
      "Dudu checkpoint — midpoint rest stop with petrol stations and restaurants",
      "Ajmer approach through the Aravalli foothills",
      "Ana Sagar Lake visible from the bypass road on entering the city"
    ],
    topAttractions: [
      { name: "Ajmer Sharif Dargah", detail: "Sufi shrine of Khwaja Moinuddin Chishti (1141–1230 CE); white marble complex; qawwali performances Thursday evenings" },
      { name: "Adhai Din Ka Jhonpra", detail: "Mosque built in 2.5 days (legend); ruined columns and arches; 12th-century Indo-Islamic architecture" },
      { name: "Ana Sagar Lake", detail: "Artificial 12th-century lake; Daulat Bagh gardens and marble pavilions built by Shah Jahan" },
      { name: "Taragarh Fort", detail: "7th-century hilltop fort above the city; panoramic views of Ajmer and Ana Sagar" },
      { name: "Nasiyan Jain Temple (Red Temple)", detail: "19th-century Jain temple with golden diorama depicting Jain cosmology" },
      { name: "Government Museum Ajmer", detail: "Collection of 3rd–12th century sculptures salvaged from temple sites of Rajasthan" }
    ],
    bestTimeToVisit: "October to March; October–November for Urs festival (death anniversary of Khwaja Sahib — 800,000+ pilgrims)",
    avoidMonths: "May–June (heat); Urs week if you prefer smaller crowds",
    recommendedVehicle: "Honda Amaze or Toyota Innova Crysta",
    vehicleReason: "At 135 km, this is our shortest outstation route. The Honda Amaze is perfectly suited for 1–4 pax pilgrimage visits. Innova Crysta for families or groups visiting both Ajmer and Pushkar.",
    popularTours: [
      "Jaipur–Ajmer pilgrimage half-day trip",
      "Ajmer–Pushkar same-day combo (most popular)",
      "Urs festival special transport (October–November)",
      "Ajmer–Pushkar–Jodhpur 2-day Rajasthan west tour"
    ],
    faqs: [
      {
        q: "How far is Ajmer from Jaipur by road?",
        a: "Ajmer is 135 km from Jaipur via NH48. The drive takes approximately 2 to 2.5 hours. It is our most popular half-day pilgrim route."
      },
      {
        q: "Can we visit both Ajmer Dargah and Pushkar in one day from Jaipur?",
        a: "Yes — this is our most requested single-day itinerary. We depart Jaipur at 7:00 AM, reach Ajmer by 9:30 AM, spend 1.5 hours at the Dargah, drive over Nag Pahad to Pushkar (30 minutes), spend 3–4 hours at the ghats and Brahma Temple, and return by 7 PM."
      },
      {
        q: "What is the Urs festival at Ajmer and when does it occur?",
        a: "The Urs is the death anniversary of Khwaja Moinuddin Chishti, celebrated over 6 days in the Islamic month of Rajab. 800,000+ pilgrims attend from across India. Traffic and accommodation are severely strained — book transport 2–3 months in advance."
      },
      {
        q: "Is there a dress code for Ajmer Dargah?",
        a: "Yes. Both men and women must cover their heads — cloth caps are distributed at the entrance. Modest dress (arms and legs covered) is expected. Shoes must be removed and left with the shoe stand. Rajasthali Tours drivers inform all guests before reaching the Dargah."
      }
    ],
    nearbyFrom: ["Pushkar (11 km from Ajmer)", "Beawar (55 km from Ajmer)", "Kishangarh (28 km from Ajmer)"]
  }
];

module.exports = destinations;
