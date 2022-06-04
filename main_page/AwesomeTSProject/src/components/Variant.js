import React from 'react';
import {View} from 'react-native';

const Variant = ({varientBottom, varientLeft}) => {
  const varientWidth = 50;

  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: 'blue',
        width: 50,
        height: 60,
        left: varientLeft,
        bottom: varientBottom,
      }}
    />
  );
};

export default Variant;
