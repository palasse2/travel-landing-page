// ===================================
// MULTI-LANGUAGE SYSTEM
// ===================================

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About us",
    "nav.cta": "Get Your Guide",

    // Hero Section
    "hero.badge": "🌍 Written by a Morocco Local",
    "hero.title": "Stop Wasting Time on Tourist Traps",
    "hero.subtitle": "Get the <strong>only Morocco travel guide</strong> written by someone who actually lives there. Skip the generic advice and experience Morocco like a local.",
    "hero.stats.pages": "Pages",
    "hero.stats.chapters": "Chapters",
    "hero.stats.support": "WhatsApp Support",
    "hero.cta.button": "Download Now - $9.99",
    "hero.cta.instant": "✓ Instant Download",
    "hero.cta.secure": "✓ Secure Payment",
    "hero.badges.hidden": "Hidden Gems Revealed",
    "hero.badges.scam": "Scam Prevention Tips",
    "hero.badges.restaurant": "Local Restaurant Picks",

    // Book Selector
    "bookSelector.label": "Choose Your Language Version:",

    // Problem Section
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
    "preview.title": "Sneak Peek Inside",

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
    "bonus.title": "Get These Extras Free",
    "bonus.subtitle": "Worth $29.99 — Yours free when you get the guide today",
    "bonus.item1.value": "Value: $4.99",
    "bonus.item1.title": "Cultural Etiquette Mini Guide",
    "bonus.item1.desc": "Quick-reference guide to Moroccan customs and social norms",
    "bonus.item2.value": "Value: $5",
    "bonus.item2.title": "Custom Google Maps",
    "bonus.item2.desc": "Pre-loaded maps with all recommended spots for easy navigation",
    "bonus.item3.value": "Value: $15",
    "bonus.item3.title": "Direct WhatsApp Support",
    "bonus.item3.desc": "Get real-time answers from a local during your trip",
    "bonus.item4.value": "Value: $5",
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
    "pricing.priceNote": "Instant Access • No Subscription",
    "pricing.button": "Download Now",

    // Services
    "services.title": "Explore Our Other Services",
    "services.button": "Discover All Services",

    // FAQ
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
    "finalCta.title": "Ready to Experience the Real Morocco?",
    "finalCta.subtitle": "Join hundreds of travelers who've discovered Morocco the local way",
    "finalCta.button": "Download Your Guide Now - $9.99",
    "finalCta.instant": "✓ Instant Download",
    "finalCta.secure": "✓ Secure Payment",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.contact": "Contact Us",
    "footer.about": "About Us",
    "footer.copyright": "© 2025 Travel Readz. All Rights Reserved.",

    // About Page
    "about.hero.title": "About Travel Readz",
    "about.hero.subtitle": "Your trusted partner for unforgettable Moroccan travel experiences",
    "about.story.title": "Our Story",
    "about.story.p1": "Founded with a passion for travel and a deep love for Morocco, Travel Readz was created to bridge the gap between travelers and authentic experiences. We understand that planning a trip to Morocco can feel overwhelming — from navigating bustling medinas to understanding local customs and finding hidden gems that guidebooks often miss.",
    "about.story.p2": "That's why we're here. Our mission is to provide high-quality digital travel guides, practical resources, and expert insights that make every journey seamless and memorable. Whether you're a first-time visitor or a seasoned explorer, we aim to inspire adventurers while offering the tools and knowledge needed to travel with confidence.",
    "about.story.p3": "What started as a personal project to help fellow travelers has grown into a trusted resource for thousands seeking authentic Moroccan experiences. Every guide, template, and resource we create is crafted with care, local knowledge, and a commitment to helping you discover Morocco the way it's meant to be experienced.",
    "about.values.title": "Why Choose Travel Readz",
    "about.values.card1.title": "Expert Knowledge",
    "about.values.card1.desc": "Curated travel guides and resources created by local experts and experienced travelers who know Morocco inside out.",
    "about.values.card2.title": "Quality First",
    "about.values.card2.desc": "Every product we offer is carefully crafted and tested to ensure it delivers real value to your travel experience.",
    "about.values.card3.title": "Creative Tools",
    "about.values.card3.desc": "Exclusive digital templates, presets, and tools designed to help you document and share your Morocco journey beautifully.",
    "about.values.card4.title": "Dedicated Support",
    "about.values.card4.desc": "Our team is always ready to help with your questions, from pre-trip planning to on-the-ground support via WhatsApp.",
    "about.team.title": "Meet Our Team",
    "about.team.member1.role": "Founder & Travel Expert",
    "about.team.member2.role": "Marketing & Content Strategy",
    "about.team.member3.role": "Design & Digital Products",
    "about.morocco.title": "What Makes Morocco Special",
    "about.morocco.intro": "Morocco is more than just a destination — it's an experience that awakens all your senses. From the moment you arrive, you'll discover a land where ancient traditions meet modern vitality, creating memories that last a lifetime.",
    "about.morocco.card1.title": "Rich History & Culture",
    "about.morocco.card1.desc": "Walk through centuries-old medinas, explore imperial cities, and discover architectural wonders that tell stories of Berber, Arab, and European influences woven together over millennia.",
    "about.morocco.card2.title": "Diverse Landscapes",
    "about.morocco.card2.desc": "From the golden dunes of the Sahara Desert to the snow-capped Atlas Mountains, pristine Atlantic beaches to lush valleys — Morocco offers breathtaking natural diversity unlike anywhere else.",
    "about.morocco.card3.title": "Incredible Cuisine",
    "about.morocco.card3.desc": "Savor the aromatic flavors of tagines, couscous, and mint tea. Moroccan cuisine is a feast for the senses, blending spices, fresh ingredients, and cooking techniques passed down through generations.",
    "about.morocco.card4.title": "Warm Hospitality",
    "about.morocco.card4.desc": "Experience the genuine warmth of Moroccan hospitality. The local people welcome visitors with open hearts, offering tea, sharing stories, and making you feel like part of the family.",
    "about.morocco.card5.title": "Vibrant Arts & Crafts",
    "about.morocco.card5.desc": "Discover world-renowned craftsmanship in colorful souks — from intricate tilework and hand-woven carpets to leather goods and traditional pottery, each piece tells a unique story.",
    "about.morocco.card6.title": "Magical Atmosphere",
    "about.morocco.card6.desc": "Feel the enchantment of sunset calls to prayer, lantern-lit alleyways, bustling markets, and starlit desert nights. Morocco has a timeless magic that captivates every traveler.",
    "about.morocco.closing": "Whether you're seeking adventure, relaxation, cultural immersion, or spiritual reflection — Morocco offers something extraordinary for every type of traveler. Let us help you discover it all.",
    "about.cta.title": "Ready to Explore Morocco?",
    "about.cta.subtitle": "Start your journey with our comprehensive travel guides and resources",
    "about.cta.button": "Browse Our Shop",

    // Budget Calculator Page
