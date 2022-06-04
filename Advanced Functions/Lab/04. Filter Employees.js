function filter(data, criteria) {
    let parsedData = JSON.parse(data);
    let [key, value] = criteria.split('-');
    
    let result = parsedData.filter(p => (p[key] == value));
    for (i = 0; i < result.length; i++ ) {
        console.log(
            `${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`
        )
    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female'
)