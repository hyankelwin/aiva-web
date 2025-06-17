import * as Yup from 'yup';
import {
	nameValidation,
	emailValidation,
	passwordValidation,
	avatarValidation,
	feedbackValidation,
} from './validation';

const userCreateValidationScheme = Yup.object({
	name: nameValidation,
	email: emailValidation,
	avatar: avatarValidation,
	password: passwordValidation,
});

const loginValidationScheme = Yup.object({
	email: emailValidation,
	password: passwordValidation,
});

const feedbackValidationScheme = Yup.object({
	feedback: feedbackValidation,
});

const validationSchemes = {
	user: {
		create: {
			fullScheme: userCreateValidationScheme,
			fields: {
				name: nameValidation,
				email: emailValidation,
				avatar: avatarValidation,
				password: passwordValidation,
			},
		},
	},
	login: {
		fullScheme: loginValidationScheme,
		fields: {
			email: emailValidation,
			password: passwordValidation,
		},
	},
	feedback: {
		fullScheme: feedbackValidationScheme,
		fields: {
			feedback: feedbackValidation,
		},
	},
};

export default validationSchemes;