"budget.hero.badge": "🧮 Universal Budget Tool",
"budget.hero.title": "Travel Budget Calculator",
"budget.hero.subtitle": "Set your budget, record spending over time, and see how it compares — a universal tool for travelers in any country.",
"budget.hero.cta": "$5 - Buy Individually",
"budget.hero.subtext": "✨ Included FREE with the Travel Readz ebook",
"budget.badge1": "💰 Track Expenses",
"budget.badge2": "📊 Compare Results",
"budget.badge3": "🌍 Any Currency",
"budget.features.title": "What You'll Get",
"budget.features.intro": "The Travel Budget Calculator helps you plan your trip budget in advance, track your spending throughout your journey, and compare your planned budget with what you actually spent at the end. It's designed to give travelers a clear overview of where their money goes, helping them stay in control and avoid overspending. Simple to use and flexible, the tool works for all travel styles, currencies, and countries — making it useful for any trip, anywhere.",
"budget.features.card1.title": "Plan Your Budget",
"budget.features.card1.desc": "Plan your trip budget in advance with detailed categories and estimates",
"budget.features.card2.title": "Track Expenses",
"budget.features.card2.desc": "Track all expenses throughout your trip in real-time",
"budget.features.card3.title": "Compare & Analyze",
"budget.features.card3.desc": "Compare planned vs actual spending with visual breakdowns",
"budget.features.card4.title": "Universal Tool",
"budget.features.card4.desc": "Works for all countries and currencies worldwide",
"budget.reviews.title": "What Travelers Say",
"budget.reviews.review1.text": "\"This tool helped me plan my budget before the trip and actually stick to it. Seeing planned vs spent made a huge difference.\"",
"budget.reviews.review1.author": "Alex R.",
"budget.reviews.review2.text": "\"Simple, clear, and surprisingly powerful. I finally understood where my money was going during my trip.\"",
"budget.reviews.review2.author": "Maya K.",
"budget.reviews.review3.text": "\"Perfect for any country. I planned my budget ahead of time and loved comparing it with my actual spending at the end.\"",
"budget.reviews.review3.author": "Daniel T.",
"budget.bonus.badge": "Free Bonuses",
"budget.bonus.title": "Other Free Gifts Included",
"budget.bonus.subtitle": "Worth $24.99 — Yours free when you get the guide today",
"budget.bonus.card1.value": "Value: $5",
"budget.bonus.card1.title": "Custom Google Maps",
"budget.bonus.card1.desc": "Pre-loaded maps with all recommended spots for easy navigation",
"budget.bonus.card2.value": "Value: $15",
"budget.bonus.card2.title": "Direct WhatsApp Support",
"budget.bonus.card2.desc": "Get real-time answers from a local during your trip",
"budget.bonus.card3.value": "Value: $4.99",
"budget.bonus.card3.title": "Cultural Etiquette Mini Guide",
"budget.bonus.card3.desc": "Quick-reference guide to Moroccan customs and social norms",
"budget.bonus.learnMore": "Learn More →",
"budget.cta.title": "Ready to Unlock All These Gifts?",
"budget.cta.button": "Get the Travel Readz Ebook",

// Contact Page
"contact.hero.title": "Get in Touch",
"contact.hero.subtitle": "We're always here to help! Whether you have a question about our guides, need support with an order, or just want to reach out — feel free to contact us through any of the platforms below.",
"contact.card1.title": "Email Support",
"contact.card1.desc": "Have questions or need help with any product? We typically respond within 24 hours.",
"contact.card2.title": "Follow Us",
"contact.card2.desc": "Stay updated with travel tips, Morocco guides, and exclusive offers on social media.",
"contact.card3.title": "Message Us",
"contact.card3.desc": "Have a custom request, business inquiry, or partnership opportunity?",
"contact.card3.button": "Send a Message",
"contact.form.title": "Send Us a Direct Message",
"contact.form.subtitle": "Fill out the form below and we'll get back to you as soon as possible.",
"contact.form.name": "Your Name *",
"contact.form.email": "Email Address *",
"contact.form.subjectLabel": "Subject *",
"contact.form.selectTopic": "Select a topic...",
"contact.form.optProduct": "Product Inquiry",
"contact.form.optOrder": "Order Support",
"contact.form.optTech": "Technical Issue",
"contact.form.optPartner": "Partnership/Business",
"contact.form.optFeedback": "Feedback",
"contact.form.optOther": "Other",
"contact.form.messageLabel": "Your Message *",
"contact.form.submit": "Send Message",
"contact.faq.title": "Frequently Asked Questions",
"contact.faq.q1.question": "How quickly will I receive my digital products?",
"contact.faq.q1.answer": "All digital products are delivered instantly after purchase via email. Check your inbox (and spam folder) for the download link.",
"contact.faq.q2.question": "What if I have issues accessing my purchase?",
"contact.faq.q2.answer": "Contact us at support@travelreadz.com with your order number, and we'll resolve it within 24 hours.",
"contact.faq.q3.question": "Can I get travel advice for my specific Morocco trip?",
"contact.faq.q3.answer": "Absolutely! Our Premium WhatsApp Support package provides personalized travel advice from local experts. You can also email us with specific questions.",
"contact.faq.q4.question": "Do you offer wholesale or affiliate partnerships?",
"contact.faq.q4.answer": "Yes! We're open to partnerships with travel bloggers, agencies, and influencers. Email us with \"Partnership\" in the subject line.",

