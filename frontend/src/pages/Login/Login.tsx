//Para hacer fetch y validacion de mock data
// import data from '@/data/users.mock.json'
// {
//   "username": "admin@admin.com",
//   "password": "1234"
// }
import { Input } from "@/components/ui/input"

const Login: React.FC = () => {

  return (
    <>
    <div className='container flex'>
      <div className='left'>
          <p className="bold">Controlá tu producción de manera inteligente y sencilla</p>
          <img src="" alt="" />
      </div> 
      <div className='right'>
        <p>Iniciar sesión</p>
        Mail
        <Input />
        Contraseña
        <Input />
      </div>
    </div>
    </>
  )
}

export default Login