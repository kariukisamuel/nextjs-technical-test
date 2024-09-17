import React from 'react';

type SkeletonLoaderProps = {
  circular?: boolean;
  width?: string;
  height?: string;
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ circular = false, width = 'w-full', height = 'h-6' }) => {
  const shapeClass = circular ? 'rounded-full' : 'rounded';

  return (
    <div
      className={`${width} ${height} bg-gradient-to-tr from-blazingRed to-blazingYellow skeleton ${shapeClass}`}
    ></div>
  );
};

export default SkeletonLoader;
