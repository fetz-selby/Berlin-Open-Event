import { Box, Typography } from '@mui/material';

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>
        {error}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
