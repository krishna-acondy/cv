import { Link, Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const CattleEye = () => {
  return (
    <Item
      title="Lead Software Engineer"
      period="May 2021 - Present"
      company="CattleEye"
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Leading a team with end to end responsibility for the product -
            technical feasibility studies, design, implementation, release,
            promotion and feedback.
          </Typography>
          <Typography textAlign="left">
            Building CattleEye’s{" "}
            <Link href="https://cattleeye.com/">website</Link>, apps, APIs and
            integrations from scratch.
          </Typography>
          <Typography textAlign="left">
            Designing content for print, web, and{" "}
            <Link href="https://uk.linkedin.com/company/cattleeye">
              social media
            </Link>
            .
          </Typography>
          <Typography textAlign="left">
            Mentoring junior team members and interns.
          </Typography>
          <Typography textAlign="left" fontWeight="600">
            React, TypeScript/JavaScript, Node.js, SQL, AWS, GraphQL, Docker,
            GitHub Actions, Adobe Suite
          </Typography>
        </Stack>
      }
    />
  );
};
