import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input, Button
} from "@material-tailwind/react"

const Admin = () => (
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
        <Input label="Correo" size="lg" />
        <Input label="Contraseña" size="lg" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Iniciar
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default Admin;
