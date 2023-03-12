import React from 'react';
import { Typography } from 'antd';
import { colors } from 'const';

const { Text: AntText } = Typography;

function Text({ color = colors.BLACK, message }) {
  return <AntText color={color}>{message}</AntText>;
}

export default Text;
