'use client';

import { IUser } from '@/interfaces/user.interface';
import { useReportForm } from '../hooks/useReportForm';
import { ReportFormView } from './ReportForm.view';
import { Typography } from '@mui/material';

interface ReportFormProps {
	user: IUser;
}

const ReportForm = ({ user }: ReportFormProps) => {
	const { formik, isLoading, isReportSaved } = useReportForm(user);

	if (isReportSaved)
		return (
			<Typography variant="body_md"> Obrigado pelo seu feedback!</Typography>
		);

	return <ReportFormView formik={formik} isLoading={isLoading} />;
};

export default ReportForm;
