//file system module
const fs = require('fs');


const userRequests = {

    adduser(username, age) {
        const dataStruc = {
            username: null,
            age: null
        }
        const data = fs.readFileSync('datasource.json', 'utf-8');
        let newData = JSON.parse(data);
        let prop = Object.create(dataStruc);
        prop.username = username
        prop.age = age
        newData.push(prop)
        // write 
        fs.writeFileSync('datasource.json', JSON.stringify(newData));
    },

    getusers() {
        const data = fs.readFileSync('datasource.json', 'utf-8');
        let newData = JSON.parse(data);
        return newData;
    }

};

module.exports = userRequests;