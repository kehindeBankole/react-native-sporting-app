import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";

import { Actionsheet, useDisclose } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Landing({ navigation }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.stretch} source={require("../assets/mbappe.png")} />
      <Text style={styles.text}>Dicover all about sport</Text>
      <Text style={styles.desc}>
        Search millions of jobs and get the inside scoop on companies. Wait for
        what? Let’s get start it!
      </Text>
      <View style={{ marginTop: 45, marginBottom: 50, flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Select")}
        >
          <Text style={styles.clickText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinButton} onPress={onOpen}>
          <Text style={styles.clickText}>Sign Up</Text>
        </TouchableOpacity>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content
            style={{
              backgroundColor: "#222232",
              borderTopLeftRadius: 42,
              borderTopRightRadius: 42,
              paddingBottom: 51,
            }}
          >
            <View style={{ width: "100%", marginTop: 16, paddingLeft: 24 }}>
              <Text style={styles.welcome}>Welcome</Text>
            </View>

            <View
              style={{
                width: "100%",
                marginTop: 16,
                paddingRight: 24,
                justifyContent: "center",
              }}
            >
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Email"
                  keyboardType="alphanumeric"
                  placeholderTextColor="#65656B"
                />
                <MaterialCommunityIcons
                  name="email"
                  style={{ position: "absolute", left: 23, top: 31 }}
                  color={"#65656B"}
                  size={26}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Password"
                  keyboardType="alphanumeric"
                  placeholderTextColor="#65656B"
                />
                <MaterialCommunityIcons
                  name="key"
                  style={{ position: "absolute", left: 23, top: 31 }}
                  color={"#65656B"}
                  size={26}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    margin: 12,
                    backgroundColor: "#246BFD",
                    height: 63,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                  }}
                  onPress={() => navigation.navigate("Explore")}
                >
                  <Text style={styles.clickText}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.donthave}>
                Don’t have account?{" "}
                <Text style={{ color: "#246BFD" }}>Sign UP</Text>
              </Text>
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#181829",
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  stretch: {
    alignSelf: "center",
    marginTop: 64,
  },
  text: {
    fontSize: 50,
    color: "#FFFFFF",
    fontFamily: "SourceSemiBold",
    marginTop: 77,
    textAlign: "left",
    lineHeight: 50,
  },
  desc: {
    color: "#65656B",
    fontSize: 16,
    fontFamily: "Source",
    marginTop: 14,
    lineHeight: 20.11,
  },
  button: {
    backgroundColor: "#246BFD",
    width: 199,
    height: 63,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  clickText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "SourceSemiBold",
    lineHeight: 20.11,
  },
  signinButton: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 39,
  },
  welcome: {
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: "SourceSemiBold",
    lineHeight: 35.2,
    textAlign: "left",
  },
  input: {
    height: 64,
    margin: 12,
    borderWidth: 0,
    paddingLeft: 42,
    backgroundColor: "#181829",
    width: "100%",
    borderRadius: 16,
    color: "white",
    fontFamily: "SourceSemiBold",
    fontSize: 14,
    textTransform: "capitalize",
  },
  donthave: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Source",
    marginTop: 24,
  },
});
