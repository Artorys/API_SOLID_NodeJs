import * as yup from "yup"

export const createUserSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  password: yup.string(),
  admin: yup.boolean().optional(),
})
