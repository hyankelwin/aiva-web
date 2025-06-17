import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Text } from '.';

const meta = {
	title: 'Components/Inputs/TextInput',
	component: Text.Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onChange: fn() },
} satisfies Meta<typeof Text.Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Nome',
		placeholder: 'Digite seu nome',
		variant: 'outlined',
		type: 'text',
		value: '',
		helperText: 'Campo obrigatório',
		error: false,
	},
};
