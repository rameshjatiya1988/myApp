const users = require('../Models/user');
const userValidation = require('../Validations/userValidation');
const userController = require('../Controllers/userController');


module.exports = [{
    method: 'POST',
    path: '/user',
    config:{
        description: 'Register user',
        tags: ['api', 'MyApp'],
        plugins: {
            'hapi-swagger': {
                responses: {
                    '200': { 'description': 'Success' },
                    '400': { 'description': 'Bad Request' },
                    '401': { 'description': 'Invalid credentials' },
                    '500': { 'description': 'Exception at server side' }
                }
            }
        },
        handler : userController.addNewUser,
        validate : userValidation.addNewUser
    }
},{
    method: 'POST',
    path: '/login',
    config:{
        description: 'authenticate user',
        tags: ['api', 'MyApp'],
        plugins: {
            'hapi-swagger': {
                responses: {
                    '200': { 'description': 'Success' },
                    '400': { 'description': 'Bad Request' },
                    '401': { 'description': 'Invalid credentials' },
                    '500': { 'description': 'Exception at server side' }
                }
            }
        },
        handler : userController.loginUser,
        validate : userValidation.loginUser
    }
},
    {
        method :'GET',
        path:'/user',
        config : {
            description: 'Get all users',
            tags: ['api', 'MyApp'],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': { 'description': 'Success' },
                        '400': { 'description': 'Bad Request' },
                        '401': { 'description': 'Invalid credentials' },
                        '500': { 'description': 'Exception at server side' }
                    }
                }
            },
            handler: userController.getAllUsers
        }
    },
    {
        method:'PUT',
        path:'/user/{userId}',
        config : {
            description: 'Update user info',
            tags: ['api', 'MyApp'],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': { 'description': 'Success' },
                        '400': { 'description': 'Bad Request' },
                        '401': { 'description': 'Invalid credentials' },
                        '500': { 'description': 'Exception at server side' }
                    }
                }
            },
            handler: userController.updateUser,
            validate : userValidation.updateUserInfo
        }
    },
    {
        method:'DELETE',
        path:'/user/{userId}',
        config : {
            description: 'Delete user',
            tags: ['api', 'MyApp'],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': { 'description': 'Success' },
                        '400': { 'description': 'Bad Request' },
                        '401': { 'description': 'Invalid credentials' },
                        '500': { 'description': 'Exception at server side' }
                    }
                }
            },
            handler:userController.deleteUser,
            validate : userValidation.getUserInfo
        }
    },
    {
        method :'POST',
        path:'/uploadFile',
        config : {
            payload: {
                maxBytes: 209715200,
                output: 'stream',
                parse: true,
                allow: 'multipart/form-data',
                timeout: 60000
            },
            description: 'Upload file',
            tags: ['api', 'MyApp'],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': { 'description': 'Success' },
                        '400': { 'description': 'Bad Request' },
                        '401': { 'description': 'Invalid credentials' },
                        '500': { 'description': 'Exception at server side' }
                    }
                }
            },
            handler: userController.bulkUploadUser,
            validate : userValidation.uploadExcelFile
        }
    }
];