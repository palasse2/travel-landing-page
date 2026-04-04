// ===================================
// MULTI-LANGUAGE SYSTEM
// ===================================

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Experiences",
    "nav.about": "Journal",
    "nav.cta": "Get Your Guide",

    // Hero Section
    "hero.badge": "🌍 Written by a Morocco Local",
    "hero.title": "Visit Morocco Like a Local — Not Like a Lost Tourist.",
    "hero.subtitle": "Written by <strong>a Moroccan who actually lives it every day,</strong>this guide helps you avoid scams, save money, and experience the real Morocco — not the overpriced tourist version.",
    "hero.stats.pages": "Pages",
    "hero.stats.chapters": "Chapters",
    "hero.stats.support": "WhatsApp Support",
    "hero.cta.button": "Costs Less Than One Mistake - $9.99",
    "hero.cta.instant": "✓ Instant Download",
    "hero.cta.secure": "✓ Secure Payment",
    "hero.badges.hidden": "Hidden Gems Revealed",
    "hero.badges.scam": "Scam Prevention Tips",
    "hero.badges.restaurant": "Local Restaurant Picks",

    // Book Selector
    "bookSelector.label": "Choose Your Language Version:",

    // Problem Section
    "problem.eyebrow": "The Problem",
    "problem.title": "Tired of Generic Travel Guides?",
    "problem.card1.title": "Tourist Trap Restaurants",
    "problem.card1.desc": "Overpriced tagines with mediocre taste while locals eat authentic food around the corner",
    "problem.card2.title": "Common Scams",
    "problem.card2.desc": "Fake guides, inflated prices, and unnecessary \"tours\" targeting uninformed travelers",
    "problem.card3.title": "Cultural Mistakes",
    "problem.card3.desc": "Accidentally offending locals or standing out as an obvious tourist due to lack of cultural knowledge",
    "problem.card4.title": "Cookie-Cutter Itineraries",
    "problem.card4.desc": "Following the same overcrowded route as every other tourist, missing the real Morocco",
    "problem.solution": "<strong>You deserve better.</strong> This guide solves all of these problems with insider knowledge from a real local.",

    // Why Different Section
    "whyDifferent.badge": "The Difference",
    "whyDifferent.title": "Why This Guide Stands Out",
    "whyDifferent.subtitle": "Not just another generic travel book. This is your insider access to Morocco.",
    "whyDifferent.feature1.title": "Written by an Actual Local",
    "whyDifferent.feature1.desc": "I live in Morocco. This isn't based on a 2-week vacation—it's decades of real-life experience, cultural understanding, and local connections. You're getting authentic insider knowledge, not tourist board propaganda.",
    "whyDifferent.feature2.title": "Hidden Gems Only Locals Know",
    "whyDifferent.feature2.desc": "Secret beaches, mountain villages, and family-run restaurants tourists never discover",
    "whyDifferent.feature3.title": "Free WhatsApp Support",
    "whyDifferent.feature3.desc": "Lost in a medina? Need a recommendation? Message me directly for real-time help",
    "whyDifferent.feature4.title": "Scam Prevention Strategies",
    "whyDifferent.feature4.desc": "Learn the exact tactics scammers use and how to avoid them like a pro",

    // What's Inside Section
    "whatsInside.badge": "Inside the Guide",
    "whatsInside.title": "Everything You Need for an Amazing Morocco Trip",
    "whatsInside.item1.title": "Complete City Guides",
    "whatsInside.item1.desc": "Marrakech, Fes, Casablanca, Chefchaouen, Essaouira, and more. Where to stay, eat, and what to skip.",
    "whatsInside.item2.title": "Cultural Mastery",
    "whatsInside.item2.desc": "Navigate Moroccan customs confidently. Dress codes, greetings, tipping, haggling, and social etiquette explained.",
    "whatsInside.item3.title": "Hidden Gems Map",
    "whatsInside.item3.desc": "Secret spots only locals know about. Beautiful places you won't find in mainstream guides.",
    "whatsInside.item4.title": "Food & Restaurant Guide",
    "whatsInside.item4.desc": "Best tagines, street food safety, avoiding tourist traps, and where locals actually eat.",
    "whatsInside.item5.title": "Detailed Itineraries",
    "whatsInside.item5.desc": "7-day, 10-day, and 14-day routes for different budgets and travel styles. Copy-paste ready.",
    "whatsInside.item6.title": "Desert & Mountains",
    "whatsInside.item6.desc": "Sahara Desert adventures, Atlas Mountain trekking, coastal escapes, and outdoor activities.",
    "whatsInside.item7.title": "Practical Essentials",
    "whatsInside.item7.desc": "Transportation hacks, SIM cards, money exchange, safety tips, and what to pack.",
    "whatsInside.item8.title": "Budget Planning",
    "whatsInside.item8.desc": "Real cost breakdowns, money-saving strategies, and daily budgets for every travel style.",

    // Preview
    "preview.eyebrow": "Sneak Peek",
    "preview.title": "A Look <em>Inside</em>",

    // Testimonials
    "testimonials.badge": "Traveler Reviews",
    "testimonials.title": "What People Are Saying",
    "testimonials.topReview": "Top Review",
    "testimonials.verified": "Verified Purchase",
    "testimonials.review1.text": "\"This guide saved me from so many tourist traps. The local restaurant recommendations alone were worth the price. Finally found authentic Moroccan food!\"",
    "testimonials.review1.title": "Backpacker from Canada",
    "testimonials.review2.text": "\"I've read 5+ Morocco guides and this is the only one written by someone who actually lives there. The cultural tips helped me avoid embarrassing situations and connect with locals.\"",
    "testimonials.review2.title": "Digital Nomad",
    "testimonials.review3.text": "\"The WhatsApp support was a lifesaver when I got lost in the Fes medina. Got a response in minutes with clear directions. Worth every penny!\"",
    "testimonials.review3.title": "Solo Traveler",
    "testimonials.review4.text": "\"Best investment for my Morocco trip. The scam warnings saved me hundreds of dollars, and the hidden gems section led me to the most beautiful places.\"",
    "testimonials.review4.title": "Adventure Seeker",

    // Bonus Section
    "bonus.badge": "Free Bonuses",
    "bonus.title": "Get These <em>Extras</em> Free",
    "bonus.subtitle": "Worth $29.99 — Yours free when you get the guide today",
    "bonus.item1.value": "Value: $4.99",
    "bonus.item1.title": "Cultural Etiquette Mini Guide",
    "bonus.item1.desc": "Quick-reference guide to Moroccan customs and social norms",
    "bonus.item2.value": "Value: $5",
    "bonus.item2.title": "Custom Google Maps",
    "bonus.item2.desc": "Pre-loaded maps with all recommended spots for easy navigation",
    "bonus.whatsapp.value": "Value $15",
    "bonus.whatsapp.title": "Private WhatsApp Assistance",
    "bonus.whatsapp.desc": "Exclusive support for buyers — fast, clear travel advice when you need it.",
    "bonus.whatsapp.link": "Learn More →",
    "bonus.item4.title": "Budget Calculator Tool",
    "bonus.item4.desc": "Plan your expenses accurately with our interactive calculator",
    "bonus.learnMore": "Learn More →",

    // Pricing
    "pricing.title": "Get the Complete Morocco Travel Guide",
    "pricing.feature1": "40+ page comprehensive guide",
    "pricing.feature2": "10 detailed chapters",
    "pricing.feature3": "Written by a Morocco local",
    "pricing.feature4": "Free cultural etiquette mini guide",
    "pricing.feature5": "Free custom Google Maps",
    "pricing.feature6": "Free WhatsApp support",
    "pricing.feature7": "Free budget calculator",
    "pricing.feature8": "Instant digital download",
    "pricing.feature9": "Lifetime access & updates",
    "pricing.priceLabel": "One-Time Payment",
    "pricing.priceNote": "Instant Access · No Subscription",
    "pricing.button": "Download Now",

    // Journal Section
    "journal.eyebrow": "From the Journal",
    "journal.title": "Latest <em>Stories</em> & Tips",
    "journal.subtitle": "Real dispatches from the medinas, mountains, and desert roads of Morocco.",
    "journal.post1.tag": "City Guide",
    "journal.post1.date": "March 2025",
    "journal.post1.read": "6 min read",
    "journal.post1.title": "The Hidden Medina Quarters Tourists Never Find in Fes",
    "journal.post1.excerpt": "Beyond the tanneries and the tourist trail lies a labyrinth of alleyways where locals still bake bread at communal ovens and artisans work in silence.",
    "journal.post2.tag": "Scam Guide",
    "journal.post2.date": "February 2025",
    "journal.post2.read": "8 min read",
    "journal.post2.title": "12 Morocco Scams — And Exactly How to Dodge Every One",
    "journal.post2.excerpt": "From the \"free\" henna in Jemaa el-Fna to the carpet shop redirect, here are the tactics scammers use and the precise words that end them.",
    "journal.post3.tag": "Food & Drink",
    "journal.post3.date": "January 2025",
    "journal.post3.read": "5 min read",
    "journal.post3.title": "Where Locals Actually Eat in Marrakech (Not on TripAdvisor)",
    "journal.post3.excerpt": "The restaurants locals recommend to each other are never on the main square. Here's a neighbourhood-by-neighbourhood breakdown of the real spots.",
    "journal.readMore": "Read Article →",
    "journal.allPosts": "Read All Articles",

    // Experiences Section
    "experiences.eyebrow": "Curated Experiences",
    "experiences.title": "Explore Our <em>Morocco Tours</em>",
    "experiences.button": "Explore All Experiences",

    // FAQ
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1.question": "Is this guide really written by a local?",
    "faq.q1.answer": "Yes! I've lived in Morocco for years and continue to live here. This isn't based on a vacation—it's real, lived experience.",
    "faq.q2.question": "What format is the guide in?",
    "faq.q2.answer": "PDF format that works on all devices—phone, tablet, computer. Download instantly after purchase.",
    "faq.q3.question": "Do I get updates?",
    "faq.q3.answer": "Yes! Free lifetime updates whenever I add new content or update information.",
    "faq.q4.question": "How does WhatsApp support work?",
    "faq.q4.answer": "You'll get my WhatsApp number in the guide. Message me anytime during your trip with questions!",

    // Final CTA
    "finalCta.eyebrow": "Begin Here",
    "finalCta.title": "Ready to Experience the <em>Real Morocco?</em>",
    "finalCta.subtitle": "Join hundreds of travelers who've discovered Morocco the local way.",
    "finalCta.button": "Download Your Guide Now — $9.99",
    "finalCta.instant": "✓ Instant Download",
    "finalCta.secure": "✓ Secure Payment",
    "finalCta.lifetime": "✓ Lifetime Access",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.contact": "Contact Us",
    "footer.about": "About Us",
    "footer.copyright": "© 2025 Travel Readz. All Rights Reserved.",
      
    // Navigation (unchanged)
    "nav.home": "Home",
    "nav.services": "Experiences",
    "nav.about": "Journal",
    "nav.cta": "Get Your Guide",

    // Page Hero (NEW)
    "shop.hero.eyebrow": "Morocco, Your Way",
    "shop.hero.subtitle": "Live Morocco in the field, or carry it in your pocket.",

    // Tab Bar (NEW)
    "tab.experiences.title": "Experiences",
    "tab.experiences.sub": "Tours, activities & insurance",
    "tab.digital.title": "Digital Products",
    "tab.digital.sub": "Guides, templates & presets",

    // Experiences Panel (NEW)
    "exp.eyebrow": "Before You Go",
    "exp.title": "Book Your <em>Experiences</em>",
    "exp.tours.label": "Curated Tours & Activities",

    // Insurance Highlight (NEW)
    "shop.badge.recommended": "Recommended",
    "shop.insurance.title": "SafetyWing Travel Insurance",
    "shop.insurance.desc": "Affordable travel medical coverage trusted by nomads worldwide. 180+ countries, flexible monthly plans — get covered before your Morocco adventure begins.",
    "shop.insurance.feature1": "🌍 180+ countries",
    "shop.insurance.feature2": "💰 From $45/month",
    "shop.insurance.feature3": "📱 Instant coverage",
    "shop.insurance.cta": "Get Protected",

    // Tour Badges (NEW)
    "shop.badge.bestseller": "Bestseller",
    "shop.badge.popular": "Popular",
    "shop.badge.topRated": "Top Rated",

    // Tour 1: Desert Adventure
    "shop.tour1.location": "📍 Marrakech → Merzouga",
    "shop.tour1.title": "3-Day Desert Adventure to the Sahara",
    "shop.tour1.desc": "Camel rides, desert camping under the stars, and authentic Berber hospitality through stunning landscapes.",
    "shop.tour1.feature1": "⏱️ 3 days",
    "shop.tour1.feature2": "🚗 Pickup included",
    "shop.tour1.feature3": "🍽️ Meals included",

    // Tour 2: Imperial Cities
    "shop.tour2.location": "📍 Multiple Cities",
    "shop.tour2.title": "Imperial Cities & Chefchaouen: 3-Day Cultural Tour",
    "shop.tour2.desc": "Morocco's historical treasures and the stunning Blue Pearl city — ancient medinas and magnificent architecture.",
    "shop.tour2.feature1": "⏱️ 3 days",
    "shop.tour2.feature2": "🏛️ UNESCO sites",
    "shop.tour2.feature3": "👥 Small groups",

    // Tour 3: Hassan II Mosque
    "shop.tour3.location": "📍 Casablanca",
    "shop.tour3.title": "Hassan II Mosque: Premium Guided Tour",
    "shop.tour3.desc": "One of the world's largest mosques with premium guided access. Exquisite Moroccan craftsmanship and oceanfront views.",
    "shop.tour3.feature1": "⏱️ 2 hours",
    "shop.tour3.feature2": "🎫 Skip-the-line",
    "shop.tour3.feature3": "🎧 Audio guide",

    // Tour 4: Hot Air Balloon
    "shop.tour4.location": "📍 Marrakech",
    "shop.tour4.title": "Hot Air Balloon Flight & Berber Breakfast",
    "shop.tour4.desc": "Soar above the Atlas Mountains at sunrise and enjoy an authentic Berber breakfast — breathtaking views guaranteed.",
    "shop.tour4.feature1": "⏱️ 4 hours",
    "shop.tour4.feature2": "🌅 Sunrise flight",
    "shop.tour4.feature3": "☕ Breakfast",

    // Tour 5: Ourika Waterfalls
    "shop.tour5.location": "📍 Atlas Mountains",
    "shop.tour5.title": "Ourika Waterfalls & Atlas Mountains Day Trip",
    "shop.tour5.desc": "Scenic mountain views, waterfall hikes, and included lunch in the refreshing Ourika Valley.",
    "shop.tour5.feature1": "⏱️ Full day",
    "shop.tour5.feature2": "🥾 Hiking",
    "shop.tour5.feature3": "🍽️ Lunch included",

    // Tour 6: Agafay Desert
    "shop.tour6.location": "📍 Agafay Desert",
    "shop.tour6.title": "Agafay Desert: Quad, Camel Ride & Dinner Show",
    "shop.tour6.desc": "Quad biking, camel rides, and a spectacular dinner show under the stars. The perfect evening adventure.",
    "shop.tour6.feature1": "⏱️ Evening",
    "shop.tour6.feature2": "🏍️ Quad biking",
    "shop.tour6.feature3": "🎭 Live show",

    // Tour 7: Majorelle Garden
    "shop.tour7.location": "📍 Marrakech",
    "shop.tour7.title": "Majorelle Garden & YSL Museum Entry",
    "shop.tour7.desc": "The iconic cobalt blue garden and the legacy of Yves Saint Laurent — Marrakech's most beautiful garden.",
    "shop.tour7.feature1": "⏱️ 2-3 hours",
    "shop.tour7.feature2": "🎫 Entry tickets",
    "shop.tour7.feature3": "📸 Photo spots",

    // Common elements
    "shop.reviews": "reviews",
    "shop.checkAvailability": "Check Availability →",

    // Digital Products (NEW)
    "shop.section.digital.eyebrow": "Digital Downloads",
    "shop.section.guides": "Travel <em>Guides</em>",
    "shop.section.templates.eyebrow": "Creative Tools",
    "shop.section.templates": "Templates & <em>Presets</em>",

    // Product Badges (NEW)
    "shop.badge.new": "New",
    "shop.badge.sale": "20% Off",
    "shop.badge.free": "100% Off",
    "shop.badge.trending": "Trending",
    "shop.badge.hot": "Hot 🔥",

    // Product 1: Morocco Guide
    "shop.product1.category": "Travel Guide",
    "shop.product1.title": "Unlocking Morocco: Ultimate 2026 Guide",
    "shop.product1.desc": "Complete guide with 10 chapters, insider tips, city itineraries, and bonus content.",

    // Product 2: Etiquette
    "shop.product2.category": "Travel Etiquette",
    "shop.product2.title": "Morocco Travel Etiquette: Dos & Don'ts",
    "shop.product2.desc": "Essential cultural etiquette, clothing rules, and local customs — travel Morocco respectfully.",

    // Product 3: Budget Calculator
    "shop.product3.category": "Budget Calculator",
    "shop.product3.title": "Travel Budget Calculator",
    "shop.product3.desc": "Set your budget, track spending over time — a universal tool for travelers anywhere.",

    // Product 4: Marrakech Map
    "shop.product4.category": "Google Map Guide",
    "shop.product4.title": "Marrakech Google Maps Travel Guide",
    "shop.product4.desc": "Hand-picked attractions, hidden gems, riads, and local tips — saved to Google Maps.",

    // Template 1: Lightroom
    "shop.template1.category": "Photo Editing",
    "shop.template1.title": "Moody Travel Lightroom Presets",
    "shop.template1.desc": "Transform your photos with a cinematic, warm travel look in one click.",

    // Template 2: Instagram Stories
    "shop.template2.category": "Social Media",
    "shop.template2.title": "Instagram Story Templates for Travel Creators",
    "shop.template2.desc": "Premium, elegant Instagram Stories designed for creators who want a professional presence.",

    // Template 3: Reels
    "shop.template3.category": "Video Editing",
    "shop.template3.title": "730+ Viral Instagram Reels — Ready to Post",
    "shop.template3.desc": "High-quality viral-style Reels to grow faster and save hours of content creation.",

    // Template 4: Canva
    "shop.template4.category": "Canva Templates",
    "shop.template4.title": "3000+ Instagram Design Templates",
    "shop.template4.desc": "Professionally designed templates to create eye-catching posts, stories, and reels in minutes.",

    // Template 5: Watercolor
    "shop.template5.category": "Watercolor",
    "shop.template5.title": "Watercolor Travel the World Clipart",
    "shop.template5.desc": "Beautiful watercolor landmarks, maps, and travel icons for invitations, planners, and projects.",

    // Template 6: Hand-Drawn
    "shop.template6.category": "Hand-Drawn Illustrations",
    "shop.template6.title": "Travel Clipart — Hand-Drawn Illustrations",
    "shop.template6.desc": "Charming hand-drawn illustrations for bloggers, designers, and creators who want unique graphics.",

    // Common product elements
    "shop.quickView": "View Details →",
    "shop.buyNow": "Buy Now →",

    // Bundle Banner (NEW)
    "shop.banner.eyebrow": "Limited Time",
    "shop.banner.title": "🎁 Complete Morocco <em>Bundle</em>",
    "shop.banner.desc": "Get the complete travel collection and save 40% when you bundle all guides together.",
    "shop.banner.button": "View Bundle Deal",

    // Final CTA (unchanged)
    "finalCta.eyebrow": "Begin Here",
    "finalCta.title": "Ready to Experience<br>the <em>Real Morocco?</em>",
    "finalCta.subtitle": "Join hundreds of travelers who've discovered Morocco the local way.",
    "finalCta.button": "Download Your Guide Now — $9.99",
    "finalCta.instant": "✓ Instant Download",
    "finalCta.secure": "✓ Secure Payment",
    "finalCta.lifetime": "✓ Lifetime Access",

    // Footer (unchanged)
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.contact": "Contact Us",
    "footer.about": "About Us",
    "footer.copyright": "© 2025 Travel Readz. All Rights Reserved.",

    // About Page
"about.hero.eyebrow": "Who We Are",
"about.hero.title": "Built by Moroccans.<br><em>Made for Travelers.</em>",
"about.hero.subtitle": "We didn't create another generic travel blog. We built a toolkit — shaped by real local knowledge, for travelers who want to experience Morocco the right way.",

"about.story.label": "Est. 2024",
"about.story.statDesc": "Travelers guided through Morocco",
"about.story.statDesc2": "Premium digital tools in one guide",
"about.story.title": "A guide written from<br><em>the inside out.</em>",
"about.story.p1": "Most Morocco travel content is written by tourists who spent two weeks here. Travel Readz is different — it's built by people who were born and raised in Morocco, who know which riads are worth the price, which guides are genuine, and which souks to avoid on a Tuesday.",
"about.story.pull": "\"Morocco isn't hard to navigate. It's just easier when someone who knows it walks alongside you — and that's exactly what this guide does.\"",
"about.story.p2": "We started Travel Readz after watching too many visitors spend their limited time lost, overcharged, or missing the experiences that make Morocco unforgettable. The guide grew from that frustration into a full toolkit — maps, budget planning, cultural etiquette, and direct support — everything a traveler actually needs, in one place.",
"about.story.p3": "Every word was written with a specific traveler in mind: someone who wants to go beyond the postcard, spend wisely, and come home with stories that don't start with \"we got a bit lost…\"",

