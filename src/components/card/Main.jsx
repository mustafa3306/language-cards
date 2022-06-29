import { languages } from "../../helper/data";
import Card from './Card';
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
         <h1 className="title">Languages</h1>   
        <div className="cards">
            {languages.map((item, index) => <Card {...item} key={index} />)}
        </div>
        </div>
    )
}

export default Main
