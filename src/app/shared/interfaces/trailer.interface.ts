import { IThumbnail } from "./tumbnail.interface";

export interface ITrailer {
  description: string;
  embedUrl: string;
  name: string;
  thumbnail: IThumbnail;
  thumbnailUrl: string;
  type: string;
  uploadDate: Date;
}