import React from "react";
import Repo from "./Repo";

function Repos({ repos, starredRepos, starRepoHandler }) {
  return repos.map((repo) => (
    <Repo
      key={repo.id}
      repo={repo}
      starred={!!starredRepos.find((star) => star.id === repo.id)}
      starRepoHandler={starRepoHandler}
    />
  ));
}

export default Repos;
