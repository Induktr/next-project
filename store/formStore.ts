import { create } from 'zustand';
import { persist, combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Form } from '../lib/types';
import { useProductStore } from './productStore';

export const useFormStore = create(immer(combine({
  form: {} as Form,
  setForm: (form: Form) => {},
}, (set) => ({
  form: {} as Form,
  setForm: (form: Form) => set(({
    form: form,
  }))
}))));