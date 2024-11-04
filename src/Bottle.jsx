import './bottle.css'

const Bottle = ({bottle,handleAddBottle}) => {

    const {name,img,price} = bottle;

    // console.log(bottle);
    return (
        <div >
            
            <div className="bottle-container">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>${price}</p>
            <button onClick={()=>handleAddBottle(bottle)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Bottle;