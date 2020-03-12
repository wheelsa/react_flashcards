import React from 'react';
import './App.css';

class App extends React.Component{ 
  state = {
    flashcards: [
      { id: 1, question: "What is your favorite color?", Answer: "Green, sometimes blue" },
      { id: 2, question: "What is the air speed velocity of a swallow?", answer: "African or European?" }
    ],
    showForm: false
  };

  addCard = card => {
    let newCard = {...card, id: Math.floor(Math.random()*100000)};

    this.setState({newCard, ...this.state.flashcards})
  }

  deleteCard = id => {
    const { flashcards } = this.state;

    const newCards = flashcards.filter(card => card.id !== id);

    this.setState({
      flashcards: newCards
    });
  }

  toggleForm =() => {
    this.setState({
      showForm: !this.state.showForm
    })
  }


render(){
  return (
    <div className="App">
     FlashCards
    </div>
  );
}

}

export default App;
