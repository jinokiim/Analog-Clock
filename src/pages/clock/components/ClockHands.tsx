import ClockHand from './ClockHand';
import { HANDS } from '../const';

// -------------------------------------------------------------------------------------------

const ClockHands = () => {
  return (
    <>
      <ClockHand
        width={HANDS.HOUR.width}
        height={HANDS.HOUR.height}
        backgroundColor={HANDS.HOUR.backgroundColor}
        rotate={90}
      />
      <ClockHand
        width={HANDS.MINUTE.width}
        height={HANDS.MINUTE.height}
        backgroundColor={HANDS.MINUTE.backgroundColor}
        rotate={180}
      />
      <ClockHand
        width={HANDS.SECOND.width}
        height={HANDS.SECOND.height}
        backgroundColor={HANDS.SECOND.backgroundColor}
        rotate={230}
      />
    </>
  );
};

export default ClockHands;
