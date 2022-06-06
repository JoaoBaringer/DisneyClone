import * as yup from 'yup'

const userSchema = yup.object().shape({
    name: yup.string().min(7).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

const createUser = async (event) => {
    event.preventDefault();
    let formData = {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
    }
    const isValid = await userSchema.isValid(formData)
    console.log(isValid)
}    

export default createUser