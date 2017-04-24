// Generated by typings
// Source: https://raw.githubusercontent.com/aurelia/pal/master/dist/aurelia-pal.d.ts
declare module '~aurelia-metadata~aurelia-pal/dist/aurelia-pal' {

/**
* Enables discovery of what features the runtime environment supports.
*/
export interface Feature {
  
  /**
    * Does the runtime environment support ShadowDOM?
    */
  shadowDOM: boolean;
  
  /**
    * Does the runtime environment support the css scoped attribute?
    */
  scopedCSS: boolean;
  
  /**
    * Does the runtime environment support native HTMLTemplateElement?
    */
  htmlTemplateElement: boolean;
  
  /**
    * Does the runtime environment support native DOM mutation observers?
    */
  mutationObserver: boolean;
}

/**
* The runtime's performance API.
*/
export interface Performance {
  
  /**
    * Gets a DOMHighResTimeStamp.
    * @return The timestamp, measured in milliseconds, accurate to one thousandth of a millisecond.
    */
  now(): number;
}

/**
* Represents the core APIs of the runtime environment.
*/
/**
* Represents the core APIs of the runtime environment.
*/
export interface Platform {
  
  /**
    * The runtime environment's global.
    */
  global: any;
  
  /**
    * A function wich does nothing.
    */
  noop: Function;
  
  /**
    * The runtime's location API.
    */
  location: typeof window.location;
  
  /**
    * The runtime's history API.
    */
  history: typeof window.history;
  
  /**
    * The runtime's performance API
    */
  performance: Performance;
  
  /**
    * Registers a function to call when the system is ready to update (repaint) the display.
    * @param callback The function to call.
    * @return A long integer value, the request id, that uniquely identifies the entry in the callback list.
    */
  requestAnimationFrame(callback: ((animationFrameStart: number) => void)): number;
  
  /**
    * The runtime's XMLHttpRequest API.
    */
  XMLHttpRequest: typeof XMLHttpRequest;
  
  /**
    * Iterate all modules loaded by the script loader.
    * @param callback A callback that will receive each module id along with the module object. Return true to end enumeration.
    */
  eachModule(callback: ((key: string, value: Object) => boolean)): void;
  
  /**
    * Add a global event listener.
    * @param eventName A string representing the event type to listen for.
    * @param callback The function that receives a notification when an event of the specified type occurs.
    * @param capture If true, useCapture indicates that the user wishes to initiate capture.
    */
  addEventListener(eventName: string, callback: Function, capture?: boolean): void;
  
  /**
    * Remove a global event listener.
    * @param eventName A string representing the event type to listen for.
    * @param callback The function to remove from the event.
    * @param capture Specifies whether the listener to be removed was registered as a capturing listener or not.
    */
  removeEventListener(eventName: string, callback: Function, capture?: boolean): void;
  
  /**
     * Reference to the Loader Class (set after the loader has been first imported)
     */
  Loader: any;
  
  /**
     * Resolves a module name to a path resolvable by the loader. By default returns the first parameter.
     * It is recommended to use this for all dynamic imports as it enables static analysis
     * and optionally allows adding custom metadata used by the build step.
     *
     * References to this method should always literally call `PLATFORM.moduleName(...)`.
     * This enables the build step to statically optimize the code by replacing the reference with a string.
     *
     * @param moduleName Absolute or relative path to the module.
     * @param options Optional options used during the static analysis that inform how to process the module.
     */
  moduleName(moduleName: string, options?: ModuleNameOptions): string;
  moduleName(moduleName: string, chunk?: string): string;
}

/**
 * Options used during the static analysis that inform how to process a given module.
 */
/**
 * Options used during the static analysis that inform how to process a given module.
 */
export interface ModuleNameOptions {
  
  /**
     * Add the module to a chunk by name
     */
  chunk?: string;
  
  /**
     * Optionally declare which exports are used. This enables tree-shaking when only few out of many exports are used.
     */
  exports?: string[];
}

/**
* Represents the core APIs of the DOM.
*/
export interface Dom {
  
