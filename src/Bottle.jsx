import './bottle.css'

const Bottle = ({bottle}) => {

    const {name,img,price} = bottle;

    console.log(bottle);
    return (
        <div >
            
            <div className="bottle-container">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>${price}</p>
            </div>
        </div>
    );
};

export default Bottle;