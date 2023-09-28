import { Appbar, Menu, Divider } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { useState } from "react";

const CustomAppBar = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  console.log(visible);
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          onDismiss={closeMenu}
          visible={visible}
          anchor={<Appbar.Action onPress={openMenu} icon="dots-vertical" />}
        >
          <Menu.Item
            onPress={() => navigation.navigate("About")}
            title="About"
          />
          <Divider />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

export default CustomAppBar;
