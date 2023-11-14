import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoginFields = {
  username: string | null;
  password: string | null;
};

export interface AuthStore {
  admin: LoginFields | null;
  auth: (admin: LoginFields) => void;
  deAuth: () => void;
}

export const useAdminAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      admin: null as LoginFields | null,
      auth: (admin: LoginFields) => set(() => ({ admin })),
      deAuth: () => set(() => ({ admin: { username: "", password: "" } })),
    }),
    {
      name: "admin-auth-storage",
    }
  )
);
