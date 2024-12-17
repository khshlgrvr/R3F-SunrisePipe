import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
	return (
		<>
			hello easyjob2
			<Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
				<color attach="background" args={["#505000"]} />
				<Experience />
			</Canvas>
		</>
	);
}

export default App;
