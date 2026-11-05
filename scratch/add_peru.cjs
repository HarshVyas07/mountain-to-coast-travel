const fs = require('fs');
const path = require('path');

const destFile = path.resolve('src/data/destinations.ts');
let content = fs.readFileSync(destFile, 'utf8');

const peruObject = `  {
    slug: 'peru',
    country: 'Peru',
    title: 'Peru: Sacred Valley, Machu Picchu & Ancient Andean Highlands',
    tagline: 'Inca citadels of Machu Picchu, colonial plazas of Cusco, emerald terraces of the Sacred Valley & Lake Titicaca waters.',
    badge: 'Custom Groups 5+',
    departures: ['Date Not Planned'],
    duration: '10 Days / 9 Nights',
    daysCount: 10,
    nightsCount: 9,
    price: 'Custom Inquire',
    heroImage: '/assets/webimg/31.jpg',
    galleryImages: [
      {
        url: '/assets/webimg/32.jpg',
        caption: 'The ancient stone citadel of Machu Picchu shrouded in mystical Andean morning clouds',
        location: 'Machu Picchu Historic Sanctuary',
      },
      {
        url: '/assets/webimg/33.jpg',
        caption: 'Traditional Quechua weaving artisans and agricultural terraces of the Sacred Valley',
        location: 'Sacred Valley of the Incas (Urubamba)',
      },
      {
        url: '/assets/webimg/28.jpg',
        caption: 'Colonial Spanish cathedrals built upon monumental imperial Inca stone foundations',
        location: 'Cusco Imperial Plaza & Coricancha',
      },
      {
        url: '/assets/webimg/29.jpg',
        caption: 'Snowcapped Andean peaks and turquoise glacial lakes across high-altitude cordilleras',
        location: 'Ausangate Range & High Andean Passes',
      },
    ],
    overview: [
      'Peru is the crown jewel of South America, where colossal Andean peaks kiss azure skies and thousands of years of living indigenous civilizations endure. From the Pacific culinary capital of Lima to the imperial Inca capital of Cusco and the legendary lost citadel of Machu Picchu, this journey connects dramatic mountain highlands with rich coastal heritage.',
      'Guided personally by Michael and Maria alongside veteran local Quechua guides, our Peru expedition avoids oversized tourist groups. We travel at a mindful pace, allowing for gentle acclimatization in the Sacred Valley, authentic community homestays and weaving workshops, and awe-inspiring sunrise moments above the clouds.',
    ],
    highlights: [
      'Private guided exploration of the enigmatic Inca citadel of Machu Picchu at sunrise',
      'Scenic luxury Vistadome train journey through the roaring Urubamba River gorge',
      'Gentle high-altitude acclimatization in the lush, temperate Sacred Valley of the Incas',
      'Explore Cusco\\'s historic cobblestone quarter, San Pedro market, and massive Sacsayhuamán fortress',
      'Hands-on traditional Quechua textile weaving and natural botanical dyeing workshop in Chinchero',
      'Taste world-renowned Peruvian Andean and coastal gastronomy, from ceviche to alpaca steaks and quinoa bowls',
      'Visit the enigmatic circular agricultural amphitheaters of Moray and ancient Maras salt terraces',
    ],
    inclusions: [
      '9 nights in hand-picked Andean boutique heritage hotels and luxury Sacred Valley eco-casitas',
      'Scenic Vistadome train tickets between Ollantaytambo and Machu Picchu (roundtrip)',
      'Official Machu Picchu entrance permits, bus transfers, and licensed private Quechua historian guide',
      'All private ground transit in dedicated comfortable executive sprinter vans',
      'Daily artisan breakfasts, 4 gourmet local lunches, and 4 curated regional dinners',
      'Domestic flight coordination support between Lima (LIM) and Cusco (CUZ)',
      '24/7 direct personal leadership and guidance by Michael & Maria throughout',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Lima & Pacific Coastal Gastronomy',
        location: 'Lima (LIM) → Miraflores',
        description: 'Arrive at Jorge Chávez International Airport in Lima where Michael and Maria warmly greet you. Transfer to our boutique oceanfront hotel in the historic Miraflores district. Savor a welcome dinner featuring Peru\\'s world-famous coastal ceviche overlooking the Pacific cliffs.',
        meals: 'Dinner included',
        stay: 'Hotel B or Casa Andina Premium Miraflores',
        highlights: ['Warm airport welcome', 'Miraflores coastal promenade', 'World-class Peruvian welcome dinner'],
      },
      {
        day: 2,
        title: 'Flight to Cusco & Gentle Sacred Valley Acclimatization',
        location: 'Lima → Cusco (CUZ) → Sacred Valley (Urubamba)',
        description: 'Board a scenic morning flight over the snow-capped Andes to Cusco (3,400m). To ensure comfortable acclimatization, we immediately descend into the fertile, sheltered Sacred Valley of the Incas (2,870m). Check into tranquil garden casitas surrounded by towering eucalyptus and mountain cliffs.',
        meals: 'Breakfast & Dinner',
        stay: 'Tambo del Inka or Sol y Luna Sacred Valley',
        highlights: ['Trans-Andean mountain flight', 'Descent to lower-altitude Sacred Valley', 'Relaxing garden acclimation'],
      },
      {
        day: 3,
        title: 'Pisac Artisan Market & Inca Terraces',
        location: 'Pisac & Urubamba River Basin',
        description: 'Explore the monumental hilltop ruins of Pisac with our resident Quechua archaeologist, marveling at sweeping agricultural terraces carved into sheer mountain ridges. In the afternoon, wander the colorful artisan market in Pisac village to meet master silversmiths and weavers.',
        meals: 'Breakfast & Organic Farm Lunch',
        stay: 'Tambo del Inka or Sol y Luna',
        highlights: ['Pisac cliffside Inca terraces', 'Vibrant Andean artisan market', 'Farm-to-table organic lunch'],
      },
      {
        day: 4,
        title: 'Maras Salt Terraces, Moray Amphitheater & Ollantaytambo',
        location: 'Maras, Moray & Ollantaytambo',
        description: 'Visit the dazzling geometric salt pans of Maras, naturally harvested by local families since pre-Inca times. Continue to the circular terraced depression of Moray, believed to be an ancient Inca agricultural research station. In the afternoon, explore the living Inca village and stone fortress of Ollantaytambo.',
        meals: 'Breakfast & Lunch',
        stay: 'El Albergue Ollantaytambo or Tambo del Inka',
        highlights: ['Maras natural salt pools', 'Moray concentric agricultural rings', 'Ollantaytambo living stone town'],
      },
      {
        day: 5,
        title: 'Scenic Vistadome Train to Machu Picchu Sanctuary',
        location: 'Ollantaytambo → Aguas Calientes → Machu Picchu',
        description: 'Board the panoramic glass-roof Vistadome train as it follows the foaming Urubamba River into the lush subtropical cloud forest. Ascend to the Machu Picchu citadel for an awe-inspiring first encounter. Michael, Maria, and our local historian lead an unhurried exploration through the Temple of the Sun, Intihuatana, and Royal Enclosure.',
        meals: 'Breakfast & Dinner',
        stay: 'Inkaterra Machu Picchu Pueblo Hotel or Sumaq Machu Picchu',
        highlights: ['Vistadome glass-roof train traverse', 'Machu Picchu Historic Citadel', 'Subtropical orchid gardens walk'],
      },
      {
        day: 6,
        title: 'Machu Picchu Sun Gate & Return to Imperial Cusco',
        location: 'Machu Picchu → Cusco',
        description: 'Enjoy a peaceful morning hike to the Sun Gate (Intipunku) or Inca Bridge for breathtaking panoramic perspectives over the citadel. In the afternoon, return by train to Ollantaytambo and transfer up to imperial Cusco. Check into a historic 16th-century colonial convent hotel in the artisan district of San Blas.',
        meals: 'Breakfast & Lunch',
        stay: 'Palacio del Inka or Monasterio Belmond Cusco',
        highlights: ['Intipunku Sun Gate vistas', 'Return train journey', 'Evening stroll in historic Cusco'],
      },
      {
        day: 7,
        title: 'Imperial Cusco, Sacsayhuamán & San Pedro Market',
        location: 'Cusco Imperial Center',
        description: 'Walk through Cusco\\'s Plaza de Armas and visit the monumental Sun Temple of Coricancha, where Spanish baroque church walls rest atop perfectly fitted Inca granite blocks. Continue up to the massive megalithic zigzag fortress of Sacsayhuamán. Sample native fruits, Andean cheeses, and herbal teas at vibrant San Pedro market.',
        meals: 'Breakfast & Dinner',
        stay: 'Palacio del Inka, Cusco',
        highlights: ['Coricancha Sun Temple', 'Sacsayhuamán megalithic stones', 'San Pedro market cultural walk'],
      },
      {
        day: 8,
        title: 'Traditional Weaving Cooperative of Chinchero',
        location: 'Chinchero Highland Community',
        description: 'Visit the highland community of Chinchero to meet master Quechua weavers keeping ancient ancestral traditions alive. Witness the magical transformation of alpaca fleece using wild cochineal, chilca leaves, and Andean minerals. Return to Cusco for an afternoon at leisure exploring museums and boutique shops.',
        meals: 'Breakfast & Traditional Lunch',
        stay: 'Palacio del Inka, Cusco',
        highlights: ['Living Quechua weaving demonstration', 'Natural plant-dyeing masterclass', 'San Blas artisan studios'],
      },
      {
        day: 9,
        title: 'Andean Culinary Masterclass & Celebration Feast',
        location: 'Cusco',
        description: 'Participate in a private cooking masterclass preparing traditional Peruvian Andean dishes: savory lomo saltado, quinoa salads, and purple corn chicha morada. Gather in the evening for a festive celebration farewell dinner accompanied by traditional Andean panpipe and guitar music.',
        meals: 'Breakfast, Lunch & Celebration Dinner',
        stay: 'Palacio del Inka, Cusco',
        highlights: ['Interactive Andean cooking workshop', 'Traditional Peruvian gastronomy', 'Live Andean music celebration banquet'],
      },
      {
        day: 10,
        title: 'Cusco Farewell & Flight to Lima',
        location: 'Cusco (CUZ) → Lima (LIM) → International Departures',
        description: 'Enjoy a final breakfast in our sunlit colonial courtyard. Michael and Maria accompany the group to Cusco Airport for the short flight to Lima, connecting with homeward international flights.',
        meals: 'Breakfast included',
        stay: 'Departure',
        highlights: ['Scenic departure over the Andes', 'Warm farewells with Michael & Maria'],
      },
    ],
    dos: [
      {
        title: 'Take it easy during your first 24 to 48 hours at altitude',
        description: 'Cusco sits at 3,400 meters (11,150 ft). Drink plenty of water and coca tea, eat light meals, and allow your body to naturally acclimatize.',
      },
      {
        title: 'Wear comfortable layered clothing and sturdy hiking shoes',
        description: 'Andean mountain temperatures can shift rapidly from crisp chilly mornings (5°C / 40°F) to warm sunny afternoons (22°C / 72°F).',
      },
      {
        title: 'Carry Peruvian Soles (PEN) in small bills for artisan markets',
        description: 'While credit cards are accepted in hotels and fine restaurants, local weavers and markets in Pisac and San Pedro prefer small cash soles.',
      },
      {
        title: 'Use high-SPF sunscreen and UV-blocking sunglasses',
        description: 'High Andean altitude means intense UV radiation even on overcast days. A wide-brim hat is strongly recommended.',
      },
    ],
    donts: [
      {
        title: 'Don’t overexert yourself on your first day in Cusco',
        description: 'Avoid strenuous uphill hikes or heavy alcohol on arrival day; rest and let your body adapt to the elevation.',
      },
      {
        title: 'Don’t touch or lean on ancient Inca stonework at Machu Picchu',
        description: 'Preserving these fragile world heritage sites is paramount; stay on designated trails and follow park regulations.',
      },
      {
        title: 'Don’t photograph indigenous locals without politely asking first',
        description: 'Always ask permission before taking portraits of Quechua villagers, weavers, and children in traditional dress.',
      },
      {
        title: 'Don’t drink untreated tap water in Peru',
        description: 'Drink only bottled, boiled, or purified water provided daily at all hotels and during our private vehicle transits.',
      },
    ],
    practicalInfo: {
      bestSeason: 'May – Oct (Dry Andean winter with clear blue skies)',
      fitnessLevel: 'Moderate (includes high-altitude walking and cobblestone staircases)',
      language: 'Spanish & Quechua (English spoken by Michael & Maria and tour guides)',
      currency: 'Peruvian Sol (PEN) & US Dollars widely accepted',
      guides: 'Michael & Maria personally accompany the group alongside local historians',
      groupSize: 'Intimate Small Group: 6 to 10 travelers',
    },
  }`;

// Check if peru already exists
if (!content.includes("slug: 'peru'")) {
  // Replace the closing array bracket
  const lastIndex = content.lastIndexOf('];');
  if (lastIndex !== -1) {
    // Add comma before if needed
    const beforeClosing = content.substring(0, lastIndex).trimEnd();
    const needsComma = !beforeClosing.endsWith(',');
    content = beforeClosing + (needsComma ? ',\n' : '\n') + peruObject + '\n];\n';
    fs.writeFileSync(destFile, content, 'utf8');
    console.log('Successfully added Peru to destinations.ts!');
  } else {
    console.error('Could not find closing bracket in destinations.ts');
  }
} else {
  console.log('Peru already in destinations.ts');
}

