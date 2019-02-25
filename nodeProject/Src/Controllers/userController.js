const fs = require('fs');
const users = require('../Models/user');
const xlsx = require('node-xlsx');
const XLSX = require('xlsx');
var rp = require("request-promise");


const addNewUser = (request, reply) => {
    users.user.create(request.payload, (err, data) => {
        if (err) reply(err).code(500);
        reply(data);
    });
};

const loginUser = (request, reply) => {
    if(request.payload.socialID !== undefined) {
        users.user.findOne({socialID: request.payload.socialID}, (err, data) => {
            if(!data){
                users.user.create(request.payload, (err, data1) => {
                    reply(data1);
                })
            } else {
                reply(data);
            }
        })
    } else {
        users.user.findOne({email: request.payload.email, password: request.payload.password}, (err, data) => {
            reply(data);
        })
    }
};





const _getAllUsers = (request, reply) => {
    return users.user.find({}).exec().then(data => {
        // reply(data);

        // for (var i=0; i< 5; i++)
        // {
        console.log('_getAllUsers success ', i);
        console.log('priority : ', request.params.priority);

            return limiter.schedule(request, reply)
                .then(function (reply) {
                    reply(data);
                    console.log('Weather data is', response);
                })
                .catch(function (err) {
                    // API call failed...
                });
        // }
    })
};

const getAllUsers =  (request, reply) => {

    limiter.schedule(_getAllUsers, request, reply);
};

// const getAllUsers = limiter.wrap(_getAllUsers);

const updateUser = (request, reply) => {
    const condition = {
        _id: request.params.userId
    };

    const data = {
        firstName: request.payload.firstName
    };

    users.user.update(condition, data, (error, result) => {
        if (error) reply(error).code(500);
        reply(result);
    })
};

const deleteUser = (request, reply) => {
    const condition = {
        _id: request.params.userId
    };

    users.user.remove(condition, (err, data) => {
        if (err) reply(error).code(500);
        reply(data);
    });
};


/**
 * create JSON structure for adding data to DB
 * @param data
 * @returns {Array}
 */
let parseExcel = (data) => {

    let myJSON = [];
    for (let i = 0; i < data.length; i++) {
        let tmp = {
            "name": data[i]["Username"],
            "email": data[i]["email"],
            "password": data[i]["password"]
        };

        // findAndCreateUser(tmp,i).then(data => {
        //     console.log(errorRow);
        // })
        myJSON.push(tmp);
    }

    return myJSON;
};

let bulkUploadUser = (request, reply) => {

    const fileName = request.payload.document.hapi.filename;

    request.payload["document"].pipe(
        fs.createWriteStream("Public/" + fileName))
        .on('finish', (data) => {
            let d = XLSX.readFile("Public/" + fileName);
            let newData = XLSX.utils.sheet_to_json(d.Sheets.Sheet1);
            let myNewJSON = parseExcel(newData);
            if (myNewJSON.length) {
                users.insertMany(myNewJSON).then(data => {
                    reply({ result: "successfully added user", data: data }).code(200);
                });
            }
        });
};


module.exports = {
    addNewUser: addNewUser,
    getAllUsers: getAllUsers,
    updateUser: updateUser,
    deleteUser: deleteUser,
    bulkUploadUser: bulkUploadUser,
    loginUser: loginUser
};
