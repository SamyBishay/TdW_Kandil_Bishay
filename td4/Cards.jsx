import { useState } from "react";
import "./Cards.css"

function Cards(props) {
    const [IsVisible, setIsVisible] = useState(props.visible);

    const handleClick = () => {
      setIsVisible(! IsVisible);
    }
    return (
        <div className="Cards" onClick = {handleClick}>
        {IsVisible ? (
        <>          
        <p>symbol: {props.symbol} </p>
        <p>value: {props.value}</p>
        <p>suit: {props.suit} </p>
        </>
        ):(
          <p>-</p>
        )
        }
      </div>
    );
  }
export default Cards