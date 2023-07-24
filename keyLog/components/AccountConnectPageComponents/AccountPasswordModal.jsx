import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
  Image,
  pinView,
} from "react-native";
import ReactNativePinView from "react-native-pin-view";
import { styles } from "../../pages/ExchangeSelectAccount/ExchangePage";
import Ellipse from "../../public/img/Ellipse.png";
import Vector from "../../public/img/Vector.png";

const AccountPasswordModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.submitButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pressBeforeTextStyle}>연결하기</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles3.modalBackground}>
          <View style={styles3.popup}>
            <View style={styles3.popupHeader}>
              <View style={styles3.popupHeaderTitle}>
                <Text style={styles3.popupHeaderText}>계좌 비밀번호 입력</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../../public/img/CloseButton.png")}
                    style={styles.button}
                  />
                </Pressable>
              </View>
              <View style={styles3.popupSubtitle}>
                <Text style={styles3.popupBank}>신한</Text>
                <Text>302-9556-4022-11</Text>
              </View>
            </View>

            <Pressable style={styles.submitButton}>
              <Text style={styles.pressBeforeTextStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AccountPasswordModal;

const styles3 = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 250,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 15,
    justifyContent: "space-between",
  },
  popupHeader: {
    // flex: "column",
  },
  popupHeaderTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  popupHeaderText: {
    color: "#191F29",
    fontSize: 16,
    fontWeight: "700",
  },
  popupBank: {
    marginRight: 10,
  },
  popupSubtitle: {
    marginTop: 10,
    flexDirection: "row",
    color: "#4E5968",
  },
  passwordSymbol: {
    justifyContent: "center",
    alignItems: "center",
    gap: "1.25rem",
    flexDirection: "row",
  },
  $1: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  numberPad: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "stretch",
    flexWrap: "wrap",
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  number: {
    width: "6.875rem",
    height: "3.75rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
    flexDirection: "row",
    padding: "0.625rem",
  },
  number12: {
    width: "6.875rem",
    height: "3.75rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
    flexDirection: "row",
    padding: "0.625rem",
  },
});
