import Card from "./components/Card";
import swPosterImg from "./assets/poster-star-wars.jpg";
import esbPosterImg from "./assets/poster-star-wars2.jpg";
import rotjPosterImg from "./assets/poster-star-wars3.jpg";

function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" poster={swPosterImg} />
      <Card title="Pôster: Empire Strikes Beck (1980)" poster={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg} />
    </>
  );
}

export default App;
