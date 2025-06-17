import {
	DataGrid,
	DataGridProps as MuiDataGridProps,
	GridRow,
	GridRowProps as MuiGridRowProps,
} from '@mui/x-data-grid';
import React, { ReactNode } from 'react';
import { DataTableContainer } from './DataTable.style';

interface DataGridProps extends MuiDataGridProps {
	emptyRows?: ReactNode;
}
const DataTable = ({ columns, rows, emptyRows, ...rest }: DataGridProps) => {
	const CustomGridRow = (props: MuiGridRowProps) => (
		<GridRow {...props} data-testid="table-row" />
	);

	return (
		<DataGrid
			rows={rows}
			columns={columns}
			initialState={{
				pagination: { paginationModel: { pageSize: 10 } },
			}}
			sx={{ display: 'grid' }}
			slots={{
				row: CustomGridRow,
				noRowsOverlay: () =>
					emptyRows ? (
						React.createElement(DataTableContainer, null, emptyRows)
					) : (
						<DataTableContainer>Sem conteúdo</DataTableContainer>
					),
			}}
			{...rest}
		/>
	);
};

export default DataTable;
