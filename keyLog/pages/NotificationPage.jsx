import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Client } from "@stomp/stompjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SOCKET_URL = "ws://172.16.20.76:8083/ws"; // WebSocket 서버 주소
let socket; // WebSocket 객체

const NotificationPage = () => {
  useEffect(async ()=>{
    const client = new Client ({
      brokerURL: "ws://172.16.20.76:8083/ws",
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      logRawCommunication: true,
      connectHeaders: {
        Authorization: `Bearer ${ JSON.parse(await AsyncStorage.getItem("access_token"))}`
      },
      debug: function (str) {
        console.log("STOMP: " + str);
      },
      reconnectDelay: 200,
      onConnect: () => {
        console.log("connected");
        client.subscribe("/sub/channel/keylog", (message) =>
         
          console.log(`Received: ${message.body}`)
        );
        client.send(
          "/sub/channel/keylog",
          {},
          JSON.stringify({ sender: "soo", type: "HI" })
        );
      },
      onStompError: (frame) => {
        console.log("Additional details: " + frame.body);
      },
    });
  
    client.activate();
  },[])
  
  return <View></View>;
};

export default NotificationPage;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// const SOCKET_URL = 'ws://172.16.20.76:8083/ws'; // WebSocket 서버 주소
// let socket; // WebSocket 객체

// const NotificationPage = () => {
//   const [message, setMessage] = useState('');

//   const handleWebSocketMessage = (event) => {
//     // 서버에서 온 메시지 처리
//     const messageFromServer = event.data;
//     setMessage(messageFromServer);
//     console.log('Message from server:', messageFromServer);
//   };

//   const sendMessageToServer = () => {
//     // 서버로 메시지 보내기
//     const messageToSend = '하이 방가워~'; // 원하는 메시지
//     socket.send(messageToSend);
//   };

//   useEffect(() => {
//     // 컴포넌트가 마운트되면 WebSocket 연결 설정
//     socket = new WebSocket(SOCKET_URL);

//     socket.onopen = (event) => {
//       console.log('connected on wsServer');
//       // 연결이 열리면 원하는 경로로 메시지
//       socket.send('/sub/channel/keylog');
//     };

//     // 서버에서 메시지 수신 시 호출될 콜백 함수 등록
//     socket.onmessage = handleWebSocketMessage;

//     // 컴포넌트 언마운트 시 WebSocket 연결 닫기
//     return () => {
//       socket.close();
//     };
//   }, []);

//   return (
//     <View>
//       <Text>Socket.io YES</Text>
//       <Text>Message from Server: {message}</Text>
//       <Button title="Send Message" onPress={sendMessageToServer} />
//     </View>
//   );
// };

// export default NotificationPage;
