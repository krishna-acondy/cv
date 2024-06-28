import { Link, Stack, Typography } from "@mui/joy";

export const Blogger = () => {
  return (
    <Stack gap={1} alignItems="flex-start">
      <Typography level="title-lg" textAlign="left">
        Tech Blogger
      </Typography>
      <Typography level="body-sm" textAlign="left">
        Tutorials and articles published on{" "}
        <Link href="https://medium.com/@krishna.acondy">Medium</Link> and{" "}
        <Link href="https://www.newline.co/@krishna">Newline</Link>.
      </Typography>
    </Stack>
  );
};
