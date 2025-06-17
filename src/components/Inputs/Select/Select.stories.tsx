import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectInput from './Select';

const meta = {
	title: 'Components/Inputs/Select',
	component: SelectInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onChange: fn() },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Example Select',
		name: 'example-select',
		itens: [
			{ value: 1, label: 'Option 1' },
			{ value: 2, label: 'Option 2' },
			{ value: 3, label: 'Option 3' },
		],
		value: '1',
	},
};
