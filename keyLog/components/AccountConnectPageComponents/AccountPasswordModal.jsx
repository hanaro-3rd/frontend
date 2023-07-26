// import React, { useState, useRef, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Modal,
//   Pressable,
//   Dimensions,
//   Image,
//   pinView,
// } from "react-native";
// import ReactNativePinView from "react-native-pin-view";
// import { styles } from "../../pages/ExchangeSelectAccount/ExchangePage";
// import Ellipse from "../../assets/SignUp/Ellipse.svg";
// import Vector from "../../assets/accountImg/Vector.png";

// const AccountPasswordModal = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View>
//       <View style={styles.buttonContainer}>
//         <Pressable
//           style={styles.submitButton}
//           onPress={() => setModalVisible(true)}
//         >
//           <Text style={styles.pressBeforeTextStyle}>연결하기</Text>
//         </Pressable>
//       </View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles3.modalBackground}>
//           <View style={styles3.popup}>
//             <View style={styles3.popupHeader}>
//               <View style={styles3.popupHeaderTitle}>
//                 <Text style={styles3.popupHeaderText}>계좌 비밀번호 입력</Text>
//                 <Pressable onPress={() => setModalVisible(!modalVisible)}>
//                   <Image
//                     source={require("../../assets/accountImg/CloseButton.png")}
//                     style={styles.button}
//                   />
//                 </Pressable>
//               </View>
//               <View style={styles3.popupSubtitle}>
//                 <Text style={styles3.popupBank}>신한</Text>
//                 <Text>302-9556-4022-11</Text>
//               </View>
//             </View>

//             <View>
//               <View style={styles3.passwordSymbol}>
//                 <Ellipse />
//                 <Ellipse />
//                 <Ellipse />
//                 <Ellipse />
//               </View>
//               <View style={styles3.numberPad}>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>1</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>2</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>3</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>4</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>5</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>6</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>7</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>8</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>9</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}></Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>0</Text>
//                 </View>
//                 <View style={styles3.number}>
//                   <Text style={styles3.num}>
//                     <Image source={Vector} />
//                   </Text>
//                 </View>
//               </View>
//             </View>
//             <Pressable style={styles.submitButton}>
//               <Text style={styles.pressBeforeTextStyle}>확인</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default AccountPasswordModal;

// const styles3 = StyleSheet.create({
//   modalBackground: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.65)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   popup: {
//     backgroundColor: "#FFFFFF",
//     flex: 1,
//     width: "100%",
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     marginTop: 250,
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingTop: 20,
//     paddingBottom: 15,
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   popupHeader: {
//     // flex: "column",
//   },
//   popupHeaderTitle: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   popupHeaderText: {
//     color: "#191F29",
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   popupBank: {
//     marginRight: 10,
//   },
//   popupSubtitle: {
//     marginTop: 10,
//     flexDirection: "row",
//     color: "#4E5968",
//   },
//   passwordSymbol: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//     flexDirection: "row",
//     marginTop: 20,
//   },
//   num: {
//     color: "#191F29",
//     textAlign: "center",
//     fontSize: 24,
//     fontWeight: "400",
//   },
//   numberPad: {
//     justifyContent: "center",
//     alignItems: "center",
//     alignContent: "center",
//     alignSelf: "stretch",
//     flexWrap: "wrap",
//     backgroundColor: "#FFF",
//     flexDirection: "row",
//   },
//   number: {
//     width: 110,
//     height: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//     flexDirection: "row",
//     padding: 10,
//   },
// });
