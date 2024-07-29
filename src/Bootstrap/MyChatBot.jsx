import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import Config from './chatbot/Config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import 'react-chatbot-kit/build/main.css';
import './chatbot/ChatBot.css';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

function MyChatBot() {
  const [showBot, setShowBot] = useState(false);

  const toggleBot = () => {
    setShowBot(!showBot);
  };

  return (
    <div>
      <button className="chatbot-icon" onClick={toggleBot}>
        <SmartToyOutlinedIcon />
      </button>
      {showBot && (
        <div className="chatbot-container bg-dark">
          <Chatbot config={Config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
  );
}

export default MyChatBot;
