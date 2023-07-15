import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'data_transferencia',
    headerName: 'Dados',
    width: 130,
    valueGetter: (params) => {
      const date = new Date(params.row.data_transferencia);
      return date.toLocaleDateString(); 
    }, 
  },
  { field: 'valor',
    headerName: 'Valencia',
    type: 'number', 
    width: 180,
    valueGetter: (params) =>
    `${params.row.valor} R$`,
  },
  {
    field: 'tipo',
    headerName: 'Tipo',
    width: 150,
  },
  {
    field: 'nome_operador_transacao',
    headerName: 'Nome do Operador transacionado',
    sortable: false,
    width: 250,
  },
];

const Table = ({rows, loading}) => {
  return (
    <div style={{ height: 400, width: '800' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        checkboxSelection
      />
    </div>
  );
}

export default Table
