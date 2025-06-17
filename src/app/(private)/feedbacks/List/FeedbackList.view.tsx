import { IFeedback } from '@/interfaces/feedback.interface';
import { Grid, Theme } from '@mui/material';
import FeedbackCard from '../components/Card/FeedbackCard.view';

interface Props {
	theme: Theme;
	feedbacks: IFeedback[];
}

const FeedbackListView = ({ feedbacks }: Props) => {
	return (
		<Grid container sx={{ mt: 2 }} alignItems={'baseline'} gap={2}>
			{feedbacks.map((feedback, index) => (
				<FeedbackCard
					key={index}
					avatarUrl={feedback.user.avatar}
					title={feedback.user.name}
					message={feedback.feedback}
				/>
			))}
		</Grid>
	);
};

export default FeedbackListView;
