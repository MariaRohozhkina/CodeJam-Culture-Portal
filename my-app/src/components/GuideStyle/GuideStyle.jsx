import React from "react";
import './GuideStyleStyles.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

const GuideStyle = () => {
	return (
	  <ReactCSSTransitionGroup
      transitionName="animation"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
	    <div className="style-wrapper">
		  <div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Typography</h2>
			<p className="sg-font sg-font-primary">"HelveticaNeue", "Helvetica", Arial, sans-serif;</p>
			<h1>h1. Bootstrap heading </h1>
			<h2>h2. Bootstrap heading </h2>
			<h3>h3. Bootstrap heading </h3> 
			<h4>h4. Bootstrap heading </h4>
			<h5>h5. Bootstrap heading </h5>
			<h6>h6. Bootstrap heading </h6>
		  </div>
		  <div className="col-lg-12 sg-section" id="sg-colors">
			<div className="sg-display">
			  <h2 className="sg-h2">Colors</h2>
			  <h4>Primary Colors</h4>
			  <div className="sg-color sg-brand-primary sg-lg"><span className="sg-color-swatch"><span className="sg-animated">#57DAE6</span></span></div>
			  <div className="sg-color sg-gray-lighter sg-lg"><span className="sg-color-swatch"><span className="sg-animated">#57DAE6</span></span></div>
			  <div className="sg-color sg-gray-light sg-lg"><span className="sg-color-swatch"><span className="sg-animated">#57DAE6</span></span></div>
		
			  <h4>Secondary Colors</h4>
			  <div className="sg-color sg-secondary"><span className="sg-color-swatch"><span className="sg-animated">#000</span></span></div>
			  <div className="sg-color sg-secondary-light"><span className="sg-color-swatch"><span className="sg-animated">#000</span></span></div>
			  <div className="sg-color sg-secondary-button"><span className="sg-color-swatch"><span className="sg-animated">#fff</span></span></div>
			</div>
			</div>
			<div className="col-lg-12 sg-display">
			  <h2 className="sg-h2">Links, buttons</h2>
			  <h2 className="sg-anchor"><a href="/#" id="sg-address" className="sg-address">address</a></h2>
			  <button type="button" className="btn btn-primary btn-example">Learn more</button>
			</div>
			<div className="col-lg-12 sg-display">
		      <h2 className="sg-h2">Icon</h2>
			  <h3 >Font Awesome</h3>
			  <div><i className="fa fa-camera-retro"></i> fa-camera-retro </div>
			  <div><i className="fa fa-check-square" aria-hidden="true"></i> check-square</div>
			  <div><i className="fa fa-database" aria-hidden="true"></i> database</div>
			  <div><i className="fa fa-envelope-o" aria-hidden="true"></i> envelope-o</div>
			  <div><i className="fa fa-feed" aria-hidden="true"></i> feed </div>
			  <div><i className="fa fa-mouse-pointer" aria-hidden="true"></i> mouse-pointer</div>
			  <div><i className="fa fa-music" aria-hidden="true"></i> music</div>
			  <div><i className="fa fa-navicon" aria-hidden="true"></i> navicon</div>
			  <div><i className="fa fa-photo" aria-hidden="true"></i> photo</div>
			  <div><i className="fa fa-plus" aria-hidden="true"></i> plus</div>
			</div>
			<div className="col-lg-12 sg-display">
			  <h2 className="sg-h2">Table</h2>
				<table className="table table-striped table-bordered table-condensed">
				  <thead>
				    <tr>
					  <th>#</th>
					  <th>First Name</th>
					  <th>Tables</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>1</td>
					  <td>Michael</td>
					  <td>This one is bordered and condensed</td>
					</tr>
					<tr>
					  <td>2</td>
					  <td>Lucille</td>
					  <td>Do you still like it?</td>
					</tr>
				  </tbody>
				</table>
			</div>
		</div>
     </ReactCSSTransitionGroup>		
	);
}

export default GuideStyle;
