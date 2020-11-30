import React from 'react';
import '../App.css';

class Footer extends React.Component {
	render() {
		return (
			<div>
			<footer>
			<section>
				<div>
					<h3>YOUR LOGO</h3>
					<p>We earned a reputation of being good at what we do.<br />Let us take your online shop  to new dimensions in success!</p>
					<p>&copy; Camilla, Bangladesh 3500</p>
					<p class="email">kawsarahmed0210@gmail.com</p><hr />
					<p class="number">01647470457</p>

					<div id="social-media">
						<i role="button" tabindex="0" class="fa fa-facebook"></i>
						<i role="button" tabindex="0" class="fa fa-instagram"></i>
						<i role="button" tabindex="0" class="fa fa-twitter"></i>
						<i role="button" tabindex="0" class="fa fa-linkedin"></i>
					</div>
				</div>
				<div>
					<div>
						<h3>RECEIVE EMAIL UPDATES</h3>
					</div>
					<div>
						<form id="form">
							<input type="email" name="" id="email" placeholder="Your Email Address" />
							<input type="submit" name="" id="submit" value="JOIN" />
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
	</div>
		);
	}
}

export default Footer
