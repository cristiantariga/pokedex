import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonMovesScreen, MoveDetailsScreen} from '../../screens';
import {COLORS} from '../../res/enums';

const Stack = createStackNavigator();

export function MovesStack() {
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
        component={PokemonMovesScreen}
        name="PokemonMovesScreen"
        options={{title: 'Moves'}}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
        }}
        component={MoveDetailsScreen}
        name="MoveDetailsScreen"
      />
    </Stack.Navigator>
  );
}
