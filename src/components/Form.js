import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section>
        <form>
          Nome da carta:
          <label htmlFor="name-input-one">
            <input
              id="name-input-one"
              type="text"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          Descrição dar carta:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          Primeiro atributo da carta:
          <label htmlFor="name-input-one">
            <input
              id="name-input-one"
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          Segundo atributo da carta:
          <label htmlFor="name-input-one">
            <input
              id="name-input-one"
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          Terceiro atributo da carta:
          <label htmlFor="name-input-one">
            <input
              id="name-input-one"
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          Caminho para a imagem:
          <label htmlFor="name-input-one">
            <input
              id="name-input-one"
              type="text"
              data-testid="image-input"
              name="cardImage"
              value={ cardImage }
              oneChange={ onInputChange }
            />
          </label>
          Escolha da raridade da carta:
          <label htmlFor="rare-input">
            <select
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          Inserir se a carta é super triunfo:
          <label htmlFor="name-input-one">
            <input
              id="name-input-one"
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTryunfo"
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
