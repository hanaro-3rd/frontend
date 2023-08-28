import { useEffect } from "react";
import { Alert, Linking, Platform } from "react-native";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";

function usePermissions() {
  // 권한 관련
  // 파일명을 usePermissions.android.ts, usePermissions.ios.ts 와 같은 형식으로 디바이스별로 나누어도 되긴 한다.
  useEffect(() => {

      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION||PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION||PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
        .then((result) => {
          console.log("check location", result);
          if (result === RESULTS.BLOCKED || result === RESULTS.DENIED) {
            Alert.alert(
              "이 앱은 위치 권한 허용이 필요합니다.",
              "앱 설정 화면을 열어서 항상 허용으로 바꿔주세요.",
              [
                {
                  text: "네",
                  // 여기서는 설정을 이용하지만, url 의 스킴을 이용해서 다른 앱으로 이동하는 것도 가능하다.
                  // ex) tel://01000000000 혹은 sms://01000000000
                  onPress: () => Linking.openSettings(),
                },
                // {
                //   text: "아니오",
                //   onPress: () => console.log("No Pressed"),
                //   style: "cancel",
                // },
              ]
            );
          }
        })
        .catch(console.error);
    
  }, []);
}

export default usePermissions;