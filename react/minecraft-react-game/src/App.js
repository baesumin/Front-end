import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Vector3 } from 'three';
import { Camera } from './components/Camera';
import { Ground } from './components/Ground';
import { Player } from './components/Player';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas shadows sRGB gl={{ alpha: false }}>
        <Camera fov={50} />
        <Sky sunPosition={new Vector3(100, 10, 100)} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
