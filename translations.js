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
    "footer.copyright": "© 2025 Travel Readz. All Rights Reserved."
  
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
    "footer.copyright": "© 2025 Travel Readz. Todos los Derechos Reservados."
  
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

