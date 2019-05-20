export const processResults = (data) => {
    return data.results.map(movie => {
        return {
            movieID: movie.id,
            title: movie.title,
            posterPath: movie.poster_path,
            releaseYear: new Date(movie.release_date).getFullYear(),
            overview: movie.overview
        }
    });
}