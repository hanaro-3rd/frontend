import { useNavigation } from '@react-navigation/native';

export function navigateToLoginPage() {
  const navigation = useNavigation();
  navigation.navigate('Login'); 
}
