 import Home from './components/Home';
 import Headers from './components/Header';
 import Feature from './components/Feature';
 import DefinJB from './components/DefinJB';
import {NextUIProvider} from "@nextui-org/react";
 
const App = () => {
  return (
    <NextUIProvider className='lg:px-[calc(50%-500px)] bg-n-8'>
        <Headers/>
        <Home/> 
        <Feature/>
        <DefinJB/>
    </NextUIProvider>
  )
}
export default App;
 
