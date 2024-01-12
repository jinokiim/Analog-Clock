import { HANDS } from '../const';
import { getDegree } from '../clock';
import { useEffect, useState } from 'react';
import AnalogClockHand from './AnalogClockHand';
// import useInterval from 'hooks/useInterval';

// -------------------------------------------------------------------------------------------
interface AnalogClockHandsProps {
  date: any;
}
const AnalogClockHands = (props: AnalogClockHandsProps) => {
  const [degrees, setDegrees] = useState(getDegree(props.date));

  // useInterval(() => {
  //   setDegrees(getDegree());
  // }, 1000);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setDegrees(getDegree(currentDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
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
