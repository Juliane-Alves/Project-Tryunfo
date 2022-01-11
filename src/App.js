import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrayCards: [],
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.handleButtonValition);
  };

  handleButtonValition = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const valueMaxInput = 90;
    const noUltrapass = 210;
    const checkButton = (
      cardName !== ''
      && cardDescription !== '' && cardImage !== ''
      && cardRare !== '' && cardAttr1 !== ''
      && cardAttr2 !== '' && cardAttr3 !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= valueMaxInput)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= valueMaxInput)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= valueMaxInput)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= noUltrapass
    );
    this.setState({ isSaveButtonDisabled: !checkButton });
  }

  saveCard() {
    const {
      arrayCards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      arrayCards: [...arrayCards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo || hasTrunfo,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1> Adicionar nova carta </h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveCard }
          onInputChange={ this.handleInputChange }
        />
        <h2>Carta: </h2>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
