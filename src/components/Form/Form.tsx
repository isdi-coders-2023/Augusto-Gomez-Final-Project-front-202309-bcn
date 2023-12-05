const Form = (): React.ReactElement => {
  return (
    <form action="" className="add-movie-form" autoComplete="off">
      <label htmlFor="name" className="add-movie-form__label">
        Name
        <input
          type="text"
          className="add-movie-form__control"
          id="name"
          required
        />
      </label>
      <label htmlFor="director" className="add-movie-form__label">
        {" "}
        Director
        <input
          type="text"
          className="add-movie-form__control"
          id="director"
          required
        />
      </label>
      <label htmlFor="writer" className="add-movie-form__label">
        {" "}
        Writer
        <input
          type="text"
          className="add-movie-form__control"
          id="writer"
          required
        />
      </label>
      <label htmlFor="stars" className="add-movie-form__label">
        {" "}
        Stars
        <input
          type="text"
          className="add-movie-form__control"
          id="stars"
          required
        />
      </label>
      <label htmlFor="releaseDate" className="add-movie-form__label">
        {" "}
        Release date
        <input
          type="date"
          className="add-movie-form__control"
          id="releaseDate"
          required
        />
      </label>
      <label htmlFor="genre" className="add-movie-form__label">
        {" "}
        Genre
        <input
          type="text"
          className="add-movie-form__control"
          id="genre"
          required
        />
      </label>
      <label htmlFor="imageUrl" className="add-movie-form__label">
        {" "}
        Image Url
        <input
          type="url"
          className="add-movie-form__control"
          id="imageUrl"
          required
        />
      </label>
      <label htmlFor="score" className="add-movie-form__label">
        {" "}
        Score
        <input
          type="range"
          className="add-movie-form__control"
          id="score"
          required
        />
      </label>
      <label htmlFor="isSeen" className="add-movie-form__label">
        {" "}
        Seen
        <input
          type="checkbox"
          className="add-movie-form__control"
          id="isSeen"
        />
      </label>
      <label htmlFor="description" className="add-movie-form__label">
        {" "}
        Description
        <textarea
          className="add-movie-form__control"
          id="description"
          required
        />
      </label>
    </form>
  );
};

export default Form;
