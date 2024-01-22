import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GradientClockScreen, MainSkiaScreen } from '../skiaModule';
import { MainReanimatedScreen } from '../reanimatedModule';

interface RootNavigatorProps {}

const Stack = createNativeStackNavigator();

export const RootNavigator: FC<RootNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="GradientClockScreen"
            component={GradientClockScreen}
          />
          <Stack.Screen name="MainSkiaScreen" component={MainSkiaScreen} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="MainReanimatedScreen"
            component={MainReanimatedScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
