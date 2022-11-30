import { groupBy, uniqBy } from 'lodash';
import { BerlinEvent } from '../types/events';

export const defaultBerzirk = 'Alle';

export const getUnikBezirk = (data: BerlinEvent[]): string[] => [
  defaultBerzirk,
  ...uniqBy(data, 'bezirk').map((d) => d.bezirk),
];

export const getGroupedByBezirk = (
  data: BerlinEvent[]
): Record<string, BerlinEvent[]> => ({
  ...groupBy(data, 'bezirk'),
  Alle: data,
});

export const getGroupedById = (
  data: BerlinEvent[]
): Record<string, BerlinEvent> =>
  data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});
