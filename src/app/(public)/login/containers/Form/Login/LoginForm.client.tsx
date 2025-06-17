'use client';

import { useLoginForm } from './hooks/useLoginForm';
import { LoginFormView } from './LoginForm.view';

const LoginForm = () => {
	const { formik, isLoading, errorMessage, handleKeyUp } = useLoginForm();

	return (
		<LoginFormView
			formik={formik}
			isLoading={isLoading}
			errorMessage={errorMessage}
			onKeyUp={handleKeyUp}
		/>
	);
};

export default LoginForm;
