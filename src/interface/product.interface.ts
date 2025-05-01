export interface IProductInput {
    name: string;
    description?: string;
    category: string;
    price: number;
    coverImage: File;         // or string if using URL
    images: File[];           // or string[] if using URLs
  }
  