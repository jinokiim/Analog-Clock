export const getDegree = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  // rotate 각도
  const hourDegree = hour * 30 + minute / 2;
  const minuteDegree = minute * 6 + second / 10;
  const secondDegree = second * 6;

  return { hourDegree, minuteDegree, secondDegree };
};
