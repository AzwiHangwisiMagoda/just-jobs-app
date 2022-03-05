import React, { useRef, useEffect } from 'react';
//@ts-ignore
import { mount } from 'vacancy/VacancyApp';

const VacancyApp: any = () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	});

	return <div ref={ref} />;
};

export default VacancyApp;
