import propTypes from 'prop-types';

const ReviewsCard = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsCard.propTypes = {
  reviews: propTypes.array,
};

export default ReviewsCard;
