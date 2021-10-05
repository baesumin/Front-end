import Bulb from './Bulb';
import Orbit from './Orbit';

const Lights = ({}) => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[6, 3, 0]} intensity={2} castShadow />
      <Orbit />
      <axesHelper args={[5]} />
      <Bulb position={[-6, 3, 0]} />
      <Bulb position={[0, 3, 0]} />
      <Bulb position={[6, 3, 0]} />
    </>
  );
};

export default Lights;
