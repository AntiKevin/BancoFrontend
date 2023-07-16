import { useEffect, useState } from "react";

import Table from "./components/Table";

import Stack from '@mui/material/Stack';
import axios from "axios";
import Filters from "./components/Filters";


function App() {

  const [apiData, setApiData] = useState([])
  const [dataLoading, setDataLoading] = useState(true)
  const [nomeOperador, setNomeOperador] = useState('')
  const [dataInicio, setDataInicio] = useState(undefined)
  const [dataFim, setDataFim] = useState(undefined)
  const [filtroClickCount, setFiltroClickCount] = useState(0);

  useEffect(() => {

    
    const fetchData = async () => {
      try {
        setDataLoading(true);
        const response = await axios.get('http://localhost:8080/api/transferencia',{
			params: {
				nomeOperador: nomeOperador ? nomeOperador : null,
				dataInicio: dataInicio ? dataInicio.format('YYYY-MM-DDTHH:mm:ssZ') : '',
				dataFim: dataFim ? dataFim.format('YYYY-MM-DDTHH:mm:ssZ') : '',
			}
		});
        setApiData(response.data);
        setDataLoading(false);
      } catch (error) {
        console.error('Erro na requisição:', error);
        setDataLoading(false);
      }
    };

    fetchData();

  }, [filtroClickCount]);
  

  return (
    <>
	<Stack
		direction="row"
		justifyContent="center"
		alignItems="center"
		spacing={2}
		>
			<Filters 
        dataInicio={dataInicio} 
        setDataInicio={setDataInicio} 
        dataFim={dataFim} 
        setDataFim={setDataFim}
        nomeOperador={nomeOperador}
        setNomeOperador={setNomeOperador}
        setButtonClickCount={setFiltroClickCount}
        />
		</Stack>

		<Stack
		direction="row"
		justifyContent="center"
		alignItems="center"
		spacing={2}
		>
			<Table rows={apiData} loading={dataLoading}/>
		</Stack>
    </>
  )
}

export default App
