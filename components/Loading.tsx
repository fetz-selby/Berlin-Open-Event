import { Stack, Typography } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <Stack p={5}>
      <Typography pb={3} fontSize={16} fontWeight={800}>
        Loading ....
      </Typography>
      <Skeleton height={100} count={7} />
    </Stack>
  );
};

export default Loading;
