import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
	args: {
		children: 'Button',
		variant: 'contained',
		color: 'primary',
	},
};

export const Outlined: Story = {
	args: {
		children: 'Button',
		variant: 'outlined',
		color: 'primary',
	},
};

export const Text: Story = {
	args: {
		variant: 'text',
		color: 'primary',
		children: 'Button',
	},
};

export const Disabled: Story = {
	args: {
		variant: 'contained',
		color: 'primary',
		children: 'Button',
		disabled: true,
	},
};
