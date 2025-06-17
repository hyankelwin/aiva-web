'use client';

import { createTheme } from '@mui/material';
import type { Theme as ThemeProps, ComponentsPropsList } from '@mui/material';
import defaultColors from './DefaultColors';
type OwnerStateProps = ComponentsPropsList[keyof ComponentsPropsList] &
	Record<string, unknown>;

interface StyledThemeProps {
	ownerState: OwnerStateProps;
	theme: ThemeProps;
}

declare module '@mui/material/styles' {
	interface TypographyVariants {
		body_xs: React.CSSProperties;
		body_sm: React.CSSProperties;
		body_md: React.CSSProperties;
		body_lg: React.CSSProperties;
		title_sm: React.CSSProperties;
		title_md: React.CSSProperties;
		title_lg: React.CSSProperties;
		link_sm: React.CSSProperties;
		link_md: React.CSSProperties;
		button_sm: React.CSSProperties;
		button_md: React.CSSProperties;
		button_xl: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		body_xs: React.CSSProperties;
		body_sm: React.CSSProperties;
		body_md: React.CSSProperties;
		body_lg: React.CSSProperties;
		title_sm: React.CSSProperties;
		title_md: React.CSSProperties;
		title_lg: React.CSSProperties;
		link_sm: React.CSSProperties;
		link_md: React.CSSProperties;
		button_sm: React.CSSProperties;
		button_md: React.CSSProperties;
		button_xl: React.CSSProperties;
	}

	interface ShapeOptions {
		border?: unknown;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		body_xs?: true;
		body_sm?: true;
		body_md?: true;
		body_lg?: true;
		title_sm?: true;
		title_md?: true;
		title_lg?: true;
		link_sm?: true;
		link_md?: true;
		button_sm?: true;
		button_md?: true;
		button_xl?: true;
	}
}

declare module '@mui/material/styles/createPalette' {
	interface SimplePaletteColorOptions {
		lighter?: string;
		darker?: string;
	}

	interface PaletteColor {
		lighter?: string;
		darker?: string;
	}

	interface TypeBackground {
		primary: string;
		main: string;
		light: string;
		dark: string;
		brand: string;
		error: string;
		warning: string;
		orange: string;
		info: string;
		success: string;
		transparency: string;
	}
	interface PaletteOptions {
		orange?: PaletteColorOptions | undefined;
	}
}

const fontFamilyFixed = 'var(--font-instrument)';

const colors = createTheme({
	palette: defaultColors,
});

export const fonts = createTheme(colors, {
	typography: {
		fontFamily: fontFamilyFixed,
		fontSize: 16,
		allVariants: {
			color: colors.palette.grey[600],
		},
		h1: {
			fontWeight: 700,
			fontSize: '6rem',
			lineHeight: '125%',
			color: colors.palette.grey[700],
		},
		h2: {
			fontWeight: 700,
			fontSize: '3rem',
			lineHeight: '125%',
			color: colors.palette.grey[700],
		},
		h3: {
			fontWeight: 700,
			fontSize: '2rem',
			lineHeight: '125%',
			color: colors.palette.grey[700],
		},
		h4: {
			fontWeight: 700,
			fontSize: '1.5rem',
			lineHeight: '125%',
			color: colors.palette.grey[700],
		},
		title_sm: {
			fontWeight: 700,
			fontSize: '.875rem',
			lineHeight: '125%',
			color: colors.palette.grey[700],
		},
		title_md: {
			fontWeight: 700,
			fontSize: '1rem',
			lineHeight: '125%',
			color: colors.palette.grey[700],
		},
		title_lg: {
			fontWeight: 700,
			fontSize: '1.25rem',
			lineHeight: '125%',
			color: colors.palette.grey[700],
		},
		body_xs: {
			fontSize: '.75rem',
			fontWeight: 400,
			lineHeight: '150%',
		},
		body_sm: {
			fontSize: '.875rem',
			fontWeight: 400,
			lineHeight: '150%',
		},
		body_md: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: '150%',
		},
		body_lg: {
			fontSize: '1.25rem',
			fontWeight: 400,
			lineHeight: '150%',
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: '150%',
		},
		body2: {
			fontSize: '1.25rem',
			fontWeight: 400,
			lineHeight: '150%',
		},
		link_sm: {
			fontSize: '.875rem',
			fontWeight: 700,
			lineHeight: '150%',
		},
		link_md: {
			fontSize: '1rem',
			fontWeight: 700,
			lineHeight: '150%',
		},
		button_sm: {
			fontSize: '.75rem',
			fontWeight: 700,
			lineHeight: '150%',
		},
		button_md: {
			fontSize: '.875rem',
			fontWeight: 700,
			lineHeight: '150%',
		},
		button_xl: {
			fontSize: '1rem',
			fontWeight: 700,
			lineHeight: '150%',
		},
	},
});

