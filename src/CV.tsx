import { Divider, Stack } from "@mui/joy";
import Container from "@mui/joy/Container";
import { Header } from "./Header";
import { Section } from "./components/Section";
import { CattleEye } from "./experience/Cattleeye";
import { SASjs } from "./experience/SASjs";
import { ScreenCloud } from "./experience/ScreenCloud";
import { PhilipsDCP } from "./experience/PhilipsDCP";
import { PhilipsCDP } from "./experience/PhilipsCDP";
import { Infosys } from "./experience/Infosys";

export const CV = () => {
  return (
    <Container sx={{ width: "100%", height: "100%", p: 1 }}>
      <Stack gap={1}>
        <Header />
        <Divider sx={{ background: "var(--accent-color)", height: 4 }} />
        <Stack direction="row" gap={2} pt={1}>
          <Stack width="50%">
            <Section title="Work Experience">
              <CattleEye />
              <SASjs />
              <ScreenCloud />
            </Section>
          </Stack>
          <Stack width="50%" pt={5}>
            <Section>
              <PhilipsDCP />
              <PhilipsCDP />
              <Infosys />
            </Section>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