// Maps Gift Page
"maps.hero.badge": "🗺️ Interactive Travel Guide",
"maps.hero.title": "The Ultimate Marrakech Google Maps Travel Guide",
"maps.hero.subtitle": "Hand-picked attractions, hidden gems, riads, restaurants, and local tips — all saved directly to Google Maps for your Marrakech adventure.",
"maps.hero.cta": "$5 - Buy Individually",
"maps.hero.freeNote": "✨ Included FREE with the Travel Readz ebook",
"maps.badge1": "📍Must-See Spots",
"maps.badge2": "🗺️ Interactive Maps",
"maps.badge3": "💎 Hidden Gems",
"maps.features.title": "What You'll Get",
"maps.features.subtitle": "This gift includes everything you need to navigate Marrakech like a local: detailed maps, hidden gems, practical tips, and curated recommendations. Perfect for first-time visitors or returning travelers.",
"maps.features.card1.desc": "Curated travel insights designed to save you time and enhance your experience.",
"maps.features.card2.desc": "Local recommendations and hidden gems you won't easily find online.",
"maps.features.card3.desc": "Easy-to-use Google Maps guide with every attraction perfectly pinned.",
"maps.features.card4.desc": "Expert tips for accommodations, authentic dining, and secret local spots.",
"maps.reviews.title": "What Travelers Say",
"maps.reviews.review1.text": "\"This guide alone is worth the price of the ebook. The maps were incredibly detailed and helped us discover places we would have never found on our own. Extremely helpful!\"",
"maps.reviews.review2.text": "\"Clear, practical, and beautifully organized. The Google Maps integration made navigation so easy. We visited every spot they recommended and loved them all. Highly recommended.\"",
"maps.reviews.review3.text": "\"Saved me hours of planning and helped me avoid tourist traps. The local recommendations were spot-on. Best travel resource I've ever used for Morocco!\"",
"maps.bonus.badge": "Free Bonuses",
"maps.bonus.title": "Other Free Gifts Included",
"maps.bonus.subtitle": "Worth $24.99 — Yours free when you get the guide today",
"maps.cta.title": "Ready to Unlock All These Gifts?",
"maps.cta.button": "Get the Travel Readz Ebook",



  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.cta": "Obtenez Votre Guide",

    // Hero Section
    "hero.badge": "🌍 Écrit par un Local du Maroc",
    "hero.title": "Arrêtez de Perdre du Temps dans les Pièges à Touristes",
    "hero.subtitle": "Obtenez le <strong>seul guide de voyage au Maroc</strong> écrit par quelqu'un qui y vit réellement. Évitez les conseils génériques et découvrez le Maroc comme un local.",
    "hero.stats.pages": "Pages",
    "hero.stats.chapters": "Chapitres",
    "hero.stats.support": "Support WhatsApp",
    "hero.cta.button": "Télécharger Maintenant - 9,99 $",
    "hero.cta.instant": "✓ Téléchargement Instantané",
    "hero.cta.secure": "✓ Paiement Sécurisé",
    "hero.badges.hidden": "Trésors Cachés Révélés",
    "hero.badges.scam": "Conseils Anti-Arnaques",
    "hero.badges.restaurant": "Restaurants Locaux Sélectionnés",

    // Book Selector
    "bookSelector.label": "Choisissez Votre Version Linguistique:",

    // Problem Section
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
    "whyDifferent.feature1.desc": "Je vis au Maroc. Ce n'est pas basé sur des vacances de 2 semaines—c'est des décennies d'expérience réelle, de compréhension culturelle et de connexions locales. Vous obtenez des connaissances authentiques d'initié, pas de la propagande touristique.",
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
    "preview.title": "Aperçu de l'Intérieur",

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
    "bonus.title": "Obtenez Ces Extras Gratuitement",
    "bonus.subtitle": "Valeur 29,99 $ — À vous gratuitement en obtenant le guide aujourd'hui",
    "bonus.item1.value": "Valeur: 4,99 $",
    "bonus.item1.title": "Mini Guide d'Étiquette Culturelle",
    "bonus.item1.desc": "Guide de référence rapide sur les coutumes et normes sociales marocaines",
    "bonus.item2.value": "Valeur: 5 $",
    "bonus.item2.title": "Google Maps Personnalisées",
    "bonus.item2.desc": "Cartes préchargées avec tous les endroits recommandés pour une navigation facile",
    "bonus.item3.value": "Valeur: 15 $",
    "bonus.item3.title": "Support WhatsApp Direct",
    "bonus.item3.desc": "Obtenez des réponses en temps réel d'un local pendant votre voyage",
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
    "pricing.priceNote": "Accès Instantané • Aucun Abonnement",
    "pricing.button": "Télécharger Maintenant",

    // Services
    "services.title": "Explorez Nos Autres Services",
    "services.button": "Découvrir Tous les Services",

    // FAQ
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
    "finalCta.title": "Prêt à Découvrir le Vrai Maroc?",
    "finalCta.subtitle": "Rejoignez des centaines de voyageurs qui ont découvert le Maroc à la manière locale",
    "finalCta.button": "Téléchargez Votre Guide Maintenant - 9,99 $",
    "finalCta.instant": "✓ Téléchargement Instantané",
    "finalCta.secure": "✓ Paiement Sécurisé",

    // Footer
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions Générales",
    "footer.contact": "Contactez-Nous",
    "footer.about": "À Propos",
    "footer.copyright": "© 2025 Travel Readz. Tous Droits Réservés.",

    // About Page
    "about.hero.title": "À Propos de Travel Readz",
    "about.hero.subtitle": "Votre partenaire de confiance pour des expériences de voyage marocaines inoubliables",
    "about.story.title": "Notre Histoire",
    "about.story.p1": "Fondée avec une passion pour le voyage et un amour profond pour le Maroc, Travel Readz a été créée pour combler le fossé entre les voyageurs et les expériences authentiques. Nous comprenons que planifier un voyage au Maroc peut sembler accablant — de la navigation dans les médinas animées à la compréhension des coutumes locales et la découverte de trésors cachés que les guides touristiques oublient souvent.",
    "about.story.p2": "C'est pourquoi nous sommes là. Notre mission est de fournir des guides de voyage numériques de haute qualité, des ressources pratiques et des informations d'experts qui rendent chaque voyage fluide et mémorable. Que vous soyez un visiteur pour la première fois ou un explorateur expérimenté, nous visons à inspirer les aventuriers tout en offrant les outils et les connaissances nécessaires pour voyager en toute confiance.",
    "about.story.p3": "Ce qui a commencé comme un projet personnel pour aider d'autres voyageurs est devenu une ressource de confiance pour des milliers de personnes recherchant des expériences marocaines authentiques. Chaque guide, modèle et ressource que nous créons est élaboré avec soin, connaissance locale et engagement à vous aider à découvrir le Maroc tel qu'il doit être vécu.",
    "about.values.title": "Pourquoi Choisir Travel Readz",
    "about.values.card1.title": "Expertise Locale",
    "about.values.card1.desc": "Guides de voyage et ressources soigneusement sélectionnés créés par des experts locaux et des voyageurs expérimentés qui connaissent le Maroc sur le bout des doigts.",
    "about.values.card2.title": "Qualité D'Abord",
    "about.values.card2.desc": "Chaque produit que nous offrons est soigneusement élaboré et testé pour s'assurer qu'il apporte une vraie valeur à votre expérience de voyage.",
    "about.values.card3.title": "Outils Créatifs",
    "about.values.card3.desc": "Modèles numériques exclusifs, presets et outils conçus pour vous aider à documenter et partager votre voyage au Maroc avec beauté.",
    "about.values.card4.title": "Support Dédié",
    "about.values.card4.desc": "Notre équipe est toujours prête à vous aider avec vos questions, de la planification pré-voyage au support sur place via WhatsApp.",
    "about.team.title": "Rencontrez Notre Équipe",
    "about.team.member1.role": "Fondateur & Expert Voyage",
    "about.team.member2.role": "Marketing & Stratégie de Contenu",
    "about.team.member3.role": "Design & Produits Numériques",
    "about.morocco.title": "Ce Qui Rend le Maroc Spécial",
    "about.morocco.intro": "Le Maroc est bien plus qu'une simple destination — c'est une expérience qui éveille tous vos sens. Dès votre arrivée, vous découvrirez un pays où les traditions anciennes rencontrent la vitalité moderne, créant des souvenirs qui durent toute une vie.",
    "about.morocco.card1.title": "Riche Histoire & Culture",
    "about.morocco.card1.desc": "Parcourez des médinas centenaires, explorez des villes impériales et découvrez des merveilles architecturales qui racontent des histoires d'influences berbères, arabes et européennes entrelacées sur des millénaires.",
    "about.morocco.card2.title": "Paysages Diversifiés",
    "about.morocco.card2.desc": "Des dunes dorées du désert du Sahara aux sommets enneigés de l'Atlas, des plages atlantiques préservées aux vallées luxuriantes — le Maroc offre une diversité naturelle époustouflante sans pareille.",
    "about.morocco.card3.title": "Cuisine Incroyable",
    "about.morocco.card3.desc": "Savourez les saveurs aromatiques des tajines, du couscous et du thé à la menthe. La cuisine marocaine est une fête pour les sens, mélangeant épices, ingrédients frais et techniques culinaires transmises de génération en génération.",
    "about.morocco.card4.title": "Chaleureuse Hospitalité",
    "about.morocco.card4.desc": "Vivez la chaleur authentique de l'hospitalité marocaine. Les locaux accueillent les visiteurs à bras ouverts, offrant du thé, partageant des histoires et vous faisant sentir comme un membre de la famille.",
    "about.morocco.card5.title": "Arts & Artisanat Vibrants",
    "about.morocco.card5.desc": "Découvrez un artisanat de renommée mondiale dans les souks colorés — des zelliges complexes aux tapis tissés à la main en passant par les articles en cuir et la poterie traditionnelle, chaque pièce raconte une histoire unique.",
    "about.morocco.card6.title": "Atmosphère Magique",
    "about.morocco.card6.desc": "Ressentez l'enchantement des appels à la prière au coucher du soleil, des ruelles éclairées aux lanternes, des marchés animés et des nuits désertiques étoilées. Le Maroc possède une magie intemporelle qui captive chaque voyageur.",
    "about.morocco.closing": "Que vous recherchiez l'aventure, la détente, l'immersion culturelle ou la réflexion spirituelle — le Maroc offre quelque chose d'extraordinaire pour chaque type de voyageur. Laissez-nous vous aider à tout découvrir.",
    "about.cta.title": "Prêt à Explorer le Maroc?",
    "about.cta.subtitle": "Commencez votre voyage avec nos guides de voyage et ressources complets",
    "about.cta.button": "Parcourir Notre Boutique",

    // Budget Calculator Page
