'use client';

import { useParams } from 'next/navigation';
import { ReportView } from './Report.view';
import { CircularProgress, Grid, useTheme } from '@mui/material';
import { useReport } from '../hooks/useReport';
import { ReportNotFoundView } from './NotFound/ReportNotFound.view';
import { IUser } from '@/interfaces/user.interface';
import { ReportAlreadyExistsView } from './AlreadyExists/ReportAlreadyExists.view';

export const ReportClient = () => {
	const theme = useTheme();
	const { id } = useParams();

	const { user, isLoading, error, isUserReportExists } = useReport(
		id as string,
	);

	if (isLoading)
		return (
			<Grid
				container
				sx={{
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<CircularProgress />
			</Grid>
		);
	if (error) return <ReportNotFoundView theme={theme} />;

	if (isUserReportExists) return <ReportAlreadyExistsView theme={theme} />;

	return <ReportView theme={theme} user={user as IUser} />;
};
