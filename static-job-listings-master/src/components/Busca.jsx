import React, { useEffect, useState } from 'react';
import '../styles/components/busca.scss';

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
    <div className='jobs-container'>
      {data.map((item) => (
        <div className='card-container' key={item.id}>
          <img className='card-logo' src={item.logo} alt="Logo" />
          <div className='card-information'>
            <div className='first-row'>
            <p className='company'>{item.company}</p>   
              {item.new ? <a href="" className="badge-new">NEW!</a> : null}
              {item.featured ? <a href="" className="badge-featured">FEATURED</a> : null}
            </div>
            <a className='position' href='#'>{item.position}</a>
            <p className='description'>{item.postedAt + "  •  " + item.contract + "  •  " + item.location}</p>
          </div>
          <div className="card-competences">
            
              <a href="#" className="tags">{item.role}</a>
              <a href="#" className="tags">{item.level}</a>
              {item.languages.map(dado => (
                <a className="languages" href="">{dado}</a>
              ))}
              {item.tools.map(dado => (
                 <a className="tools" href="">{dado}</a>
              ))}
            
          </div> 
        </div>
      ))}
    </div>

  );
};

export default App;
