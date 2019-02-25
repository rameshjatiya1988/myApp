const  Joi = require('joi');

const addNewUser = {
  payload : {
      name: Joi.string().optional(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(20).required().allow(''),
      socialID: Joi.string().optional().allow('')
  }
};

const loginUser = {
    payload : {
        name: Joi.string().optional(),
        socialID: Joi.string().optional(),
        email: Joi.string().email().optional(),
        password: Joi.string().min(6).max(20).optional().allow(''),
    }
};


const getUserInfo = {
    params : {
        userId: Joi.string().required()
    }
};

const updateUserInfo = {
    params : {
        userId: Joi.string().required()
    },
    payload: {
        name: Joi.string().optional()
    }
};

const uploadExcelFile = {
    payload : {
        // document : Joi.any()
    }
};

module.exports = {
    addNewUser : addNewUser,
    getUserInfo : getUserInfo,
    updateUserInfo : updateUserInfo,
    uploadExcelFile : uploadExcelFile,
    loginUser: loginUser
};