"about.values.eyebrow": "Why Choose Us",
"about.values.title": "What sets Travel Readz <em>apart</em>",
"about.values.subtitle": "Four things we refuse to compromise on — no matter what.",
"about.values.card1.title": "Local, Not Touristic",
"about.values.card1.desc": "Every recommendation in our guide is a place we've been to ourselves — not a paid placement, not a blog aggregate. If we don't stand behind it, it doesn't make the cut.",
"about.values.card2.title": "Precision Over Volume",
"about.values.card2.desc": "We don't give you 200 options and call it a guide. We give you the 20 that actually matter, clearly explained — so you can plan a trip in hours, not days.",
"about.values.card3.title": "Respect Built In",
"about.values.card3.desc": "Our cultural etiquette guide exists because we believe respectful travel leads to better travel. Knowing the customs isn't just polite — it opens doors that stay shut for most visitors.",
"about.values.card4.title": "Real Support, Real People",
"about.values.card4.desc": "The private travel assistance isn't a chatbot or a FAQ page. It's direct access to someone in Morocco who can answer your actual question, in real time, while you're standing in a souk.",

"about.team.eyebrow": "The People Behind It",
"about.team.title": "Three Moroccans. <em>One mission.</em>",
"about.team.subtitle": "We didn't outsource this. Every part of Travel Readz was built by us — people who know this country, love it, and want others to experience it properly.",
"about.team.member1.name": "Soufiane",
"about.team.member1.role": "Founder & Local Guide Expert",
"about.team.member1.bio": "Born in Morocco, traveled every corner of it. Soufiane built the guide from years of hosting visitors and watching them make the same avoidable mistakes — then wrote the version he wished they'd had.",
"about.team.member2.name": "Lahcen",
"about.team.member2.role": "Content & Brand Strategy",
"about.team.member2.bio": "Lahcen shapes how Travel Readz speaks — making sure every word is clear, honest, and useful. He's the reason the guide reads like advice from a friend, not a brochure.",
"about.team.member3.name": "Hamza",
"about.team.member3.role": "Design & Digital Products",
"about.team.member3.bio": "Hamza designs every tool in the package — the maps, the budget calculator, the layout of the guide itself. If it looks clean and works beautifully, that's him.",

"about.morocco.eyebrow": "Why Morocco",
"about.morocco.title": "A country that demands <em>to be understood</em>",
"about.morocco.subtitle": "Morocco isn't a passive destination. It rewards curiosity, punishes shortcuts, and gives back tenfold to those who come prepared.",
"about.morocco.card1.title": "Living History",
"about.morocco.card1.desc": "The medinas here aren't museums — people live, work, and trade in them exactly as they have for centuries. Understanding that context changes everything about how you move through them.",
"about.morocco.card2.title": "Extreme Variety",
"about.morocco.card2.desc": "Desert, mountains, Atlantic coast, imperial cities, Berber villages — Morocco compresses more landscape and culture into one country than most travelers expect. Planning matters here.",
"about.morocco.card3.title": "Food Worth Seeking",
"about.morocco.card3.desc": "The best food in Morocco is never in the tourist restaurant facing the square. Knowing where to eat — and what to order — is the difference between a meal and a memory.",
"about.morocco.card4.title": "Hospitality That's Real",
"about.morocco.card4.desc": "Moroccan hospitality isn't a marketing phrase. But it's also not unconditional. Knowing how to receive it, respond to it, and reciprocate it makes every human interaction richer.",
"about.morocco.card5.title": "Craft & Artisanship",
"about.morocco.card5.desc": "Zellige tilework, hand-knotted carpets, leather tanning by hand in open vats — Morocco's crafts are still done the old way. Knowing what you're looking at makes the souk a museum, not a market.",
"about.morocco.card6.title": "The Right Pace",
"about.morocco.card6.desc": "Morocco moves slowly on purpose. A rushed itinerary misses all of it. The best moments here — mint tea on a rooftop, a call to prayer at dusk, a conversation that goes nowhere useful — can't be scheduled.",
"about.morocco.closing": "\"Travel Readz exists so that when you arrive in Morocco, you arrive ready — not to rush through it, but to actually be in it.\"",
"about.morocco.closingSource": "— Soufiane, Founder",

"about.cta.eyebrow": "Start Here",
"about.cta.title": "Morocco is waiting.<br><em>Don't arrive unprepared.</em>",
"about.cta.subtitle": "The Travel Readz guide gives you local maps, cultural knowledge, budget tools, and direct support — everything you need to travel Morocco with confidence from day one.",
"about.cta.button": "Get the Travel Readz Guide", 

    
  
  },

fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Expériences",
    "nav.about": "Journal",
    "nav.cta": "Obtenez Votre Guide",

    // Hero Section
    "hero.badge": "🌍 Écrit par un Local du Maroc",
    "hero.title": "Visitez le Maroc comme un local — pas comme un touriste perdu.",
    "hero.subtitle": "Écrit par <strong>un Marocain qui y vit au quotidien,</strong>ce guide vous aide à éviter les arnaques, économiser de l'argent et découvrir le vrai Maroc — pas la version touristique hors de prix.",
    "hero.stats.pages": "Pages",
    "hero.stats.chapters": "Chapitres",
    "hero.stats.support": "Support WhatsApp",
    "hero.cta.button": "Coûte moins qu'une seule erreur - 9,99 $",
    "hero.cta.instant": "✓ Téléchargement Instantané",
    "hero.cta.secure": "✓ Paiement Sécurisé",
    "hero.badges.hidden": "Trésors Cachés Révélés",
    "hero.badges.scam": "Conseils Anti-Arnaques",
    "hero.badges.restaurant": "Restaurants Locaux Sélectionnés",

    // Book Selector
    "bookSelector.label": "Choisissez Votre Version Linguistique:",

    // Problem Section
    "problem.eyebrow": "Le Problème",
    "problem.title": "Fatigué des Guides de Voyage Génériques?",
    "problem.card1.title": "Restaurants Pièges à Touristes",
    "problem.card1.desc": "Tajines trop chers au goût médiocre pendant que les locaux mangent une cuisine authentique au coin de la rue",
    "problem.card2.title": "Arnaques Courantes",
    "problem.card2.desc": "Faux guides, prix gonflés et \"tours\" inutiles ciblant les voyageurs non informés",
    "problem.card3.title": "Erreurs Culturelles",
    "problem.card3.desc": "Offenser accidentellement les locaux ou se faire remarquer comme un touriste évident par manque de connaissances culturelles",
    "problem.card4.title": "Itinéraires Standardisés",
    "problem.card4.desc": "Suivre le même parcours surpeuplé que tous les autres touristes, manquant le vrai Maroc",
    "problem.solution": "<strong>Vous méritez mieux.</strong> Ce guide résout tous ces problèmes grâce aux connaissances d'initiés d'un vrai local.",

    // Why Different Section
    "whyDifferent.badge": "La Différence",
    "whyDifferent.title": "Pourquoi Ce Guide Se Démarque",
    "whyDifferent.subtitle": "Pas seulement un autre livre de voyage générique. C'est votre accès privilégié au Maroc.",
    "whyDifferent.feature1.title": "Écrit par un Vrai Local",
    "whyDifferent.feature1.desc": "Je vis au Maroc. Ce n'est pas basé sur des vacances de 2 semaines—c'est des décennies d'expérience réelle, de compréhension culturelle et de connexions locales.",
    "whyDifferent.feature2.title": "Trésors Cachés Connus Seulement des Locaux",
    "whyDifferent.feature2.desc": "Plages secrètes, villages de montagne et restaurants familiaux que les touristes ne découvrent jamais",
    "whyDifferent.feature3.title": "Support WhatsApp Gratuit",
    "whyDifferent.feature3.desc": "Perdu dans une médina? Besoin d'une recommandation? Envoyez-moi un message directement pour une aide en temps réel",
    "whyDifferent.feature4.title": "Stratégies de Prévention des Arnaques",
    "whyDifferent.feature4.desc": "Apprenez les tactiques exactes utilisées par les arnaqueurs et comment les éviter comme un pro",

    // What's Inside Section
    "whatsInside.badge": "Dans le Guide",
    "whatsInside.title": "Tout Ce Dont Vous Avez Besoin pour un Voyage Incroyable au Maroc",
    "whatsInside.item1.title": "Guides Complets des Villes",
    "whatsInside.item1.desc": "Marrakech, Fès, Casablanca, Chefchaouen, Essaouira, et plus. Où séjourner, manger et quoi éviter.",
    "whatsInside.item2.title": "Maîtrise Culturelle",
    "whatsInside.item2.desc": "Naviguer les coutumes marocaines avec confiance. Codes vestimentaires, salutations, pourboires, négociation et étiquette sociale expliqués.",
    "whatsInside.item3.title": "Carte des Trésors Cachés",
    "whatsInside.item3.desc": "Endroits secrets connus seulement des locaux. Beaux lieux que vous ne trouverez pas dans les guides grand public.",
    "whatsInside.item4.title": "Guide Gastronomique & Restaurants",
    "whatsInside.item4.desc": "Meilleurs tajines, sécurité alimentaire de rue, éviter les pièges à touristes et où mangent vraiment les locaux.",
    "whatsInside.item5.title": "Itinéraires Détaillés",
    "whatsInside.item5.desc": "Routes de 7, 10 et 14 jours pour différents budgets et styles de voyage. Prêts à copier-coller.",
    "whatsInside.item6.title": "Désert & Montagnes",
    "whatsInside.item6.desc": "Aventures dans le désert du Sahara, trekking dans l'Atlas, escapades côtières et activités de plein air.",
    "whatsInside.item7.title": "Essentiels Pratiques",
    "whatsInside.item7.desc": "Astuces de transport, cartes SIM, change d'argent, conseils de sécurité et quoi emporter.",
    "whatsInside.item8.title": "Planification Budgétaire",
    "whatsInside.item8.desc": "Répartitions réelles des coûts, stratégies d'économie et budgets quotidiens pour chaque style de voyage.",

    // Preview
    "preview.eyebrow": "Aperçu",
    "preview.title": "Un Regard <em>à l'Intérieur</em>",

    // Testimonials
    "testimonials.badge": "Avis des Voyageurs",
    "testimonials.title": "Ce Que Disent les Gens",
    "testimonials.topReview": "Meilleur Avis",
    "testimonials.verified": "Achat Vérifié",
    "testimonials.review1.text": "\"Ce guide m'a sauvé de tant de pièges à touristes. Les recommandations de restaurants locaux valaient à elles seules le prix. J'ai enfin trouvé la vraie cuisine marocaine!\"",
    "testimonials.review1.title": "Backpacker du Canada",
    "testimonials.review2.text": "\"J'ai lu plus de 5 guides du Maroc et c'est le seul écrit par quelqu'un qui y vit réellement. Les conseils culturels m'ont aidé à éviter des situations embarrassantes et à me connecter avec les locaux.\"",
    "testimonials.review2.title": "Nomade Digital",
    "testimonials.review3.text": "\"Le support WhatsApp a été une bouée de sauvetage quand je me suis perdu dans la médina de Fès. J'ai reçu une réponse en quelques minutes avec des directions claires. Ça vaut chaque centime!\"",
    "testimonials.review3.title": "Voyageur Solo",
    "testimonials.review4.text": "\"Meilleur investissement pour mon voyage au Maroc. Les avertissements sur les arnaques m'ont fait économiser des centaines de dollars, et la section trésors cachés m'a conduit aux plus beaux endroits.\"",
    "testimonials.review4.title": "Chercheur d'Aventure",

    // Bonus Section
    "bonus.badge": "Bonus Gratuits",
    "bonus.title": "Obtenez Ces <em>Extras</em> Gratuitement",
    "bonus.subtitle": "Valeur 29,99 $ — À vous gratuitement en obtenant le guide aujourd'hui",
    "bonus.item1.value": "Valeur: 4,99 $",
    "bonus.item1.title": "Mini Guide d'Étiquette Culturelle",
    "bonus.item1.desc": "Guide de référence rapide sur les coutumes et normes sociales marocaines",
    "bonus.item2.value": "Valeur: 5 $",
    "bonus.item2.title": "Google Maps Personnalisées",
    "bonus.item2.desc": "Cartes préchargées avec tous les endroits recommandés pour une navigation facile",
"bonus.whatsapp.value": "Valeur 15 $",
"bonus.whatsapp.title": "Assistance WhatsApp Privée",
"bonus.whatsapp.desc": "Support exclusif pour les acheteurs — conseils voyage rapides et clairs quand vous en avez besoin.",
"bonus.whatsapp.link": "En Savoir Plus →",
    "bonus.item4.value": "Valeur: 5 $",
    "bonus.item4.title": "Outil Calculateur de Budget",
    "bonus.item4.desc": "Planifiez vos dépenses avec précision avec notre calculateur interactif",
    "bonus.learnMore": "En Savoir Plus →",

    // Pricing
    "pricing.title": "Obtenez le Guide Complet du Maroc",
    "pricing.feature1": "Guide complet de plus de 40 pages",
    "pricing.feature2": "10 chapitres détaillés",
    "pricing.feature3": "Écrit par un local du Maroc",
    "pricing.feature4": "Mini guide d'étiquette culturelle gratuit",
    "pricing.feature5": "Google Maps personnalisées gratuites",
    "pricing.feature6": "Support WhatsApp gratuit",
    "pricing.feature7": "Calculateur de budget gratuit",
    "pricing.feature8": "Téléchargement numérique instantané",
    "pricing.feature9": "Accès à vie et mises à jour",
    "pricing.priceLabel": "Paiement Unique",
    "pricing.priceNote": "Accès Instantané · Aucun Abonnement",
    "pricing.button": "Télécharger Maintenant",

    // Journal Section
    "journal.eyebrow": "Du Journal",
    "journal.title": "Dernières <em>Histoires</em> & Conseils",
    "journal.subtitle": "Vraies dépêches des médinas, des montagnes et des routes désertiques du Maroc.",
    "journal.post1.tag": "Guide de Ville",
    "journal.post1.date": "Mars 2025",
    "journal.post1.read": "6 min de lecture",
    "journal.post1.title": "Les Quartiers Cachés de la Médina de Fès que les Touristes ne Trouvent Jamais",
    "journal.post1.excerpt": "Au-delà des tanneries et du circuit touristique se trouve un labyrinthe de ruelles où les locaux font encore cuire le pain dans des fours communaux et les artisans travaillent en silence.",
    "journal.post2.tag": "Guide Anti-Arnaques",
    "journal.post2.date": "Février 2025",
    "journal.post2.read": "8 min de lecture",
    "journal.post2.title": "12 Arnaques au Maroc — Et Comment Éviter Chacune d'Elles",
    "journal.post2.excerpt": "Du henné \"gratuit\" à Jemaa el-Fna à la redirection vers le magasin de tapis, voici les tactiques utilisées par les arnaqueurs et les mots précis qui y mettent fin.",
    "journal.post3.tag": "Nourriture & Boisson",
    "journal.post3.date": "Janvier 2025",
    "journal.post3.read": "5 min de lecture",
    "journal.post3.title": "Où Mangent Vraiment les Locaux à Marrakech (Pas sur TripAdvisor)",
    "journal.post3.excerpt": "Les restaurants que les locaux se recommandent entre eux ne sont jamais sur la place principale. Voici une analyse quartier par quartier des vrais endroits.",
    "journal.readMore": "Lire l'Article →",
    "journal.allPosts": "Lire Tous les Articles",

    // Experiences Section
    "experiences.eyebrow": "Expériences Sélectionnées",
    "experiences.title": "Explorez Nos <em>Tours au Maroc</em>",
    "experiences.button": "Explorer Toutes les Expériences",

    // FAQ
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions Fréquemment Posées",
    "faq.q1.question": "Ce guide est-il vraiment écrit par un local?",
    "faq.q1.answer": "Oui! J'ai vécu au Maroc pendant des années et j'y vis toujours. Ce n'est pas basé sur des vacances—c'est une véritable expérience vécue.",
    "faq.q2.question": "Quel est le format du guide?",
    "faq.q2.answer": "Format PDF qui fonctionne sur tous les appareils—téléphone, tablette, ordinateur. Téléchargement instantané après l'achat.",
    "faq.q3.question": "Est-ce que je reçois des mises à jour?",
    "faq.q3.answer": "Oui! Mises à jour gratuites à vie chaque fois que j'ajoute du nouveau contenu ou que je mets à jour les informations.",
    "faq.q4.question": "Comment fonctionne le support WhatsApp?",
    "faq.q4.answer": "Vous obtiendrez mon numéro WhatsApp dans le guide. Envoyez-moi un message à tout moment pendant votre voyage avec des questions!",

    // Final CTA
    "finalCta.eyebrow": "Commencez Ici",
    "finalCta.title": "Prêt à Découvrir le <em>Vrai Maroc?</em>",
    "finalCta.subtitle": "Rejoignez des centaines de voyageurs qui ont découvert le Maroc à la manière locale.",
    "finalCta.button": "Téléchargez Votre Guide Maintenant — 9,99 $",
    "finalCta.instant": "✓ Téléchargement Instantané",
    "finalCta.secure": "✓ Paiement Sécurisé",
    "finalCta.lifetime": "✓ Accès à Vie",

    // Footer
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions Générales",
    "footer.contact": "Contactez-Nous",
    "footer.about": "À Propos",
    "footer.copyright": "© 2025 Travel Readz. Tous Droits Réservés.",

    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Expériences",
    "nav.about": "Journal",
    "nav.cta": "Obtenez Votre Guide",

    // Page Hero
    "shop.hero.eyebrow": "Maroc, À Votre Façon",
    "shop.hero.subtitle": "Vivez le Maroc sur le terrain, ou emportez-le dans votre poche.",

    // Tab Bar
    "tab.experiences.title": "Expériences",
    "tab.experiences.sub": "Tours, activités & assurance",
    "tab.digital.title": "Produits Numériques",
    "tab.digital.sub": "Guides, templates & préréglages",

    // Experiences Panel
    "exp.eyebrow": "Avant de Partir",
    "exp.title": "Réservez Vos <em>Expériences</em>",
    "exp.tours.label": "Tours & Activités Sélectionnés",

    // Insurance Highlight
    "shop.badge.recommended": "Recommandé",
    "shop.insurance.title": "Assurance Voyage SafetyWing",
    "shop.insurance.desc": "Couverture médicale de voyage abordable approuvée par les nomades du monde entier. 180+ pays, plans mensuels flexibles — soyez couvert avant votre aventure marocaine.",
    "shop.insurance.feature1": "🌍 180+ pays",
    "shop.insurance.feature2": "💰 Dès 45 $/mois",
    "shop.insurance.feature3": "📱 Couverture instantanée",
    "shop.insurance.cta": "Obtenez Protection",

    // Tour Badges
    "shop.badge.bestseller": "Meilleur Vendeur",
    "shop.badge.popular": "Populaire",
    "shop.badge.topRated": "Meilleure Note",

    // Tour 1: Desert Adventure
    "shop.tour1.location": "📍 Marrakech → Merzouga",
    "shop.tour1.title": "Aventure de 3 Jours dans le Désert du Sahara",
    "shop.tour1.desc": "Balades à dos de chameau, camping désert sous les étoiles et hospitalité berbère authentique à travers des paysages époustouflants.",
    "shop.tour1.feature1": "⏱️ 3 jours",
    "shop.tour1.feature2": "🚗 Ramassage inclus",
    "shop.tour1.feature3": "🍽️ Repas inclus",

    // Tour 2: Imperial Cities
    "shop.tour2.location": "📍 Plusieurs Villes",
    "shop.tour2.title": "Villes Impériales & Chefchaouen : Tour Culturel de 3 Jours",
    "shop.tour2.desc": "Trésors historiques du Maroc et la ville Perle Bleue époustouflante — médinas anciennes et architecture magnifique.",
    "shop.tour2.feature1": "⏱️ 3 jours",
    "shop.tour2.feature2": "🏛️ Sites UNESCO",
    "shop.tour2.feature3": "👥 Petits groupes",

    // Tour 3: Hassan II Mosque
    "shop.tour3.location": "📍 Casablanca",
    "shop.tour3.title": "Mosquée Hassan II : Visite Guidée Premium",
    "shop.tour3.desc": "L'une des plus grandes mosquées du monde avec accès guidé premium. Artisanat marocain exquis et vues sur l'océan.",
    "shop.tour3.feature1": "⏱️ 2 heures",
    "shop.tour3.feature2": "🎫 Sans file d'attente",
    "shop.tour3.feature3": "🎧 Audioguide",

    // Tour 4: Hot Air Balloon
    "shop.tour4.location": "📍 Marrakech",
    "shop.tour4.title": "Vol en Montgolfière & Petit-Déjeuner Berbère",
    "shop.tour4.desc": "Survolez l'Atlas au lever du soleil et dégustez un authentique petit-déjeuner berbère — vues garanties à couper le souffle.",
    "shop.tour4.feature1": "⏱️ 4 heures",
    "shop.tour4.feature2": "🌅 Vol au lever du soleil",
    "shop.tour4.feature3": "☕ Petit-déjeuner",

    // Tour 5: Ourika Waterfalls
    "shop.tour5.location": "📍 Montagnes de l'Atlas",
    "shop.tour5.title": "Cascades d'Ourika & Excursion dans l'Atlas",
    "shop.tour5.desc": "Vues panoramiques montagneuses, randonnées aux cascades et déjeuner inclus dans la vallée rafraîchissante d'Ourika.",
    "shop.tour5.feature1": "⏱️ Journée complète",
    "shop.tour5.feature2": "🥾 Randonnée",
    "shop.tour5.feature3": "🍽️ Déjeuner inclus",

    // Tour 6: Agafay Desert
    "shop.tour6.location": "📍 Désert d'Agafay",
    "shop.tour6.title": "Désert d'Agafay : Quad, Chameau & Spectacle Dîner",
    "shop.tour6.desc": "Quad, balades à chameau et spectacle dîner spectaculaire sous les étoiles. L'aventure du soir parfaite.",
    "shop.tour6.feature1": "⏱️ Soirée",
    "shop.tour6.feature2": "🏍️ Quad",
    "shop.tour6.feature3": "🎭 Spectacle en direct",

    // Tour 7: Majorelle Garden
    "shop.tour7.location": "📍 Marrakech",
    "shop.tour7.title": "Jardin Majorelle & Musée YSL : Entrée",
    "shop.tour7.desc": "Le jardin bleu cobalt emblématique et l'héritage d'Yves Saint Laurent — le plus beau jardin de Marrakech.",
    "shop.tour7.feature1": "⏱️ 2-3 heures",
    "shop.tour7.feature2": "🎫 Billets d'entrée",
    "shop.tour7.feature3": "📸 Spots photo",

    // Common elements
    "shop.reviews": "avis",
    "shop.checkAvailability": "Vérifier Disponibilité →",

    // Digital Products
    "shop.section.digital.eyebrow": "Téléchargements Numériques",
    "shop.section.guides": "Guides de <em>Voyage</em>",
    "shop.section.templates.eyebrow": "Outils Créatifs",
    "shop.section.templates": "Templates & <em>Préréglages</em>",

    // Product Badges
    "shop.badge.new": "Nouveau",
    "shop.badge.sale": "-20%",
    "shop.badge.free": "100% Gratuit",
    "shop.badge.trending": "Tendance",
    "shop.badge.hot": "Populaire 🔥",

    // Product 1: Morocco Guide
    "shop.product1.category": "Guide de Voyage",
    "shop.product1.title": "Déverrouiller le Maroc : Guide Ultime 2026",
    "shop.product1.desc": "Guide complet avec 10 chapitres, conseils d'initiés, itinéraires urbains et contenu bonus.",

    // Product 2: Etiquette
    "shop.product2.category": "Étiquette Voyage",
    "shop.product2.title": "Étiquette Voyage au Maroc : À Faire & À Ne Pas Faire",
    "shop.product2.desc": "Étiquette culturelle essentielle, règles vestimentaires et coutumes locales — voyagez respectueusement au Maroc.",

    // Product 3: Budget Calculator
    "shop.product3.category": "Calculateur Budget",
    "shop.product3.title": "Calculateur de Budget Voyage",
    "shop.product3.desc": "Définissez votre budget, suivez vos dépenses — outil universel pour voyageurs.",

    // Product 4: Marrakech Map
    "shop.product4.category": "Guide Google Maps",
    "shop.product4.title": "Guide Voyage Google Maps Marrakech",
    "shop.product4.desc": "Attractions sélectionnées, pépites cachées, riads et conseils locaux — sauvegardé sur Google Maps.",

    // Template 1: Lightroom
    "shop.template1.category": "Édition Photo",
    "shop.template1.title": "Préréglages Lightroom Voyages Moody",
    "shop.template1.desc": "Transformez vos photos avec un look cinématographique chaud de voyage en un clic.",

    // Template 2: Instagram Stories
    "shop.template2.category": "Réseaux Sociaux",
    "shop.template2.title": "Templates Stories Instagram pour Créateurs Voyage",
    "shop.template2.desc": "Stories Instagram premium et élégantes conçues pour les créateurs qui veulent une présence professionnelle.",

    // Template 3: Reels
    "shop.template3.category": "Édition Vidéo",
    "shop.template3.title": "730+ Reels Instagram Virals — Prêts à Poster",
    "shop.template3.desc": "Reels viraux de haute qualité pour grandir plus vite et économiser des heures de création de contenu.",

    // Template 4: Canva
    "shop.template4.category": "Templates Canva",
    "shop.template4.title": "3000+ Templates Design Instagram",
    "shop.template4.desc": "Templates conçus professionnellement pour créer des posts, stories et reels accrocheurs en minutes.",

    // Template 5: Watercolor
    "shop.template5.category": "Aquarelle",
    "shop.template5.title": "Clipart Voyages du Monde en Aquarelle",
    "shop.template5.desc": "Beaux monuments aquarelle, cartes et icônes voyage pour invitations, planners et projets.",

    // Template 6: Hand-Drawn
    "shop.template6.category": "Illustrations Dessinées Main",
    "shop.template6.title": "Clipart Voyage — Illustrations Dessinées Main",
    "shop.template6.desc": "Charmes illustrations dessinées main pour blogueurs, designers et créateurs voulant des graphiques uniques.",

    // Common product elements
    "shop.quickView": "Voir Détails →",
    "shop.buyNow": "Acheter Maintenant →",

    // Bundle Banner
    "shop.banner.eyebrow": "Temps Limité",
    "shop.banner.title": "🎁 Bundle Complet <em>Maroc</em>",
    "shop.banner.desc": "Obtenez la collection complète de voyage et économisez 40% en regroupant toutes les guides ensemble.",
    "shop.banner.button": "Voir Offre Bundle",

    // Final CTA
    "finalCta.eyebrow": "Commencez Ici",
    "finalCta.title": "Prêt à Découvrir<br>le <em>Vrai Maroc?</em>",
    "finalCta.subtitle": "Rejoignez des centaines de voyageurs qui ont découvert le Maroc à la manière locale.",
    "finalCta.button": "Téléchargez Votre Guide Maintenant — 9,99 $",
    "finalCta.instant": "✓ Téléchargement Instantané",
    "finalCta.secure": "✓ Paiement Sécurisé",
    "finalCta.lifetime": "✓ Accès à Vie",

    // Footer
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions Générales",
    "footer.contact": "Contactez-Nous",
    "footer.about": "À Propos",
    "footer.copyright": "© 2025 Travel Readz. Tous Droits Réservés.",

  // ===================================
