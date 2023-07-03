import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import AgentsScreen from 'screens/AgentsScreen';
import AllAgentsScreen from 'screens/AllAgentsScreen';
import DetailsAgent from 'screens/DetailsAgent';
import StartScreen from 'screens/StartScreen';
import IntroScreen from 'screens/IntroScreen';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{
          animation: 'fade',
          headerShown: false,
          statusBarColor: '#0891b2',
        }}
      />
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{
          animation: 'fade',
          headerShown: false,
          statusBarColor: '#0891b2',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animation: 'fade',
          title: 'Pathologies',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
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
      <Stack.Screen
        name="AllAgents"
        component={AllAgentsScreen}
        options={{
          animation: 'fade',
          headerShown: true,
          headerShadowVisible: false,
          statusBarColor: '#0891b2',
          title: 'Tous les Agents',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="DetailsAgent"
        component={DetailsAgent}
        options={{
          animation: 'fade',
          title: 'Details Agent',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HomeStackScreen />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
