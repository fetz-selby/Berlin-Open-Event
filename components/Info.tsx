import { Box, Typography } from '@mui/material';
import { useStore } from '../store';

const Info = () => {
  const data = useStore((state) => state.data);
  return (
    <Box
      sx={{ padding: '0 10px', display: 'flex', justifyContent: 'flex-end' }}
    >
      <Typography
        sx={{ fontSize: '14px', fontStyle: 'italic', color: '#666666' }}
      >
        Total: {data.length}
      </Typography>
    </Box>
  );
};

export default Info;
