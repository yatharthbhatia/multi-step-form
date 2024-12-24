import { create } from "zustand";

export const useFormStore = create((set) => ({
  formData: {},
  updateForm: (key, value) =>
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    })),
}));
