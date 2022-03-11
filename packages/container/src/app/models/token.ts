export interface Token {
	unique_name: string;
	email: string;
	role: string;
	exp: number;
	iat: number;
	nbf: number;
}
