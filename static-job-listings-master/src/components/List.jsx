import '../styles/components/list.scss';

const List = ({ title, description, imageUrl }) => {
  return (
    <>

    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-badge-1">{description}</p>
        <p className="card-badge-2">{description}</p>
        <p className="card-description">{description}</p>
        <p className="card-date">{description}</p>
        <p className="card-contract">{description}</p>
        <p className="card-model">{description}</p>
        <p className="card-languages">{description}</p>

      </div>
    </div>


        {/*
    <p>Photosnap</p>      
      New!
      Featured
      Senior Frontend Developer
      1d ago
      Full Time
      USA only
      <!-- Role -->
      Frontend
      <!-- Level -->
      Senior
      <!-- Languages -->
      HTML
      CSS
      JavaScript
      <!-- Item End -->*/}

    </>
  )
}

export default List