"budget.hero.badge": "🧮 Outil de Budget Universel",
"budget.hero.title": "Calculateur de Budget de Voyage",
"budget.hero.subtitle": "Définissez votre budget, enregistrez vos dépenses au fil du temps et voyez comment cela se compare — un outil universel pour les voyageurs dans n'importe quel pays.",
"budget.hero.cta": "5 $ - Acheter Individuellement",
"budget.hero.subtext": "✨ Inclus GRATUITEMENT avec l'ebook Travel Readz",
"budget.badge1": "💰 Suivez les Dépenses",
"budget.badge2": "📊 Comparez les Résultats",
"budget.badge3": "🌍 Toutes Devises",
"budget.features.title": "Ce Que Vous Obtenez",
"budget.features.intro": "Le Calculateur de Budget de Voyage vous aide à planifier votre budget de voyage à l'avance, à suivre vos dépenses tout au long de votre voyage et à comparer votre budget prévu avec ce que vous avez réellement dépensé à la fin. Il est conçu pour donner aux voyageurs une vue claire de où va leur argent, les aidant à garder le contrôle et à éviter les dépenses excessives. Simple à utiliser et flexible, l'outil fonctionne pour tous les styles de voyage, devises et pays — le rendant utile pour n'importe quel voyage, n'importe où.",
"budget.features.card1.title": "Planifiez Votre Budget",
"budget.features.card1.desc": "Planifiez votre budget de voyage à l'avance avec des catégories détaillées et des estimations",
"budget.features.card2.title": "Suivez les Dépenses",
"budget.features.card2.desc": "Suivez toutes les dépenses tout au long de votre voyage en temps réel",
"budget.features.card3.title": "Comparez & Analysez",
"budget.features.card3.desc": "Comparez les dépenses prévues vs réelles avec des répartitions visuelles",
"budget.features.card4.title": "Outil Universel",
"budget.features.card4.desc": "Fonctionne pour tous les pays et devises du monde",
"budget.reviews.title": "Ce Que Disent les Voyageurs",
"budget.reviews.review1.text": "\"Cet outil m'a aidé à planifier mon budget avant le voyage et à vraiment m'y tenir. Voir les dépenses prévues vs réelles a fait une grande différence.\"",
"budget.reviews.review1.author": "Alex R.",
"budget.reviews.review2.text": "\"Simple, clair et étonnamment puissant. J'ai enfin compris où allait mon argent pendant mon voyage.\"",
"budget.reviews.review2.author": "Maya K.",
"budget.reviews.review3.text": "\"Parfait pour n'importe quel pays. J'ai planifié mon budget à l'avance et j'ai adoré le comparer avec mes dépenses réelles à la fin.\"",
"budget.reviews.review3.author": "Daniel T.",
"budget.bonus.badge": "Bonus Gratuits",
"budget.bonus.title": "Autres Cadeaux Gratuits Inclus",
"budget.bonus.subtitle": "Valeur de 24,99 $ — À vous gratuitement en obtenant le guide aujourd'hui",
"budget.bonus.card1.value": "Valeur: 5 $",
"budget.bonus.card1.title": "Google Maps Personnalisées",
"budget.bonus.card1.desc": "Cartes préchargées avec tous les endroits recommandés pour une navigation facile",
"budget.bonus.card2.value": "Valeur: 15 $",
"budget.bonus.card2.title": "Support WhatsApp Direct",
"budget.bonus.card2.desc": "Obtenez des réponses en temps réel d'un local pendant votre voyage",
"budget.bonus.card3.value": "Valeur: 4,99 $",
"budget.bonus.card3.title": "Mini Guide d'Étiquette Culturelle",
"budget.bonus.card3.desc": "Guide de référence rapide sur les coutumes et normes sociales marocaines",
"budget.bonus.learnMore": "En Savoir Plus →",
"budget.cta.title": "Prêt à Débloquer Tous Ces Cadeaux?",
"budget.cta.button": "Obtenez l'Ebook Travel Readz",

