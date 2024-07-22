import recipes from "./recipes.json";
import BoxRecipes from "./component/BoxRecipes/BoxRecipes";
import ListRecipes from "./component/ListRecipes/ListRecipes";
import './App.css';

import styled from "styled-components";

const BorderBox = styled.div`
max-width: 1502px;
margin-right: auto;
margin-left: auto;
border-radius: 36px;
border: 2px solid  rgb(	161 35 43);
background-color: white;
`


function App() {
  return (
    <>
      <BoxRecipes>
        <BorderBox>
          <ListRecipes recipes = {recipes} />
          </BorderBox>
       
      </BoxRecipes>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
