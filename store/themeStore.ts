import  { create } from 'zustand';
import {
  persist,
  combine
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useThemeStore = create(combine({
    theme: 'dark',
    toggleTheme: (theme: string) => {},
}, immer(persist((set) => ({
    theme: 'dark',
    toggleTheme: (theme: string) => set(({
        theme: theme === 'dark' ? 'light' : 'dark'
    })),
}), { name: 'themeStore' }))));
