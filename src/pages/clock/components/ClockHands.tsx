import ClockHand from './ClockHand';
import { HANDS } from '../const';
import { getDegree } from '../clock';
import { useEffect, useState } from 'react';

// -------------------------------------------------------------------------------------------

const ClockHands = () => {
  const [degrees, setDegrees] = useState(getDegree);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDegrees(getDegree());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ClockHand
        width={HANDS.HOUR.width}
        height={HANDS.HOUR.height}
        backgroundColor={HANDS.HOUR.backgroundColor}
        rotate={degrees.hourDegree}
      />
      <ClockHand
        width={HANDS.MINUTE.width}
        height={HANDS.MINUTE.height}
        backgroundColor={HANDS.MINUTE.backgroundColor}
        rotate={degrees.minuteDegree}
      />
      <ClockHand
        width={HANDS.SECOND.width}
        height={HANDS.SECOND.height}
        backgroundColor={HANDS.SECOND.backgroundColor}
        rotate={degrees.secondDegree}
      />
    </>
  );
};

export default ClockHands;
