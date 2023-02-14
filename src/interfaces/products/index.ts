export interface IProductRequest {
  name: string;
  category: string;
  quantity: number;
}

export interface IProduct {
  id: string;
  name: string;
  status: string;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

export interface IProductUpdate {
  name?: string;
  category?: string;
  quantity?: number;
}
