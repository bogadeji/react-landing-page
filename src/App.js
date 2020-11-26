// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lookbook from "./components/Lookbook";
import Images from "./components/Images";
import Shop from "./components/Shop";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Lookbook />
				<Images />
				<Shop />
				<Footer />
			</div>
		);
	}
}
export default App;
