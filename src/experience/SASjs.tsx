import { Link, Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const SASjs = () => {
  return (
    <Item
      title="Lead Developer (part-time)"
      period="March 2020 - June 2022"
      company="SASjs"
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Set up an{" "}
            <Link href="https://github.com/sasjs">open-source ecosystem</Link>{" "}
            for SAS devops, which now has 250+ stars on GitHub.
          </Typography>
          <Typography textAlign="left">
            Built developer tools including a CLI, VSCode extension, linter, multiple
            TypeScript libraries and web apps with a globally distributed team of
            contributors.
          </Typography>
          <Typography textAlign="left">
            Presented the SASjs framework at{" "}
            <Link href="https://communities.sas.com/t5/SAS-Global-Forum-Proceedings/Building-and-Deploying-Web-Apps-With-SASjs-CLI/ta-p/733564">
              SAS Global Forum 2021
            </Link>
            .
          </Typography>
          <Typography textAlign="left" fontWeight="600">
            React, Angular, TypeScript/JavaScript, Node.js, SAS, GitHub Actions,
            Docker
          </Typography>
        </Stack>
      }
    />
  );
};
