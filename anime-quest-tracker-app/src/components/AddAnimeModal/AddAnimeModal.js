import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function AddAnimeModal({ onSubmit, trigger }) {
  const [formState, setFormState] = useState({
    title: '',
    genre: '',
    status: '',
    rating: '',
    imageUrl: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState({
      title: '',
      status: '',
      rating: '',
      imageUrl: '',
      notes: ''
    });
  };

  return (
    <Popup trigger={trigger} modal nested>
      {close => (
        <div className="add-anime-modal">
          <div className="add-anime-modal__header">Add Anime</div>
          <form onSubmit={handleSubmit}>
            <div className="add-anime-modal__body">
              <input 
                type="text" 
                placeholder="Anime Title"
                name="title"
                value={formState.title}
                onChange={handleChange}
                required
              />
              <select 
                name="status"
                value={formState.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="watching">Watching</option>
                <option value="completed">Completed</option>
                <option value="dropped">Dropped</option>
                <option value="planned">Planned</option>
              </select>
              <input 
                type="number" 
                placeholder="Rating (1-10)"
                name="rating"
                value={formState.rating}
                onChange={handleChange}
                min="1"
                max="10"
              />
              <input 
                type="text" 
                placeholder="Image URL"
                name="imageUrl"
                value={formState.imageUrl}
                onChange={handleChange}
              />
              <textarea 
                placeholder="Notes"
                name="notes"
                value={formState.notes}
                onChange={handleChange}
              />
            </div>
            <div className="add-anime-modal__footer">
              <button type="submit">Submit</button>
              <button type="button" onClick={close}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </Popup>
  );
}
