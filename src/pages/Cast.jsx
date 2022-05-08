import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../services/Api';
import CastCard from '../components/castCard/CastCard';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const cast = await Api.getCastById(movieId);
        setCast(cast);
      } catch (error) {}
    }
    fetchCast();
  }, [movieId]);

  return cast && <CastCard cast={cast} />;
}
