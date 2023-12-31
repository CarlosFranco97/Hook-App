import React from 'react'
import ReactDOM from 'react-dom/client'
// import {HooksApp} from './HooksApp'
import './index.css'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormularioConCustomHook } from './02-useEffect/FormularioConCustomHook'
import {MultipleCustomHooks} from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';
import {Padre} from './07-tarea-memo/Padre'; 
import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp';
import { Main } from './09-useContext/Main';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  
//   /* <HooksApp/> */
//     /* <CounterWithCustomHook/> */
//     /* <SimpleForm/> */
//     /* <FormularioConCustomHook /> */
//     // <MultipleCustomHooks/>
//     // <FocusScreen />
//     // <Layout />
//     // <Memorize />
//     // <MemoHook />
//     // <CallbackHook/>
//     <Padre />
//  <TodoApp /> 

<BrowserRouter>
<Main />
</BrowserRouter>
    
)
