import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        Nome da carta:
        <label htmlFor="name-input-one">
          <input id="name-input-one" type="text" data-testid="name-input" />
        </label>
        Descrição dar carta:
        <textarea data-testid="description-input" />
        Primeiro atributo da carta:
        <label htmlFor="name-input-one">
          <input id="name-input-one" type="number" data-testid="attr1-input" />
        </label>
        Segundo atributo da carta:
        <label htmlFor="name-input-one">
          <input id="name-input-one" type="number" data-testid="attr2-input" />
        </label>
        Terceiro atributo da carta:
        <label htmlFor="name-input-one">
          <input id="name-input-one" type="number" data-testid="attr3-input" />
        </label>
        Caminho para a imagem:
        <label htmlFor="name-input-one">
          <input id="name-input-one" type="text" data-testid="image-input" />
        </label>
        Escolha da raridade da carta:
        <label htmlFor="rare-input">
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito-raro">muito raro</option>
          </select>
        </label>
        Inserir se a carta é super triunfo:
        <label htmlFor="name-input-one">
          <input id="name-input-one" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button"> Salvar </button>
      </form>
    );
  }
}

export default Form;
