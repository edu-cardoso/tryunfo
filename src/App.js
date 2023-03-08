import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cards: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick(event) {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      key: Math.random() * (100 - 0) + 0,
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      imageURL: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));

    event.preventDefault();
  }

  deleteCard(keyCard) {
    const { cards } = this.state;
    const newCards = cards.filter((e) => e.key !== keyCard);

    this.setState({
      cards: newCards,
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
      cards,
    } = this.state;

    const summedMaximumAttributes = 210;

    const sumOfAttributes = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3) <= summedMaximumAttributes;

    function verifyAttributes(attribute) {
      const maxAttribute = 90;
      if ((Number(attribute) >= 0) && (Number(attribute) <= maxAttribute)) {
        return true;
      }
    }

    const checksEachAttribute = verifyAttributes(cardAttr1)
      && verifyAttributes(cardAttr2)
      && verifyAttributes(cardAttr3);

    const isSaveButtonDisabled = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && sumOfAttributes
      && checksEachAttribute;

    const hasTrunfo = cards.some((e) => e.trunfo === true);

    return (
      <div>
        <h1>tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ !isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        {cards.map((card) => (
          <CardList
            key={ card.key }
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.imageURL }
            cardRare={ card.rare }
            cardTrunfo={ card.trunfo }
            deleteCard={ this.deleteCard }
            id={ card.key }
          />
        ))}

      </div>
    );
  }
}

export default App;
