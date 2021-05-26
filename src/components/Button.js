import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['']

export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {
    const checkButtonstyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
}
