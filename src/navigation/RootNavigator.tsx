import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from '../screens';

interface RootNavigatorProps {}

const Stack = createNativeStackNavigator();

export const RootNavigator: FC<RootNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
