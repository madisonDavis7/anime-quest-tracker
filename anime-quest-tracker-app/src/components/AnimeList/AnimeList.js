import AnimeCard from '../AnimeCard/AnimeCard';

export default function AnimeList({ items = [] }) {
  return (
    <div className="anime-list">
      {items.map((anime, index) => (
        <AnimeCard key={index} anime={anime} />
      ))}
    </div>
  );
}
