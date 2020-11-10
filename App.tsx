/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TouchScreen from './src/screens/TouchScreen';
import PinScreen from './src/screens/PinScreen';
import HomeScreen from './src/screens/HomeScreen';
import SendRequestScreen from './src/screens/SendRequestScreen';
import CardsScreen from './src/screens/CardsScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
      showLabel: true,
      style: {
        backgroundColor: "#1e1e1e",
        borderTopColor: "#1e1e1e",
        paddingBottom: 32,
      }
  };

  //it displays Tap Navi icons when the expo Vector icons are existed
  /*
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
        let icon = "";
        const color = focused ? "#559dff" : "#828282";
        const size = 24;

        switch (route.name) {
            case "Cards":
                icon = "credit-card";
                break;

            case "SendRequest":
                icon = "send";
                break;

            default:
                icon = "dashboard";
        }

        return <MaterialIcons name={icon} size={size} color={color} />;
    },
});
*/
//

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator tabBarOptions={tabBarOptions}>
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="SendRequest" component={SendRequestScreen} options={{ title: "Send& Request"}} />
        <TabStack.Screen name="Cards" component={CardsScreen} options={{ title: "My Cards"}} />
      </TabStack.Navigator>
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Tabs" component={TabStackScreens} />
          <AppStack.Screen name="Touch" component={TouchScreen} />
          <AppStack.Screen name="Pin" component={PinScreen} />
          <AppStack.Screen name="Home" component={HomeScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
