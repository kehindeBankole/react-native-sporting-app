import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ZStack, Box, Heading, Center, NativeBaseProvider } from "native-base";
export default function Home() {
  const [state, setState] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.desc}>LiveScore</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            style={{ marginTop: 2 }}
            source={require("../assets/Search.png")}
          />
          <Image
            style={{ marginLeft: 28 }}
            source={require("../assets/notif2.png")}
          />
        </View>
      </View>

      <View
        // style={{
        //   backgroundColor: "red",
        //   height: 177,
        //   width: Dimensions.get("window").width - 50,
        // }}
        style={{ marginTop: 12 }}
      >
        <Image
          style={{ width: Dimensions.get("window").width - 50, height: 177 }}
          source={require("../assets/banner.png")}
        />
      </View>
      <ScrollView
        horizontal={true}
        style={{
          marginTop: 32,
          flexGrow: 0.1,
          // backgroundColor: "red",
        }}
        contentContainerStyle={{
          justifyContent: "space-between",
          width: `${2.2 * 100}%`,
        }}
        snapToAlignment="center"
        snapToInterval={100}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <TouchableOpacity
            style={{
              ...styles.imgcircle,
              backgroundColor: state ? "red" : "#222232",
            }}
            onPress={() => setState((prev) => !prev)}
          >
            <Image
              style={styles.stretch}
              source={require("../assets/soccer.png")}
            />
          </TouchableOpacity>
          <Text style={styles.gametitle}>Soccer</Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              ...styles.imgcircle,
              backgroundColor: state ? "red" : "#222232",
            }}
            onPress={() => setState((prev) => !prev)}
          >
            <Image
              style={styles.stretch}
              source={require("../assets/ball.png")}
            />
          </TouchableOpacity>
          <Text style={styles.gametitle}>Basketball</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/foot.png")}
            />
          </TouchableOpacity>
          <Text style={styles.gametitle}>Football</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/base.png")}
            />
          </TouchableOpacity>
          <Text style={styles.gametitle}>Baseball</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/tennis.png")}
            />
          </TouchableOpacity>
          <Text style={styles.gametitle}>Tennis</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.imgcircle}>
            <Image
              style={styles.stretch}
              source={require("../assets/volley.png")}
            />
          </TouchableOpacity>
          <Text style={styles.gametitle}>Volleyball</Text>
        </View>
      </ScrollView>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 24 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/spain.png")}
                  style={{ alignSelf: "center", marginRight: 12 }}
                />
                <View>
                  <Text style={styles.country}>La Liga</Text>
                  <Text style={styles.countrysub}>Spain</Text>
                </View>
              </View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Image source={require("../assets/arrowright.png")} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 68,
                marginTop: 14,
              }}
            >
              <View
                style={{
                  flex: 0.8,
                  backgroundColor: "#2B2B3D",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                  flexDirection: "row",
                  padding: 16,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.littlecircle}>
                    <Image
                      source={require("../assets/barcelona.png")}
                      // style={{ alignSelf: "center", marginRight: 12 }}
                    />
                  </View>
                  <View
                    style={{
                      ...styles.littlecircle,
                      zIndex: -1,
                      marginLeft: -5,
                    }}
                  >
                    <Image
                      source={require("../assets/realmadrid.png")}
                      // style={{ alignSelf: "center", marginRight: 12 }}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.vs}>Barcelona</Text>
                  <Text
                    style={{
                      ...styles.vs,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    2
                  </Text>
                </View>
                <Text style={styles.vs}>vs</Text>
                <View>
                  <Text style={styles.vs}>Real Madrid</Text>
                  <Text style={styles.vs}>5</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.2,
                  backgroundColor: "#222232",
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.vs}>HT</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/spain.png")}
                  style={{ alignSelf: "center", marginRight: 12 }}
                />
                <View>
                  <Text style={styles.country}>La Liga</Text>
                  <Text style={styles.countrysub}>Spain</Text>
                </View>
              </View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Image source={require("../assets/arrowright.png")} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 68,
                marginTop: 14,
              }}
            >
              <View
                style={{
                  flex: 0.8,
                  backgroundColor: "#2B2B3D",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                  flexDirection: "row",
                  padding: 16,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.littlecircle}>
                    <Image
                      source={require("../assets/barcelona.png")}
                      // style={{ alignSelf: "center", marginRight: 12 }}
                    />
                  </View>
                  <View
                    style={{
                      ...styles.littlecircle,
                      zIndex: -1,
                      marginLeft: -5,
                    }}
                  >
                    <Image
                      source={require("../assets/realmadrid.png")}
                      // style={{ alignSelf: "center", marginRight: 12 }}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.vs}>Barcelona</Text>
                  <Text
                    style={{
                      ...styles.vs,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    2
                  </Text>
                </View>
                <Text style={styles.vs}>vs</Text>
                <View>
                  <Text style={styles.vs}>Real Madrid</Text>
                  <Text style={styles.vs}>5</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.2,
                  backgroundColor: "#222232",
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.vs}>HT</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 24, paddingBottom: 110 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/spain.png")}
                  style={{ alignSelf: "center", marginRight: 12 }}
                />
                <View>
                  <Text style={styles.country}>La Liga</Text>
                  <Text style={styles.countrysub}>Spain</Text>
                </View>
              </View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Image source={require("../assets/arrowright.png")} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 68,
                marginTop: 14,
              }}
            >
              <View
                style={{
                  flex: 0.8,
                  backgroundColor: "#2B2B3D",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                  flexDirection: "row",
                  padding: 16,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.littlecircle}>
                    <Image
                      source={require("../assets/barcelona.png")}
                      // style={{ alignSelf: "center", marginRight: 12 }}
                    />
                  </View>
                  <View
                    style={{
                      ...styles.littlecircle,
                      zIndex: -1,
                      marginLeft: -5,
                    }}
                  >
                    <Image
                      source={require("../assets/realmadrid.png")}
                      // style={{ alignSelf: "center", marginRight: 12 }}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.vs}>Barcelona</Text>
                  <Text
                    style={{
                      ...styles.vs,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    2
                  </Text>
                </View>
                <Text style={styles.vs}>vs</Text>
                <View>
                  <Text style={styles.vs}>Real Madrid</Text>
                  <Text style={styles.vs}>5</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.2,
                  backgroundColor: "#222232",
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.vs}>HT</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181829",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    paddingHorizontal: 28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 52,
  },
  desc: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Source",
    lineHeight: 20.11,
    alignSelf: "flex-end",
    paddingTop: 2,
  },
  imgcircle: {
    width: 108,
    height: 115,
    borderRadius: 16,
    backgroundColor: "#222232",
    alignItems: "center",
    justifyContent: "center",
  },
  littlecircle: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: "#222232",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#2B2B3D",
  },
  gametitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "SourceSemiBold",
    marginTop: 6,
  },
  country: {
    color: "#FFFFFF",
    fontFamily: "SourceSemiBold",
    fontSize: 16,
  },
  countrysub: {
    color: "#AAAAAA",
    fontSize: 12,
    fontFamily: "Source",
  },
  vs: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Source",
    textAlign: "center",
  },
});
