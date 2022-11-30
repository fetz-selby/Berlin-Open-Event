import create from 'zustand';
import { BerlinEvent } from '../types/events';
import { defaultBerzirk } from '../utils/shapers';

interface State {
  data: BerlinEvent[];
  setData: (data: BerlinEvent[]) => void;
  bezirks: string[];
  setBezirks: (bezirks: string[]) => void;
  groupedByBezirk: Record<string, BerlinEvent[]>;
  setGroupedByBezirk: (groupedByBezirk: Record<string, BerlinEvent[]>) => void;
  groupedById: Record<string, BerlinEvent>;
  setGroupedById: (groupedById: Record<string, BerlinEvent>) => void;
  onEventClick: (id: string) => void;
  selectedEvent: BerlinEvent | null;
  bezirk: string;
  setBezirk: (bezirk: string) => void;
}

export const useStore = create<State>((set, get) => ({
  data: [],
  setData: (data) => set({ data }),
  bezirks: [],
  setBezirks: (bezirks) => set({ bezirks }),
  groupedByBezirk: {},
  setGroupedByBezirk: (groupedByBezirk) => set({ groupedByBezirk }),
  groupedById: {},
  setGroupedById: (groupedById) => set({ groupedById }),
  onEventClick: (id) => {
    const event = get().groupedById[id];
    set({ selectedEvent: event });
  },
  selectedEvent: null,
  bezirk: defaultBerzirk,
  setBezirk: (bezirk) => {
    set({ bezirk, data: get().groupedByBezirk[bezirk] });
  },
}));
