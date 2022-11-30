import { useStore } from '../store';
import { Stack, Typography } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface RowProp {
  label: string;
  value: string;
}

const Row = ({ label, value }: RowProp) => (
  <Stack pb={2}>
    <Typography
      sx={{ fontSize: '12px', fontStyle: 'italic', color: '#666666' }}
    >
      {label}
    </Typography>
    <Typography sx={{ fontSize: '14px', color: '#333333' }}>
      {value.length ? value : '---'}
    </Typography>
  </Stack>
);

const EmptyStateView = () => (
  <Stack px={5}>
    <Typography
      pb={3}
      color="#999999"
      fontSize={16}
      fontWeight={400}
      fontStyle="italic"
    >
      Empty View
    </Typography>
    <Skeleton height={730} count={1} />
  </Stack>
);

const DetailEventView = () => {
  const selectedEvent = useStore((state) => state.selectedEvent);
  if (!selectedEvent) return <EmptyStateView />;

  const {
    id,
    bemerkungen,
    bezirk,
    bezeichnung,
    strasse,
    plz,
    tage,
    zeiten,
    betreiber,
    email,
    www,
    rss_titel,
  } = selectedEvent;

  return (
    <Stack px={5}>
      <h5>Detail</h5>
      <Row label="id" value={id}></Row>
      <Row label="bemerkungen" value={bemerkungen}></Row>
      <Row label="bezirk" value={bezirk}></Row>
      <Row label="bezeichnung" value={bezeichnung}></Row>
      <Row label="strasse" value={strasse}></Row>
      <Row label="plz" value={plz}></Row>
      <Row label="tage" value={tage}></Row>
      <Row label="zeiten" value={zeiten}></Row>
      <Row label="betreiber" value={betreiber}></Row>
      <Row label="email" value={email}></Row>
      <Row label="www" value={www}></Row>
      <Row label="rss_titel" value={rss_titel}></Row>
    </Stack>
  );
};

export default DetailEventView;
