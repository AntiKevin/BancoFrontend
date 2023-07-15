import { useEffect, useState } from "react";
import Table from "./components/Table";

import Stack from '@mui/material/Stack';
import axios from "axios";


function App() {

  const [apiData, setApiData] = useState([])
  const [dataLoading, setDataLoading] = useState(true)
  const [nomeOperador, setNomeOperador] = useState(null)
  const [dataInicio, setDataInicio] = useState('')
  const [dataFim, setDataFim] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/transferencia',{
			params: {
				nomeOperador: nomeOperador,
				dataInicio: dataInicio,
				dataFim: dataFim,
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

  }, []);
  

  return (
    <>
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
