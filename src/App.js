import { useState, useEffect } from "react";

import CardList from "./components/cards-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [searchFelid, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchFelid)
    );

    setFilteredMonsters(newFilteredMonsters);
    console.log("effect is firing");
  }, [monsters, searchFelid]);

  const onSearchChange = (event) => {
    const searchFelidString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFelidString);
  };

  const onTitleChange = (event) => {
    const searchFelidString = event.target.value.toLocaleLowerCase();
    setTitle(searchFelidString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFelid: "",
//     };
//   }

// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return { monsters: users };
//       })
//     );
// }

//   onSearchChange = (event) => {
//     const searchFelid = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchFelid };
//     });
//   };

//   render() {
//     const { monsters, searchFelid } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(searchFelid)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters-Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
