import { Container } from "./styles";

export function VideoWindow() {
  return (
    <Container>
      <iframe
        src="https://www.youtube.com/embed/O_ioE-7upWo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  );
}
