import React, {useState} from "react";
import"./CandyBugClaws.css";

const choices = ["🍬candy🍬", "🐛bug🐛","🐾claws🐾" ];

const getResult = (player, computer) => {
    if (player === computer) return "A draw! Let's play one more time!";
    if (
        (player ==="🐛bug🐛" && computer === "🍬candy🍬") ||
        (player ==="🍬candy🍬" && computer === "🐾claws🐾") ||
        (player ==="🐾claws🐾"&& computer === "🐛bug🐛") 
    ){
        return 'YOU WON!';
    }
    return "GREMLIN WINS!"
};

export default function CandyBugClaws() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(""); 

    const handleChoice = (choice) => {
        const computer = choices[Math.floor(Math.random()*choices.length)];
        const outcome = getResult(choice, computer);
        setPlayerChoice(choice);
        setComputerChoice(computer);
        setResult(outcome);
    };

    return (
        <div className="Candybugclaws">
            <h2> Candy Bug Claws </h2>
            <div className="buttons">
                {choices.map((choice, index) =>(
                    <button key={index} onClick={() => handleChoice(choice)}>
                        {choice}
                    </button>
                ))}
            </div>
            <div className="results">
                {playerChoice && (
                    <p>
                        You chose {playerChoice} | Gremlin choses {computerChoice}
                    </p>
                )}
                <p className="Results">{result}</p>
            </div>
        </div>
    );
}