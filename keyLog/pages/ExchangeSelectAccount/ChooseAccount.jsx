// 사용안함 합쳐버림
// import {
//   StyleSheet,
//   Text,
//   View,
//   Modal,
//   ScrollView,
//   Pressable,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import ExchangePage, { styles } from "./ExchangePage";
// import React, { useState } from "react";
// import DeleteHeader from "../../components/Header/DeleteHeader";
// import {
//   fontPercentage,
//   getStatusBarHeight,
//   heightPercentage,
//   phoneHeight,
//   phoneWidth,
//   widthPercentage,
// } from "../../utils/ResponseSize";
// import styled from "styled-components/native";
// const ChooseAccount = ({ setModalVisible }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const Header = styled.View`
//     width: ${phoneWidth}px;
//     height: ${heightPercentage(50)}px;
//     justify-content: center;
//     background-color: white;
//   `;
//   const HeaderImage = styled.Image`
//     margin-left: ${widthPercentage(12)}px;
//     width: ${widthPercentage(24)}px;
//     height: ${heightPercentage(24)}px;
//   `;
//   return (
//     <View style={styles.accountContainer}>
//       <Modal animationType="slide" transparent={true} visible={modalVisible}>
//         <View style={styles.Container}>
//           <TouchableOpacity onPress={() => setModalVisible(false)}>
//             <Header>
//               <HeaderImage source={require("../../Images/삭제.png")} />
//             </Header>
//           </TouchableOpacity>
//           <View style={styles.s2}>
//             <View style={{}}>
//               <Text style={{ fontSize: fontPercentage(16), fontWeight: "700" }}>
//                 내 계좌 목록을 가져옵니다. 아래를 읽고 동의해 주세요.
//               </Text>
//               <Text> 개인신용정보 전송요구 및 수집, 이용</Text>

//               <Text> 정보 제공자 </Text>
//               <Text> 하나은행, 신한은행, 토스 </Text>

//               <Text>정보 수신자</Text>
//               <Text>KeyLog</Text>

//               <Text>전송 정보</Text>
//               <View style={{ justifyContent: "flex-end" }}>
//                 <Pressable style={styles.submitButton}>
//                   <Text style={styles.pressBeforeTextStyle}>동의하기</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Modal>
//       <Text style={styles.MoneyTitle}> 계좌 선택 </Text>
//       <Pressable
//         style={styles.accountList}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.accountListDefault}>계좌를 선택해주세요</Text>
//         <Image
//           style={styles.selectbutton}
//           source={require("../../assets/exchangeImg/SelectButton.png")}
//         />
//       </Pressable>
//     </View>
//   );
// };
// export default ChooseAccount;
