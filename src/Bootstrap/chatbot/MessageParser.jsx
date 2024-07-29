import React from "react";

const MessageParser = ({ children, actions }) => {
  const actionMap = {
    hello: actions.handleHello,
    hi: actions.handleHello,
    "pre trial justice" : actions.handleConcepts, 
    // article: actions.handleArticle,
  };

  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    const action = Object.keys(actionMap).find((key) =>
      lowerCaseMessage.includes(key)
    );
    if (action) {
      actionMap[action](); 
    } else {
      const articleMatch = lowerCaseMessage.match(/articles?\s?(\d+)/);
      if (articleMatch && articleMatch[1]) {
        actions.handleArticle(articleMatch[1]);
      } else {
        console.log(`${action} is not defined`);
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse: parse,
          actions: actions, // Pass the actions prop correctly
        })
      )}
    </div>
  );
};

export default MessageParser;
