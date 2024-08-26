export interface EventItem {
  id: string;
  name: string;
  time: string;
  date: string;
  tickets: Ticket[];
  description: string;
}

export interface Ticket {
  type: string;
  price: number;
  quantity: number;
}
