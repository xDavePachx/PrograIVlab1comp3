const { fstat } = require('fs');
const fetch = require('node-fetch');

async function getBTC() {
    try{
        const response = await fetch ('https://restcountries.com/v2/all');
        const data = await response.json();
        let btcList = "";
        data.forEach(cripto =>{
            btcList+= `${cripto['name']}`;
        });

        //crear archivos

        fstat.writeFile('btcList.pdf', btcList, (error) => {
            if (error){
                console.log(error);
                return;
            }
            console.log('Se ha creado el archivo');
        })

    }catch(error){
        console.log(error)
    }
}