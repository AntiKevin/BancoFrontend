import { useEffect, useState } from "react";
import Table from "./components/Table";

import Stack from '@mui/material/Stack';
import axios from "axios";


function App() {

  const [apiData, setApiData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
	axios.get('http://localhost:8080/api/transferencia')
	  .then(function (response) {
		setApiData(response.data);
	  })
	  .catch(function (error) {
		console.error(error);
	  })
  })
  

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
