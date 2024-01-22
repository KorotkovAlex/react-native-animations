import { Canvas, Rect, SweepGradient, vec } from '@shopify/react-native-skia';
import React, { ReactElement, useEffect } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated';
import { Text } from '../../../components';

export function GradientClockScreen(): ReactElement {
  const { width, height } = useWindowDimensions();
  const rotation = useSharedValue(0);
  const centerX = width / 2;
  const centerY = height / 2;
  const centerVec = vec(centerX, centerY);

  const animatedRotate = useDerivedValue(() => {
    return [{ rotate: Math.PI * rotation.value }];
  }, [rotation]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(2, { duration: 4000, easing: Easing.linear }),
      -1,
      false,
    );

    return () => {
      cancelAnimation(rotation);
    };
  }, []);

  return (
    <View style={commonStyles.container}>
      <Canvas style={commonStyles.container}>
        <Rect x={0} y={0} width={width} height={height} color={'black'}>
          <SweepGradient
            origin={centerVec}
            c={centerVec}
            start={0}
            end={360}
            colors={['white', 'grey', '#222222', 'black']}
            transform={animatedRotate}
          />
        </Rect>
      </Canvas>
      <Text style={[commonStyles.text, commonStyles.dayText]}>{'DAY'}</Text>
      <Text style={[commonStyles.text, commonStyles.nightText]}>{'NIGHT'}</Text>
    </View>
  );
}

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    width: 275,
    height: 275,
  },
  text: {
    fontSize: 90,
    fontWeight: '100',
    letterSpacing: 8,
  },
  dayText: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
  },
  nightText: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    color: 'white',
  },
});
