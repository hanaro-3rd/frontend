import React, { useState, useEffect } from "react";
import { View, Text, Button,Image } from "react-native";
import { Client } from "@stomp/stompjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { exchangeSucess } from "../utils/image";
const SOCKET_URL = "ws://172.16.20.76:8083/ws"; // WebSocket 서버 주소

const NotificationPage = () => {
  const [data, setData] = useState();
  const [type,setType] = useState("")
  const [createdAt,setCreatedAt] = useState("")
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isModalVisible]);
  useEffect(() => {
    const setupWebSocket = async () => {
      const client = new Client({
        brokerURL: "http://3.38.13.139:8081/ws",
        forceBinaryWSFrames: true,
        appendMissingNULLonIncoming: true,
        logRawCommunication: true,
        debug: function (str) {
          console.log("STOMP: " + str);
        },
        reconnectDelay: 10000,
        onConnect: () => {
          console.log("connected");
          client.subscribe("/sub/channel/keylog", async (message) =>
          {  let messageBody = JSON.parse(message.body)
             console.log(messageBody.data,"뭐지")
            setData(messageBody.data)
            setType(messageBody.type)
            setCreatedAt(messageBody.createdAt.substring(0,10))
            setModalVisible(true)
            console.log(`Received: ${message.body}`)
          }
       
          );
          client.publish({
            destination: "/pub/alarm",
            body: JSON.stringify({ sender: "soo", type: "HI" }),
          });
        },
        onStompError: (frame) => {
          console.log("Additional details: " + frame.body);
        },
      });

      client.activate();
    };
    
    setupWebSocket(); // 비동기 함수를 바로 호출

    return () => {
      // Clean-up 함수
      // if (socket) {
      //   socket.close();
      // }
    };
  }, []);

  return (
    <Modal
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
        position: "absolute",
        alignItems: "center",
        left: 0,
        bottom: 5,
      }}
      backdropOpacity={0}
      backdropColor="transparent"
      isVisible={isModalVisible}
      onBackdropPress={() => {
        // 모달 밖을 터치했을 때 실행될 함수
        setModalVisible(false); // 모달을 닫을 수 있도록 상태 업데이트
      }}
    >
      <View
        style={{
          width: "95%",
          height: 80,
          backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          
          elevation: 3,
        }}
      ><View style={{width:"80%",flexDirection:"row",alignItems:"center"}}>
        <Image
          source={{ uri: exchangeSucess }}
          style={{ width: 60, height: 60,marginLeft:10 }}
        />
        <View style={{ justifyContent: "space-between", height: 50,marginLeft:10, }}>
          <Text style={{ color: "#191F29", fontSize: 16, fontWeight: 700 }}>
            {type}
          </Text>
          <Text>{data}</Text>
        </View>
      </View>

        <View style={{ height: 50,width:"40%",marginRight:20 }}>
          <Text>{createdAt}{" "}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationPage;
