import { useState, useEffect, useReducer } from 'react'

import Bouton from './Bouton';

const ADD = "+";
const MINUS = "-";
const MULT = "*";
const EQUAL = "=";
const SET_NUMBER = "SET_NUMBER";
const RESET = "RESET";
const BTN = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0], [ADD, MINUS, MULT], [EQUAL], [RESET]]

const initialState = {
    number: "",
    total: 0,
    operation: "",
};

const reducer = (state, action) => {
    switch (action.type) {
    case SET_NUMBER:
        const { value } = action;
        console.log(
            {
                ...state,
                number: state.number + value
            }
        )
        return {
            ...state,
            number: state.number + value
        };
    case ADD:
        console.log("ADD")
        return {
            ...state,
            total : state.total + parseFloat(state.number),
            number: "",
        };
    case MINUS:
        console.log("MINUS");
        return {
            ...state,
            total : state.total - parseFloat(state.number),
            number: "",
        };
    case MULT:
        console.log("MULT");
        return {
            ...state,
            total : state.total * parseFloat(state.number),
            number: "",
        };
    case EQUAL:
        console.log("EQUAL");
        console.log(state.total);
        return {
            ...state,
            total : state.total + parseFloat(state.number),
            number: "",
        };
    case RESET:
        console.log("RESET");
        return {
            ...state,
            number: "",
            total: 0,
            operation: "",
        };
    default:
        return state;
    }
};

function Calculator(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { total, number, operation } = state;

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

            <div>{total}</div>

            {renderButton(BTN)}


            <div>
                <input type="number" onChange={handleChange} name="number1" />
            </div>
            <div>
                <input type="number" onChange={handleChange} name="number2" />
            </div>
            <button value={1} onClick={handleChange}>TEST</button>
            <button onClick={() => dispatch({type: MULT})}>MULT</button>
        </div>
    );
}

export default Calculator;