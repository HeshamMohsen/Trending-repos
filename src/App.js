import { useCallback, useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Filters from "./components/Filters";
import Repos from "./components/Repos";
import { API } from "./constants/API";

function App() {
  const [repos, setRepos] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [starredRepos, setStarredRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [showStarred, setShowStarred] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch(API)
      .then((response) => response.json())
      .then((repos) => {
        setRepos(repos.items);
        setFilteredRepos(repos.items);
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    const storedStars = JSON.parse(localStorage.getItem("starredRepos"));
    if (storedStars) {
      setStarredRepos(storedStars);
    } else {
      localStorage.setItem("starredRepos", JSON.stringify([]));
    }
  }, []);

  // search filter
  const onFilter = (e) => {
    setTextFilter(e.target.value);
    if (showStarred) {
      setFilteredRepos(starredRepos.filter((repo) => repo.name.includes(e.target.value)));
    } else {
      setFilteredRepos(repos.filter((repo) => repo.name.includes(e.target.value)));
    }
  };

  // filter starred repos
  const filterStarred = () => {
    setFilteredRepos(
      showStarred ? repos : repos.filter((repo) => starredRepos.find((star) => star.id === repo.id))
    );
    setShowStarred(!showStarred);
  };

  // star a repo
  const starRepoHandler = useCallback(
    (repo, starred) => {
      if (starred) {
        setStarredRepos((r) => [...r].filter(({ id }) => id !== repo.id));

        const modifiedStars = JSON.parse(localStorage.getItem("starredRepos")).filter(
          ({ id }) => id !== repo.id
        );

        localStorage.setItem("starredRepos", JSON.stringify(modifiedStars));
      } else {
        setStarredRepos((r) => [...r, repo]);

        const modifiedStars = JSON.parse(localStorage.getItem("starredRepos"));

        localStorage.setItem("starredRepos", JSON.stringify([...modifiedStars, repo]));
      }
    },
    [setStarredRepos]
  );

  if (isFetching || !repos) {
    return <p className="text-center p-3 m-3">Fetching trending repos...</p>;
  }

  return (
    <>
      <AppHeader />
      <Filters
        value={textFilter}
        onFilter={onFilter}
        showStarred={showStarred}
        filterStarred={filterStarred}
      />
      <Repos repos={filteredRepos} starredRepos={starredRepos} starRepoHandler={starRepoHandler} />
    </>
  );
}

export default App;
