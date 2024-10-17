// FAQComponent.js
import React, { useState } from 'react';
import faqImage from './FAQ.png'; // Adjust path based on your folder structure
import './FAQ.css'; // Create custom CSS for styling

const FAQComponent = () => {
    const [questions, setQuestions] = useState([
        { question: '', answer: '', isOpen: false },
        { question: '', answer: '', isOpen: false },
        { question: '', answer: '', isOpen: false },
        { question: '', answer: '', isOpen: false },
        { question: '', answer: '', isOpen: false },
        { question: '', answer: '', isOpen: false },
        { question: '', answer: '', isOpen: false }
      ]);
  
    const [newQuestion, setNewQuestion] = useState('');
  
    const toggleQuestion = (index) => {
      setQuestions(questions.map((q, i) => (
        i === index ? { ...q, isOpen: !q.isOpen } : { ...q, isOpen: false }
      )));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newQuestion.trim()) {
          try {
            const response = await fetch('http://192.168.1.2:5000/send-question', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ question: newQuestion }),
            });
            if (response.ok) {
              alert(`Your question "${newQuestion}" has been submitted!`);
              setNewQuestion('');
            } else {
              alert('Failed to send your question. Please try again.');
            }
          } catch (error) {
            alert('Error sending your question: ' + error.message);
          }
        }
      };

    return (
      <div className="faq-container">
        <div className="faq-left">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <ul>
            {questions.map((q, index) => (
              <li key={index} className="faq-item">
                <div className="faq-header" onClick={() => toggleQuestion(index)}>
                  <span>{q.question}</span>
                  <span className="faq-toggle">{q.isOpen ? '-' : '+'}</span>
                </div>
                {q.isOpen && <p className="faq-answer">{q.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div className="faq-right">
        <img src={faqImage} alt="Any Questions?" className="faq-image" />
          <h3>Any Questions?</h3>
          <p>You can ask anything you want to know about us.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Here"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="faq-input"
            />
            <button type="submit" className="faq-submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FAQComponent;