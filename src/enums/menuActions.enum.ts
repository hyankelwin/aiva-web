export enum menuActionsEnum {
	ROUTE = 'ROUTE',
	DIVIDER = 'DIVIDER',
	LOGOUT = 'LOGOUT',
}

export type IMenuActions = keyof typeof menuActionsEnum;
