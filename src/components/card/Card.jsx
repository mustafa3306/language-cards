import { useState } from "react"
import "./Card.css"

const Card = ({ name, img, options }) => {
    const [isClick, setIsClick] = useState(true);
    const [isHover, setIsHover] = useState(false);
    
    let resmim={
        transform: ""
        
    }

    let shadow={
        boxShadow: ""
    }

    if(isHover){
        resmim.transform="scale(1.2)"
        shadow.boxShadow = "1px 1px 5px 5px #E488FF"
    }
    else{
        resmim.transform=""
        shadow.boxShadow=""
    }


    return (
        <div style={shadow} className="container">
            {
                isClick
                ?
                <div 
                onMouseOver={() => setIsHover(true)} 
                onMouseOut={() => setIsHover(false)} 
                onClick={() => setIsClick(false)} className="first">
                <img style={resmim} src={img} alt="" />
                <h1>{name}</h1>
             </div>
             :
             <div onClick={()=> setIsClick(true)} className="second">
             {options.map((items)=>{
                 return <ul><li>{items}</li></ul>
             })}
             </div>
            }
            
            

        </div>
    )
}

export default Card
