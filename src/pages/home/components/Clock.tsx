import { Box } from '@mui/material';
//--------------------------------------------------

const Clock = () => {
  return (
    <Box
      className="container"
      sx={{ width: 600, height: 700, backgroundColor: 'white', borderRadius: '60px' }}
    >
      <Box
        sx={{
          m: '0 auto',
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: '10px solid gray',
          position: 'relative'
        }}
      >
        {/* 시침 */}
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: 'black',
            width: '10px',
            height: '140px',
            // 초기 위치 설정
            top: 'calc(50% - 140px)',
            left: 'calc(50% - 10px)',
            transformOrigin: 'bottom',
            // 회전 각도 설정
            transform: 'rotate(90deg)'
          }}
        ></Box>
        {/* 분침 */}
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: 'black',
            width: '7px',
            height: '190px',
            // 초기 위치 설정
            top: 'calc(50% - 190px)',
            left: 'calc(50% - 7px)',
            transformOrigin: 'bottom',
            // 회전 각도 설정
            transform: 'rotate(45deg)'
          }}
        ></Box>
        {/* 초침 */}
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: 'red',
            width: '3px',
            height: '190px',
            // 초기 위치 설정
            top: 'calc(50% - 190px)',
            left: 'calc(50% - 3px)',
            transformOrigin: 'bottom',
            // 회전 각도 설정
            transform: 'rotate(280deg)'
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Clock;
