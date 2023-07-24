import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { styles } from "./ExchangePage";
import React, { useState } from "react";

const ChooseAccount = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.accountContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.Container}>
          <ScrollView>
            <View style={styles.s1}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={require("../../public/img/CloseButton.png")}
                  style={styles.button}
                />
              </Pressable>
            </View>
            <View style={styles.s2}>
              <Text>내 계좌 목록을 가져옵니다. 아래를 읽고 동의해 주세요.</Text>
              <Text> 개인신용정보 전송요구 및 수집, 이용</Text>

              <Text> 정보 제공자 </Text>
              <Text> 하나은행, 신한은행, 토스 </Text>

              <Text>정보 수신자</Text>
              <Text>KeyLog</Text>

              <Text>전송 정보</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <Text style={styles.accountTitle}> 계좌 선택 </Text>
      <Pressable
        style={styles.accountList}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.accountListDefault}>계좌를 선택해주세요</Text>
        <Image
          style={styles.selectbutton}
          source={require("../../public/img/SelectButton.png")}
        />
      </Pressable>
    </View>
  );
};

export default ChooseAccount;
