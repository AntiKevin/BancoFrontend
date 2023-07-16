import { Box, Button, Stack } from "@mui/material";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Filters = ({dataInicio, 
                  setDataInicio, 
                  dataFim, 
                  setDataFim, 
                  nomeOperador, 
                  setNomeOperador, 
                  setButtonClickCount 
                }) => {
  return (
    <Box
    sx={{
      width: 800,
      height: 300,
    }}
  >
    <Stack 
      direction="row"
      spacing={2}
      justifyContent="center"
      height={"70%"}
      alignItems="center"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={dataInicio !== undefined ? dataInicio : null} 
          format="DD/MM/YYYY" 
          label="Data de Inicio" 
          onChange={(newValue) => setDataInicio(newValue)} 
        />
        <DatePicker 
          value={dataFim !== undefined ? dataFim : null} 
          format="DD/MM/YYYY" 
          label="Data de Fim" 
          onChange={(newValue) => setDataFim(newValue)} 
        />
        </LocalizationProvider >
        <TextField 
          id="outlined-basic" 
          label="Nome do Operador Transacionado" 
          variant="outlined" 
          value={nomeOperador} 
          onChange={(event) => setNomeOperador(event.target.value)}
        />
    </Stack>
    <Stack 
      direction="row"
      justifyContent="end"
      height={"13%"}
      marginRight={"2%"}
    >
      <Button 
        label="Helper text example" 
        variant="contained"
        onClick={() => {
          setButtonClickCount(prevCount => prevCount + 1);
        }}
        >
        Filtrar
      </Button>
    </Stack>
    
  </Box>   
  )
}

export default Filters