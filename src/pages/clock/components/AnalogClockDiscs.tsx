import { CLOCK_COLORS } from 'theme/palette';
import AnalogClockDisc from './AnalogClockDisc';
// -------------------------------------------------------------------------------------------

const AnalogClockDiscs = () => {
  return (
    <>
      <AnalogClockDisc size={'95%'} zIndex={1000} backgroundColor={CLOCK_COLORS.white} />
      <AnalogClockDisc size={'90%'} zIndex={2000} backgroundColor={CLOCK_COLORS.white} />
      <AnalogClockDisc size={'18px'} zIndex={5000} backgroundColor={CLOCK_COLORS.blue} />
    </>
  );
};

export default AnalogClockDiscs;
