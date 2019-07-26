import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');
//import styles from './User.css';

var firebaseConfig = {
    apiKey: "AIzaSyCHcXGWp1UbUHvGPJvI6kIqLj7pHNhg_zA",
    authDomain: "phone-store-react-f8158.firebaseapp.com",
    databaseURL: "https://phone-store-react-f8158.firebaseio.com",
    projectId: "phone-store-react-f8158",
    storageBucket: "",
    messagingSenderId: "264372972462",
    appId: "1:264372972462:web:b5c05bbfa830278d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

class User extends Component {

    nameSubmit(event){
        var studentName = this.refs.name.value;
        this.setState({studentName: studentName}, function(){
            console.log(this.state);
        })    
    }

    answerSelected(event){
        var answers = this.state.answers;
        if(event.target.name === 'answer1'){
            answers.answer1 = event.target.value;
        }else if (event.target.name === 'answer2'){
            answers.answer2 = event.target.value;
        }else if(event.target.name === 'answer3'){
            answers.answer3 = event.target.value;
        }
        this.setState({answers: answers}, function(){
            console.log(this.state);
            
        });
    }

    qusetionSubmit(){
        firebase.database().ref('test/'+this.state.uid).set({
            studentName: this.state.studentName,
            answers: this.state.answers
        });
        this.setState({isSubmitted: true});
    }

    constructor(props){
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers:{
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        }
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.qusetionSubmit = this.qusetionSubmit.bind(this);
    }

    render() {

        var studentName;
        var qusetions;

        if(this.state.studentName === '' && this.state.isSubmitted === false){
            studentName =
            <div style={{margin: '20px'}}>
                <h1>Pershendetje, vendosni emrin tuaj:</h1>
                <form style={{margin:'40px', marginLeft:'40%'}} onSubmit={this.nameSubmit}>
                    <input 
                        style={{fontSize: '20px', padding: '10px'}}
                        type="text" 
                        placeholder="Vendosni emrin tuaj!"
                        ref="name"
                    />
                </form>
                <div>
                <h2 style={{
                    marginTop: '10%',
                    marginLeft: '30%',
                    fontSize: '110px',
                    fontFamily: 'Hanalei',
                    fontFamily: 'Butcherman' 
                }}>Luaj lojen..</h2>
            </div> 
            </div>;
            qusetions = ''
        }else if(this.state.studentName !== '' && this.state.isSubmitted === false){
            studentName = <h1>Miresevini,  {this.state.studentName}!</h1>;
            qusetions = 
            <div style={{
                    marginLeft: '30%',
                    fontFamily: 'Josefin Sans, sans-serif'
                }}>
                <h2 >Ketu jane disa pyetje per ju: </h2>
                <form onSubmit={this.qusetionSubmit}>
                    {/* first  */}
                    <div style={{margin: '20px', border:'1px solid #2f2f22', width: '40%'}}>
                        <label> Cila prej fushave ju pelqen me shume?</label>
                        <br/>
                        <div>
                            <input 
                                type="radio" name="answer1" 
                                value="Futboll" onChange={this.answerSelected}
                            />Futboll<br/>
                            <input 
                                type="radio" name="answer1" 
                                value="Muzike" onChange={this.answerSelected}
                            />Muzike<br/>
                            <input 
                                type="radio" name="answer1" 
                                value="Pikture" onChange={this.answerSelected}
                            />Pikture<br/>
                        </div>
                    </div>
                    {/* second */}
                    <div style={{margin: '20px', border:'1px solid #2f2f22', width: '40%'}}>
                        <label>You are?</label>
                        <br/>
                        <div>
                            <input 
                                type="radio" name="answer2" 
                                value="Student" onChange={this.answerSelected}
                            />Student<br/>
                            <input 
                                type="radio" name="answer2" 
                                value="Ne pune" onChange={this.answerSelected}
                            />Ne pune<br/>
                            <input 
                                type="radio" name="answer2" 
                                value="Ne pension" onChange={this.answerSelected}
                            />Ne pension<br/>
                        </div>
                    </div>
                    {/* third */}
                    <div style={{margin: '20px', border:'1px solid #2f2f22', width: '40%'}}>
                        <label>A ju pelqen alikacioni?</label>
                        <br/>
                        <div>
                            <input 
                                type="radio" name="answer3" 
                                value="Po" onChange={this.answerSelected}
                            />Po<br/>
                            <input 
                                type="radio" name="answer3" 
                                value="Jo" onChange={this.answerSelected}
                            />Jo<br/>
                            <input 
                                type="radio" name="answer3" 
                                value="Disi" onChange={this.answerSelected}
                            />Disi<br/>
                        </div>
                    </div>
                    <hr/>
                    <input style={{
                            color: 'white', 
                            backgroundColor: '#225bdf',
                            border: 'solid #225bdf',
                            marginBottom: '30px',
                            marginLeft: '20px'
                        }} 
                        type="submit" 
                        value="Submit" />
                </form>
            </div>
        } else if (this.state.isSubmitted === true) {
            studentName = <h1>Falemindetit per kohen tuaj, {this.state.studentName}</h1>
        }

        return (
           <div>
               {studentName}
                <hr/>
               {qusetions}
           </div>
        );
    }
}
export default User;


