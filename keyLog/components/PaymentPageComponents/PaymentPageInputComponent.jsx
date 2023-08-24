import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
} from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../Header/DeleteHeader";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getDetailKeymoneyHistory, updatepayment } from "../../api/api";

const CategoryComponent = styled.View`
  background-color: white;
  height: ${heightPercentage(384)}px;
  width: 100%;
  bottom: 0;
  position: absolute;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
`;
const CategoryTitleList = styled.View`
  width: ${widthPercentage(350)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const CategoryList = styled.TouchableOpacity`
  width: ${widthPercentage(350)}px;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  height: ${heightPercentage(50)}px;
`;
const CategoryText = styled.Text`
  font-size: ${fontPercentage(16)}px;
  color: black;
`;
const CategoryImage = styled.Image`
  margin-right: ${widthPercentage(15)}px;
  width: ${widthPercentage(30)};
`;
const TitleView = styled.View`
  width: 100%;
  height: ${heightPercentage(50)}px;
  justify-content: center;
`;
const TitleText = styled.Text`
  margin-left: ${widthPercentage(20)}px;
  color: #191f29;
  font-size: ${fontPercentage(23)}px;
  font-weight: 700;
`;
const MainComponent = styled.View`
  height: ${heightPercentage(250)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const NameText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(20)}px;
  font-weight: 700;
  margin-top: ${heightPercentage(10)}px;
`;
const PriceText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
  margin-top: ${heightPercentage(30)}px;
`;
const CostText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(30)}px;
  font-weight: 700;
`;
const DateText = styled.Text`
  color: #4e5968;
  font-size: ${fontPercentage(14)}px;
  font-weight: 400;
  margin-top: ${heightPercentage(10)}px;
`;

const CategoryWrapper = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(50)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  margin-top: ${heightPercentage(18)}px;
`;

const CategoryWord = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 700;
`;
const CategoryPickWord = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;
const MemoWrapper = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(50)}px;
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  margin-top: ${heightPercentage(18)}px;
`;
const MemoText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 700;
`;
const MemoTextInput = styled.TextInput`
  height: ${heightPercentage(49)}px;
  border-radius: 5px;
  border: 1px solid #b0b8c1;
  height: 100%;
  margin-top: ${heightPercentage(10)}px;
`;

const CategoryTitleImage = styled.Image`
  width: ${widthPercentage(40)}px;
  height: ${heightPercentage(40)}px;
`;
const CategoryButtonImage = styled.Image`
  width: ${widthPercentage(13)}px;
  height: ${heightPercentage(9)}px;
  margin-top: ${heightPercentage(5)}px;
`;
const CategoryView = styled.View`
  flex-direction: row;
