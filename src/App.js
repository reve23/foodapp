import './App.css';
import {useEffect,useState} from 'react'
import Recipy from './Recipy';
import Nav from './Nav';

function App() {
  const APP_ID = 'c9e63577'
  const API_KEY = '30fd4f6d7bb35ac234829618d1f35c26'
  const [recipies,setRecipies] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('chicken')

  useEffect(() => {
    getRecipy()
  },[query])

  const getRecipy = async () => {
    const resp = await fetch( `https:api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await resp.json()
    console.log(data.hits)
    setRecipies(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <Nav/>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-btn">Submit</button>
      </form>
      <div className="wrap">
      {
        recipies.map(recipy =>(
          <Recipy
          key={recipy.recipe.label}
          title={recipy.recipe.label}
          calories={recipy.recipe.calories}
          img={recipy.recipe.image}
          ingredients={recipy.recipe.ingredients}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
