import './App.css';
import InputForm from './Input/InputForm';
import Modal from './Modal/Modal';
import LoadingScreen from './Loading/LoadingScreen';

function App() {
  return (
    <main>
      <section className='quiz'>
        <p className='correct-answers'>Correct Answers: n</p>
        <article className='container'>
          <h2>Text</h2>
          <div className='btn-container'></div>
        </article>
        <button className='next-question'>Next</button>
      </section>
    </main>
  );
};

export default App;
