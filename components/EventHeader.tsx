import { Box, Typography } from '@mui/material';

const EventHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid #efefef',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: '#bec3c9',
        color: '#666666',
        height: '50px',
      }}
    >
      <Typography sx={{ fontSize: '16px', width: '550px', padding: '0 10px' }}>
        Bezeichnung
      </Typography>
      <Typography sx={{ fontSize: '16px', width: '350px', padding: '0 10px' }}>
        Strasse
      </Typography>
      <Typography sx={{ fontSize: '16px' }}>PLZ</Typography>
    </Box>
  );
};

export default EventHeader;
