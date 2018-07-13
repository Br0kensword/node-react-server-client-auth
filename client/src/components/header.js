import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './headerStyle.css';
class Header extends Component {

	renderLinks(state){
		if (this.props.authenticated) {
			return (
				<div>
					<Link to="/signout"><button>Sign Out</button></Link>
					<Link to="/feature"><button>Feature</button></Link>
				</div>
				);
		}
		else{
			return (
				<div>
					<Link to="/signup"><button>Sign Up</button></Link>
					<Link to="/signin"><button>Sign In</button></Link>
				</div>
			);
		}
	}

	render(){
		return(
			<div className='header'>
				<Link to="/"><button>Home</button></Link>
				{this.renderLinks()}
			</div>
			);
	}
};

function mapStateToProps(state){
	return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);