import dayjs from "dayjs";

export function isInThePast(date: string) {
  const today = dayjs();
  return dayjs(date).diff(today) < 0;
}
