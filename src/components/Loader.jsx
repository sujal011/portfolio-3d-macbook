import { useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress !== 0 ? `${progress.toFixed(2)}%` : `Loading...${progress}`}
      </p>
    // {/* </Html> */}
  );
};

export default Loader;