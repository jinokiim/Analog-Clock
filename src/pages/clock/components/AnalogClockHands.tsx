import { HANDS } from '../const';
import { getDegree } from '../clock';
import { useState } from 'react';
import AnalogClockHand from './AnalogClockHand';
import useInterval from 'hooks/useInterval';

// -------------------------------------------------------------------------------------------

const AnalogClockHands = () => {
  const [degrees, setDegrees] = useState(getDegree);

  useInterval(() => {
    setDegrees(getDegree());
  }, 1000);

  return (
    <>
      <AnalogClockHand
        width={HANDS.HOUR.width}
        height={HANDS.HOUR.height}
        backgroundColor={HANDS.HOUR.backgroundColor}
        rotate={degrees.hourDegree}
      />
      <AnalogClockHand
        width={HANDS.MINUTE.width}
        height={HANDS.MINUTE.height}
        backgroundColor={HANDS.MINUTE.backgroundColor}
        rotate={degrees.minuteDegree}
      />
      <AnalogClockHand
        width={HANDS.SECOND.width}
        height={HANDS.SECOND.height}
        backgroundColor={HANDS.SECOND.backgroundColor}
        rotate={degrees.secondDegree}
      />
    </>
  );
};

export default AnalogClockHands;
