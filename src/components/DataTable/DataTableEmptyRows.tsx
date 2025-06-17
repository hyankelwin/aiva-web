import { ReactNode } from 'react';
import { Grid, PaperProps, Typography } from '@mui/material';

interface DataTableEmptyRowsProps extends PaperProps {
	icon?: ReactNode;
	title?: string;
}

const DataTableEmptyRows = ({ icon, title }: DataTableEmptyRowsProps) => {
	return (
		<Grid container justifyContent="center" alignItems="center" height={'100%'}>
			{icon}
			<Typography sx={{ ml: 3 }} variant="title_lg" color={'grey.800'}>
				{title}
			</Typography>
		</Grid>
	);
};

export default DataTableEmptyRows;
