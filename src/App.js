import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lookbook from "./components/Lookbook";
import Images from "./components/Images";
import Shop from "./components/Shop";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }






// class Images extends React.Component {
// 	render() {
// 		return (
// 			`<section id="images">
// 			<!-- <div id="first-column">
// 				<div id="first-column-1">
// 					<img src="./assets/2.svg" />
// 				</div>
// 				<div id="first-column-2">
// 					<div>
// 						<img src="./assets/3.svg" />
// 					</div>
// 					<div>
// 						<img src="./assets/4.svg" />
// 					</div>
// 				</div>
// 			</div>
// 			<div id="second-column">
// 				<img src="./assets/1.svg" />
// 			</div> -->
// 			<div>
// 				<img src="./assets/Group 5.svg" />
// 			</div>
// 		</section>`
// 		);
// 	}
// }





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