// ABOUT PAGE - FRANÇAIS (COMPLETE)
// ===================================
"about.hero.eyebrow": "Qui Nous Sommes",
"about.hero.title": "Construit par des Marocains.<br><em>Pour les Voyageurs.</em>",
"about.hero.subtitle": "Nous n'avons pas créé un autre blog voyage générique. Nous avons construit un kit d'outils — façonné par de vraies connaissances locales, pour les voyageurs qui veulent découvrir le Maroc correctement.",

"about.story.label": "Fondé en 2024",
"about.story.statDesc": "Voyageurs guidés au Maroc",
"about.story.statDesc2": "Outils numériques premium en un guide",
"about.story.title": "Un guide écrit de<br><em>l'intérieur vers l'extérieur.</em>",
"about.story.p1": "La plupart du contenu voyage au Maroc est écrit par des touristes qui y ont passé deux semaines. Travel Readz est différent — il est construit par des personnes nées et élevées au Maroc, qui savent quels riads valent le prix, quels guides sont authentiques, et quels souks éviter le mardi.",
"about.story.pull": "\"Le Maroc n'est pas difficile à naviguer. C'est juste plus facile quand quelqu'un qui le connaît marche à vos côtés — et c'est exactement ce que fait ce guide.\"",
"about.story.p2": "Nous avons lancé Travel Readz après avoir vu trop de visiteurs passer leur temps limité perdus, surfacturés ou manquant les expériences qui rendent le Maroc inoubliable. Le guide est né de cette frustration pour devenir un kit complet — cartes, planification budgétaire, étiquette culturelle et support direct — tout ce dont un voyageur a vraiment besoin, en un seul endroit.",
"about.story.p3": "Chaque mot a été écrit pour un voyageur spécifique : quelqu'un qui veut aller au-delà de la carte postale, dépenser intelligemment et rentrer avec des histoires qui ne commencent pas par \"on s'est un peu perdus…\"",

"about.values.eyebrow": "Pourquoi Nous Choisir",
"about.values.title": "Ce qui distingue Travel Readz <em>des autres</em>",
"about.values.subtitle": "Quatre choses sur lesquelles nous refusons de faire des compromis — quoi qu'il arrive.",
"about.values.card1.title": "Local, Pas Touristique",
"about.values.card1.desc": "Chaque recommandation de notre guide est un endroit où nous sommes allés nous-mêmes — pas un placement payant, pas un agrégat de blog. Si nous ne le soutenons pas, ça n'y figure pas.",
"about.values.card2.title": "Précision Plutôt que Volume",
"about.values.card2.desc": "Nous ne vous donnons pas 200 options et on appelle ça un guide. Nous vous donnons les 20 qui comptent vraiment, clairement expliquées — pour que vous puissiez planifier un voyage en heures, pas en jours.",
"about.values.card3.title": "Respect Intégré",
"about.values.card3.desc": "Notre guide d'étiquette culturelle existe parce que nous croyons que voyager respectueusement mène à de meilleurs voyages. Connaître les coutumes n'est pas juste poli — ça ouvre des portes qui restent fermées pour la plupart des visiteurs.",
"about.values.card4.title": "Vrai Support, Vraies Personnes",
"about.values.card4.desc": "L'assistance voyage privée n'est pas un chatbot ou une page FAQ. C'est un accès direct à quelqu'un au Maroc qui peut répondre à votre vraie question, en temps réel, pendant que vous êtes dans un souk.",

"about.team.eyebrow": "Les Personnes Derrière",
"about.team.title": "Trois Marocains. <em>Une mission.</em>",
"about.team.subtitle": "Nous n'avons pas sous-traité. Chaque partie de Travel Readz a été construite par nous — des personnes qui connaissent ce pays, l'aiment et veulent que d'autres le découvrent correctement.",
"about.team.member1.name": "Soufiane",
"about.team.member1.role": "Fondateur & Expert Guide Local",
"about.team.member1.bio": "Né au Maroc, a parcouru tous ses coins. Soufiane a construit le guide à partir d'années d'accueil de visiteurs et d'observation de leurs mêmes erreurs évitables — puis a écrit la version qu'il aurait souhaitée avoir.",
"about.team.member2.name": "Lahcen",
"about.team.member2.role": "Contenu & Stratégie Marque",
"about.team.member2.bio": "Lahcen façonne la manière dont Travel Readz parle — s'assurant que chaque mot est clair, honnête et utile. C'est lui qui fait que le guide se lit comme des conseils d'un ami, pas d'une brochure.",
"about.team.member3.name": "Hamza",
"about.team.member3.role": "Design & Produits Numériques",
"about.team.member3.bio": "Hamza conçoit chaque outil du package — les cartes, la calculatrice budgétaire, la mise en page du guide lui-même. S'il est propre et fonctionne parfaitement, c'est lui.",

"about.morocco.eyebrow": "Pourquoi le Maroc",
"about.morocco.title": "Un pays qui exige <em>d'être compris</em>",
"about.morocco.subtitle": "Le Maroc n'est pas une destination passive. Il récompense la curiosité, punit les raccourcis et rend au centuple à ceux qui viennent préparés.",
"about.morocco.card1.title": "Histoire Vivante",
"about.morocco.card1.desc": "Les médinas ici ne sont pas des musées — les gens y vivent, travaillent et commercent exactement comme ils le font depuis des siècles. Comprendre ce contexte change tout sur la manière de s'y déplacer.",
"about.morocco.card2.title": "Variété Extrême",
"about.morocco.card2.desc": "Désert, montagnes, côte atlantique, villes impériales, villages berbères — le Maroc condense plus de paysages et de cultures en un pays que la plupart des voyageurs n'attendent. La planification compte ici.",
"about.morocco.card3.title": "Cuisine Qui Vaut la Peine",
"about.morocco.card3.desc": "La meilleure nourriture au Maroc n'est jamais dans le restaurant touristique face à la place. Savoir où manger — et quoi commander — fait la différence entre un repas et un souvenir.",
"about.morocco.card4.title": "Hospitalité Authentique",
"about.morocco.card4.desc": "L'hospitalité marocaine n'est pas un slogan marketing. Mais elle n'est pas non plus inconditionnelle. Savoir la recevoir, y répondre et la rendre fait chaque interaction humaine plus riche.",
"about.morocco.card5.title": "Artisanat & Métiers",
"about.morocco.card5.desc": "Zellige, tapis noués main, tannage du cuir à la main dans des cuves ouvertes — les métiers du Maroc se font encore à l'ancienne. Savoir ce qu'on regarde transforme le souk en musée, pas en marché.",
"about.morocco.card6.title": "Le Bon Rythme",
"about.morocco.card6.desc": "Le Maroc avance lentement exprès. Un itinéraire précipité rate tout. Les meilleurs moments ici — thé à la menthe sur un toit, appel à la prière au crépuscule, conversation qui ne mène nulle part d'utile — ne peuvent pas être programmés.",
"about.morocco.closing": "\"Travel Readz existe pour que quand vous arrivez au Maroc, vous arriviez prêt — pas pour le traverser en courant, mais pour y être vraiment.\"",
"about.morocco.closingSource": "— Soufiane, Fondateur",

