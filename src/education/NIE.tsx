import { Stack, Typography } from "@mui/joy";
import { Item } from "../components/Item";

export const NIE = () => {
  return (
    <Item
      title="Bachelor of Engineering in Computer Science and Engineering"
      period="July 2005 - June 2009"
      company="National Institute of Engineering, Mysore, India"
      description={
        <Stack justifyContent="flex-start" gap={1}>
          <Typography textAlign="left">
            Compiler construction, Automata theory, Algorithms, Data Structures, C, C++, Java, Web Development with the LAMP stack.
          </Typography>
          <Typography textAlign="left">
            Internship at L&T Infotech in Mysore.
          </Typography>
        </Stack>
      }
    />
  );
};
