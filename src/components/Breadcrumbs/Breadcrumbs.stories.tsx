import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Breadcrumbs from './Breadcrumbs';
import { LucideHome } from 'lucide-react';
import { Paths } from '@/constants/paths.constant';

const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{
				label: 'Home',
				icon: <LucideHome size={16} />,
				link: Paths.Home,
			},
			{
				label: 'Feedbacks',
				link: Paths.Feedbacks,
				active: true,
			},
		],
	},
};
