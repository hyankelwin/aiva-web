'use client';

import { ReactNode } from 'react';
import {
	BreadcrumbsContainer,
	BreadcrumbsLink,
	BreadcrumbsContent,
} from './Breadcrumbs.styles';
import {
	BreadcrumbsProps as MuiBreadcrumbsProps,
	useTheme,
} from '@mui/material';
import { LuChevronRight } from 'react-icons/lu';

interface ItemsProps {
	label: string;
	icon?: ReactNode;
	active?: boolean;
	link?: string;
}

interface BreadcrumbsProps extends MuiBreadcrumbsProps {
	items: ItemsProps[];
}

const Breadcrumbs = ({ items, ...rest }: BreadcrumbsProps) => {
	const theme = useTheme();

	return (
		<BreadcrumbsContainer {...rest}>
			{items.map((item, index) => (
				<BreadcrumbsContent
					key={index}
					style={{
						borderRadius:
							index === 0
								? '5px 0px 0px 5px'
								: index === items.length - 1
									? '0px 5px 5px 0px'
									: '0px',
					}}
				>
					<BreadcrumbsLink
						underline="hover"
						key={index}
						href={item.link}
						variant="button_md"
						color={
							item.active ? theme.palette.grey[700] : theme.palette.grey[400]
						}
					>
						{item.icon}
						{item.label}
					</BreadcrumbsLink>

					{index < items.length - 1 && (
						<LuChevronRight
							style={{ marginLeft: 15 }}
							size={20}
							color={theme.palette.grey[400]}
						/>
					)}
				</BreadcrumbsContent>
			))}
		</BreadcrumbsContainer>
	);
};

export default Breadcrumbs;
