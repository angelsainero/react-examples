const Likes = () => {
  // useState devuelve un array con 2 valores (valor inicial, y funcion seteo del estado [0, f] )
  const [likes, setLikes] = useState(0);
  //setLikes modifica el valor de likes e informa a react de que se ha modificado
  return <button onClick={() => setLikes(likes + 1)}>{likes}</button>;
};

const App = () => {
  return <Likes />;
};

export default App;

//https://www.youtube.com/watch?v=LmldFbeSTFc
