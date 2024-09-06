import React, { forwardRef, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { CameraView } from "expo-camera";
import * as ImageManipulator from "expo-image-manipulator";

export type CameraRef = {
  takePicture: () => Promise<string | undefined>;
};

const Camera = forwardRef<CameraRef, {}>((props, ref) => {
  const cameraRef = useRef<CameraView>(null);

  React.useImperativeHandle(ref, () => ({
    takePicture: async () => {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();

        if (!photo) {
          return;
        }

        const manipulatedImage = await ImageManipulator.manipulateAsync(
          photo.uri,
          [{ resize: { width: 1092, height: 1092 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG },
        );

        return manipulatedImage.uri;
      }
    },
  }));

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} />
    </View>
  );
});

Camera.displayName = "Camera";

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
