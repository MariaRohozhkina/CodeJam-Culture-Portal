import React, { Component} from "react";
import style from './WorklogStyles.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

const worklogRogozhkina = [
  {id:1, hour: '1.5h', features: 'Implementation  the description portal'},
  {id:2, hour: '2h', features: 'Implementation  block "author of the day"'},
  {id:3, hour: '0.5h', features: 'Styling the main page'},
  {id:4, hour: '3h', features: 'Creating a common project structure'},
  {id:5, hour: '1h', features: 'Project description for the main page'}
];

const worklogYatskevich = [
  {id:1, hour: '2.5h', features: 'Implementation of authors cards page'},
  {id:2, hour: '2h', features: 'Implementation of author card page'},
  {id:3, hour: '0.5h', features: 'Author page styling'},
  {id:4, hour: '2h', features: 'Connection of translation (3 languages)'},
  {id:5, hour: '1h', features: 'The content to be translated into Belarusian'}
];

const worklogMikhalchanka = [
  {id:1, hour: '1h', features: 'Implementation of animation'},
  {id:2, hour: '0.5h', features: 'Worklog page styling'},
  {id:3, hour: '4h', features: 'Implementation page worklog'},
  {id:4, hour: '2h', features: 'Implementation page styleguide'},
  {id:5, hour: '3h', features: 'Develop a general design concept'}
];

const worklogStepanova = [
  {id:1, hour: '20h', features: 'Picking up the content and translating it into English and Belarusian'},
  {id:2, hour: '3h', features: 'Photographer page without widgets'},
  {id:3, hour: '4.5h', features: 'Timeline widget'},
  {id:4, hour: '3h', features: 'Video widget'},
  {id:5, hour: '2.5h', features: 'Photo gallery widget'},
  {id:6, hour: '2h', features: 'Refactoring'},
];

const worklogArkhipov = [
  {id:1, hour: '1.5h', features: 'Implementation of navigation'},
  {id:2, hour: '2h', features: 'The implementation of routing'},
  {id:3, hour: '0.5h', features: 'Splitting the project into a story and an establishment in trello'},
  {id:4, hour: '0.5h', features: 'Decomposition of story into tasks'},
  {id:5, hour: '0.5h', features: 'Refactoring'},
];

const worklogKetebay = [
  {id:1, hour: '3h', features: 'Implementing the search widget'},
  {id:2, hour: '2h', features: 'Implementing the map widget'},
  {id:3, hour: '2h', features: 'Implementing page with team members '},
  {id:4, hour: '1h', features: 'Search page and page with team members styling'}
];

const minScope= [
  {id:1, description: '10 Main page + page with a list of authors + authors page (only pages with content without widgets);', isChecked: true},
  {id:2, description: '10 Page with team members + page with worklog', isChecked: true},
  {id:3, description: '10 Page with list of authors contains search widget;', isChecked: true},
  {id:4, description: '20 Portal has two languages;', isChecked: true}
];

const normalScope= [
  {id:1, description: '20 Portal has page with styleguide;', isChecked: true},
  {id:2, description: '10 Mobile version is okey', isChecked: true},
  {id:3, description: '10 Ipad/tablet version is okey', isChecked: true},
  {id:4, description: '10 Authors page contains timeline;', isChecked: true},
  {id:5, description: '10 Authors page contains video overlay;', isChecked: true},
  {id:6, description: '20 Authors page contains photo gallery;', isChecked: true},
  {id:7, description: '10 Authors page contains map (geowidget);', isChecked: true},
  {id:8, description: 'from 0 to 20 Design (typography, icons, colors, links + buttons + input are styled)', isChecked: true},
  {id:9, description: '20 Material-ui / bootstrap is used', isChecked: true},
  {id:10, description: '10 Portal has third language;', isChecked: true}
];

const extraScope= [
  {id:1, description: '10 Confidence of the project presentation;', isChecked: true},
  {id:2, description: '10 Project is made using gatsbyjs;', isChecked: false},
  {id:3, description: '10 Contentful / netlify cms is used for content management', isChecked: false},
  {id:4, description: '20 Animations / special effects like paralax', isChecked: true},
  {id:5, description: 'up to 20 Outstanding design;', isChecked: true},
  {id:6, description: '20 Storybook/styleguidist/other react styleguide tool usage for the page with styles', isChecked: true},
];

