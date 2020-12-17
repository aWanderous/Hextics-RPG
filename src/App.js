import React, {Component} from 'react';
import Header from './components//header/Header';
import StatusBar from './components/statusBar/StatusBar';
import Game from './components/game/Game';
// import Tile from './components/tile/Tile';
import Message from './components/message/Message';
import Footer from './components/footer/Footer';

class App extends Component {
    constructor() {
       super();
       this.state = {
           level: 1,
           health: 100,
           mana: 100,
           message: "Welcome to HEXtics, the land of games and stuff!!"
       };
    }



    render() {
        const {level,health,mana,message} = this.state;
        return (
            <div id='app'>
                <Header/>
                <StatusBar
                level = {level}
                health = {health}
                mana = {mana}
                />
                <Game/>
                <Message message={message}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
