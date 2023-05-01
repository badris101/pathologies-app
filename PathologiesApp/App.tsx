import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import AgentsScreen from 'screens/AgentsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllAgentsScreen from 'screens/AllAgentsScreen';
import DetailsAgent from 'screens/DetailsAgent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
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
    </Stack.Navigator>
  );
}

function AllAgentsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllAgents"
        component={AllAgentsScreen}
        options={{
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
        <Tab.Navigator>
          <Tab.Screen
            name="PathologiesTab"
            component={HomeStackScreen}
            options={{
              title: 'Pathologies',
              headerShown: false,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0891b2',
              },
              tabBarIconStyle: {display: 'none'},
              tabBarActiveTintColor: '#0891b2',
              tabBarLabelStyle: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                textAlignVertical: 'center',
                fontSize: 14,
              },
            }}
          />
          <Tab.Screen
            name="AllAgentsTab"
            component={AllAgentsStackScreen}
            options={{
              title: 'Tous les Agents',
              headerShown: false,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0891b2',
              },
              tabBarIconStyle: {display: 'none'},
              tabBarActiveTintColor: '#0891b2',
              tabBarLabelStyle: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                textAlignVertical: 'center',
                fontSize: 14,
              },
            }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
