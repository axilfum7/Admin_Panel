const Loading = ({
  size = 18,
}: {
  size?: number;
}) => {
  return (
    <span
      style={{ width: size, height: size }}
      className="border-4 border-white border-t-transparent rounded-full animate-spin"
    ></span>
  );
};

export default Loading;
