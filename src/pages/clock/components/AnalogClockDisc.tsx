import { Box } from '@mui/material';

// -------------------------------------------------------------------------------------------
interface ClockDiscProps {
  size: string;
  zIndex: number;
  backgroundColor: string;
}
const AnalogClockDisc = (props: ClockDiscProps) => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: props.size,
          height: props.size,
          backgroundColor: props.backgroundColor,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: props.zIndex
        }}
      />
    </>
  );
};

export default AnalogClockDisc;
