import NowPlaying from "./MovieCard";

function Wishlist({ favorites }) {
  return (
    <div>
      {/* <h2>My Wishlist ({favorites.length})</h2> */}
      {favorites.length > 0 ? (
        <div className="movie-list">
          {favorites.map((movie) => (
            <NowPlaying key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>You haven't added any movies to your wishlist yet.</p>
      )}
    </div>
  );
}
export default Wishlist;