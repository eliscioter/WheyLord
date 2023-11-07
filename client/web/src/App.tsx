import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import WebRoutes from './routes';
import { Toaster } from 'sonner';

function App() {

  return (
    <>
     <Toaster richColors position='top-right' />
      <WebRoutes />
    </>
  )
}

export default App
