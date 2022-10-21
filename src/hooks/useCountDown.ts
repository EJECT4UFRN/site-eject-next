import { useEffect, useState } from "react";

import { isBefore, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";

type UseCountDownParam = {
  startDate: string;
  endDate: string;
};

export function useCountDown({ startDate, endDate }: UseCountDownParam) {
  const now = new Date().getTime();
  const countNow = new Date();

  const startTime = new Date(startDate);
  const endTime = new Date(endDate).getTime();

  const countDownDate = isBefore(startTime, countNow) ? endTime : 0;

  const distance = countDownDate - now;

  const [time, setTime] = useState<number>(countDownDate);
  const [isActive, setIsActive] = useState(true);

  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  const [daysLeft, daysRight] = String(days).padStart(2, "0").split("");
  const [hoursLeft, hoursRight] = String(hours).padStart(2, "0").split("");
  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(distance);
      }, 1000);
    } else {
      setIsActive(false);
      setTime(0);
    }
  }, [time, isActive]);

  return {
    distance,
    daysLeft,
    daysRight,
    hoursLeft,
    hoursRight,
    minutesLeft,
    minutesRight,
    secondsLeft,
    secondsRight,
  };
}
