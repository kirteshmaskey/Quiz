import './App.css';
import InputForm from './Input/InputForm';
import Modal from './Modal/Modal';
import LoadingScreen from './Loading/LoadingScreen';
import { useGlobalContext } from "./Context/Context";

function App() {

  const {
    waiting, loading, questions, index, correct, nextQuestion, checkAnswers
  } = useGlobalContext();

  if(waiting) {
    return <InputForm />;
  }

  if(loading) {
    return <LoadingScreen />;
  }

  const {incorrect_answers, correct_answer, question } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random()*4);
  if(tempIndex === 3) {
    answers.push(correct_answer);
  }else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>Correct Answers: { correct } / {index} </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
                return(
                  <button key={index} className='answer-btn'
                    onClick={()=> checkAnswers(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }} />
                )
              })
            }
          </div>
          <div className='btn-container'></div>
        </article>
        <button className='next-question' onClick={nextQuestion}>Next</button>
      </section>
    </main>
  );
};

export default App;
