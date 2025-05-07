export interface IUser {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IUserWithOrders extends IUser {
    orders: {
      id: string;
      total: number;
      status: 'pending' | 'shipped' | 'delivered';
      createdAt: string;
    }[];
  }
  