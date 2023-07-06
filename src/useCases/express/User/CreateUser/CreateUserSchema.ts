import * as yup from "yup"

export const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  admin: yup.boolean().notRequired().default(false)
})
