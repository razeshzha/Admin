export interface IOrderItem {
    productId: string;
    quantity: number;
  }
  
  export interface IOrder {
    id: string;
    userId: string;
    items: IOrderItem[];
    total: number;
    status: 'pending' | 'shipped' | 'delivered';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IUser {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IOrderWithUser extends IOrder {
    user: {
      id: string;
      name: string;
      email: string;
    };
  }
  