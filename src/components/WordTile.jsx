import { useEffect, useState } from "react";

export default function WordTile({
  word,
  article,
  setResult,
  setShowNext,
  setShowTranslation,
}) {
  function handleSelection(e) {
    const selectedArticle = e.target.innerHTML;
    if (selectedArticle === article) {
      setResult(`Correct! ${article} ${word}`);
      setShowNext(true);
      setShowTranslation(true);
    } else {
      setResult("Incorrect. Try again!");
      setShowNext(false);
      setShowTranslation(false);
    }
  }

  return (
    <div>
      <div className="word">{word}</div>
      <div>
        <div className="article-tiles-flex">
          <div className="article-tile die" onClick={handleSelection}>
            Die
          </div>
          <div className="article-tile der" onClick={handleSelection}>
            Der
          </div>
          <div className="article-tile das" onClick={handleSelection}>
            Das
          </div>
        </div>
      </div>
    </div>
  );
}
