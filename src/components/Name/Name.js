import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, 
{ UPDATE_RECIPE_NAME, UPDATE_RECIPE_CATEGORY,
  UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from '../../store'
import "./Name.css";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: store.getState().recipeName,
      category: store.getState().recipeCategory,
      firstName: store.getState().authorFirstName,
      lastName: store.getState().authorLastName
    };
  }
  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }
  saveChanges() {
    let { name, category, firstName, lastName } = this.state
    store.dispatch({
      type: UPDATE_RECIPE_NAME,
      payload: name
    })
    store.dispatch({
      type: UPDATE_RECIPE_CATEGORY,
      payload: category
    })
    store.dispatch({
      type: UPDATE_FIRST_NAME,
      payload: firstName
    })
    store.dispatch({
      type: UPDATE_LAST_NAME,
      payload: lastName
    })
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
