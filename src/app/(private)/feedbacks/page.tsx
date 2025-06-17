import { Grid } from '@mui/material';
import { CustomBreadcrumbs } from './components/Breadcrumbs';
import { FeedbackList } from './List';

const Feedbacks = () => {
	return (
		<Grid
			sx={{
				p: 4,
				height: '100%',
			}}
		>
			<CustomBreadcrumbs />
			<FeedbackList />
		</Grid>
	);
};

export default Feedbacks;
