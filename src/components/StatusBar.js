import React from 'react';
import '../styles/StatusBar.css';

function StatusBar({ health, mana }) {
    return (
        <nav className='status'>
            <span id='health'>HP: {health}</span>
            <span id='mana'>MP: {mana}</span>
        </nav>
    );
};

export default StatusBar;