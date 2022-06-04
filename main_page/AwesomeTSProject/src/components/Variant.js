import React from 'react';
import {View} from 'react-native';

const Variant = ({variantBottom, variantLeft}) => {
  const variantWidth = 50;
  const variantHeight = 60;

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: variantWidth,
        height: variantHeight,
        left: variantLeft - variantWidth / 2,
        bottom: variantBottom - variantHeight / 2,
      }}></View>
  );
};

export default Variant;
