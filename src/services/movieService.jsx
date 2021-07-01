const getMovies = () => {
  return [
    {
      _id: "1",
      title: "Movie 1",
      genere: "Action",
      stock: 10,
      rate: 2.5,
      liked: true,
      genre: {
        _id: "abcdefgh1",
        name: "Action",
      },
    },
    {
      _id: "2",
      title: "Movie 2",
      genere: "Action",
      stock: 15,
      rate: 3.5,
      genre: {
        _id: "abcdefgh1",
        name: "Action",
      },
    },
    {
      _id: "3",
      title: "Movie 3",
      genere: "Comedy",
      stock: 30,
      rate: 4.5,
      genre: {
        _id: "abcdefgh2",
        name: "Commedy",
      },
    },
    {
      _id: "4",
      title: "Movie 4",
      genere: "Thriller",
      stock: 10,
      rate: 2.5,
      liked: true,
      genre: {
        _id: "abcdefgh3",
        name: "Thriller",
      },
    },
    {
      _id: "5",
      title: "Movie 5",
      genere: "Animation",
      stock: 15,
      rate: 3.5,
      genre: {
        _id: "abcdefgh4",
        name: "Animation",
      },
    },
    {
      _id: "6",
      title: "Movie 6",
      genere: "Comedy",
      stock: 30,
      rate: 4.5,
      genre: {
        _id: "abcdefgh2",
        name: "Commedy",
      },
    },
    {
      _id: "7",
      title: "Movie 7",
      genere: "Thriller",
      stock: 10,
      rate: 2.5,
      liked: true,
      genre: {
        _id: "abcdefgh3",
        name: "Thriller",
      },
    },
    {
      _id: "8",
      title: "Movie 8",
      genere: "Action",
      stock: 15,
      rate: 3.5,
      genre: {
        _id: "abcdefgh1",
        name: "Action",
      },
    },
    {
      _id: "9",
      title: "Movie 9",
      genere: "Animation",
      stock: 30,
      rate: 4.5,
      genre: {
        _id: "abcdefgh4",
        name: "Animation",
      },
    },
  ];
};

export default getMovies;
