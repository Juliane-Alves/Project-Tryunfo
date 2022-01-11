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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrayCards: [],
    };
    this.saveCard = this.saveCard.bind(this);
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    },
    this.validation);
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

  validation() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxSumAttr = 210;
    const maxAttr = 90;
    const noEmpty = [cardName, cardDescription, cardImage, cardRare];
    const cardAtt = [cardAttr1, cardAttr2, cardAttr3];
    const sumOfCardAtt = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const noEmptyAllowed = noEmpty.every((word) => word);
    const noMaxAllowed = cardAtt.every((attr) => attr >= 0 && attr <= maxAttr);
    const okForm = noEmptyAllowed && noMaxAllowed && sumOfCardAtt <= maxSumAttr;
    this.setState({ isSaveButtonDisabled: !okForm });
    // Função resolvida com a ajuda das colegas Nicole Calderari e Juliane Alves
  }

  cardRemove(name) {
    const { arrayCards } = this.state;
    const cardsList = arrayCards.filter(({ cardName }) => cardName !== name);
    const trueTrunfo = cardsList.some(({ cardTrunfo }) => cardTrunfo);
    this.setState(({
      arrayCards: cardsList,
      hasTrunfo: trueTrunfo,
    }));
    // Função resolvida com a ajuda das colegas Nicole Calderari e Matheus Alves;
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
      arrayCards,
    } = this.state;

    return (
      <div>
        <h1> Trunfo Super </h1>
        <section>
          <h2> Adicionar nova carta </h2>
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
            onInputChange={ this.handleInputChange }
            onSaveButtonClick={ this.saveCard }
          />
        </section>
        <section>
          <h2>Carta:</h2>
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
        </section>
        <section>
          <h2>Lista de Cartas</h2>
          { arrayCards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                onClick={ () => this.cardRemove(card.cardName) }
                type="button"
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
export default App;

// Nicole calderari e Matheus Alves ajudaram a buscar uma melhor logica//
