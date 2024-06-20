// A Client is a a therapist's customer.
// A Product is something a therapist offers to their clients - for example a Classic Therapy, Group Therapy, Coaching, etc.
// A Session represents a calendar time slot, a meeting that a client attends with the therapist to talk and get some guidance.

export type PaymentMethod = "card" | "paypal" | "bank";
export type PaymentFinalization = "before" | "after";
export type Location = "online" | "in-person";

export type Client = {
  id: string;
  name: string;
  discount: string;
  paymentMethodPreference: PaymentMethod;
  locationPreference: Location;
  generateInvoices: boolean;
};

export type Product = {
  id: string;
  name: string;
  durationMinutes: number;
  price: string;
  paymentFinalization: PaymentFinalization;
};

export type Session = {
  id: string;
  clientId: string;
  productId: string;
  name: string;
  date: Date | string;
  durationMinutes: number;
  price: string;
  paymentFinalization: PaymentFinalization;
  discount: string;
  paymentMethod: PaymentMethod;
  location: Location;
  generateInvoice: boolean;
};
