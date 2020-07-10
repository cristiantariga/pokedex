import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonsListScreen, PokemonsDetailsScreen} from '../../screens';
import {COLORS} from '../../res/enums';

const Stack = createStackNavigator();

export function PokemonsStack() {
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
        component={PokemonsListScreen}
        name="PokemonsListScreen"
        options={{title: 'Pokemon'}}
      />

      <Stack.Screen
        component={PokemonsDetailsScreen}
        name="PokemonsDetailsScreen"
        options={{
          headerTransparent: true,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