  /**
    * The global DOM Element type.
    */
  Element: typeof Element;
  
  /**
    * The global DOM SVGElement type.
    */
  SVGElement: typeof SVGElement;
  
  /**
    * A key representing a DOM boundary.
    */
  boundary: string;
  
  /**
    * The document title.
    */
  title: string;
  
  /**
    * The document's active/focused element.
    */
  activeElement: Element;
  
  /**
    * Add an event listener to the document.
    * @param eventName A string representing the event type to listen for.
    * @param callback The function that receives a notification when an event of the specified type occurs.
    * @param capture If true, useCapture indicates that the user wishes to initiate capture.
    */
  addEventListener(eventName: string, callback: Function, capture: boolean): void;
  
  /**
    * Remove an event listener from the document.
    * @param eventName A string representing the event type to listen for.
    * @param callback The function to remove from the event.
    * @param capture Specifies whether the listener to be removed was registered as a capturing listener or not.
    */
  removeEventListener(eventName: string, callback: Function, capture: boolean): void;
  
  /**
    * Adopts a node from an external document.
    * @param node The node to be adopted.
    * @return The adopted node able to be used in the document.
    */
  adoptNode(node: Node): Node;
  
  /**
    * Creates the specified HTML element or an HTMLUnknownElement if the given element name isn't a known one.
    * @param tagName A string that specifies the type of element to be created.
    * @return The created element.
    */
  createElement(tagName: string): Element;
  
  /**
    * Creates a new Text node.
    * @param text A string to populate the new Text node.
    * @return A Text node.
    */
  createTextNode(text: string): Text;
  
  /**
    * Creates a new Comment node.
    * @param text A string to populate the new Comment node.
    * @return A Comment node.
    */
  createComment(text: string): Comment;
  
  /**
    * Creates a new DocumentFragment.
    * @return A DocumentFragment.
    */
  createDocumentFragment(): DocumentFragment;
  
  /**
    * Creates a new MutationObserver.
    * @param callback A callback that will recieve the change records with the mutations.
    * @return A MutationObservere.
    */
  createMutationObserver(callback: Function): MutationObserver;
  
  /**
    * Creates a new CustomEvent.
    * @param eventType A string representing the event type.
    * @param options An options object specifying bubbles:boolean, cancelable:boolean and/or detail:Object information.
    * @return A CustomEvent.
    */
  createCustomEvent(eventType: string, options: Object): CustomEvent;
  
  /**
    * Dispatches an event on the document.
    * @param evt The event to dispatch.
    */
  dispatchEvent(evt: Event): void;
  
  /**
    * Gives the values of all the CSS properties of an element after applying the active stylesheets and resolving any basic computation those values may contain.
    * @param element The Element for which to get the computed style.
    * @return The computed styles.
    */
  getComputedStyle(element: Element): CSSStyleDeclaration;
  
  /**
    * Locates an element in the document according to its id.
    * @param id The id to search the document for.
    * @return The found element.
    */
  getElementById(id: string): Element;
  
  /**
    * Performs a query selector on the document and returns all located matches.
    * @param query The query to use in searching the document.
    * @return A list of all matched elements in the document.
    */
  querySelectorAll(query: string): NodeList;
  
  /**
    * Gets the element that is the next sibling of the provided element.
    * @param element The element whose next sibling is being located.
    * @return The next sibling Element of the provided Element.
    */
  nextElementSibling(element: Node): Element;
  
  /**
    * Creates an HTMLTemplateElement using the markup provided.
    * @param markup A string containing the markup to turn into a template. Note: This string must contain the template element as well.
    * @return The instance of HTMLTemplateElement that was created from the provided markup.
    */
  createTemplateFromMarkup(markup: string): Element;
  
  /**
    * Appends a node to the parent, if provided, or the document.body otherwise.
    * @param newNode The node to append.
    * @param parentNode The node to append to, otherwise the document.body.
    */
  appendNode(newNode: Node, parentNode?: Node): void;
  
