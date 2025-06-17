'use client';

import { Title as TitleComponent } from '@/components/Title';
import { useAuthStore } from '@/store/AuthStore';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';

const Title = () => {
	const { user } = useAuthStore();
	const value = user && `${user.name}` ? 'Olá, '.concat(user.name) : '';

	return (
		<TitleComponent
			variant="h3"
			sx={{ py: 3, color: defaultColors.secondary.main }}
			data-testid="h3-presentation"
			data-cy="h3_presentation"
			text={value}
			skWidth={300}
			skHeight={20}
		/>
	);
};

export default Title;
