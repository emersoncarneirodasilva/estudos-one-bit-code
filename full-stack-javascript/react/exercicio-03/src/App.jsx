import Card from "./components/Card";
import profileImg1 from "./assets/my-img.jpg";
import profileImg2 from "./assets/pexels-italo-melo.jpg";
import profileImg3 from "./assets/pexels-stephany-lorena.jpg";

function App() {
  return (
    <>
      <Card
        profileImg={profileImg1}
        name="Emerson C. da Silva"
        description="Front-end React | TypeScript | Tailwind"
        tel="+55 (84) 98859-9843"
        email="mersiocarneiro87@gmail.com"
        linkGitHub="https://github.com/emersoncarneirodasilva"
        linkLinkedIn="https://www.linkedin.com/in/emerson-carneiro-da-silva/"
        linkPortfolio="https://portfolio-nextjs-fawn.vercel.app/"
      />

      <Card
        profileImg={profileImg2}
        name="Ítalo Melo"
        description="Full-stack Angular | TypeScript | Bootstrap | Java | Spring Boot"
        tel="+55 (11) 99999-9999"
        email="italomelo@email.com"
      />

      <Card
        profileImg={profileImg3}
        name="Stephany Lorena"
        description="Back-end Ruby | Ruby On Rails | TypeScript | Vue"
        tel="+55 (21) 98888-8888"
        email="stephanylorena@email.com"
      />
    </>
  );
}

export default App;
