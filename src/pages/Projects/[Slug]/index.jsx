import React from 'react';
import {useParams} from 'react-router-dom';

const DetailProject = () => {
  const {slug} = useParams();
  return (
   <div>
   Detail Project Info = {slug}
    </div>
  )
}

export default DetailProject;

