export interface Actor {
  name: string;
  type: string;
  url: string;
}

export interface AggregateRating {
  bestRating: string;
  ratingCount: number;
  ratingValue: number;
  type: string;
  worstRating: string;
}

export interface Creator {
  type: string;
  url: string;
  name: string;
}

export interface Director {
  type: string;
  url: string;
  name: string;
}

export interface Thumbnail {
  contentUrl: string;
  type: string;
}

export interface Trailer {
  description: string;
  embedUrl: string;
  name: string;
  thumbnail: Thumbnail;
  thumbnailUrl: string;
  type: string;
  uploadDate: Date;
}

export interface Movie {
  actor: Actor[];
  aggregateRating: AggregateRating;
  contentRating: string;
  context: string;
  creator: Creator[];
  datePublished: string;
  description: string;
  director: Director[];
  duration: string;
  genre: string[];
  image: string;
  keywords: string;
  name: string;
  trailer: Trailer;
  type: string;
  url: string;
}
