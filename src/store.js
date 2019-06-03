import { createStore } from 'redux'

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredientsList: [],
    instructionsList: [],
    recipesList: []
}

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const UPDATE_INGREDIENTS_LIST = 'UPDATE_INGREDIENTS_LIST'
export const UPDATE_INSTRUCTIONS_LIST = 'UPDATE_INSTRUCTIONS_LIST'
export const UPDATE_RECIPES_LIST = 'UPDATE_RECIPES_LIST'

function reducer(state=initialState,action) {
    const { type, payload } = action;
    switch(type) {
        case UPDATE_RECIPE_NAME:
            return { ...state, recipeName: payload }
        case UPDATE_RECIPE_CATEGORY:
            return { ...state, recipeCategory: payload }
        case UPDATE_FIRST_NAME:
                return { ...state, authorFirstName: payload }
        case UPDATE_LAST_NAME:
            return { ...state, authorLastName: payload }
        case UPDATE_INGREDIENTS_LIST:
            const newIngredientsList = [ ...state.ingredientsList, payload ]
            return { ...state, ingredientsList: newIngredientsList }
        case UPDATE_INSTRUCTIONS_LIST:
            const newInstructionsList = [ ...state.instructionsList, payload ]
            return { ...state, instructionsList: newInstructionsList }
        case UPDATE_RECIPES_LIST:
            const { 
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredientsList,
                instructionsList,
                recipesList
            } = state;
            const recipe = {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredientsList,
                instructionsList,
                recipesList
            }
            const newRecipesList = [ ...state.recipesList, recipe];
            return { ...state, recipesList: newRecipesList }

        default: return state
    }
}

export default createStore(reducer)