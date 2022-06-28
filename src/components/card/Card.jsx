import "./Card.css"

const Card = ({ name, img, options }) => {

    return (
        <div className="container">
            <div className="first">
               <img src={img} alt="" />
               <h1>{name}</h1>
            </div>
            <div className="second">
            {options.map((items)=>{
                return <li>{items}</li>
            })}
            </div>
        </div>
    )
}

export default Card
