// 시간 => 시간, 분, 초 degree return
export const getDegree = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  // rotate 각도
  const hourDegree = hour * 30 + minute / 2;
  const minuteDegree = minute * 6 + second / 10;
  const secondDegree = second * 6;

  return { hourDegree, minuteDegree, secondDegree };
};

// tooltip에 맞게 시간 format 조정
export const getFormattedTime = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${hour}시 ${minute}분 ${second}초 `;
};
