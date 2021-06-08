import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  View,
  Button,
  Text,
  StyleSheet,
  Animated,
  Modal,
} from "react-native";
import { useDispatch } from "react-redux";
import photoActions from "../store/initialPhotoAction";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ModalPopup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false, 200));
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <View style="modal">
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

const SettingProfPhotoScreen = () => {
  const [userPhoto, setUserPhoto] = useState("");
  const [visible, setVisible] = useState(false);

  const [pickedImage, setPickedImage] = useState();
  // camera permissions here
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(image);
    setPickedImage(image.uri);
  };

  //   const dispatch = useDispatch();

  //   const savePhotoHandler = () => {
  //     dispatch(photoActions.addPhoto(userPhoto));
  //     props.navigation.goBack();
  //   };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Add your profile photo</Text>
        {!pickedImage ? (
          <Text>No image picked yet. </Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
        {/* <ImagePicker /> */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalPopup visible={visible}>
            <Text>Add a profile photo</Text>
            <View style={{ alignItems: "center" }}>
              <Button title="Take a Photo" onPress={takeImageHandler} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Button title="Choose from Photos" />
            </View>
            <View style={{ alignItems: "center" }}>
              <Button title="Cancel" onPress={() => setVisible(false)} />
            </View>
          </ModalPopup>
          <Button title="Add a Photo" onPress={() => setVisible(true)} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default SettingProfPhotoScreen;
