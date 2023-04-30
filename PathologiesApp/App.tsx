import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import AgentsScreen from 'screens/AgentsScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false, statusBarColor: '#0891b2'}}
          />
          <Stack.Screen
            name="Agents"
            component={AgentsScreen}
            options={{
              animation: 'fade',
              headerShown: true,
              statusBarColor: '#0891b2',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0891b2',
              },
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
