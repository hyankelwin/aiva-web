import {
	CircularProgress,
	FormControl,
	FormControlLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
	Typography,
	useTheme,
} from '@mui/material';
import { Text } from '@/components/Inputs/TextFieldInput';
import { Button } from '@/components';
import { FormikProps } from 'formik';
import { UserFormValues } from './UserForm.types';
import { Avatar } from '@/components';
import { Input } from '@/components/Inputs';

interface Props {
	formik: FormikProps<UserFormValues>;
	isLoading: boolean;
	onBack: () => void;
	isEdit: boolean;
	avatarOptions: { url: string }[];
}

export const UserFormView = ({
	formik,
	isLoading,
	onBack,
	isEdit,
	avatarOptions,
}: Props) => {
	const theme = useTheme();

	const isSubmitDisabled =
		!formik.values.name ||
		!formik.values.email ||
		!formik.values.password ||
		!formik.values.avatar ||
		!formik.isValid ||
		isLoading;

	return (
		<Grid container justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
			<Paper
				elevation={1}
				sx={{
					p: 3,
				}}
			>
				<Grid rowSpacing={3} container>
					<Grid item xs={12} md={6}>
						<Grid sx={{ mb: 2 }}>
							<Input.Label title="Seu avatar*" />
							<Typography variant="body_md" color="grey.500">
								Esolha um avatar que se encaixe com o seu perfil
							</Typography>
						</Grid>
						<FormControl required>
							<RadioGroup
								row
								name="avatar"
								value={formik.values.avatar}
								data-cy="radio-group-avatar"
								onChange={(e) => {
									formik.setFieldValue('avatar', e.target.value);
									formik.setFieldTouched('avatar', true, false);
								}}
							>
								{avatarOptions.map((option) => (
									<FormControlLabel
										key={option.url}
										value={option.url}
										control={<Radio sx={{ display: 'none' }} />}
										label={
											<Avatar
												src={option.url}
												alt={option.url}
												sx={{
													width: 56,
													height: 56,
													border:
														formik.values.avatar === option.url
															? `2px solid ${theme.palette.primary.main}`
															: '2px solid transparent',
													cursor: 'pointer',
													transition: '0.2s',
													'&:hover': {
														border: `2px solid ${theme.palette.primary.light}`,
													},
												}}
											/>
										}
										sx={{ marginRight: 2 }}
									/>
								))}
							</RadioGroup>
						</FormControl>
					</Grid>

					{/* Users */}
					<Grid item xs={12} sx={{ mb: 2 }}>
						<Grid sx={{ mb: 2 }}>
							<Input.Label title="Nome do seu usuário*" />
							<Typography variant="body_md" color="grey.500">
								Crie aqui o usuário que deseja adicionar ao sistema
							</Typography>
						</Grid>
						<Text.Input
							name="name"
							variant="outlined"
							placeholder='Ex: "John Doe"'
							fullWidth
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<Grid sx={{ mb: 2 }}>
							<Input.Label title="E-mail" />
							<Typography variant="body_md" color="grey.500">
								Este não é um campo editável, caso precise alterar o e-mail
								recomendamos a criação de um novo usuário. É utilizado no login
							</Typography>
						</Grid>
						<Text.Input
							name="email"
							variant="outlined"
							placeholder='Ex: "johndoe@email.com"'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							fullWidth
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<Grid sx={{ mb: 2 }}>
							<Input.Label title="Senha" />
							<Typography variant="body_md" color="grey.500">
								Crie a senha desejada para este usuário
							</Typography>
						</Grid>
						<Text.Input
							name="password"
							variant="outlined"
							placeholder='Ex: "123456"'
							fullWidth
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
					</Grid>
					<Grid item xs={12}>
						<Grid
							container
							justifyContent="flex-end"
							alignItems="center"
							sx={{ gap: 2 }}
						>
							<Button
								onClick={() => onBack()}
								variant="outlined"
								color="secondary"
								size="medium"
							>
								Voltar
							</Button>

							<Button
								onClick={() => formik.handleSubmit()}
								variant="contained"
								size="medium"
								type="submit"
								color="primary"
								disabled={isSubmitDisabled}
								data-cy="button_submit_login"
							>
								{isLoading ? (
									<CircularProgress size={28} thickness={6} color="primary" />
								) : isEdit ? (
									'Editar'
								) : (
									'Criar'
								)}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};
