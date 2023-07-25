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
import { styles } from "./ExchangeSelectAccount/ExchangePage";
import AccountPasswordModal from "../components/AccountConnectPageComponents/AccountPasswordModal";

const AccountConnectPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

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
              source={require("../assets/accountImg/check.png")}
              resizeMode="contain"
            />
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View>
          <View style={styles.s1}>
            <Image
              source={require("../assets/accountImg/CloseButton.png")}
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
        <AccountPasswordModal />
      </View>
    </ScrollView>
  );
};
export default AccountConnectPage;

const styles2 = StyleSheet.create({
  listtextBefore: {
    textAlignVertical: "center",
  },
  listtextAfter: {
    color: "#191F29",
    fontSize: 14,
    fontWeight: "700",
    textAlignVertical: "center",
  },
  accountitem: {
    backgroundColor: "#F9FAFB",
    color: "#B0B8C1",
    margin: 9,
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItem: {
    height: 50,
    borderRadius: 5,
    borderColor: "#55ACEE",
    borderWidth: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountTitle: {
    color: "#191F29",
    Text: 16,
  },
});