"about.cta.eyebrow": "Commencez Ici",
"about.cta.title": "Le Maroc vous attend.<br><em>N'arrivez pas non préparé.</em>",
"about.cta.subtitle": "Le guide Travel Readz vous donne des cartes locales, connaissances culturelles, outils budgétaires et support direct — tout ce dont vous avez besoin pour voyager au Maroc en confiance dès le premier jour.",
"about.cta.button": "Obtenez le Guide Travel Readz",

  // whatsApp support 

    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Expériences",
    "nav.about": "Journal",
    "nav.cta": "Obtenir le Guide",

    // Hero Section
    "whatsapp.hero.badge": "Acheteurs de Guide Seulement",
    "whatsapp.hero.title": "Assistance Voyage\n<em>Privée</em>",
    "whatsapp.hero.desc": "Guidance structurée et experte pour les acheteurs de guide vérifiés — vous aidant à éviter les erreurs coûteuses et à naviguer au Maroc avec confiance.",
    "pta.hero.tag1": "✓ Jusqu'à 3 Questions",
    "pta.hero.tag2": "✓ Réponse 24-48h",
    "pta.hero.tag3": "✓ Acheteurs Vérifiés Seulement",
    "pta.hero.tag4": "✓ Expert Local",
    "pta.hero.cta": "Débloquer l'Accès — 9,99 $",
    "pta.hero.ctaNote": "📱 Inclus gratuitement avec chaque achat de guide",
    "pta.hero.statLabel": "Temps de Réponse Moyen",
    "pta.hero.verified": "Acheteurs Vérifiés Seulement",

    // Private Assistance Block
    "pta.block.eyebrow": "Assistance Voyage Privée",
    "pta.block.title": "Guidance Structurée.<br><em>Réservée aux Acheteurs.</em>",
    "pta.block.desc": "Ce n'est pas un canal de support public. Les acheteurs de guide vérifiés reçoivent une assistance structurée limitée pour clarifier leurs doutes de voyage, éviter les erreurs courantes et tirer le meilleur parti de leur voyage au Maroc — délivrée par un expert local qui a écrit le guide.",
    "pta.block.exclusivity": "Disponible pour un nombre limité d'acheteurs par mois",
    "pta.block.constraint1": "<strong>Ceci est une assistance structurée — pas une consultation illimitée.</strong> Chaque acheteur reçoit un nombre défini de questions, traitées dans une fenêtre de réponse définie. Cela maintient la qualité de chaque réponse élevée et les conseils réellement utiles.",
    "pta.block.upgradeNote": "Note : Les futures versions de ce guide pourraient inclure l'assistance privée comme une mise à niveau payante. Les acheteurs actuels la reçoivent gratuitement.",
    "pta.features.label": "Ce Qui Est Inclus",
    "pta.features.item1": "Poser jusqu'à <strong style=\"color:rgba(232,220,200,0.9);\">3 questions liées au voyage</strong> — focalisées, pratiques et répondues en détail",
    "pta.features.item2": "Clarification et optimisation d'itinéraire basée sur vos dates de voyage et priorités",
    "pta.features.item3": "Guidance pour recommandations locales — où manger, séjourner ou explorer dans des villes spécifiques",
    "pta.features.item4": "Conseils anti-arnaques adaptés à votre itinéraire et niveau d'expérience",
    "pta.features.item5": "Réponse dans <strong style=\"color:rgba(232,220,200,0.9);\">24–48 heures</strong> — réfléchie, pas précipitée",
    "pta.features.item6": "Accessible via WhatsApp — <strong style=\"color:rgba(232,220,200,0.9);\">pour acheteurs de guide vérifiés seulement</strong>",
    "pta.block.constraint2": "L'accès est accordé après vérification d'achat. Le numéro WhatsApp n'est pas public. <strong>Les questions hors du cadre du voyage au Maroc ou du contenu du guide ne sont pas couvertes.</strong>",
    "pta.block.cta": "Obtenir le Guide — Débloquer l'Accès",

    // How It Works
    "pta.steps.eyebrow": "Processus Simple",
    "whatsapp.howItWorks.title": "Comment Ça\n<em>Fonctionne</em>",
    "whatsapp.step1.title": "Acheter le Guide",
    "whatsapp.step1.desc": "Complétez votre achat sur Gumroad. Votre email de confirmation inclut le contact WhatsApp privé et les instructions d'accès.",
    "whatsapp.step2.title": "Sauvegarder le Contact",
    "whatsapp.step2.desc": "Ajoutez le numéro à vos contacts avant de voyager. C'est une ligne privée — non listée publiquement ni recherchable.",
    "whatsapp.step3.title": "Envoyer Vos Questions",
    "whatsapp.step3.desc": "Envoyez vos questions de voyage clairement et spécifiquement. Les réponses sont délivrées dans les 24–48 heures, focalisées et actionnables.",

    // Coverage
    "pta.coverage.eyebrow": "Champ d'Assistance",
    "pta.coverage.title": "Sujets\n<em>Couverts</em>",
    "pta.coverage.desc": "L'assistance se concentre sur des questions pratiques et à fort impact qui améliorent directement votre expérience au Maroc.",
    "whatsapp.coverage1.title": "Transport & Logistique",
    "whatsapp.coverage1.item1": "Options de transport aéroport-ville",
    "whatsapp.coverage1.item2": "Tarifs de taxi équitables et éviter les arnaques",
    "whatsapp.coverage1.item3": "Utiliser les bus et trains locaux",
    "whatsapp.coverage1.item4": "Services de covoiturage par application",
    "whatsapp.coverage2.title": "Hébergement",
    "whatsapp.coverage2.item1": "Difficultés de check-in",
    "whatsapp.coverage2.item2": "Trouver votre riad ou hôtel",
    "whatsapp.coverage2.item3": "Communication avec les hôtes",
    "whatsapp.coverage2.item4": "Comprendre les coutumes locales",
    "whatsapp.coverage3.title": "Navigation & Sécurité",
    "whatsapp.coverage3.item1": "Aller aux principaux monuments",
    "whatsapp.coverage3.item2": "Zones sûres à explorer",
    "whatsapp.coverage3.item3": "Conseils d'étiquette locale",
    "whatsapp.coverage3.item4": "Contacts d'urgence",

    // Testimonials
    "pta.reviews.eyebrow": "Avis des Acheteurs",
    "pta.reviews.title": "Ce Que Disent les Acheteurs",
    "whatsapp.review1.text": "« Je ne trouvais pas mon riad dans la médina de Fès. J'ai envoyé un message, réponse claire en moins d'une heure. Exactement ce dont j'avais besoin. »",
    "whatsapp.review2.text": "« J'ai demandé les tarifs de taxi depuis l'aéroport. Réponse spécifique et honnête. Pas de stress, pas de surfacturation à l'arrivée. »",
    "whatsapp.review3.text": "« Les conseils étaient directs, pratiques et clairement de quelqu'un qui connaît vraiment le Maroc. C'est rare. »",

    // Bonuses
    "pta.bonus.badge": "Bonus Inclus",
    "pta.bonus.title": "Autres Cadeaux\n<em>dans le Paquet</em>",
    "pta.bonus.subtitle": "Valeur 24,99 $ — inclus avec chaque achat de guide",
    "bonus.item1.value": "Valeur : 4,99 $",
    "bonus.item1.title": "Mini-Guide d'Étiquette Culturelle",
    "bonus.item1.desc": "Guide de référence rapide sur les coutumes et normes sociales marocaines",
    "bonus.item2.value": "Valeur : 5 $",
    "bonus.item2.title": "Cartes Google Personnalisées",
    "bonus.item2.desc": "Cartes pré-chargées avec tous les spots recommandés pour une navigation facile",
    "bonus.item4.value": "Valeur : 5 $",
    "bonus.item4.title": "Outil Calculateur de Budget",
    "bonus.item4.desc": "Planifiez vos dépenses avec précision grâce à notre calculateur interactif",
    "bonus.learnMore": "En Savoir Plus →",

    // Final CTA
    "pta.finalCta.eyebrow": "Exclusif aux Acheteurs de Guide",
    "pta.finalCta.title": "Voyager au Maroc avec\n<em>Soutien Expert.</em>",
    "pta.finalCta.subtitle": "Le guide complet Travel Readz — plus assistance voyage privée, cartes personnalisées, calculateur de budget et guide d'étiquette culturelle. Tout ce dont vous avez besoin pour voyager correctement au Maroc.",
    "pta.finalCta.btn": "Obtenir le Guide Travel Readz",
    "pta.finalCta.trust1": "✓ Téléchargement Instantané",
    "pta.finalCta.trust2": "✓ Assistance Privée Incluse",
    "pta.finalCta.trust3": "✓ 4 Bonus Gratuits",

    // Footer
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions Générales",
    "footer.contact": "Nous Contacter",
    "footer.about": "À Propos",
    "footer.copyright": "© 2025 Travel Readz. Tous droits réservés.",

  // MINI EBOOOOOOOOOOOOOOOOOK 

   'miniebook.hero.badge': '🌍 Guide Culturel',
  'miniebook.hero.title': 'Étiquette de\n<em>Voyage au Maroc</em>',
  'miniebook.hero.desc': 'Les dos et les don\'ts essentiels, l\'étiquette culturelle, les règles vestimentaires et les coutumes locales — tout expliqué clairement pour voyager au Maroc avec respect.',
  'miniebook.hero.cta': 'Acheter Séparément — 4,99 $',
  'miniebook.hero.subtext': '✦ Inclus gratuitement avec chaque achat de guide Travel Readz',
  'miniebook.hero.statLabel': 'Pages Essentielles',
  'miniebook.hero.verified': 'Écrit par un Local du Maroc',

  'miniebook.features.eyebrow': 'Ce que vous obtenez',
  'miniebook.features.title': 'Voyagez au Maroc avec une <em>Confiance Culturelle</em>',
  'miniebook.features.desc': 'Ce mini-guide de 10 pages couvre les connaissances culturelles essentielles dont chaque visiteur a besoin — des codes vestimentaires aux normes sociales, pourboires à la photographie.',

  'miniebook.feature1.title': 'Règles de Tenue',
  'miniebook.feature1.desc': 'Guide clair sur ce qu\'il faut porter dans différents contextes — mosquées, médinas, riads et espaces publics. Ne ressortez jamais pour les mauvaises raisons.',
  'miniebook.feature2.title': 'Comportement Social & Salutations',
  'miniebook.feature2.desc': 'Comment saluer correctement les locaux, quels gestes éviter et comment naviguer les interactions quotidiennes avec respect et confiance.',
  'miniebook.feature3.title': 'Pourboires & Négociation',
  'miniebook.feature3.desc': 'Exactement quand et combien donner en pourboire, et comment négocier dans les souks sans offenser — chaque transaction devient naturelle, pas gênante.',
  'miniebook.feature4.title': 'Directives de Photographie',
  'miniebook.feature4.desc': 'Quels endroits et personnes vous pouvez photographier librement, où demander la permission, et les situations où les appareils photo doivent rester rangés.',

  'miniebook.content.eyebrow': 'Écrit par un Local',
  'miniebook.content.title': 'Le respect ouvre des portes.<br><em>Ce guide vous montre comment.</em>',
  'miniebook.content.desc': 'Le Maroc est un pays où les petits gestes ont un vrai sens. Savoir quand enlever ses chaussures, comment accepter le thé à la menthe, ou pourquoi éviter de pointer une mosquée n\'est pas juste de la politesse — cela ouvre des portes vers des expériences authentiques que la plupart des touristes ne vivent jamais.',
  'miniebook.content.note': 'Assez compact pour le lire dans l\'avion. Assez précis pour l\'utiliser chaque jour de votre voyage. Pas de conseils génériques — cela couvre les vraies situations que vous rencontrerez réellement.',
  'miniebook.content.listLabel': 'Thèmes Couverts',
  'miniebook.content.item1': 'Entrer dans les mosquées & lieux sacrés',
  'miniebook.content.item2': 'Étiquette du Ramadan & timing',
  'miniebook.content.item3': 'Accepter & refuser l\'hospitalité',
  'miniebook.content.item4': 'Code vestimentaire par lieu & genre',
  'miniebook.content.item5': 'Négocier dans les souks sans offenser',
  'miniebook.content.item6': 'Photographie — qui, où & comment demander',
  'miniebook.content.item7': 'Gestes courants & leur signification locale',

  'miniebook.reviews.eyebrow': 'Avis des Voyageurs',
  'miniebook.reviews.title': 'Ce que les <em>Voyageurs</em> Disent',
  'miniebook.reviews.subtitle': 'Des voyageurs solo aux familles — les acheteurs vérifiés partagent leur expérience.',
  'miniebook.review1.text': '"Court mais puissant. Je me suis senti beaucoup plus confiant en interagissant avec les locaux après l\'avoir lu. Vaut chaque centime."',
  'miniebook.review1.role': 'Voyageuse Solo · Acheteur Vérifié',
  'miniebook.review2.text': '"Ce mini ebook m\'a sauvé de tant de moments gênants. Simple, clair et super utile avant d\'arriver au Maroc."',
  'miniebook.review2.role': 'Première Visite · Acheteur Vérifié',
  'miniebook.review3.text': '"Exactement ce dont les premiers visiteurs ont besoin. Les dos et don\'ts sur les vêtements et le comportement étaient parfaits. Lu deux fois."',
  'miniebook.review3.role': 'Voyageur d\'Aventure · Acheteur Vérifié',

  'miniebook.finalCta.eyebrow': 'Obtenez Votre Guide',
  'miniebook.finalCta.title': 'Voyagez au Maroc avec un <em>Respect Total.</em>',
  'miniebook.finalCta.subtitle': 'Obtenez le guide complet Travel Readz et recevez ce guide d\'étiquette gratuit — avec assistance voyage privée, cartes personnalisées et calculatrice budgétaire.',
  'miniebook.finalCta.button': 'Obtenir le Guide Travel Readz',
  'miniebook.finalCta.note': '✦ Ou acheter ce guide d\'étiquette séparément pour 4,99 $',
  'miniebook.finalCta.trust1': '✓ Téléchargement Instantané',
  'miniebook.finalCta.trust2': '✓ 10 Pages',
  'miniebook.finalCta.trust3': '✓ Fonctionne sur Tous les Appareils',
  'miniebook.finalCta.trust4': '✓ 4 Bonus Gratuits',

  // Contact page
  'contact.hero.eyebrow': 'Contáctanos',
  'contact.hero.title': 'Una pregunta merece<br><em>una respuesta real.</em>',
  'contact.hero.subtitle': 'No un bot. No una redirección a FAQ. Si nos escribes, una persona lo lee y responde — generalmente en 24 horas.',

  'contact.card1.title': 'Envíanos un Email',
  'contact.card1.desc': 'Preguntas sobre tu pedido, problemas de acceso al guía, o cualquier otra cosa — envíalo aquí. Respondemos en 24 horas, sin excepciones.',
  'contact.card1.link': 'support@travelreadz.com',

  'contact.card2.title': 'Sigue el Viaje',
  'contact.card2.desc': 'Detrás de escena de Marruecos, consejos de viaje honestos y actualizaciones sobre nuevos guías — todo en nuestros canales sociales. Sin contenido relleno, solo lo útil.',

  'contact.card3.title': 'Asociaciones & Colaboraciones',
  'contact.card3.desc': 'Trabajar con blogueros de viaje, agencias y creadores de contenido que realmente cubren Marruecos. Si eres uno de ellos, nos gustaría saber de ti.',
  'contact.card3.link': 'Iniciar conversación',

  'contact.form.sideLabel': 'Escríbenos',
  'contact.form.sideTitle': 'Dinos exactamente<br><em>lo que necesitas.</em>',
  'contact.form.sideDesc': 'Ya sea una simple pregunta sobre el guía, un problema con tu compra, o una pregunta compleja sobre tu itinerario — preferimos el contexto completo antes que una sola línea. Más detalles nos das, mejor podemos ayudarte.',
  'contact.form.badgeStrong': 'Respuestas en 24 horas',
  'contact.form.badgeSub': 'Cada mensaje es leído por una persona real',

  'contact.form.name': 'Tu Nombre',
  'contact.form.email': 'Dirección de Email',
  'contact.form.subjectLabel': 'Asunto',
  'contact.form.selectTopic': 'Selecciona un tema…',
  'contact.form.optGuide': 'Pregunta Sobre el Guía',
  'contact.form.optOrder': 'Pedido o Problema de Acceso',
  'contact.form.optTrip': 'Ayuda con Planificación del Viaje',
  'contact.form.optPartner': 'Asociación o Colaboración',
  'contact.form.optFeedback': 'Feedback',
  'contact.form.optOther': 'Algo Más',
  'contact.form.messageLabel': 'Tu Mensaje',
  'contact.form.submit': 'Enviar Mensaje',

  'contact.faq.eyebrow': 'Preguntas Comunes',
  'contact.faq.title': 'Lo que la gente nos <em>pregunta más</em>',
  'contact.faq.subtitle': 'Si tu pregunta está aquí, tienes tu respuesta. Si no, usa el formulario de arriba.',

  'contact.faq.q1.question': '¿Cuándo tengo acceso después de comprar?',
  'contact.faq.q1.answer': 'Inmediatamente. Recibirás un enlace de descarga por email en el momento en que tu pago se procese. Revisa tu carpeta de spam si no lo ves en unos minutos.',

  'contact.faq.q2.question': 'No puedo acceder a mi compra. ¿Qué hago?',
  'contact.faq.q2.answer': 'Envíanos un email a support@travelreadz.com con tu número de pedido. Lo resolvemos en 24 horas — y si el problema es nuestro, lo arreglamos inmediatamente.',

  'contact.faq.q3.question': '¿Puedo obtener consejos personalizados para mi viaje específico?',
  'contact.faq.q3.answer': 'Sí — para eso es exactamente el bono de Asistencia de Viaje Privada. Una vez que compres el guía, tienes acceso directo a uno de nuestro equipo para preguntas en tiempo real.',

  'contact.faq.q4.question': '¿Trabajan con blogueros de viaje o afiliados?',
  'contact.faq.q4.answer': 'Sí, selectivamente. Buscamos personas que realmente cubran Marruecos, no las que solo persiguen una comisión. Usa el formulario de arriba — selecciona "Asociación" y preséntate correctamente.',

  'contact.faq.q5.question': '¿El guía se actualiza regularmente?',
  'contact.faq.q5.answer': 'Sí. Revisamos y actualizamos el guía periódicamente para reflejar cambios de precios, nuevas recomendaciones e información estacional. Los compradores siempre obtienen la última versión.',

  'contact.faq.q6.question': '¿Y si el guía no es adecuado para mí?',
  'contact.faq.q6.answer': 'Estamos seguros de que lo encontrarás valioso — pero si tienes una preocupación genuina después de comprar, contáctanos. Tratamos cada caso individualmente y no queremos clientes insatisfechos.',

  'contact.cta.eyebrow': 'Listo para Ir',
  'contact.cta.title': 'No esperes hasta aterrizar<br><em>para prepararte.</em>',
  'contact.cta.subtitle': 'El guía Travel Readz te da todo antes de llegar — mapas, conocimiento cultural, herramienta de presupuesto y soporte directo. Una compra, completamente preparado.',
  'contact.cta.button': 'Obtener el Guía Travel Readz',

   // Contact page
  'contact.hero.eyebrow': 'Contactez-nous',
  'contact.hero.title': 'Une question mérite<br><em>une vraie réponse.</em>',
  'contact.hero.subtitle': 'Pas un bot. Pas une redirection FAQ. Si vous nous écrivez, une personne lit votre message et répond — généralement sous 24 heures.',

  'contact.card1.title': 'Envoyez-nous un Email',
  'contact.card1.desc': 'Questions sur votre commande, problèmes d\'accès au guide, ou autre chose — envoyez-les ici. Nous répondons sous 24 heures, sans exception.',
  'contact.card1.link': 'support@travelreadz.com',

  'contact.card2.title': 'Suivez le Voyage',
  'contact.card2.desc': 'Coulisses du Maroc, conseils de voyage honnêtes et mises à jour sur les nouveaux guides — tout sur nos réseaux sociaux. Pas de contenu inutile, juste ce qui est utile.',

  'contact.card3.title': 'Partenariats & Collaborations',
  'contact.card3.desc': 'Travailler avec des blogueurs voyage, agences et créateurs de contenu qui couvrent réellement le Maroc. Si c\'est vous, nous aimerions avoir de vos nouvelles.',
  'contact.card3.link': 'Démarrer une conversation',

  'contact.form.sideLabel': 'Écrivez-nous',
  'contact.form.sideTitle': 'Dites-nous exactement<br><em>ce dont vous avez besoin.</em>',
  'contact.form.sideDesc': 'Que ce soit une simple question sur le guide, un problème avec votre achat, ou une question complexe sur votre itinéraire — nous préférons avoir le contexte complet plutôt qu\'une phrase. Plus vous donnez de détails, mieux nous pouvons vous aider.',
  'contact.form.badgeStrong': 'Réponses sous 24 heures',
  'contact.form.badgeSub': 'Chaque message est lu par une vraie personne',

  'contact.form.name': 'Votre Nom',
  'contact.form.email': 'Adresse Email',
  'contact.form.subjectLabel': 'Sujet',
  'contact.form.selectTopic': 'Sélectionnez un sujet…',
  'contact.form.optGuide': 'Question sur le Guide',
  'contact.form.optOrder': 'Commande ou Problème d\'Accès',
  'contact.form.optTrip': 'Aide à la Planification du Voyage',
  'contact.form.optPartner': 'Partenariat ou Collaboration',
  'contact.form.optFeedback': 'Retour',
  'contact.form.optOther': 'Autre Chose',
  'contact.form.messageLabel': 'Votre Message',
  'contact.form.submit': 'Envoyer le Message',

  'contact.faq.eyebrow': 'Questions Courantes',
  'contact.faq.title': 'Ce que les gens nous <em>demandent le plus</em>',
  'contact.faq.subtitle': 'Si votre question est ici, vous avez votre réponse. Sinon, utilisez le formulaire ci-dessus.',

  'contact.faq.q1.question': 'Quand ai-je accès après l\'achat ?',
  'contact.faq.q1.answer': 'Immédiatement. Vous recevrez un lien de téléchargement par email dès que votre paiement est validé. Vérifiez votre dossier spam si vous ne le voyez pas dans quelques minutes.',

  'contact.faq.q2.question': 'Je n\'arrive pas à accéder à mon achat. Que faire ?',
  'contact.faq.q2.answer': 'Envoyez-nous un email à support@travelreadz.com avec votre numéro de commande. Nous le résolvons sous 24 heures — et si le problème vient de nous, nous le corrigeons immédiatement.',

  'contact.faq.q3.question': 'Puis-je obtenir des conseils personnalisés pour mon voyage spécifique ?',
  'contact.faq.q3.answer': 'Oui — c\'est exactement à quoi sert le bonus Assistance Voyage Privée. Une fois le guide acheté, vous avez un accès direct à l\'un de nos membres pour des questions en temps réel.',

  'contact.faq.q4.question': 'Travaillez-vous avec des blogueurs voyage ou affiliés ?',
  'contact.faq.q4.answer': 'Oui, de manière sélective. Nous cherchons des personnes qui couvrent réellement le Maroc, pas celles qui courent après une commission. Utilisez le formulaire ci-dessus — sélectionnez "Partenariat" et présentez-vous correctement.',

  'contact.faq.q5.question': 'Le guide est-il mis à jour régulièrement ?',
  'contact.faq.q5.answer': 'Oui. Nous revoyons et mettons à jour le guide périodiquement pour refléter les changements de prix, nouvelles recommandations et informations saisonnières. Les acheteurs ont toujours la dernière version.',

  'contact.faq.q6.question': 'Et si le guide ne me convient pas ?',
  'contact.faq.q6.answer': 'Nous sommes confiants que vous le trouverez précieux — mais si vous avez un vrai problème après l\'achat, contactez-nous. Nous traitons chaque cas individuellement et ne voulons pas de clients mécontents.',

  'contact.cta.eyebrow': 'Prêt à Partir',
  'contact.cta.title': 'Ne tardez pas jusqu\'à l\'atterrissage<br><em>pour vous préparer.</em>',
  'contact.cta.subtitle': 'Le guide Travel Readz vous donne tout avant votre arrivée — cartes, connaissances culturelles, outil budgétaire et support direct. Un achat, pleinement préparé.',
  'contact.cta.button': 'Obtenir le Guide Travel Readz',

    // Privacy Policy page
  'privacy.hero.eyebrow': 'Légal',
  'privacy.hero.title': 'Politique de <em>Confidentialité</em>',
  'privacy.hero.subtitle': 'Nous collectons seulement ce dont nous avons besoin, l\'utilisons seulement pour ce que nous disons, et ne le vendons jamais. Voici exactement comment cela fonctionne.',
  'privacy.hero.date': 'Dernière mise à jour — Janvier 2025',

  'privacy.sidebar.label': 'Contenu',
  'privacy.nav.collect': 'Informations Collectées',
  'privacy.nav.use': 'Comment Nous les Utilisons',
  'privacy.nav.cookies': 'Cookies & Suivi',
  'privacy.nav.thirdParty': 'Services Tiers',
  'privacy.nav.security': 'Sécurité des Données',
  'privacy.nav.rights': 'Vos Droits',
  'privacy.nav.updates': 'Mises à Jour de la Politique',

  'privacy.section1.num': 'Collecte',
  'privacy.section1.title': 'Informations <em>que Nous Collectons</em>',
  'privacy.section1.p1': 'Lorsque vous achetez un produit, nous collectons les informations nécessaires pour traiter votre commande — votre nom, adresse email et détails de paiement. Le traitement des paiements est géré entièrement par Gumroad ; nous ne stockons jamais vos informations de carte directement.',
  'privacy.section1.p2': 'Si vous vous abonnez à notre newsletter ou nous contactez par email, nous collectons les informations que vous fournissez dans ce message — votre nom et adresse email, et ce que vous choisissez de nous écrire.',
  'privacy.section1.highlight': 'Nous collectons le minimum nécessaire. Nous ne demandons pas d\'informations dont nous n\'avons pas besoin, et nous ne les conservons pas plus longtemps que nécessaire.',

  'privacy.section2.num': 'Utilisation',
  'privacy.section2.title': 'Comment Nous <em>les Utilisons</em>',
  'privacy.section2.p1': 'Vos informations sont utilisées pour trois choses : exécuter votre commande, vous envoyer des mises à jour directement liées à votre achat, et répondre à toute demande de support que vous nous envoyez.',
  'privacy.section2.p2': 'Si vous vous êtes abonné à notre newsletter, nous pouvons vous envoyer des conseils de voyage, mises à jour de guides ou offres occasionnelles. Vous pouvez vous désabonner à tout moment — chaque email contient un lien de désabonnement clairement visible.',
  'privacy.section2.p3': 'Nous ne vendons pas vos données à des tiers. Nous ne les partageons pas avec des annonceurs. Nous ne les utilisons pas pour un autre but que ce qui est décrit ici.',

  'privacy.section3.num': 'Cookies',
  'privacy.section3.title': 'Cookies <em>& Suivi</em>',
  'privacy.section3.p1': 'Notre site utilise des cookies pour comprendre comment les visiteurs utilisent le site — quelles pages sont visitées, combien de temps les gens y passent, et d\'où ils viennent. Cela nous aide à améliorer le site et les produits que nous proposons.',
  'privacy.section3.p2': 'Nous utilisons des outils d\'analyse standards pour cela. Aucune information personnellement identifiable n\'est attachée aux données de cookies. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur à tout moment, bien que certaines parties du site puissent ne pas fonctionner pleinement sans eux.',

  'privacy.section4.num': 'Tiers',
  'privacy.section4.title': 'Services <em>Tiers</em>',
  'privacy.section4.p1': 'Nous utilisons un petit nombre de services tiers de confiance pour gérer l\'entreprise : Gumroad pour les paiements et la livraison des produits, et des fournisseurs d\'email standards pour la correspondance de support. Chacun opère sous sa propre politique de confidentialité et standards de protection des données.',
  'privacy.section4.p2': 'Nous ne travaillons qu\'avec des fournisseurs tiers dont les pratiques de gestion des données répondent à un standard dont nous sommes satisfaits. Nous ne partageons pas vos données avec un tiers pour des fins marketing ou publicitaires.',

  'privacy.section5.num': 'Sécurité',
  'privacy.section5.title': 'Sécurité des <em>Données</em>',
  'privacy.section5.p1': 'Toutes les données transmises via notre site sont chiffrées via HTTPS. Le traitement des paiements s\'exécute entièrement via l\'infrastructure sécurisée de Gumroad — vos informations financières ne passent jamais par nos serveurs.',
  'privacy.section5.p2': 'Bien que nous prenions des précautions raisonnables pour protéger les données que nous détenons, aucun système n\'est totalement immunisé contre les risques. Si nous devenons conscients d\'une violation affectant vos données, nous vous en informerons rapidement et prendrons des mesures correctives immédiates.',

  'privacy.section6.num': 'Vos Droits',
  'privacy.section6.title': 'Vos <em>Droits</em>',
  'privacy.section6.p1': 'Vous avez le droit de savoir quelles données personnelles nous détenons sur vous, de demander une copie, et de demander que nous les corrigions ou les supprimions. Vous pouvez exercer ces droits en nous écrivant directement à <a href="mailto:support@travelreadz.com">support@travelreadz.com</a>.',
  'privacy.section6.p2': 'Nous répondrons aux demandes de données sous 30 jours. Si votre demande nécessite plus de temps, nous vous le ferons savoir. Il n\'y a aucun frais pour faire une demande de données.',
  'privacy.section6.highlight': 'Pour vous désabonner des emails, cliquez simplement sur le lien de désabonnement dans n\'importe quel message que nous vous avons envoyé. Pour demander la suppression de vos données, écrivez-nous directement.',

  'privacy.section7.num': 'Mises à Jour',
  'privacy.section7.title': 'Mises à Jour de la <em>Politique</em>',
  'privacy.section7.p1': 'Nous pouvons mettre à jour cette politique de temps en temps — par exemple, si nous ajoutons un nouveau service ou si la loi applicable change. Toute mise à jour sera publiée sur cette page avec une date révisée en haut.',
  'privacy.section7.p2': 'Nous ne ferons pas de changements matériels à l\'utilisation de vos données sans vous en donner un avis clair. Si un changement significatif affecte la gestion de vos informations, nous informerons directement les clients existants par email.',

  'privacy.cta.eyebrow': 'Prêt à Partir',
  'privacy.cta.title': 'Le Maroc vous attend.<br><em>Votre guide est prêt.</em>',
  'privacy.cta.subtitle': 'Cartes locales, connaissances culturelles, outils budgétaires et support direct — tout en un seul endroit.',
  'privacy.cta.button': 'Obtenir le Guide Travel Readz',

    // Terms & Conditions page
  'terms.hero.eyebrow': 'Légal',
  'terms.hero.title': 'Conditions <em>Générales</em>',
  'terms.hero.subtitle': 'Langage clair. Pas de surprises. Voici à quoi vous acceptez en utilisant Travel Readz — et à ce que nous nous engageons en retour.',
  'terms.hero.date': 'Dernière mise à jour — Janvier 2025',

  'terms.sidebar.label': 'Contenu',
  'terms.nav.general': 'Général',
  'terms.nav.purchases': 'Achats',
  'terms.nav.use': 'Utilisation du Site',
  'terms.nav.ip': 'Propriété Intellectuelle',
  'terms.nav.liability': 'Limitation de Responsabilité',
  'terms.nav.changes': 'Modifications des Conditions',
  'terms.nav.contact': 'Contact',

  'terms.section1.num': 'Général',
  'terms.section1.title': 'Conditions <em>Générales</em>',
  'terms.section1.p1': 'En accédant ou utilisant le site web Travel Readz, vous acceptez d\'être lié par ces conditions. Si vous n\'acceptez pas une partie d\'entre elles, veuillez ne pas utiliser le site ou acheter nos produits.',
  'terms.section1.p2': 'Tout le contenu de ce site web — guides, outils, texte, images — est fourni à des fins informatives et d\'utilisation personnelle. Nous veillons à le maintenir précis et utile, mais nous ne garantissons pas que chaque détail soit complet ou à jour en permanence. Le Maroc change ; nous mettons à jour quand nous pouvons.',

  'terms.section2.num': 'Achats',
  'terms.section2.title': 'Achats & <em>Remboursements</em>',
  'terms.section2.p1': 'Tous les produits vendus par Travel Readz sont numériques — guides, cartes, calculateurs et matériels bonus. Comme les produits numériques sont livrés immédiatement à l\'achat, toutes les ventes sont définitives par défaut.',
  'terms.section2.p2': 'Cela dit, nous ne voulons pas de clients mécontents. Si vous avez un vrai problème — un fichier qui ne s\'ouvre pas, un contenu qui ne correspond pas à la description, un problème technique de notre côté — contactez-nous à <a href="mailto:support@travelreadz.com">support@travelreadz.com</a> et nous le résoudrons. Nous traitons chaque cas individuellement.',
  'terms.section2.highlight': 'Nous ne proposons pas de remboursements purement sur la base de "j\'ai changé d\'avis" pour les produits numériques. S\'il y a un vrai problème, nous le réparons ou le corrigeons.',

  'terms.section3.num': 'Utilisation du Site',
  'terms.section3.title': 'Utilisation du <em>Site</em>',
  'terms.section3.p1': 'Vous pouvez utiliser le site web Travel Readz à des fins personnelles et non commerciales. Vous ne pouvez pas tenter de gratter, copier, ingénier à rebours ou reproduire notre contenu ou produits sans autorisation écrite préalable.',
  'terms.section3.p2': 'Vous ne pouvez pas utiliser le site de manière à perturber son fonctionnement, tenter d\'accéder sans autorisation à une partie de celui-ci, ou violer une loi locale, nationale ou internationale applicable.',

  'terms.section4.num': 'Propriété Intellectuelle',
  'terms.section4.title': 'Propriété <em>Intellectuelle</em>',
  'terms.section4.p1': 'Tout le contenu de ce site web — y compris les guides de voyage, outils numériques, copie écrite, design visuel, cartes et marque — est la propriété intellectuelle de Travel Readz et est protégé par la loi sur le droit d\'auteur applicable.',
  'terms.section4.p2': 'Lorsque vous achetez un produit, vous recevez une licence personnelle, non transférable pour l\'utiliser à des fins de voyage personnelles. Vous ne pouvez pas reproduire, redistribuer, revendre ou partager publiquement le contenu — en tout ou partie — sans notre autorisation écrite explicite.',

  'terms.section5.num': 'Responsabilité',
  'terms.section5.title': 'Limitation de <em>Responsabilité</em>',
  'terms.section5.p1': 'Nos guides contiennent des conseils pratiques et recommandations locales basées sur une vraie connaissance du Maroc. Cependant, le voyage comporte par nature de l\'incertitude — les prix changent, les lieux ferment, les conditions évoluent. Travel Readz ne peut être tenu responsable de toute perte, désagrément ou dommage résultant des décisions prises sur la base de notre contenu.',
  'terms.section5.p2': 'Dans tous les cas, notre responsabilité envers vous ne dépassera pas le montant que vous avez payé pour le produit en question. Nous ne sommes pas responsables des services tiers — transport, hébergement ou activités — mentionnés dans nos matériels.',

  'terms.section6.num': 'Modifications',
  'terms.section6.title': 'Modifications de <em>Ces Conditions</em>',
  'terms.section6.p1': 'Nous pouvons mettre à jour ces conditions de temps en temps. Quand nous le faisons, la version mise à jour sera publiée sur cette page avec une date révisée. L\'utilisation continue du site web après publication des modifications constitue votre acceptation des conditions révisées.',
  'terms.section6.p2': 'Si nous apportons un changement matériel qui affecte significativement vos droits en tant que client, nous ferons des efforts raisonnables pour notifier les acheteurs existants par email.',

  'terms.section7.num': 'Contact',
  'terms.section7.title': 'Questions & <em>Contact</em>',
  'terms.section7.p1': 'Si vous avez des questions sur ces conditions, ou si quelque chose ici n\'est pas clair, veuillez nous contacter. Nous préférons expliquer plutôt que de vous laisser dans l\'incertitude sur ce à quoi vous avez accepté.',
  'terms.section7.p2': 'Envoyez-nous un email à <a href="mailto:support@travelreadz.com">support@travelreadz.com</a> — nous répondons sous 24 heures.',

  'terms.cta.eyebrow': 'Prêt à Partir',
  'terms.cta.title': 'Le Maroc vous attend.<br><em>Votre guide est prêt.</em>',
  'terms.cta.subtitle': 'Cartes locales, connaissances culturelles, outils budgétaires et support direct — tout en un seul endroit.',
  'terms.cta.button': 'Obtenir le Guide Travel Readz', 

  // Budget Calculator page
  'budget.hero.badge': '💰 Outil Budget',
  'budget.hero.title': 'Calculateur de\n<em>Budget Voyage</em>',
  'budget.hero.desc': 'Définissez votre budget, enregistrez vos dépenses au fil du temps et comparez-les — un outil universel pour les voyageurs dans n\'importe quel pays.',
  'budget.hero.cta': 'Acheter Séparément — 4,99 €',
  'budget.hero.subtext': '✦ Inclus gratuitement avec chaque achat de guide Travel Readz',
  'budget.hero.statLabel': 'Catégories de Dépenses',
  'budget.hero.verified': 'Fonctionne dans N\'importe Quel Pays',

  'budget.features.eyebrow': 'Ce que vous obtenez',
  'budget.features.title': 'Restez Maître de <em>Chaque Dirham</em>',
  'budget.features.desc': 'Planifiez à l\'avance, suivez en déplacement et passez en revue à la fin. La manière la plus simple de voyager sans stress financier.',

  'budget.feature1.title': 'Planification Pré-Voyage',
  'budget.feature1.desc': 'Définissez des budgets par catégories avant de partir — hébergement, nourriture, transport, activités — pour savoir exactement ce que vous pouvez dépenser chaque jour.',
  'budget.feature2.title': 'Suivi en Temps Réel',
  'budget.feature2.desc': 'Enregistrez chaque dépense au fur et à mesure. Chaque entrée met à jour automatiquement vos totaux en cours pour éviter les surprises en fin de journée.',
  'budget.feature3.title': 'Comparaison Budget',
  'budget.feature3.desc': 'Voyez prévu vs réel d\'un coup d\'œil. Comprenez où vous avez dépassé et où vous avez économisé — utile pour tous vos futurs voyages aussi.',
  'budget.feature4.title': 'Outil Universel',
  'budget.feature4.desc': 'Fonctionne dans n\'importe quel pays, n\'importe quelle devise. Que vous soyez au Maroc ou ailleurs dans le monde, la structure s\'adapte à votre voyage.',

  'budget.content.eyebrow': 'Conçu pour de Vrais Voyageurs',
  'budget.content.title': 'Aucune compétence en tableur requise.<br><em>Ouvrez et commencez.</em>',
  'budget.content.desc': 'La plupart des voyageurs improvisent et dépensent trop, ou stressent avec des tableurs complexes. Cet outil se situe au milieu — assez simple pour une utilisation quotidienne, assez structuré pour vous donner un vrai aperçu de l\'endroit où va votre argent.',
  'budget.content.note': 'Conçu comme un fichier Google Sheets. Pas d\'installation, pas de connexion, pas d\'app — ouvrez simplement sur votre téléphone ou ordinateur portable et ça fonctionne immédiatement.',
  'budget.content.listLabel': 'Ce qu\'il Contient',
  'budget.content.item1': 'Planificateur de budget quotidien par catégorie',
  'budget.content.item2': 'Journal des dépenses avec totaux automatiques',
  'budget.content.item3': 'Vue de comparaison prévu vs réel',
  'budget.content.item4': 'Flexible en devise (fonctionne dans n\'importe quel pays)',
  'budget.content.item5': 'Estimations de coûts Maroc pré-remplies',
  'budget.content.item6': 'Format Google Sheets adapté mobile',
  'budget.content.item7': 'Accès instantané — pas de téléchargement requis',

  'budget.reviews.eyebrow': 'Avis des Voyageurs',
  'budget.reviews.title': 'Ce que les <em>Voyageurs</em> Disent',
  'budget.reviews.subtitle': 'Des voyageurs solo aux couples — les acheteurs vérifiés partagent leur expérience.',
  'budget.review1.text': '"Cet outil m\'a aidé à planifier mon budget avant le voyage et à m\'y tenir réellement. Voir prévu vs dépensé a fait une énorme différence."',
  'budget.review1.role': 'Voyageur Solo · Acheteur Vérifié',
  'budget.review2.text': '"Simple, clair et étonnamment puissant. J\'ai enfin compris où allait mon argent pendant mon voyage."',
  'budget.review2.role': 'Voyageur en Couple · Acheteur Vérifié',
  'budget.review3.text': '"Parfait pour n\'importe quel pays. J\'ai planifié mon budget à l\'avance et j\'ai adoré le comparer avec mes dépenses réelles à la fin."',
  'budget.review3.role': 'Voyageur d\'Aventure · Acheteur Vérifié',

  'budget.bonus.badge': 'Bonus Inclus',
  'budget.bonus.title': 'Autres Cadeaux <em>dans le Paquet</em>',
  'budget.bonus.subtitle': 'Valeur 24,99 € — inclus avec chaque achat de guide',

  'budget.finalCta.eyebrow': 'Obtenez Votre Guide',
  'budget.finalCta.title': 'Voyagez au Maroc sans <em>Stress Financier.</em>',
  'budget.finalCta.subtitle': 'Obtenez le guide complet Travel Readz et recevez ce calculateur de budget gratuit — avec assistance voyage privée, cartes personnalisées et guide d\'étiquette culturelle.',
  'budget.finalCta.button': 'Obtenir le Guide Travel Readz',
  'budget.finalCta.note': '✦ Ou acheter ce calculateur séparément pour 4,99 €',
  'budget.finalCta.trust1': '✓ Accès Instantané',
  'budget.finalCta.trust2': '✓ Format Google Sheets',
  'budget.finalCta.trust3': '✓ Fonctionne sur Tous les Appareils',
  'budget.finalCta.trust4': '✓ 4 Bonus Gratuits',

  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Experiencias",
    "nav.about": "Blog",
    "nav.cta": "Obtén Tu Guía",

    // Hero Section
    "hero.badge": "🌍 Escrito por un Local de Marruecos",
    "hero.title": "Visita Marruecos como un local — no como un turista perdido.",
    "hero.subtitle": "Escrito por <strong>un marroquí que vive allí cada día,</strong>esta guía te ayuda a evitar estafas, ahorrar dinero y descubrir el verdadero Marruecos — no la versión turística cara.",
    "hero.stats.pages": "Páginas",
    "hero.stats.chapters": "Capítulos",
    "hero.stats.support": "Soporte WhatsApp",
    "hero.cta.button": "Cuesta menos que un solo error - $9.99",
    "hero.cta.instant": "✓ Descarga Instantánea",
    "hero.cta.secure": "✓ Pago Seguro",
    "hero.badges.hidden": "Joyas Ocultas Reveladas",
    "hero.badges.scam": "Consejos Anti-Estafas",
    "hero.badges.restaurant": "Restaurantes Locales Seleccionados",

    // Book Selector
    "bookSelector.label": "Elige Tu Versión de Idioma:",

    // Problem Section
    "problem.eyebrow": "El Problema",
    "problem.title": "¿Cansado de Guías de Viaje Genéricas?",
    "problem.card1.title": "Restaurantes Trampa para Turistas",
    "problem.card1.desc": "Tajines caros con sabor mediocre mientras los locales comen comida auténtica a la vuelta de la esquina",
    "problem.card2.title": "Estafas Comunes",
    "problem.card2.desc": "Guías falsos, precios inflados y \"tours\" innecesarios dirigidos a viajeros desinformados",
    "problem.card3.title": "Errores Culturales",
    "problem.card3.desc": "Ofender accidentalmente a los locales o destacar como un turista obvio debido a la falta de conocimiento cultural",
    "problem.card4.title": "Itinerarios Predecibles",
    "problem.card4.desc": "Seguir la misma ruta abarrotada que todos los demás turistas, perdiendo el verdadero Marruecos",
    "problem.solution": "<strong>Te mereces algo mejor.</strong> Esta guía resuelve todos estos problemas con conocimiento interno de un verdadero local.",

    // Why Different Section
    "whyDifferent.badge": "La Diferencia",
    "whyDifferent.title": "Por Qué Esta Guía Destaca",
    "whyDifferent.subtitle": "No es solo otro libro de viajes genérico. Este es tu acceso privilegiado a Marruecos.",
    "whyDifferent.feature1.title": "Escrito por un Local Real",
    "whyDifferent.feature1.desc": "Vivo en Marruecos. Esto no está basado en unas vacaciones de 2 semanas—son décadas de experiencia real, comprensión cultural y conexiones locales.",
    "whyDifferent.feature2.title": "Joyas Ocultas Solo Conocidas por Locales",
    "whyDifferent.feature2.desc": "Playas secretas, pueblos de montaña y restaurantes familiares que los turistas nunca descubren",
    "whyDifferent.feature3.title": "Soporte WhatsApp Gratuito",
    "whyDifferent.feature3.desc": "¿Perdido en una medina? ¿Necesitas una recomendación? Envíame un mensaje directamente para ayuda en tiempo real",
    "whyDifferent.feature4.title": "Estrategias de Prevención de Estafas",
    "whyDifferent.feature4.desc": "Aprende las tácticas exactas que usan los estafadores y cómo evitarlas como un profesional",

    // What's Inside Section
    "whatsInside.badge": "Dentro de la Guía",
    "whatsInside.title": "Todo lo que Necesitas para un Viaje Increíble a Marruecos",
    "whatsInside.item1.title": "Guías Completas de Ciudades",
    "whatsInside.item1.desc": "Marrakech, Fez, Casablanca, Chefchaouen, Essaouira, y más. Dónde alojarse, comer y qué evitar.",
    "whatsInside.item2.title": "Dominio Cultural",
    "whatsInside.item2.desc": "Navega las costumbres marroquíes con confianza. Códigos de vestimenta, saludos, propinas, regateo y etiqueta social explicados.",
    "whatsInside.item3.title": "Mapa de Joyas Ocultas",
    "whatsInside.item3.desc": "Lugares secretos que solo los locales conocen. Hermosos lugares que no encontrarás en las guías principales.",
    "whatsInside.item4.title": "Guía de Comida y Restaurantes",
    "whatsInside.item4.desc": "Mejores tajines, seguridad de comida callejera, evitar trampas turísticas y dónde comen realmente los locales.",
    "whatsInside.item5.title": "Itinerarios Detallados",
    "whatsInside.item5.desc": "Rutas de 7, 10 y 14 días para diferentes presupuestos y estilos de viaje. Listos para copiar y pegar.",
    "whatsInside.item6.title": "Desierto y Montañas",
    "whatsInside.item6.desc": "Aventuras en el desierto del Sahara, trekking en el Atlas, escapadas costeras y actividades al aire libre.",
    "whatsInside.item7.title": "Esenciales Prácticos",
    "whatsInside.item7.desc": "Trucos de transporte, tarjetas SIM, cambio de dinero, consejos de seguridad y qué empacar.",
    "whatsInside.item8.title": "Planificación de Presupuesto",
    "whatsInside.item8.desc": "Desglose real de costos, estrategias de ahorro y presupuestos diarios para cada estilo de viaje.",

    // Preview
    "preview.eyebrow": "Vista Previa",
    "preview.title": "Una Mirada <em>al Interior</em>",

    // Testimonials
    "testimonials.badge": "Opiniones de Viajeros",
    "testimonials.title": "Lo Que Dice la Gente",
    "testimonials.topReview": "Mejor Opinión",
    "testimonials.verified": "Compra Verificada",
    "testimonials.review1.text": "\"Esta guía me salvó de tantas trampas turísticas. Las recomendaciones de restaurantes locales por sí solas valieron el precio. ¡Finalmente encontré comida marroquí auténtica!\"",
    "testimonials.review1.title": "Mochilera de Canadá",
    "testimonials.review2.text": "\"He leído más de 5 guías de Marruecos y esta es la única escrita por alguien que realmente vive allí. Los consejos culturales me ayudaron a evitar situaciones embarazosas y conectar con los locales.\"",
    "testimonials.review2.title": "Nómada Digital",
    "testimonials.review3.text": "\"El soporte de WhatsApp fue un salvavidas cuando me perdí en la medina de Fez. Recibí una respuesta en minutos con instrucciones claras. ¡Vale cada centavo!\"",
    "testimonials.review3.title": "Viajero Solo",
    "testimonials.review4.text": "\"Mejor inversión para mi viaje a Marruecos. Las advertencias sobre estafas me ahorraron cientos de dólares, y la sección de joyas ocultas me llevó a los lugares más hermosos.\"",
    "testimonials.review4.title": "Buscador de Aventuras",

    // Bonus Section
    "bonus.badge": "Bonos Gratuitos",
    "bonus.title": "Obtén Estos <em>Extras</em> Gratis",
    "bonus.subtitle": "Valor de $29.99 — Tuyo gratis cuando obtienes la guía hoy",
    "bonus.item1.value": "Valor: $4.99",
    "bonus.item1.title": "Mini Guía de Etiqueta Cultural",
    "bonus.item1.desc": "Guía de referencia rápida sobre costumbres y normas sociales marroquíes",
    "bonus.item2.value": "Valor: $5",
    "bonus.item2.title": "Google Maps Personalizados",
    "bonus.item2.desc": "Mapas precargados con todos los lugares recomendados para una navegación fácil",
   "bonus.whatsapp.value": "Valor $15",