`;
const PaymentPageInputComponent = ({ route, navigation }) => {
  const {
    category,
    keymoney,
    unit,
    time,
    subject,
    categoryImage,
    historyId,
    type,
    unitSymbol,
    totalBalance
  } = route.params;
  StatusBar.setTranslucent(true);
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedChangeCategory, setSelectedChangeCategory] =
    useState(category);
  const [changeMemo, setChangeMemo] = useState("");

  const handleChangeCategory = (category) => {
    setSelectedChangeCategory(category);
    setOpenCategory(false);
  };

  const handleChangeMemo = (memo) => {
    setChangeMemo(memo);
    console.log(memo);
  };
  console.log(unit);
  console.log(unitSymbol);
  const queryClient = useQueryClient();

  const { data } = useQuery(
    "detailKeymoneyHistory",
    async () => getDetailKeymoneyHistory({ historyId, type }),
    {
      onSuccess: (response) => {
        console.log(response.data);
        console.log("제대로 있니", historyId, type);
        console.log(response.data.result.memo);
        setChangeMemo(response.data.result.memo);
      },
      onError: () => {},
    }
  );

  const patchKeymoneyHistoryMutation = useMutation(updatepayment, {
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: () => {},
  });

  const handlePatchKeymoneyHistory = async () => {
    const updatePaymentData = {
      category: selectedChangeCategory,
      memo: changeMemo,
    };

    try {
      const response = await patchKeymoneyHistoryMutation.mutateAsync({
        historyId,
        updatePaymentData,
      });

      console.log(response.data);

      // 결제 내역 업데이트가 성공하면 ForeignPayHistoryPage로 이동
      navigation.navigate("ForeignPayHistoryPage", { unit, balance:totalBalance });
    } catch (error) {
      // 에러 처리
    }
  };
  // const handlePatchKeymoneyHistory = () => {
  //   console.log(selectedChangeCategory, changeMemo);
  //   const updatePaymentData = {
  //     category: selectedChangeCategory,
  //     memo: changeMemo,
  //   };
  //   console.log(updatePaymentData);
  //   patchKeymoneyHistoryMutation.mutate({ historyId, updatePaymentData });
  //   navigation.navigate("ForeignPayHistoryPage", { unit });
  // };

  return (
    <Main categoryMode={openCategory}>
      <View>
        <DeleteHeader navigation={navigation} to="KeyMoneyHistoryPage" />
        <TitleView>
          <TitleText>결제내역</TitleText>
        </TitleView>
        <MainComponent>
          <CategoryTitleImage source={categoryImage} style={{ opacity: 0.3 }} />
          <NameText>{subject}</NameText>
          <PriceText>결제금액</PriceText>
          <CostText>
            {unitSymbol} {keymoney}
          </CostText>
          <DateText>
            {time[0]}.{time[1]}.{time[2]} {time[3]}:{time[4]}
          </DateText>
        </MainComponent>
        <CategoryWrapper>
          <CategoryWord>카테고리</CategoryWord>
          <TouchableOpacity onPress={() => setOpenCategory(true)}>
            <CategoryView>
              <CategoryPickWord>{selectedChangeCategory}</CategoryPickWord>
              <CategoryButtonImage
                source={require("../../assets/Main/arrow_next.png")}
              />
            </CategoryView>
          </TouchableOpacity>
        </CategoryWrapper>
        <MemoWrapper>
          <MemoText>메모</MemoText>
          <MemoTextInput
            value={changeMemo === "string" ? "" : changeMemo}
            onChangeText={handleChangeMemo}
            placeholder={
              changeMemo === "string" ? "메모를 작성해보세요" : changeMemo
            }
          />
        </MemoWrapper>
      </View>
      {/* <SubmitButton
        onPress={() => {
          handlePatchKeymoneyHistory(),
            navigation.navigate("ForeignPayHistoryPage", { unit });
        }}
      >
        <SubmitView>
          <SubmitText>저장하기</SubmitText>
        </SubmitView>
      </SubmitButton> */}
      <View style={styles.bodyFooter}>
        <TouchableOpacity
          style={styles.frame17}
          onPress={() => {
            handlePatchKeymoneyHistory();
          }}
        >
          <Text style={styles.____3}>저장하기</Text>
        </TouchableOpacity>
      </View>
      {openCategory && (
        <CategoryComponent>
          <CategoryTitleList>
            <CategoryText>카테고리 선택</CategoryText>
            <TouchableOpacity onPress={() => setOpenCategory(false)}>
              <Image
                source={require("../../Images/삭제.png")}
                style={styles.image}
              />
            </TouchableOpacity>
          </CategoryTitleList>
          <CategoryList
            onPress={() => {
              handleChangeCategory("식비");
            }}
          >
            <CategoryImage
              source={require("../../Images/식비.png")}
              resizeMode="contain"
            />
            <CategoryText>식비</CategoryText>
          </CategoryList>
          <CategoryList
            onPress={() => {
              handleChangeCategory("교통");
            }}
          >
            <CategoryImage source={require("../../Images/교통.png")} />
            <CategoryText>교통</CategoryText>
          </CategoryList>
          <CategoryList
            onPress={() => {
              handleChangeCategory("숙박");
            }}
          >
            <CategoryImage source={require("../../Images/숙박.png")} />
            <CategoryText>숙박</CategoryText>
          </CategoryList>
          <CategoryList
            onPress={() => {
              handleChangeCategory("쇼핑 · 편의점 · 마트");
            }}
          >
            <CategoryImage source={require("../../Images/쇼핑.png")} />
            <CategoryText>쇼핑 · 편의점 · 마트</CategoryText>
          </CategoryList>
          <CategoryList
            onPress={() => {
              handleChangeCategory("문화 · 여가");
            }}
          >
            <CategoryImage source={require("../../Images/문화.png")} />
            <CategoryText>문화 · 여가</CategoryText>
          </CategoryList>
          <CategoryList
            onPress={() => {
              handleChangeCategory("기타");
            }}
          >
            <CategoryImage source={require("../../Images/기타.png")} />
            <CategoryText>기타</CategoryText>
          </CategoryList>
        </CategoryComponent>
      )}
    </Main>
  );
};

export default PaymentPageInputComponent;

const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight}px;
  margin-bottom: ${heightPercentage(18)}px;
  background-color: transparent;
`;
const Main = styled.SafeAreaView`
  /* padding-top: ${getStatusBarHeight}px; */
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.categoryMode ? "rgba(0, 0, 0, 0.5)" : "white"};
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercentage(55)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const SubmitView = styled.View`
  width: ${heightPercentage(340)}px;
  background-color: #55acee;
  height: ${heightPercentage(55)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
const SubmitText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const styles = StyleSheet.create({
  ____3: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  bodyFooter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  frame17: {
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
});
