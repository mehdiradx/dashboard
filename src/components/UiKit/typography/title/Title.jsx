import React from 'react';
import { Typography } from 'antd';
import { colors } from 'const';

const { Title: AntTitle } = Typography;

function Title({ color = colors.BLACK, level, className, message }) {
  return (
    <AntTitle color={color} level={level} className={className}>
      {message}
    </AntTitle>
  );
}

export default Title;
