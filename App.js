import 'react-native-gesture-handler';
import Home from "./components/Home";
import About from "./components/About";
import { NavigationContainer } from "@react-navigation/native";
import { Appbar, PaperProvider, Text } from "react-native-paper";
import CustomDrawer from "./components/CustomDrawer";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View } from "react-native-web";
const Drawer = createDrawerNavigator();

export default function App() {

  return (
    // <View style={{flex: 1}}>
    //   <Text>asd</Text>
    // </View>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
