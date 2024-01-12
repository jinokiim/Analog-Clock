import { Box, Typography } from '@mui/material';
import { CLOCK_COLORS } from 'theme/palette';

// -------------------------------------------------------------------------------------------
interface ClockDiscProps {
  time: string;
  mousePosition: { x: number; y: number };
}
const Tooltip = (props: ClockDiscProps) => {
  return (
    <>
      <Box
        sx={{
          px: '10px',
          py: '4px',
          borderRadius: '4px',
          position: 'fixed',
          left: props.mousePosition.x + 10,
          top: props.mousePosition.y - 30,
          pointer: 'default',
          zIndex: 9000,
          backgroundColor: CLOCK_COLORS.gray
        }}
      >
        <Typography sx={{ fontSize: '16px' }}>{props.time}</Typography>
      </Box>
    </>
  );
};

export default Tooltip;
