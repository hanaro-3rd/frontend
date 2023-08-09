import { AppRegistry } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient();

const RootApp = () => (
  <RecoilRoot>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </RecoilRoot>
);

// 'keyLog' 컴포넌트 등록
AppRegistry.registerComponent('keyLog', () => RootApp);


//index.js 처음 클라이언트가 서버가 실행 될 떄
//index.html과 index.js를 읽어옴 -> SPA(single page application)
//index.js
// QueryClientProvider로 APP 감싸줌 
// 