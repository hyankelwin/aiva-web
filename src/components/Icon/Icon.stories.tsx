import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Icon from './Icon';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'LuCheck',
		size: 32,
		color: defaultColors.primary.main,
		marginRight: 8,
	},
};
