const { fstat } = require('fs');
const fetch = require('node-fetch');

/*fetch('https://restcountries.com/v2/all')
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data)
    })
    .catch((error) =>{
        console.log(error)
    })*/

    async function getCountries() {
        try{
            const response = await fetch ('https://restcountries.com/v2/all');
            const data = await response.json();
            let countriesList = "";
            data.forEach(country =>{
                countriesList+= `${country['name']}`;
            });

            //crear archivos

            fstat.writeFile('countries.csv', countriesList, (error) => {
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