import React, { useState, useEffect } from 'react';
import styles from "../styles/StudentDashboard.module.css";
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  

  useEffect(() => {
    const localQuestions = JSON.parse(localStorage.getItem('questions'));
    if (localQuestions) {
      setQuestions(localQuestions);
    }
  }, []);

  const handleQuestionChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();

    const questionObj = {
      question: newQuestion,
      date,
      subject,
    };

    setQuestions([questionObj, ...questions]);
    localStorage.setItem('questions', JSON.stringify([questionObj, ...questions]));

    setNewQuestion('');
    setDate('');
    setSubject('');
  };

  const handleSortByDate = () => {
    const sortedQuestions = [...questions].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (sortOrder === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setQuestions(sortedQuestions);
  };

 
  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <Link to="/">Home</Link>
          <h2>Doubts</h2>
        </div>
      </nav>

      <div className={styles.questions}>
        <div>
          <form onSubmit={handleSubmitQuestion}>
            <textarea
              type="text"
              value={newQuestion}
              onChange={handleQuestionChange}
              placeholder="Question"
            />
            <div className={styles.inputDiv}>
                <div>
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                placeholder="Date"
              />
              <input
                type="text"
                value={subject}
                onChange={handleSubjectChange}
                placeholder="Subject"
              />
              </div>
              <div>
              <button type="submit">Ask</button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <h2>Recently Asked Question</h2>
          <div className={styles.recentQuestion}>
            <ul>
              {questions.length > 0 && (
                <li>{questions[0].question}</li>
              )}
            </ul>
          </div>
          <h2>All Previously Asked Questions</h2>
          <div className={styles.functionalities}>
            <button onClick={handleSortByDate}>Sort by Date</button>

          </div>
          <ul className={styles.history}>
            {questions.map((question, index) => (
              index !== 0 && <li key={index}>{question.question}</li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
