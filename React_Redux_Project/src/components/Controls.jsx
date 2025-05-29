import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Controls.css';

const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch({ type: 'INCREAMENT' });
    };

    const handleDecreament = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const handleAdd = () => {
        dispatch({
            type: 'ADD',
            payload: {
                num: inputElement.current.value,
            },
        });
        inputElement.current.value = "";
    };

    const handleSubtract = () => {
        dispatch({
            type: 'SUBTRACT',
            payload: {
                num: inputElement.current.value,
            },
        });
        inputElement.current.value = "";
    };

     const handlePrivacyToggle = () => {
        dispatch({
            type: 'PRIVACY_TOGGLE',
           
        });

    };

    return (
        <div className="button_container">
            <button type="button" className="btn btn-primary" onClick={handleIncrement}>
                +1
            </button>
            <button type="button" className="btn btn-success" onClick={handleDecreament}>
                -1
            </button>
            <button type="button" className="btn btn-warning"
            onClick={handlePrivacyToggle}
            >Privacy Toggle</button>
            <input type="text" className="form-control input-class" placeholder="Enter Number" ref={inputElement} />
            <button type="button" className="btn btn-info" onClick={handleAdd}>
                Add
            </button>
            <button type="button" className="btn btn-danger" onClick={handleSubtract}>
                Subtract
            </button>
        </div>
    );
};

export default Controls;
