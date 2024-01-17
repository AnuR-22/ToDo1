import logo from './logo.svg';
import './App.css';
// import IncDec from './IncDec.js';
// import Footer from './Footer.js';
// import Header from './Header.js';
import {useState} from 'react';
// import Calc from './Calc.js';
import InputBox from './InputBox.js';
 import Excercise1 from './Excercise1.js';
// import CountV from './CountV.js';
// import ClassComponents from './ClassComponents.js';
// import ArrayDemo from './ArrayDemo.js';
// import Table from './Table.js';
 import Student from './Student.js';
 import Student2 from './Student2.js';
import PropsDemo from './PropsDemo.js';
// import Practies from './Practies.js';
// import Status from './Status.js';
// import Form from './Form.js';
import Parent from './Parent.js';
import LiftingstateUp from './LiftingstateUp.js';
import Child from './Child.js';
import Button from 'react-bootstrap/Button'; 
import Badge from 'react-bootstrap/Badge';
import LifeCycle from './Components/LifeCycle.js';
import UseEffectDemo from './Components/UseEffectDemo.js';
import Table from 'react-bootstrap/Table';
import AxiosDemo from './Components/AxiosDemo.js';
import AxiosDemo2 from './AxiosDemo2.js';
import AxiosDemo3  from './AxiosDemo3.js';
import Ownpracties from './Components/Ownpracties.js';
import Newscard from './Components/Newscard.js';
import MyNav from './Components/MyNav';
import BlogsPost from './Components/BlogsPost';
import Filter from './Components/Filter.js';
import Blogpost1 from './Components/Blogpost1.js';
// import { link,
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// import Home from './Components/Home.js';
// import About from './Components/About.js';
// import Navbar1 from './Components/Navbar1.js';
// import Show from './Components/Show.js';
import Purecomponent from './Components/Purecomponent.js';
import UseMemoDemo from './Components/UseMemoDemo.js';
import HigherOrderCDDemo from './Components/HigherOrderCDDemo.js';
import UncontrolledComponent from './Components/UncontrolledComponent.js';
import ControlComponentDemo from './Components/ControlComponentDemo.js';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BankingProject from './Components/BankingProject.js';
import Personal from './Components/Personal.js';
import NRI from './Components/NRI.js';
import SME from './Components/SME.js';
import Wholesale from './Components/Wholesale.js';
import Agri from './Components/Agri.js';
import Blog from './Components/Blog.js';
import Location from './Components/Location.js';

    function App() {
// const[data,setdata]=useState();
// const show=(data)=>{console.log(data)
// setdata(data)}

    // const [myclr,setClr]=useState();
    // const getData=(e)=>setClr(e.target.value)
   
  return ( 
  <div >
     <BrowserRouter>
    <Routes>
      <Route  path="/" element={<BankingProject/>}></Route>
      <Route  path="/" element={<Personal/>}></Route>
      <Route path="NRI" element={<NRI/>}></Route>
      <Route path="SME" element={<SME/>}></Route>
      <Route path="Wholesale" element={<Wholesale/>}></Route>
      <Route path="Agri" element={<Agri/>}></Route>
      <Route path="Location" element={<Location/>}></Route>
      <Route path="Blog" element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
    
    
     
    {/* <Show/>
    <Purecomponent/>
    <UseMemoDemo/>
    <HigherOrderCDDemo/>
    <UncontrolledComponent/>
   <ControlComponentDemo/>
      <MyNav/> 
    
     <Routes>
       <Route path="/page/:id" element={<BlogsPost/>}/>
//        <Route path="/page/:id" element={<Filter/>}/>  
      </Routes> 
         <Ownpracties/> */}
      {/* <Newscard/>
       <LiftingstateUp myclr={myclr}/>
    <h1>Name is App:</h1>
     <Child show={show}/> 
 <Button >click</Button> 
                   <Parent/>       
       <Form/> 
     <Status/>   
    <Practies/> 
        <input type="text" onChange={getData}/> 
       
       <PropsDemo  myclr={myclr} />  */}
        
         {/* <Student2 name={'Ranju'}/> 
       <Student name={'Anu'} email={'Anu@gmail.com'} /> 
      
       <Student name={'Raju'} email={'Raju@gmail.com'}/>
       
       <Student name={'Birju'} email={'Birju@gmail.com'}/>  */}

       {/* <Header/>
       <h1>Anu</h1>
       <h2>
        This parameters are
      </h2>
      <Table/>
      <ArrayDemo/>
      <ClassComponents/>
       */}
         {/* <InputBox/> */}
        {/* <Calc/>
      <IncDec />
      <Footer/>
       <CountV/>    */}
            {/* <Excercise1/>  */}
        
   </div>
   
    
   );
    } 

// function App() {
//   const[num,setNum]=useState(9)
//   const inc=()=>setNum(num+1);
//   const dec=()=>setNum(num-1);
  
//   return (
//     <Button  variant="primary">
//       Profile <Badge bg="secondary">{num}</Badge>
//       <button onClick={inc}>+</button>
//             <button onClick={dec}>-</button>
//       <span className="visually-hidden">unread messages</span>
//     </Button>
    
//   );
// }

// function App() {
  
//   return (
//     <Table striped="columns">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }
//  function App() {
//   const data = [
//       {
//           name: "Anu",
//           age: 23,
//           salary: 5000
//       },
//       {
//           name: "Sonu",
//           age: 25,
//           salary: 10000
//       },
//       {
//           name: "BR",
//           age: 20,
//           salary: 20000
//       },
//   ]
//   return (
    
//           <Table striped="columns">
//               <thead>
//                   <tr>
//                       <th>Name</th>
//                       <th>Age</th>
//                       <th>Salary</th>
//                   </tr>
//               </thead>
//               <tbody>
//                   {
//                       data.map((val, i) =>
//                           <tr>
//                               <td>{val.name}</td>
//                               <td>{val.age}</td>
//                               <td>{val.salary}</td>
//                           </tr>
//                       )
//                   }
//               </tbody>
//           </Table>
      
//   )
// }


//  function App(){
//    const[status,setStatus]=useState(true)
//     return(
//          <div>
//             <AxiosForm/>
//              {/* { 
               
//                status
//            ?<LifeCycle/>
//             :<h1>No Child to load</h1>

//             }
             
//             <button onClick={()=>setStatus(!status)}>click to toggle</button>
//             <UseEffectDemo/> */}
//        </div>
//      )
//  }

// 

// function App(){
//   return(
//     <div>
//        <AxiosDemo/>
//       <AxiosDemo2/> 
//       <AxiosDemo3/>
//     </div>
//   )
// }
 
// function App() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route
//                         exact
//                         path="/"
//                         element={<Home />}
//                     />
//                     <Route
//                         exact
//                         path="/about"
//                         element={<About />}
//                     />
//                 </Routes>
//                 <Navbar1/>
//             </BrowserRouter>
//         </>
        
        
//     );
// }
 

export default App;