// Contact Page
"contact.hero.title": "Contactez-Nous",
"contact.hero.subtitle": "Nous sommes toujours là pour vous aider ! Que vous ayez une question sur nos guides, besoin d'aide avec une commande, ou que vous souhaitiez simplement nous contacter — n'hésitez pas à nous joindre via l'une des plateformes ci-dessous.",
"contact.card1.title": "Support par Email",
"contact.card1.desc": "Vous avez des questions ou besoin d'aide avec un produit ? Nous répondons généralement sous 24 heures.",
"contact.card2.title": "Suivez-Nous",
"contact.card2.desc": "Restez informé des conseils de voyage, des guides du Maroc et des offres exclusives sur les réseaux sociaux.",
"contact.card3.title": "Écrivez-Nous",
"contact.card3.desc": "Vous avez une demande personnalisée, une question commerciale ou une opportunité de partenariat ?",
"contact.card3.button": "Envoyer un Message",
"contact.form.title": "Envoyez-Nous un Message Direct",
"contact.form.subtitle": "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
"contact.form.name": "Votre Nom *",
"contact.form.email": "Adresse Email *",
"contact.form.subjectLabel": "Sujet *",
"contact.form.selectTopic": "Sélectionnez un sujet...",
"contact.form.optProduct": "Question sur un Produit",
"contact.form.optOrder": "Support de Commande",
"contact.form.optTech": "Problème Technique",
"contact.form.optPartner": "Partenariat/Business",
"contact.form.optFeedback": "Avis",
"contact.form.optOther": "Autre",
"contact.form.messageLabel": "Votre Message *",
"contact.form.submit": "Envoyer le Message",
"contact.faq.title": "Questions Fréquemment Posées",
"contact.faq.q1.question": "À quelle vitesse vais-je recevoir mes produits numériques ?",
"contact.faq.q1.answer": "Tous les produits numériques sont livrés instantanément après l'achat par email. Vérifiez votre boîte de réception (et le dossier spam) pour le lien de téléchargement.",
"contact.faq.q2.question": "Et si j'ai des problèmes pour accéder à mon achat ?",
"contact.faq.q2.answer": "Contactez-nous à support@travelreadz.com avec votre numéro de commande, et nous le résoudrons sous 24 heures.",
"contact.faq.q3.question": "Puis-je obtenir des conseils de voyage pour mon voyage spécifique au Maroc ?",
"contact.faq.q3.answer": "Absolument ! Notre package de Support WhatsApp Premium fournit des conseils de voyage personnalisés d'experts locaux. Vous pouvez également nous envoyer un email avec des questions spécifiques.",
"contact.faq.q4.question": "Proposez-vous des partenariats de gros ou d'affiliation ?",
"contact.faq.q4.answer": "Oui ! Nous sommes ouverts aux partenariats avec les blogueurs voyage, les agences et les influenceurs. Envoyez-nous un email avec \"Partenariat\" dans l'objet.",

// Maps Gift Page
"maps.hero.badge": "🗺️ Guide de Voyage Interactif",
"maps.hero.title": "Le Guide Ultime de Marrakech sur Google Maps",
"maps.hero.subtitle": "Attractions triées sur le volet, trésors cachés, riads, restaurants et conseils locaux — le tout enregistré directement sur Google Maps pour votre aventure à Marrakech.",
"maps.hero.cta": "5 $ - Acheter Individuellement",
"maps.hero.freeNote": "✨ Inclus GRATUITEMENT avec l'ebook Travel Readz",
"maps.badge1": "📍 Lieux Incontournables",
"maps.badge2": "🗺️ Cartes Interactives",
"maps.badge3": "💎 Trésors Cachés",
"maps.features.title": "Ce Que Vous Obtiendrez",
"maps.features.subtitle": "Ce cadeau comprend tout ce dont vous avez besoin pour naviguer dans Marrakech comme un local : cartes détaillées, trésors cachés, conseils pratiques et recommandations sélectionnées. Parfait pour les visiteurs novices ou les voyageurs de retour.",
"maps.features.card1.desc": "Des informations de voyage sélectionnées conçues pour vous faire gagner du temps et améliorer votre expérience.",
"maps.features.card2.desc": "Recommandations locales et trésors cachés que vous ne trouverez pas facilement en ligne.",
"maps.features.card3.desc": "Guide Google Maps facile à utiliser avec chaque attraction parfaitement épinglée.",
"maps.features.card4.desc": "Conseils d'experts pour l'hébergement, la restauration authentique et les endroits secrets locaux.",
"maps.reviews.title": "Ce Que Disent les Voyageurs",
"maps.reviews.review1.text": "\"Ce guide seul vaut le prix de l'ebook. Les cartes étaient incroyablement détaillées et nous ont aidés à découvrir des endroits que nous n'aurions jamais trouvés par nous-mêmes. Extrêmement utile !\"",
"maps.reviews.review2.text": "\"Clair, pratique et magnifiquement organisé. L'intégration Google Maps a rendu la navigation tellement facile. Nous avons visité chaque endroit recommandé et les avons tous adorés. Fortement recommandé.\"",
"maps.reviews.review3.text": "\"M'a fait gagner des heures de planification et m'a aidé à éviter les pièges à touristes. Les recommandations locales étaient parfaites. La meilleure ressource de voyage que j'ai jamais utilisée pour le Maroc !\"",
"maps.bonus.badge": "Bonus Gratuits",
"maps.bonus.title": "Autres Cadeaux Gratuits Inclus",
"maps.bonus.subtitle": "Valeur 24,99 $ — À vous gratuitement en obtenant le guide aujourd'hui",
"maps.cta.title": "Prêt à Débloquer Tous Ces Cadeaux ?",
"maps.cta.button": "Obtenir l'Ebook Travel Readz",

