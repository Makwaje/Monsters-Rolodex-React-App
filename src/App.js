import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/cards-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFelid: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchFelid = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFelid };
    });
  };

  render() {
    console.log("render");
    const { monsters, searchFelid } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchFelid)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
