import "react-native-gesture-handler";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PrivacyPolicy from "./app/components/PrivacyPolicy";
import TermsAndConditions from "./app/components/TermsAndConditions";
import Home from "./app/home_components/Home";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginPage from "./app/login_component/LoginPage";
import WelcomeScreen from "./app/login_component/WelcomePage";
import Faq from "./app/components/Faq";
import HelpScreen from "./app/components/HelpScreen";
import Subscription from "./app/components/Subscription";
import SignUp from "./app/login_component/SignUp";
import MyAccount from "./app/components/MyAccount";
import CustomisableAlert, {
  showAlert,
  closeAlert,
} from "react-native-customisable-alert";
import Discover from "./app/discover_components/Discover";
import SupportCenter from "./app/components/SupportCenter";
import OTPScreen from "./app/login_component/OTPVerify";
import Skills from "./app/discover_components/Skills";
import SubCategory from "./app/discover_components/SubCategory";
import Notification from "./app/notification_components/Notification";
import CreateOrResetMpin from "./app/login_component/CreateOrResetMpin";
import AwesomeSplashScreen from "./app/login_component/AwesomeSplashScreen";
import SubscriptionPackageSummary from "./app/components/SubscriptionPackageSummary";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const backButton = (navigation) => (
  <Ionicons
    name="chevron-back-circle-outline"
    size={30}
    color="#fff"
    onPress={() => navigation.goBack()}
    style={{ marginLeft: 10 }}
  />
);

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerActiveTintColor: "#27222B",
        gestureEnabled: false,
        drawerStyle: {
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          marginTop: "6%",
          marginBottom: "2%",
          backgroundColor: "#27222B",
          width: 283,
        },
        headerStyle: {
          backgroundColor: "#181C24",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 23,
        },
        headerTitleAlign: "center",
        headerLeft: () => backButton(navigation),
      })}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            color: "#CECECE",
            fontFamily: "raleway_bold",
            fontSize: 17,
            marginLeft: -14,
          },
          drawerIcon: () => (
            <Octicons
              name="home"
              size={20}
              color="#CECECE"
              style={{ paddingLeft: 12 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notification}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            color: "#CECECE",
            fontFamily: "raleway_bold",
            fontSize: 17,
            marginLeft: -14,
          },
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#CECECE"
              style={{ paddingLeft: 10 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="My Account"
        component={MyAccount}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            color: "#CECECE",
            fontFamily: "raleway_bold",
            fontSize: 17,
            marginLeft: -14,
          },
          drawerIcon: () => (
            <MaterialIcons
              name="login"
              size={22}
              color="#CECECE"
              style={{ paddingLeft: 10 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Reset MPIN"
        component={Home}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            color: "#CECECE",
            fontFamily: "raleway_bold",
            fontSize: 17,
            marginLeft: -14,
          },
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="arrow-u-left-top"
              size={22}
              color="#CECECE"
              style={{ paddingLeft: 10 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerShown: true,
          drawerLabelStyle: {
            color: "#CECECE",
            fontFamily: "raleway_bold",
            fontSize: 17,
            marginLeft: -14,
          },
          drawerIcon: () => (
            <Ionicons
              name="help-circle-outline"
              size={22}
              color="#CECECE"
              style={{ paddingLeft: 10 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Subscription"
        component={Subscription}
        options={{
          headerShown: true,
          drawerLabelStyle: {
            color: "#CECECE",
            fontFamily: "raleway_bold",
            fontSize: 17,
            marginLeft: -14,
          },
          drawerIcon: () => (
            <Ionicons
              name="help-circle-outline"
              size={22}
              color="#CECECE"
              style={{ paddingLeft: 10 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  const [fontsLoaded] = useFonts({
    gilroy_regular: require("./assets/fonts/gilroy_regular.ttf"),
    raleway_bold: require("./assets/fonts/raleway_bold.ttf"),
    raleway_medium: require("./assets/fonts/raleway_medium.ttf"),
    raleway_semibold: require("./assets/fonts/raleway_semibold.ttf"),
    raleway: require("./assets/fonts/raleway.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#2b2b2b"
        barStyle="light-content"
        style="light"
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#181A20",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: "raleway_bold",
            },
            headerTitleAlign: "center",
            headerLeft: () => backButton(navigation),
          })}
        >
          <Stack.Screen
            name="Welcome Page"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="CreateOrResetMpin" component={CreateOrResetMpin} options={{ headerShown: false, headerTitle: "" }} />
          <Stack.Screen name="AwesomeSplashScreen" component={AwesomeSplashScreen}  options={{ headerShown: false, headerTitle: "" }} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="Privacy" component={PrivacyPolicy} />
          <Stack.Screen name="Terms" component={TermsAndConditions} />
          <Stack.Screen name="FAQ" component={Faq} />
          <Stack.Screen name="Support" component={SupportCenter} />
          <Stack.Screen name="SubscriptionPackageSummary" component={SubscriptionPackageSummary} options={{ headerShown: false }} />
          <Stack.Screen
            name="Discover"
            component={Discover}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Skills" component={Skills} options={{ headerShown: false }} />
          <Stack.Screen name="SubCategory" component={SubCategory} options={{ headerShown: false }} />
          <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <CustomisableAlert />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyle: {
    backgroundColor: "grey",
    borderRadius: 10,
    width: 250,
  },
  drawerItemLabel: {
    color: "#FFFFFF",
  },
});

export default App;
