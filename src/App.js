import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { render } from '@testing-library/react';
import Scroll from './Scroll';
import './App.css';
import ErrorBoundaries from './ErrorBoundaries';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState({robots: users}))
        
    }
    onSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearch}/>
            <Scroll>
                <ErrorBoundaries>
                    <CardList robots ={filteredRobots}/>
                </ErrorBoundaries>
            </Scroll>
        </div>
        );
    }
}

export default App;