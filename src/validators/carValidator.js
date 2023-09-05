import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().required(),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {
    carValidator
}