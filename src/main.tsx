import { createRoot } from 'react-dom/client'
import App from "./App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

//using non-null assertion
const domNode = document.getElementById('root') as HTMLElement;
// console.log(domNode)

// if(!rootElement){
//   throw new Error('Failed to find root element')
// }

// const root = createRoot(rootElement)
// root.render(
//     <App />
// );

// React 18 uses createRoot instead of ReactDOM.createRoot
const root = createRoot(domNode);
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)
   