
import './App.css'
import { LoginProvider } from './components/contextapis/loginContext'
import AllRoutes from './routes/AllRoutes'

function App() {

  return (
   <>
   <LoginProvider>
      <AllRoutes/>
   </LoginProvider>
   </>
  )
}


export default App
