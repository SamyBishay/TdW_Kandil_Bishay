import React, {useState} from 'react';
import Cards from './Cards';

function CardList(){
    const [cards, setCards] = useState([
        { symbol : "Heart",value:"Ace",suit: "Red",visible: true},
        {symbol : "Diamond",value:"King", suit: "Red", visible:true},
        { symbol : "Space",value:"Queen",suit: "Black",visible: false},
        {symbol : "Club",value:"Jack", suit: "Black", visible:true},

    ]);

    return (
        <div className="CardList">
        {cards.map((card,index)=>(
            <Cards key={index} symbol={card.symbol} value={card.value} suit={card.suit} visible={card.visible} />
        ))}
        </div>
    );
}

export default CardList;