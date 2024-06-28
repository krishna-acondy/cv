import { Link, Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const ScreenCloud = () => {
  return (
    <Item
      title="Senior Frontend Engineer, Apps"
      period="December 2019 - March 2021"
      company="ScreenCloud"
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Led project teams working on ScreenCloud's{" "}
            <Link href="https://screencloud.com/apps">apps</Link>, integrating
            with different third party APIs, collaborating with
            stakeholders from across product, design, sales, marketing and customer success.
          </Typography>
          <Typography textAlign="left">
            Built an interactive{" "}
            <Link href="https://screencloud.com/apps/live-streams">
              live streaming app
            </Link>{" "}
            using React and AWS Interactive Video Service.
          </Typography>
          <Typography textAlign="left">
            Involved in the hiring process, conducting interviews and in various
            diversity and inclusion initiatives.
          </Typography>
          <Typography textAlign="left" fontWeight="600">
            React, TypeScript/JavaScript, Node.js, Express, Golang, AWS,
            GraphQL, Docker, GitHub Actions
          </Typography>
        </Stack>
      }
    />
  );
};
