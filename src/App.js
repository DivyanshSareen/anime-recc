import { useState } from "react";
import "./styles.css";

var anime = {
  action: [
    {
      name: "Shingeki no Kyojin",
      rate: "85",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-m5ZMNtFioc7j.png"
    },
    {
      name: "Boku no Hero Academia",
      rate: "79",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21459-oZMZ7JwS5Sxq.jpg"
    },
    {
      name: "Kimetsu no Yaiba",
      rate: "85",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg"
    }
  ],
  adventure: [
    {
      name: "One Piece",
      rate: "86",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg"
    },
    {
      name: "HUNTER×HUNTER (2011)",
      rate: "90",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png"
    },
    {
      name: "Dr. STONE",
      rate: "82",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-BBxkPhen07Zj.jpg"
    }
  ],
  comdey: [
    {
      name: "Shokugeki no Souma",
      rate: "80",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20923-BPzRptpHC9Mw.jpg"
    },
    {
      name: "Mob Psycho 100",
      rate: "84",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21507-UaVmcRIUjhUa.jpg"
    },
    {
      name: "Haikyuu!!",
      rate: "84",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20464-eW7ZDBOcn74a.png"
    }
  ]
};

var genre = Object.keys(anime);

export default function App() {
  const [currGenre, setCurrGenre] = useState("action");

  function handleClick(e) {
    setCurrGenre(e.target.value);
  }

  function handleGenreList() {
    return genre.map((e) => (
      <button
        key={e}
        value={e}
        onClick={handleClick}
        style={{
          color: e === currGenre ? "#082032" : "#F0A500",
          background: e === currGenre ? "#F0A500" : "#334756"
        }}
      >
        {e}
      </button>
    ));
  }

  function handleAnimeList() {
    var elems = anime[currGenre];
    return elems.map((e) => (
      <div key={e.name} className="card">
        <div className="poster">
          <img src={e.poster} alt="poster"></img>
        </div>
        <div className="content">
          <div className="name">{e.name}</div>
          <div className="rate">User Rating: {e.rate}%</div>
        </div>
      </div>
    ));
  }

  return (
    <div className="App">
      <h1>Anime List</h1>
      {handleGenreList()}
      <div className="container">{handleAnimeList()}</div>
    </div>
  );
}
