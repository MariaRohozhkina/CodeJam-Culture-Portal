import React, { Component, Fragment } from "react";
import style from './GuideStyleStyles.css';

class GuideStyle extends Component {
  render() {
	return (
	  <fragment>
	    <div class="col-lg-12 sg-display">
			<h2 class="sg-h2">Typography</h2>
			<p class="sg-font sg-font-primary">"HelveticaNeue", "Helvetica", Arial, sans-serif;</p>
			<h1>h1. Bootstrap heading </h1>
			<h2>h2. Bootstrap heading </h2>
			<h3>h3. Bootstrap heading </h3> 
			<h4>h4. Bootstrap heading </h4>
			<h5>h5. Bootstrap heading </h5>
            <h6>h6. Bootstrap heading </h6>

		</div>
		<div className="col-lg-12 sg-section" id="sg-colors" css={style}>
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
		 <div class="col-lg-12 sg-display">
			<h2 class="sg-h2">Links, buttons</h2>
			
			<h2 class="sg-anchor"><a id="sg-address" class="sg-adress">address</a></h2>
			<button type="button" class="btn btn-primary btn-example">Learn more</button>
			
		</div>
		<div class="col-lg-12 sg-display">
			<h2 class="sg-h2">Icon</h2>
			<h3 >Font Awesome</h3>
			<div><i class="fa fa-camera-retro"></i> fa-camera-retro </div>
			<div><i class="fa fa-check-square" aria-hidden="true"></i> check-square</div>
			<div><i class="fa fa-database" aria-hidden="true"></i> database</div>
			<div><i class="fa fa-envelope-o" aria-hidden="true"></i> envelope-o</div>
			<div><i class="fa fa-feed" aria-hidden="true"></i> feed </div>
			<div><i class="fa fa-mouse-pointer" aria-hidden="true"></i> mouse-pointer</div>
			<div><i class="fa fa-music" aria-hidden="true"></i> music</div>
			<div><i class="fa fa-navicon" aria-hidden="true"></i> navicon</div>
			<div><i class="fa fa-photo" aria-hidden="true"></i> photo</div>
			<div><i class="fa fa-plus" aria-hidden="true"></i> plus</div>
		</div>
		<div class="col-lg-12 sg-display">
			<h2 class="sg-h2">Table</h2>
			<table class="table table-striped table-bordered table-condensed">
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
	  </fragment>	
	);
 }
}

export default GuideStyle;
