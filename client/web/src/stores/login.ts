import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoginFields = {
  username: string | null;
  password: string | null;
};

export interface AuthStore {
  user: LoginFields | null;
  auth: (user: LoginFields) => void;
  deAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null as LoginFields | null,
      auth: (user: LoginFields) => set(() => ({ user })),
      deAuth: () => set(() => ({ user: { username: "", password: "" } })),
    }),
    {
      name: "auth-storage",
    }
  )
);
