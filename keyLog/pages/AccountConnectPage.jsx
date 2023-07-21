import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./ExchangePage";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const AccountConnectPage = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.s1}>
          <Image
            source={require("../public/img/CloseButton.png")}
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
          <Text style={styles.accountTitle}> 연결 가능한 계좌 </Text>
          <FlatList
            scrollEnabled={false}
            data={[
              { key: "302-9556-4022-11" },
              { key: "302-9556-4022-12" },
              { key: "302-9556-4022-13" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles2.accountitem}>{item.key}</Text>
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.submitButton}>
            <Text style={styles.pressBeforeTextStyle}>연결하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default AccountConnectPage;

const styles2 = StyleSheet.create({
  accountitem: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: "#F9FAFB",
    color: "#B0B8C1",
    textAlignVertical: "center",
    margin: 9,
  },
});
