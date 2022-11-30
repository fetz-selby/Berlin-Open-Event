import { useEffect } from 'react';
import useSWR from 'swr';
import { BerlinEvent } from '../types/events';
import { fetcherAllData } from '../utils/fetcher';
import { createWorkerFactory, useWorker } from '@shopify/react-web-worker';
import { useStore } from '../store';
import AppLayout from '../components/AppLayout';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const createWorker = createWorkerFactory(() => import('../utils/shapers'));

const Landing = () => {
  const { data, error } = useSWR('/api/landing', fetcherAllData);
  const setBezirke = useStore((state) => state.setBezirks);
  const setGroupedByBezirk = useStore((state) => state.setGroupedByBezirk);
  const setData = useStore((state) => state.setData);
  const setGroupedById = useStore((state) => state.setGroupedById);

  /**
   * Leveraging the power of web workers to shape the data
   * in a performant way.
   * This intern reduces the time to render the data to the screen and improves the user experience
   * Also, the time complexity for fetching the data when an event is clicked and
   * a selection of a bezirk is reduced from O(n) to O(1).
   *
   */

  const worker = useWorker(createWorker);

  useEffect(() => {
    (async () => {
      const typeData = data as { index: BerlinEvent[] };
      if (typeData && typeData.index) {
        const bezirks = await worker.getUnikBezirk(typeData.index);
        const groupedByBezirk = await worker.getGroupedByBezirk(typeData.index);
        const groupedById = await worker.getGroupedById(typeData.index);

        setBezirke(bezirks);
        setGroupedByBezirk(groupedByBezirk);
        setData(typeData.index);
        setGroupedById(groupedById);
      }
    })();
  }, [worker, data, setBezirke, setGroupedByBezirk, setData, setGroupedById]);

  if (error)
    return (
      <ErrorMessage error={'Something unexpected happened. Please try again'} />
    );

  if (!data) return <Loading />;

  return <AppLayout />;
};

export default Landing;