// shop page 
shop: {
  hero: {
    title: "Explorez Notre Collection",
    subtitle: "Tout ce dont vous avez besoin pour une aventure marocaine inoubliable"
  },
  filter: {
    all: "Tous les Produits",
    guides: "Guides de Voyage",
    services: "Services de Voyage",
    templates: "Modèles"
  },
  search: {
    placeholder: "Rechercher des produits..."
  },
  section: {
    guides: "Guides de Voyage",
    services: "Services Essentiels",
    templates: "Modèles Créatifs"
  },
  badge: {
    bestseller: "Meilleure Vente",
    new: "Nouveau",
    sale: "Promotion",
    recommended: "Recommandé",
    popular: "Populaire",
    topRated: "Très Bien Noté",
    trending: "Tendance",
    free: "Gratuit",
    hot: "Hot 🔥"
  },
  quickView: "Voir",
  buyNow: "Acheter",
  banner: {
    title: "🎁 Offre Pack à Durée Limitée",
    desc: "Obtenez la collection complète Maroc - Économisez 40%",
    button: "Voir l'Offre"
  },
  reviews: "avis",
  checkAvailability: "Vérifier la disponibilité →"
}
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Acerca de",
    "nav.cta": "Obtén Tu Guía",

    // Hero Section
    "hero.badge": "🌍 Escrito por un Local de Marruecos",
    "hero.title": "Deja de Perder Tiempo en Trampas Turísticas",
    "hero.subtitle": "Obtén la <strong>única guía de viaje a Marruecos</strong> escrita por alguien que realmente vive allí. Olvida los consejos genéricos y experimenta Marruecos como un local.",
    "hero.stats.pages": "Páginas",
    "hero.stats.chapters": "Capítulos",
    "hero.stats.support": "Soporte WhatsApp",
    "hero.cta.button": "Descargar Ahora - $9.99",
    "hero.cta.instant": "✓ Descarga Instantánea",
    "hero.cta.secure": "✓ Pago Seguro",
    "hero.badges.hidden": "Joyas Ocultas Reveladas",
    "hero.badges.scam": "Consejos Anti-Estafas",
    "hero.badges.restaurant": "Restaurantes Locales Seleccionados",

    // Book Selector
    "bookSelector.label": "Elige Tu Versión de Idioma:",

    // Problem Section
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
    "whyDifferent.feature1.desc": "Vivo en Marruecos. Esto no está basado en unas vacaciones de 2 semanas—son décadas de experiencia real, comprensión cultural y conexiones locales. Obtienes conocimiento auténtico de primera mano, no propaganda turística.",
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
    "preview.title": "Vista Previa del Interior",

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
    "bonus.title": "Obtén Estos Extras Gratis",
    "bonus.subtitle": "Valor de $29.99 — Tuyo gratis cuando obtienes la guía hoy",
    "bonus.item1.value": "Valor: $4.99",
    "bonus.item1.title": "Mini Guía de Etiqueta Cultural",
    "bonus.item1.desc": "Guía de referencia rápida sobre costumbres y normas sociales marroquíes",
    "bonus.item2.value": "Valor: $5",
    "bonus.item2.title": "Google Maps Personalizados",
    "bonus.item2.desc": "Mapas precargados con todos los lugares recomendados para una navegación fácil",
    "bonus.item3.value": "Valor: $15",
    "bonus.item3.title": "Soporte Directo por WhatsApp",
    "bonus.item3.desc": "Obtén respuestas en tiempo real de un local durante tu viaje",
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
    "pricing.priceNote": "Acceso Instantáneo • Sin Suscripción",
    "pricing.button": "Descargar Ahora",

    // Services
    "services.title": "Explora Nuestros Otros Servicios",
    "services.button": "Descubrir Todos los Servicios",

    // FAQ
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
    "finalCta.title": "¿Listo para Experimentar el Verdadero Marruecos?",
    "finalCta.subtitle": "Únete a cientos de viajeros que han descubierto Marruecos al estilo local",
    "finalCta.button": "Descarga Tu Guía Ahora - $9.99",
    "finalCta.instant": "✓ Descarga Instantánea",
    "finalCta.secure": "✓ Pago Seguro",

    // Footer
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.contact": "Contáctanos",
    "footer.about": "Acerca de",
    "footer.copyright": "© 2025 Travel Readz. Todos los Derechos Reservados.",

    // About Page
    "about.hero.title": "Sobre Travel Readz",
    "about.hero.subtitle": "Tu socio de confianza para experiencias de viaje marroquíes inolvidables",
    "about.story.title": "Nuestra Historia",
    "about.story.p1": "Fundada con una pasión por los viajes y un amor profundo por Marruecos, Travel Readz fue creada para cerrar la brecha entre los viajeros y las experiencias auténticas. Entendemos que planificar un viaje a Marruecos puede parecer abrumador — desde navegar por las bulliciosas medinas hasta entender las costumbres locales y encontrar joyas ocultas que las guías turísticas a menudo pasan por alto.",
    "about.story.p2": "Por eso estamos aquí. Nuestra misión es proporcionar guías de viaje digitales de alta calidad, recursos prácticos e información experta que hacen que cada viaje sea fluido y memorable. Ya seas un visitante por primera vez o un explorador experimentado, nuestro objetivo es inspirar a los aventureros mientras ofrecemos las herramientas y el conocimiento necesarios para viajar con confianza.",
    "about.story.p3": "Lo que comenzó como un proyecto personal para ayudar a otros viajeros se ha convertido en un recurso de confianza para miles que buscan experiencias marroquíes auténticas. Cada guía, plantilla y recurso que creamos está elaborado con cuidado, conocimiento local y compromiso para ayudarte a descubrir Marruecos como debe ser experimentado.",
    "about.values.title": "Por Qué Elegir Travel Readz",
    "about.values.card1.title": "Conocimiento Experto",
    "about.values.card1.desc": "Guías de viaje y recursos seleccionados creados por expertos locales y viajeros experimentados que conocen Marruecos al dedillo.",
    "about.values.card2.title": "Calidad Primero",
    "about.values.card2.desc": "Cada producto que ofrecemos está cuidadosamente elaborado y probado para asegurar que aporte valor real a tu experiencia de viaje.",
    "about.values.card3.title": "Herramientas Creativas",
    "about.values.card3.desc": "Plantillas digitales exclusivas, presets y herramientas diseñadas para ayudarte a documentar y compartir tu viaje a Marruecos con belleza.",
    "about.values.card4.title": "Soporte Dedicado",
    "about.values.card4.desc": "Nuestro equipo siempre está listo para ayudar con tus preguntas, desde la planificación previa al viaje hasta el apoyo en el terreno vía WhatsApp.",
    "about.team.title": "Conoce a Nuestro Equipo",
    "about.team.member1.role": "Fundador & Experto en Viajes",
    "about.team.member2.role": "Marketing & Estrategia de Contenido",
    "about.team.member3.role": "Diseño & Productos Digitales",
    "about.morocco.title": "Lo Que Hace Especial a Marruecos",
    "about.morocco.intro": "Marruecos es más que un destino — es una experiencia que despierta todos tus sentidos. Desde el momento en que llegas, descubrirás una tierra donde las tradiciones antiguas se encuentran con la vitalidad moderna, creando recuerdos que duran toda la vida.",
    "about.morocco.card1.title": "Rica Historia & Cultura",
    "about.morocco.card1.desc": "Camina por medinas centenarias, explora ciudades imperiales y descubre maravillas arquitectónicas que cuentan historias de influencias bereberes, árabes y europeas entrelazadas a lo largo de milenios.",
    "about.morocco.card2.title": "Paisajes Diversos",
    "about.morocco.card2.desc": "Desde las dunas doradas del desierto del Sahara hasta las montañas del Atlas cubiertas de nieve, playas atlánticas prístinas hasta valles exuberantes — Marruecos ofrece una diversidad natural impresionante como ningún otro lugar.",
    "about.morocco.card3.title": "Cocina Increíble",
    "about.morocco.card3.desc": "Saborea los aromas de los tajines, cuscús y té de menta. La cocina marroquí es un festín para los sentidos, mezclando especias, ingredientes frescos y técnicas culinarias transmitidas por generaciones.",
    "about.morocco.card4.title": "Cálida Hospitalidad",
    "about.morocco.card4.desc": "Experimenta la calidez genuina de la hospitalidad marroquí. Los lugareños dan la bienvenida a los visitantes con el corazón abierto, ofreciendo té, compartiendo historias y haciéndote sentir como parte de la familia.",
    "about.morocco.card5.title": "Artes & Artesanías Vibrantes",
    "about.morocco.card5.desc": "Descubre artesanía de renombre mundial en coloridos zocos — desde intrincados azulejos y alfombras tejidas a mano hasta artículos de cuero y cerámica tradicional, cada pieza cuenta una historia única.",
    "about.morocco.card6.title": "Atmósfera Mágica",
    "about.morocco.card6.desc": "Siente el encanto de las llamadas a la oración al atardecer, callejones iluminados con linternas, mercados bulliciosos y noches desérticas estrelladas. Marruecos tiene una magia atemporal que cautiva a cada viajero.",
    "about.morocco.closing": "Ya sea que busques aventura, relajación, inmersión cultural o reflexión espiritual — Marruecos ofrece algo extraordinario para cada tipo de viajero. Déjanos ayudarte a descubrirlo todo.",
    "about.cta.title": "¿Listo para Explorar Marruecos?",
    "about.cta.subtitle": "Comienza tu viaje con nuestras guías de viaje y recursos completos",
    "about.cta.button": "Explorar Nuestra Tienda",

    // Budget Calculator Page
