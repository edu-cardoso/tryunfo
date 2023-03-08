import React from 'react';
import PropTypes from 'prop-types';

export default class FilterCard extends React.Component {
  render() {
    const { onInputChange, filterCard, cardFilteredName, cardFilteredType } = this.props;
    return (
      <div>
        <h2>Todas as cartas</h2>
        <label>
          Filtrar por nome:
          <input
            type="textarea"
            data-testid="name-filter"
            name="cardFilteredName"
            value={ cardFilteredName }
            onChange={ onInputChange }
          />
        </label>
        <select
          data-testid="rare-filter"
          name="cardFilteredType"
          value={ cardFilteredType }
          onChange={ onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <button onClick={ () => filterCard() }>Filtrar</button>
      </div>
    );
  }
}

FilterCard.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterCard: PropTypes.func.isRequired,
  cardFilteredName: PropTypes.string.isRequired,
  cardFilteredType: PropTypes.string.isRequired,
};
