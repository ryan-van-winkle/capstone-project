import './Testimonials.css';
import TestimonialCard from './TestimonialCard';
import { useEffect, useState } from 'react';

const Testimonials = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [])

  if(Object.keys(reviews).length > 0) {
    const customers = [
      {
        fullName: `${reviews.results[0].name.first} ${reviews.results[0].name.last}`,
        image: `${reviews.results[0].picture.large}`,
        rating: [1, 1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        fullName: `${reviews.results[1].name.first} ${reviews.results[1].name.last}`,
        image: `${reviews.results[1].picture.large}`,
        rating: [1, 1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        fullName: `${reviews.results[2].name.first} ${reviews.results[2].name.last}`,
        image: `${reviews.results[2].picture.large}`,
        rating: [1, 1, 1, 1, 0.5],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        fullName: `${reviews.results[3].name.first} ${reviews.results[3].name.last}`,
        image: `${reviews.results[3].picture.large}`,
        rating: [1, 1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
    ];

    return (
      <section className="testimonials">
        <div className="container grid">
          <h2>What people say about us!</h2>
          {customers.map((customer, index) => 
            <TestimonialCard key={index} customer={customer} />
          )}
      </div>
      </section>
    );
  }
};

export default Testimonials;