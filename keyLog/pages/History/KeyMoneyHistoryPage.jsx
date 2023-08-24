import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import PrevHeader from "../../components/Header/PrevHeader";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { getMyKeymoney, getAccount } from "../../api/api";

const KeyMoneyHistoryPage = ({ route, navigation }) => {
  const [KeyMoneyAccountList, setKeyMoneyAccountList] = useState([]);
  // const [accountList, setAccountList] = useState([]);

  const queryClient = useQueryClient();
  const { data: keyMoneyData } = useQuery(
    "keymoney",
    async () => getMyKeymoney(),
    {
      onSuccess: (response) => {
        console.log(response.data);
        console.log("키머니 계좌 불러오기" + response.data.result);
        setKeyMoneyAccountList(response.data.result);
        console.log(response.data.result);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const unitImageMap = {
    KRW: require("../../assets/History/KRW.png"),
    USD: require("../../assets/History/USD.png"),
    JPY: require("../../assets/History/JPY.png"),
    EUR: require("../../assets/History/EUR.png"),
  };
  // const { data: accountData } = useQuery("account", async () => getAccount(), {
  //   onSuccess: (response) => {
  //     console.log(response.data);
  //     console.log("연결된 계좌 불러오기" + response.data.result.accounts);
  //     setAccountList(response.data.result.accounts);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     console.log("connect에러");
  //   },
  // });
  return (
    <>
      <PrevHeader navigation={navigation} to="MainPage" />
      <BodyContainer>
        <BodyHeader>
          <BodyHeaderTitle>내 키머니</BodyHeaderTitle>
          <BodyHeaderSubTitle>
            현재 보유중인 외화의 키머니 목록입니다.
          </BodyHeaderSubTitle>
        </BodyHeader>
        <BodyMainContainer>
          <AccountConatiner>
            {KeyMoneyAccountList.length > 0 ? (
              KeyMoneyAccountList.map((item, idx) => (
                <AccountInfoContainer
                  key={idx}
                  onPress={() => {
                    navigation.navigate("ForeignPayHistoryPage", {
                      balance: item.balance,
                      unit: item.unit,
                    });
                  }}
                >
                  <AccountInfo>
                    <CountryImage source={unitImageMap[item.unit]} />
                    <AccountInfoTextContainer>
                      <AccountCountryText>{item.unit}</AccountCountryText>
                      <AccountMoneyText>{item.balance}</AccountMoneyText>
                    </AccountInfoTextContainer>
                  </AccountInfo>
                  <Image
                    source={require("../../assets/History/SelectButton.png")}
                  />
                </AccountInfoContainer>
              ))
            ) : (
              <NoAccountMessageContainer>
                <Image source={require("../../assets/History/Exchange.png")} />
                <NoAccountMessage>보유중인 키머니가 없습니다.</NoAccountMessage>
              </NoAccountMessageContainer>
            )}
          </AccountConatiner>
          <ExchangeText onPress={() => navigation.navigate("ExchangePage")}>
            키머니 환전하러 가기
          </ExchangeText>
        </BodyMainContainer>
      </BodyContainer>
    </>
  );
};

const NoAccountMessageContainer = styled.View`
  display: flex;
  padding-top: ${heightPercentage(30)}px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  align-self: stretch;
`;

const NoAccountMessage = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(18)}px;
  font-style: normal;
  font-weight: 700;
`;

const Root = styled.SafeAreaView`
  width: ${phoneWidth}px;
  /* height: ${phoneHeight}px; */
  min-height: ${phoneHeight}px;
  /* padding-top: ${getStatusBarHeight}px; */
  /* justify-content: space-between; */
  /* flex: 1 0 0; */
`;

const BodyContainer = styled.View`
  width: 100%;
  height: ${heightPercentage(709)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  background-color: white;
`;

const BodyHeader = styled.View`
  display: flex;
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(87)}px;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #fff;
`;

const BodyHeaderTitle = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const BodyHeaderSubTitle = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const BodyMainContainer = styled.View`
  display: flex;
  padding: ${heightPercentage(10)}px 0px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const CountryImage = styled.Image`
  width: ${widthPercentage(50)}px;
  height: ${heightPercentage(50)}px;
`;
const AccountConatiner = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const AccountInfoContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  height: ${heightPercentage(65)}px;
  padding: 0px ${widthPercentage(20)}px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
`;

const AccountInfo = styled.View`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;

const AccountInfoTextContainer = styled.View`
  display: flex;
  height: ${heightPercentage(42)}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const AccountCountryText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 700;
`;

const AccountMoneyText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(18)}px;
  font-style: normal;
  font-weight: 700;
`;

const ExchangeText = styled.Text`
  color: #55acee;
  font-family: Inter;
  font-size: ${fontPercentage(13)}px;
  font-style: normal;
  font-weight: 400;
  text-decoration-line: underline;
`;
export default KeyMoneyHistoryPage;
