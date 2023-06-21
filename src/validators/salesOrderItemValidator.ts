import Joi from 'joi';

export const saleOrderItemSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    quantity: Joi.number().integer().min(1).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(3).max(255).required(),
    image: Joi.string().min(3).max(255).required(),
});
