import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

let name = 'Julien';
let user = {
    firstname: 'Julien',
    lastname: 'Dewalle',
    avatar: 'data:image/jpeg;base64,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'
}

function fullName (user) {
    return user.firstname + ' ' + user.lastname;
}

ReactDOM.render(
    <div>
        <h1>Bonjour {name} !</h1>
        <h2>{fullName(user)}</h2>
        <img src={user.avatar} className="nom-image" alt={user.lastname}/>
    </div>,
    document.getElementById('root')
);


// exemple du DOM
function tick() {
    const element = (
      <div>
        <h1>Bonjour {name} !</h1>
        <h2>Il est {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  
    ReactDOM.render(element, document.getElementById('root2'));
  }
  
    setInterval(tick, 1000);

    // REACT sans JSX

    let heart = React.createElement('span', null, '❤');

    let el = React.createElement('h1', {
        className: 'title',
        style: { backgroundColor: "red"}
    }, 'Hello ' + user.firstname, heart)
    ReactDOM.render(
        el,
        document.getElementById('root3')
    );

    //Composant React

    class Welcome extends React.Component {
        render() {
            return ( 
            <h1 className={this.props.gender.toLowerCase()}>
                Bonjour {this.props.name}
                </h1>
            );
        }
    }

    //composant Clock

    class Clock extends React.Component {
        constructor(props){
            super(props); // appel constructeur parent
            this.state = {date: new Date()};
        }

        componentDidMount(){ // dom ready
            this.timer = setInterval(() => {
                this.setState({date: new Date()});
            }, 1000);
        }

        componentWillUnmount() { //disparait du dom
            clearInterval(this.name);
        }

        render() {
            return <h2>
                Il est {this.state.date.toLocaleTimeString('fr-FR', {timeZone: this.props.timeZone})} à {this.props.timeZone}
            </h2>;
        }
    }

    //compteur
    class MyCounter extends React.Component {
        constructor(props){
            super(props);
            this.state = {number: 0};
        }

        componentDidMount() {
            this.timer = setInterval(() => {
                //this.state.number++; fonctionne pas
                //this.state({number: this.state.number +1})
                this.setState((state) => ({
                    number: ++state.number
                }));
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        render() {
            return 'Compteur: ' +  this.state.number;
        }
    }

    //Les evenements
    class Button extends React.Component {
        constructor(props){
            super(props);
            this.state = {isToggle: true};

            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(event) {
            console.log(event);
            this.setState(state => ({
                isToggle: !state.isToggle
            }));
        }
        render(){
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggle ? 'on' : 'off'}
                </button>
            );
        }
    }

    // TP compteur
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            // On peut initialiser le compteur à 4 par exemple
            this.state = {value: props.init ? props.init : 0};
        }
    
        handleIncrement() {
            this.setState(state => ({
                value: ++state.value
            }));
        }
    
        handleDecrement() {
            this.setState(state => ({
                value: --state.value
            }));
        }
    
        // increment vaut 1 ou -1
        /* handleChange(increment) {
            this.setState(state => ({
                value: state.value + increment
            }));
        } */
    
        render() {
            let buttonPlus = <button onClick={() => this.handleIncrement()}>+</button>;
    
            // Quand le max du compteur est atteint
            if (this.state.value >= this.props.max) {
                buttonPlus = null;
            }
    
            return (
                <div>
                    <button onClick={() => this.handleDecrement()}>-</button>
                    <span>{this.state.value}</span>
                    {buttonPlus}
                </div>
            );
        }
    }


    //setInterval(() => {  
    ReactDOM.render(
        <div>
            <Welcome name="Julien" gender="Garcon" />
            <Welcome name="Tata" gender="Fille"/>
            <Clock timeZone="Europe/London"/>
            <Clock timeZone="Europe/Paris"/>
            <MyCounter />
            <Button />
            <Counter />
            <Counter init={10} max={20} />
        </div>,
        document.getElementById('root4')
    );
 //}, 1000);

// afficher effacer message
 class Message extends React.Component {
    render() {
      if (!this.props.show) {
        return null;
      }
  
      return (
        <div>
          {this.props.value}
        </div>
      );
    }
  }
  
  class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLogged: props.isLogged};
    }
  
    render() {
      return (
        <div>
          <Message value="Vous êtes connecté !" show={this.state.isLogged} />
          <button onClick={() => this.setState(
            (state) => ({isLogged: !state.isLogged})
          )}>Afficher le message</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Greeting isLogged={false} />,
    document.getElementById('root5')
  );
  


  // Les listes

    class People extends React.Component {
        render(){
            //on parcours chaque element
            let list = this.props.peoples.map((people, index) =>
            <li key={people.id}>{people.name}</li>
                );
            return (
                <ul>
                    {list}
                </ul>
            );
        }
    }

    //let peoples = [1, 2, 3, 4];
    let peoples = [
        {id: 1, name: 'Julien'},
        {id: 2, name: 'Toto'}
    ]

  ReactDOM.render(
    <People peoples={peoples}/>,
    document.getElementById('root6')
  );


// TP ELEVES !!!!!!!!!!!!!!!!!!!!!


class ClassRoom extends React.Component {

    average(notes){
        let sum = 0;
        for (let note of notes){
            sum += note;
        }
        return Math.round(sum / notes.length * 100) / 100;
    }

    totalAverage(){
        let sum=0;
        for(let student of this.props.students){
            sum += this.average(student.notes);
        }
        return Math.round(sum / this.props.students.lenght *100) / 100;
    }

 
    render() {
      return (
          <div>
            <ul>
                {this.props.students.map(student =>
                    <li key={student.id}>
                        {student.name} a eu {student.notes.join(', ')}.<br />
                        Sa moyenne est de {this.average(student.notes)}
                    </li>
                )}
            </ul>
            <h3>La moyenne de la classe : {this.totalAverage()}</h3>
            <h3>La meilleure note : {this.totalAverage()}</h3>
            <h3>La moins bonne note : {this.totalAverage()}</h3>
          </div>
       
      );
    }
  }

 let students = [
    {id: 1, name: 'Jean', lastname: 'Cliford', note: [10, 15, 8]},
    {id : 2, name: 'François', lastname: 'Cliferd', note: [8, 6, 5]},
    {id : 3, name: 'Jeannot', lastname: 'Clifard',  note: [18, 20, 14]}
]

  ReactDOM.render(
    <ClassRoom students={students}/>,
    document.getElementById('root7')
  );
  

  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
