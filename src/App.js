import React,{useEffect,useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () =>{
const APP_ID="9ffe82ae";

const APP_KEY="6cc03e7a06a75bd128f1558ea6457607";  

const [recipes,setRecipes] = useState([]);

const [search,setSearch] = useState("");

const [query,setQuery] = useState('');
useEffect(() => {
 getRecipes();
}, [query]);

const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data =await response.json();

setRecipes(data.hits);
console.log(data.hits);

};
const updatesearch = e =>{
  setSearch(e.target.value);
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
<div className="App">
  <form onSubmit={getSearch} className="search-form">
    <input type="text" className="search-bar" value={search} onChange={updatesearch}/>
    <button type="submit" className="search-button">Search</button>

    
  </form>
  <div className="recipes">
{
  recipes.map(recipe => (
    <Recipe
    key={recipe.recipe.label}
     title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      calories={recipe.recipe.calories}
    />
  ))
}

</div>
</div>
  );
};

export default App;
