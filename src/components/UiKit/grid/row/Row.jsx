import React from 'react';
import { Row as AntRow } from 'antd';

function Row({ className, children, align, gutter, justify, wrap }) {
  return (
    <AntRow className={className} align={align} gutter={gutter} justify={justify} wrap={wrap}>
      {children}
    </AntRow>
  );
}

export default Row;