  /**
    * Replaces a node in the parent with a new node.
    * @param newNode The node to replace the old node with.
    * @param node The node that is being replaced.
    * @param parentNode The node that the current node is parented to.
    */
  replaceNode(newNode: Node, node: Node, parentNode?: Node): void;
  
  /**
    * Removes the specified node from the parent node.
    * @param node The node to remove.
    * @param parentNode The parent node from which the node will be removed.
    */
  removeNode(node: Node, parentNode?: Node): void;
  
  /**
    * Injects styles into the destination element, or the document.head if no destination is provided.
    * @param styles The css text to injext.
    * @param destination The destination element to inject the css text into. If not specified it will default to the document.head.
    * @param prepend Indicates whether or not the styles should be prepended to the destination. By default they are appended.
    * @return The Style node that was created.
    */
  injectStyles(styles: string, destination?: Element, prepend?: boolean): Node;
}

/**
* Creates an instance of Error that aggregates and preserves an innerError.
* @param message The error message.
* @param innerError The inner error message to aggregate.
* @param skipIfAlreadyAggregate Indicates to not wrap the inner error if it itself already has an innerError.
* @return The Error instance.
*/
export function AggregateError(message: string, innerError?: Error, skipIfAlreadyAggregate?: boolean): Error;

/**
* The singleton instance of the Feature discovery API.
*/
/**
* The singleton instance of the Feature discovery API.
*/
export const FEATURE: Feature;

/**
* The singleton instance of the Platform API.
*/
/**
* The singleton instance of the Platform API.
*/
export const PLATFORM: Platform;

/**
* The singleton instance of the Dom API.
*/
/**
* The singleton instance of the Dom API.
*/
export const DOM: Dom;
export let isInitialized: any;

/**
* Enables initializing a specific implementation of the Platform Abstraction Layer (PAL).
* @param callback Allows providing a callback which configures the three PAL singletons with their platform-specific implementations.
*/
export function initializePAL(callback: ((platform: Platform, feature: Feature, dom: Dom) => void)): void;
export function reset(): any;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/aurelia/metadata/1.0.3/dist/aurelia-metadata.d.ts
declare module 'aurelia-metadata' {
import {
  PLATFORM
} from '~aurelia-metadata~aurelia-pal/dist/aurelia-pal';

/**
* Helpers for working with metadata on functions.
*
* Note for the Typescript to ES5 transpiler: Due to the non-standard compliant implementation of 'extends', these methods, when applied to derived classes, will operate on the parent class and not on the child class. This can be circumvented by either transpiling to ES2015 (ES6) or by making the targetKey parameter class-specific eg. by using target.name for the targetKey parameter.
*/
export interface MetadataType {
  
  /**
    * The metadata key representing pluggable resources.
    */
  resource: string;
  
  /**
    * The metadata key representing parameter type information.
    */
  paramTypes: string;
  
  /**
    * The metadata key representing object property type information.
    */
  propertyType: string;
  
  /**
    * The metadata key representing property information.
    */
  properties: string;
  
  /**
    * Gets metadata specified by a key on a target, searching up the inheritance hierarchy.
    * @param metadataKey The key for the metadata to lookup.
    * @param target The target to lookup the metadata on.
    * @param targetKey The member on the target to lookup the metadata on.
    */
  get(metadataKey: string, target: Function, targetKey?: string): Object;
  
  /**
    * Gets metadata specified by a key on a target, only searching the own instance.
    * @param metadataKey The key for the metadata to lookup.
    * @param target The target to lookup the metadata on.
    * @param targetKey The member on the target to lookup the metadata on.
    */
  getOwn(metadataKey: string, target: Function, targetKey?: string): Object;
  
  /**
    * Defines metadata specified by a key on a target.
    * @param metadataKey The key for the metadata to define.
    * @param target The target to set the metadata on.
    * @param targetKey The member on the target to set the metadata on.
    */
  define(metadataKey: string, metadataValue: Object, target: Function, targetKey?: string): void;
  
