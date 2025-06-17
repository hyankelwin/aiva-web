import { Skeleton, TypographyProps } from '@mui/material';
import { Title } from './Title.style';

interface TitleProps extends TypographyProps {
	text: string;
	maxSize?: number;
	skWidth?: number;
	skHeight?: number;
	hideSkeleton?: boolean;
}

const TitleComponent = ({
	text,
	maxSize,
	skWidth,
	skHeight,
	hideSkeleton = false,
	...rest
}: TitleProps) => {
	return (
		<>
			{!text && !hideSkeleton ? (
				<Skeleton
					variant="text"
					width={skWidth}
					height={skHeight}
					sx={rest.sx}
					role="skeleton"
				/>
			) : (
				<Title {...rest} prop={{ maxSize }}>
					{text}
				</Title>
			)}
		</>
	);
};

export default TitleComponent;
