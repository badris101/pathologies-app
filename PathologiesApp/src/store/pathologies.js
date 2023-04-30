import {create} from 'zustand';

export const usePathologyStore = create(set => ({
  selectedPathology: '',
  selectedPathologyType: '',
  setSelectedPathology: value => set({selectedPathology: value}),
  setSelectedPathologyType: value => set({selectedPathologyType: value}),
}));
