import React from 'react';
import { Image as AntImage } from 'antd';

function Image({ className, preview, src, alt, width, height, fallback }) {
  return (
    <AntImage
      rootClassName={className}
      src={src}
      alt={alt}
      preview={preview}
      width={width}
      height={height}
      fallback={fallback}
    />
  );
}

export default Image;
