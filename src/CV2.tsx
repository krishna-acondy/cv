import { Divider, Link, Stack, Typography } from "@mui/joy";
import Container from "@mui/joy/Container";
import { Section } from "./components/Section";
import { NIE } from "./education/NIE";
import { Blogger } from "./outside-work/Blogger";
import { IFF } from "./outside-work/IFF";
import { Newslaundry } from "./outside-work/Newslaundry";
import { GMF } from "./outside-work/GMF";
import { TUDelft } from "./education/TUDelft";

export const CV2 = () => {
  return (
    <Container sx={{ width: "100%", height: "100%", p: 2 }}>
      <Stack direction="row" gap={2}>
        <Stack width="50%">
          <Section title="Education">
            <TUDelft />
            <NIE />
          </Section>
          <Section title="Languages" sx={{ pt: 2 }}>
            <Stack gap={2} width="100%">
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  English
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Full professional proficiency
                </Typography>
              </Stack>
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Hindi
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Native or bilingual proficiency
                </Typography>
              </Stack>
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Telugu
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Native or bilingual proficiency
                </Typography>
              </Stack>
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Kannada
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Native or bilingual proficiency
                </Typography>
              </Stack>
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Dutch
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Limited proficiency
                </Typography>
              </Stack>
              <Divider sx={{ mt: 1 }} />
            </Stack>
          </Section>
        </Stack>
        <Stack width="50%">
          <Section title="Outside Work" >
            <Blogger />
            <IFF />
            <Newslaundry />
            <GMF />
            <Divider sx={{ mt: 1 }} />
          </Section>
          <Section title="Interests" sx={{ pt: 2 }}>
            <Stack gap={2} width="100%">
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Music
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Piano and harp player with a keen interest in minimalist and
                  modern classical music.
                </Typography>
              </Stack>
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Photography and Design
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Passionate about{" "}
                  <Link href="https://www.instagram.com/krishnachaitanya.a/">
                    street and travel photography
                  </Link>
                  , graphic design for web and print, and UI/UX design.
                </Typography>
              </Stack>
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Coding
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Clean code, design patterns, software architecture and tech
                  podcasts.
                </Typography>
              </Stack>
              <Stack
                gap={1}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography textAlign="left" level="title-lg">
                  Reading
                </Typography>
                <Typography textAlign="left" level="body-sm">
                  Fantasy, sci-fi and Indian fiction.
                </Typography>
              </Stack>
            </Stack>
          </Section>
          <Divider sx={{ mt: 2 }} />
        </Stack>
      </Stack>
    </Container>
  );
};
