// requisição POST com retorno JSON 

const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const datastring=`cnpj_cpf=${process.env.CNPJ_CPF}&cnpj_sh=${process.env.CNPJ_SH}&senha=${process.env.PASSWORD}&pagina=1` 

axios.post(process.env.URL, datastring)
    .then(function (response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    });
        
    
    
