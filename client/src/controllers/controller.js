export const changeToStringDate = (nowDate) => {
  const paddinZero = (str) => {
    const current = String(str);
    if (current.length === 2) {
      return current;
    } else {
      return `0${current}`;
    }
  };
  const year = nowDate.getFullYear();
  const month = paddinZero(nowDate.getMonth() + 1);
  const day = paddinZero(nowDate.getDate());
  const hours = paddinZero(nowDate.getHours());
  const min = paddinZero(nowDate.getMinutes());
  const sec = paddinZero(nowDate.getSeconds());
  return `${year}-${month}-${day} ${hours}:${min}:${sec}`;
};
