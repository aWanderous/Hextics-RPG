import React, {Component} from 'react';
import Header from './components/Header';
import StatusBar from './components/StatusBar';
// import Tile from './components/Tile';
import Message from './components/Message';
import Footer from './components/Footer';

class App extends Component {
    constructor()
    {
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
                <Header />
                <StatusBar
                level = {level}
                health = {health}
                mana = {mana}
                />
                <Message message={message}/>
                <Footer />
            </div>
        );
    }
}

export default App;
