import React from 'react';
import {useParams} from 'react-router-dom';

const DetailExperience = () => {
  const {slug} = useParams();
  return (
   <div>
   Detail Experience Info = {slug}
    </div>
  )
}

export default DetailExperience;

