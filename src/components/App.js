import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalResetStyle from "../assets/css/GlobalResetStyle.css";
import GlobalStyle from "../assets/css/GlobalStyle";
import Camera from "./camera/Camera"

export default function App() {
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<Camera/>}/>
					</Routes>
			</BrowserRouter>
		</>
	);
}
