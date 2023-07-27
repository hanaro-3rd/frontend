import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../ExchangeSelectAccount/ExchangePage";
import Ellipse from "../../assets/SignUp/Ellipse.svg";
import Vector from "../../assets/accountImg/Vector.png";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";

const AccountConnectPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    const isSelected = item.key === selectedItem;

    return (
      <Pressable onPress={() => setSelectedItem(item.key)}>
        <View style={[styles2.accountitem, isSelected && styles2.selectedItem]}>
          <Text
            style={
              (styles2.listtextBefore, isSelected && styles2.listtextAfter)
            }
          >
            {item.key}
          </Text>
          {isSelected && (
            <Image
              style={{ height: 30, marginRight: 20 }}
              source={require("../../assets/accountImg/check.png")}
              resizeMode="contain"
            />
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <View style={styles.Container}>
        <View>
          <View style={styles.s1}>
            <Image
              source={require("../../assets/accountImg/CloseButton.png")}
              style={styles.button}
            />
          </View>
          <View style={styles.s2}>
            <Text style={styles.title}> 계좌 연결 </Text>
            <Text style={styles.subtitle}>
              <Text>연결할 계좌를 선택해주세요.</Text>
            </Text>
          </View>
          <View style={styles.bodyMain}>
            <Text style={styles2.accountTitle}> 연결 가능한 계좌 </Text>
            <FlatList
              scrollEnabled={false}
              data={[
                { key: "302-9556-4022-11" },
                { key: "302-9556-4022-12" },
                { key: "302-9556-4022-13" },
              ]}
              renderItem={renderItem}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.submitButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.pressBeforeTextStyle}>연결하기</Text>
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
          <View style={styles2.modalBackground}>
            <View style={styles2.popup}>
              <View style={styles2.popupHeader}>
                <View style={styles2.popupHeaderTitle}>
                  <Text style={styles2.popupHeaderText}>
                    계좌 비밀번호 입력
                  </Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      source={require("../../assets/accountImg/CloseButton.png")}
                      style={styles2.button}
                    />
                  </Pressable>
                </View>
                <View style={styles2.popupSubtitle}>
                  <Text style={styles2.popupBank}>신한</Text>
                  <Text>302-9556-4022-11</Text>
                </View>
              </View>

              <View>
                <View style={styles2.passwordSymbol}>
                  <Ellipse />
                  <Ellipse />
                  <Ellipse />
                  <Ellipse />
                </View>
                <View style={styles2.numberPad}>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>1</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>2</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>3</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>4</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>5</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>6</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>7</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>8</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>9</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}></Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>0</Text>
                  </View>
                  <View style={styles2.number}>
                    <Text style={styles2.num}>
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
    </View>
  );
};
export default AccountConnectPage;

const styles2 = StyleSheet.create({
  listtextBefore: {
    textAlignVertical: "center",
  },
  listtextAfter: {
    color: "#191F29",
    fontSize: fontPercentage(14),
    fontWeight: "700",
    textAlignVertical: "center",
  },
  accountitem: {
    backgroundColor: "#F9FAFB",
    color: "#B0B8C1",
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
  accountTitle: {
    color: "#191F29",
    fontSize: fontPercentage(16),
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
});
