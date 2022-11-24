export function dayTime({d, h, m, s}) {
  s -= 1;
  if (s < 0) {
    s = 59;
    m -= 1;
  }
  if (m < 0) {
    m = 59;
    h -= 1;
  }
  if (h < 0) {
    h = 23;
    d -= 1;
  }
  
  return {d, h, m, s}
}

export function numToStr(num) {
  const str = num.toString();
  if (str.length === 1) return "0" + str;
  return str;
}
