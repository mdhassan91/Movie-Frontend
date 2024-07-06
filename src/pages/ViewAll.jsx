import React from 'react';
import Card from '../components/Card';
import { movies, activities, events } from '../data/data';
import { useParams,useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ViewAll = () => {
  const { category } = useParams();
  const navigate = useNavigate(); 
  const handleLogout = () => {
    // onLogout();
    navigate('/login');
  };
  let items;

  switch (category) {
    case 'movies':
      items = movies;
      break;
    case 'activities':
      items = activities;
      break;
    case 'events':
      items = events;
      break;
    default:
      items = [];
  }

  return (
    <>
     <Navbar handleLogout={handleLogout}/>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-2xl font-medium text-gray-900 mb-4 capitalize">{category}</h1>
        <div className="flex flex-wrap -m-4">
          {items.map(item => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title || item.name}
              category={item.genre || item.type || item.category}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ViewAll;
