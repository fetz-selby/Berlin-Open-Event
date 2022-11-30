import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import React from 'react';
import EventRow from './EventRow';
import { useStore } from '../store';
import EventHeader from './EventHeader';
import Info from './Info';

const EventsList = () => {
  const data = useStore((state) => state.data);

  return (
    <>
      <Info />
      <EventHeader />
      <AutoSizer>
        {({ height, width }) => {
          return (
            <List
              height={height}
              itemCount={data.length}
              itemSize={65}
              width={width}
            >
              {EventRow}
            </List>
          );
        }}
      </AutoSizer>
    </>
  );
};

export default EventsList;
