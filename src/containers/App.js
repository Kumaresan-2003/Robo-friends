import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import './App.css';
class  App extends Component{
    constructor()
    {   
        super();
        this.state=
        {
            robots:[],
            searchfield:'',
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
}

onsearchchange=(event)=>{
    // console.log(this.onsearchchange);
    this.setState({
        searchfield: event.target.value 
        })
}

render(){   
    const { robots,searchfield}=this.state;
    const filteredRobots=robots.filter(robots =>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
})

    return !robots.length?
    <h1>Loading</h1>:
    (
    <div className='tc'>
        <h1 className='f1'> Robots friends</h1>
        <SearchBox searchchange={this.onsearchchange}/>
        <Scroll>
        <Cardlist robots= {filteredRobots}/> 
        </Scroll>
        
    </div>
    );
}
}
export default App;