import ClockDisc from './ClockDisc';

// -------------------------------------------------------------------------------------------

const ClockDiscs = () => {
  return (
    <>
      <ClockDisc size={'95%'} zIndex={1000} backgroundColor={'white'} />
      <ClockDisc size={'90%'} zIndex={2000} backgroundColor={'white'} />
      <ClockDisc size={'18px'} zIndex={5000} backgroundColor={'blue'} />
    </>
  );
};

export default ClockDiscs;