class Worklog extends Component {
  render() {
	return (
	 <ReactCSSTransitionGroup
      transitionName="animation"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
	  <section className="worklog" css={style}>
	    <div className="col-lg-12 sg-display">
		    <h2 className="sg-h2">Worklog</h2>
			<h3>Rogozhkina</h3>
			<table className="table table-striped table-bordered table-condensed">
              <thead>
                <tr>
                  <th>time spent</th>
                  <th>features</th>
                </tr>
              </thead>
              <tbody>
			    { worklogRogozhkina.map(item =>(
                <tr key={item.id}>
                    <td>{item.hour}</td>
                    <td>{item.features}</td>
                </tr>
				))}
              </tbody>
            </table>
			<h3>Total time: 8 hours</h3>
		</div>
		 <div className="col-lg-12 sg-display">
			<h3>Yatskevich</h3>
			<table className="table table-striped table-bordered table-condensed">
              <thead>
                <tr>
                  <th>time spent</th>
                  <th>features</th>
                </tr>
              </thead>
              <tbody>
			    { worklogYatskevich.map(item =>(
                <tr key={item.id}>
                    <td>{item.hour}</td>
                    <td>{item.features}</td>
                </tr>
				))}
              </tbody>
            </table>
			<h3>Total time: 8 hours</h3>
		</div>
		<div className="col-lg-12 sg-display">
			<h3>Mikhalchanka</h3>
			<table className="table table-striped table-bordered table-condensed">
              <thead>
                <tr>
                  <th>time spent</th>
                  <th>features</th>
                </tr>
              </thead>
              <tbody>
			    { worklogMikhalchanka.map(item =>(
                <tr key={item.id}>
                    <td>{item.hour}</td>
                    <td>{item.features}</td>
                </tr>
				))}
              </tbody>
            </table>
			<h3>Total time: 10.5 hours</h3>
		</div>
		<div className="col-lg-12 sg-display">
			<h3>Stepanova</h3>
			<table className="table table-striped table-bordered table-condensed">
              <thead>
                <tr>
                  <th>time spent</th>
                  <th>features</th>
                </tr>
              </thead>
              <tbody>
			    { worklogStepanova.map(item =>(
                <tr key={item.id}>
                    <td>{item.hour}</td>
                    <td>{item.features}</td>
                </tr>
				))}
              </tbody>
            </table>
			<h3>Total time: 15 + 20 hours</h3>
		</div>
		<div className="col-lg-12 sg-display">
			<h3>Arkhipov</h3>
			<table className="table table-striped table-bordered table-condensed">
              <thead>
                <tr>
                  <th>time spent</th>
                  <th>features</th>
                </tr>
              </thead>
              <tbody>
			    { worklogArkhipov.map(item =>(
                <tr key={item.id}>
                    <td>{item.hour}</td>
                    <td>{item.features}</td>
                </tr>
				))}
              </tbody>
            </table>
			<h3>Total time: 5 hours</h3>
		</div>
		<div className="col-lg-12 sg-display">
			<h3>Ketebay</h3>
			<table className="table table-striped table-bordered table-condensed">
              <thead>
                <tr>
                  <th>time spent</th>
                  <th>features</th>
                </tr>
              </thead>
              <tbody>
			    { worklogKetebay.map(item =>(
                <tr key={item.id}>
                    <td>{item.hour}</td>
                    <td>{item.features}</td>
                </tr>
				))}
              </tbody>
            </table>
			<h3>Total time: 8 hours</h3>
		</div>
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Main 1-3 difficulties for the team during implementation</h2>
			<p>1. Problem with implementing the transition to the photographer's page.</p>
			<p>2. Difficulties with styling because most of the team worked for the first time with bootstrap.</p>
			<p>3. Difficulties with the selection of content: too little information was available even in two languages at once.</p>
		</div>
		
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Evaluation</h2>
			<h3>Min scope - 50</h3>
			<div className="group-checkbox">
				{ minScope.map(item =>(
					<p className="sg-font-primary" key={item.id}><label><input type="checkbox" readOnly checked={item.isChecked ? 'checked': ''} /> {item.description}</label></p>
				))}
			</div>
			<h3>Normal scope - 140</h3>
			<div className="group-checkbox">
				{ normalScope.map(item =>(
					<p className="sg-font-primary" key={item.id}><label><input type="checkbox" readOnly checked={item.isChecked ? 'checked': ''} /> {item.description}</label></p>
				))}
			</div>
			<h3>Extra scope - 70</h3>
			<div className="group-checkbox">
				{ extraScope.map(item =>(
					<p className="sg-font-primary" key={item.id}><label><input type="checkbox" readOnly checked={item.isChecked ? 'checked': ''} /> {item.description}</label></p>
				))}
			</div>
			<p className="sg-font sg-font-primary">Total score: 240</p>
		</div>
	  </section>
     </ReactCSSTransitionGroup>	  
	);
 }
}

export default Worklog;
