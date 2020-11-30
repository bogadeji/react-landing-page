import React from 'react';
import '../App.css';

class Header extends React.Component {
	render() {
		return (
			<header id="header" >
				<div id="logo"><p>YOUR LOGO</p></div>
				<div class="nav-links">
					<a href="#header" class="nav-link"><p>HOME</p></a>
					<a href="#shop" class="nav-link"><p>SHOP</p></a>
					<a href="#lookbook" class="nav-link"><p>LOOKBOOK</p></a>
					<a href="#features" class="nav-link"><p>FEATURES</p></a>
					<a href="#header"><p>PAGES</p></a>
					<a href="#header"><p>BLOG</p></a>
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

export default Header
