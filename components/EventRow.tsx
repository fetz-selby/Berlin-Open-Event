import { useStore } from '../store';
import { Box, Typography } from '@mui/material';
import { memo } from 'react';

interface EventRowProps {
  index: number;
  style: React.CSSProperties;
}

const Row = ({ index, style }: EventRowProps) => {
  const data = useStore((state) => state.data);
  const onEventClick = useStore((state) => state.onEventClick);

  const event = data[index];
  if (!event) return null;

  const { id, bezeichnung, plz, strasse } = data[index];

  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid #efefef',
        alignItems: 'center',
        cursor: 'pointer',
        ...style,
      }}
      onClick={() => onEventClick(id)}
    >
      <Typography sx={{ fontSize: '16px', width: '550px', padding: '0 10px' }}>
        {bezeichnung}
      </Typography>
      <Typography sx={{ fontSize: '16px', width: '350px', padding: '0 10px' }}>
        {strasse}
      </Typography>
      <Typography sx={{ fontSize: '16px' }}>{plz}</Typography>
    </Box>
  );
};

const EventRow = memo(Row);

export default EventRow;
