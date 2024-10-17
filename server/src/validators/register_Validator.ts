import Joi from 'joi';

const registerValidators = {
  add: Joi.object({
    email: Joi.string().required(),
    full_name: Joi.string().required(),
    organization: Joi.string().required(),
    status: Joi.string().required(),
    asg_member_id: Joi.string().optional(),
    registerFee: Joi.number().required(),
  }),
};

export default registerValidators;
