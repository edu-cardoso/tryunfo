import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label>
          Descrição
          <input type="textarea" data-testid="description-input" />
        </label>
        <label>
          Atributo
          <input type="number" data-testid="attr1-input" />
        </label>
        <label>
          Atributo 02
          <input type="number" data-testid="attr2-input" />
        </label>
        <label>
          Atributo 03
          <input type="number" data-testid="attr3-input" />
        </label>
        <label>
          URL
          <input type="text" data-testid="image-input" />
        </label>
        <label>
          Raridade
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label>
          Super trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
