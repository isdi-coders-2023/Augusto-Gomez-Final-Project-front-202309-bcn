import { useEffect, useState } from "react";
import FormStyled from "./FormStyled";
import Button from "../Button/Button";
import { Movie, MovieWithoutId } from "../../store/features/movies/types";

interface FormProps {
  formFunction: (movie: MovieWithoutId) => void;
  selectedMovie?: Movie;
}

const Form = ({
  formFunction,
  selectedMovie,
}: FormProps): React.ReactElement => {
  let emptyMovie: MovieWithoutId = {
    name: "",
    director: "",
    writer: "",
    stars: "",
    releaseDate: "",
    genre: "",
    description: "",
    imageUrl: "",
    score: "",
    isSeen: false,
  };

  if (selectedMovie) {
    emptyMovie = selectedMovie;
  }

  const [newMovie, setNewMovie] = useState<MovieWithoutId>(emptyMovie);
  const [newIsButtonDisabled, setNewIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    Object.values(newMovie).every((field) => field !== "")
      ? setNewIsButtonDisabled(false)
      : setNewIsButtonDisabled(true);
  }, [newMovie, setNewIsButtonDisabled]);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewMovie({
      ...newMovie,
      [event.target.id]:
        event.target.type !== "checkbox"
          ? (event.target as HTMLInputElement).value
          : (event.target as HTMLInputElement).checked,
    });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    formFunction(newMovie);
  };

  return (
    <FormStyled
      className="add-movie-form"
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <label htmlFor="name" className="add-movie-form__label">
        {" "}
        Name
        <input
          type="text"
          className="add-movie-form__control"
          id="name"
          required
          onChange={onChangeData}
          value={newMovie.name}
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
          onChange={onChangeData}
          value={newMovie.director}
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
          onChange={onChangeData}
          value={newMovie.writer}
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
          onChange={onChangeData}
          value={newMovie.stars}
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
          onChange={onChangeData}
          value={newMovie.releaseDate}
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
          onChange={onChangeData}
          value={newMovie.genre}
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
          onChange={onChangeData}
          value={newMovie.imageUrl}
        />
      </label>
      <div className="score">
        <label htmlFor="score" className="add-movie-form__label score__label">
          {" "}
          Score {newMovie.score ? newMovie.score : "0"}
          <input
            type="range"
            className="add-movie-form__control"
            id="score"
            required
            min={0}
            max={5}
            step={0.1}
            onChange={onChangeData}
            value={newMovie.score}
          />
        </label>
        <label htmlFor="isSeen" className="add-movie-form__label">
          {" "}
          Seen
          <input
            type="checkbox"
            className="add-movie-form__control"
            id="isSeen"
            onChange={onChangeData}
          />
        </label>
      </div>
      <label htmlFor="description" className="add-movie-form__label">
        {" "}
        Description
        <textarea
          className="add-movie-form__control"
          id="description"
          required
          onChange={onChangeData}
          value={newMovie.description}
        />
      </label>
      <Button
        text="Add"
        type="submit"
        modifier="button--form"
        isDisabled={newIsButtonDisabled}
      />
    </FormStyled>
  );
};

export default Form;
