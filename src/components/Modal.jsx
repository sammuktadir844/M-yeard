import React from "react";

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl rounded-xl bg-[--color-primary] p-6 shadow-xl border border-[--color-dark-100]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[--color-light-200] hover:text-white transition text-xl"
        >
          ✕
        </button>

        {/* Movie Poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full rounded-lg mb-4"
        />

        {/* Movie Title */}
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {movie.title}
        </h2>

        {/* Overview */}
        <p className="text-[--color-light-200] mb-4">{movie.overview}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {movie.genres.map((genre, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-[--color-dark-100] text-[--color-light-200] text-sm"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[--color-dark-100] text-white hover:bg-white hover:text-[--color-primary] transition"
          >
            Close
          </button>
          <button className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
