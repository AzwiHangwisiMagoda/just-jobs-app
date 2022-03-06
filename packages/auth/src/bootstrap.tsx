import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';

//@ts-ignore
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath],
		});
	if (onNavigate) {
		history.listen(onNavigate);
	}
	ReactDOM.render(<App history={history} />, el);

	return {
		onParentNavigate({ pathname: nextPathname }: any) {
			const { pathname } = history.location;
			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		},
	};
};

if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#auth_root');

	if (devRoot) {
		//@ts-ignore
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
}

export { mount };
