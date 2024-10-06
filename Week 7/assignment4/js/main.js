document.addEventListener('DOMContentLoaded', function () {
  // Initialize Materialize select elements
  const elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);

  const addMovieBtn = document.getElementById('add-movie-btn');
  const movieList = document.getElementById('movie-list');
  const movieInput = document.getElementById('movie-name');
  const ratingInput = document.getElementById('movie-rating');
  const releaseDateInput = document.getElementById('release-date');
  const categoryInput = document.getElementById('movie-category');
  const searchInput = document.getElementById('search-movie');

  let moviesArray = []; // Array to store movie objects

  // Function to add a movie to the array and update the list
  function addMovie() {
    const movieTitle = movieInput.value.trim();
    const movieRating = parseInt(ratingInput.value.trim()) || 'N/A';
    const releaseDate = releaseDateInput.value || 'N/A';
    const movieCategory = categoryInput.value || 'Uncategorized';

    if (movieTitle === '') {
      alert('Please enter a movie title');
      return;
    }

    const newMovie = {
      title: movieTitle,
      rating: movieRating,
      releaseDate: releaseDate,
      category: movieCategory
    };

    moviesArray.push(newMovie);
    updateMovieList(); // Update list on adding a movie

    // Clear input fields
    movieInput.value = '';
    ratingInput.value = '';
    releaseDateInput.value = '';
    categoryInput.value = '';
  }

  // Function to remove a movie from the array
  function removeMovie(index) {
    moviesArray.splice(index, 1);  // Remove movie
    updateMovieList();  
  }

  // Function to filter and sort the movie list, and update the display
  function updateMovieList() {
    movieList.innerHTML = '';  // Clear current movie list

    let filteredMovies = [...moviesArray];

    // Filter by search input
    const searchQuery = searchInput.value.toLowerCase();
    if (searchQuery) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery)
      );
    }

    // Display filtered and sorted movies
    filteredMovies.forEach((movie, index) => {
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.innerHTML = `
        <span><strong>Title:</strong> ${movie.title}</span><br>
        <span><strong>Rating:</strong> ${movie.rating}</span><br>
        <span><strong>Release Date:</strong> ${movie.releaseDate}</span><br>
        <span><strong>Category:</strong> ${movie.category}</span>
      `;

      const deleteBtn = document.createElement('a');
      deleteBtn.className = 'secondary-content';
      deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
      deleteBtn.addEventListener('click', function () {
        removeMovie(index);  // Remove movie on delete button click
      });

      li.appendChild(deleteBtn);
      movieList.appendChild(li);
    });
  }

  // Add movie when the button is clicked
  addMovieBtn.addEventListener('click', addMovie);

  // Update movie list on search input
  searchInput.addEventListener('input', updateMovieList);
});
