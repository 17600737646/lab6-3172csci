import Name from "./me/Name";
import Biography from "./me/Biography";
import Herf from "./me/Herf";
import './App.css';

//image from https://projectsekai.fandom.com/wiki/KAITO/Cards?file=Happy_Anniversary%2521%2521_%2528KAITO%2529.png
import KAITO from './Image/KAITO.jpg';

//main function
function App() {
    return (
        //call function
        <div className="App">

        <header className="App-header">
                <h1> My react APP </h1>
            </header>
            
                <h3 className = "App-About"> About me </h3>
            
                <Name/>
                <Biography />
                <Herf />
	       <p></p>
                <img src={KAITO} className="App-logo" alt="logo" />
            <p><b>KAITO</b></p>

</div>
    );
}
//output results
export default App;