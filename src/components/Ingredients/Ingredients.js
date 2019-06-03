import React, { Component } from "react";
import store, { UPDATE_INGREDIENTS_LIST } from '../../store'
import { Link } from "react-router-dom";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: store.getState().ingredientsList,
      input: ""
    };
  }

  componentDidMount() {
    let { ingredientsList } = store.getState()
    store.subscribe(() => {
      this.setState({
        ingredients: ingredientsList
      })
    })
  }
  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addIngredient() {
    let { input } = this.state
    store.dispatch({
      type: UPDATE_INGREDIENTS_LIST,
      payload: input
    })
    this.setState({
      input: ""
    });
  }
  render() {
  console.log(this.state.ingredients)
  console.log(store.getState().ingredientsList)
    const ingredients = this.state.ingredients.map((ingredient, i) => {
      return <li key={i}>{ingredient}</li>;
    });
    return (
      <div className="List forms">
        <h2>Ingredients:</h2>
        <div className="form_items_container">
          <ul className='list'>{ingredients}</ul>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button
            className="add_button"
            onClick={() => this.addIngredient()}
          >
            Add Ingredient
          </button>
        </div>
        <Link to="/add/author">
          <button className="left_button">Previous</button>
        </Link>
        <Link to="/add/instructions">
          <button className="right_button">Next</button>
        </Link>
      </div>
    );
  }
}

export default Ingredients;
