import React from 'react';

const mentors = [
  { id: 1, name: 'Engineer A', domain: 'Software Engineering', experience: '10 years', rating: 4.8, email: 'engineerA@example.com', phone: '123-456-7890', image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Engineer B', domain: 'Data Science', experience: '8 years', rating: 4.7, email: 'engineerB@example.com', phone: '123-456-7891', image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Engineer C', domain: 'Cybersecurity', experience: '6 years', rating: 4.6, email: 'engineerC@example.com', phone: '123-456-7892', image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Engineer D', domain: 'Cloud Computing', experience: '12 years', rating: 4.9, email: 'engineerD@example.com', phone: '123-456-7893', image: 'https://via.placeholder.com/100' },
  { id: 5, name: 'Engineer E', domain: 'DevOps', experience: '7 years', rating: 4.5, email: 'engineerE@example.com', phone: '123-456-7894', image: 'https://via.placeholder.com/100' },
  { id: 6, name: 'Engineer F', domain: 'AI/ML', experience: '9 years', rating: 4.7, email: 'engineerF@example.com', phone: '123-456-7895', image: 'https://via.placeholder.com/100' },
];

const Test = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Engineer Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {mentor.name}
            </h2>
            <p className="text-sm text-gray-600">Domain: {mentor.domain}</p>
            <p className="text-sm text-gray-600">Experience: {mentor.experience}</p>
            <p className="text-sm text-yellow-500">Rating: {mentor.rating} ★</p>
            <p className="text-sm text-gray-600">Email: {mentor.email}</p>
            <p className="text-sm text-gray-600">Phone: {mentor.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;