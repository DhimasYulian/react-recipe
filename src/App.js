import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getRecipes();
    setIsLoading(false);
  }, [query]);


  const getRecipes = async () => {
    const responses = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`);
    const data = await responses.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-input" type="text" value={search} onChange={updateSearch} placeholder="Search Recipe..." />
        <button className="search-button" type="submit">Search</button>
      </form>
      {!isLoading && recipes.length === 0 ? <h1 className="text-5xl text-center mx-auto mt-32">Recipe Not Found</h1> : ""}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              name={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />
          ))}
        </div>}
    </div>
  );
}

export default App;
