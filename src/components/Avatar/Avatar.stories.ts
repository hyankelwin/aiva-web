import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Avatar from './Avatar';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isLoading: false,
		iconSize: 24,
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const CustomSize: Story = {
	args: {
		isLoading: false,
		iconSize: 48,
		sx: { width: 64, height: 64 },
	},
};