export const defaultTheme = createTheme(fonts, {
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: fontFamilyFixed,
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					'&.MuiLink-root': {
						cursor: 'pointer',
						fontFamily: fontFamilyFixed,
						textDecoration: 'none',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }: { theme: ThemeProps }) => ({
					border: '1px solid',
					borderRadius: theme.spacing(1),
					borderColor: theme.palette.grey[200],

					boxShadow: '0px 1px 4px 0px #0000001A',

					'&.Mui-Selected': {
						borderColor: theme.palette.primary.light,
						backgroundColor: theme.palette.secondary.main,
					},
				}),
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: ({ theme }: { theme: ThemeProps }) => ({
					'&:last-child': {
						paddingBottom: theme.spacing(2),
					},
				}),
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: ({ theme }: StyledThemeProps) => ({
					'&.MuiCheckbox-root': {
						color: theme.palette.primary.main,
						'& input': {
							height: 24,
							width: 24,
						},
					},
				}),
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: ({ theme }: StyledThemeProps) => ({
					borderRadius: theme.spacing(1),
				}),
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: ({ theme }: StyledThemeProps) => ({
					'&.MuiRadio-root': {
						color: theme.palette.grey[400],
						'&.Mui-checked': {
							color: theme.palette.primary.main,
						},
					},
				}),
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: ({ ownerState, theme }: StyledThemeProps) => ({
					fontSize: 16,
					fontWeight: 400,
					fontFamily: fontFamilyFixed,
					borderRadius: theme.spacing(1),
					color: theme.palette.grey[600],

					'& .MuiFilledInput-root': {
						backgroundColor: 'unset',
						borderRadius: theme.spacing(1),
						border: `1px solid ${theme.palette.grey[400]}`,
						color: theme.palette.grey[600],

						...(ownerState.color === 'error' && {
							borderColor: theme.palette.error.main,
						}),

						'&:before, &:after': {
							display: 'none',
						},

						'& input': {
							borderRadius: theme.spacing(1),
							padding: `${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(1)}`,
						},

						'&:hover': {
							borderColor: theme.palette.grey[700],

							'&.Mui-error': {
								borderColor: theme.palette.error.main,
							},
						},

						'&.Mui-disabled': {
							...(ownerState.color === 'primary' && {
								borderColor: theme.palette.grey[200],
							}),
						},

						'&.Mui-focused': {
							...(ownerState.color === 'primary' && {
								border: `2px solid ${theme.palette.secondary.main}`,
								margin: -1,
							}),

							'&.Mui-error': {
								borderColor: theme.palette.error.main,
							},
						},
					},

					'& .MuiInputLabel-filled': {
						top: 0,
						left: 5,

						'&.Mui-focused': {
							...(ownerState.color !== 'error' && {
								color: theme.palette.grey[700],
							}),
						},

						'&.Mui-error': {
							color: theme.palette.error.main,
						},
					},

					'&.Mui-icon-first': {
						'& .MuiInputLabel-filled': {
							left: 52,
						},

						'& input': {
							paddingLeft: theme.spacing(8),
						},
					},

					'&.Mui-icon-last': {
						'& input': {
							paddingRight: theme.spacing(8),
						},
					},

					'& .Mui-error': {
						borderColor: theme.palette.error.main,
					},
				}),
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState, theme }: StyledThemeProps) => ({
					fontSize: 16,
					fontWeight: 500,
					fontFamily: fontFamilyFixed,
					boxShadow: 'none',
					borderRadius: 8,
					textTransform: 'unset',

					'&.MuiButton-sizeSmall': {
						padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
					},

					'&.MuiButton-sizeMedium': {
						padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
					},

					'&.MuiButton-sizeLarge': {
						padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
					},

					'&.MuiButton-text': {
						color: theme.palette.grey[500],
						padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
						'&.MuiButton-textPrimary': {
							'&:hover, &:hover svg': {
								backgroundColor: theme.palette.grey[200],
								color: `${theme.palette.primary.dark} !important`,
							},
						},
						'&.MuiButton-textSecondary': {
							'&:hover, &:hover svg': {
								backgroundColor: theme.palette.grey[100],
								color: theme.palette.secondary.dark,
							},
						},
					},

					'&.MuiButton-containedPrimary': {
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
					},

					'&.MuiButton-outlinedPrimary': {
						backgroundColor: theme.palette.background.default,
						borderColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
					},

					'&.MuiButton-containedSecondary': {
						backgroundColor: theme.palette.secondary.main,
						color: theme.palette.background.default,
					},

					'&.MuiButton-outlinedSecondary': {
						backgroundColor: theme.palette.background.default,
						borderColor: theme.palette.secondary.main,
						color: theme.palette.secondary.main,
					},

					'&.Mui-disabled': {
						...(ownerState.color === 'error' && {
							backgroundColor: theme.palette.error.light,
							color: theme.palette.error.contrastText,
						}),

						...(ownerState.variant === 'text' && {
							color: theme.palette.grey[300],
						}),

						...(ownerState.color === 'primary' &&
							ownerState.variant === 'contained' && {
								backgroundColor: theme.palette.grey[100],
								color: theme.palette.grey[300],
							}),

						...(ownerState.color === 'primary' &&
							ownerState.variant === 'outlined' && {
								borderColor: theme.palette.grey[300],
								color: theme.palette.grey[300],
							}),

						...(ownerState.color === 'secondary' &&
							ownerState.variant === 'contained' && {
								backgroundColor: theme.palette.grey[100],
								color: theme.palette.grey[300],
							}),

						...(ownerState.color === 'secondary' &&
							ownerState.variant === 'outlined' && {
								borderColor: theme.palette.grey[300],
								color: theme.palette.grey[300],
							}),
					},

					'&.MuiButton-root:hover': {
						...(ownerState.color === 'error' && {
							backgroundColor: theme.palette.error.dark,
							color: theme.palette.error.contrastText,
						}),

						...(ownerState.color === 'primary' &&
							ownerState.variant === 'contained' && {
								backgroundColor: theme.palette.primary.dark,
								color: theme.palette.primary.contrastText,
							}),

						...(ownerState.color === 'primary' &&
							ownerState.variant === 'outlined' && {
								borderColor: theme.palette.primary.dark,
								color: theme.palette.primary.dark,
							}),

						...(ownerState.color === 'secondary' &&
							ownerState.variant === 'contained' && {
								backgroundColor: theme.palette.secondary.dark,
								color: theme.palette.background.default,
							}),

						...(ownerState.color === 'secondary' &&
							ownerState.variant === 'outlined' && {
								borderColor: theme.palette.secondary.dark,
								color: theme.palette.secondary.dark,
							}),
					},
				}),
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					fontFamily: fontFamilyFixed,
				},
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					marginleft: 0,
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: ({ theme }: StyledThemeProps) => ({
					'&.MuiIconButton-colorPrimary': {
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,

						'&:hover': {
							backgroundColor: theme.palette.primary.dark,
						},
					},
					'&.MuiIconButton-colorSecondary': {
						backgroundColor: theme.palette.secondary.main,
						color: theme.palette.primary.main,

						'&:hover': {
							backgroundColor: theme.palette.secondary.dark,
						},
					},
					'&.MuiIconButton-colorError': {
						backgroundColor: theme.palette.error.main,
						color: theme.palette.error.contrastText,

						'&:hover': {
							backgroundColor: theme.palette.error.dark,
						},
					},
				}),
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: () => ({
					boxShadow: `0px 1px 4px 0px ${defaultColors.avatar.shadow}`,
				}),
			},
		},
		MuiDataGrid: {
			styleOverrides: {
				root: {
					backgroundColor: colors.palette.common.white,
					fontFamily: fontFamilyFixed,
					boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px !important',
				},
				row: {
					'&:nth-of-type(even)': {
						backgroundColor: colors.palette.common.white,
					},
					'&:nth-of-type(odd)': {
						backgroundColor: colors.palette.grey[100],
					},
					'.MuiDataGrid-cell:focus': {
						outline: 'none !important',
					},
					'.MuiDataGrid-cell:hover': {
						cursor: 'pointer',
					},
				},
				'.MuiDataGrid-row .Mui-selected': {
					border: 'none !important',
				},
				cell: {
					color: colors.palette.grey[600],
					fontWeight: 400,
					fontSize: 16,
					fontFamily: fontFamilyFixed,
					padding: '0px 0px 0px 4px ! important',
					borderRadius: 'none !important',
					borderBottom: `1px solid ${colors.palette.grey[300]} !important`,
				},
				columnHeaderRow: {
					backgroundColor: `${colors.palette.grey[300]} !important`,
					boxShadow: '0px',
				},
				columnHeaderTitle: {
					color: colors.palette.grey[800],
					fontWeight: 700,
					fontSize: 16,
					lineHeight: '17.5px',
					fontFamily: fontFamilyFixed,
				},
				footerContainer: {
					backgroundColor: colors.palette.common.white,
					borderColor: colors.palette.grey[100] + ' !important',

					'.MuiDataGrid-selectedRowCount': {
						display: 'none !important',
					},
				},
				paginationSelectLabel: {
					fontFamily: fontFamilyFixed,
					color: 'red',
				},
			},
		},
		MuiTablePagination: {
			styleOverrides: {
				selectLabel: {
					fontFamily: fontFamilyFixed,
					fontWeight: 400,
					fontSize: 14,
					color: colors.palette.grey[600],
				},
				displayedRows: {
					fontFamily: fontFamilyFixed,
					fontWeight: 400,
					fontSize: 14,
					color: colors.palette.grey[600],
				},
			},
		},
		MuiPagination: {
			styleOverrides: {
				root: ({ theme }: StyledThemeProps) => ({
					paddingTop: 1,
					'& .MuiPaginationItem-page': {
						border: '3px solid',
						borderColor: theme.palette.grey[600],

						color: theme.palette.grey[600],

						'&:hover': {
							color: theme.palette.primary.main,
							borderColor: theme.palette.primary.main,
						},

						'&.Mui-selected': {
							backgorundColor: theme.palette.primary.main,
							color: theme.palette.common.white,
							borderColor: theme.palette.primary.main,
						},
					},

					'& .MuiPaginationItem-previousNext': {
						color: theme.palette.primary.main,
					},

					'& .MuiPaginationItem-ellipsis': {
						height: 0,
						marginTop: -34,
						color: theme.palette.primary.main,

						fontSize: 36,
						fontFamily: 'roboto',
					},
				}),
			},
		},
	},
});
