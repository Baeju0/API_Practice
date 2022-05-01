import React, { Component, useMemo } from "react";

//useMemo Hook
function SortedWords({ words }) {
  const sortWords = () => {
    console.log("sortWords");
    delay(500);
    return words.sort();
  };

  const sortedWords = useMemo(sortWords, [words]); // fast

  return (
    <Component>
      <h2>Sorted Words</h2>
      <ul>
        {sortedWords.map((word, idx) => (
          <li key={idx}>{word}</li>
        ))}
      </ul>
    </Component>
  );
}

function delay(ms) {
  const now = new Date().getTime();
  while (new Date().getTime() < now + ms) {      
  }
}

export default SortedWords;
