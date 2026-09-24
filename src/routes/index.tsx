import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { ServerDetails } from '../screens/ServerDetails';
import { Schedule } from '../screens/Schedule';
import { theme } from '../global/styles/theme';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // cada tela desenha o próprio header, como no Figma
          contentStyle: { backgroundColor: theme.colors.background }, // evita flash branco na transição
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ServerDetails" component={ServerDetails} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
