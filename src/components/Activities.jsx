import React from 'react';
import { activities } from '../data/data.js';
import Card from './Card';
import { Link } from 'react-router-dom';


const Activities = () => {
    return (

    <>
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {activities.map(activity => (
              <Card
                key={activity.id}
                image="https://dummyimage.com/720x400"
                title={activity.name}
                category={activity.type}
                description="A brief description of the activity."
              />
            ))}
          </div>
        </div>
      </section> */}
       <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-medium text-gray-900">Activities</h1>
          <Link to="/view-all/activities" className="text-indigo-500 inline-flex items-center">
            View All
          </Link>
        </div>
        <div className="flex flex-wrap -m-4">
          {activities.slice(0, 3).map(activity => (
            <Card
              key={activity.id}
              image={activity.image}
              title={activity.name}
              category={activity.type}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </section>
    
    </>
    );
  };
  
  export default Activities;