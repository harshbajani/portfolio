import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio.
      </SectionTitle>
      <SectionText>
        As a skilled and passionate website developer, I consistently strive to
        create engaging and user-friendly digital experiences that combine
        elegant design with seamless functionality, catering to the unique needs
        of each client
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
