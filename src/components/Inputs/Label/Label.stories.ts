import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta = {
	title: 'Components/Inputs/Label',
	component: Label,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Este é um titulo de label',
		data: 'Este é um dado de label',
	},
};
