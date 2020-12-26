import React, { useState, useEffect } from 'react';
import './Criss.css';
function CrissCross(props) {

    const [sign, setSign] = useState(props.location.state.sign);
    const [final, setFinal] = useState([]);
    const [won, setWon] = useState("");

    useEffect(() => {
        
        if((final[0] && final[0]===final[1] && final[0]===final[2]) ||
         (final[0] && final[0]===final[3] && final[0]===final[6]) ||
          (final[0] && final[0]===final[4] && final[0]===final[8]) ||
           (final[1] && final[1]===final[4] && final[1]===final[7]) ||
            (final[2] && final[2]===final[5] && final[2]===final[8]) || 
            (final[3] && final[3]===final[4] && final[3]===final[5]) || 
            (final[2] && final[2]===final[4] && final[2]===final[6]) || 
            (final[6] && final[6]===final[7] && final[6]===final[8]))
            {
                
                if(props.location.state.sign !== sign){
                    setWon(props.location.state.firstPerson)
                }else{
                    setWon(props.location.state.secondPerson)
                }
            }
            
            let count = 0;
            for(let i=0; i<final.length; i++){
                if(final[i] !== undefined){
                    count++;
                }
            }

            if(count===9){
                setWon("Game Tied no one")
            }
            
    }, [sign])

    const cellClicked = (e) => {
        const newArr = [...final]
        if(!final[e.currentTarget.id]){
            if(sign === "O"){
                setSign('X');
                newArr[e.currentTarget.id] = 'X';
                setFinal(newArr)
            }else {
                setSign('O');
                newArr[e.currentTarget.id] = 'O';
                setFinal(newArr);
            }
        }else{
            let x = final.indexOf(undefined);
            if(x !== -1){
                alert("Please select somewhere else ...")
            }
        }

        console.log(final);
    }

    const startNew = () => {
        setFinal([]);
        setSign(props.location.state.sign);
        setWon("");
    }

    const startNewOthers = () => {
        props.history.push('/crissCrossNameSign')
    } 
    
    return (
        <>
        
        <div className="containerGame">
            
            

            {
                won === "" ? <table className="table" style={{margin:'auto', textAlign:'center'}}>
                <tbody>
                    <tr className="trCriss">
                        
                        <td className="tdCriss" name="0" id="0" onClick={cellClicked}>{final[0]}</td>
                        <td className="tdCriss" name="1" id="1" onClick={cellClicked}>{final[1]}</td>
                        <td className="tdCriss" name="2" id="2" onClick={cellClicked}>{final[2]}</td>
                    </tr>
                    <tr className="trCriss">
                        <td className="tdCriss" name="3" id="3" onClick={cellClicked}>{final[3]}</td>
                        <td name="4" className="tdCriss" id="4" onClick={cellClicked}>{final[4]}</td>
                        <td name="5" className="tdCriss" id="5" onClick={cellClicked}>{final[5]}</td>
                    </tr>
                    <tr className="trCriss">
                        <td name="6" className="tdCriss" id="6" onClick={cellClicked}>{final[6]}</td>
                        <td name="7" className="tdCriss" id="7" onClick={cellClicked}>{final[7]}</td>
                        <td name="8" className="tdCriss" id="8" onClick={cellClicked}>{final[8]}</td>
                    </tr>
                </tbody>
            </table> :

            <div className="App">
                <h5 style={{color : "white"}}>{won} Wons</h5>
                <div className="App" onClick={startNew}><button>Start New Game for Us ...</button></div>
                <div className="App" onClick={startNewOthers}><button>Start New Game for Others ...</button></div>
            </div>
        
            }



            </div>
            
          </>
    )
}

export default CrissCross
