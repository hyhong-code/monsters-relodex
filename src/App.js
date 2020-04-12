import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// Add on to dunctionalities Component already has
class App extends Component {
  constructor() {
    super(); // Calls Component's constructor
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this in the parentheses is the context we set handleChange function to
    // Because this line of code is in constructor, it knows the context is the App lcass
    // this.handleChange = this.handleChange.bind(this);
  }

  // class omponent's lifecycle methods
  componentDidMount() {
    // .fetch returns a pending promise, so we can call .then if resolved .catch if rejected on it
    fetch("https://jsonplaceholder.typicode.com/users") // api call
      // response.json returns a promise that resolves with the result of parsing the body text as JSON.
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ monsters: jsonData });
      });
  }

  // When we are writing our own function insdie of a class,
  // JavaScrip by default does NOT set the scope of this to it
  // handleChange(event) {
  //   this.setState({ searchField: event.target.value }, () => console.log(this.state));
  // }

  // USEARROW FUNCTIONS on any class methods you define and aren't part of React ro Lexical Scoping.
  // Arrow function's context is automatically bind to the place this arow function is first defined
  // In thise case, its APP class
  handleChange = (event) => {
    this.setState({ searchField: event.target.value }, () => console.log(this.state));
  };
  // render method is called every time state/props are changed
  render() {
    // monsters are re-filtered every time app rerenders so cardList receives now props...
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
