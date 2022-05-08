import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../services/Api';
import ReviewsCard from '../components/reviewsCard/ReviewsCard';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await Api.getReviewsById(movieId);
        setReviews(reviews.results);
      } catch (error) {}
    }
    fetchReviews();
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ReviewsCard reviews={reviews} />
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}
