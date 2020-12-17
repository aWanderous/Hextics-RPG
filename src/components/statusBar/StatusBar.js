import React from 'react';
import './StatusBar.css';

function StatusBar({level,health,mana}) {
    return (
        <nav className='status'>
            <span id='level'>Level: {level}</span>
            <span id='health'>HP: {health}</span>
            <span id='mana'>MP: {mana}</span>
        </nav>
    );
};

export default StatusBar;