"bonus.whatsapp.title": "Asistencia WhatsApp Privada",
"bonus.whatsapp.desc": "Soporte exclusivo para compradores — consejos de viaje rápidos y claros cuando los necesites.",
"bonus.whatsapp.link": "Saber Más →",
    "bonus.item4.value": "Valor: $5",
    "bonus.item4.title": "Herramienta Calculadora de Presupuesto",
    "bonus.item4.desc": "Planifica tus gastos con precisión con nuestra calculadora interactiva",
    "bonus.learnMore": "Saber Más →",

    // Pricing
    "pricing.title": "Obtén la Guía Completa de Marruecos",
    "pricing.feature1": "Guía completa de más de 40 páginas",
    "pricing.feature2": "10 capítulos detallados",
    "pricing.feature3": "Escrita por un local de Marruecos",
    "pricing.feature4": "Mini guía de etiqueta cultural gratis",
    "pricing.feature5": "Google Maps personalizados gratis",
    "pricing.feature6": "Soporte WhatsApp gratis",
    "pricing.feature7": "Calculadora de presupuesto gratis",
    "pricing.feature8": "Descarga digital instantánea",
    "pricing.feature9": "Acceso de por vida y actualizaciones",
    "pricing.priceLabel": "Pago Único",
    "pricing.priceNote": "Acceso Instantáneo · Sin Suscripción",
    "pricing.button": "Descargar Ahora",

    // Journal Section
    "journal.eyebrow": "Del Blog",
    "journal.title": "Últimas <em>Historias</em> y Consejos",
    "journal.subtitle": "Crónicas reales desde las medinas, montañas y carreteras desérticas de Marruecos.",
    "journal.post1.tag": "Guía de Ciudad",
    "journal.post1.date": "Marzo 2025",
    "journal.post1.read": "6 min de lectura",
    "journal.post1.title": "Los Barrios Ocultos de la Medina de Fez que los Turistas Nunca Encuentran",
    "journal.post1.excerpt": "Más allá de las tenerías y el circuito turístico hay un laberinto de callejuelas donde los locales aún hornean pan en hornos comunales y los artesanos trabajan en silencio.",
    "journal.post2.tag": "Guía Anti-Estafas",
    "journal.post2.date": "Febrero 2025",
    "journal.post2.read": "8 min de lectura",
    "journal.post2.title": "12 Estafas en Marruecos — Y Exactamente Cómo Esquivar Cada Una",
    "journal.post2.excerpt": "Desde la henna \"gratis\" en Jemaa el-Fna hasta la redirección a la tienda de alfombras, aquí están las tácticas que usan los estafadores y las palabras precisas que las detienen.",
    "journal.post3.tag": "Comida y Bebida",
    "journal.post3.date": "Enero 2025",
    "journal.post3.read": "5 min de lectura",
    "journal.post3.title": "Dónde Comen Realmente los Locales en Marrakech (No en TripAdvisor)",
    "journal.post3.excerpt": "Los restaurantes que los locales se recomiendan entre sí nunca están en la plaza principal. Aquí hay un desglose barrio a barrio de los lugares reales.",
    "journal.readMore": "Leer Artículo →",
    "journal.allPosts": "Leer Todos los Artículos",

    // Experiences Section
    "experiences.eyebrow": "Experiencias Seleccionadas",
    "experiences.title": "Explora Nuestros <em>Tours en Marruecos</em>",
    "experiences.button": "Explorar Todas las Experiencias",

    // FAQ
    "faq.eyebrow": "FAQ",
    "faq.title": "Preguntas Frecuentes",
    "faq.q1.question": "¿Esta guía está realmente escrita por un local?",
    "faq.q1.answer": "¡Sí! He vivido en Marruecos durante años y sigo viviendo aquí. Esto no está basado en unas vacaciones—es experiencia real vivida.",
    "faq.q2.question": "¿En qué formato está la guía?",
    "faq.q2.answer": "Formato PDF que funciona en todos los dispositivos—teléfono, tableta, computadora. Descarga instantánea después de la compra.",
    "faq.q3.question": "¿Recibo actualizaciones?",
    "faq.q3.answer": "¡Sí! Actualizaciones gratuitas de por vida cada vez que agregue nuevo contenido o actualice información.",
    "faq.q4.question": "¿Cómo funciona el soporte de WhatsApp?",
    "faq.q4.answer": "Obtendrás mi número de WhatsApp en la guía. ¡Envíame un mensaje en cualquier momento durante tu viaje con preguntas!",

    // Final CTA
    "finalCta.eyebrow": "Empieza Aquí",
    "finalCta.title": "¿Listo para Experimentar el <em>Verdadero Marruecos?</em>",
    "finalCta.subtitle": "Únete a cientos de viajeros que han descubierto Marruecos al estilo local.",
    "finalCta.button": "Descarga Tu Guía Ahora — $9.99",
    "finalCta.instant": "✓ Descarga Instantánea",
    "finalCta.secure": "✓ Pago Seguro",
    "finalCta.lifetime": "✓ Acceso de por Vida",

    // Footer
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.contact": "Contáctanos",
    "footer.about": "Acerca de",
    "footer.copyright": "© 2025 Travel Readz. Todos los Derechos Reservados.",
 
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Experiencias",
    "nav.about": "Blog",
    "nav.cta": "Obtén Tu Guía",

    // Page Hero
    "shop.hero.eyebrow": "Marruecos, A Tu Manera",
    "shop.hero.subtitle": "Vive Marruecos en el terreno, o llévalo en tu bolsillo.",

    // Tab Bar
    "tab.experiences.title": "Experiencias",
    "tab.experiences.sub": "Tours, actividades e insurance",
    "tab.digital.title": "Productos Digitales",
    "tab.digital.sub": "Guías, templates y presets",

    // Experiences Panel
    "exp.eyebrow": "Antes de Ir",
    "exp.title": "Reserva Tus <em>Experiencias</em>",
    "exp.tours.label": "Tours y Actividades Curados",

    // Insurance
    "shop.badge.recommended": "Recomendado",
    "shop.insurance.title": "Seguro de Viaje SafetyWing",
    "shop.insurance.desc": "Cobertura médica de viaje asequible confiable por nómadas mundialmente. 180+ países, planes mensuales flexibles — cúbrete antes de tu aventura marroquí.",
    "shop.insurance.feature1": "🌍 180+ países",
    "shop.insurance.feature2": "💰 Desde $45/mes",
    "shop.insurance.feature3": "📱 Cobertura instantánea",
    "shop.insurance.cta": "Obtén Protección",

    // Tour Badges
    "shop.badge.bestseller": "Más Vendido",
    "shop.badge.popular": "Popular",
    "shop.badge.topRated": "Mejor Valorado",

    // Tour 1: Desert Adventure
    "shop.tour1.location": "📍 Marrakech → Merzouga",
    "shop.tour1.title": "Aventura de 3 Días al Desierto del Sahara",
    "shop.tour1.desc": "Paseos en camello, camping en desierto bajo las estrellas y hospitalidad bereber auténtica por paisajes impresionantes.",
    "shop.tour1.feature1": "⏱️ 3 días",
    "shop.tour1.feature2": "🚗 Recogida incluida",
    "shop.tour1.feature3": "🍽️ Comidas incluidas",

    // Tour 2: Imperial Cities
    "shop.tour2.location": "📍 Múltiples Ciudades",
    "shop.tour2.title": "Ciudades Imperiales & Chefchaouen: Tour Cultural de 3 Días",
    "shop.tour2.desc": "Tesoros históricos de Marruecos y la impresionante Perla Azul — medinas antiguas y arquitectura magnífica.",
    "shop.tour2.feature1": "⏱️ 3 días",
    "shop.tour2.feature2": "🏛️ Sitios UNESCO",
    "shop.tour2.feature3": "👥 Grupos pequeños",

    // Tour 3: Hassan II Mosque
    "shop.tour3.location": "📍 Casablanca",
    "shop.tour3.title": "Mezquita Hassan II: Tour Guiado Premium",
    "shop.tour3.desc": "Una de las mezquitas más grandes del mundo con acceso guiado premium. Artesanía marroquí exquisita y vistas al océano.",
    "shop.tour3.feature1": "⏱️ 2 horas",
    "shop.tour3.feature2": "🎫 Sin colas",
    "shop.tour3.feature3": "🎧 Audioguía",

    // Tour 4: Hot Air Balloon
    "shop.tour4.location": "📍 Marrakech",
    "shop.tour4.title": "Vuelo en Globo & Desayuno Bereber",
    "shop.tour4.desc": "Vuela sobre las montañas del Atlas al amanecer y disfruta desayuno bereber auténtico — vistas garantizadas espectaculares.",
    "shop.tour4.feature1": "⏱️ 4 horas",
    "shop.tour4.feature2": "🌅 Vuelo amanecer",
    "shop.tour4.feature3": "☕ Desayuno",

    // Tour 5: Ourika Waterfalls
    "shop.tour5.location": "📍 Montañas Atlas",
    "shop.tour5.title": "Cascadas Ourika & Excursión Montañas Atlas",
    "shop.tour5.desc": "Vistas panorámicas de montaña, caminatas a cascadas y almuerzo incluido en el refrescante Valle Ourika.",
    "shop.tour5.feature1": "⏱️ Día completo",
    "shop.tour5.feature2": "🥾 Senderismo",
    "shop.tour5.feature3": "🍽️ Almuerzo incluido",

    // Tour 6: Agafay Desert
    "shop.tour6.location": "📍 Desierto Agafay",
    "shop.tour6.title": "Desierto Agafay: Quad, Camello & Show Cena",
    "shop.tour6.desc": "Motos quad, paseos en camello y espectacular show de cena bajo las estrellas. La aventura nocturna perfecta.",
    "shop.tour6.feature1": "⏱️ Noche",
    "shop.tour6.feature2": "🏍️ Motos quad",
    "shop.tour6.feature3": "🎭 Show en vivo",

    // Tour 7: Majorelle Garden
    "shop.tour7.location": "📍 Marrakech",
    "shop.tour7.title": "Jardín Majorelle & Museo YSL: Entrada",
    "shop.tour7.desc": "El icónico jardín azul cobalto y el legado de Yves Saint Laurent — el jardín más hermoso de Marrakech.",
    "shop.tour7.feature1": "⏱️ 2-3 horas",
    "shop.tour7.feature2": "🎫 Entradas",
    "shop.tour7.feature3": "📸 Puntos foto",

    // Common
    "shop.reviews": "reseñas",
    "shop.checkAvailability": "Ver Disponibilidad →",

    // Digital Products
    "shop.section.digital.eyebrow": "Descargas Digitales",
    "shop.section.guides": "Guías de <em>Viaje</em>",
    "shop.section.templates.eyebrow": "Herramientas Creativas",
    "shop.section.templates": "Templates & <em>Presets</em>",

    // Product Badges
    "shop.badge.new": "Nuevo",
    "shop.badge.sale": "-20%",
    "shop.badge.free": "100% Gratis",
    "shop.badge.trending": "Tendencia",
    "shop.badge.hot": "Popular 🔥",

    // Product 1: Morocco Guide
    "shop.product1.category": "Guía de Viaje",
    "shop.product1.title": "Desbloqueando Marruecos: Guía Definitiva 2026",
    "shop.product1.desc": "Guía completa con 10 capítulos, consejos de insiders, itinerarios de ciudades y contenido bonus.",

    // Product 2: Etiquette
    "shop.product2.category": "Etiqueta de Viaje",
    "shop.product2.title": "Etiqueta de Viaje Marruecos: Qué Hacer & No Hacer",
    "shop.product2.desc": "Etiqueta cultural esencial, reglas de vestimenta y costumbres locales — viaja a Marruecos respetuosamente.",

    // Product 3: Budget Calculator
    "shop.product3.category": "Calculadora Presupuesto",
    "shop.product3.title": "Calculadora de Presupuesto de Viaje",
    "shop.product3.desc": "Establece tu presupuesto, rastrea gastos — herramienta universal para viajeros.",

    // Product 4: Marrakech Map
    "shop.product4.category": "Guía Google Maps",
    "shop.product4.title": "Guía de Viaje Google Maps Marrakech",
    "shop.product4.desc": "Atracciones seleccionadas, joyas ocultas, riads y consejos locales — guardado en Google Maps.",

    // Template 1: Lightroom
    "shop.template1.category": "Edición Foto",
    "shop.template1.title": "Presets Lightroom Viajes Moody",
    "shop.template1.desc": "Transforma tus fotos con look cinematográfico cálido de viaje en un clic.",

    // Template 2: Instagram Stories
    "shop.template2.category": "Redes Sociales",
    "shop.template2.title": "Templates Instagram Stories para Creadores de Viajes",
    "shop.template2.desc": "Stories Instagram premium y elegantes diseñados para creadores que quieren presencia profesional.",

    // Template 3: Reels
    "shop.template3.category": "Edición Video",
    "shop.template3.title": "730+ Reels Instagram Virales — Listos para Publicar",
    "shop.template3.desc": "Reels estilo viral de alta calidad para crecer más rápido y ahorrar horas de creación de contenido.",

    // Template 4: Canva
    "shop.template4.category": "Templates Canva",
    "shop.template4.title": "3000+ Templates de Diseño Instagram",
    "shop.template4.desc": "Templates diseñados profesionalmente para crear posts, stories y reels llamativos en minutos.",

    // Template 5: Watercolor
    "shop.template5.category": "Acuarela",
    "shop.template5.title": "Clipart Viajes del Mundo en Acuarela",
    "shop.template5.desc": "Hermosos monumentos acuarela, mapas e iconos de viaje para invitaciones, planificadores y proyectos.",

    // Template 6: Hand-Drawn
    "shop.template6.category": "Ilustraciones Dibujadas a Mano",
    "shop.template6.title": "Clipart Viajes — Ilustraciones Dibujadas a Mano",
    "shop.template6.desc": "Encantadoras ilustraciones dibujadas a mano para blogueros, diseñadores y creadores que quieren gráficos únicos.",

    // Common product elements
    "shop.quickView": "Ver Detalles →",
    "shop.buyNow": "Comprar Ahora →",

    // Bundle Banner
    "shop.banner.eyebrow": "Tiempo Limitado",
    "shop.banner.title": "🎁 Bundle Completo <em>Marruecos</em>",
    "shop.banner.desc": "Obtén la colección completa de viaje y ahorra 40% al agrupar todas las guías juntas.",
    "shop.banner.button": "Ver Oferta Bundle",

    // Final CTA
    "finalCta.eyebrow": "Empieza Aquí",
    "finalCta.title": "¿Listo para Experimentar<br>el <em>Verdadero Marruecos?</em>",
    "finalCta.subtitle": "Únete a cientos de viajeros que han descubierto Marruecos al estilo local.",
    "finalCta.button": "Descarga Tu Guía Ahora — $9.99",
    "finalCta.instant": "✓ Descarga Instantánea",
    "finalCta.secure": "✓ Pago Seguro",
    "finalCta.lifetime": "✓ Acceso de por Vida",

    // Footer
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.contact": "Contáctanos",
    "footer.about": "Acerca de",
    "footer.copyright": "© 2025 Travel Readz. Todos los Derechos Reservados.",

    // ===================================
