import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Select({ navigation }) {
  const route = useRoute();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>What sport do you interest?</Text>
      <Text style={styles.desc}>You can choose more than one</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 59,
          flexWrap: "wrap",
        }}
      >
        <View>
          <View style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/soccer.png")}
            />
          </View>
          <Text style={styles.gametitle}>Soccer</Text>
        </View>

        <View>
          <View style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/ball.png")}
            />
          </View>
          <Text style={styles.gametitle}>Basketball</Text>
        </View>

        <View>
          <View style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/foot.png")}
            />
          </View>
          <Text style={styles.gametitle}>Football</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 59,
          flexWrap: "wrap",
        }}
      >
        <View>
          <View style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/base.png")}
            />
          </View>
          <Text style={styles.gametitle}>Baseball</Text>
        </View>

        <View>
          <View style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/tennis.png")}
            />
          </View>
          <Text style={styles.gametitle}>Tennis</Text>
        </View>

        <View>
          <View style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/volley.png")}
            />
          </View>
          <Text style={styles.gametitle}>Volleyball</Text>
        </View>
      </View>

      <View style={{ marginTop: 94, marginBottom: 51 }}>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#246BFD",
            height: 63,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16,
          }}
          onPress={() => navigation.navigate("Root")}
        >
          <Text style={styles.clickText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#181829",
            height: 63,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16,
            marginTop: 26,
          }}
          onPress={() => console.log(route)}
        >
          <Text style={styles.clickText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181829",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    paddingHorizontal: 28,
  },
  text: {
    fontSize: 45,
    color: "#FFFFFF",
    fontFamily: "SourceSemiBold",
    marginTop: 77,
    textAlign: "left",
    lineHeight: 60,
  },
  desc: {
    color: "#65656B",
    fontSize: 16,
    fontFamily: "Source",
    marginTop: 14,
    lineHeight: 20.11,
  },
  imgcircle: {
    width: 92,
    height: 92,
    borderRadius: 2200,
    backgroundColor: "#222232",
    alignItems: "center",
    justifyContent: "center",
  },
  gametitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "SourceSemiBold",
    marginTop: 6,
  },
  clickText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "SourceSemiBold",
    lineHeight: 20.11,
  },
});
