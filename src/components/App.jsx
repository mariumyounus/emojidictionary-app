
import React from "react";
import Emoji from "../emoji";
import Entry from "./entry";

  function createEntry(emojiTerm) {
    return (
      <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
      />
    );
  }

function App() {
  return (
    <div>
      <h1>
        <span>Emojidictionary</span>
      </h1>
      <dl className="dictionary">{Emoji.map(createEntry)}</dl>
    </div>
  );
}

export default App;
