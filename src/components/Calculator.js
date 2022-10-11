import { useState, useEffect, useReducer } from 'react'

import Bouton from './Bouton';

const ADD = "+";
const MINUS = "-";
const MULT = "*";
const EQUAL = "=";
const SET_NUMBER = "SET_NUMBER";
const RESET = "RESET";
const BTN = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0], [ADD, MINUS, MULT], [EQUAL], [RESET]];

const initialState = {
    operation: " ",
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NUMBER:
            const { value } = action;
            return {
                ...state,
                operation: state.operation + value,
            };
        case ADD: case MULT: case MINUS:
            return {
                ...state,
                operation: state.operation + action.type,
            };
        case EQUAL:
            return {
                ...state,
                operation: eval(state.operation),
            };
        case RESET:
            return {
                ...state,
                operation: "",
            };
        default:
            return state;
    }
};

function Calculator(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { operation } = state;

    // il faut contrôler la saisie des valeurs dans le formualaire c'est une bonne pratique
    // ne laissez pas le DOM contrôler les choses, c'est React qui doit contrôler les interactions avec ces éléments
    function handleChange(e) {
        const { value } = e.target;
        (!isNaN(value) && dispatch({ type: SET_NUMBER, value })) || dispatch({ type: value });
    }

    function renderButton(tab) {
        return (
            tab.map((row, index) => (
                <div key={index}>
                    {row.map((col, index) => (
                        <Bouton key={index} value={col} handle={handleChange} />
                    ))}
                </div>
            ))
        )
    }

    return (
        <div className="container ">

            <div>{operation}</div>
            {renderButton(BTN)}
        </div>
    );
}

export default Calculator;