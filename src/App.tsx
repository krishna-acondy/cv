import "@fontsource-variable/source-sans-3";
import "./App.css";
import { CV } from "./CV";
import { Stack } from "@mui/joy";
import { CV2 } from "./CV2";

function App() {
  return (
    <Stack>
      <CV />
      <CV2 />
    </Stack>
  );
}

export default App;
