import { Container } from "./styles";

export function VideoWindow() {
  return (
    <Container>
      <iframe
        src="https://www.youtube.com/embed/O_ioE-7upWo"
        title="YouTube video player"
        frameborder = "true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
