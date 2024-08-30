import { Chat } from "../../components/chats/chat";
import ChatsCard from "../../components/chats/chats-card/chats-card";
import Block from "../../core/Block";
import template from "./chats.hbs?raw";

interface ChatsPageProps {
}

class ChatsPage extends Block {
    constructor(props: ChatsPageProps) {
        super({
          ...props,
          chats: [
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 5
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 0
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 5
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 0
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 5
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 0
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 5
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 0
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 5
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 0
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 5
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 0
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 5
            }),
            new ChatsCard({
              avatar: '/images/default-avatar.svg',
              title: 'Андрей',
              lastMessage: 'Привет, как дела?',
              date: '10:50',
              unreadMessagesCounter: 0
            }),
          ],
          CurrentChat: new Chat({
            avatar: '/images/default-avatar.svg',
            title: 'Андрей',
            messages: [
              {
                type: 'system',
                content: '10 июня',
              },
              {
                contentType: 'media',
                content: '/images/1.png',
                date: '10:50'
              },
              {
                type: 'user',
                content: 'Привет, как дела?',
                date: '10:50'
              }
            ]
          })
        })
    }

    render(): string {
        return template
    }
}

export default ChatsPage;