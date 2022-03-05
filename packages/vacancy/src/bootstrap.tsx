import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';

const mount = (el: any) => {
	ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#vacancy-root');

	if (devRoot) {
		mount(devRoot);
	}
}

export { mount };
