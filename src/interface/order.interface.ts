// types/order.ts

export interface IOrderItem {
  productId: string;
  quantity: number;
}

export interface IOrder {
  _id: string; // MongoDB default id field is _id, not id
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

export interface IOrderWithUser extends Omit<IOrder, 'userId'> {
  user: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface CreateOrderInput {
  userId: string;
  items: IOrderItem[];
  status: 'pending' | 'shipped' | 'delivered';
}
