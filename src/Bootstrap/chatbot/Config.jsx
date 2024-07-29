import { createChatBotMessage } from "react-chatbot-kit";
import CustomBotComponent from "./CustomBotComponent";

const Config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi, I'm Court reporter")],
  botName: "Court Rporter",
  customComponents: {
    botAvatar: (props) => <CustomBotComponent {...props} />,
  },
};

export default Config;
