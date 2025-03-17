import React, { useState } from "react";
import Modal from "./Modal";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
  onClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  // if (!movie) {
  //   return null;
  // }
  return (
    <div onClick={() => handleCardClick(movie)} className="movie-card ">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/No-Poster.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="Rating.svg" alt="star icon" />
            <p> {vote_average ? vote_average.toFixed(1) : "N/A"} </p>
          </div>
          <span>.</span>
          <p className="lang">{original_language}</p>
          <span>.</span>
          <p className="Year text-white">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          movie={selectedMovie}
        />
      </div>
    </div>
  );
};
export default MovieCard;
