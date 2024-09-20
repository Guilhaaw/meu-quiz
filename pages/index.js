import { useState } from 'react';
import '../styles.css';  // Importando o CSS

const questions = [
  { question: "Qual é a capital do Brasil?", options: ["Rio de Janeiro", "Brasília", "São Paulo"], answer: "Brasília" },
  { question: "Qual é o maior planeta do sistema solar?", options: ["Terra", "Marte", "Júpiter"], answer: "Júpiter" }
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      {showScore ? (
        <div>
          <h1 className="score">Pontuação: {score}/{questions.length}</h1>
        </div>
      ) : (
        <div>
          <h1>{questions[currentQuestion].question}</h1>
          {questions[currentQuestion].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
          ))}
        </div>
      )}
    </div>
  );
}
