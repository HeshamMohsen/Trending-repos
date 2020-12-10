import React from "react";
import { StarButton } from "./StarButton";

function Repo({ repo, starred, starRepoHandler }) {
  return (
    <div className="card w-75 m-3">
      <div className="card-body">
        <h5 className="card-title">{repo.name}</h5>
        <p className="card-text">{repo.description}</p>
        <span className="badge badge-light mr-2 p-3"> stars: {repo.stargazers_count}</span>
        <a
          href={repo.html_url}
          rel="noreferrer"
          target="_blank"
          className="badge badge-light mr-2 p-3"
        >
          github url
        </a>
        <StarButton starred={starred} repo={repo} starRepoHandler={starRepoHandler} />
      </div>
    </div>
  );
}

export default Repo;
