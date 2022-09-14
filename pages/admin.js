import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input, Button
} from "@material-tailwind/react"

import { storeLoginCookie, checkLoginCookie } from "../utils/cookies";
import Header from "../components/Head/Header";
import Loader from '../components/Loader/Loader'
import Error from "../components/Error/Error";

const Admin = () => {
  const [ data, setData ] = useState({ user: '', pass: '' })
  const [ listErrors, setListErrors ] = useState([])
  const [ error, setError ] = useState(false)
  const [ loader, setLoader ] = useState(false)
  const router = useRouter()

  useEffect( () => {
    const Login =  checkLoginCookie()

    if (Login) {
      router.push('/admin/dashboard')
    }
  }, [router])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { user, pass } = data

    setLoader(true)

    if (user === '' || pass === '') {
      setError(true)
      setListErrors([...[{ text:'Usuario y Contraseña obligatorios', typeToast: "danger" }]])
      setLoader(false)

      return
    }

    if (user === 'prueba' && pass === 'prueba12343') {
      setLoader(false)
      setError(false)
      storeLoginCookie()

      router.push('/admin/dashboard')
    } else {
      setLoader(false)
      setError(true)
      setListErrors([ { text:'Usuario o Contraseña incorrectos', typeToast: "danger" } ])

      return
    }
  }

  const handleUser = (e) => {
    setError(false)
    setData({ user: e.target.value, pass: data.pass })
  }

  const handlePass = (e) => {
    setError(false)
    setData({ user: data.user, pass: e.target.value })
  }

  return (
    <>
      <Header text="Login" />
      <div className="flex justify-center content-center mt-[30vh]">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Iniciar Sesión
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Correo"
              size="lg"
              type="email"
              onKeyUp={ handleUser }
            />
            <Input
              label="Contraseña"
              size="lg"
              type="password"
              onKeyUp={ handlePass }
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={ handleSubmit }
              fullWidth
            >
              Iniciar
            </Button>
          </CardFooter>
        </Card>
      </div>

      {
        loader ? <Loader /> : null
      }

      {
        error &&
          <Error
            listMessages={ listErrors.length === 0 ? [ { text:'Un error ocurrio', typeToast: "danger" } ] : listErrors }
            duration="5000"
          />
      }
    </>
  )
}

export default Admin;
