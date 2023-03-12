import React from 'react';
import { Col as AntCol } from 'antd';

function Col({ className, children, xs, sm, md, lg, xl, xxl }) {
  return (
    <AntCol className={className} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      {children}
    </AntCol>
  );
}

export default Col;
