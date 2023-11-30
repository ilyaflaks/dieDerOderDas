export default function ResultTile({
  result,
  showTranslation,
  translation,
  showNext,
  setShowNext,
  setShowTranslation,
  setResult,
  getWordById,
}) {
  function handleNext() {
    setShowNext(false);
    setShowTranslation(false);
    setResult("");
    getWordById();
  }

  return (
    <div>
      {result && (
        <div className="result-tile">
          {result}
          {showTranslation && (
            <div className="translation">Translation: {translation}</div>
          )}
        </div>
      )}
      {showNext && (
        <button className="next-button" onClick={handleNext}>
          Next Word
        </button>
      )}
    </div>
  );
}
