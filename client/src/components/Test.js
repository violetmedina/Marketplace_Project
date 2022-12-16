import {useState} from 'react'

const Test = () => {
    const [userInput, setUserInput] = useState("");

    // this function will analyze the text entered by the user and display the number of occurrences of each letter of the alphabet.
    const analyzeText = (text) => {
        let counts = new Array(26).fill(0); // to store count of each letter
        for (let i = 0; i < text.length; i++) {
            let index = text[i].charCodeAt(0) - 97; // get index in array using char code at 0th position in string
            if (index >= 0 && index < 26)
                // only if character is an alphabet
                counts[index] += 1; // incrementing the count corresponding to that character
        }
        return counts;
    };
    return (
        <div>
            <h1>Text Analysis</h1>
            <input
                type="text"
                placeholder="Enter your text here..."
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button
                onClick={() => {
                    const counts = analyzeText(userInput);
                    // display results in a div
                    let output = "Letter\tCount\n";
                    for (let i = 0; i < counts.length; i++) {
                        let letter = String.fromCharCode(97 + i);
                        output += `${letter}\t${counts[i]}\n`;
                    }
                    document.getElementById("result").innerHTML = output;
                }}
            >
                Analyze Text
            </button>{" "}
            <div id="result"></div>{" "}
        </div>
    );
};

export default Test;