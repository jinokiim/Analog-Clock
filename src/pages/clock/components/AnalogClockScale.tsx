import { Box } from '@mui/material';
import { CLOCK_COLORS } from 'theme/palette';

// -------------------------------------------------------------------------------------------

const AnalogClockScale = () => {
  const scales = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <>
      {scales.map((scale) => (
        <Box
          key={scale}
          sx={{
            position: 'absolute',
            top: scale % 5 === 0 ? `calc(50% - 2.5px)` : `calc(50% - 0.5px)`,
            width: '600px',
            height: scale % 5 === 0 ? '5px' : '1px',
            backgroundColor: scale % 5 === 0 ? CLOCK_COLORS.black : CLOCK_COLORS.gray,
            transform: `rotate(${6 * scale}deg)`,
            zIndex: scale % 5 === 0 ? 1500 : 500
          }}
        />
      ))}
    </>
  );
};

export default AnalogClockScale;
