import * as React from 'react';
import { Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material';
import { useStore } from '../store';
import { useMemo } from 'react';

const BezirkSelect = () => {
  const bezirks = useStore((state) => state.bezirks);
  const bezirk = useStore((state) => state.bezirk);
  const setBezirk = useStore((state) => state.setBezirk);

  console.log(`bezirks`, bezirks);

  const renderItems = useMemo(
    () =>
      bezirks.map((bezirk) => (
        <MenuItem key={bezirk} value={bezirk}>
          {bezirk}
        </MenuItem>
      )),
    [bezirks]
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="bezirks-label">Bezirk</InputLabel>
        <Select
          labelId="bezirks-label"
          id="bezirk-select"
          value={bezirk}
          label="Bezirk"
          onChange={(e) => setBezirk(e.target.value)}
        >
          {renderItems}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BezirkSelect;
