import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SongCategoryCard from "./components/SongCategoryCard";

import {
  recommendedSongs,
  topHits,
  favoriteSongs,
  classicSongs
} from "./data/songs";

function App() {
  return (
    <div>
      <Navbar />

      <Container>
        <SongCategoryCard title="🎧 Mis Recomendadas" songs={recommendedSongs} />
        <SongCategoryCard title="🔥 Lo más escuchado" songs={topHits} />
        <SongCategoryCard title="🆕 Modo fan" songs={favoriteSongs} />
        <SongCategoryCard title="🎸 Mis clásicos" songs={classicSongs} />
      </Container>
    </div>
  );
}

export default App;
