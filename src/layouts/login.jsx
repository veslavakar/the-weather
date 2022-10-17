import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TextField from '../components/textField'
import { validator } from '../utils/validator'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }))
  }

  useEffect(() => {
    validate()
  }, [data])

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Электронная почта введена некорректно' },
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'Должен содержать как минимум одну заглавную букву',
      },
      isDigitalSymbol: { message: 'Должен содержать как минимум одну цифру' },
      min: { message: 'Пароль должен содержать минимум 8 символов', value: 8 },
    },
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button disabled={!isValid}>Submit</button>
    </form>
  )
}

export default Login
