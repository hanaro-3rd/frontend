import {
  StyleSheet,
  View,
  Text,
  navigation,
  Pressable,
  Modal,
  Image,
  FlatList,
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

export const AccountConnectPage = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
              resizeMode="contain"
            />
          )}
        </View>
      </Pressable>
    );
  };

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
      <View style={styles.footer}>
        <Pressable
          style={styles.submitButton}
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
          <View style={styles.popup}>
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
                <Text style={styles.popupBank}>신한</Text>
                <Text>302-9556-4022-11</Text>
              </View>
            </View>

            <View>
              <View style={styles.passwordSymbol}>
                <Ellipse />
                <Ellipse />
                <Ellipse />
                <Ellipse />
              </View>
              <View style={styles.numberPad}>
                <View style={styles.number}>
                  <Text style={styles.num}>1</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>2</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>3</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>4</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>5</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>6</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>7</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>8</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>9</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}></Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>0</Text>
                </View>
                <View style={styles.number}>
                  <Text style={styles.num}>
                    <Image source={Vector} />
                  </Text>
                </View>
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
export default AccountConnectPage;

const styles = StyleSheet.create({
  root: {
    width: widthPercentage(390),
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
    marginTop: heightPercentage(250),
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
  num: {
    color: "#191F29",
    textAlign: "center",
    fontSize: fontPercentage(24),
    fontWeight: "400",
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
    width: widthPercentage(110),
    height: heightPercentage(60),
    justifyContent: "center",
    alignItems: "center",
    gap: heightPercentage(10),
    flexDirection: "row",
    padding: 10,
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
    height: heightPercentage(55),
    borderRadius: 5,
    borderColor: "#55ACEE",
    borderWidth: widthPercentage(1),
    margin: heightPercentage(9),
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
});
