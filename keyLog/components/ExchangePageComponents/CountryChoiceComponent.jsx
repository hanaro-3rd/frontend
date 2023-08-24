import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  widthPercentage,
} from "../../utils/ResponseSize";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { useQueryClient, useQuery } from "react-query";
import { getAccount, getExchange } from "../../api/api";

export const CountryChoiceComponent = ({
  setSelectedMoney,
  setExchangeRate,
  setMinimumMoney,
  setKoreaTextInput,
  setForeignTextInput,
  setSubKoreaText,
  setSubForeignText,
  setChangePrice,
}) => {
  const [list, setList] = useState([
    {
      name: "USD",
      country_url: require("../../assets/exchangeImg/USD.png"),
      minimum: 10,
    },
    {
      name: "JPY",
      country_url: require("../../assets/exchangeImg/Japan.png"),
      minimum: 1000,
    },
    {
      name: "EUR",
      country_url: require("../../assets/exchangeImg/EUR.png"),
      minimum: 10,
    },
  ]);

  const queryClient = useQueryClient();
  const { data } = useQuery("exchangeRate", async () => getExchange(), {
    onSuccess: (response) => {
      console.log(response.data, "국가");
      setList([
        {
          name: "USD",
          country_url: require("../../assets/exchangeImg/USD.png"),
          exchangeRate: response.data.result.usd.exchangeRate,
          changePrice: response.data.result.usd.changePrice,
          minimum: 10,
          index: 1,
        },
        {
          name: "JPY",
          country_url: require("../../assets/exchangeImg/Japan.png"),
          exchangeRate: response.data.result.jpy.exchangeRate / 1000,
          changePrice: response.data.result.jpy.changePrice,
          minimum: 1000,
          index: 2,
        },
        {
          name: "EUR",
          country_url: require("../../assets/exchangeImg/EUR.png"),
          exchangeRate: response.data.result.eur.exchangeRate,
          changePrice: response.data.result.eur.changePrice,
          minimum: 10,
          index: 3,
        },
      ]);
    },
    onError: () => {},
  });
  const [expanded, setExpanded] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(list[0]);

  const handleCountryPress = (country) => {
    setSelectedCountry(country);
    setSelectedMoney(country.name);
    setExchangeRate(country.exchangeRate);
    setMinimumMoney(country.minimum);
    setExpanded(false);
    setKoreaTextInput("");
    setForeignTextInput("");
    setSubForeignText("");
    setSubKoreaText("");
    setChangePrice(country.changePrice);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleCountryPress(selectedCountry)}>
        <Collapse
          isExpanded={expanded}
          onToggle={(isExpanded) => setExpanded({ isExpanded: false })}
        >
          <CollapseHeader>
            <View style={styles.countrySelect}>
              <Image
                source={selectedCountry?.country_url}
                style={{
                  width: widthPercentage(32),
                  height: heightPercentage(30),
                }}
              />
              <Text style={styles.unitText}>{selectedCountry?.name}</Text>
              <Image
                source={require("../../assets/exchangeImg/SelectButton.png")}
              />
            </View>
          </CollapseHeader>

          <CollapseBody>
            <View style={styles.countryLists}>
              {list?.map((item, index) => (
                <React.Fragment key={item.name}>
                  <TouchableOpacity
                    onPress={() => {
                      handleCountryPress(item);
                    }}
                  >
                    <View style={styles.countrySelectRow}>
                      <Image
                        source={item?.country_url}
                        style={{
                          width: widthPercentage(32),
                          height: heightPercentage(30),
                          marginRight: 10,
                        }}
                      />
                      <Text style={styles.unitText}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                  {index !== list.length - 1 && (
                    <View style={styles.separator} />
                  )}
                </React.Fragment>
              ))}
            </View>
          </CollapseBody>
        </Collapse>
      </TouchableOpacity>
    </View>
  );
};
export default CountryChoiceComponent;

const styles = StyleSheet.create({
  countrySelect: {
    height: heightPercentage(65),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#191F29",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(15),
    borderRadius: 10,
  },
  countrySelectRow: {
    width: 100,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  unitText: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  countryLists: {
    borderWidth: 1,
    borderColor: "#191F29",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: widthPercentage(20),
    paddingVertical: heightPercentage(10),
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: heightPercentage(3),
  },
});
