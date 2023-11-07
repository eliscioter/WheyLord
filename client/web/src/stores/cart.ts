import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  quantity?: number;
};

export interface CartStore {
  cart: Product[];
  setCart: (cart: Product) => void;
  removeCartItem: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      setCart: (product: Product) =>
        set((state) => {
          const existingCartItem = state.cart.find(
            (item) => item.id === product.id && item.name === product.name
          );

          if (existingCartItem) {
            existingCartItem.quantity
              ? (existingCartItem.quantity += 1)
              : (existingCartItem.quantity = 1);
          } else {
            state.cart.push({ ...product, quantity: 1 });
          }

          return { cart: [...state.cart] };
        }),
      removeCartItem: (productId: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
        increaseQuantity: (productId: number) =>
        set((state) => {
          const cartItem = state.cart.find((item) => item.id === productId);
          if (cartItem) {
            cartItem.quantity ? cartItem.quantity += 1 : cartItem.quantity = 1;
          }
          return { cart: [...state.cart] };
        }),
        decreaseQuantity: (productId: number) =>
  set((state) => {
    const cartItem = state.cart.find((item) => item.id === productId);
    if (cartItem) {
      if (cartItem.quantity && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== productId);
      }
    }
    return { cart: [...state.cart] };
  }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
