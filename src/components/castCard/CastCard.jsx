const CastCard = ({ cast }) => {
  return (
    <ul>
      {cast.cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : 'https://cdn.pixabay.com/photo/2014/04/03/11/50/drama-312318_1280.png'
            }
            alt={name}
            width="300px"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastCard;
