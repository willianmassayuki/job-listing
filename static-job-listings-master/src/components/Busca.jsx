import React, { useEffect, useState } from 'react';
import '../styles/components/busca.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedTerms, setSelectedTerms] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((response) =>
        response
          .json()
          .then((data) => setData(data))
          .catch((error) => console.log(error))
      );
  }, []);

  const toggleTermSelection = (term) => {
    setSelectedTerms((prevSelectedTerms) => {
      if (prevSelectedTerms.includes(term)) {
        return prevSelectedTerms.filter((selectedTerm) => selectedTerm !== term);
      } else {
        return [...prevSelectedTerms, term];
      }
    });
  };

  const filterItems = (item) => {
    if (selectedTerms.length === 0) {
      return true;
    } else {
      const itemTerms = [...item.languages, ...item.tools, item.role, item.level];
      return selectedTerms.every((term) => itemTerms.includes(term));
    }
  };

  const removeSelectedTerm = (term) => {
    toggleTermSelection(term);
  };

  const clearSelectedTerms = () => {
    setSelectedTerms([]);
  };

  return (
    <div className='jobs-container'>
    {selectedTerms.length > 0 && (
        <div className="filtro-container">
          <div className="selected-terms">
            {selectedTerms.map((term) => (
              <div key={term}>
                <p>{term}</p>
                <button
                  className="selected-term"
                  onClick={() => removeSelectedTerm(term)}
                >
                  X
                </button>
              </div>
            ))}
            <button className="clear-terms-button" onClick={clearSelectedTerms}>
              Clear
            </button>
          </div>
        </div>
      )}


      {data.filter(filterItems).map((item) => (
        <div className={`card-container ${item.featured ? 'featured' : ''}`} key={item.id}>
          <img className='card-logo' src={item.logo} alt='Logo' />
          <div className='card-information'>
            <div className='first-row'>
              <p className='company'>{item.company}</p>
              {item.new ? <a href='' className='badge-new'>NEW!</a> : null}
              {item.featured ? <a href='' className='badge-featured'>FEATURED</a> : null}
            </div>
            <a className='position' href='#'>{item.position}</a>
            <p className='description'>{item.postedAt + '  •  ' + item.contract + '  •  ' + item.location}</p>
          </div>
          <div className='card-competences'>
            <button
              key={item.role}
              className={`tags ${selectedTerms.includes(item.role) ? 'selected' : ''}`}
              onClick={() => toggleTermSelection(item.role)}
              value={item.role}
            >
              {item.role}
            </button>
            <button
              key={item.level}
              className={`tags ${selectedTerms.includes(item.level) ? 'selected' : ''}`}
              onClick={() => toggleTermSelection(item.level)}
              value={item.level}
            >
              {item.level}
            </button>
            {item.languages.map((dado) => (
              <button
                key={dado}
                className={`languages ${selectedTerms.includes(dado) ? 'selected' : ''}`}
                onClick={() => toggleTermSelection(dado)}
                value={dado}
              >
                {dado}
              </button>
            ))}
            {item.tools.map((dado) => (
              <button
                key={dado}
                className={`tools ${selectedTerms.includes(dado) ? 'selected' : ''}`}
                onClick={() => toggleTermSelection(dado)}
                value={dado}
              >
                {dado}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
