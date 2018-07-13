import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
	render(){
		return <div>Execute Leauge of Cats order #66</div>;
	}
}

export default requireAuth(Feature);