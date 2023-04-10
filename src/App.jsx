import { Button } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      {/*<Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
  </Typography>*/}
      <Button
        variant="contained"
        sx={{ backgroundColor: "skyblue", color: "#888", margin: 5 }}
      >
        My Unique Button
      </Button>
    </div>
  );
}

export default App;
