import { styled } from '@mui/material/styles';

type Props = {
	color: string;
};

export const SubmenuLabel = styled('span')<Props>`
	color: ${({ color }) => color};
`;
