import "./App.css";
import { apiClient } from "./ApiClient";
import { useEffect, useState } from "react";
import WordTile from "./components/WordTile";
import ResultTile from "./components/ResultTile";

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
    getWordCount(); //Call on the API to get total words in the database.
  }, []);

  useEffect(() => {
    if (wordCount !== 0 && previousQueries.length === wordCount + 1) {
      setShowEnd(true); //when all the words have been cycled through, end message will show
    }
  }, [previousQueries]);

  useEffect(() => {
    if (wordCount !== 0) {
      getWordById();
    }
  }, [wordCount]);

  function getWordById() {
    let id = generateRandomId();

    apiClient
      .get(`/words/${id}`)
      .then((response) => {
        // console.log(response.data);
        setResponseData(response.data);
        setShowWord(true);
      })
      .catch((error) => console.log(error));

    setPreviousQueries([...previousQueries, id]);
  }

  function getWordCount() {
    apiClient
      .get(`/wordcount`) //the API will count the number of entries in the DB
      .then((res) => setWordCount(res.data))
      .catch((error) => console.log(error));
  }

  function generateRandomId() {
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * wordCount) + 1;
    } while (previousQueries.includes(randomNumber));
    return randomNumber;
  }

  return (
    <div className="App">
      {!showEnd ? (
        <div>
          {showWord && (
            <WordTile
              word={responseData.word}
              article={responseData.article}
              setResult={setResult}
              setShowNext={setShowNext}
              setShowTranslation={setShowTranslation}
            />
          )}

          <ResultTile
            result={result}
            showTranslation={showTranslation}
            setShowTranslation={setShowTranslation}
            translation={responseData?.translation}
            showNext={showNext}
            setShowNext={setShowNext}
            setResult={setResult}
            getWordById={getWordById}
          />
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
