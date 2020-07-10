import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import {PokemonsStack, ItemsStack, MovesStack} from './stacks';
import {CustomIcon} from './components';
import {COLORS} from './res/enums';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: COLORS.BLACK_COLOR,
          style: {
            borderWidth: 0,
            backgroundColor: COLORS.MAIN_COLOR,
            borderTopColor: COLORS.SECONDARY_COLOR,
            borderTopWidth: 4,
          },
        }}>
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Pokemon',
            tabBarIcon: ({color}) => (
              <CustomIcon name="pokemon" color={color} />
            ),
          }}
          component={PokemonsStack}
          name="PokemonsStack"
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Moves',
            tabBarIcon: ({color}) => <CustomIcon name="moves" color={color} />,
          }}
          component={MovesStack}
          name="MovesStack"
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Items',
            tabBarIcon: ({color}) => <CustomIcon name="itens" color={color} />,
          }}
          component={ItemsStack}
          name="ItemsStack"
        />
      </BottomTab.Navigator>
      <StatusBar
        backgroundColor={COLORS.MAIN_COLOR}
        barStyle={'dark-content'}
      />
    </NavigationContainer>
  );
}
