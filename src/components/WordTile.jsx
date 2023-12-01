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
          <button className="article-tile die" onClick={handleSelection}>
            Die
          </button>
          <button className="article-tile der" onClick={handleSelection}>
            Der
          </button>
          <button className="article-tile das" onClick={handleSelection}>
            Das
          </button>
        </div>
      </div>
    </div>
  );
}
