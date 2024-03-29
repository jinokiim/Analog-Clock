import { HANDS } from '../const';
import { getDegree } from '../clock';
import { useEffect, useState } from 'react';
import AnalogClockHand from './AnalogClockHand';
// import useInterval from 'hooks/useInterval';

// -------------------------------------------------------------------------------------------

const AnalogClockHands = () => {
  const [degrees, setDegrees] = useState({ hourDegree: 0, minuteDegree: 0, secondDegree: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setDegrees(getDegree(currentDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {/* 시침 */}
      <AnalogClockHand
        width={HANDS.HOUR.width}
        height={HANDS.HOUR.height}
        backgroundColor={HANDS.HOUR.backgroundColor}
        rotate={degrees.hourDegree}
      />
      {/* 분침 */}
      <AnalogClockHand
        width={HANDS.MINUTE.width}
        height={HANDS.MINUTE.height}
        backgroundColor={HANDS.MINUTE.backgroundColor}
        rotate={degrees.minuteDegree}
      />
      {/* 초침 */}
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
