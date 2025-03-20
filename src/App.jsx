// import { SwitchComponent } from './snack/Snack1'
// import useDate from './snack/Snack2'
import useCustomPointer from './snack/Snack3';
import './App.css'

function App() {
  // const currentDate = useDate()
  const customPointer = useCustomPointer("🔥");
  return (
    <>
  

  {/* <div>
      <h1>test useSwitch</h1>
    <SwitchComponent/>
    </div> */}
   {/* <div>
      <h2>
        test useDate
      </h2>
      <p>{currentDate.toLocaleString()}</p>
    </div> */}
      <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>

    </>
  )
}

export default App
