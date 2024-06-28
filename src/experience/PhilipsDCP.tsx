import { Link, Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const PhilipsDCP = () => {
  return (
    <Item
      title="Senior Software Developer"
      period="June 2017 - November 2019"
      company="Philips - Digital & Computational Pathology"
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Spearheaded a large-scale overhaul of the existing apps,
            implementing a new design system and migrating to a modern web
            stack.
          </Typography>
          <Typography textAlign="left">
            Conceptualised and built an automated testing framework for the new{" "}
            <Link href="https://www.philips.co.uk/healthcare/education-resources/publications/hotspot/intellisite-tissue-mark">
              Philips TissueMark
            </Link>{" "}
            app.
          </Typography>
          <Typography textAlign="left">
            Conducted training sessions and workshops on Angular,
            TypeScript and testing.
          </Typography>
          <Typography textAlign="left" fontWeight="600">
            Angular, TypeScript, HTML/CSS, C#, .Net Core, Docker
          </Typography>
        </Stack>
      }
    />
  );
};
