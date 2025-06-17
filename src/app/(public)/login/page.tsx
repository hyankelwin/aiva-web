import { Box } from '@mui/material';
import LoginForm from './containers/Form/Login/LoginForm.client';
const Login = () => {
	return (
		<Box sx={{ px: { xs: 5, sm: 7, md: 5, lg: 10, xl: 13.5 }, mt: 19 }}>
			<LoginForm />
		</Box>
	);
};

export default Login;
