import {
  StyleSheet,
  View,
  Text,
  navigation,
  Pressable,
  Modal,
  Image,
  FlatList,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../../components/Header/DeleteHeader";
import Ellipse from "../../assets/SignUp/Ellipse.svg";
import Vector from "../../assets/accountImg/Vector.png";
import AccountPasswordSymbol from "../../components/AccountConnectPageComponents/AccountPasswordSymbol";
import AccountPWNumberPad from "../../components/AccountConnectPageComponents/AccountPWNumberPad";

export const AccountConnectPage = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("1234"); //계좌 비밀번호 받아오기
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [alertInconsistencyPassword, setAlertInconsistencyPassword] =
    useState(false);

  const renderItem = ({ item }) => {
    const isSelected = item.key === selectedItem;

    return (
      <Pressable onPress={() => setSelectedItem(item.key)}>
        <View style={[styles.accountitem, isSelected && styles.selectedItem]}>
          <Text
            style={(styles.listtextBefore, isSelected && styles.listtextAfter)}
          >
            {item.key}
          </Text>
          {isSelected && (
            <Image
              source={require("../../assets/accountImg/check.png")}
              style={{ marginRight: 20 }}
              resizeMode="contain"
              visible=""
            />
          )}
        </View>
      </Pressable>
    );
  };

  const handleNumPress = (num) => {
    if (alertInconsistencyPassword) {
      resetPasswordProcess();
      setAlertInconsistencyPassword(false);
    }

    if (password.length < 4) {
      setPassword(password + num);
    }
  };

  const handleBackspacePress = () => {
    setPassword(password.slice(0, -1));
  };

  const resetPasswordProcess = () => {
    setIsPasswordMismatch(false);
    setPassword("");
  };

  useEffect(() => {
    console.log("password state", password);

    if (password.length === 4) {
      if (password === confirmPassword) {
        console.log("Passwords match");
        setIsPasswordMismatch(false);
        navigation.replace("MainPage");
      } else {
        console.log("Passwords do not match");
        setIsPasswordMismatch(true);
      }
    }
  }, [password, confirmPassword, setIsPasswordMismatch]);

  useEffect(() => {
    if (isPasswordMismatch) {
      setAlertInconsistencyPassword(true);
    }
  }, [isPasswordMismatch]);

  return (
    <View style={styles.root}>
      <DeleteHeader navigation={navigation} to="MainPage" />
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>계좌 연결</Text>
          <Text style={styles.subtitle}>연결할 계좌를 선택해주세요.</Text>
        </View>
        <View style={styles.bodyMain}>
          <Text style={styles.containerTitle}>연결 가능한 계좌</Text>
          <View style={{ width: "100%" }}>
            <FlatList
              scrollEnabled={false}
              data={[
                { key: "신한 302-9556-4022-11" },
                { key: "하나 302-9556-4022-12" },
                { key: "우리 302-9556-4022-13" },
              ]}
              renderItem={renderItem}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={
            (styles.submitButton,
            selectedItem != null && styles.submitButtonAfter)
          }
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>연결하기</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View
            style={[styles.popup, isPasswordMismatch && styles.popupMismatch]}
          >
            <View style={styles.popupHeader}>
              <View style={styles.popupHeaderTitle}>
                <Text style={styles.popupHeaderText}>계좌 비밀번호 입력</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../../assets/accountImg/CloseButton.png")}
                    style={styles.button}
                  />
                </Pressable>
              </View>
              <View style={styles.popupSubtitle}>
                <Text>{selectedItem}</Text>
              </View>
            </View>

            <View>
              <AccountPasswordSymbol password={password} />
              {isPasswordMismatch && (
                <Text style={styles.errorText}>
                  비밀번호가 일치하지 않습니다.
                </Text>
              )}
              <AccountPWNumberPad
                onNumPress={handleNumPress}
                onBackspacePress={handleBackspacePress}
              />
            </View>
            <Pressable
              style={[
                styles.submitButton,
                password.length === 4 && styles.submitButtonAfter,
              ]}
            >
              <Text style={styles.pressBeforeTextStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AccountConnectPage;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
  },
  header: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: heightPercentage(13),
    paddingHorizontal: widthPercentage(12),
  },
  title: {
    color: "#191F29",
    fontSize: fontPercentage(23),
    fontWeight: "700",
  },
  subtitle: {
    color: "#8B95A1",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  body: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  bodyHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(20),
  },
  containerTitle: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  accountText: {
    color: "#B0B8C1",
    fontSize: fontPercentage(14),
    fontWeight: "700",
  },
  accountText2: {
    color: "#B0B8C1",
    fontSize: fontPercentage(14),
    fontWeight: "700",
  },
  bodyMain: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    flexGrow: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  accountListContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  accountContainer: {
    height: heightPercentage(50),
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(20),
    borderRadius: 5,
  },

  buttonText: {
    color: "#FFF",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  footer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  submitButton: {
    height: heightPercentage(55),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
  },
  submitButtonAfter: {
    height: heightPercentage(55),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
  },
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
    gap: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: heightPercentage(200),
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
    paddingTop: heightPercentage(20),
    paddingBottom: widthPercentage(15),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  popupMismatch: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: "100%",
    gap: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: heightPercentage(180),
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
    paddingTop: heightPercentage(20),
    paddingBottom: widthPercentage(15),
    flexDirection: "column",
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
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  popupBank: {
    marginRight: widthPercentage(10),
  },
  popupSubtitle: {
    marginTop: heightPercentage(10),
    flexDirection: "row",
    color: "#4E5968",
  },
  passwordSymbol: {
    justifyContent: "center",
    alignItems: "center",
    gap: widthPercentage(20),
    flexDirection: "row",
    marginTop: heightPercentage(20),
    marginBottom: heightPercentage(20),
  },
  accountitem: {
    backgroundColor: "#F9FAFB",
    margin: heightPercentage(9),
    height: heightPercentage(55),
    borderRadius: 5,
    paddingLeft: widthPercentage(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItem: {
    margin: heightPercentage(9),
    height: heightPercentage(55),
    borderRadius: 5,
    paddingLeft: widthPercentage(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#55ACEE",
    borderWidth: widthPercentage(1),
    margin: heightPercentage(9),
    backgroundColor: "#fff",
  },

  listtextBefore: {
    textAlignVertical: "center",
  },
  listtextAfter: {
    color: "#191F29",
    fontSize: fontPercentage(14),
    fontWeight: "700",
    textAlignVertical: "center",
  },
  errorText: {
    color: "#E90061",
    fontSize: fontPercentage(14),
    fontWeight: "400",
    textAlign: "center",
  },
});
