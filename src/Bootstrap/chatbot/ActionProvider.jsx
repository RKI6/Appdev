import React from "react";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Nice to chat with you");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleConcepts = () => {
    const botMessage = createChatBotMessage("It is a process of negotiating with the parties involved in the trail about settlement or review of the trail by claryfying issues and pretrial motion");
    setState((prev) =>({
      ...prev , messages : [...prev.messages , botMessage]
    }))
  }
  const handleArticle = (articleNumber) => {
    console.log(articleNumber);
    let articleDescription;
    switch (articleNumber) {
      case "32":
        articleDescription = "Right to constitutional remedies";
        break;
        case "14" :
        articleDescription = "Equality Before Law";
        break;
      default:
        articleDescription = "No articles found";
    }
    const botMessage = createChatBotMessage(articleDescription);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: { handleHello, handleArticle , handleConcepts},
        })
      )}
    </div>
  );
};

export default ActionProvider;
