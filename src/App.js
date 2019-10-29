import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchFeild: e.target.value })
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const filterdMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    )

    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonster} />
      </div>
    );
  }
}

export default App;