// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import Landing from "./screens/Landing";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider, Box } from "native-base";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Select from "./screens/Select";
import Home from "./screens/Home";
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Test() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Test</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#246BFD",
        tabBarInactiveTintColor: "#65656B",
        title: false,
        tabBarStyle: {
          backgroundColor: "#222232",
          borderTopColor: "#222232",
          height: 96,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              {focused ? (
                <Text style={styles.desc}>Home</Text>
              ) : (
                <Image
                  style={styles.stretch}
                  source={require("./assets/Home.png")}
                />
              )}
              {focused && (
                <View
                  style={{
                    backgroundColor: "#246BFD",
                    width: 4,
                    height: 4,
                    borderRadius: 100,
                    alignSelf: "center",
                    marginTop: 8,
                  }}
                ></View>
              )}
            </View>
          ),
          tabBarVisible: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Notifications}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              {focused ? (
                <Text style={styles.desc}>Explore</Text>
              ) : (
                <Image
                  style={styles.stretch}
                  source={require("./assets/Discovery.png")}
                />
              )}
              {focused && (
                <View
                  style={{
                    backgroundColor: "#246BFD",
                    width: 4,
                    height: 4,
                    borderRadius: 100,
                    alignSelf: "center",
                    marginTop: 8,
                  }}
                ></View>
              )}
            </View>
          ),
          tabBarVisible: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Profile}
        options={{
          tabBarLabel: "Standings",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              {focused ? (
                <Text style={styles.desc}>Standings</Text>
              ) : (
                <Image
                  style={styles.stretch}
                  source={require("./assets/Chart.png")}
                />
              )}
              {focused && (
                <View
                  style={{
                    backgroundColor: "#246BFD",
                    width: 4,
                    height: 4,
                    borderRadius: 100,
                    alignSelf: "center",
                    marginTop: 8,
                  }}
                ></View>
              )}
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Test}
        options={{
          tabBarLabel: "Select",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              {focused ? (
                <Text style={styles.desc}>My Profile</Text>
              ) : (
                <Image
                  style={styles.stretch}
                  source={require("./assets/Profile.png")}
                />
              )}
              {focused && (
                <View
                  style={{
                    backgroundColor: "#246BFD",
                    width: 4,
                    height: 4,
                    borderRadius: 100,
                    alignSelf: "center",
                    marginTop: 8,
                  }}
                ></View>
              )}
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    Source: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    SourceSemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
    SourceLight: require("./assets/fonts/SourceSansPro-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider>
          <StatusBar animated={true} backgroundColor="#61dafb" />
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Root"
              component={MyTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Select"
              component={Select}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    color: "#246BFD",
    fontSize: 16,
    fontFamily: "Source",
    marginTop: 14,
    lineHeight: 20.11,
  },
});
