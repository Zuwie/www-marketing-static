export interface IEvent {
  id: number
  attributes: {
    date: string;
    title: string;
    description: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    banner: string;
  }
}
