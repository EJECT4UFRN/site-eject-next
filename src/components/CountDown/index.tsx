import { useCountDown } from "../../hooks/useCountDown";
import { Container, TimeNumbers } from "./styles";

interface CountdDownProps {
  startDate: string;
  endDate: string;
}

export function CountDown({ startDate, endDate }: CountdDownProps) {
  const {
    daysLeft,
    daysRight,
    hoursLeft,
    hoursRight,
    minutesLeft,
    minutesRight,
    secondsLeft,
    secondsRight,
  } = useCountDown({ startDate, endDate });

  return (
    <Container>
      <h3>FALTAM APENAS</h3>
      <div>
        <TimeNumbers>
          <span>{daysLeft}</span>
          <span className="last-span">{daysRight}</span>
          <p>Dias</p>
        </TimeNumbers>
        <TimeNumbers>
          <span>{hoursLeft}</span>
          <span className="last-span">{hoursRight}</span>
          <p>Horas</p>
        </TimeNumbers>
        <TimeNumbers>
          <span>{minutesLeft}</span>
          <span className="last-span">{minutesRight}</span>
          <p>Min</p>
        </TimeNumbers>
        <TimeNumbers>
          <span>{secondsLeft}</span>
          <span className="last-span">{secondsRight}</span>
          <p>Seg</p>
        </TimeNumbers>
      </div>
      <h3>PARA ENCERRAR AS INSCRIÇÕES</h3>
    </Container>
  );
}
