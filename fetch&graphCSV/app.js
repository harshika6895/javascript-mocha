
chartIt();

async function getData(){
    const xLabels = [];
    const yTemps = [];
    const yNorth = [];
    const ySouth = [];

    const response = await fetch('zonal_annual_means.csv');
    const table = await response.text();


    let rows = table.split('\n').slice(1);
    rows.forEach(row=>{
        const columns = row.split(','); 

        const year = columns[0];
        xLabels.push(year);
        const temp = columns[1];
        yTemps.push(parseFloat(temp)+14);//we have the global temperature as the difference from the mean i.e. 14C
        const nTemp = columns[2];
        yNorth.push(parseFloat(nTemp)+14);
        const sTemp = columns[3];
        ySouth.push(parseFloat(sTemp)+14);
        console.log(year , temp , nTemp , sTemp);
    });
    return {xLabels , yTemps , yNorth , ySouth};
}


