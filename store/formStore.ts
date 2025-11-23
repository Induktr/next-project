import { create } from 'zustand';
import { persist, combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Form } from '../lib/types';
import { useProductStore } from './productStore';

export const useFormStore = create(immer(persist(combine({
  form: {} as Form,
  setForm: (form: Form) => {},
}, (set) => ({
  form: {} as Form,
  setForm: (form: Form) => set((state) => {
    state.form = form;
    useProductStore.getState().filterProducts(useProductStore.getState().products, form.maxPrice, form.raiting);
  })
})), 
  { name: 'formStore' }
)));