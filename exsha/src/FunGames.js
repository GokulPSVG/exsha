import React, { useState } from 'react'

const FunGames = () => {
  
  const [computer,setcomputer]=useState('Rock/Paper/Scissors')
  const [finalResult,setfinalResult]=useState('')

  const randomChoice=Math.ceil(Math.random()*3);
  const computerChoice= randomChoice<2||0?'Rock':randomChoice<3?'Paper':randomChoice<4?'Scissors':' ';

  const handelRock=(response)=>{
      const result = computerChoice==='Rock'?'Tie!':computerChoice==='Scissors'?'You won':'Computer won';
      setcomputer(computerChoice)
      setfinalResult(result)       
  }

  const handelPaper=(response)=>{
      const result= computerChoice==='Paper'?'Tie!':computerChoice==='Rock'?'You won':'Computer Won';
      setfinalResult(result) 
      setcomputer(computerChoice)
  }

  const handelScissor=(response)=>{
      const result= computerChoice==='Scissors'?'Tie':computerChoice==='Rock'?'Computer won':'You won';
      setfinalResult(result) 
      setcomputer(computerChoice)
  }
 
  return (
    <div className='funGames'>
          <h3>Rock Paper Scissors</h3>
          <p className='botResponse'>
            <span style={{fontWeight:'bold'}}>Bot: </span>
                {computer==='Rock'?<img src={require('./images/rock.png')} style={{backgroundColor:'skyblue'}} alt='gameIcon' title='rock' height={50}px width={50}></img>: <img src={require('./images/rock.png')} alt='gameIcon' title='rock' height={50}px width={50}></img>}
                {computer==='Paper'? <img src={require('./images/paper.png')} style={{backgroundColor:'skyblue',padding:'5px'}} alt='gameIcon' title='paper' height={40}px width={40}></img> : <img src={require('./images/paper.png')} alt='gameIcon' title='papre' height={40}px width={40}></img>}
                {computer==='Scissors'? <img src={require('./images/scissors.png')} style={{backgroundColor:'skyblue',padding:'1px'}} alt='gameIcon' title='Scissors' height={50}px width={40}></img> : <img src={require('./images/scissors.png')} alt='gameIcon' title='Scissors' height={50}px width={40}></img>}
        </p>
          <div className='Buttons'>
              <button
                  onClick={(e)=>handelRock(e)}
              ><img src={require('./images/rock.png')} alt='gameIcon' title='rock' height={50}px width={50}></img></button>
              <button
                  onClick={(e)=>handelPaper(e)}
              ><img src={require('./images/paper.png')} alt='gameIcon' title='papre' height={40}px width={40}></img></button>
              <button
                  onClick={(e)=>handelScissor(e)}
              ><img src={require('./images/scissors.png')} alt='gameIcon' title='Scissors' height={50}px width={40}></img></button>
          </div>
          <p><span style={{fontWeight:'bold'}}>Result: </span>{finalResult}</p>
    </div>
  )
}

export default FunGames