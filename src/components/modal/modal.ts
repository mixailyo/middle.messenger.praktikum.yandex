import Block from "../../core/Block";
import { Button } from "../button";
import template from "./modal.hbs?raw"

export interface ModalProps {
  name: string;
  title: string;
  content: string;
}

class Modal extends Block {
    constructor(props: ModalProps) {
        super({
            ...props,
            SubmitButton: new Button({
                label: 'Применить',
                color: 'primary'
            })
        })
    }

    render(): string {
        return template
    }
}

export default Modal;