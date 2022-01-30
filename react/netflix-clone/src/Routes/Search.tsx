import React from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');

  console.log(keyword);

  return <div>search</div>;
}

export default Search;
