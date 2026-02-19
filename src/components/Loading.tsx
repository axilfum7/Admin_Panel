import type { FC } from "react";

const Loading: FC<{ size?: number }> = ({ size = 18 }) => {
  return (
    <span
      style={{ width: size, height: size }}
      className="border-4 border-white border-t-transparent rounded-full animate-spin"
    />
  );
};

export default Loading;

