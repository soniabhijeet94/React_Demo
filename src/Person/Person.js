import React from 'react';

const person = (props) => {
	// return <p>I am {props.name} and {props.age} years old.</p>
	return ( 
		<div>
			<p onClick = { props.click }>I am { props.name } and { props.age } years old.</p>
			<p>{props.children}</p>
		</div>		
	)
}

export default person;





































/*import React, { Component } from 'react';

class Person extends Component {
	// return <p>I am {props.name} and {props.age} years old.</p>
	
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<p>I am {this.props.name} and {this.props.age} years old.</p>
				<p>{this.props.children}</p>
			</div>		
		)
	}

}

export default Person;*/
