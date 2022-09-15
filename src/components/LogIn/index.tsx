import React, { useState } from "react"
import Modal from "../Modal"
import TextInput from "../TextInput"

interface ILogin {
  onLogin: (u: string, p: string) => void
}

interface ILoginState {
  name: string,
  email: string
}

const INIT_STATE = {
  name: '',
  email: ''
}

const Login: React.FC<ILogin> = ({ onLogin }) => {
  const [values, setValues] = useState<ILoginState>(INIT_STATE)
  const { name, email } = values

  const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setValues(prevState => ({ ...prevState, name: value }))
  }

  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setValues(prevState => ({ ...prevState, email: value }))
  }

  return (
    <Modal title="LOGIN" buttonName="Login" onOk={() => {onLogin(name, email)}}>
      <TextInput
        label="Name"
        name="name"
        placeholder="Enter your name"
        hideLabel={false}
        onChange={handleChangeName}
      />
      <TextInput
        label="Email"
        name="email"
        placeholder="Enter your email"
        hideLabel={false}
        onChange={handleChangeEmail}
      />
    </Modal>
  )
}

export default Login