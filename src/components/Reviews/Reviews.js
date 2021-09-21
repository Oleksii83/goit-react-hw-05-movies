import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';

export default function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Api.fethReviewsMovies(moviesId)
      .then(reviews => {
        if (reviews.results !== []) {
          console.log(reviews.results);
          setReviews([...reviews.results]);
        }
      })
      .catch(error => error.massage);
  }, [moviesId]);

  return (
    <section>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          <p> {reviews.content}</p>
          {reviews &&
            reviews.map(review => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p> {review.content}</p>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
