import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
    .then((response) => {response.json()
    .then((data) => setData(data))
    .catch(error => console.log(error))
    })
})

  return (
    <div>
      {data.map(item => (
        <div className='card-container' key={item.id}>
          <img className='card-logo' src={item.logo} alt="Logo" />
          <div className='card-information'>
            <p className='company'>{item.company}</p>     
            <a className='position' href='#'>{item.position}</a>
            <p className='description'>{item.postedAt + " • " + item.contract + " • " + item.location}</p>
          </div>
          <div className="card-competences">
            <ul>
              <li><a href="#" className="tags">{item.role}</a></li>
              <li><a href="#" className="tags">{item.level}</a></li>
              {item.languages.map(dado => (
                <li className="languages"><a href="">{dado}</a></li>
              ))}
              {item.tools.map(dado => (
                <li className="tools"><a href="">{dado}</a></li>
              ))}
            </ul> 
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default App;