// ABOUT PAGE - ESPAÑOL (COMPLETE)
// ===================================
"about.hero.eyebrow": "Quiénes Somos",
"about.hero.title": "Hecho por Marroquíes.<br><em>Para Viajeros.</em>",
"about.hero.subtitle": "No creamos otro blog de viajes genérico. Construimos una caja de herramientas — moldeada por conocimiento local real, para viajeros que quieren experimentar Marruecos correctamente.",

"about.story.label": "Fundado en 2024",
"about.story.statDesc": "Viajeros guiados por Marruecos",
"about.story.statDesc2": "Herramientas digitales premium en una guía",
"about.story.title": "Una guía escrita desde<br><em>dentro hacia fuera.</em>",
"about.story.p1": "La mayoría del contenido de viajes a Marruecos está escrito por turistas que pasaron dos semanas aquí. Travel Readz es diferente — está construido por personas nacidas y criadas en Marruecos, que saben qué riads valen la pena, qué guías son auténticas y qué zocos evitar un martes.",
"about.story.pull": "\"Marruecos no es difícil de navegar. Solo es más fácil cuando alguien que lo conoce camina a tu lado — y eso es exactamente lo que hace esta guía.\"",
"about.story.p2": "Empezamos Travel Readz después de ver a demasiados visitantes pasar su tiempo limitado perdidos, cobrados de más o perdiéndose las experiencias que hacen Marruecos inolvidable. La guía creció de esa frustración hasta convertirse en una caja de herramientas completa — mapas, planificación presupuestaria, etiqueta cultural y soporte directo — todo lo que un viajero realmente necesita, en un solo lugar.",
"about.story.p3": "Cada palabra fue escrita pensando en un viajero específico: alguien que quiere ir más allá de la postal, gastar sabiamente y volver con historias que no empiecen con \"nos perdimos un poco…\"",

"about.values.eyebrow": "Por Qué Elegirnos",
"about.values.title": "Lo que distingue Travel Readz <em>de los demás</em>",
"about.values.subtitle": "Cuatro cosas en las que nos negamos a comprometer — sin importar qué.",
"about.values.card1.title": "Local, No Turístico",
"about.values.card1.desc": "Cada recomendación en nuestra guía es un lugar donde hemos estado nosotros mismos — no un placement pagado, no un agregado de blogs. Si no lo respaldamos, no entra.",
"about.values.card2.title": "Precisión Sobre Volumen",
"about.values.card2.desc": "No te damos 200 opciones y lo llamamos guía. Te damos las 20 que realmente importan, claramente explicadas — para que puedas planear un viaje en horas, no días.",
"about.values.card3.title": "Respeto Integrado",
"about.values.card3.desc": "Nuestra guía de etiqueta cultural existe porque creemos que viajar respetuosamente lleva a mejores viajes. Conocer las costumbres no es solo cortés — abre puertas que permanecen cerradas para la mayoría de los visitantes.",
"about.values.card4.title": "Soporte Real, Personas Reales",
"about.values.card4.desc": "La asistencia de viaje privada no es un chatbot ni una página de FAQ. Es acceso directo a alguien en Marruecos que puede responder tu pregunta real, en tiempo real, mientras estás parado en un zoco.",

"about.team.eyebrow": "Las Personas Detrás",
"about.team.title": "Tres Marroquíes. <em>Una misión.</em>",
"about.team.subtitle": "No subcontratamos esto. Cada parte de Travel Readz fue construida por nosotros — personas que conocen este país, lo aman y quieren que otros lo experimenten correctamente.",
"about.team.member1.name": "Soufiane",
"about.team.member1.role": "Fundador & Experto Guía Local",
"about.team.member1.bio": "Nacido en Marruecos, ha recorrido cada rincón. Soufiane construyó la guía a partir de años recibiendo visitantes y viendo cómo cometían los mismos errores evitables — luego escribió la versión que deseaba que tuvieran.",
"about.team.member2.name": "Lahcen",
"about.team.member2.role": "Contenido & Estrategia Marca",
"about.team.member2.bio": "Lahcen moldea cómo habla Travel Readz — asegurándose de que cada palabra sea clara, honesta y útil. Es la razón por la que la guía se lee como consejos de un amigo, no de un folleto.",
"about.team.member3.name": "Hamza",
"about.team.member3.role": "Diseño & Productos Digitales",
"about.team.member3.bio": "Hamza diseña cada herramienta del paquete — los mapas, la calculadora presupuestaria, el diseño de la guía misma. Si se ve limpio y funciona perfectamente, es él.",

