import React from "react";
import { HomeContainer as Home } from "../src/containers/Home";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Home />
			</div>
		</Provider>
	);
}

export default App;
