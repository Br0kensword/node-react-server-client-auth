import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import Welcome from './components/welcome';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Feature from './components/feature';
import reducers from './reducers';


const store = createStore(
	reducers,
	{ auth: { authenticated: localStorage.getItem('token') } },
	applyMiddleware(reduxThunk)
	);

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
		<App>
			<Route path="/" exact component={Welcome} />
			<Route path="/signup" component={Signup} />
			<Route path="/signin" component={Signin} />
			<Route path="/signout" component={Signout} />
			<Route path="/feature" component={Feature} />
		</App>
	</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
	);

