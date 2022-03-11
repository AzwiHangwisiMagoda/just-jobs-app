import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//@ts-ignore
import { mount } from 'auth/AuthApp';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onSignIn, isSignedIn }: any) => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			initialPath: history.location.pathname,
			onNavigate: ({ pathname: nextPathname }: any) => {
				const { pathname } = history.location;

				if (pathname !== nextPathname) {
					history.push(nextPathname);
				}
			},
			onSignIn,
			isSignedIn,
		});

		history.listen(onParentNavigate);
	});

	return <div ref={ref} />;
};
