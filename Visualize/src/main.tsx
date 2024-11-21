import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
export const mainContext = createContext(null as any)




const Main = () => {

  const [level, setLevel] = useState<number>(0)





  interface IState {
    server: boolean,
    queue: number

  }
  const [state, setstate] = useState<IState>({ queue: 0, server: false })
  const [nahad, addNahad] = useState<number>(0)



  const otp = [state, setstate, nahad, addNahad]
  return (
    <mainContext.Provider value={otp}>

      <App />
    </mainContext.Provider>

  )
}




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,


)
