interface User {
  id: number;
  name: string;
  role: "admin" | "customer";
}

interface Beverage {
  name: string;
  price: number;
}

interface Order {
  orderId: number;
  customerId: number;
  customerName: string;
  beverageName: string;
  status: "placed" | "completed" | "picked-up";
}

// 필요한 데이터들을 정의
let beverages: Beverage[] = [];
let order: Order[] = [];
