function fromHTMLtoTable(string) {
    let data = JSON.parse(string);
    let table = '';
    table += (`<table>\n`);
    let heather = '';
    heather += ('   <tr>');
    for (let key of Object.keys(data[0])) {
        heather +=  (`<th>${key}</th>`);
    }
    heather += ('</tr>\n');
    table += heather;

    
    for (let row of data) {
        let tableData = '   <tr>';
        let student = Object.values(row);
        for (let sd of student){
            tableData += `<td>${sd}</td>`;
        }
       tableData += '</tr>\n';
       table += tableData;
    }
    table += `</table>`;
  //  console.log(table);
    let result = table.replace('<\g', '&lt').replace('>\g', '&gt'). replace('/\g', '//');
    return result;
}

//fromHTMLtoTable(`[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]`);
fromHTMLtoTable(`[{"Name":"Pesho", "Score":4, "Grade":8}, {"Name":"Gosho", "Score":5, "Grade":8}, 
    {"Name":"Angel", "Score":5.50, "Grade":10}]`);