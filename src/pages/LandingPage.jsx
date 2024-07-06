import React, { useState } from 'react';
import Movies from '../components/Movies';
import Activities from '../components/Activities';
import Events from '../components/Events';
import SearchBar from '../components/SearchBar';
import { movies, activities, events } from '../data/data.js';

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredActivities = activities.filter(activity => activity.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
    {/* <div className="container mx-auto">
      <SearchBar onSearch={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Movies movies={filteredMovies} />
        </div>
        <div>
          <Activities activities={filteredActivities} />
        </div>
        <div>
          <Events events={filteredEvents} />
        </div>
      </div>
    </div> */}
     <Movies />
      <Activities />
      <Events />
    </>
  );
};

export default LandingPage;
