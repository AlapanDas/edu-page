
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
//  import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dsapage from './components/Dsapage';
import Array from './components/Array';
import About from './components/About';
import Footer from './components/Footer';
import Linked from './components/Linked';
import Stack from './components/Stack';
import Binary from './components/Binary';
import Hashing from './components/Hashing';
import Heap from './components/Heap';
import Binarysearchtree from './components/Binarysearchtree';
import Queue from './components/Queue';
import Dynamic from './components/Dynamic';
import Programming from './components/Programming';
import C from './components/C';
import CFundamentals from './components/CFundamentals';
import DataTypesAndOperators from './components/DataTypesAndOperators';
import Python from './components/Python';
import PythonFundamentals from './components/PythonFundamentals';
import Javaoverview from './components/Javaoverview';
import Java from './components/Java';
import Jdata from './components/Javadatatypes';
import Coperator from './components/Coperator'
import Loop from './components/Loop'
import Function from './components/Function'
import Variables from './components/variable'
import Error from './components/Error and Expectation'
import FileHandling from './components/FileHandling'
import Cpp from './components/Cpp';
import CppFundamentals from './components/CppFundamentals';
import Cppstl from './components/Cppstl';
import ConditionalAndLooping from './components/ConditionalAndLooping';
import StringsPython from './components/StringsPython';






function App() {
  // const [mode,setMode] = useState('black');
  // const [alert,setAlert] =useState(null);
  // const showAlert = (message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(()=>{
  //     setAlert(null)

  //   },1500);
  // }
  // const toggleMode = ()=>{
  //   if(mode==='black' ){
  //     setMode('white')
      
  //     document.body.style.backgroundColor='black';
     
  //     showAlert("Dark Mode Has Been Enable","Success");
  //   }
  //   else{
  //     setMode('black')
 
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light Mode Has Been Enable","Success");
  //   }
  // }
 
  return (
    
     <>
     
     < Navbar />
     {/* <Alert alert={alert}/>  */}
    <Routes>
          
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/dsa' element={<Dsapage/>}/>
      <Route exact path='/about' element={<About />}/>
      <Route exact path='/dsa/array' element={<Array/>}/>
      <Route exact path='/dsa/linked' element={<Linked/>}/>
      <Route exact path='/dsa/stack' element={<Stack/>}/>
      <Route exact path='/dsa/queue' element={<Queue/>}/>
      <Route exact path='/dsa/binary' element={<Binary/>}/>
      <Route exact path='/dsa/heap' element={<Heap/>}/>
      <Route exact path='/dsa/Binarysearchtree' element={<Binarysearchtree/>}/>
      <Route exact path='/dsa/hashing' element={<Hashing/>}/>    
      <Route exact path='/dsa/dynamic' element={<Dynamic/>}/>
      <Route exact path='/programming' element={<Programming/>}/>

      
      <Route exact path='/programming/python' element={<Python/>}/>
      <Route exact path='/programming/java' element={<Java/>}/>
      <Route exact path='/programming/python/PythonFundamentals' element={<PythonFundamentals/>}/>
      <Route exact path='/programming/python/DataTypesAndOperators' element={<DataTypesAndOperators/>}/>
      <Route exact path='/programming/javaoverview' element={<Javaoverview/>}/>
      <Route exact path='/programming/javadatatypes' element={<Jdata/>}/>
      <Route exact path='/programming/python/ConditionalAndLooping' element={<ConditionalAndLooping/>}/>
      <Route exact path='/programming/python/StringsPython' element={<StringsPython/>}/>
       <Route exact path='/programming/C' element={<C/>}/>
      <Route exact path='/programming/C/CFundamentals' element={<CFundamentals/>}/>
      <Route exact path='/programming/C/Variables' element={<Variables/>}/>
      <Route exact path='/programming/C/Error' element={<Error/>}/>
      <Route exact path='/programming/C/FileHandling' element={<FileHandling/>}/>     
      <Route exact path='/programming/C/Coperator' element={<Coperator/>}/>

      <Route exact path='/programming/python/DataTypesAndOperators' element={<DataTypesAndOperators/>}/>
      <Route exact path='/programming/C/FileHandling' element={<FileHandling/>}/>
      <Route exact path='/programming/C/Coperator' element={<Coperator/>}/>
      <Route exact path='/programming/C/Loop' element={<Loop/>}/> 
      <Route exact path='/programming/C/Function' element={<Function/>}/> 
      <Route exact path='/programming/Cpp' element={<Cpp/>}/>
      <Route exact path='/programming/Cpp/fundamentals' element={<CppFundamentals/>}/>
      <Route exact path='/programming/Cpp/list' element={<Cppstl/>}/>
       </Routes>  
       <Footer/>
      </>
  
  );
}

export default App;
