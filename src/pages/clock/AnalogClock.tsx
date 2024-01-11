import AnalogClockDiscs from './components/AnalogClockDiscs';
import AnalogClockHands from './components/AnalogClockHands';
import AnalogClockScale from './components/AnalogClockScale';
import { Box } from '@mui/material';
//--------------------------------------------------

const AnalogClock = () => {
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
      <AnalogClockDiscs />
      <AnalogClockScale />
      <AnalogClockHands />
      <Box
        sx={{
          position: 'absolute',
          // 초기 위치 설정
          bottom: 'calc(50% - 10px)',
          left: `calc(50% - 245px)`,
          width: `60px`,
          height: `20px`,
          backgroundColor: 'pink',
          borderRadius: '3px',
          transformOrigin: 'bottom',
          // 회전 각도 설정
          // transform: `rotate(30deg)`,
          zIndex: 2500
        }}
      />
    </Box>
  );
};

export default AnalogClock;
