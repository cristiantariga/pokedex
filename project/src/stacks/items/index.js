import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonItemsScreen, ItemsDetailsScreen} from '../../screens';
import {COLORS} from '../../res/enums';

const Stack = createStackNavigator();

export function ItemsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: COLORS.BLACK_COLOR,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: COLORS.MAIN_COLOR,
          borderBottomColor: COLORS.SECONDARY_COLOR,
          borderBottomWidth: 4,
        },
      }}>
      <Stack.Screen
        component={PokemonItemsScreen}
        name="PokemonItems"
        options={{
          title: 'Itens',
        }}
      />
      <Stack.Screen
        component={ItemsDetailsScreen}
        name="ItemsDetailsScreen"
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
