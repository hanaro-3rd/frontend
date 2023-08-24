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
  TouchableOpacity,
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
import { useQueryClient, useQuery, useMutation } from "react-query";
import { getAccounExternal, postAccountExternal } from "../../api/api";
import { initialWindowMetrics } from "react-native-safe-area-context";

export const AccountConnectPage = ({ navigation, route }) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [alertInconsistencyPassword, setAlertInconsistencyPassword] =
    useState(false); //불일치
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [externalAccountList, setExternalAccountList] = useState([]);
  //queryclient 호출
  const queryClient = useQueryClient();
  //useQuery를 통해 get요청
  const { data } = useQuery(
    "accountExternal",
    async () => getAccounExternal(),
    {
      onSuccess: (response) => {
        console.log("외부계좌불러오기" + response.data.result.externalAccounts);
        setExternalAccountList(response.data.result.externalAccounts);
      },
      onError: (error) => {
        console.log("외부계좌불러오기에러", error);
        console.log("connect에러");
      },
    }
  );

  //useMuttaion을 통해 post요청

  const handleNumPress = (num) => {
    if (alertInconsistencyPassword) {
      resetPasswordProcess();
      setAlertInconsistencyPassword(false); //원위치
    }

    if (password.length < 4) {
      const newpassword = password + num;
      setPassword(newpassword);
      console.log(newpassword);
      setIsPasswordMismatch(false);
    }
  };

  const handleBackspacePress = () => {
    setPassword(password.slice(0, -1));
    setIsPasswordMismatch(true);
  };

  const resetPasswordProcess = () => {
    setIsPasswordMismatch(false);
    setPassword("");
  };

  const postExtenalAccountMutation = useMutation(postAccountExternal, {
    onSuccess: (response) => {
      setIsPasswordMismatch(false);
      setIsButtonEnabled(false);
      setPassword("");
      console.log("externalAccountIDPOST성공", response.data);
      navigation.navigate("AccountConnectSuccess", {
        bank: response.data.result.bank,
        balance: response.data.result.balance,
        accountNum: response.data.result.accountNum,
        page: route?.params?.page,
      });
    },
    onError: (error) => {
      console.log("externalAccountIDPOST실패", error.response);
      setIsPasswordMismatch(true);
      setIsButtonEnabled(false);
      setPassword("");
    },
  });
  const handlePassWord = () => {
    if (password.length === 4) {
      const externalAccountId = selectedItem.externalId;
      const externalAccountData = { accountPassword: password };
      postExtenalAccountMutation.mutate({
        externalAccountId,
        externalAccountData,
      });

      // if (isSuccess) {
      //   setIsPasswordMismatch(false);
      //   setIsButtonEnabled(false);
      //   navigation.navigate("AccountConnectSuccess",{

      //   });
      // } else {
      //   setIsPasswordMismatch(true);
      //   setIsButtonEnabled(false);
      //   setPassword("");
      // }
    }
  };

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
            {externalAccountList?.map((item, idx) => {
              const isSelected = idx === selectedItem.idx;
              return (
                <Pressable
                  onPress={() =>
                    setSelectedItem({
                      idx,
                      externalId: item.accountId,
                      bank: item.bank + " " + item.accountNum,
                    })
                  }
                  key={idx}
                >
                  <View
                    style={[
                      styles.accountitem,
                      isSelected && styles.selectedItem,
                    ]}
                  >
                    <Text
                      style={[
                        styles.listtextBefore,
                        isSelected && styles.listtextAfter,
                      ]}
                    >
                      {item.bank} {item.accountNum}
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
            })}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={[
            styles.submitButton,
            selectedItem != null && styles.submitButtonAfter,
          ]}
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
              <Text style={styles.popupRedHeaderText}>
                (가상 계좌이므로 비밀번호는 1234입니다.)
              </Text>
              <View style={styles.popupSubtitle}>
                <Text>{selectedItem.bank}</Text>
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
            <TouchableOpacity
              onPress={handlePassWord}
              disabled={isButtonEnabled}
              style={[
                styles.submitButton,
                password.length === 4 && styles.submitButtonAfter,
              ]}
            >
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
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
    marginTop: heightPercentage(180),
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
    paddingTop: heightPercentage(20),
    paddingBottom: widthPercentage(20),
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
    paddingBottom: widthPercentage(20),
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
  popupRedHeaderText: {
    color: "red",
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
