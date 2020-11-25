import logo from './logo.svg';
import './App.css';
 import React from 'react';

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

class Header extends React.Component {
	render() {
		return (
			<header id="header" >
				<div id="logo"><p>YOUR LOGO</p></div>
				<img src="" id="header-img" />
				<div class="nav-links">
					<a href="#header" class="nav-link"><p>HOME</p></a>
					<a href="#shop" class="nav-link"><p>SHOP</p></a>
					<a href="#lookbook" class="nav-link"><p>LOOKBOOK</p></a>
					<a href="#features" class="nav-link"><p>FEATURES</p></a>
					<a ><p>PAGES</p></a>
					<a><p>BLOG</p></a>
				</div>
				<div class="nav-icons">
					<i role="button" tabindex="0" class="material-icons">search</i>
					<i role="button" tabindex="0" class="material-icons">favorite_border</i>
					<i role="button" tabindex="0" class="material-icons-outlined">shopping_cart</i>
				</div>
			</header>
		);
	}
}

class Lookbook extends React.Component {   
	render() {
		return (
			<section id="lookbook">
			<div class="lookbook-content">
				<p>NEW TREND</p>
				<h1>COLLUSION</h1>
				<p>"An exclusive selection of this season's trends"</p>
				<div>
					<button>DISCOVER</button>
					<button>SHOP NOW</button>
				</div>
			</div>
		</section>
		);
	}
}

class Images extends React.Component {
	render() {
		return (
			`<section id="images">
			<!-- <div id="first-column">
				<div id="first-column-1">
					<img src="./assets/2.svg" />
				</div>
				<div id="first-column-2">
					<div>
						<img src="./assets/3.svg" />
					</div>
					<div>
						<img src="./assets/4.svg" />
					</div>
				</div>
			</div>
			<div id="second-column">
				<img src="./assets/1.svg" />
			</div> -->
			<div>
				<img src="./assets/Group 5.svg" />
			</div>
		</section>`
		);
	}
}

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

class Shop extends React.Component {
	render() {
		return (
			`<main>
			<section class="shop">
			<div>
				<h4>MEN'S FASHION</h4>
				<p>Shop our new arrivals from established brands</p>
			</div>
			<div class="collection">
				<div>
					<img src="./assets/13.svg" />
					<p>IGURE</p>
					<p>GREEN MUSCLE FIT POLO SHIRT</p>
					<p><span>$220.00</span><span>$129.00</span></p>
				</div>
				<div>
					<img src="./assets/11 2.svg" />
					<p>IGURE</p>
					<p>GREEN MUSCLE FIT POLO SHIRT</p>
					<p><span>$220.00</span><span>$129.00</span></p>
				</div>
				<div>
					<img src="./assets/10.svg" />
					<p>IGURE</p>
					<p>GREEN MUSCLE FIT POLO SHIRT</p>
					<p><span>$220.00</span><span>$129.00</span></p>
				</div>
				<div>
					<img src="./assets/12.svg" />
					<p>IGURE</p>
					<p>GREEN MUSCLE FIT POLO SHIRT</p>
					<p><span>$220.00</span><span>$129.00</span></p>
				</div>
			</div>
		</section>
		<section id="features">
			<div>
				<h4>AVONE STYLES</h4>
				<p>Choose Your Favorite Color</p>
			</div>
			<div id="features-images">
				<div>
					<img src="./assets/14.svg" />
				</div>
				<div>
					<div>
						<img src="./assets/15.svg" />
					</div>
					<div>
						<img src="./assets/16.svg" />
					</div>
					<a href=""><p>SHOW WOMEN'S DRESS</p></a>
				</div>
			</div>
		</section>
		<section id="ending-banner">
			<div>
				<p>OWN THE DAY</p>
				<h1>TACHEN 19</h1>
				<div>
					<button>SHOP COLLECTION</button>
				</div>
			</div>
		</section>
	</main>`
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			`<div>
			<footer>
			<section>
				<div>
					<h3>YOUR LOGO</h3>
					<p>We earned a reputation of being good at what we do.<br>
					Let us take your online shop  to new dimensions in success!</p>
					<p>&copy; Camilla, Bangladesh 3500</p>
					<p class="email">kawsarahmed0210@gmail.com</p><hr>
					<p class="number">01647470457</p>

					<div id="social-media">
						<i role="button" tabindex="0" class="material-icons">facebook</i>
						<i role="button" tabindex="0" class="material-icons">instagram</i>
						<i class="lni lni-twitter-original"></i>
						<i role="button" tabindex="0" class="material-icons">linkedin</i>
					</div>
				</div>
				<div>
					<div>
						<h3>RECEIVE EMAIL UPDATES</h3>
					</div>
					<div>
						<form id="form">
							<input type="email" name="" id="email" placeholder="Your Email Address">
							<input type="submit" name="" id="submit" value="JOIN">
						</form>
					</div>
					<div id="footer-flex">
						<div>
							<h4>SHOP</h4>
							<p>Shop</p>
							<p>Collection</p>
							<p>Outlet</p>
							<p>Lookbook</p>
						</div>
						<div>
							<h4>HELP</h4>
							<p>FAQ</p>
							<p>Privacy Policy</p>
							<p>Terms and Conditions</p>
							<p>Return and Exchanges</p>
						</div>
						<div>
							<h4>ABOUT</h4>
							<p>Journal</p>
							<p>Our Story</p>
							<p>Contact</p>
							<p>Store Location</p>
						</div>
					</div>
				</div>
			</section>
			<section >
				<div>
					<p>Copyright &copy; 2020. Your company name All rights reserved</p>
				</div>
			</section>
		</footer>
	</div>`
		);
	}
}


class App extends React.Component() {
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
