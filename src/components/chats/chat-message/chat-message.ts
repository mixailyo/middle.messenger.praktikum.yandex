import Block from "../../../core/Block";
import template from "./chat-message.hbs?raw"
import Handlebars from "handlebars";

export interface ChatMessageProps {
  type?: 'system' | 'user',
  contentType?: 'text' | 'media',
  content: string,
  date?: string,
  onClick?: () => void;
}

class ChatMessage extends Block {
    constructor(props: ChatMessageProps) {
        super({
            ...props,
        })
    }

    init() {
      Handlebars.registerHelper('eq', function (a, b) {
        return a === b;
      });
    }

    render(): string {
        return template
    }
}

export default ChatMessage;