"about.morocco.eyebrow": "Por Qué Marruecos",
"about.morocco.title": "Un país que exige <em>ser comprendido</em>",
"about.morocco.subtitle": "Marruecos no es un destino pasivo. Recompensa la curiosidad, castiga los atajos y devuelve el doble a quienes llegan preparados.",
"about.morocco.card1.title": "Historia Viva",
"about.morocco.card1.desc": "Las medinas aquí no son museos — la gente vive, trabaja y comercia en ellas exactamente como lo han hecho durante siglos. Entender ese contexto cambia todo sobre cómo moverse por ellas.",
"about.morocco.card2.title": "Variedad Extrema",
"about.morocco.card2.desc": "Desierto, montañas, costa atlántica, ciudades imperiales, pueblos bereberes — Marruecos condensa más paisaje y cultura en un país de lo que la mayoría de los viajeros esperan. La planificación importa aquí.",
"about.morocco.card3.title": "Comida Que Vale la Pena Buscar",
"about.morocco.card3.desc": "La mejor comida en Marruecos nunca está en el restaurante turístico frente a la plaza. Saber dónde comer — y qué pedir — marca la diferencia entre una comida y un recuerdo.",
"about.morocco.card4.title": "Hospitalidad Real",
"about.morocco.card4.desc": "La hospitalidad marroquí no es una frase de marketing. Pero tampoco es incondicional. Saber cómo recibirla, responderla y reciprocarla hace que cada interacción humana sea más rica.",
"about.morocco.card5.title": "Artesanía & Oficios",
"about.morocco.card5.desc": "Zellige, alfombras anudadas a mano, curtido de cuero a mano en cubas abiertas — los oficios de Marruecos aún se hacen a la antigua. Saber qué estás mirando convierte el zoco en museo, no en mercado.",
"about.morocco.card6.title": "El Ritmo Correcto",
"about.morocco.card6.desc": "Marruecos se mueve lentamente a propósito. Un itinerario apresurado lo pierde todo. Los mejores momentos aquí — té de menta en una azotea, llamada a la oración al atardecer, conversación que no lleva a ningún lugar útil — no se pueden programar.",
"about.morocco.closing": "\"Travel Readz existe para que cuando llegues a Marruecos, llegues preparado — no para atravesarlo corriendo, sino para realmente estar en él.\"",
"about.morocco.closingSource": "— Soufiane, Fundador",

"about.cta.eyebrow": "Empieza Aquí",
"about.cta.title": "Marruecos te espera.<br><em>No llegues desprevenido.</em>",
"about.cta.subtitle": "La guía Travel Readz te da mapas locales, conocimiento cultural, herramientas presupuestarias y soporte directo — todo lo que necesitas para viajar a Marruecos con confianza desde el día uno.",
"about.cta.button": "Obtén la Guía Travel Readz", 

    // whatsApp support 

  // Navigation
    "nav.home": "Inicio",
    "nav.services": "Experiencias",
    "nav.about": "Diario",
    "nav.cta": "Obtener Tu Guía",

    // Hero Section
    "whatsapp.hero.badge": "Solo Compradores de Guía",
    "whatsapp.hero.title": "Asistencia de Viaje\n<em>Privada</em>",
    "whatsapp.hero.desc": "Guía estructurada y experta para compradores de guía verificados — ayudándote a evitar errores costosos y navegar Marruecos con confianza.",
    "pta.hero.tag1": "✓ Hasta 3 Preguntas",
    "pta.hero.tag2": "✓ Respuesta 24-48h",
    "pta.hero.tag3": "✓ Solo Compradores Verificados",
    "pta.hero.tag4": "✓ Experto Local",
    "pta.hero.cta": "Desbloquear Acceso — $9.99",
    "pta.hero.ctaNote": "📱 Incluido gratis con cada compra de guía",
    "pta.hero.statLabel": "Tiempo de Respuesta Promedio",
    "pta.hero.verified": "Solo Compradores Verificados",

    // Private Assistance Block
    "pta.block.eyebrow": "Asistencia de Viaje Privada",
    "pta.block.title": "Guía Estructurada.<br><em>Reservada para Compradores.</em>",
    "pta.block.desc": "Este no es un canal de soporte público. Los compradores de guía verificados reciben asistencia estructurada limitada para aclarar dudas de viaje, evitar errores comunes y aprovechar al máximo su viaje a Marruecos — entregada por un experto local que escribió la guía.",
    "pta.block.exclusivity": "Disponible para un número limitado de compradores por mes",
    "pta.block.constraint1": "<strong>Esta es asistencia estructurada — no consultoría ilimitada.</strong> Cada comprador recibe un número definido de preguntas, respondidas en una ventana de tiempo establecida. Esto mantiene la calidad de cada respuesta alta y los consejos realmente útiles.",
    "pta.block.upgradeNote": "Nota: Futuras versiones de esta guía pueden incluir asistencia privada como actualización de pago. Los compradores actuales la reciben gratis.",
    "pta.features.label": "Qué Incluye",
    "pta.features.item1": "Haz hasta <strong style=\"color:rgba(232,220,200,0.9);\">3 preguntas relacionadas con el viaje</strong> — enfocadas, prácticas y respondidas completamente",
    "pta.features.item2": "Aclaración y optimización de itinerario basada en tus fechas de viaje y prioridades",
    "pta.features.item3": "Guía de recomendaciones locales — dónde comer, alojarse o explorar en ciudades específicas",
    "pta.features.item4": "Consejos antiestafas adaptados a tu itinerario y nivel de experiencia",
    "pta.features.item5": "Respuesta en <strong style=\"color:rgba(232,220,200,0.9);\">24–48 horas</strong> — considerada, no apresurada",
    "pta.features.item6": "Accesible vía WhatsApp — <strong style=\"color:rgba(232,220,200,0.9);\">solo para compradores de guía verificados</strong>",
    "pta.block.constraint2": "El acceso se otorga tras verificación de compra. El número de WhatsApp no es público. <strong>Las preguntas fuera del ámbito del viaje a Marruecos o contenido de la guía no están cubiertas.</strong>",
    "pta.block.cta": "Obtener la Guía — Desbloquear Acceso",

    // How It Works
    "pta.steps.eyebrow": "Proceso Simple",
    "whatsapp.howItWorks.title": "Cómo\n<em>Funciona</em>",
    "whatsapp.step1.title": "Compra la Guía",
    "whatsapp.step1.desc": "Completa tu compra en Gumroad. Tu email de confirmación incluye el contacto WhatsApp privado e instrucciones de acceso.",
    "whatsapp.step2.title": "Guarda el Contacto",
    "whatsapp.step2.desc": "Agrega el número a tus contactos antes de viajar. Es una línea privada — no listada públicamente ni buscable.",
    "whatsapp.step3.title": "Envía Tus Preguntas",
    "whatsapp.step3.desc": "Envía tus preguntas de viaje clara y específicamente. Las respuestas se entregan en 24–48 horas, enfocadas y accionables.",

    // Coverage
    "pta.coverage.eyebrow": "Alcance de la Asistencia",
    "pta.coverage.title": "Temas que\n<em>Cubrimos</em>",
    "pta.coverage.desc": "La asistencia se enfoca en preguntas prácticas y de alto impacto que mejoran directamente tu experiencia en Marruecos.",
    "whatsapp.coverage1.title": "Transporte & Logística",
    "whatsapp.coverage1.item1": "Opciones de transporte aeropuerto-ciudad",
    "whatsapp.coverage1.item2": "Tarifas de taxi justas y evitar estafas",
    "whatsapp.coverage1.item3": "Usar autobuses y trenes locales",
    "whatsapp.coverage1.item4": "Servicios de ridesharing por app",
    "whatsapp.coverage2.title": "Alojamiento",
    "whatsapp.coverage2.item1": "Dificultades de check-in",
    "whatsapp.coverage2.item2": "Encontrar tu riad u hotel",
    "whatsapp.coverage2.item3": "Comunicación con anfitriones",
    "whatsapp.coverage2.item4": "Entender costumbres locales",
    "whatsapp.coverage3.title": "Navegación & Seguridad",
    "whatsapp.coverage3.item1": "Llegar a principales monumentos",
    "whatsapp.coverage3.item2": "Zonas seguras para explorar",
    "whatsapp.coverage3.item3": "Consejos de etiqueta local",
    "whatsapp.coverage3.item4": "Contactos de emergencia",

    // Testimonials
    "pta.reviews.eyebrow": "Opiniones de Compradores",
    "pta.reviews.title": "Qué Dicen los Compradores",
    "whatsapp.review1.text": "« No podía encontrar mi riad en la medina de Fez. Envié un mensaje, respuesta clara en menos de una hora. Exactamente lo que necesitaba. »",
    "whatsapp.review2.text": "« Pregunté por tarifas de taxi desde el aeropuerto. Respuesta específica y honesta. Sin estrés, sin sobrecargos al llegar. »",
    "whatsapp.review3.text": "« Los consejos fueron directos, prácticos y claramente de alguien que realmente conoce Marruecos. Eso es raro. »",

    // Bonuses
    "pta.bonus.badge": "Bonos Incluidos",
    "pta.bonus.title": "Otros Regalos\n<em>en el Paquete</em>",
    "pta.bonus.subtitle": "Valor $24.99 — incluido con cada compra de guía",
    "bonus.item1.value": "Valor: $4.99",
    "bonus.item1.title": "Mini Guía de Etiqueta Cultural",
    "bonus.item1.desc": "Guía de referencia rápida sobre costumbres y normas sociales marroquíes",
    "bonus.item2.value": "Valor: $5",
    "bonus.item2.title": "Mapas Google Personalizados",
    "bonus.item2.desc": "Mapas precargados con todos los lugares recomendados para fácil navegación",
    "bonus.item4.value": "Valor: $5",
    "bonus.item4.title": "Herramienta Calculadora de Presupuesto",
    "bonus.item4.desc": "Planifica tus gastos con precisión con nuestra calculadora interactiva",
    "bonus.learnMore": "Saber Más →",

    // Final CTA
    "pta.finalCta.eyebrow": "Exclusivo para Compradores de Guía",
    "pta.finalCta.title": "Viajar a Marruecos con\n<em>Respaldo Experto.</em>",
    "pta.finalCta.subtitle": "La guía completa Travel Readz — más asistencia de viaje privada, mapas personalizados, calculadora de presupuesto y guía de etiqueta cultural. Todo lo que necesitas para viajar correctamente a Marruecos.",
    "pta.finalCta.btn": "Obtener la Guía Travel Readz",
    "pta.finalCta.trust1": "✓ Descarga Instantánea",
    "pta.finalCta.trust2": "✓ Asistencia Privada Incluida",
    "pta.finalCta.trust3": "✓ 4 Bonos Gratis",

    // Footer
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.contact": "Contáctanos",
    "footer.about": "Sobre Nosotros",
    "footer.copyright": "© 2025 Travel Readz. Todos los derechos reservados.",

      // MINI EBOOOOOOOOOOOOK 

   'miniebook.hero.badge': '🌍 Guía Cultural',
  'miniebook.hero.title': 'Etiqueta de\n<em>Viaje a Marruecos</em>',
  'miniebook.hero.desc': 'Los imprescindibles dos y no-hacer, etiqueta cultural, reglas de vestimenta y costumbres locales — todo explicado claramente para viajar a Marruecos con respeto.',
  'miniebook.hero.cta': 'Comprar Individualmente — $4.99',
  'miniebook.hero.subtext': '✦ Incluido gratis con cada compra de guía Travel Readz',
  'miniebook.hero.statLabel': 'Páginas Esenciales',
  'miniebook.hero.verified': 'Escrito por un Local de Marruecos',

  'miniebook.features.eyebrow': 'Lo que obtienes',
  'miniebook.features.title': 'Viaja a Marruecos con <em>Confianza Cultural</em>',
  'miniebook.features.desc': 'Esta miniguía de 10 páginas cubre el conocimiento cultural esencial que todo visitante necesita — desde códigos de vestimenta hasta normas sociales, propinas a fotografía.',

  'miniebook.feature1.title': 'Reglas de Vestimenta',
  'miniebook.feature1.desc': 'Guía clara sobre qué llevar en diferentes entornos — mezquitas, medinas, riads y espacios públicos. Nunca destaques por las razones equivocadas.',
  'miniebook.feature2.title': 'Comportamiento Social & Saludos',
  'miniebook.feature2.desc': 'Cómo saludar correctamente a los locales, qué gestos evitar y cómo navegar las interacciones diarias con respeto y confianza.',
  'miniebook.feature3.title': 'Propinas & Regateo',
  'miniebook.feature3.desc': 'Exactamente cuándo y cuánto dar de propina, y cómo regatear en los zocos sin ofender — cada transacción se siente natural, no incómoda.',
  'miniebook.feature4.title': 'Guías de Fotografía',
  'miniebook.feature4.desc': 'Qué lugares y personas puedes fotografiar libremente, dónde pedir permiso, y las situaciones donde las cámaras deben quedarse guardadas.',

  'miniebook.content.eyebrow': 'Escrito por un Local',
  'miniebook.content.title': 'El respeto abre puertas.<br><em>Esta guía te muestra cómo.</em>',
  'miniebook.content.desc': 'Marruecos es un país donde los pequeños gestos tienen un verdadero significado. Saber cuándo quitarte los zapatos, cómo aceptar té de menta, o por qué evitar señalar una mezquita no es solo cortesía — abre puertas a experiencias auténticas que la mayoría de los turistas nunca acceden.',
  'miniebook.content.note': 'Lo suficientemente compacto para leer en tu vuelo. Lo suficientemente específico para usar todos los días de tu viaje. Sin consejos genéricos — cubre situaciones reales que realmente encontrarás.',
  'miniebook.content.listLabel': 'Temas Cubiertos',
  'miniebook.content.item1': 'Entrar en mezquitas & lugares sagrados',
  'miniebook.content.item2': 'Etiqueta del Ramadán & timing',
  'miniebook.content.item3': 'Aceptar & rechazar hospitalidad',
  'miniebook.content.item4': 'Código de vestimenta por lugar & género',
  'miniebook.content.item5': 'Regatear en zocos sin ofender',
  'miniebook.content.item6': 'Fotografía — quién, dónde & cómo pedir',
  'miniebook.content.item7': 'Gestos comunes & su significado local',

  'miniebook.reviews.eyebrow': 'Opiniones de Viajeros',
  'miniebook.reviews.title': 'Lo que los <em>Viajeros</em> Dicen',
  'miniebook.reviews.subtitle': 'Desde viajeros en solitario hasta familias — compradores verificados comparten su experiencia.',
  'miniebook.review1.text': '"Corto pero potente. Me sentí mucho más confiado interactuando con los locales después de leerlo. Vale cada centavo."',
  'miniebook.review1.role': 'Viajera en Solitario · Comprador Verificado',
  'miniebook.review2.text': '"Este mini ebook me salvó de tantos momentos incómodos. Simple, claro y súper útil antes de llegar a Marruecos."',
  'miniebook.review2.role': 'Primera Visita · Comprador Verificado',
  'miniebook.review3.text': '"Exactamente lo que los primeros visitantes necesitan. Los dos y no-hacer sobre ropa y comportamiento fueron perfectos. Lo leí dos veces."',
  'miniebook.review3.role': 'Viajero de Aventura · Comprador Verificado',

  'miniebook.finalCta.eyebrow': 'Obtén Tu Guía',
  'miniebook.finalCta.title': 'Viaja a Marruecos con <em>Respeto Total.</em>',
  'miniebook.finalCta.subtitle': 'Obtén la guía completa Travel Readz y recibe esta guía de etiqueta gratis — junto con asistencia de viaje privada, mapas personalizados y calculadora de presupuesto.',
  'miniebook.finalCta.button': 'Obtener la Guía Travel Readz',
  'miniebook.finalCta.note': '✦ O comprar esta guía de etiqueta individualmente por $4.99',
  'miniebook.finalCta.trust1': '✓ Descarga Instantánea',
  'miniebook.finalCta.trust2': '✓ 10 Páginas',
  'miniebook.finalCta.trust3': '✓ Funciona en Todos los Dispositivos',
  'miniebook.finalCta.trust4': '✓ 4 Bonos Gratis',

      // Contact page
  'contact.hero.eyebrow': 'Contáctanos',
  'contact.hero.title': 'Una pregunta merece<br><em>una respuesta real.</em>',
  'contact.hero.subtitle': 'No un bot. No una redirección a FAQ. Si nos escribes, una persona lo lee y responde — generalmente en 24 horas.',

  'contact.card1.title': 'Envíanos un Email',
  'contact.card1.desc': 'Preguntas sobre tu pedido, problemas de acceso al guía, o cualquier otra cosa — envíalo aquí. Respondemos en 24 horas, sin excepciones.',
  'contact.card1.link': 'support@travelreadz.com',

  'contact.card2.title': 'Sigue el Viaje',
  'contact.card2.desc': 'Detrás de escena de Marruecos, consejos de viaje honestos y actualizaciones sobre nuevos guías — todo en nuestros canales sociales. Sin contenido relleno, solo lo útil.',

  'contact.card3.title': 'Asociaciones & Colaboraciones',
  'contact.card3.desc': 'Trabajar con blogueros de viaje, agencias y creadores de contenido que realmente cubren Marruecos. Si eres uno de ellos, nos gustaría saber de ti.',
  'contact.card3.link': 'Iniciar conversación',

  'contact.form.sideLabel': 'Escríbenos',
  'contact.form.sideTitle': 'Dinos exactamente<br><em>lo que necesitas.</em>',
  'contact.form.sideDesc': 'Ya sea una simple pregunta sobre el guía, un problema con tu compra, o una pregunta compleja sobre tu itinerario — preferimos el contexto completo antes que una sola línea. Más detalles nos das, mejor podemos ayudarte.',
  'contact.form.badgeStrong': 'Respuestas en 24 horas',
  'contact.form.badgeSub': 'Cada mensaje es leído por una persona real',

  'contact.form.name': 'Tu Nombre',
  'contact.form.email': 'Dirección de Email',
  'contact.form.subjectLabel': 'Asunto',
  'contact.form.selectTopic': 'Selecciona un tema…',
  'contact.form.optGuide': 'Pregunta Sobre el Guía',
  'contact.form.optOrder': 'Pedido o Problema de Acceso',
  'contact.form.optTrip': 'Ayuda con Planificación del Viaje',
  'contact.form.optPartner': 'Asociación o Colaboración',
  'contact.form.optFeedback': 'Feedback',
  'contact.form.optOther': 'Algo Más',
  'contact.form.messageLabel': 'Tu Mensaje',
  'contact.form.submit': 'Enviar Mensaje',

  'contact.faq.eyebrow': 'Preguntas Comunes',
  'contact.faq.title': 'Lo que la gente nos <em>pregunta más</em>',
  'contact.faq.subtitle': 'Si tu pregunta está aquí, tienes tu respuesta. Si no, usa el formulario de arriba.',

  'contact.faq.q1.question': '¿Cuándo tengo acceso después de comprar?',
  'contact.faq.q1.answer': 'Inmediatamente. Recibirás un enlace de descarga por email en el momento en que tu pago se procese. Revisa tu carpeta de spam si no lo ves en unos minutos.',

  'contact.faq.q2.question': 'No puedo acceder a mi compra. ¿Qué hago?',
  'contact.faq.q2.answer': 'Envíanos un email a support@travelreadz.com con tu número de pedido. Lo resolvemos en 24 horas — y si el problema es nuestro, lo arreglamos inmediatamente.',

  'contact.faq.q3.question': '¿Puedo obtener consejos personalizados para mi viaje específico?',
  'contact.faq.q3.answer': 'Sí — para eso es exactamente el bono de Asistencia de Viaje Privada. Una vez que compres el guía, tienes acceso directo a uno de nuestro equipo para preguntas en tiempo real.',

  'contact.faq.q4.question': '¿Trabajan con blogueros de viaje o afiliados?',
  'contact.faq.q4.answer': 'Sí, selectivamente. Buscamos personas que realmente cubran Marruecos, no las que solo persiguen una comisión. Usa el formulario de arriba — selecciona "Asociación" y preséntate correctamente.',

  'contact.faq.q5.question': '¿El guía se actualiza regularmente?',
  'contact.faq.q5.answer': 'Sí. Revisamos y actualizamos el guía periódicamente para reflejar cambios de precios, nuevas recomendaciones e información estacional. Los compradores siempre obtienen la última versión.',

  'contact.faq.q6.question': '¿Y si el guía no es adecuado para mí?',
  'contact.faq.q6.answer': 'Estamos seguros de que lo encontrarás valioso — pero si tienes una preocupación genuina después de comprar, contáctanos. Tratamos cada caso individualmente y no queremos clientes insatisfechos.',

  'contact.cta.eyebrow': 'Listo para Ir',
  'contact.cta.title': 'No esperes hasta aterrizar<br><em>para prepararte.</em>',
  'contact.cta.subtitle': 'El guía Travel Readz te da todo antes de llegar — mapas, conocimiento cultural, herramienta de presupuesto y soporte directo. Una compra, completamente preparado.',
  'contact.cta.button': 'Obtener el Guía Travel Readz',

        // Privacy Policy page
  'privacy.hero.eyebrow': 'Legal',
  'privacy.hero.title': 'Política de <em>Privacidad</em>',
  'privacy.hero.subtitle': 'Solo recopilamos lo que necesitamos, lo usamos solo para lo que decimos, y nunca lo vendemos. Aquí está exactamente cómo funciona.',
  'privacy.hero.date': 'Última actualización — Enero 2025',

  'privacy.sidebar.label': 'Contenido',
  'privacy.nav.collect': 'Información que Recopilamos',
  'privacy.nav.use': 'Cómo la Usamos',
  'privacy.nav.cookies': 'Cookies & Seguimiento',
  'privacy.nav.thirdParty': 'Servicios de Terceros',
  'privacy.nav.security': 'Seguridad de Datos',
  'privacy.nav.rights': 'Tus Derechos',
  'privacy.nav.updates': 'Actualizaciones de Política',

  'privacy.section1.num': 'Recopilación',
  'privacy.section1.title': 'Información <em>que Recopilamos</em>',
  'privacy.section1.p1': 'Cuando compras un producto, recopilamos la información necesaria para procesar tu pedido — tu nombre, dirección de email y detalles de pago. El procesamiento de pagos lo maneja completamente Gumroad; nunca almacenamos tu información de tarjeta directamente.',
  'privacy.section1.p2': 'Si te suscribes a nuestro boletín o nos contactas por email, recopilamos la información que proporcionas en ese mensaje — tu nombre y dirección de email, y lo que elijas escribirnos.',
  'privacy.section1.highlight': 'Recopilamos lo mínimo necesario. No pedimos información que no necesitamos, y no la retenemos más tiempo del requerido.',

  'privacy.section2.num': 'Uso',
  'privacy.section2.title': 'Cómo la <em>Usamos</em>',
  'privacy.section2.p1': 'Tu información se usa para tres cosas: cumplir tu pedido, enviarte actualizaciones directamente relacionadas con tu compra, y responder cualquier solicitud de soporte que nos envíes.',
  'privacy.section2.p2': 'Si te has suscrito a nuestro boletín, podemos enviarte consejos de viaje, actualizaciones de guías u ofertas ocasionales. Puedes darte de baja en cualquier momento — cada email incluye un enlace de desuscripción claramente visible.',
  'privacy.section2.p3': 'No vendemos tus datos a terceros. No los compartimos con anunciantes. No los usamos para ningún propósito más allá de lo descrito aquí.',

  'privacy.section3.num': 'Cookies',
  'privacy.section3.title': 'Cookies <em>& Seguimiento</em>',
  'privacy.section3.p1': 'Nuestro sitio usa cookies para entender cómo los visitantes usan el sitio — qué páginas se visitan, cuánto tiempo pasan las personas en ellas, y de dónde llegan. Esto nos ayuda a mejorar el sitio y los productos que ofrecemos.',
  'privacy.section3.p2': 'Usamos herramientas de análisis estándar para esto. No se adjunta información personalmente identificable a los datos de cookies. Puedes desactivar las cookies en la configuración de tu navegador en cualquier momento, aunque algunas partes del sitio pueden no funcionar completamente sin ellas.',

  'privacy.section4.num': 'Terceros',
  'privacy.section4.title': 'Servicios de <em>Terceros</em>',
  'privacy.section4.p1': 'Usamos un pequeño número de servicios de terceros confiables para operar el negocio: Gumroad para pagos y entrega de productos, y proveedores de email estándar para correspondencia de soporte. Cada uno opera bajo su propia política de privacidad y estándares de protección de datos.',
  'privacy.section4.p2': 'Solo trabajamos con proveedores de terceros cuyas prácticas de manejo de datos cumplen un estándar con el que estamos cómodos. No compartimos tus datos con ningún tercero para fines de marketing o publicidad.',

  'privacy.section5.num': 'Seguridad',
  'privacy.section5.title': 'Seguridad de <em>Datos</em>',
  'privacy.section5.p1': 'Todos los datos transmitidos a través de nuestro sitio están encriptados vía HTTPS. El procesamiento de pagos se ejecuta completamente a través de la infraestructura segura de Gumroad — tu información financiera nunca pasa por nuestros servidores.',
  'privacy.section5.p2': 'Aunque tomamos precauciones razonables para proteger los datos que mantenemos, ningún sistema es completamente inmune al riesgo. Si nos enteramos de una violación que afecte tus datos, te informaremos de inmediato y tomaremos acción correctiva inmediata.',

  'privacy.section6.num': 'Tus Derechos',
  'privacy.section6.title': 'Tus <em>Derechos</em>',
  'privacy.section6.p1': 'Tienes derecho a saber qué datos personales tenemos sobre ti, a solicitar una copia, y a solicitar que los corrijamos o eliminemos. Puedes ejercer cualquiera de estos derechos escribiéndonos directamente a <a href="mailto:support@travelreadz.com">support@travelreadz.com</a>.',
  'privacy.section6.p2': 'Responderemos a solicitudes de datos en 30 días. Si tu solicitud requiere más tiempo, te lo haremos saber. No hay cargo por hacer una solicitud de datos.',
  'privacy.section6.highlight': 'Para darte de baja de emails, simplemente haz clic en el enlace de desuscripción en cualquier mensaje que te hayamos enviado. Para solicitar eliminación de tus datos, escríbenos directamente.',

  'privacy.section7.num': 'Actualizaciones',
  'privacy.section7.title': 'Actualizaciones de <em>Política</em>',
  'privacy.section7.p1': 'Podemos actualizar esta política de vez en cuando — por ejemplo, si agregamos un nuevo servicio o si cambia la ley aplicable. Cualquier actualización se publicará en esta página con una fecha revisada en la parte superior.',
  'privacy.section7.p2': 'No haremos cambios materiales en cómo usamos tus datos sin darte aviso claro. Si un cambio significativo afecta cómo manejamos tu información, informaremos directamente a clientes existentes por email.',

  'privacy.cta.eyebrow': 'Listo para Ir',
  'privacy.cta.title': 'Marruecos te espera.<br><em>Tu guía está listo.</em>',
  'privacy.cta.subtitle': 'Mapas locales, conocimiento cultural, herramientas de presupuesto y soporte directo — todo en un solo lugar.',
  'privacy.cta.button': 'Obtener el Guía Travel Readz',

     // Terms & Conditions page
  'terms.hero.eyebrow': 'Legal',
  'terms.hero.title': 'Términos & <em>Condiciones</em>',
  'terms.hero.subtitle': 'Lenguaje claro. Sin sorpresas. Aquí está a qué estás de acuerdo al usar Travel Readz — y a lo que nos comprometemos a cambio.',
  'terms.hero.date': 'Última actualización — Enero 2025',

  'terms.sidebar.label': 'Contenido',
  'terms.nav.general': 'General',
  'terms.nav.purchases': 'Compras',
  'terms.nav.use': 'Uso del Sitio Web',
  'terms.nav.ip': 'Propiedad Intelectual',
  'terms.nav.liability': 'Limitación de Responsabilidad',
  'terms.nav.changes': 'Cambios en Términos',
  'terms.nav.contact': 'Contacto',

  'terms.section1.num': 'General',
  'terms.section1.title': 'Términos <em>Generales</em>',
  'terms.section1.p1': 'Al acceder o usar el sitio web de Travel Readz, aceptas estar ligado por estos términos. Si no estás de acuerdo con alguna parte de ellos, por favor no uses el sitio ni compres nuestros productos.',
  'terms.section1.p2': 'Todo el contenido de este sitio web — guías, herramientas, texto, imágenes — se proporciona para uso informativo y personal. Nos esforzamos por mantenerlo preciso y útil, pero no garantizamos que cada detalle esté completo o actualizado en todo momento. Marruecos cambia; actualizamos cuando podemos.',

  'terms.section2.num': 'Compras',
  'terms.section2.title': 'Compras & <em>Reembolsos</em>',
  'terms.section2.p1': 'Todos los productos vendidos por Travel Readz son digitales — guías, mapas, calculadoras y materiales bonus. Como los productos digitales se entregan inmediatamente al comprar, todas las ventas son definitivas por defecto.',
  'terms.section2.p2': 'Dicho esto, no nos interesa tener clientes insatisfechos. Si tienes un problema genuino — un archivo que no se abre, contenido que no era como se describió, un problema técnico de nuestra parte — contáctanos a <a href="mailto:support@travelreadz.com">support@travelreadz.com</a> y lo resolveremos. Tratamos cada caso individualmente.',
  'terms.section2.highlight': 'No ofrecemos reembolsos puramente basados en "cambié de opinión" para productos digitales. Si hay un problema real, lo arreglamos o lo corregimos.',

  'terms.section3.num': 'Uso del Sitio Web',
  'terms.section3.title': 'Uso del <em>Sitio Web</em>',
  'terms.section3.p1': 'Puedes usar el sitio web de Travel Readz para fines personales y no comerciales. No puedes intentar hacer scraping, copiar, ingeniería inversa o reproducir nuestro contenido o productos sin permiso escrito previo.',
  'terms.section3.p2': 'No puedes usar el sitio de ninguna manera que interrumpa su funcionamiento, intente obtener acceso no autorizado a cualquier parte de él, o viole cualquier ley local, nacional o internacional aplicable.',

  'terms.section4.num': 'Propiedad Intelectual',
  'terms.section4.title': 'Propiedad <em>Intelectual</em>',
  'terms.section4.p1': 'Todo el contenido de este sitio web — incluyendo guías de viaje, herramientas digitales, copia escrita, diseño visual, mapas y marca — es propiedad intelectual de Travel Readz y está protegido por la ley de copyright aplicable.',
  'terms.section4.p2': 'Cuando compras un producto, recibes una licencia personal, no transferible para usarlo para tus propios fines de viaje. No puedes reproducir, redistribuir, revender o compartir públicamente el contenido — total o parcialmente — sin nuestro permiso escrito explícito.',

  'terms.section5.num': 'Responsabilidad',
  'terms.section5.title': 'Limitación de <em>Responsabilidad</em>',
  'terms.section5.p1': 'Nuestras guías contienen consejos prácticos y recomendaciones locales basadas en conocimiento real de Marruecos. Sin embargo, viajar implica inherentemente incertidumbre — los precios cambian, los lugares cierran, las condiciones evolucionan. Travel Readz no puede ser responsable de ninguna pérdida, inconveniente o daño derivado de decisiones tomadas basadas en nuestro contenido.',
  'terms.section5.p2': 'En todos los casos, nuestra responsabilidad contigo no excederá el monto que pagaste por el producto en cuestión. No somos responsables de servicios de terceros — transporte, alojamiento o actividades — referenciados en nuestros materiales.',

  'terms.section6.num': 'Cambios',
  'terms.section6.title': 'Cambios a <em>Estos Términos</em>',
  'terms.section6.p1': 'Podemos actualizar estos términos de vez en cuando. Cuando lo hagamos, la versión actualizada se publicará en esta página con una fecha revisada. El uso continuado del sitio web después de que se publiquen cambios constituye tu aceptación de los términos revisados.',
  'terms.section6.p2': 'Si hacemos un cambio material que afecte significativamente tus derechos como cliente, haremos esfuerzos razonables para notificar a compradores existentes por email.',

  'terms.section7.num': 'Contacto',
  'terms.section7.title': 'Preguntas & <em>Contacto</em>',
  'terms.section7.p1': 'Si tienes alguna pregunta sobre estos términos, o si algo aquí no está claro, por favor contáctanos. Preferimos explicar antes que dejarte inseguro sobre a qué estás de acuerdo.',
  'terms.section7.p2': 'Envíanos un email a <a href="mailto:support@travelreadz.com">support@travelreadz.com</a> — respondemos en 24 horas.',

  'terms.cta.eyebrow': 'Listo para Ir',
  'terms.cta.title': 'Marruecos te espera.<br><em>Tu guía está listo.</em>',
  'terms.cta.subtitle': 'Mapas locales, conocimiento cultural, herramientas de presupuesto y soporte directo — todo en un solo lugar.',
  'terms.cta.button': 'Obtener el Guía Travel Readz',

      // Budget Calculator page
  'budget.hero.badge': '💰 Herramienta Presupuesto',
  'budget.hero.title': 'Calculadora de\n<em>Presupuesto de Viaje</em>',
  'budget.hero.desc': 'Establece tu presupuesto, registra gastos con el tiempo y compáralos — una herramienta universal para viajeros en cualquier país.',
  'budget.hero.cta': 'Comprar Individualmente — $4.99',
  'budget.hero.subtext': '✦ Incluido gratis con cada compra de guía Travel Readz',
  'budget.hero.statLabel': 'Categorías de Gastos',
  'budget.hero.verified': 'Funciona en Cualquier País',

  'budget.features.eyebrow': 'Lo que Obtienes',
  'budget.features.title': 'Mantén el Control de <em>Cada Dirham</em>',
  'budget.features.desc': 'Planifica con antelación, rastrea sobre la marcha y revisa al final. La forma más simple de viajar sin estrés de dinero.',

  'budget.feature1.title': 'Planificación Pre-Viaje',
  'budget.feature1.desc': 'Establece presupuestos por categorías antes de viajar — alojamiento, comida, transporte, actividades — para saber exactamente cuánto puedes gastar cada día.',
  'budget.feature2.title': 'Seguimiento en Tiempo Real',
  'budget.feature2.desc': 'Registra cada gasto mientras vas. Cada entrada actualiza automáticamente tus totales acumulados para que nunca te sorprendas al final del día.',
  'budget.feature3.title': 'Comparación de Presupuesto',
  'budget.feature3.desc': 'Ve planeado vs real de un vistazo. Entiende dónde gastaste de más y dónde ahorraste — útil para todos tus futuros viajes también.',
  'budget.feature4.title': 'Herramienta Universal',
  'budget.feature4.desc': 'Funciona en cualquier país, cualquier moneda. Estés en Marruecos o en cualquier otro lugar del mundo, la estructura se adapta a tu viaje.',

  'budget.content.eyebrow': 'Diseñado para Viajeros Reales',
  'budget.content.title': 'No se necesitan habilidades de hoja de cálculo.<br><em>Solo abre y empieza.</em>',
  'budget.content.desc': 'La mayoría de los viajeros improvisan y gastan de más, o se estresan con hojas de cálculo complejas. Esta herramienta está en el medio — lo suficientemente simple para uso diario, lo suficientemente estructurada para darte visión real de dónde va tu dinero.',
  'budget.content.note': 'Diseñado como archivo Google Sheets. Sin instalación, sin login, sin app — solo abre en tu teléfono o laptop y funciona inmediatamente.',
  'budget.content.listLabel': 'Qué Contiene',
  'budget.content.item1': 'Planificador de presupuesto diario por categoría',
  'budget.content.item2': 'Registro de gastos con totales automáticos',
  'budget.content.item3': 'Vista de comparación planeado vs real',
  'budget.content.item4': 'Flexible en moneda (funciona en cualquier país)',
  'budget.content.item5': 'Estimaciones de costos Marruecos pre-rellenadas',
  'budget.content.item6': 'Formato Google Sheets móvil-friendly',
  'budget.content.item7': 'Acceso instantáneo — sin descarga requerida',

  'budget.reviews.eyebrow': 'Opiniones de Viajeros',
  'budget.reviews.title': 'Lo que los <em>Viajeros</em> Dicen',
  'budget.reviews.subtitle': 'Desde viajeros en solitario hasta parejas — compradores verificados comparten su experiencia.',
  'budget.review1.text': '"Esta herramienta me ayudó a planificar mi presupuesto antes del viaje y realmente cumplirlo. Ver planeado vs gastado hizo una gran diferencia."',
  'budget.review1.role': 'Viajero Solo · Comprador Verificado',
  'budget.review2.text': '"Simple, claro y sorprendentemente potente. Finalmente entendí dónde iba mi dinero durante mi viaje."',
  'budget.review2.role': 'Viajero en Pareja · Comprador Verificado',
  'budget.review3.text': '"Perfecto para cualquier país. Planifiqué mi presupuesto con antelación y me encantó compararlo con mi gasto real al final."',
  'budget.review3.role': 'Viajero de Aventura · Comprador Verificado',

  'budget.bonus.badge': 'Bonos Incluidos',
  'budget.bonus.title': 'Otros Regalos <em>en el Paquete</em>',
  'budget.bonus.subtitle': 'Valor $24.99 — incluido con cada compra de guía',

  'budget.finalCta.eyebrow': 'Obtén Tu Guía',
  'budget.finalCta.title': 'Viaja a Marruecos sin <em>Estrés de Dinero.</em>',
  'budget.finalCta.subtitle': 'Obtén la guía completa Travel Readz y recibe esta calculadora de presupuesto gratis — junto con asistencia de viaje privada, mapas personalizados y guía de etiqueta cultural.',
  'budget.finalCta.button': 'Obtener la Guía Travel Readz',
  'budget.finalCta.note': '✦ O comprar esta calculadora individualmente por $4.99',
  'budget.finalCta.trust1': '✓ Acceso Instantáneo',
  'budget.finalCta.trust2': '✓ Formato Google Sheets',
  'budget.finalCta.trust3': '✓ Funciona en Todos los Dispositivos',
  'budget.finalCta.trust4': '✓ 4 Bonos Gratis'
  }
};

