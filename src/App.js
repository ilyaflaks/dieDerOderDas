import "./App.css";
import { apiClient } from "./ApiClient";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [previousQueries, setPreviousQueries] = useState([0]);
  const [showWord, setShowWord] = useState(false);
  const [result, setResult] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    getWordCount();
  }, []);

  useEffect(() => {
    if (wordCount !== 0 && previousQueries.length === wordCount + 1) {
      setShowEnd(true);
    }
  }, [previousQueries]);

  useEffect(() => {
    getWordById();
  }, [wordCount]);

  function getWordById() {
    let id = generateRandomId();
    if (wordCount === 0 || id === 0) {
      setShowWord(false);
      return;
    }

    apiClient.get(`/words/${id}`).then((response) => {
      // console.log(response.data);
      setResponseData(response.data);
      setShowWord(true);
    });

    setPreviousQueries([...previousQueries, id]);
  }

  function getWordCount() {
    apiClient.get("/wordcount").then((res) => setWordCount(res.data));
  }

  function generateRandomId() {
    let randomNumber = Math.floor(Math.random() * wordCount) + 1;

    if (previousQueries.includes(randomNumber)) {
      randomNumber = generateRandomId();
    } else {
      return randomNumber;
    }

    return randomNumber;
  }

  function handleSelection(e) {
    const selectedArticle = e.target.innerHTML;
    if (selectedArticle === responseData.article) {
      setResult(`Correct! ${responseData.article} ${responseData.word}`);
      setShowNext(true);
      setShowTranslation(true);
    } else {
      setResult("Incorrect. Try again!");
    }
  }

  function handleNext() {
    setShowNext(false);
    setShowTranslation(false);
    setResult("");
    getWordById();
  }

  return (
    <div className="App">
      {!showEnd ? (
        <div>
          {showWord && (
            <div>
              <div className="word">{responseData.word}</div>
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
          )}

          {result && (
            <div className="result-tile">
              {result}
              {showTranslation && (
                <div className="translation">
                  Translation: {responseData.translation}
                </div>
              )}
            </div>
          )}
          {showNext && (
            <button className="next-button" onClick={handleNext}>
              Next Word
            </button>
          )}
        </div>
      ) : (
        <div>
          <p className="end-message">
            You have reached the end.
            <span
              className="refresh-link"
              onClick={() => {
                window.location.reload();
              }}
            >
              Refresh Page
            </span>
            to start over
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
