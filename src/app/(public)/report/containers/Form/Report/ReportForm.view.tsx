import { Grid, CircularProgress, Typography } from '@mui/material';
import { Button } from '@/components';
import { Text } from '@/components/Inputs/TextFieldInput';
import { FormikProps } from 'formik';
import Label from '@/components/Inputs/Label';

interface ReportFormViewProps {
	formik: FormikProps<{
		feedback: string;
	}>;
	isLoading: boolean;
}

export const ReportFormView = ({ formik, isLoading }: ReportFormViewProps) => {
	const isSubmitDisabled = !formik.values.feedback || isLoading;

	return (
		<Grid rowSpacing={3} container>
			<Grid item xs={12} sx={{ mb: 2 }}>
				<Label title="Seu feedback é importante para nós" />
				<Grid sx={{ mb: 2, mt: 2 }}>
					<Typography variant="body_md" color="grey.500" sx={{ mt: 2 }}>
						Este é um espaco para que possamos melhorar nosso sistema, sinta se
						a vontade para descrever como foi sua experiencia utilizando a AIVA!
					</Typography>
				</Grid>
				<Text.Input
					label="Digite aqui seu feedback*"
					placeholder="Exemplo: Adorei o sistema, gostei muito :)"
					fullWidth
					multiline
					inputProps={{
						maxLength: 180,
					}}
					rows={4}
					{...formik.getFieldProps('feedback')}
					value={formik.values.feedback}
					onChange={(e) => formik.handleChange(e)}
					onBlur={formik.handleBlur}
					error={formik.touched.feedback && Boolean(formik.errors.feedback)}
					helperText={formik.touched.feedback && formik.errors.feedback}
				/>
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
				>
					{isLoading ? (
						<CircularProgress size={28} thickness={6} color="primary" />
					) : (
						'Enviar'
					)}
				</Button>
			</Grid>
		</Grid>
	);
};
