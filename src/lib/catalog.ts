export type CatalogItem = {
  title: string; // song or album title
  artist: string;
  image: string; // public path, e.g. "/Recommended songs/Frame 69.png" or "Recommended songs/Frame 69.png"
  category?: string;
};

// Minimal shared catalog assembled from existing components' static items
export const catalog: CatalogItem[] = [
  { image: "/Recommended songs/Frame 69.png", title: "Rolling in the Deep", artist: "Adele", category: "recommended" },
  { image: "/Recommended songs/Frame 69 (1).png", title: "Oh My God", artist: "Adele", category: "recommended" },
  { image: "/Recommended songs/Frame 69 (2).png", title: "Hometown Glory", artist: "Adele", category: "recommended" },
  { image: "/Recommended songs/Frame 69 (3).png", title: "Midnights", artist: "Taylor Swift", category: "recommended" },
  { image: "/Recommended songs/Frame 69 (4).png", title: "Perfect", artist: "Ed Sheeran", category: "recommended" },

  { image: "/Music Videos/Frame 71.png", title: "Water Under The Bridge", artist: "Adele", category: "video" },
  { image: "/Music Videos/Frame 369.png", title: "Ocean Eyes", artist: "Billie Eilish", category: "video" },
  { image: "/Music Videos/Frame 370.png", title: "Bejeweled", artist: "Taylor Swift", category: "video" },

  { image: "/New Albums/Frame 69 (1).png", title: "Room for Squares", artist: "John Mayer", category: "album" },
  { image: "/New Albums/Frame 69 (2).png", title: "Divide", artist: "Ed Sheeran", category: "album" },
  { image: "/New Albums/Frame 69 (3).png", title: "Lover", artist: "Taylor Swift", category: "album" },
  { image: "/New Albums/Frame 69 (4).png", title: "30", artist: "Adele", category: "album" },
];



