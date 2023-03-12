import React from 'react';
import { Pagination as AntPagination } from 'antd';

function Pagination({ ...props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AntPagination {...props} />;
}

export default Pagination;
