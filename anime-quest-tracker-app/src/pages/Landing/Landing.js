import './Landing.css';
import Taskbar from '../../components/Taskbar/Taskbar';
import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';
import AddAnimeModal from '../../components/AddAnimeModal/AddAnimeModal';
import AnimeList from '../../components/AnimeList/AnimeList';


export default function Landing() {
  const animeList = [];
  const handleAddAnime = () => {};

  return (
    <>
      <Taskbar 
        items={[
          { label: 'Profile', to: '/' },
          { label: 'Logout', to: '/landing' }
        ]}
      />
      <div className="landing">
        <h1>Landing Page</h1>
        <AddAnimeModal
          onSubmit={handleAddAnime}
          trigger={<AnimatedButton label="Add Anime" />}
        />
        <AnimeList items={animeList} />
      </div>
    </>
  );
}