"budget.hero.badge": "🧮 Herramienta de Presupuesto Universal",
"budget.hero.title": "Calculadora de Presupuesto de Viaje",
"budget.hero.subtitle": "Establece tu presupuesto, registra los gastos a lo largo del tiempo y ve cómo se compara — una herramienta universal para viajeros en cualquier país.",
"budget.hero.cta": "$5 - Comprar Individualmente",
"budget.hero.subtext": "✨ Incluido GRATIS con el ebook Travel Readz",
"budget.badge1": "💰 Rastrea Gastos",
"budget.badge2": "📊 Compara Resultados",
"budget.badge3": "🌍 Cualquier Moneda",
"budget.features.title": "Lo Que Obtendrás",
"budget.features.intro": "La Calculadora de Presupuesto de Viaje te ayuda a planificar tu presupuesto de viaje con anticipación, rastrear tus gastos durante tu viaje y comparar tu presupuesto planificado con lo que realmente gastaste al final. Está diseñada para dar a los viajeros una visión clara de hacia dónde va su dinero, ayudándolos a mantener el control y evitar el gasto excesivo. Simple de usar y flexible, la herramienta funciona para todos los estilos de viaje, monedas y países — haciéndola útil para cualquier viaje, en cualquier lugar.",
"budget.features.card1.title": "Planifica Tu Presupuesto",
"budget.features.card1.desc": "Planifica tu presupuesto de viaje con anticipación con categorías detalladas y estimaciones",
"budget.features.card2.title": "Rastrea Gastos",
"budget.features.card2.desc": "Rastrea todos los gastos durante tu viaje en tiempo real",
"budget.features.card3.title": "Compara & Analiza",
"budget.features.card3.desc": "Compara gastos planificados vs reales con desgloses visuales",
"budget.features.card4.title": "Herramienta Universal",
"budget.features.card4.desc": "Funciona para todos los países y monedas del mundo",
"budget.reviews.title": "Lo Que Dicen los Viajeros",
"budget.reviews.review1.text": "\"Esta herramienta me ayudó a planificar mi presupuesto antes del viaje y realmente apegarme a él. Ver lo planificado vs lo gastado hizo una gran diferencia.\"",
"budget.reviews.review1.author": "Alex R.",
"budget.reviews.review2.text": "\"Simple, claro y sorprendentemente poderoso. Finalmente entendí a dónde iba mi dinero durante mi viaje.\"",
"budget.reviews.review2.author": "Maya K.",
"budget.reviews.review3.text": "\"Perfecto para cualquier país. Planifiqué mi presupuesto con anticipación y me encantó compararlo con mis gastos reales al final.\"",
"budget.reviews.review3.author": "Daniel T.",
"budget.bonus.badge": "Bonos Gratuitos",
"budget.bonus.title": "Otros Regalos Gratuitos Incluidos",
"budget.bonus.subtitle": "Valor de $24.99 — Tuyo gratis cuando obtienes la guía hoy",
"budget.bonus.card1.value": "Valor: $5",
"budget.bonus.card1.title": "Google Maps Personalizados",
"budget.bonus.card1.desc": "Mapas precargados con todos los lugares recomendados para una navegación fácil",
"budget.bonus.card2.value": "Valor: $15",
"budget.bonus.card2.title": "Soporte Directo por WhatsApp",
"budget.bonus.card2.desc": "Obtén respuestas en tiempo real de un local durante tu viaje",
"budget.bonus.card3.value": "Valor: $4.99",
"budget.bonus.card3.title": "Mini Guía de Etiqueta Cultural",
"budget.bonus.card3.desc": "Guía de referencia rápida sobre costumbres y normas sociales marroquíes",
"budget.bonus.learnMore": "Saber Más →",
"budget.cta.title": "¿Listo para Desbloquear Todos Estos Regalos?",
"budget.cta.button": "Obtén el Ebook Travel Readz",

// Contact Page
"contact.hero.title": "Contáctanos",
"contact.hero.subtitle": "¡Siempre estamos aquí para ayudarte! Ya sea que tengas una pregunta sobre nuestras guías, necesites ayuda con un pedido, o simplemente quieras comunicarte — no dudes en contactarnos a través de cualquiera de las plataformas a continuación.",
"contact.card1.title": "Soporte por Email",
"contact.card1.desc": "¿Tienes preguntas o necesitas ayuda con algún producto? Normalmente respondemos en 24 horas.",
"contact.card2.title": "Síguenos",
"contact.card2.desc": "Mantente actualizado con consejos de viaje, guías de Marruecos y ofertas exclusivas en redes sociales.",
"contact.card3.title": "Escríbenos",
"contact.card3.desc": "¿Tienes una solicitud personalizada, consulta comercial u oportunidad de asociación?",
"contact.card3.button": "Enviar un Mensaje",
"contact.form.title": "Envíanos un Mensaje Directo",
"contact.form.subtitle": "Completa el formulario a continuación y te responderemos lo antes posible.",
"contact.form.name": "Tu Nombre *",
"contact.form.email": "Dirección de Email *",
"contact.form.subjectLabel": "Asunto *",
"contact.form.selectTopic": "Selecciona un tema...",
"contact.form.optProduct": "Consulta de Producto",
"contact.form.optOrder": "Soporte de Pedido",
"contact.form.optTech": "Problema Técnico",
"contact.form.optPartner": "Asociación/Negocio",
"contact.form.optFeedback": "Comentarios",
"contact.form.optOther": "Otro",
"contact.form.messageLabel": "Tu Mensaje *",
"contact.form.submit": "Enviar Mensaje",
"contact.faq.title": "Preguntas Frecuentes",
"contact.faq.q1.question": "¿Qué tan rápido recibiré mis productos digitales?",
"contact.faq.q1.answer": "Todos los productos digitales se entregan instantáneamente después de la compra por email. Revisa tu bandeja de entrada (y la carpeta de spam) para el enlace de descarga.",
"contact.faq.q2.question": "¿Qué pasa si tengo problemas para acceder a mi compra?",
"contact.faq.q2.answer": "Contáctanos en support@travelreadz.com con tu número de pedido, y lo resolveremos en 24 horas.",
"contact.faq.q3.question": "¿Puedo obtener consejos de viaje para mi viaje específico a Marruecos?",
"contact.faq.q3.answer": "¡Por supuesto! Nuestro paquete de Soporte WhatsApp Premium proporciona consejos de viaje personalizados de expertos locales. También puedes enviarnos un email con preguntas específicas.",
"contact.faq.q4.question": "¿Ofrecen asociaciones mayoristas o de afiliados?",
"contact.faq.q4.answer": "¡Sí! Estamos abiertos a asociaciones con bloggers de viaje, agencias e influencers. Envíanos un email con \"Asociación\" en el asunto.",

