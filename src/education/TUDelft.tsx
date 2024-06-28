import { Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const TUDelft = () => {
  return (
    <Item
      title="Master of Science in Computer Science"
      period="September 2012 - November 2014"
      company="TU Delft, The Netherlands"
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Specialisation in Web Information Systems - storage, retrieval and
            visualisation of large data sets.
          </Typography>
          <Typography textAlign="left">
            Summer internship at Philips Research in Eindhoven.
          </Typography>
        </Stack>
      }
    />
  );
};
