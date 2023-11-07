import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./cart";

type OrderFields = {
  orderId: string;
  orderDate: Date;
  orderItems: Product[];
  orderStatus: string;
  orderTotal: number;
};

export interface OrderStore {
  order: OrderFields[] | null;
  setOrder: (order: OrderFields) => void;
  removeOrder: () => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      order: null as OrderFields[] | null,
      setOrder: (order: OrderFields) =>
        set((state) => ({
          order: state.order ? [...state.order, order] : [order],
        })),
      removeOrder: () => set(() => ({ order: null })),
    }),
    {
      name: "order-storage",
    }
  )
);
