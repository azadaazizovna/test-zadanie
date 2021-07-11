
import React, {useState, useEffect} from 'react'
import './App.css'



const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowscore] = useState(true);
  const [score, setScore] = useState(0);
  const [noteText, setNoteText] = useState('');
  const [correct, setCorrect] = useState(true);
  const [main, setMain] = useState(true);
  const [name, setName] = useState('')
  const [required, setRequired] = useState(true);
  const [reqName, setReqName] = useState(true);

    const question = [
       {quiz: '22 + (99 - 83) * 2 : 4', answer: '30'},
       {quiz: '90 - 60 : (2 + 3) * 7', answer: '6'},
       {quiz: '21 + 80', answer: '101'},
       {quiz: '42 : (39 - 36) + 6 * 7', answer: '56'},
       {quiz: '15 + 15 - 5', answer: '25'},
       {quiz: '40 : 2 + 1', answer: '21'},
       {quiz: '61 - 11 * 5 : (2 + 3)', answer: '50'},
       {quiz: '100 * 2', answer: '200'},
       {quiz: '80 - 40', answer: '40'},
       {quiz: '66 - 56 : 8 * (2 + 6)', answer: '10'},
    ]
    
    const handleAnswerButtonClick = () => {

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < question.length && noteText !== '') {
             setCurrentQuestion(nextQuestion);
           } else {
              
           }
           setNoteText('');
           setMain(false); 
        
        if (noteText === '') {
            setRequired(false)
        } else {
            setRequired(true)
        }

       if (noteText === question[currentQuestion].answer) {
           setScore(score + 1)
           setCorrect(true)
       } else {
           setCorrect(false);
       }

       if(nextQuestion === question.length) {
           setShowscore(true)
       } else {
           setShowscore(false)
       }
       
       
    }
   
    const handleChange = (event) => {
        setNoteText(event.target.value)
    }
    const handleNameClick = (event) => {
        setName(event.target.value)
    } 

    const handleButtonClick = () => {

         if (name === '') {
          setReqName(false)
       } else {
           setShowscore(false)
           setReqName(true)
        }
    }
    return (
        <div className='app'>
           {showScore ? (<div className='score-section'>
             {main? <div className='main'><p>Welcome! What is your name?</p> 
             <input
              placeholder='type...'
              type='text'
              value={name}
              onChange={handleNameClick}
              ></input>
              <div className='name'><span>{reqName ? '' : 'required name'}</span></div>
               <button onClick={() => handleButtonClick()}>Let Start Game</button> 
                  </div> :
              <div className='score'> {name} Good job! <br /> You scored {score} out of {question.length} </div> }  </div>) : (
				<div>
					<div className='question-section'>
						<div className='question-text'>{question[currentQuestion].quiz} = 
                        <input
                          type='text'
                          onChange={handleChange}
                          value={noteText}
                          ></input>
                          </div>
                          <div className='btn-section'>
                          <div className='span'>
                          <span>{required? '' : 'required'}</span>
                          </div>
                      <button className={correct? 'button' : 'btnNoCorrect'} onClick={() => handleAnswerButtonClick()}>Next</button>
                          </div>
                        </div>
                      
				   </div>
			)}
        </div>
    )
}

export default App;

