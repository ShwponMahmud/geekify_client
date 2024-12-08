type SkeletonLoaderProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
};

const Skeleton: React.FC<SkeletonLoaderProps> = ({
  width = "100%",
  height = "100px",
  borderRadius = "8px",
  className = "",
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
