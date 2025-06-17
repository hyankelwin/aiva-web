import type { Meta, StoryObj } from '@storybook/react';
import HelperTextWrapper from './HelperTextWrapper';

const meta = {
	title: 'Components/Inputs/HelperTextWrapper',
	component: HelperTextWrapper,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof HelperTextWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Texto de ajuda comum',
		classes: [],
	},
};

export const Error: Story = {
	args: {
		children: 'Texto com erro',
		classes: ['Mui-error'],
	},
};
