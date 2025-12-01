// src/models/entities.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "employee" | "customer";
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  age: number;
  price: number;
  status: "available" | "sold";
  quantity: number;
}

export interface Food {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  quantity: number;
}

export interface Supplies {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export interface OrderItem {
  productId: string;
  type: "pet" | "food" | "supplies";
  quantity: number;
  price: number;
}

export interface CustomerOrder {
  id: string;
  customerId: string;
  status: "pending" | "completed" | "cancelled";
  totalPrice: number;
  createdAt: string;
  items: OrderItem[];
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  entity: string;
  timestamp: string;
}