  /**
    * Gets metadata specified by a key on a target, or creates an instance of the specified metadata if not found.
    * @param metadataKey The key for the metadata to lookup or create.
    * @param Type The type of metadata to create if existing metadata is not found.
    * @param target The target to lookup or create the metadata on.
    * @param targetKey The member on the target to lookup or create the metadata on.
    */
  getOrCreateOwn(metadataKey: string, Type: Function, target: Function, targetKey?: string): Object;
}

/**
* An object capable of applying it's captured decorators to a target.
*/
export interface DecoratorApplicator {
  
  /**
    * Applies the decorators to the target.
    * @param target The target.
    * @param key If applying to a method, the member name.
    * @param descriptor If applying to a method, you may supply an initial descriptor to pass to the decorators.
    */
  on(target: any, key?: string, descriptor?: PropertyDescriptor): any;
}

/**
* Options that control how the deprected decorator should function at runtime.
*/
export interface DeprecatedOptions {
  
  /**
    * Specifies a custom deprecation message.
    */
  message: string;
  
  /**
    * Specifies whether or not the deprecation should throw an error.
    */
  error: boolean;
}

/**
* Options used during protocol creation.
*/
export interface ProtocolOptions {
  
  /**
    * A function that will be run to validate the decorated class when the protocol is applied. It is also used to validate adhoc instances.
    * If the validation fails, a message should be returned which directs the developer in how to address the issue.
    */
  validate?: (target: any) => string | boolean;
  
  /**
    * A function which has the opportunity to compose additional behavior into the decorated class when the protocol is applied.
    */
  compose?: (target: any) => void;
}

/**
* Provides helpers for working with metadata.
*/
/**
* Provides helpers for working with metadata.
*/
export const metadata: MetadataType;

/**
* A metadata annotation that describes the origin module of the function to which it's attached.
*/
export class Origin {
  
  /**
    * The id of the module from which the item originated.
    */
  moduleId: string;
  
  /**
    * The member name of the export on the module object from which the item originated.
    */
  moduleMember: string;
  
  /**
    * Creates an instance of Origin metadata.
    * @param moduleId The id of the module from which the item originated.
    * @param moduleMember The member name of the export on the module object from which the item originated.
    */
  constructor(moduleId: string, moduleMember: string);
  
  /**
    * Get the Origin metadata for the specified function.
    * @param fn The function to inspect for Origin metadata.
    * @return Returns the Origin metadata.
    */
  static get(fn: Function): Origin;
  
  /**
    * Set the Origin metadata for the specified function.
    * @param fn The function to set the Origin metadata on.
    * @param fn The Origin metadata to store on the function.
    * @return Returns the Origin metadata.
    */
  static set(fn: Function, origin: Origin): void;
}

/**
* Enables applying decorators, particularly for use when there is no syntax support in the language, such as with ES5 and ES2016.
* @param rest The decorators to apply.
*/
/**
* Enables applying decorators, particularly for use when there is no syntax support in the language, such as with ES5 and ES2016.
* @param rest The decorators to apply.
*/
export function decorators(...rest: Function[]): DecoratorApplicator;

/**
* Decorator: Enables marking methods as deprecated.
* @param optionsOrTarget Options for how the deprected decorator should function at runtime.
*/
/**
* Decorator: Enables marking methods as deprecated.
* @param optionsOrTarget Options for how the deprected decorator should function at runtime.
*/
export function deprecated(optionsOrTarget?: DeprecatedOptions, maybeKey?: string, maybeDescriptor?: Object): any;

/**
* Decorator: Enables mixing behaior into a class.
* @param behavior An object with keys for each method to mix into the target class.
*/
export function mixin(behavior: Object): any;

/**
* Decorator: Creates a protocol.
* @param name The name of the protocol.
* @param options The validation function or options object used in configuring the protocol.
*/
/**
* Decorator: Creates a protocol.
* @param name The name of the protocol.
* @param options The validation function or options object used in configuring the protocol.
*/
export function protocol(name: string, options?: ((target: any) => string | boolean) | ProtocolOptions): any;
}
