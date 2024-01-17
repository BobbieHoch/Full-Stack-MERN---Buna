import {createRoot} from "react-dom/client"

const TODOS = ["Learn React", "Build Something"]

const App = () => {
   return <div>
      <h1>Hello React</h1>
   
      <h2>With JSX</h2>
      {TODOS.map((element) => {
         return <li>{element}</li>
      })}

   </div>;
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);