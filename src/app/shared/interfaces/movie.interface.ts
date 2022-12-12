import { IAggregateRating } from "./aggregate-rating.interface";
import { ICreator } from "./creator.interface";
import { IActor } from "./actor.interface";
import { IDirector } from "./director.interface";
import { ITrailer } from "./trailer.interface";

export interface IMovie {
  actor: IActor[];
  aggregateRating: IAggregateRating;
  contentRating: string;
  context: string;
  creator: ICreator[];
  datePublished: string;
  description: string;
  director: IDirector[];
  duration: string;
  genre: string[];
  image: string;
  keywords: string;
  name: string;
  trailer: ITrailer;
  type: string;
  url: string;
}