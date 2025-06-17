import * as Yup from 'yup';

const nameValidation = Yup.string()
	.required('Nome é obrigatório')
	.min(4, 'Nome precisa de pelo menos 4 caracteres');

const emailValidation = Yup.string()
	.email('O endereço de e-mail não parece válido. Corrija e tente novamente.')
	.matches(
		/^[a-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
		'O e-mail deve ter apenas letras minúsculas.',
	)
	.required('E-mail é obrigatório')
	.test(
		'contains-dot',
		'O endereço de e-mail não parece válido. Corrija e tente novamente.',
		function (value) {
			if (!value) return true;
			const domainPart = value.split('@')[1];
			return domainPart ? domainPart.includes('.') : false;
		},
	);

const avatarValidation = Yup.string().required('Foto é obrigatório');

const passwordValidation = Yup.string().required('Senha é obrigatória.');

const feedbackValidation = Yup.string().required('Feedback é obrigatório.');

export {
	nameValidation,
	emailValidation,
	passwordValidation,
	avatarValidation,
	feedbackValidation,
};
