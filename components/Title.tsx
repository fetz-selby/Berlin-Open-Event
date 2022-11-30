import { Box, Typography } from '@mui/material';

const Title = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
        Berlin Event
      </Typography>
    </Box>
  );
};

export default Title;
