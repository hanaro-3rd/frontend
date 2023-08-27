export const calculateDistance = (curObj, destObj) => {
    const currX = curObj['latitude']; // 출발지 위도
    const currY = curObj['longitude']; // 출발지 경도
    const destX = destObj['latitude']; // 목적지 위도
    const destY = destObj['longitude']; // 목적지 경도
  
    const radius = 6371; // 지구 반지름(km)
    const toRadian = Math.PI / 180;
  
    const deltaLat = Math.abs(currX - destX) * toRadian;
    const deltaLng = Math.abs(currY - destY) * toRadian;
  
    const squareSinDeltLat = Math.pow(Math.sin(deltaLat / 2), 2);
    const squareSinDeltLng = Math.pow(Math.sin(deltaLng / 2), 2);
  
    const squareRoot = Math.sqrt(
      squareSinDeltLat +
        Math.cos(currX * toRadian) *
          Math.cos(destX * toRadian) *
          squareSinDeltLng,
    );
  
    const result = 2 * radius * Math.asin(squareRoot);
  
    return Math.round(result*100)/100;
  };
  