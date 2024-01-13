import AnalogClockDiscs from './components/AnalogClockDiscs';
import AnalogClockHands from './components/AnalogClockHands';
import AnalogClockScale from './components/AnalogClockScale';
import { Box } from '@mui/material';
import useTooltip from 'hooks/useTooltips';
import { MouseEvent, useEffect, useState } from 'react';
import Tooltip from 'components/tooltip/Tooltip';
import { getFormattedTime } from './clock';
import { CLOCK_COLORS } from 'theme/palette';

//--------------------------------------------------

const INIT_TIME_STATE = '00시 00분 00초';

const AnalogClock = () => {
  const { isVisible, show, hide } = useTooltip();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeState, setTimeState] = useState<string>(INIT_TIME_STATE);

  const showTooltip = () => {
    show();
  };
  const hideTooltip = () => {
    hide();
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // setTimeout() => setInterval() 사용
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setTimeState(getFormattedTime(currentDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Box
        sx={{
          m: '50px auto',
          position: 'relative',
          width: '600px',
          height: '600px',
          borderRadius: '50%'
        }}
        onMouseMove={(e) => {
          !isVisible && showTooltip();
          handleMouseMove(e);
        }}
        onMouseLeave={hideTooltip}
      >
        {isVisible && <Tooltip time={timeState} mousePosition={mousePosition} />}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            border: '1px solid black',
            borderRadius: '50%',
            backgroundColor: CLOCK_COLORS.darkGray
          }}
        />
        {/* 시계 판 */}
        <AnalogClockDiscs />
        {/* 시계 눈금 */}
        <AnalogClockScale />
        {/* 시계 바늘 */}
        <AnalogClockHands />
      </Box>
    </>
  );
};

export default AnalogClock;
