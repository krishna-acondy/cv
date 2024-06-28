import { Link, Stack, Typography } from "@mui/joy";

export const IFF = () => {
  return (
    <Stack gap={1} alignItems="flex-start">
      <Typography level="title-lg" textAlign="left">
        Volunteer Developer at Internet Freedom Foundation
      </Typography>
      <Typography level="body-sm" textAlign="left">
        Contributing to{" "}
        <Link href="https://internetfreedom.in/">
          internetfreedom.in
        </Link>{" "}
        and{" "}
        <Link href="https://patrakardefence.in/">
          patrakardefence.in
        </Link>
        .
      </Typography>
    </Stack>
  );
};
