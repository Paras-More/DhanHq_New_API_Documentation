import Router from './Routes/Router'
import { SelectTypeProvider } from './Context/SelectType';

function App() {
  

  return (
    <div className='w-full relative'>
      <SelectTypeProvider>
          <Router/>
       </SelectTypeProvider>
    </div>
  )
}

export default App
