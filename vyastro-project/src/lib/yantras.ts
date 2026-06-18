export type Yantra = {
  id: string;
  name: string;
  sanskritName: string;
  deity: string;
  purpose: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  idealFor: string[];
  placement: string;
  material: string;
  size: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  category: YantraCategory;
  aiRecommended?: boolean;
  featured?: boolean;
  usageInstructions: string[];
  mantras: string[];
  activationDay: string;
  color: string;
  glowColor: string;
  symbol: string;
};

export type YantraCategory =
  | "prosperity"
  | "protection"
  | "health"
  | "love"
  | "career"
  | "spiritual"
  | "vastu";

export const YANTRA_CATEGORIES: { id: YantraCategory; label: string; emoji: string }[] = [
  { id: "prosperity", label: "Prosperity & Wealth", emoji: "✦" },
  { id: "protection", label: "Protection & Power", emoji: "◈" },
  { id: "health", label: "Health & Healing", emoji: "◉" },
  { id: "love", label: "Love & Relationships", emoji: "♡" },
  { id: "career", label: "Career & Success", emoji: "◎" },
  { id: "spiritual", label: "Spiritual Growth", emoji: "☽" },
  { id: "vastu", label: "Vastu & Space Energy", emoji: "⊕" },
];

export const YANTRAS: Yantra[] = [
  {
    id: "shri-yantra",
    name: "Shri Yantra",
    sanskritName: "श्री यंत्र",
    deity: "Goddess Lakshmi / Tripura Sundari",
    purpose: "Abundance & Prosperity",
    shortDesc:
      "The mother of all Yantras — 9 interlocking triangles representing the cosmos and the human body.",
    fullDesc:
      "The Shri Yantra is considered the most powerful and auspicious of all Yantras in the Vedic tradition. Formed by nine interlocking triangles radiating from a central point (Bindu), it represents the union of Shiva and Shakti — the male and female cosmic principles. The four upward triangles represent Shiva (masculine energy) and five downward triangles represent Shakti (feminine energy). Together they create 43 smaller triangles, symbolizing the entire cosmos. Meditating upon or installing a Shri Yantra activates abundance consciousness and draws prosperity, beauty, and harmony into all areas of life.",
    benefits: [
      "Attracts wealth, abundance, and financial prosperity",
      "Enhances beauty, charisma, and personal magnetism",
      "Strengthens relationships and family harmony",
      "Removes obstacles and negative energy from home",
      "Accelerates spiritual growth and self-realization",
      "Creates a protective energy field around the space",
    ],
    idealFor: [
      "Business owners seeking growth",
      "Individuals with weak Venus in chart",
      "Homes needing positive energy",
      "Those seeking overall life improvement",
    ],
    placement:
      "East or North wall of puja room, office, or living room. Face East while performing worship. Keep at eye level.",
    material: "24K Gold-plated copper (premium), Pure copper (standard)",
    size: "9 × 9 inches",
    price: 2499,
    originalPrice: 3500,
    rating: 4.9,
    reviewCount: 1284,
    badge: "Most Popular",
    category: "prosperity",
    aiRecommended: true,
    featured: true,
    usageInstructions: [
      "Cleanse with Panchamrit (milk, curd, honey, sugar, ghee) on installation day",
      "Place on a clean red cloth facing East",
      "Light a ghee lamp and incense daily",
      "Recite the Shri Sukta (16 verses) or simply 'Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed' 108 times",
      "Offer red flowers, particularly lotus or rose",
      "Never place on the floor; always elevate on a wooden platform or altar",
    ],
    mantras: [
      "Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed",
      "Om Aim Hreem Shreem",
      "Shri Sukta recitation",
    ],
    activationDay: "Friday (Shukravara)",
    color: "from-gold-600/30 to-gold-400/5",
    glowColor: "rgba(251,191,36,0.2)",
    symbol: "✦",
  },
  {
    id: "kuber-yantra",
    name: "Kuber Yantra",
    sanskritName: "कुबेर यंत्र",
    deity: "Lord Kuber — Divine Treasurer",
    purpose: "Wealth & Financial Growth",
    shortDesc:
      "Sacred geometry dedicated to Lord Kuber, activating the wealth energy in your space.",
    fullDesc:
      "The Kuber Yantra is the divine instrument of Lord Kuber, the cosmic treasurer and guardian of the North direction. This powerful Yantra contains the numerical grid and geometric pattern that resonates with the frequency of material abundance and financial security. Placing this Yantra in the North direction of your home or office opens the channel for steady, sustained wealth flow. It is especially potent for those in business, finance, banking, or trade, and for those whose charts show a debilitated or afflicted 2nd or 11th house lord.",
    benefits: [
      "Stimulates steady income and multiple revenue streams",
      "Removes financial blockages and debt cycles",
      "Protects existing wealth from unexpected losses",
      "Attracts business opportunities and profitable partnerships",
      "Strengthens the North direction's wealth energy per Vastu",
      "Enhances luck in investments and speculative ventures",
    ],
    idealFor: [
      "Business owners and entrepreneurs",
      "Individuals in financial careers",
      "Those experiencing financial instability",
      "Anyone with weak 2nd or 11th house",
    ],
    placement:
      "North wall of home, office cash drawer, or business entrance. The North direction governs wealth per Vastu.",
    material: "Pure copper with gold plating",
    size: "6 × 6 inches",
    price: 1899,
    originalPrice: 2800,
    rating: 4.8,
    reviewCount: 876,
    badge: "AI Recommended",
    category: "prosperity",
    aiRecommended: true,
    featured: true,
    usageInstructions: [
      "Purify with raw milk and Gangajal before installation",
      "Install on a Thursday (Brihaspativara) during Shukla Paksha",
      "Place 11 cloves and a coin under the Yantra",
      "Chant the Kuber mantra 108 times daily",
      "Light a mustard oil lamp facing North",
      "Keep a small bowl of grains near the Yantra as an offering",
    ],
    mantras: [
      "Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye",
      "Om Hreem Shreem Hreem Kuberaya Namah",
    ],
    activationDay: "Thursday (Brihaspativara)",
    color: "from-aurora-600/30 to-aurora-400/5",
    glowColor: "rgba(147,51,234,0.2)",
    symbol: "◈",
  },
  {
    id: "baglamukhi-yantra",
    name: "Baglamukhi Yantra",
    sanskritName: "बगलामुखी यंत्र",
    deity: "Goddess Baglamukhi — 8th Mahavidya",
    purpose: "Protection, Victory & Obstacle Removal",
    shortDesc:
      "Powerful protection Yantra that removes obstacles, silences enemies, and ensures victory in disputes.",
    fullDesc:
      "Baglamukhi Yantra invokes the power of Goddess Baglamukhi, the 8th Mahavidya in the Tantric tradition. She is the 'Paralyzer of the Enemy' — her power immobilizes all negative forces, gossip, legal opponents, and obstacles standing in your path. This Yantra is exceptionally potent for legal battles, competitive examinations, business rivalries, and protection against slander. The yellow-toned geometric structure resonates with the Ajna chakra and bestows the devotee with immovable confidence and the ability to silence all opposition.",
    benefits: [
      "Victory in court cases, legal disputes, and competitions",
      "Protection against enemies, black magic, and evil eye",
      "Silences gossip, slander, and false accusations",
      "Removes career obstacles and competitive threats",
      "Bestows courage, confidence, and commanding presence",
      "Protects business from sabotage and unfair competition",
    ],
    idealFor: [
      "Professionals in competitive fields",
      "Those facing legal disputes",
      "Business owners with competition",
      "Politicians and public figures",
    ],
    placement:
      "South wall of home or office. Face North while worshipping. Keep wrapped in yellow cloth when not in active use.",
    material: "Copper with yellow gold plating",
    size: "6 × 6 inches",
    price: 2199,
    originalPrice: 3200,
    rating: 4.7,
    reviewCount: 543,
    badge: "Best for Business",
    category: "protection",
    aiRecommended: false,
    featured: true,
    usageInstructions: [
      "Install only on a Tuesday or Saturday during Shukla Paksha",
      "Wrap in yellow cloth and keep on a yellow surface",
      "Offer yellow flowers (marigold preferred) and turmeric",
      "Chant the Baglamukhi Mool Mantra 108 times",
      "Light a mustard oil lamp with a single wick",
      "Do not show this Yantra to others; keep it semi-private",
    ],
    mantras: [
      "Om Hreem Baglamukhi Sarvadushtanam Vaacham Mukham Padam Stambhaya",
      "Om Aim Hreem Kleem Baglamukhai Namah",
    ],
    activationDay: "Tuesday or Saturday",
    color: "from-yellow-600/20 to-yellow-400/5",
    glowColor: "rgba(234,179,8,0.2)",
    symbol: "⚡",
  },
  {
    id: "mahamrityunjaya-yantra",
    name: "Mahamrityunjaya Yantra",
    sanskritName: "महामृत्युञ्जय यंत्र",
    deity: "Lord Shiva — Conqueror of Death",
    purpose: "Health, Healing & Longevity",
    shortDesc:
      "Invokes Lord Shiva's power of regeneration for healing, protection from disease, and long life.",
    fullDesc:
      "The Mahamrityunjaya Yantra is the geometric representation of the most powerful Shiva mantra — the Mahamrityunjaya Mantra. This Yantra vibrates at the frequency of immortality and regeneration. Its interlocking triangles and lotus petals form a protective shield around the physical body, strengthening the immune system, accelerating recovery from illness, and creating a field of protection against untimely death. It is highly recommended for those with weak Sun, afflicted 8th house, or Saturn-dominated charts, and is particularly powerful during times of serious illness in the family.",
    benefits: [
      "Accelerates healing from illness and disease",
      "Protects against accidents and untimely death",
      "Strengthens overall vitality and immune system",
      "Dissolves fear of death and brings fearlessness",
      "Creates a powerful protective aura around the home",
      "Beneficial for elders and those with chronic conditions",
    ],
    idealFor: [
      "Those recovering from illness",
      "Individuals with afflicted 8th house",
      "Elderly family members",
      "Anyone going through health challenges",
    ],
    placement:
      "Puja room, bedroom, or hospital room. East or North-East direction. Face East while worshipping.",
    material: "Pure copper with silver plating",
    size: "8 × 8 inches",
    price: 1799,
    originalPrice: 2600,
    rating: 4.9,
    reviewCount: 921,
    badge: "Healer's Choice",
    category: "health",
    aiRecommended: false,
    featured: false,
    usageInstructions: [
      "Install on a Monday (Somavara) during Shukla Paksha",
      "Bathe the Yantra in raw milk mixed with Gangajal before installation",
      "Offer Bilvapatra (Bel leaves) and white flowers",
      "Chant the Mahamrityunjaya Mantra 108 or 1008 times",
      "Light a ghee lamp with three wicks",
      "Keep near the sick person's bed for healing acceleration",
    ],
    mantras: [
      "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat",
      "Om Hreem Haum Joom Sah",
    ],
    activationDay: "Monday (Somavara)",
    color: "from-blue-600/20 to-blue-400/5",
    glowColor: "rgba(59,130,246,0.2)",
    symbol: "☽",
  },
  {
    id: "gayatri-yantra",
    name: "Gayatri Yantra",
    sanskritName: "गायत्री यंत्र",
    deity: "Goddess Gayatri — Mother of Vedas",
    purpose: "Intelligence, Wisdom & Spiritual Growth",
    shortDesc:
      "The geometric form of the Gayatri Mantra — for clarity of mind, academic success, and spiritual awakening.",
    fullDesc:
      "The Gayatri Yantra embodies the supreme power of the Gayatri Mantra — considered the most powerful mantra in the Vedic tradition. This Yantra resonates with solar energy, intellect, and divine wisdom. Students, researchers, teachers, and spiritual seekers benefit immensely from its presence. The Yantra activates the Sahasrara and Ajna chakras, enhancing memory, concentration, creativity, and the capacity to perceive higher truth. It is ideal for study rooms, meditation spaces, and any environment where clarity of thought and spiritual refinement are sought.",
    benefits: [
      "Enhances memory, concentration, and academic performance",
      "Activates spiritual intelligence and intuition",
      "Removes mental fog, confusion, and decision paralysis",
      "Protects against negative influences and psychic attacks",
      "Accelerates meditation and sadhana practices",
      "Brings clarity in dharmic and life-path decisions",
    ],
    idealFor: [
      "Students and academics",
      "Spiritual seekers and meditators",
      "Writers, researchers, and teachers",
      "Those seeking life-purpose clarity",
    ],
    placement:
      "East wall of study room, meditation room, or puja room. Should face East — direction of the rising sun.",
    material: "Pure copper with gold plating",
    size: "7 × 7 inches",
    price: 1599,
    originalPrice: 2200,
    rating: 4.8,
    reviewCount: 634,
    category: "spiritual",
    aiRecommended: true,
    featured: false,
    usageInstructions: [
      "Install at sunrise on a Sunday during Shukla Paksha",
      "Purify with Panchamrit and Gangajal",
      "Offer red flowers and light a ghee lamp",
      "Chant the Gayatri Mantra 108 times facing East",
      "Keep the area around the Yantra clean and free of clutter",
      "Meditate in front of it daily for best results",
    ],
    mantras: [
      "Om Bhur Bhuva Swaha Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat",
      "Om Aim Hreem Kleem",
    ],
    activationDay: "Sunday (Ravivara)",
    color: "from-orange-600/20 to-orange-400/5",
    glowColor: "rgba(249,115,22,0.2)",
    symbol: "☀",
  },
  {
    id: "vastu-yantra",
    name: "Vastu Yantra",
    sanskritName: "वास्तु यंत्र",
    deity: "Vastu Purush",
    purpose: "Space Harmony & Positive Energy",
    shortDesc:
      "Corrects Vastu doshas and establishes harmonious energy flow throughout your home or office.",
    fullDesc:
      "The Vastu Yantra is the master geometric instrument for correcting and energizing the five elemental energies (Pancha Bhutas) within any built space. Where physical Vastu corrections are not possible — walls can't be moved, directions can't be changed — the Vastu Yantra acts as a powerful energetic remedy. It works on the etheric blueprint of the structure, realigning energy pathways and dissolving blockages caused by Vastu doshas. This Yantra is particularly powerful for rented spaces, apartments in multi-story buildings, or any space with significant Vastu imbalances.",
    benefits: [
      "Corrects all major and minor Vastu doshas remotely",
      "Establishes harmonious five-element balance in space",
      "Removes stagnant, negative, and disturbed energy",
      "Attracts peace, prosperity, and positivity into the home",
      "Especially effective where physical changes aren't possible",
      "Ideal for rented spaces, flats, and offices",
    ],
    idealFor: [
      "Residents of apartments with Vastu issues",
      "Business owners in rented commercial spaces",
      "Those experiencing persistent problems at home",
      "New home or office move-ins",
    ],
    placement:
      "Center of the home (Brahmasthan), or buried under the main entrance threshold. Alternatively, place in the South-West room.",
    material: "Pure copper with sacred geometry etching",
    size: "10 × 10 inches",
    price: 2799,
    originalPrice: 3900,
    rating: 4.7,
    reviewCount: 412,
    badge: "Vastu Expert Pick",
    category: "vastu",
    aiRecommended: false,
    featured: false,
    usageInstructions: [
      "Ideally buried at the Brahmasthan (center of home) on a Wednesday",
      "If burial not possible, install on the South-West wall",
      "Perform Vastu Puja with Panchamrit and Gangajal",
      "Chant the Vastu Purush Mantra 108 times",
      "Offer raw rice, flowers, and a coconut",
      "Do not disturb once installed; this is a permanent installation",
    ],
    mantras: [
      "Om Vastupurushaya Namah",
      "Om Namo Bhagavate Vastupurushaya Swaha",
    ],
    activationDay: "Wednesday (Budhavara)",
    color: "from-emerald-600/20 to-emerald-400/5",
    glowColor: "rgba(16,185,129,0.2)",
    symbol: "⊕",
  },
  {
    id: "kali-yantra",
    name: "Kali Yantra",
    sanskritName: "काली यंत्र",
    deity: "Goddess Kali — Dark Mother",
    purpose: "Fierce Protection & Transformation",
    shortDesc:
      "Invokes the transformative power of Goddess Kali for deep protection and rapid life transformation.",
    fullDesc:
      "The Kali Yantra is one of the most powerful protective instruments in the Tantric tradition. Goddess Kali, the fierce form of Divine Mother, destroys all ego, fear, and darkness — both external threats and internal demons. This Yantra is particularly potent for those undergoing deep life transformation, battling addiction or destructive patterns, or needing fierce energetic protection. The Yantra's power should not be underestimated — it works swiftly and deeply, clearing karmic debris and creating space for radical positive transformation.",
    benefits: [
      "Fierce protection against negative energies and black magic",
      "Destroys fear, anxiety, and deep-seated emotional blocks",
      "Accelerates transformation during life transitions",
      "Removes karmic debts and ancestral patterns",
      "Bestows raw courage and fearless confidence",
      "Powerful for overcoming addiction and self-destructive patterns",
    ],
    idealFor: [
      "Those in periods of deep transformation",
      "Individuals facing intense opposition or attack",
      "Spiritual practitioners on tantric path",
      "Those dealing with ancestral or karmic issues",
    ],
    placement:
      "South wall. This is a powerful Yantra — install only after understanding its energy. Keep in a dedicated space.",
    material: "Pure copper",
    size: "6 × 6 inches",
    price: 1999,
    originalPrice: 2800,
    rating: 4.6,
    reviewCount: 287,
    category: "protection",
    aiRecommended: false,
    featured: false,
    usageInstructions: [
      "Install only on a Saturday (Shanivara) or Tuesday during Shukla Paksha",
      "Purify with red sandalwood paste and Gangajal",
      "Offer red hibiscus flowers and red fruits",
      "Chant the Kali mantra 108 times with focused intention",
      "Light a mustard oil lamp",
      "Approach with reverence and clear intention",
    ],
    mantras: [
      "Om Kreem Kalikayai Namah",
      "Om Aim Hreem Kleem Chamundayai Vichche",
    ],
    activationDay: "Saturday (Shanivara)",
    color: "from-red-900/30 to-red-700/5",
    glowColor: "rgba(239,68,68,0.2)",
    symbol: "◉",
  },
  {
    id: "saraswati-yantra",
    name: "Saraswati Yantra",
    sanskritName: "सरस्वती यंत्र",
    deity: "Goddess Saraswati — Goddess of Knowledge",
    purpose: "Education, Arts & Creative Excellence",
    shortDesc:
      "Sacred geometry of Goddess Saraswati for academic excellence, artistic mastery, and eloquent expression.",
    fullDesc:
      "The Saraswati Yantra invokes the blessings of Goddess Saraswati — the presiding deity of all knowledge, learning, arts, music, and eloquent speech. This Yantra is the ideal companion for students, musicians, writers, dancers, scientists, and anyone whose life path is tied to learning and creative expression. The Yantra's geometric resonance activates the Vishuddhi (throat) chakra and Sahasrara (crown) chakra, enhancing verbal expression, creative flow, and the capacity to assimilate and retain vast amounts of information.",
    benefits: [
      "Dramatically improves memory, focus, and learning ability",
      "Removes obstacles in education and examinations",
      "Enhances artistic talent, musical ability, and creative expression",
      "Improves speech, communication, and public speaking",
      "Brings recognition and respect in academic or artistic fields",
      "Excellent for competitive exam preparation",
    ],
    idealFor: [
      "Students preparing for competitive exams",
      "Artists, musicians, and performers",
      "Writers and communicators",
      "Those seeking academic advancement",
    ],
    placement:
      "East wall of study room or music/art space. Should be at eye level when seated for study.",
    material: "Pure copper with silver plating",
    size: "7 × 7 inches",
    price: 1699,
    originalPrice: 2400,
    rating: 4.8,
    reviewCount: 521,
    category: "career",
    aiRecommended: true,
    featured: false,
    usageInstructions: [
      "Install on a Wednesday or Thursday during Shukla Paksha",
      "Purify with milk and yellow sandalwood paste",
      "Offer white or yellow flowers and raw rice",
      "Chant the Saraswati Vandana or Saraswati mantra 108 times",
      "Keep a pen, book, or musical instrument near the Yantra",
      "Light a ghee lamp with a single wick",
    ],
    mantras: [
      "Om Aim Saraswatyai Namah",
      "Om Hreem Aim Hreem Saraswatyai Namah",
      "Ya Kundendu Tushar Hara Dhavala",
    ],
    activationDay: "Wednesday (Budhavara) or Thursday",
    color: "from-cyan-600/20 to-cyan-400/5",
    glowColor: "rgba(6,182,212,0.2)",
    symbol: "♩",
  },
];

export function getYantraById(id: string): Yantra | undefined {
  return YANTRAS.find((y) => y.id === id);
}

export function getYantrasByCategory(cat: YantraCategory): Yantra[] {
  return YANTRAS.filter((y) => y.category === cat);
}

export function getFeaturedYantras(): Yantra[] {
  return YANTRAS.filter((y) => y.featured);
}

export function getAIRecommendedYantras(): Yantra[] {
  return YANTRAS.filter((y) => y.aiRecommended);
}
