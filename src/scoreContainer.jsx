import {useState, useEffect} from 'react';

export function ScoreContainer({scoreCounter}){
    const [highScore, setHighScore] = useState(0);
    const [newHighScore, setNewHighScore] = useState(0);
    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
    if (scoreCounter !== 0) {
      setHasRendered(true);
    }
  }, [scoreCounter]);

    useEffect(()=>{
        if (scoreCounter > highScore){
            setNewHighScore(scoreCounter);
        }
        if (scoreCounter===0){
            setHighScore(newHighScore);
        }

    }, [scoreCounter, highScore])
    
    return (
        <div className="scores">
            <div className={`currentScore ${hasRendered && scoreCounter===0 ? 'shake' : ''}`}>Current Score: {scoreCounter}</div>
            <div className="highScore">High Score: {highScore}</div>
        </div>)
}
