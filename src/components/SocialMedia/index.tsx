import { Container } from "./styles";

import { Face, Insta, Linkedin } from "./CustomSVG";

interface SocialMediasProps {
  socialMedias: {
    facebook: string;
    instagram: string;
    linkedin: string;
  }[];
}

export function SocialMedias({ socialMedias }: SocialMediasProps) {
  return (
    <Container>
      <Insta
        linkApi={socialMedias[0].instagram}
        colorPath="#0678BE"
        colorHoverPath="#FFF"
      />
      <Face
        linkApi={socialMedias[0].facebook}
        colorPath="#0678BE"
        colorHoverPath="#FFF"
      />
      <Linkedin
        linkApi={socialMedias[0].linkedin}
        colorPath="#0678BE"
        colorHoverPath="#FFF"
      />
    </Container>
  );
}
