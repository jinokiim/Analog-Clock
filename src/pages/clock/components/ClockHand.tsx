import { Box } from '@mui/material';

// -------------------------------------------------------------------------------------------
interface ClockDiscProps {
  width: string;
  height: string;
  backgroundColor: string;
  rotate: number;
}
const ClockHand = (props: ClockDiscProps) => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          // 초기 위치 설정
          bottom: 'calc(50%)',
          left: `calc(50% - ${Number(props.width) / 2}px)`,
          width: `${props.width}px`,
          height: `${props.height}px`,
          backgroundColor: props.backgroundColor,
          borderRadius: '10px',
          transformOrigin: 'bottom',
          // 회전 각도 설정
          transform: `rotate(${props.rotate}deg)`,
          zIndex: 3000
        }}
      />
    </>
  );
};

export default ClockHand;
