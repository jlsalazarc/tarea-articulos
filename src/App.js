import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url:'/posts',
      params: {
        _limit: 10,  
      },
      // headers:
    })
      .then(({data}) => setArticles(data))
      .catch((error) => setError(true))
      .finally(() =>{
        setLoading(false);
      })

  }, [])

  if (loading) return <p>Loading....</p>
  if (error) return <p>Something went wrong. Try another search</p>
  return (
    <div className="App">
      {articles.map(article => {
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <h2>{article.body}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
