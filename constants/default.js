import {
  Anchor,
  Building,
  Home,
  MapPin,
  Plane,
  Sun,
  Utensils,
} from "lucide-react";

export const topNavigationItems = [
  "Find Connections",
  "Find New Beginnings",
  "Find Pause",
  "Find Balance",
  "Find Bliss",
  "Find Joy",
  "Find Clarity",
  "Find Meaning",
  "Find Meaning",
  "Find Clarity",
  "Find",
];

export const dropdownOptions = {
  destination: [
    "Bali, Indonesia",
    "Maldives",
    "Santorini, Greece",
    "Swiss Alps",
    "Amalfi Coast, Italy",
    "Kyoto, Japan",
    "Marrakech, Morocco",
    "Reykjavik, Iceland",
    "Queenstown, New Zealand",
    "Banff, Canada",
  ],
  checkin: [
    "Today - Tomorrow",
    "This Weekend",
    "Next Week",
    "Next Month",
    "Custom Dates",
  ],
  guests: [
    "1 Room - 1 Adult",
    "1 Room - 2 Adults",
    "1 Room - 2 Adults, 1 Child",
    "1 Room - 2 Adults, 2 Children",
    "2 Rooms - 4 Adults",
    "Custom Configuration",
  ],
};

export const dropdownConfigs = [
  {
    key: "destination",
    label: "Destination",
    valueKey: "destination",
  },
  {
    key: "checkin",
    label: "Check in — Check out",
    valueKey: "checkIn",
  },
  {
    key: "guests",
    label: "Guests",
    valueKey: "guests",
  },
];

export const mainNavigationSections = [
  "Destinations",
  "Hotels",
  "Villas",
  "Properties",
];

export const menuSections = [
  {
    title: "Stay",
    items: ["Garden Villa", "Pool Studio", "Pool Villa", "Master Pool Villa"],
  },
  {
    title: "Discover",
    items: ["Secret Waterfalls", "Dolphins of Lovina", "Diving and Snorkeling"],
  },
];

export const categoryIcons = [
  { icon: Building, label: "All Hotels & Resorts" },
  { icon: Home, label: "Residences" },
  { icon: MapPin, label: "Villa & Residence" },
  { icon: Utensils, label: "Dining" },
  { icon: Plane, label: "Private Jet" },
  { icon: Anchor, label: "Yachts" },
  { icon: Sun, label: "Summer Travel" },
];

export const destinations = {
  "United Kingdom": [
    {
      id: 1,
      title: "Tower Bridge",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Natural History Museum",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Edinburgh Castle",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "The National Gallery",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Stonehenge",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1599833975787-5447fc29b6c7?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Westminster Abbey",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1529655683826-3c68ee1a5d3a?w=500&h=400&fit=crop&auto=format",
    },
  ],
  "South America": [
    {
      id: 1,
      title: "Machu Picchu",
      location: "Peru",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Christ the Redeemer",
      location: "Brazil",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Iguazu Falls",
      location: "Argentina",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Salar de Uyuni",
      location: "Bolivia",
      image:
        "https://images.unsplash.com/photo-1544737151043-6490a532345b?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Torres del Paine",
      location: "Chile",
      image:
        "https://images.unsplash.com/photo-1518197338726-88e4ed3b2ccd?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Angel Falls",
      location: "Venezuela",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop&auto=format",
    },
  ],
  Asia: [
    {
      id: 1,
      title: "Taj Mahal",
      location: "India",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Great Wall of China",
      location: "China",
      image:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Fushimi Inari Shrine",
      location: "Japan",
      image:
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Angkor Wat",
      location: "Cambodia",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f1e?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Bagan Temples",
      location: "Myanmar",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Borobudur Temple",
      location: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1555400943-710e40bf3999?w=500&h=400&fit=crop&auto=format",
    },
  ],
  Europe: [
    {
      id: 1,
      title: "Eiffel Tower",
      location: "France",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Colosseum",
      location: "Italy",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Santorini",
      location: "Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Neuschwanstein Castle",
      location: "Germany",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Prague Castle",
      location: "Czech Republic",
      image:
        "https://images.unsplash.com/photo-1541849546-216549ae216d?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Northern Lights",
      location: "Norway",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&h=400&fit=crop&auto=format",
    },
  ],
  Africa: [
    {
      id: 1,
      title: "Pyramids of Giza",
      location: "Egypt",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f1e?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Victoria Falls",
      location: "Zambia/Zimbabwe",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Serengeti National Park",
      location: "Tanzania",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Table Mountain",
      location: "South Africa",
      image:
        "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Sahara Desert",
      location: "Morocco",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Kilimanjaro",
      location: "Tanzania",
      image:
        "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=500&h=400&fit=crop&auto=format",
    },
  ],
  Oceania: [
    {
      id: 1,
      title: "Sydney Opera House",
      location: "Australia",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Great Barrier Reef",
      location: "Australia",
      image:
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Milford Sound",
      location: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Uluru (Ayers Rock)",
      location: "Australia",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Bay of Islands",
      location: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1518197338726-88e4ed3b2ccd?w=500&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Bora Bora",
      location: "French Polynesia",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop&auto=format",
    },
  ],
};

export const tabs = [
  "United Kingdom",
  "South America",
  "Asia",
  "Europe",
  "Africa",
  "Oceania",
];
