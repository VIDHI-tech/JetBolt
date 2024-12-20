 import Home from './components/Home';
 import Headers from './components/Header';
 import Feature from './components/Feature';
 import DefinJB from './components/DefinJB';
 import Alpha from './components/Alpha';
 import Why from './components/Why';
import {NextUIProvider} from "@nextui-org/react";
import Tokenomics from './components/Tokenomics';
 
const App = () => {
  return (
    <NextUIProvider className='lg:px-[calc(50%-500px)] bg-n-8'>
        <Headers/>
        <Home/> 
        <Feature/>
        <DefinJB/>
        <Why/>
        <Alpha/>
        <Tokenomics/>
    </NextUIProvider>
  )
}
export default App;
 
