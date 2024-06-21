"use client";

import React, { useState } from "react";
import { clients, products } from "./mockData";
import { Session } from "./models";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AddSessionProps = {
  onAddSession: (newSession: Session) => void;
};

const AddSession: React.FC<AddSessionProps> = ({ onAddSession }) => {
  const [clientId, setClientId] = useState(clients[0].id);
  const [productId, setProductId] = useState(products[0].id);
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 16)
  );

  const handleAddSession = () => {
    const selectedClient = clients.find((c) => c.id === clientId);
    const selectedProduct = products.find((p) => p.id === productId);
    console.log(selectedClient, selectedProduct);

    if (selectedClient && selectedProduct) {
      const newSession: Session = {
        id: Date.now().toString(),
        clientId: selectedClient.id,
        productId: selectedProduct.id,
        name: `${selectedClient.name} - ${selectedProduct.name}`,
        date: new Date(date).toISOString(),
        durationMinutes: selectedProduct.durationMinutes,
        price: selectedProduct.price,
        paymentFinalization: selectedProduct.paymentFinalization,
        discount: selectedClient.discount,
        paymentMethod: selectedClient.paymentMethodPreference,
        location: selectedClient.locationPreference,
        generateInvoice: selectedClient.generateInvoices,
      };
      console.log(newSession);
      onAddSession(newSession);
      setDate(new Date().toISOString().slice(0, 16));
    }
  };

  return (
    <div className="m-4 rounded-lg shadows  flex justify-center items-center">
      <Card className=" sm:w-[350px] w-[300px]">
        <CardHeader>
          <CardTitle>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#3369FF]">
              Add Session
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 ">
            <div>
              <label className="block text-sm  text-[#6E6E6E] font-bold">
                Client
              </label>
              <select
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="mt-1 block w-full outline-none text-[#6E6E6E]"
              >
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#6E6E6E] ">
                Product
              </label>
              <select
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="mt-1 block w-full outline-none text-[#6E6E6E]"
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#6E6E6E]">
                Date
              </label>
              <input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full outline-none text-[#6E6E6E]"
              />
            </div>
            <button
              type="button"
              onClick={handleAddSession}
              className="px-4 shadows w-full py-2 hover-bg  text-white rounded-3xl"
            >
              Add Session
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddSession;