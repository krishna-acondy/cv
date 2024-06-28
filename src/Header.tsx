import { Stack, Typography } from "@mui/joy";
import { ContactItem } from "./components/ContactItem";

export const Header = () => {
  return (
    <Stack gap={0.5} py={1}>
      <Typography
        level="h1"
        sx={{
          marginBlock: 0,
          fontFamily: "var(--display-font)",
          fontSize: 48,
          lineHeight: "48px",
          color: "var(--section-header-color)",
        }}
      >
        Krishna Acondy
      </Typography>
      <Typography
        level="h3"
        sx={{ marginBlock: 0, fontFamily: "var(--display-font)" }}
      >
        Lead Software Engineer
      </Typography>
      <Typography level="body-lg" sx={{ marginBlock: 0 }}>
        Experienced, detail-oriented technical leader with a passion for
        engineering and an eye for design
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        pt={0.5}
      >
        <ContactItem
          value="41 Glengoland Parade, Belfast BT17 0JF"
          type="address"
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <ContactItem value="+447741016084" type="phone" />
        <ContactItem value="krishna.acondy@gmail.com" type="email" />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <ContactItem value="https://krishna-acondy.io" type="website" />
        <ContactItem value="krishna-acondy" type="github" />
        <ContactItem value="krishna-acondy" type="linkedin" />
      </Stack>
    </Stack>
  );
};
