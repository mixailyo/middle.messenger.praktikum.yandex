import Block from "../../../core/Block";
import template from "./chats-card.hbs?raw"

export interface ChatsCardProps {
  avatar: string;
  title: string;
  lastMessage: string;
  date: string;
  unreadMessagesCounter: number;
  onClick?: () => void;
}

class ChatsCard extends Block {
    constructor(props: ChatsCardProps) {
        super({
            ...props,
        })
    }

    render(): string {
        return template
    }
}

export default ChatsCard;