// Maps Gift Page
"maps.hero.badge": "🗺️ Guía de Viaje Interactiva",
"maps.hero.title": "La Guía Definitiva de Marrakech en Google Maps",
"maps.hero.subtitle": "Atracciones seleccionadas, joyas ocultas, riads, restaurantes y consejos locales — todo guardado directamente en Google Maps para tu aventura en Marrakech.",
"maps.hero.cta": "$5 - Comprar Individualmente",
"maps.hero.freeNote": "✨ Incluido GRATIS con el ebook Travel Readz",
"maps.badge1": "📍 Lugares Imperdibles",
"maps.badge2": "🗺️ Mapas Interactivos",
"maps.badge3": "💎 Joyas Ocultas",
"maps.features.title": "Lo Que Obtendrás",
"maps.features.subtitle": "Este regalo incluye todo lo que necesitas para navegar Marrakech como un local: mapas detallados, joyas ocultas, consejos prácticos y recomendaciones seleccionadas. Perfecto para visitantes primerizos o viajeros que regresan.",
"maps.features.card1.desc": "Información de viaje seleccionada diseñada para ahorrarte tiempo y mejorar tu experiencia.",
"maps.features.card2.desc": "Recomendaciones locales y joyas ocultas que no encontrarás fácilmente en línea.",
"maps.features.card3.desc": "Guía de Google Maps fácil de usar con cada atracción perfectamente marcada.",
"maps.features.card4.desc": "Consejos expertos para alojamiento, gastronomía auténtica y lugares secretos locales.",
"maps.reviews.title": "Lo Que Dicen los Viajeros",
"maps.reviews.review1.text": "\"Solo esta guía vale el precio del ebook. Los mapas eran increíblemente detallados y nos ayudaron a descubrir lugares que nunca habríamos encontrado por nuestra cuenta. ¡Extremadamente útil!\"",
"maps.reviews.review2.text": "\"Claro, práctico y hermosamente organizado. La integración con Google Maps hizo la navegación muy fácil. Visitamos cada lugar que recomendaron y nos encantaron todos. Altamente recomendado.\"",
"maps.reviews.review3.text": "\"Me ahorró horas de planificación y me ayudó a evitar trampas turísticas. Las recomendaciones locales fueron perfectas. ¡El mejor recurso de viaje que he usado para Marruecos!\"",
"maps.bonus.badge": "Bonos Gratuitos",
"maps.bonus.title": "Otros Regalos Gratuitos Incluidos",
"maps.bonus.subtitle": "Valor de $24.99 — Tuyo gratis cuando obtienes la guía hoy",
"maps.cta.title": "¿Listo para Desbloquear Todos Estos Regalos?",
"maps.cta.button": "Obtener el Ebook Travel Readz",

// shop page

shop: {
  hero: {
    title: "Explora Nuestra Colección",
    subtitle: "Todo lo que necesitas para una aventura inolvidable en Marruecos"
  },
  filter: {
    all: "Todos los Productos",
    guides: "Guías de Viaje",
    services: "Servicios de Viaje",
    templates: "Plantillas"
  },
  search: {
    placeholder: "Buscar productos..."
  },
  section: {
    guides: "Guías de Viaje",
    services: "Servicios Esenciales",
    templates: "Plantillas Creativas"
  },
  badge: {
    bestseller: "Más Vendido",
    new: "Nuevo",
    sale: "Oferta",
    recommended: "Recomendado",
    popular: "Popular",
    topRated: "Mejor Valorados",
    trending: "Tendencia",
    free: "Gratis",
    hot: "Hot 🔥"
  },
  quickView: "Ver",
  buyNow: "Comprar",
  banner: {
    title: "🎁 Oferta de Paquete por Tiempo Limitado",
    desc: "Obtén la colección completa de Marruecos - Ahorra 40%",
    button: "Ver Oferta"
  },
  reviews: "reseñas",
  checkAvailability: "Ver disponibilidad →"
}

  }
};

// Book cover URLs for each language
const bookCovers = {
  en: "https://res.cloudinary.com/dzidoxclo/image/upload/v1770821065/Untitled_design_16_tf00rx.png",
  fr: "https://res.cloudinary.com/dzidoxclo/image/upload/v1770821062/Untitled_design_14_j5lrij.png",
  es: "https://res.cloudinary.com/dzidoxclo/image/upload/v1770821056/Untitled_design_15_irckzm.png"
};

// Buy button URL (same for all languages for now)
const buyUrls = {
  en: "https://travelreadz.gumroad.com/l/ubqlaj?wanted=true",
  fr: "https://travelreadz.gumroad.com/l/ubqlaj?wanted=true",
  es: "https://travelreadz.gumroad.com/l/ubqlaj?wanted=true"
};

// Current language
let currentLanguage = localStorage.getItem('travelReadzLang') || 'en';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
  setupLanguageSwitcher();
  setupBookSelector();
});

// Initialize language from localStorage or default
function initializeLanguage() {
  setLanguage(currentLanguage);
}

// Set up language switcher buttons
function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

// Set up book thumbnail selector
function setupBookSelector() {
  const bookThumbs = document.querySelectorAll('.book-thumb');
  
  bookThumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

// Main function to change language
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('travelReadzLang', lang);
  
  // Update active states
  updateActiveStates(lang);
  
  // Add fade transition
  const elementsToFade = document.querySelectorAll('[data-translate]');
  elementsToFade.forEach(el => el.classList.add('fade-transition'));
  
  // Update content after brief delay for fade effect
  setTimeout(() => {
    updateContent(lang);
    updateBookCover(lang);
    updateBuyLinks(lang);
    
    // Remove fade class and add active
    elementsToFade.forEach(el => {
      el.classList.remove('fade-transition');
      el.classList.add('active');
    });
  }, 150);
}

// Update all translated content
function updateContent(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[lang][key];
    
    if (translation) {
      // Check if element contains HTML (like <strong> tags)
      if (translation.includes('<')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

// Update book cover image with smooth transition
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

// Update buy button links
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

// Update active visual states
function updateActiveStates(lang) {
  // Update language buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Update book thumbnails
  const bookThumbs = document.querySelectorAll('.book-thumb');
  bookThumbs.forEach(thumb => {
    if (thumb.getAttribute('data-lang') === lang) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}
