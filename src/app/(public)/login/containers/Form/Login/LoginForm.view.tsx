import { Grid, CircularProgress } from '@mui/material';
import { Button } from '@/components';
import { Checkbox } from '@/components';
import { Text } from '@/components/Inputs/TextFieldInput';
import { FormikProps } from 'formik';

interface LoginFormViewProps {
	formik: FormikProps<{
		email: string;
		password: string;
		rememberLogin: boolean;
	}>;
	isLoading: boolean;
	errorMessage: string | null;
	onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const LoginFormView = ({
	formik,
	isLoading,
	errorMessage,
	onKeyUp,
}: LoginFormViewProps) => {
	const isSubmitDisabled =
		!formik.values.password ||
		!formik.values.email ||
		!formik.isValid ||
		isLoading;

	return (
		<Grid rowSpacing={3} container>
			<Grid item xs={12}>
				<Text.Input
					label="E-mail"
					name="email"
					fullWidth
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
			</Grid>
			<Grid item xs={12}>
				<Text.Input
					label="Digite sua senha"
					name="password"
					type="password"
					data-cy="input_password"
					value={formik.values.password}
					onChange={(e) => {
						formik.handleChange(e);
					}}
					onKeyUp={onKeyUp}
					fullWidth
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
			</Grid>
			{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				marginTop={2}
			>
				<Grid>
					<Checkbox
						data-cy="check_remember_login"
						label="Lembrar login"
						name="rememberLogin"
						checked={formik.values.rememberLogin}
						onChange={formik.handleChange}
					/>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Button
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
						e.preventDefault();
						formik.handleSubmit();
					}}
					fullWidth
					variant="contained"
					color="primary"
					size="medium"
					type="submit"
					disabled={isSubmitDisabled}
					data-cy="button_submit_login"
				>
					{isLoading ? (
						<CircularProgress size={28} thickness={6} color="primary" />
					) : (
						'Entrar'
					)}
				</Button>
			</Grid>
		</Grid>
	);
};
