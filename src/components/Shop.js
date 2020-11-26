import React from 'react';
import '../App.css';

class Shop extends React.Component {
	render() {
		return (
			<main>
			<section class="shop">
			<div>
				<h4>MEN'S FASHION</h4>
				<p>Shop our new arrivals from established brands</p>
			</div>
			<div class="collection">
				<div>
					<img src="../../public/assets/13.svg" />
					<p>IGURE</p>
					<p>GREEN MUSCLE FIT POLO SHIRT</p>
					<p><span>$220.00</span><span>$129.00</span></p>
				</div>
				<div>
					<img src="../../public/assets/11 2.svg" />
					<p>IGURE</p>
					<p>GREEN MUSCLE FIT POLO SHIRT</p>
					<p><span>$220.00</span><span>$129.00</span></p>
				</div>
				<div>
					<img src="../../public/assets/10.svg" />
					<p>IGURE</p>
					<p>GREEN MUSCLE FIT POLO SHIRT</p>
					<p><span>$220.00</span><span>$129.00</span></p>
				</div>
				<div>
					<img src="../../public/assets/12.svg" />
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
					<img src="../../public/assets/14.svg" />
				</div>
				<div>
					<div>
						<img src="../../public/assets/15.svg" />
					</div>
					<div>
						<img src="../../public/assets/16.svg" />
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
	</main>
		);
	}
}

export default Shop
