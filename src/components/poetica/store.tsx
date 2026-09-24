import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = {
  cart: number;
  cartItems: CartItem[];
  addToCart: (name: string, price: string) => void;
  modalOpen: boolean;
  openOrderModal: () => void;
  setModalOpen: (v: boolean) => void;
};

export type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

const PoeticaCtx = createContext<Ctx | null>(null);

export function PoeticaProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const cart = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (name: string, price: string) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.name === name);
      if (existing) {
        return items.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { name, price, quantity: 1 }];
    });
  };

  return (
    <PoeticaCtx.Provider
      value={{
        cart,
        cartItems,
        addToCart,
        modalOpen,
        openOrderModal: () => setModalOpen(true),
        setModalOpen,
      }}
    >
      {children}
    </PoeticaCtx.Provider>
  );
}

export function usePoetica() {
  const ctx = useContext(PoeticaCtx);
  if (!ctx) throw new Error("usePoetica must be inside PoeticaProvider");
  return ctx;
}
