import ClockDiscs from './components/ClockDiscs';
import ClockHands from './components/ClockHands';
import ClockScale from './components/ClockScale';
import { Box } from '@mui/material';
//--------------------------------------------------

const Clock = () => {
  return (
    <Box sx={{ m: '50px auto', position: 'relative', width: '600px', height: '600px' }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          border: '1px solid black',
          borderRadius: '50%',
          backgroundColor: 'darkgray'
        }}
      />
      <ClockDiscs />
      <ClockScale />
      <ClockHands />
    </Box>
  );
};

export default Clock;
