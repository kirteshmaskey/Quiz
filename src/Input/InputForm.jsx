const InputForm = () => {
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Setup Quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">Number of Questions</label>
            <input type="number" name="amount" id="amount" className="form-input" min={1} max={50}/>
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" className="form-input">
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select name="difficulty" id="difficulty" className="form-input">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select> 
          </div>
          <p className="error">Cannot generate questions, please try again!!</p>
          <button type="submit" className="submit-btn">Start</button>
        </form>
      </section>
    </main>
  );
};

export default InputForm;