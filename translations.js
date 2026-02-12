// ===================================
// MULTI-LANGUAGE SYSTEM
// ===================================

// Translation object with all content
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
    
    // Shop Page
    "shop.hero.title": "Explore Our Collection",
    "shop.hero.subtitle": "Everything you need for an unforgettable Moroccan adventure",
    "shop.filter.all": "All Products",
    "shop.filter.guides": "Travel Guides",
    "shop.filter.services": "Travel Services",
    "shop.filter.templates": "Templates",
    "shop.search.placeholder": "Search products...",
    "shop.section.guides": "Travel Guides",
    "shop.section.services": "Essential Travel Services",
    "shop.section.templates": "Creative Templates",
    "shop.quickView": "Quick View",
    "shop.buyNow": "Buy Now",
    "shop.reviews": "reviews",
    "shop.checkAvailability": "Check availability →",
    
    // Badges
    "shop.badge.bestseller": "Bestseller",
    "shop.badge.new": "New",
    "shop.badge.sale": "20% Off",
    "shop.badge.trending": "Trending",
    "shop.badge.hot": "Hot 🔥",
    "shop.badge.free": "100% Off",
    "shop.badge.recommended": "Recommended",
    "shop.badge.popular": "Popular",
    "shop.badge.topRated": "Top Rated",
    
    // Products
    "shop.product1.category": "Travel Guide",
    "shop.product1.title": "Unlocking Morocco: Ultimate 2026 Guide",
    "shop.product1.desc": "Complete guide with 8 chapters, insider tips, itineraries, and bonus content.",
    "shop.product2.category": "Travel etiquette",
    "shop.product2.title": "Morocco Travel etiquette Dos and Don'ts every traveler should know",
    "shop.product2.desc": "Essential dos and don'ts, cultural etiquette, clothing rules, and local customs — all explained clearly to help you travel Morocco respectfully.",
    "shop.product3.category": "budget calculator",
    "shop.product3.title": "Travel budget calculator",
    "shop.product3.desc": "Set your budget, record spending over time, and see how it compares — a universal tool for travelers in any country.",
    "shop.product4.category": "Google Map Guide",
    "shop.product4.title": "Marrakech Google Maps Travel Guide",
    "shop.product4.desc": "Hand-picked attractions, hidden gems, riads, restaurants, and local tips — all saved directly to Google Maps for your Marrakech adventure.",
    
    // Banner
    "shop.banner.title": "🎁 Limited Time Bundle Offer",
    "shop.banner.desc": "Get the complete Morocco travel collection - Save 40% when you bundle!",
    "shop.banner.button": "View Bundle Deal",
    
    // Insurance
    "shop.insurance.category": "Travel Insurance",
    "shop.insurance.title": "SafetyWing Travel Insurance",
    "shop.insurance.desc": "Affordable travel medical insurance for nomads and travelers. Coverage in 180+ countries with flexible monthly plans starting at $45.08/month.",
    "shop.insurance.feature1": "🌍 180+ countries",
    "shop.insurance.feature2": "💰 From $45/mo",
    "shop.insurance.feature3": "📱 Instant coverage",
    "shop.insurance.trust": "Trusted by thousands of travelers worldwide",
    "shop.insurance.cta": "Get Protected →",
    
    // Tours
    "shop.tour1.location": "📍 Marrakech → Merzouga",
    "shop.tour1.title": "3-Day Desert Adventure: Marrakech to Merzouga",
    "shop.tour1.desc": "Experience the magic of the Sahara with camel rides, desert camping under the stars, and traditional Berber hospitality. Journey through stunning landscapes and create unforgettable memories.",
    "shop.tour1.feature1": "⏱️ 3 days",
    "shop.tour1.feature2": "🚗 Pickup included",
    "shop.tour1.feature3": "🍽️ Meals included",
    
    "shop.tour2.location": "📍 Multiple Cities",
    "shop.tour2.title": "Imperial Cities & Chefchaouen: 3-Day Cultural Tour",
    "shop.tour2.desc": "Explore Morocco's historical treasures and the stunning Blue Pearl city. Discover ancient medinas, magnificent architecture, and rich cultural heritage in this comprehensive journey.",
    "shop.tour2.feature1": "⏱️ 3 days",
    "shop.tour2.feature2": "🏛️ UNESCO sites",
    "shop.tour2.feature3": "👥 Small groups",
    
    "shop.tour3.location": "📍 Casablanca",
    "shop.tour3.title": "Hassan II Mosque: Premium Guided Tour",
    "shop.tour3.desc": "Discover one of the world's largest mosques with premium guided access. Marvel at exquisite Moroccan craftsmanship, intricate mosaics, and the stunning oceanfront location.",
    "shop.tour3.feature1": "⏱️ 2 hours",
    "shop.tour3.feature2": "🎫 Skip-the-line",
    "shop.tour3.feature3": "🎧 Audio guide",
    
    "shop.tour4.location": "📍 Marrakech",
    "shop.tour4.title": "Hot Air Balloon Flight & Berber Breakfast",
    "shop.tour4.desc": "Soar above the Atlas Mountains at sunrise and enjoy an authentic Berber breakfast. An unforgettable morning adventure with breathtaking views and traditional hospitality.",
    "shop.tour4.feature1": "⏱️ 4 hours",
    "shop.tour4.feature2": "🌅 Sunrise flight",
    "shop.tour4.feature3": "☕ Breakfast",
    
    "shop.tour5.location": "📍 Atlas Mountains",
    "shop.tour5.title": "Ourika Waterfalls & Atlas Mountains Day Trip",
    "shop.tour5.desc": "Escape to the refreshing Ourika Valley with scenic mountain views, waterfall hikes, and included lunch. Experience authentic mountain life in stunning natural beauty.",
    "shop.tour5.feature1": "⏱️ Full day",
    "shop.tour5.feature2": "🥾 Hiking",
    "shop.tour5.feature3": "🍽️ Lunch included",
    
    "shop.tour6.location": "📍 Agafay Desert",
    "shop.tour6.title": "Agafay Desert: Quad, Camel Ride & Dinner Show",
    "shop.tour6.desc": "Combine adventure with culture through quad biking, camel rides, and a spectacular dinner show under the stars. A perfect evening of excitement and entertainment.",
    "shop.tour6.feature1": "⏱️ Evening",
    "shop.tour6.feature2": "🏍️ Quad biking",
    "shop.tour6.feature3": "🎭 Live show",
    
    "shop.tour7.location": "📍 Marrakech",
    "shop.tour7.title": "Majorelle Garden & YSL Museum Entry Ticket",
    "shop.tour7.desc": "Visit the iconic cobalt blue garden and explore the legacy of Yves Saint Laurent. Discover exotic plants, vibrant colors, and fashion history in Marrakech's most beautiful garden.",
    "shop.tour7.feature1": "⏱️ 2-3 hours",
    "shop.tour7.feature2": "🎫 Entry tickets",
    "shop.tour7.feature3": "📸 Photo spots",
    
    // Templates
    "shop.template1.category": "Photo Editing",
    "shop.template1.title": "Moody Travel Lightroom Presets",
    "shop.template1.desc": "Transform your photos with a cinematic, warm, and professional travel look in just one click. These Moody Travel Lightroom Presets are designed to enhance colors, add depth, and create a consistent aesthetic perfect for travel, lifestyle, and Instagram photography.",
    
    "shop.template2.category": "Social Media",
    "shop.template2.title": "Instagram Story Templates for Travel Brands & Creators",
    "shop.template2.desc": "High-end Travel Instagram Stories designed for creators and brands who want a premium, elegant, and professional Instagram presence.",
    
    "shop.template3.category": "Video Editing",
    "shop.template3.title": "730+ Viral Instagram Reels – Ready to Post & Grow Fast",
    "shop.template3.desc": "Boost your Instagram presence with 730+ high-quality, viral-style Instagram Reels designed to help you grow faster, increase engagement, and save hours of content creation.",
    
    "shop.template4.category": "Canva Templates",
    "shop.template4.title": "🎨 3000+ Instagram Design Templates – Create Stunning Content Fast",
    "shop.template4.desc": "3000+ professionally designed Instagram templates to help you create eye-catching posts, stories, and reels in minutes. Fully customizable, easy to use, and perfect for consistent, high-quality content without design skills. Grow faster and save time with ready-to-use designs.",
    
    "shop.template5.category": "Watercolor",
    "shop.template5.title": "Watercolor Travel the World Clipart",
    "shop.template5.desc": "Bring your travel designs to life with beautiful watercolor clipart! This pack includes high-quality illustrations of landmarks, maps, and travel icons—perfect for invitations, planners, social media, and creative projects.",
    
    "shop.template6.category": "Hand-Drawn Illustrations",
    "shop.template6.title": "Travel Clipart – Hand-Drawn Illustrations for Creative Projects",
    "shop.template6.desc": "Bring your travel designs to life with hand-drawn, charming illustrations! Perfect for bloggers, designers, and content creators who want unique, artistic, and ready-to-use graphics for print or digital projects."
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
    
    // Shop Page
    "shop.hero.title": "Explorez Notre Collection",
    "shop.hero.subtitle": "Tout ce dont vous avez besoin pour une aventure marocaine inoubliable",
    "shop.filter.all": "Tous les Produits",
    "shop.filter.guides": "Guides de Voyage",
    "shop.filter.services": "Services de Voyage",
    "shop.filter.templates": "Modèles",
    "shop.search.placeholder": "Rechercher des produits...",
    "shop.section.guides": "Guides de Voyage",
    "shop.section.services": "Services de Voyage Essentiels",
    "shop.section.templates": "Modèles Créatifs",
    "shop.quickView": "Aperçu Rapide",
    "shop.buyNow": "Acheter Maintenant",
    "shop.reviews": "avis",
    "shop.checkAvailability": "Vérifier la disponibilité →",
    
    // Badges
    "shop.badge.bestseller": "Meilleure Vente",
    "shop.badge.new": "Nouveau",
    "shop.badge.sale": "20% de Réduction",
    "shop.badge.trending": "Tendance",
    "shop.badge.hot": "Populaire 🔥",
    "shop.badge.free": "100% Gratuit",
    "shop.badge.recommended": "Recommandé",
    "shop.badge.popular": "Populaire",
    "shop.badge.topRated": "Très Bien Noté",
    
    // Products
    "shop.product1.category": "Guide de Voyage",
    "shop.product1.title": "Découvrir le Maroc : Guide Ultime 2026",
    "shop.product1.desc": "Guide complet avec 8 chapitres, conseils d'initiés, itinéraires et contenu bonus.",
    "shop.product2.category": "Étiquette de voyage",
    "shop.product2.title": "Étiquette de Voyage au Maroc : À Faire et À Ne Pas Faire",
    "shop.product2.desc": "Les choses essentielles à faire et à ne pas faire, l'étiquette culturelle, les règles vestimentaires et les coutumes locales — tout expliqué clairement pour vous aider à voyager au Maroc avec respect.",
    "shop.product3.category": "calculateur de budget",
    "shop.product3.title": "Calculateur de Budget de Voyage",
    "shop.product3.desc": "Définissez votre budget, enregistrez vos dépenses au fil du temps et voyez comment cela se compare — un outil universel pour les voyageurs dans n'importe quel pays.",
    "shop.product4.category": "Guide Google Maps",
    "shop.product4.title": "Guide de Voyage Google Maps Marrakech",
    "shop.product4.desc": "Attractions sélectionnées, joyaux cachés, riads, restaurants et conseils locaux — tous enregistrés directement sur Google Maps pour votre aventure à Marrakech.",
    
    // Banner
    "shop.banner.title": "🎁 Offre Groupée à Durée Limitée",
    "shop.banner.desc": "Obtenez la collection complète de voyage au Maroc - Économisez 40% avec le bundle!",
    "shop.banner.button": "Voir l'Offre Groupée",
    
    // Insurance
    "shop.insurance.category": "Assurance Voyage",
    "shop.insurance.title": "Assurance Voyage SafetyWing",
    "shop.insurance.desc": "Assurance médicale de voyage abordable pour les nomades et les voyageurs. Couverture dans plus de 180 pays avec des plans mensuels flexibles à partir de 45,08 $/mois.",
    "shop.insurance.feature1": "🌍 180+ pays",
    "shop.insurance.feature2": "💰 À partir de 45$/mois",
    "shop.insurance.feature3": "📱 Couverture instantanée",
    "shop.insurance.trust": "Approuvé par des milliers de voyageurs dans le monde",
    "shop.insurance.cta": "Se Protéger →",
    
    // Tours
    "shop.tour1.location": "📍 Marrakech → Merzouga",
    "shop.tour1.title": "Aventure Désert 3 Jours : Marrakech à Merzouga",
    "shop.tour1.desc": "Vivez la magie du Sahara avec des promenades à dos de chameau, du camping dans le désert sous les étoiles et l'hospitalité berbère traditionnelle. Voyagez à travers des paysages époustouflants et créez des souvenirs inoubliables.",
    "shop.tour1.feature1": "⏱️ 3 jours",
    "shop.tour1.feature2": "🚗 Prise en charge incluse",
    "shop.tour1.feature3": "🍽️ Repas inclus",
    
    "shop.tour2.location": "📍 Plusieurs Villes",
    "shop.tour2.title": "Villes Impériales & Chefchaouen : Tour Culturel de 3 Jours",
    "shop.tour2.desc": "Explorez les trésors historiques du Maroc et la magnifique ville de la Perle Bleue. Découvrez les médinas anciennes, l'architecture magnifique et le riche patrimoine culturel lors de ce voyage complet.",
    "shop.tour2.feature1": "⏱️ 3 jours",
    "shop.tour2.feature2": "🏛️ Sites UNESCO",
    "shop.tour2.feature3": "👥 Petits groupes",
    
    "shop.tour3.location": "📍 Casablanca",
    "shop.tour3.title": "Mosquée Hassan II : Visite Guidée Premium",
    "shop.tour3.desc": "Découvrez l'une des plus grandes mosquées du monde avec un accès guidé premium. Admirez l'artisanat marocain exquis, les mosaïques complexes et l'emplacement magnifique en bord de mer.",
    "shop.tour3.feature1": "⏱️ 2 heures",
    "shop.tour3.feature2": "🎫 Coupe-file",
    "shop.tour3.feature3": "🎧 Audio-guide",
    
    "shop.tour4.location": "📍 Marrakech",
    "shop.tour4.title": "Vol en Montgolfière & Petit-Déjeuner Berbère",
    "shop.tour4.desc": "Survolez les montagnes de l'Atlas au lever du soleil et savourez un authentique petit-déjeuner berbère. Une aventure matinale inoubliable avec des vues à couper le souffle et une hospitalité traditionnelle.",
    "shop.tour4.feature1": "⏱️ 4 heures",
    "shop.tour4.feature2": "🌅 Vol au lever du soleil",
    "shop.tour4.feature3": "☕ Petit-déjeuner",
    
    "shop.tour5.location": "📍 Montagnes de l'Atlas",
    "shop.tour5.title": "Cascades d'Ourika & Excursion d'une Journée dans l'Atlas",
    "shop.tour5.desc": "Échappez-vous dans la rafraîchissante vallée d'Ourika avec des vues panoramiques sur les montagnes, des randonnées aux cascades et un déjeuner inclus. Vivez une vie de montagne authentique dans une beauté naturelle époustouflante.",
    "shop.tour5.feature1": "⏱️ Journée complète",
    "shop.tour5.feature2": "🥾 Randonnée",
    "shop.tour5.feature3": "🍽️ Déjeuner inclus",
    
    "shop.tour6.location": "📍 Désert d'Agafay",
    "shop.tour6.title": "Désert d'Agafay : Quad, Balade à Chameau & Spectacle Dîner",
    "shop.tour6.desc": "Combinez aventure et culture à travers le quad, les balades à chameau et un spectaculaire dîner-spectacle sous les étoiles. Une soirée parfaite d'excitation et de divertissement.",
    "shop.tour6.feature1": "⏱️ Soirée",
    "shop.tour6.feature2": "🏍️ Quad",
    "shop.tour6.feature3": "🎭 Spectacle en direct",
    
    "shop.tour7.location": "📍 Marrakech",
    "shop.tour7.title": "Jardin Majorelle & Billet d'Entrée Musée YSL",
    "shop.tour7.desc": "Visitez l'emblématique jardin bleu cobalt et explorez l'héritage d'Yves Saint Laurent. Découvrez des plantes exotiques, des couleurs vibrantes et l'histoire de la mode dans le plus beau jardin de Marrakech.",
    "shop.tour7.feature1": "⏱️ 2-3 heures",
    "shop.tour7.feature2": "🎫 Billets d'entrée",
    "shop.tour7.feature3": "📸 Points photo",
    
    // Templates
    "shop.template1.category": "Retouche Photo",
    "shop.template1.title": "Presets Lightroom de Voyage Moody",
    "shop.template1.desc": "Transformez vos photos avec un look de voyage cinématographique, chaleureux et professionnel en un seul clic. Ces Presets Lightroom de Voyage Moody sont conçus pour améliorer les couleurs, ajouter de la profondeur et créer une esthétique cohérente parfaite pour les voyages, le lifestyle et la photographie Instagram.",
    
    "shop.template2.category": "Réseaux Sociaux",
    "shop.template2.title": "Modèles Instagram Story pour Marques & Créateurs de Voyage",
    "shop.template2.desc": "Instagram Stories de voyage haut de gamme conçues pour les créateurs et les marques qui souhaitent une présence Instagram premium, élégante et professionnelle.",
    
    "shop.template3.category": "Montage Vidéo",
    "shop.template3.title": "730+ Reels Instagram Viraux – Prêts à Publier",
    "shop.template3.desc": "Boostez votre présence Instagram avec plus de 730 Reels Instagram de haute qualité de style viral conçus pour vous aider à grandir plus rapidement, augmenter l'engagement et économiser des heures de création de contenu.",
    
    "shop.template4.category": "Modèles Canva",
    "shop.template4.title": "🎨 3000+ Modèles de Design Instagram – Créez du Contenu Rapidement",
    "shop.template4.desc": "Plus de 3000 modèles Instagram conçus professionnellement pour vous aider à créer des publications, stories et reels accrocheurs en quelques minutes. Entièrement personnalisables, faciles à utiliser et parfaits pour un contenu cohérent et de haute qualité sans compétences en design. Grandissez plus vite et gagnez du temps avec des designs prêts à l'emploi.",
    
    "shop.template5.category": "Aquarelle",
    "shop.template5.title": "Clipart Aquarelle Voyage Autour du Monde",
    "shop.template5.desc": "Donnez vie à vos designs de voyage avec de magnifiques cliparts aquarelle! Ce pack comprend des illustrations de haute qualité de monuments, de cartes et d'icônes de voyage — parfaites pour les invitations, les planners, les réseaux sociaux et les projets créatifs.",
    
    "shop.template6.category": "Illustrations Dessinées à la Main",
    "shop.template6.title": "Clipart de Voyage – Illustrations Dessinées à la Main",
    "shop.template6.desc": "Donnez vie à vos designs de voyage avec des illustrations dessinées à la main et charmantes! Parfait pour les blogueurs, designers et créateurs de contenu qui veulent des graphiques uniques, artistiques et prêts à l'emploi pour des projets imprimés ou numériques."
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
    
    // Shop Page
    "shop.hero.title": "Explora Nuestra Colección",
    "shop.hero.subtitle": "Todo lo que necesitas para una aventura marroquí inolvidable",
    "shop.filter.all": "Todos los Productos",
    "shop.filter.guides": "Guías de Viaje",
    "shop.filter.services": "Servicios de Viaje",
    "shop.filter.templates": "Plantillas",
    "shop.search.placeholder": "Buscar productos...",
    "shop.section.guides": "Guías de Viaje",
    "shop.section.services": "Servicios de Viaje Esenciales",
    "shop.section.templates": "Plantillas Creativas",
    "shop.quickView": "Vista Rápida",
    "shop.buyNow": "Comprar Ahora",
    "shop.reviews": "reseñas",
    "shop.checkAvailability": "Verificar disponibilidad →",
    
    // Badges
    "shop.badge.bestseller": "Más Vendido",
    "shop.badge.new": "Nuevo",
    "shop.badge.sale": "20% Descuento",
    "shop.badge.trending": "Tendencia",
    "shop.badge.hot": "Popular 🔥",
    "shop.badge.free": "100% Gratis",
    "shop.badge.recommended": "Recomendado",
    "shop.badge.popular": "Popular",
    "shop.badge.topRated": "Mejor Calificado",
    
    // Products
    "shop.product1.category": "Guía de Viaje",
    "shop.product1.title": "Descubriendo Marruecos: Guía Definitiva 2026",
    "shop.product1.desc": "Guía completa con 8 capítulos, consejos internos, itinerarios y contenido adicional.",
    "shop.product2.category": "Etiqueta de viaje",
    "shop.product2.title": "Etiqueta de Viaje en Marruecos: Lo Que Se Debe y No Hacer",
    "shop.product2.desc": "Cosas esenciales que hacer y no hacer, etiqueta cultural, reglas de vestimenta y costumbres locales — todo explicado claramente para ayudarte a viajar por Marruecos respetuosamente.",
    "shop.product3.category": "calculadora de presupuesto",
    "shop.product3.title": "Calculadora de Presupuesto de Viaje",
    "shop.product3.desc": "Establece tu presupuesto, registra los gastos a lo largo del tiempo y ve cómo se compara — una herramienta universal para viajeros en cualquier país.",
    "shop.product4.category": "Guía Google Maps",
    "shop.product4.title": "Guía de Viaje Google Maps de Marrakech",
    "shop.product4.desc": "Atracciones seleccionadas, joyas ocultas, riads, restaurantes y consejos locales — todo guardado directamente en Google Maps para tu aventura en Marrakech.",
    
    // Banner
    "shop.banner.title": "🎁 Oferta de Paquete por Tiempo Limitado",
    "shop.banner.desc": "Obtén la colección completa de viaje a Marruecos - ¡Ahorra 40% con el paquete!",
    "shop.banner.button": "Ver Oferta de Paquete",
    
    // Insurance
    "shop.insurance.category": "Seguro de Viaje",
    "shop.insurance.title": "Seguro de Viaje SafetyWing",
    "shop.insurance.desc": "Seguro médico de viaje asequible para nómadas y viajeros. Cobertura en más de 180 países con planes mensuales flexibles desde $45.08/mes.",
    "shop.insurance.feature1": "🌍 180+ países",
    "shop.insurance.feature2": "💰 Desde $45/mes",
    "shop.insurance.feature3": "📱 Cobertura instantánea",
    "shop.insurance.trust": "Confiado por miles de viajeros en todo el mundo",
    "shop.insurance.cta": "Protégete →",
    
    // Tours
    "shop.tour1.location": "📍 Marrakech → Merzouga",
    "shop.tour1.title": "Aventura en el Desierto de 3 Días: Marrakech a Merzouga",
    "shop.tour1.desc": "Experimenta la magia del Sahara con paseos en camello, campamento en el desierto bajo las estrellas y hospitalidad bereber tradicional. Viaja a través de paisajes impresionantes y crea recuerdos inolvidables.",
    "shop.tour1.feature1": "⏱️ 3 días",
    "shop.tour1.feature2": "🚗 Recogida incluida",
    "shop.tour1.feature3": "🍽️ Comidas incluidas",
    
    "shop.tour2.location": "📍 Varias Ciudades",
    "shop.tour2.title": "Ciudades Imperiales y Chefchaouen: Tour Cultural de 3 Días",
    "shop.tour2.desc": "Explora los tesoros históricos de Marruecos y la impresionante ciudad de la Perla Azul. Descubre medinas antiguas, arquitectura magnífica y rico patrimonio cultural en este viaje integral.",
    "shop.tour2.feature1": "⏱️ 3 días",
    "shop.tour2.feature2": "🏛️ Sitios UNESCO",
    "shop.tour2.feature3": "👥 Grupos pequeños",
    
    "shop.tour3.location": "📍 Casablanca",
    "shop.tour3.title": "Mezquita Hassan II: Tour Guiado Premium",
    "shop.tour3.desc": "Descubre una de las mezquitas más grandes del mundo con acceso guiado premium. Maravíllate con la exquisita artesanía marroquí, intrincados mosaicos y la impresionante ubicación frente al mar.",
    "shop.tour3.feature1": "⏱️ 2 horas",
    "shop.tour3.feature2": "🎫 Sin colas",
    "shop.tour3.feature3": "🎧 Audio-guía",
    
    "shop.tour4.location": "📍 Marrakech",
    "shop.tour4.title": "Vuelo en Globo Aerostático y Desayuno Bereber",
    "shop.tour4.desc": "Vuela sobre las montañas del Atlas al amanecer y disfruta de un auténtico desayuno bereber. Una aventura matutina inolvidable con vistas impresionantes y hospitalidad tradicional.",
    "shop.tour4.feature1": "⏱️ 4 horas",
    "shop.tour4.feature2": "🌅 Vuelo al amanecer",
    "shop.tour4.feature3": "☕ Desayuno",
    
    "shop.tour5.location": "📍 Montañas del Atlas",
    "shop.tour5.title": "Cascadas de Ourika y Excursión de un Día al Atlas",
    "shop.tour5.desc": "Escapa al refrescante Valle de Ourika con vistas panorámicas de montañas, caminatas a cascadas y almuerzo incluido. Experimenta la auténtica vida de montaña en una belleza natural impresionante.",
    "shop.tour5.feature1": "⏱️ Día completo",
    "shop.tour5.feature2": "🥾 Senderismo",
    "shop.tour5.feature3": "🍽️ Almuerzo incluido",
    
    "shop.tour6.location": "📍 Desierto de Agafay",
    "shop.tour6.title": "Desierto de Agafay: Quad, Paseo en Camello y Cena Espectáculo",
    "shop.tour6.desc": "Combina aventura con cultura a través de quads, paseos en camello y un espectacular espectáculo de cena bajo las estrellas. Una noche perfecta de emoción y entretenimiento.",
    "shop.tour6.feature1": "⏱️ Noche",
    "shop.tour6.feature2": "🏍️ Quad",
    "shop.tour6.feature3": "🎭 Espectáculo en vivo",
    
    "shop.tour7.location": "📍 Marrakech",
    "shop.tour7.title": "Jardín Majorelle y Entrada al Museo YSL",
    "shop.tour7.desc": "Visita el icónico jardín azul cobalto y explora el legado de Yves Saint Laurent. Descubre plantas exóticas, colores vibrantes e historia de la moda en el jardín más hermoso de Marrakech.",
    "shop.tour7.feature1": "⏱️ 2-3 horas",
    "shop.tour7.feature2": "🎫 Entradas",
    "shop.tour7.feature3": "📸 Lugares para fotos",
    
    // Templates
    "shop.template1.category": "Edición de Fotos",
    "shop.template1.title": "Presets de Lightroom para Viajes Moody",
    "shop.template1.desc": "Transforma tus fotos con un aspecto de viaje cinematográfico, cálido y profesional en un solo clic. Estos Presets de Lightroom para Viajes Moody están diseñados para mejorar colores, agregar profundidad y crear una estética consistente perfecta para viajes, estilo de vida y fotografía de Instagram.",
    
    "shop.template2.category": "Redes Sociales",
    "shop.template2.title": "Plantillas de Instagram Stories para Marcas y Creadores de Viajes",
    "shop.template2.desc": "Instagram Stories de viajes de alta gama diseñadas para creadores y marcas que desean una presencia premium, elegante y profesional en Instagram.",
    
    "shop.template3.category": "Edición de Video",
    "shop.template3.title": "730+ Reels de Instagram Virales – Listos para Publicar",
    "shop.template3.desc": "Impulsa tu presencia en Instagram con más de 730 Reels de Instagram de alta calidad de estilo viral diseñados para ayudarte a crecer más rápido, aumentar el engagement y ahorrar horas de creación de contenido.",
    
    "shop.template4.category": "Plantillas Canva",
    "shop.template4.title": "🎨 3000+ Plantillas de Diseño de Instagram – Crea Contenido Rápido",
    "shop.template4.desc": "Más de 3000 plantillas de Instagram diseñadas profesionalmente para ayudarte a crear publicaciones, stories y reels llamativos en minutos. Totalmente personalizables, fáciles de usar y perfectas para contenido consistente y de alta calidad sin habilidades de diseño. Crece más rápido y ahorra tiempo con diseños listos para usar.",
    
    "shop.template5.category": "Acuarela",
    "shop.template5.title": "Clipart de Acuarela Viajar por el Mundo",
    "shop.template5.desc": "¡Dale vida a tus diseños de viaje con hermosos cliparts de acuarela! Este paquete incluye ilustraciones de alta calidad de monumentos, mapas e íconos de viaje — perfectas para invitaciones, planificadores, redes sociales y proyectos creativos.",
    
    "shop.template6.category": "Ilustraciones Dibujadas a Mano",
    "shop.template6.title": "Clipart de Viajes – Ilustraciones Dibujadas a Mano",
    "shop.template6.desc": "¡Dale vida a tus diseños de viaje con ilustraciones dibujadas a mano y encantadoras! Perfecto para bloggers, diseñadores y creadores de contenido que desean gráficos únicos, artísticos y listos para usar para proyectos impresos o digitales."
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
