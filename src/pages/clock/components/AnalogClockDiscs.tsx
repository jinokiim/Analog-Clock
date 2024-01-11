import AnalogClockDisc from './AnalogClockDisc';
// -------------------------------------------------------------------------------------------

const AnalogClockDiscs = () => {
  return (
    <>
      <AnalogClockDisc size={'95%'} zIndex={1000} backgroundColor={'white'} />
      <AnalogClockDisc size={'90%'} zIndex={2000} backgroundColor={'white'} />
      <AnalogClockDisc size={'18px'} zIndex={5000} backgroundColor={'blue'} />
    </>
  );
};

export default AnalogClockDiscs;
