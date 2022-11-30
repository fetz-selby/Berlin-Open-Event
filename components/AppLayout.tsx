import { Box } from '@mui/material';
import DetailEventView from './DetailEventView';
import EventsList from './EventsList';
import BezirkSelect from './BezirkSelect';
import Title from './Title';

const AppLayout = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          top: 0,
          height: '120px',
          pt: '20px',
        }}
      >
        <Title />
        <BezirkSelect />
      </Box>
      <Box
        sx={{
          width: 'calc(100% - 400px)',
          height: 'calc(100% - 120px)',
          marginTop: '120px',
        }}
      >
        <EventsList />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '400px',
          height: 'calc(100% - 120px)',
        }}
      >
        <DetailEventView />
      </Box>
    </Box>
  );
};

export default AppLayout;
