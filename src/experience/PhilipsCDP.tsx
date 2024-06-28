import { Link, Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const PhilipsCDP = () => {
  return (
    <Item
      title="Software Developer"
      period="September 2014 - May 2017"
      company="Philips - Connected Digital Platforms"
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Worked in early-stage prototyping and concept creation for the
            health tech, lighting and consumer lifestyle divisions within
            Philips.
          </Typography>
          <Typography textAlign="left">
            Involved in successful projects including{" "}
            <Link href="https://www.philips.co.uk/healthcare/product/HCNOCTN482/ecarecoordinator-clinical-dashboard-for-ambulatory-health">
              eCareCoordinator
            </Link>{" "}
            and{" "}
            <Link href="https://www.signify.com/en-gb/our-company/news/press-release-archive/2017/philips-lighting-unveils-latest-advertising-medium-th-carpet-you-walk-on">
              Luminous Carpets
            </Link>
            .
          </Typography>
          <Typography textAlign="left" fontWeight="600">
            Angular, TypeScript, C#, Ruby on Rails, JavaScript ES5/ES6,
            HTML/CSS, Android/Java, Salesforce
          </Typography>
        </Stack>
      }
    />
  );
};
