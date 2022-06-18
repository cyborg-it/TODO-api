export const responseHandler = (
	responseCode: number,
	message: string,
	data: any
): {
	message: string;
	responseCode: number;
	data: any;
} => {
	return {
		message,
		responseCode,
		data,
	};
};
