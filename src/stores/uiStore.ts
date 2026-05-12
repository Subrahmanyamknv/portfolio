import { create } from "zustand";

interface UIState {
  isCommandMenuOpen: boolean;
  isMobileNavOpen: boolean;
  activeSection: string;
  scrollProgress: number;
  isLoading: boolean;
  setCommandMenuOpen: (open: boolean) => void;
  setMobileNavOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
  setScrollProgress: (progress: number) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCommandMenuOpen: false,
  isMobileNavOpen: false,
  activeSection: "hero",
  scrollProgress: 0,
  isLoading: true,
  setCommandMenuOpen: (open) => set({ isCommandMenuOpen: open }),
  setMobileNavOpen: (open) => set({ isMobileNavOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
