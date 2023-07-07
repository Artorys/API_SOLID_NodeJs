import * as yup from "yup"

export const updateUserSchema = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  password: yup.string().notRequired(),
  admin: yup.boolean().notRequired()
})
