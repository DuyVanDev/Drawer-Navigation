import * as React from "react";
import { Drawer } from "react-native-paper";

const CustomDrawer = ({ navigation }) => {
  const [active, setActive] = React.useState("");

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        icon="home"
        label="Home"
        active={active === "home"}
        onPress={() => {
          setActive("home");
          navigation.navigate("Home");
        }}
      />
      <Drawer.Item
        icon="star"
        label="About"
        active={active === "about"}
        onPress={() => {
          navigation.navigate("About");
          setActive("about");
        }}
      />
    </Drawer.Section>
  );
};

export default CustomDrawer;
