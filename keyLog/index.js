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
