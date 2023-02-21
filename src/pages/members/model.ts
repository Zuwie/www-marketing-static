import { StrapiImage } from "@/src/models";

export interface IMember {
  id: number
  attributes: {
    name: string;
    bio: string;
    role: string;
    profilePicture: StrapiImage
  }
}
