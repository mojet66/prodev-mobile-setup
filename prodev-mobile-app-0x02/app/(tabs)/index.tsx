import { Image } from "expo-image";
import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ImageBackground
            source={require("@/assets/images/background-image.png")}
            style={styles.background}
            resizeMode="cover"
          >
            <View style={styles.textGroup}>
              <ThemedText style={styles.textLarge}>
                Find your favorite place here
              </ThemedText>
              <ThemedText style={styles.textSmall}>
                The best prices for over 2{" "}
              </ThemedText>
              <ThemedText style={styles.textSmall}>
                million properties worldwide
              </ThemedText>
            </View>
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <ThemedText style={{ ...styles.textSmall, color: "black" }}>
                  Join here
                </ThemedText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton}>
                <ThemedText style={styles.textSmall}>Sign In</ThemedText>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <ThemedText style={{ color: "white" }}>
                Continue to home
              </ThemedText>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});
