import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {}

export function Text(props: TextProps): React.ReactElement {
  return <RNText {...props}>{props.children}</RNText>;
}
