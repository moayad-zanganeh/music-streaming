import { catalog, CatalogItem } from "./catalog";

export function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function searchCatalog(query: string): CatalogItem[] {
  const q = normalize(query);
  if (!q) return [];
  return catalog.filter((item) => {
    const title = normalize(item.title);
    const artist = normalize(item.artist);
    return title.includes(q) || artist.includes(q);
  });
}



