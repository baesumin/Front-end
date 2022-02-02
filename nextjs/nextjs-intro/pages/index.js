import { useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = '1c4686fb63dc7e0e6d4c59ec8c5233dd';

export default function Home() {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}

export async function getServerSideProps() {}
