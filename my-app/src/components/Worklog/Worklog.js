import React, { Component} from "react";
import style from './WorklogStyles.css';

const worklogRogozhkina = [
  {id:1, hour: '1.5h', features: 'Implementation  the description portal'},
  {id:2, hour: '', features: 'Implementation  block "author of the day"'},
  {id:3, hour: '', features: 'Styling the main page'},
  {id:4, hour: '3h', features: 'Creating a common project structure'},
  {id:5, hour: '', features: 'Project description for the main page'}
];

const worklogYatskevich = [
  {id:1, hour: '', features: 'Implementation of author cards'},
  {id:2, hour: '', features: 'Author page styling'},
  {id:3, hour: '', features: 'Connection of translation (3 languages)'},
  {id:4, hour: '', features: 'The content to be translated into Belarusian'}
];

const worklogMikhalchanka = [
  {id:1, hour: '', features: 'Implementation of animation'},
  {id:2, hour: '2h', features: 'Worklog page styling'},
  {id:3, hour: '4h', features: 'Implementation page worklog'},
  {id:4, hour: '2h', features: 'Implementation page styleguid'},
  {id:5, hour: '3h', features: 'Develop a general design concept'}
];

const worklogStepanova = [
  {id:1, hour: '3h', features: 'Реализация базовых требований(только контент)'},
  {id:2, hour: '', features: 'Implementing a timeline widget'},
  {id:3, hour: '', features: 'The implementation of the widget video'},
  {id:4, hour: '', features: 'Implementing the photo gallery widget'},
  {id:5, hour: '', features: 'The translation of content into English'},
  {id:6, hour: '', features: 'Selection of content'}
];

const worklogArkhipov = [
  {id:1, hour: '', features: 'Implementation of navigation'},
  {id:2, hour: '', features: 'The implementation of routing'},
  {id:3, hour: '0.5h', features: 'Splitting the project into a story and an establishment in trello'},
  {id:4, hour: '0.5h', features: 'Decomposition of story into tasks'}
];

const worklogKetebay = [
  {id:1, hour: '', features: 'Implementing the search widget'},
  {id:2, hour: '', features: 'Implementing the map widget'},
  {id:3, hour: '', features: 'Implementing page with team members '},
  {id:4, hour: '', features: 'Search page and page with team members styling'}
];

class Worklog extends Component {
  render() {
	return (
	  <section className="worklog" css={style}>
	    <div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Rogozhkina</h2>
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
			<p className="sg-font sg-font-primary">Total time: </p>
		</div>
		 <div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Yatskevich</h2>
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
			<p className="sg-font sg-font-primary">Total time: </p>
		</div>
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Mikhalchanka</h2>
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
			<p className="sg-font sg-font-primary">Total time: </p>
		</div>
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Stepanova</h2>
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
			<p className="sg-font sg-font-primary">Total time: </p>
		</div>
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Arkhipov</h2>
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
			<p className="sg-font sg-font-primary">Total time: </p>
		</div>
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Ketebay</h2>
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
			<p className="sg-font sg-font-primary">Total time: </p>
		</div>
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Main 1-3 difficulties for the team during implementation</h2>
		</div>
		
		<div className="col-lg-12 sg-display">
			<h2 className="sg-h2">Evaluation</h2>
		</div>
	  </section>	
	);
 }
}

export default Worklog;
