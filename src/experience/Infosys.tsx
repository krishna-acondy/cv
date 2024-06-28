import { Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const Infosys = () => {
  return (
    <Item
      title="Systems Engineer, Systems Integration"
      period="July 2009 - July 2012"
      company="Infosys Technologies Ltd."
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Involved in a number of maintenance and new feature development
            projects for Fortune 500 clients in the banking and healthcare
            domains.
          </Typography>
          <Typography textAlign="left">
            Graduated from the Infosys Mysore training programme with a GPA of
            4.96/5.
          </Typography>
          <Typography textAlign="left" fontWeight="600">
            HTML/CSS, JavaScript, C#, ASP.Net
          </Typography>
        </Stack>
      }
    />
  );
};
