import 'babel-polyfill';
import React from "react";
import {render} from "react-dom";
import Root from './containers/Root';
import configureStore from "./store/configureStore";
import './assets/styles/styles.scss';

const store = configureStore();

render(
	<Root store={store} />,
	document.getElementById('root')
);
