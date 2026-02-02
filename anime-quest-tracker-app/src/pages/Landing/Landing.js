import './Landing.css';
import Taskbar from '../../components/Taskbar/Taskbar';

export default function Landing() {
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
        <button className="add-anime-btn">Add Anime</button>
      </div>
    </>
  );
}