// Book cover URLs for each language
const bookCovers = {
  en: "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_800/v1770821065/Untitled_design_16_tf00rx.png",
  fr: "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_800/v1770821062/Untitled_design_14_j5lrij.png",
  es: "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_800/v1770821056/Untitled_design_15_irckzm.png"
};

// Preview images
const previewImages = {
  en: [
    "https://res.cloudinary.com/dzidoxclo/image/upload/v1771709360/Screenshot_2026-02-21_205927_kvduwo.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771708650/Screenshot_2026-02-21_210746_biqh36.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771708665/Screenshot_2026-02-21_210837_uxmsp3.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771708683/Screenshot_2026-02-21_210925_iz1bzc.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771708688/Screenshot_2026-02-21_211001_pjnhea.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771708691/Screenshot_2026-02-21_211031_icguqt.png"
  ],
  fr: [
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034226/Screenshot_2026-02-14_023015_xgi44w.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034227/Screenshot_2026-02-14_022844_glzrca.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034232/Screenshot_2026-02-14_022909_voeea1.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034232/Screenshot_2026-02-14_022728_d0acb9.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034246/Screenshot_2026-02-14_022805_jaomir.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034247/Screenshot_2026-02-14_022621_pcpngm.png"
  ],
  es: [
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034458/Screenshot_2026-02-14_023858_rnfcdm.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034458/Screenshot_2026-02-14_023844_plma67.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034458/Screenshot_2026-02-14_023930_hhwcjs.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034459/Screenshot_2026-02-14_023950_rfpfqt.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034468/Screenshot_2026-02-14_024038_hdmkbd.png",
    "https://res.cloudinary.com/dzidoxclo/image/upload/f_auto,q_auto,w_600/v1771034475/Screenshot_2026-02-14_024101_a8qkrb.png"
  ]
};

// Buy button URLs
const buyUrls = {
  en: "https://travelreadz.gumroad.com/l/ubqlaj?wanted=true",
  fr: "https://travelreadz.gumroad.com/l/phyccz?wanted=true",
  es: "https://travelreadz.gumroad.com/l/lnltrl?wanted=true"
};

// Current language
let currentLanguage = localStorage.getItem('travelReadzLang') || 'en';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
  setupLanguageSwitcher();
  setupBookSelector();
});

function initializeLanguage() {
  setLanguage(currentLanguage);
}

function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setupBookSelector() {
  const bookThumbs = document.querySelectorAll('.book-thumb');
  bookThumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('travelReadzLang', lang);
  updateActiveStates(lang);
  const elementsToFade = document.querySelectorAll('[data-translate]');
  elementsToFade.forEach(el => el.classList.add('fade-transition'));
  setTimeout(() => {
    updateContent(lang);
    updateBookCover(lang);
    updatePreviewImages(lang);
    updateBuyLinks(lang);
    elementsToFade.forEach(el => {
      el.classList.remove('fade-transition');
      el.classList.add('active');
    });
  }, 150);
}

function updateContent(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[lang] && translations[lang][key];
    if (translation) {
      if (translation.includes('<')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

function updateBookCover(lang) {
  const bookCover = document.getElementById('main-book-cover');
  if (bookCover && bookCovers[lang]) {
    bookCover.style.opacity = '0';
    setTimeout(() => {
      bookCover.src = bookCovers[lang];
      bookCover.style.opacity = '1';
    }, 200);
  }
}

function updatePreviewImages(lang) {
  const previewGrid = document.querySelector('.preview-grid');
  if (!previewGrid || !previewImages[lang]) return;
  const images = previewGrid.querySelectorAll('img');
  const newImages = previewImages[lang];
  images.forEach((img, index) => {
    if (newImages[index]) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = newImages[index];
        img.alt = `Guide Preview ${index + 1}`;
        img.style.opacity = '1';
      }, 200 + (index * 50));
    }
  });
}

function updateBuyLinks(lang) {
  const ctaButtons = [
    document.getElementById('nav-cta-btn'),
    document.getElementById('hero-cta-btn'),
    document.getElementById('pricing-cta-btn'),
    document.getElementById('final-cta-btn')
  ];
  ctaButtons.forEach(btn => {
    if (btn && buyUrls[lang]) {
      btn.href = buyUrls[lang];
    }
  });
}

function updateActiveStates(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('.book-thumb').forEach(thumb => {
    thumb.classList.toggle('active', thumb.getAttribute('data-lang') === lang);
  });
}

