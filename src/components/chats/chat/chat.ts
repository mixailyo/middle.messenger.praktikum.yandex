import Block from "../../../core/Block";
import { ChatMessage } from "../chat-message";
import { ChatMessageProps } from "../chat-message/chat-message";
import template from "./chat.hbs?raw"

export interface ChatProps {
  title: string;
  avatar: string;
  messages: ChatMessageProps[];
}

class Chat extends Block {
    constructor(props: ChatProps) {
        super({
            ...props,
            Messages: props.messages.map(m => new ChatMessage(m))
        })
    }

    render(): string {
        return template
    }
}

export default Chat;