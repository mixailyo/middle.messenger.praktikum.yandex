import EventBus from './EventBus';
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';

type TEvents = Values<typeof Block.EVENTS>;

interface Props {
	[key: string]: any;
}

export default class Block {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	} as const;

	private _element: HTMLElement | null = null;
	private readonly _id: string = nanoid(6);
	private readonly _eventBus: EventBus<TEvents>;

	public props: Props;
	public children: Record<string, Block | Block[]>;

	private _events: Record<string, EventListener> = {};

	constructor(propsWithChildren: Props = {}) {
		const eventBus = new EventBus<TEvents>();
		const { props, children } = this._getChildrenAndProps(propsWithChildren);
		this.props = this._makePropsProxy(props);
		this.children = children;
		this._eventBus = eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}

	private _addEvents(): void {
		const { events = {} } = this.props;

		Object.keys(events).forEach((eventName) => {
			const handler = events[eventName];
			this._element?.addEventListener(eventName, handler);
			this._events[eventName] = handler;
		});
	}

	private _removeEvents(): void {
		if (this._element) {
			Object.keys(this._events).forEach((eventName) => {
				const handler = this._events[eventName];
				this._element?.removeEventListener(eventName, handler);
			});
		}
	}

	private _registerEvents(eventBus: EventBus<TEvents>): void {
		eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	private _init(): void {
		this.init();
		this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
	}

	protected init(): void {}

	private _componentDidMount(): void {
		this.componentDidMount();
		Object.values(this.children).forEach((child) => {
			if (child instanceof Block) child.dispatchComponentDidMount();
		});
	}

	protected componentDidMount(): void {}

	public dispatchComponentDidMount(): void {
		this._eventBus.emit(Block.EVENTS.FLOW_CDM);
	}

	private _componentDidUpdate(): void {
		const shouldUpdate = this.componentDidUpdate();
		if (shouldUpdate) {
			this._render();
		}
	}

	protected componentDidUpdate(): boolean {
		return true;
	}

	private _getChildrenAndProps(propsAndChildren: Props): {
		children: Record<string, Block | Block[]>;
		props: Props;
	} {
		const children: Record<string, Block | Block[]> = {};
		const props: Props = {};

		Object.entries(propsAndChildren).forEach(([key, value]) => {
			if (Array.isArray(value) && value.every((c) => c instanceof Block)) {
				children[key] = value;
			} else {
				if (value instanceof Block) {
					children[key] = value;
				} else {
					props[key] = value;
				}
			}
		});

		return { children, props };
	}

	public setProps(nextProps: Props): void {
		if (nextProps) {
			Object.assign(this.props, nextProps);
		}
	}

	public get element(): HTMLElement | null {
		return this._element;
	}

	private _render(): void {
		const propsAndStubs = this._generatePropsAndStubs();
		const newElement = this._createAndCompileTemplate(propsAndStubs);

		this._removeEvents();

		this._replaceStubsWithChildren(newElement);

		this._updateElement(newElement);
		this._addEvents();
	}

	private _generatePropsAndStubs(): Record<string, any> {
		const propsAndStubs = { ...this.props };

		Object.entries(this.children).forEach(([key, child]) => {
			propsAndStubs[key] = Array.isArray(child)
				? child.map((c) => this._createStub(c._id))
				: this._createStub(child._id);
		});

		return propsAndStubs;
	}

	private _createStub(id: string): string {
		return `<div data-id="${id}"></div>`;
	}

	private _createAndCompileTemplate(
		propsAndStubs: Record<string, any>
	): HTMLElement {
		const fragment = this._createDocumentElement(
			'template'
		) as HTMLTemplateElement;
		fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);
		return fragment.content.firstElementChild as HTMLElement;
	}

	private _replaceStubsWithChildren(element: HTMLElement): void {
		Object.values(this.children).forEach((child) => {
			if (Array.isArray(child)) {
				child.forEach((ch) => this._replaceStub(element, ch));
			} else {
				this._replaceStub(element, child);
			}
		});
	}

	private _replaceStub(element: HTMLElement, child: any): void {
		const stub = element.querySelector(`[data-id="${child._id}"]`);
		stub?.replaceWith(child.getContent()!);
	}

	private _updateElement(newElement: HTMLElement): void {
		if (this._element) {
			this._element.replaceWith(newElement);
		}
		this._element = newElement;
	}

	protected render(): string {
		return '';
	}

	public getContent(): HTMLElement | null {
		if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			setTimeout(() => {
				if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
					this.dispatchComponentDidMount();
				}
			}, 100);
		}

		return this._element;
	}

	private _makePropsProxy(props: Props): Props {
		return new Proxy(props, {
			get(target, prop: string) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set: (target, prop: string, value) => {
				const oldTarget = { ...target };
				target[prop] = value;
				this._eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			},
		});
	}

	private _createDocumentElement(tagName: string): HTMLElement {
		return document.createElement(tagName);
	}

	public show(): void {
		this.getContent()!.style.display = 'block';
	}

	public hide(): void {
		this.getContent()!.style.display = 'none';
	}
}
