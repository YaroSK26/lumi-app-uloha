import {
  Client,
  Product,
  Session,
} from "./models";

export const clients: Client[] = [
  {
    id: "1",
    name: "John Doe",
    discount: "10",
    paymentMethodPreference: "card",
    locationPreference: "online",
    generateInvoices: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    discount: "15",
    paymentMethodPreference: "paypal",
    locationPreference: "in-person",
    generateInvoices: false,
  },
  {
    id: "3",
    name: "Bob Johnson",
    discount: "20",
    paymentMethodPreference: "bank",
    locationPreference: "online",
    generateInvoices: true,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Therapy",
    durationMinutes: 60,
    price: "100",
    paymentFinalization: "before",
  },
  {
    id: "2",
    name: "Group Therapy",
    durationMinutes: 90,
    price: "150",
    paymentFinalization: "after",
  },
  {
    id: "3",
    name: "Family Therapy",
    durationMinutes: 120,
    price: "200",
    paymentFinalization: "before",
  },
];
export const defaultSession: Session = {
  id: "1",
  clientId: "1",
  productId: "1",
  name: "John Doe - Classic Therapy",
  date: new Date().toISOString(),
  durationMinutes: 60,
  price: "100",
  paymentFinalization: "before",
  discount: "10",
  paymentMethod: "card",
  location: "online",
  generateInvoice: true,
};

export let sessions: Session[] = JSON.parse(
  localStorage.getItem("sessions") || "[]"
);

if (sessions.length === 0) {
  sessions.push(defaultSession);
}

export const loadSessions = (): Session[] => {
  const storedSessions = localStorage.getItem("sessions");
  return storedSessions ? JSON.parse(storedSessions) : [];
};

export const saveSession = (newSession: Session) => {
  const sessions = loadSessions();
  sessions.push(newSession);
  localStorage.setItem("sessions", JSON.stringify(sessions));
};
