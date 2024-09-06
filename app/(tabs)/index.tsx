import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import Camera, { CameraRef } from "@/components/CameraTest";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const cameraRef = useRef<CameraRef>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      try {
        const uri = await cameraRef.current.takePicture();
        if (uri) {
          setPhotoUri(uri);
          console.log("Photo taken:", uri);
        }
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  const handleRetakePicture = () => {
    setPhotoUri(null);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.cameraContainer}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.capturedImage} />
        ) : (
          <Camera ref={cameraRef} />
        )}
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={photoUri ? handleRetakePicture : handleTakePicture}
        >
          <ThemedText>
            {photoUri ? "Retake Picture" : "Take Picture"}
          </ThemedText>
        </TouchableOpacity>
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  cameraContainer: {
    aspectRatio: 1,
    width: "100%",
    marginBottom: 20,
  },
  cameraButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 5,
  },
  capturedImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
