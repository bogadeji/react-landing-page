import React from 'react';
import '../App.css';

class Images extends React.Component {
	render() {
		return (
			<section id="images">
				<div id="first-column">
					<div id="first-column-1">
						<img src="assets/2.svg" alt="" />
					</div>
					<div id="first-column-2">
						<div>
							<img src="/assets/3.svg" alt="" />
						</div>
						<div>
							<img src="./assets/4.svg" alt="" />
						</div>
					</div>
				</div>
				<div id="second-column">
					<img src="./assets/1.svg" alt="" />
				</div>
				
			</section>
		);
	}
}

export default Images
