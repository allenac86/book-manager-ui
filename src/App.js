import "./App.css";
import Footer from "./footer/Footer";
import {
  Button,
  Container,
  Tab,
  Tabs,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { Favorite, HeartBroken } from "@mui/icons-material";

function App() {
  return (
    <Container>
      <Tabs centered>
        <Tab label="All Books" />
        <Tab label="item2" />
        <Tab label="item3" />
      </Tabs>
      <Button variant="contained">Hello, World!</Button>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Dislikes" icon={<HeartBroken />} />
      </BottomNavigation>
      <Footer />
    </Container>
  );
}

export default App;
