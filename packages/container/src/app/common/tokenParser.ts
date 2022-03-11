import jwt_decode from 'jwt-decode';
import { Token } from '../models/token';

const ParseToken = (token: string) => {
	let parsed: Token = jwt_decode(token);
	return parsed;
};

export { ParseToken };
