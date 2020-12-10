import React from "react";

export const StarButton = React.memo(({ repo, starred, starRepoHandler }) => {
  return (
    <button className="btn btn-secondary" onClick={() => starRepoHandler(repo, starred)}>
      {starred ? "starred" : "star"}
    </button>
  );
});
