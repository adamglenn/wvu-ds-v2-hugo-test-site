(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/data.js
  var elementMap, data_default;
  var init_data = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/data.js"() {
      elementMap = /* @__PURE__ */ new Map();
      data_default = {
        set(element, key, instance) {
          if (!elementMap.has(element)) {
            elementMap.set(element, /* @__PURE__ */ new Map());
          }
          const instanceMap = elementMap.get(element);
          if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
          }
          instanceMap.set(key, instance);
        },
        get(element, key) {
          if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null;
          }
          return null;
        },
        remove(element, key) {
          if (!elementMap.has(element)) {
            return;
          }
          const instanceMap = elementMap.get(element);
          instanceMap.delete(key);
          if (instanceMap.size === 0) {
            elementMap.delete(element);
          }
        }
      };
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/index.js
  var MAX_UID, MILLISECONDS_MULTIPLIER, TRANSITION_END, parseSelector, toType, getUID, getTransitionDurationFromElement, triggerTransitionEnd, isElement, getElement, isVisible, isDisabled, findShadowRoot, noop, reflow, getjQuery, DOMContentLoadedCallbacks, onDOMContentLoaded, isRTL, defineJQueryPlugin, execute, executeAfterTransition;
  var init_util = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/index.js"() {
      MAX_UID = 1e6;
      MILLISECONDS_MULTIPLIER = 1e3;
      TRANSITION_END = "transitionend";
      parseSelector = (selector) => {
        if (selector && window.CSS && window.CSS.escape) {
          selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
        }
        return selector;
      };
      toType = (object) => {
        if (object === null || object === void 0) {
          return `${object}`;
        }
        return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
      };
      getUID = (prefix) => {
        do {
          prefix += Math.floor(Math.random() * MAX_UID);
        } while (document.getElementById(prefix));
        return prefix;
      };
      getTransitionDurationFromElement = (element) => {
        if (!element) {
          return 0;
        }
        let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay);
        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        }
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      };
      triggerTransitionEnd = (element) => {
        element.dispatchEvent(new Event(TRANSITION_END));
      };
      isElement = (object) => {
        if (!object || typeof object !== "object") {
          return false;
        }
        if (typeof object.jquery !== "undefined") {
          object = object[0];
        }
        return typeof object.nodeType !== "undefined";
      };
      getElement = (object) => {
        if (isElement(object)) {
          return object.jquery ? object[0] : object;
        }
        if (typeof object === "string" && object.length > 0) {
          return document.querySelector(parseSelector(object));
        }
        return null;
      };
      isVisible = (element) => {
        if (!isElement(element) || element.getClientRects().length === 0) {
          return false;
        }
        const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
        const closedDetails = element.closest("details:not([open])");
        if (!closedDetails) {
          return elementIsVisible;
        }
        if (closedDetails !== element) {
          const summary = element.closest("summary");
          if (summary && summary.parentNode !== closedDetails) {
            return false;
          }
          if (summary === null) {
            return false;
          }
        }
        return elementIsVisible;
      };
      isDisabled = (element) => {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          return true;
        }
        if (element.classList.contains("disabled")) {
          return true;
        }
        if (typeof element.disabled !== "undefined") {
          return element.disabled;
        }
        return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
      };
      findShadowRoot = (element) => {
        if (!document.documentElement.attachShadow) {
          return null;
        }
        if (typeof element.getRootNode === "function") {
          const root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) {
          return element;
        }
        if (!element.parentNode) {
          return null;
        }
        return findShadowRoot(element.parentNode);
      };
      noop = () => {
      };
      reflow = (element) => {
        element.offsetHeight;
      };
      getjQuery = () => {
        if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
          return window.jQuery;
        }
        return null;
      };
      DOMContentLoadedCallbacks = [];
      onDOMContentLoaded = (callback) => {
        if (document.readyState === "loading") {
          if (!DOMContentLoadedCallbacks.length) {
            document.addEventListener("DOMContentLoaded", () => {
              for (const callback2 of DOMContentLoadedCallbacks) {
                callback2();
              }
            });
          }
          DOMContentLoadedCallbacks.push(callback);
        } else {
          callback();
        }
      };
      isRTL = () => document.documentElement.dir === "rtl";
      defineJQueryPlugin = (plugin) => {
        onDOMContentLoaded(() => {
          const $ = getjQuery();
          if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = () => {
              $.fn[name] = JQUERY_NO_CONFLICT;
              return plugin.jQueryInterface;
            };
          }
        });
      };
      execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
        return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
      };
      executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
        if (!waitForTransition) {
          execute(callback);
          return;
        }
        const durationPadding = 5;
        const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
        let called = false;
        const handler = ({ target }) => {
          if (target !== transitionElement) {
            return;
          }
          called = true;
          transitionElement.removeEventListener(TRANSITION_END, handler);
          execute(callback);
        };
        transitionElement.addEventListener(TRANSITION_END, handler);
        setTimeout(() => {
          if (!called) {
            triggerTransitionEnd(transitionElement);
          }
        }, emulatedDuration);
      };
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/event-handler.js
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, { delegateTarget: element });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, { delegateTarget: target });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  var namespaceRegex, stripNameRegex, stripUidRegex, eventRegistry, uidEvent, customEvents, nativeEvents, EventHandler, event_handler_default;
  var init_event_handler = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/event-handler.js"() {
      init_util();
      namespaceRegex = /[^.]*(?=\..*)\.|.*/;
      stripNameRegex = /\..*/;
      stripUidRegex = /::\d+$/;
      eventRegistry = {};
      uidEvent = 1;
      customEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      };
      nativeEvents = /* @__PURE__ */ new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
      ]);
      EventHandler = {
        on(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, false);
        },
        one(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, true);
        },
        off(element, originalTypeEvent, handler, delegationFunction) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          const inNamespace = typeEvent !== originalTypeEvent;
          const events = getElementEvents(element);
          const storeElementEvent = events[typeEvent] || {};
          const isNamespace = originalTypeEvent.startsWith(".");
          if (typeof callable !== "undefined") {
            if (!Object.keys(storeElementEvent).length) {
              return;
            }
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
          }
          if (isNamespace) {
            for (const elementEvent of Object.keys(events)) {
              removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            }
          }
          for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        },
        trigger(element, event, args) {
          if (typeof event !== "string" || !element) {
            return null;
          }
          const $ = getjQuery();
          const typeEvent = getTypeEvent(event);
          const inNamespace = event !== typeEvent;
          let jQueryEvent = null;
          let bubbles = true;
          let nativeDispatch = true;
          let defaultPrevented = false;
          if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
          }
          const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);
          if (defaultPrevented) {
            evt.preventDefault();
          }
          if (nativeDispatch) {
            element.dispatchEvent(evt);
          }
          if (evt.defaultPrevented && jQueryEvent) {
            jQueryEvent.preventDefault();
          }
          return evt;
        }
      };
      event_handler_default = EventHandler;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/manipulator.js
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator, manipulator_default;
  var init_manipulator = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/manipulator.js"() {
      Manipulator = {
        setDataAttribute(element, key, value) {
          element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
        },
        removeDataAttribute(element, key) {
          element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
        },
        getDataAttributes(element) {
          if (!element) {
            return {};
          }
          const attributes = {};
          const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
          for (const key of bsKeys) {
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
          }
          return attributes;
        },
        getDataAttribute(element, key) {
          return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
        }
      };
      manipulator_default = Manipulator;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/config.js
  var Config, config_default;
  var init_config = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/config.js"() {
      init_manipulator();
      init_util();
      Config = class {
        // Getters
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        _configAfterMerge(config) {
          return config;
        }
        _mergeConfigObj(config, element) {
          const jsonConfig = isElement(element) ? manipulator_default.getDataAttribute(element, "config") : {};
          return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...isElement(element) ? manipulator_default.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
          };
        }
        _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
          for (const [property, expectedTypes] of Object.entries(configTypes)) {
            const value = config[property];
            const valueType = isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
              );
            }
          }
        }
      };
      config_default = Config;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/base-component.js
  var VERSION, BaseComponent, base_component_default;
  var init_base_component = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/base-component.js"() {
      init_data();
      init_event_handler();
      init_config();
      init_util();
      VERSION = "5.3.3";
      BaseComponent = class extends config_default {
        constructor(element, config) {
          super();
          element = getElement(element);
          if (!element) {
            return;
          }
          this._element = element;
          this._config = this._getConfig(config);
          data_default.set(this._element, this.constructor.DATA_KEY, this);
        }
        // Public
        dispose() {
          data_default.remove(this._element, this.constructor.DATA_KEY);
          event_handler_default.off(this._element, this.constructor.EVENT_KEY);
          for (const propertyName of Object.getOwnPropertyNames(this)) {
            this[propertyName] = null;
          }
        }
        _queueCallback(callback, element, isAnimated = true) {
          executeAfterTransition(callback, element, isAnimated);
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config, this._element);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        // Static
        static getInstance(element) {
          return data_default.get(getElement(element), this.DATA_KEY);
        }
        static getOrCreateInstance(element, config = {}) {
          return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
        }
        static get VERSION() {
          return VERSION;
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(name) {
          return `${name}${this.EVENT_KEY}`;
        }
      };
      base_component_default = BaseComponent;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/selector-engine.js
  var getSelector, SelectorEngine, selector_engine_default;
  var init_selector_engine = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/dom/selector-engine.js"() {
      init_util();
      getSelector = (element) => {
        let selector = element.getAttribute("data-bs-target");
        if (!selector || selector === "#") {
          let hrefAttribute = element.getAttribute("href");
          if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
            return null;
          }
          if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
            hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
          }
          selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
        }
        return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
      };
      SelectorEngine = {
        find(selector, element = document.documentElement) {
          return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne(selector, element = document.documentElement) {
          return Element.prototype.querySelector.call(element, selector);
        },
        children(element, selector) {
          return [].concat(...element.children).filter((child) => child.matches(selector));
        },
        parents(element, selector) {
          const parents = [];
          let ancestor = element.parentNode.closest(selector);
          while (ancestor) {
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
          }
          return parents;
        },
        prev(element, selector) {
          let previous = element.previousElementSibling;
          while (previous) {
            if (previous.matches(selector)) {
              return [previous];
            }
            previous = previous.previousElementSibling;
          }
          return [];
        },
        // TODO: this is now unused; remove later along with prev()
        next(element, selector) {
          let next = element.nextElementSibling;
          while (next) {
            if (next.matches(selector)) {
              return [next];
            }
            next = next.nextElementSibling;
          }
          return [];
        },
        focusableChildren(element) {
          const focusables = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]'
          ].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
          return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
        },
        getSelectorFromElement(element) {
          const selector = getSelector(element);
          if (selector) {
            return SelectorEngine.findOne(selector) ? selector : null;
          }
          return null;
        },
        getElementFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.findOne(selector) : null;
        },
        getMultipleElementsFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.find(selector) : [];
        }
      };
      selector_engine_default = SelectorEngine;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/component-functions.js
  var enableDismissTrigger;
  var init_component_functions = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/component-functions.js"() {
      init_event_handler();
      init_selector_engine();
      init_util();
      enableDismissTrigger = (component, method = "hide") => {
        const clickEvent = `click.dismiss${component.EVENT_KEY}`;
        const name = component.NAME;
        event_handler_default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
          if (["A", "AREA"].includes(this.tagName)) {
            event.preventDefault();
          }
          if (isDisabled(this)) {
            return;
          }
          const target = selector_engine_default.getElementFromSelector(this) || this.closest(`.${name}`);
          const instance = component.getOrCreateInstance(target);
          instance[method]();
        });
      };
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/toast.js
  var NAME, DATA_KEY, EVENT_KEY, EVENT_MOUSEOVER, EVENT_MOUSEOUT, EVENT_FOCUSIN, EVENT_FOCUSOUT, EVENT_HIDE, EVENT_HIDDEN, EVENT_SHOW, EVENT_SHOWN, CLASS_NAME_FADE, CLASS_NAME_HIDE, CLASS_NAME_SHOW, CLASS_NAME_SHOWING, DefaultType, Default, Toast, toast_default;
  var init_toast = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/toast.js"() {
      init_base_component();
      init_event_handler();
      init_component_functions();
      init_util();
      NAME = "toast";
      DATA_KEY = "bs.toast";
      EVENT_KEY = `.${DATA_KEY}`;
      EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
      EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
      EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
      EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
      EVENT_HIDE = `hide${EVENT_KEY}`;
      EVENT_HIDDEN = `hidden${EVENT_KEY}`;
      EVENT_SHOW = `show${EVENT_KEY}`;
      EVENT_SHOWN = `shown${EVENT_KEY}`;
      CLASS_NAME_FADE = "fade";
      CLASS_NAME_HIDE = "hide";
      CLASS_NAME_SHOW = "show";
      CLASS_NAME_SHOWING = "showing";
      DefaultType = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      };
      Default = {
        animation: true,
        autohide: true,
        delay: 5e3
      };
      Toast = class _Toast extends base_component_default {
        constructor(element, config) {
          super(element, config);
          this._timeout = null;
          this._hasMouseInteraction = false;
          this._hasKeyboardInteraction = false;
          this._setListeners();
        }
        // Getters
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        // Public
        show() {
          const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW);
          if (showEvent.defaultPrevented) {
            return;
          }
          this._clearTimeout();
          if (this._config.animation) {
            this._element.classList.add(CLASS_NAME_FADE);
          }
          const complete = () => {
            this._element.classList.remove(CLASS_NAME_SHOWING);
            event_handler_default.trigger(this._element, EVENT_SHOWN);
            this._maybeScheduleHide();
          };
          this._element.classList.remove(CLASS_NAME_HIDE);
          reflow(this._element);
          this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
          this._queueCallback(complete, this._element, this._config.animation);
        }
        hide() {
          if (!this.isShown()) {
            return;
          }
          const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE);
          if (hideEvent.defaultPrevented) {
            return;
          }
          const complete = () => {
            this._element.classList.add(CLASS_NAME_HIDE);
            this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
            event_handler_default.trigger(this._element, EVENT_HIDDEN);
          };
          this._element.classList.add(CLASS_NAME_SHOWING);
          this._queueCallback(complete, this._element, this._config.animation);
        }
        dispose() {
          this._clearTimeout();
          if (this.isShown()) {
            this._element.classList.remove(CLASS_NAME_SHOW);
          }
          super.dispose();
        }
        isShown() {
          return this._element.classList.contains(CLASS_NAME_SHOW);
        }
        // Private
        _maybeScheduleHide() {
          if (!this._config.autohide) {
            return;
          }
          if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
            return;
          }
          this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay);
        }
        _onInteraction(event, isInteracting) {
          switch (event.type) {
            case "mouseover":
            case "mouseout": {
              this._hasMouseInteraction = isInteracting;
              break;
            }
            case "focusin":
            case "focusout": {
              this._hasKeyboardInteraction = isInteracting;
              break;
            }
            default: {
              break;
            }
          }
          if (isInteracting) {
            this._clearTimeout();
            return;
          }
          const nextElement = event.relatedTarget;
          if (this._element === nextElement || this._element.contains(nextElement)) {
            return;
          }
          this._maybeScheduleHide();
        }
        _setListeners() {
          event_handler_default.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
          event_handler_default.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
          event_handler_default.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
          event_handler_default.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
        }
        _clearTimeout() {
          clearTimeout(this._timeout);
          this._timeout = null;
        }
        // Static
        static jQueryInterface(config) {
          return this.each(function() {
            const data = _Toast.getOrCreateInstance(this, config);
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config](this);
            }
          });
        }
      };
      enableDismissTrigger(Toast);
      defineJQueryPlugin(Toast);
      toast_default = Toast;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2/package/dist/cjs/popper.js
  var require_popper = __commonJS({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2/package/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement2(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement2(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement2(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle2(clippingParent).position !== "static" : true);
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper3(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref4) {
        var state = _ref4.state, options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break")
              break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper2 = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper2;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/sanitizer.js
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var ARIA_ATTRIBUTE_PATTERN, DefaultAllowlist, uriAttributes, SAFE_URL_PATTERN, allowedAttribute;
  var init_sanitizer = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/sanitizer.js"() {
      ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      DefaultAllowlist = {
        // Global attributes allowed on any supplied element below.
        "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      uriAttributes = /* @__PURE__ */ new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
      ]);
      SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
      allowedAttribute = (attribute, allowedAttributeList) => {
        const attributeName = attribute.nodeName.toLowerCase();
        if (allowedAttributeList.includes(attributeName)) {
          if (uriAttributes.has(attributeName)) {
            return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
          }
          return true;
        }
        return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
      };
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/template-factory.js
  var NAME2, Default2, DefaultType2, DefaultContentType, TemplateFactory, template_factory_default;
  var init_template_factory = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/util/template-factory.js"() {
      init_selector_engine();
      init_config();
      init_sanitizer();
      init_util();
      NAME2 = "TemplateFactory";
      Default2 = {
        allowList: DefaultAllowlist,
        content: {},
        // { selector : text ,  selector2 : text2 , }
        extraClass: "",
        html: false,
        sanitize: true,
        sanitizeFn: null,
        template: "<div></div>"
      };
      DefaultType2 = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
      };
      DefaultContentType = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
      };
      TemplateFactory = class extends config_default {
        constructor(config) {
          super();
          this._config = this._getConfig(config);
        }
        // Getters
        static get Default() {
          return Default2;
        }
        static get DefaultType() {
          return DefaultType2;
        }
        static get NAME() {
          return NAME2;
        }
        // Public
        getContent() {
          return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(content) {
          this._checkContent(content);
          this._config.content = { ...this._config.content, ...content };
          return this;
        }
        toHtml() {
          const templateWrapper = document.createElement("div");
          templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
          for (const [selector, text] of Object.entries(this._config.content)) {
            this._setContent(templateWrapper, text, selector);
          }
          const template = templateWrapper.children[0];
          const extraClass = this._resolvePossibleFunction(this._config.extraClass);
          if (extraClass) {
            template.classList.add(...extraClass.split(" "));
          }
          return template;
        }
        // Private
        _typeCheckConfig(config) {
          super._typeCheckConfig(config);
          this._checkContent(config.content);
        }
        _checkContent(arg) {
          for (const [selector, content] of Object.entries(arg)) {
            super._typeCheckConfig({ selector, entry: content }, DefaultContentType);
          }
        }
        _setContent(template, content, selector) {
          const templateElement = selector_engine_default.findOne(selector, template);
          if (!templateElement) {
            return;
          }
          content = this._resolvePossibleFunction(content);
          if (!content) {
            templateElement.remove();
            return;
          }
          if (isElement(content)) {
            this._putElementInTemplate(getElement(content), templateElement);
            return;
          }
          if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
          }
          templateElement.textContent = content;
        }
        _maybeSanitize(arg) {
          return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
        }
        _resolvePossibleFunction(arg) {
          return execute(arg, [this]);
        }
        _putElementInTemplate(element, templateElement) {
          if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
          }
          templateElement.textContent = element.textContent;
        }
      };
      template_factory_default = TemplateFactory;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/tooltip.js
  var Popper, NAME3, DISALLOWED_ATTRIBUTES, CLASS_NAME_FADE2, CLASS_NAME_MODAL, CLASS_NAME_SHOW2, SELECTOR_TOOLTIP_INNER, SELECTOR_MODAL, EVENT_MODAL_HIDE, TRIGGER_HOVER, TRIGGER_FOCUS, TRIGGER_CLICK, TRIGGER_MANUAL, EVENT_HIDE2, EVENT_HIDDEN2, EVENT_SHOW2, EVENT_SHOWN2, EVENT_INSERTED, EVENT_CLICK, EVENT_FOCUSIN2, EVENT_FOCUSOUT2, EVENT_MOUSEENTER, EVENT_MOUSELEAVE, AttachmentMap, Default3, DefaultType3, Tooltip, tooltip_default;
  var init_tooltip = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/tooltip.js"() {
      Popper = __toESM(require_popper());
      init_base_component();
      init_event_handler();
      init_manipulator();
      init_util();
      init_sanitizer();
      init_template_factory();
      NAME3 = "tooltip";
      DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
      CLASS_NAME_FADE2 = "fade";
      CLASS_NAME_MODAL = "modal";
      CLASS_NAME_SHOW2 = "show";
      SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
      SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
      EVENT_MODAL_HIDE = "hide.bs.modal";
      TRIGGER_HOVER = "hover";
      TRIGGER_FOCUS = "focus";
      TRIGGER_CLICK = "click";
      TRIGGER_MANUAL = "manual";
      EVENT_HIDE2 = "hide";
      EVENT_HIDDEN2 = "hidden";
      EVENT_SHOW2 = "show";
      EVENT_SHOWN2 = "shown";
      EVENT_INSERTED = "inserted";
      EVENT_CLICK = "click";
      EVENT_FOCUSIN2 = "focusin";
      EVENT_FOCUSOUT2 = "focusout";
      EVENT_MOUSEENTER = "mouseenter";
      EVENT_MOUSELEAVE = "mouseleave";
      AttachmentMap = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: isRTL() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: isRTL() ? "right" : "left"
      };
      Default3 = {
        allowList: DefaultAllowlist,
        animation: true,
        boundary: "clippingParents",
        container: false,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: false,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: true,
        sanitizeFn: null,
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
      };
      DefaultType3 = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
      };
      Tooltip = class _Tooltip extends base_component_default {
        constructor(element, config) {
          if (typeof Popper === "undefined") {
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          }
          super(element, config);
          this._isEnabled = true;
          this._timeout = 0;
          this._isHovered = null;
          this._activeTrigger = {};
          this._popper = null;
          this._templateFactory = null;
          this._newContent = null;
          this.tip = null;
          this._setListeners();
          if (!this._config.selector) {
            this._fixTitle();
          }
        }
        // Getters
        static get Default() {
          return Default3;
        }
        static get DefaultType() {
          return DefaultType3;
        }
        static get NAME() {
          return NAME3;
        }
        // Public
        enable() {
          this._isEnabled = true;
        }
        disable() {
          this._isEnabled = false;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          if (!this._isEnabled) {
            return;
          }
          this._activeTrigger.click = !this._activeTrigger.click;
          if (this._isShown()) {
            this._leave();
            return;
          }
          this._enter();
        }
        dispose() {
          clearTimeout(this._timeout);
          event_handler_default.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
          if (this._element.getAttribute("data-bs-original-title")) {
            this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
          }
          this._disposePopper();
          super.dispose();
        }
        show() {
          if (this._element.style.display === "none") {
            throw new Error("Please use show on visible elements");
          }
          if (!(this._isWithContent() && this._isEnabled)) {
            return;
          }
          const showEvent = event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_SHOW2));
          const shadowRoot = findShadowRoot(this._element);
          const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
          if (showEvent.defaultPrevented || !isInTheDom) {
            return;
          }
          this._disposePopper();
          const tip = this._getTipElement();
          this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
          const { container } = this._config;
          if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
          }
          this._popper = this._createPopper(tip);
          tip.classList.add(CLASS_NAME_SHOW2);
          if ("ontouchstart" in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
              event_handler_default.on(element, "mouseover", noop);
            }
          }
          const complete = () => {
            event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_SHOWN2));
            if (this._isHovered === false) {
              this._leave();
            }
            this._isHovered = false;
          };
          this._queueCallback(complete, this.tip, this._isAnimated());
        }
        hide() {
          if (!this._isShown()) {
            return;
          }
          const hideEvent = event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_HIDE2));
          if (hideEvent.defaultPrevented) {
            return;
          }
          const tip = this._getTipElement();
          tip.classList.remove(CLASS_NAME_SHOW2);
          if ("ontouchstart" in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
              event_handler_default.off(element, "mouseover", noop);
            }
          }
          this._activeTrigger[TRIGGER_CLICK] = false;
          this._activeTrigger[TRIGGER_FOCUS] = false;
          this._activeTrigger[TRIGGER_HOVER] = false;
          this._isHovered = null;
          const complete = () => {
            if (this._isWithActiveTrigger()) {
              return;
            }
            if (!this._isHovered) {
              this._disposePopper();
            }
            this._element.removeAttribute("aria-describedby");
            event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN2));
          };
          this._queueCallback(complete, this.tip, this._isAnimated());
        }
        update() {
          if (this._popper) {
            this._popper.update();
          }
        }
        // Protected
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          if (!this.tip) {
            this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
          }
          return this.tip;
        }
        _createTipElement(content) {
          const tip = this._getTemplateFactory(content).toHtml();
          if (!tip) {
            return null;
          }
          tip.classList.remove(CLASS_NAME_FADE2, CLASS_NAME_SHOW2);
          tip.classList.add(`bs-${this.constructor.NAME}-auto`);
          const tipId = getUID(this.constructor.NAME).toString();
          tip.setAttribute("id", tipId);
          if (this._isAnimated()) {
            tip.classList.add(CLASS_NAME_FADE2);
          }
          return tip;
        }
        setContent(content) {
          this._newContent = content;
          if (this._isShown()) {
            this._disposePopper();
            this.show();
          }
        }
        _getTemplateFactory(content) {
          if (this._templateFactory) {
            this._templateFactory.changeContent(content);
          } else {
            this._templateFactory = new template_factory_default({
              ...this._config,
              // the `content` var has to be after `this._config`
              // to override config.content in case of popover
              content,
              extraClass: this._resolvePossibleFunction(this._config.customClass)
            });
          }
          return this._templateFactory;
        }
        _getContentForTemplate() {
          return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
          };
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        // Private
        _initializeOnDelegatedTarget(event) {
          return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE2);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW2);
        }
        _createPopper(tip) {
          const placement = execute(this._config.placement, [this, tip, this._element]);
          const attachment = AttachmentMap[placement.toUpperCase()];
          return Popper.createPopper(this._element, tip, this._getPopperConfig(attachment));
        }
        _getOffset() {
          const { offset } = this._config;
          if (typeof offset === "string") {
            return offset.split(",").map((value) => Number.parseInt(value, 10));
          }
          if (typeof offset === "function") {
            return (popperData) => offset(popperData, this._element);
          }
          return offset;
        }
        _resolvePossibleFunction(arg) {
          return execute(arg, [this._element]);
        }
        _getPopperConfig(attachment) {
          const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements
                }
              },
              {
                name: "offset",
                options: {
                  offset: this._getOffset()
                }
              },
              {
                name: "preventOverflow",
                options: {
                  boundary: this._config.boundary
                }
              },
              {
                name: "arrow",
                options: {
                  element: `.${this.constructor.NAME}-arrow`
                }
              },
              {
                name: "preSetPlacement",
                enabled: true,
                phase: "beforeMain",
                fn: (data) => {
                  this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                }
              }
            ]
          };
          return {
            ...defaultBsPopperConfig,
            ...execute(this._config.popperConfig, [defaultBsPopperConfig])
          };
        }
        _setListeners() {
          const triggers = this._config.trigger.split(" ");
          for (const trigger of triggers) {
            if (trigger === "click") {
              event_handler_default.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
              });
            } else if (trigger !== TRIGGER_MANUAL) {
              const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN2);
              const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT2);
              event_handler_default.on(this._element, eventIn, this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                context._enter();
              });
              event_handler_default.on(this._element, eventOut, this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                context._leave();
              });
            }
          }
          this._hideModalHandler = () => {
            if (this._element) {
              this.hide();
            }
          };
          event_handler_default.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        }
        _fixTitle() {
          const title = this._element.getAttribute("title");
          if (!title) {
            return;
          }
          if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
            this._element.setAttribute("aria-label", title);
          }
          this._element.setAttribute("data-bs-original-title", title);
          this._element.removeAttribute("title");
        }
        _enter() {
          if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
          }
          this._isHovered = true;
          this._setTimeout(() => {
            if (this._isHovered) {
              this.show();
            }
          }, this._config.delay.show);
        }
        _leave() {
          if (this._isWithActiveTrigger()) {
            return;
          }
          this._isHovered = false;
          this._setTimeout(() => {
            if (!this._isHovered) {
              this.hide();
            }
          }, this._config.delay.hide);
        }
        _setTimeout(handler, timeout) {
          clearTimeout(this._timeout);
          this._timeout = setTimeout(handler, timeout);
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(true);
        }
        _getConfig(config) {
          const dataAttributes = manipulator_default.getDataAttributes(this._element);
          for (const dataAttribute of Object.keys(dataAttributes)) {
            if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
              delete dataAttributes[dataAttribute];
            }
          }
          config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
          };
          config = this._mergeConfigObj(config);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        _configAfterMerge(config) {
          config.container = config.container === false ? document.body : getElement(config.container);
          if (typeof config.delay === "number") {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }
          if (typeof config.title === "number") {
            config.title = config.title.toString();
          }
          if (typeof config.content === "number") {
            config.content = config.content.toString();
          }
          return config;
        }
        _getDelegateConfig() {
          const config = {};
          for (const [key, value] of Object.entries(this._config)) {
            if (this.constructor.Default[key] !== value) {
              config[key] = value;
            }
          }
          config.selector = false;
          config.trigger = "manual";
          return config;
        }
        _disposePopper() {
          if (this._popper) {
            this._popper.destroy();
            this._popper = null;
          }
          if (this.tip) {
            this.tip.remove();
            this.tip = null;
          }
        }
        // Static
        static jQueryInterface(config) {
          return this.each(function() {
            const data = _Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (typeof data[config] === "undefined") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          });
        }
      };
      defineJQueryPlugin(Tooltip);
      tooltip_default = Tooltip;
    }
  });

  // ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/popover.js
  var NAME4, SELECTOR_TITLE, SELECTOR_CONTENT, Default4, DefaultType4, Popover, popover_default;
  var init_popover = __esm({
    "ns-hugo:/Users/adamglenn/sites/cleanslate_2_themes/wvu-ds-v2-hugo-test-site/_vendor/github.com/twbs/bootstrap/js/src/popover.js"() {
      init_tooltip();
      init_util();
      NAME4 = "popover";
      SELECTOR_TITLE = ".popover-header";
      SELECTOR_CONTENT = ".popover-body";
      Default4 = {
        ...tooltip_default.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
      };
      DefaultType4 = {
        ...tooltip_default.DefaultType,
        content: "(null|string|element|function)"
      };
      Popover = class _Popover extends tooltip_default {
        // Getters
        static get Default() {
          return Default4;
        }
        static get DefaultType() {
          return DefaultType4;
        }
        static get NAME() {
          return NAME4;
        }
        // Overrides
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        // Private
        _getContentForTemplate() {
          return {
            [SELECTOR_TITLE]: this._getTitle(),
            [SELECTOR_CONTENT]: this._getContent()
          };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        // Static
        static jQueryInterface(config) {
          return this.each(function() {
            const data = _Popover.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (typeof data[config] === "undefined") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          });
        }
      };
      defineJQueryPlugin(Popover);
      popover_default = Popover;
    }
  });

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
      init_toast();
      init_popover();
      (function() {
        let toastElList = [].slice.call(document.querySelectorAll(".toast"));
        let toastList = toastElList.map(function(toastEl) {
          return new toast_default(toastEl);
        });
        toastList.forEach(function(toast) {
          toast.show();
        });
        let popoverTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="popover"]')
        );
        popoverTriggerList.map(function(popoverTriggerEl) {
          return new popover_default(popoverTriggerEl);
        });
      })();
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Parvus = t();
      }(exports, function() {
        "use strict";
        var e = { lightboxLabel: "This is a dialog window that overlays the main content of the page. The modal displays the enlarged image. Pressing the Escape key will close the modal and bring you back to where you were on the page.", lightboxLoadingIndicatorLabel: "Image loading", lightboxLoadingError: "The requested image cannot be loaded.", controlsLabel: "Controls", previousButtonLabel: "Previous image", nextButtonLabel: "Next image", closeButtonLabel: "Close dialog window", sliderLabel: "Images", slideLabel: "Image" };
        return function(t) {
          const r = window, s = ['a:not([inert]):not([tabindex^="-"])', 'button:not([inert]):not([tabindex^="-"]):not(:disabled)', '[tabindex]:not([inert]):not([tabindex^="-"])'], i = { triggerElements: [], slider: null, sliderElements: [], contentElements: [] }, n = {};
          let a = 0, o = null, l = null, d = 0, u = {}, c = null, m = null, p = 1, h = null, g = null, b = null, v = null, f = null, E = null, A = null, y = null, w = {}, L = false, _ = false, x = false, C = null, $ = null, k = null, I = false, T = null, S = true;
          const M = window.matchMedia("(prefers-reduced-motion)"), B = () => {
            M.matches ? (S = true, T = 0.1) : (S = false, T = u.transitionDuration);
          };
          M.addEventListener("change", B);
          const N = (e2) => {
            const t2 = e2.dataset.group || `default-${a}`;
            return ++a, e2.hasAttribute("data-group") || e2.setAttribute("data-group", t2), t2;
          }, q = (e2) => {
            if (!("A" === e2.tagName && e2.hasAttribute("href") || "BUTTON" === e2.tagName && e2.hasAttribute("data-target")))
              throw new Error("Use a link with the 'href' attribute or a button with the 'data-target' attribute. Both attributes must have a path to the image file.");
            if (o = N(e2), n[o] || (n[o] = structuredClone(i)), n[o].triggerElements.includes(e2))
              throw new Error("Ups, element already added.");
            if (n[o].triggerElements.push(e2), ((e3) => {
              if (e3.querySelector("img")) {
                const t2 = document.createElement("div");
                e3.classList.add("parvus-zoom"), t2.className = "parvus-zoom__indicator", t2.innerHTML = u.lightboxIndicatorIcon, e3.appendChild(t2);
              }
            })(e2), e2.classList.add("parvus-trigger"), e2.addEventListener("click", re), be() && o === l) {
              const t2 = n[o].triggerElements.indexOf(e2);
              X(t2), O(e2, t2, () => {
                P(t2);
              }), Z(), V(), K();
            }
          }, F = (e2) => {
            if (!e2 || !e2.hasAttribute("data-group"))
              return;
            const t2 = N(e2);
            if (!n[t2] || !n[t2].triggerElements.includes(e2))
              return;
            const r2 = n[t2].triggerElements.indexOf(e2);
            if (n[t2].triggerElements.splice(r2, 1), n[t2].sliderElements.splice(r2, 1), e2.classList.contains("parvus-zoom")) {
              const t3 = e2.querySelector(".parvus-zoom__indicator");
              e2.classList.remove("parvus-zoom"), e2.removeChild(t3);
            }
            be() && t2 === l && (Z(), V(), K()), e2.removeEventListener("click", re), e2.classList.remove("parvus-trigger");
          }, X = (e2) => {
            if (void 0 !== n[l].sliderElements[e2])
              return;
            const t2 = document.createElement("div"), r2 = document.createElement("div"), s2 = n[l].triggerElements.length;
            if (t2.className = "parvus__slide", t2.style.position = "absolute", t2.style.left = 100 * e2 + "%", t2.setAttribute("aria-hidden", "true"), t2.appendChild(r2), s2 > 1 && (t2.setAttribute("role", "group"), t2.setAttribute("aria-label", `${u.l10n.slideLabel} ${e2 + 1}/${s2}`)), n[l].sliderElements[e2] = t2, e2 >= d) {
              const r3 = ((e3) => {
                const t3 = n[l].sliderElements, r4 = t3.length;
                for (let s3 = e3 + 1; s3 < r4; s3++)
                  if (void 0 !== t3[s3])
                    return s3;
                return -1;
              })(e2);
              -1 !== r3 ? n[l].sliderElements[r3].before(t2) : n[l].slider.appendChild(t2);
            } else {
              const r3 = ((e3) => {
                const t3 = n[l].sliderElements;
                for (let r4 = e3 - 1; r4 >= 0; r4--)
                  if (void 0 !== t3[r4])
                    return r4;
                return -1;
              })(e2);
              -1 !== r3 ? n[l].sliderElements[r3].after(t2) : n[l].slider.prepend(t2);
            }
          }, Y = (e2) => {
            if (!c || !e2 || !e2.classList.contains("parvus-trigger") || be())
              return;
            if (l = N(e2), !n[l].triggerElements.includes(e2))
              throw new Error("Ups, I can't find the element.");
            d = n[l].triggerElements.indexOf(e2), C = document.activeElement, history.pushState({ parvus: "close" }, "Image", window.location.href), he();
            document.querySelectorAll('body > *:not([aria-hidden="true"])').forEach((e3) => {
              e3.setAttribute("aria-hidden", "true"), e3.classList.add("parvus-hidden");
            }), u.hideScrollbar && (document.body.style.marginInlineEnd = r.innerWidth - document.documentElement.clientWidth + "px", document.body.style.overflow = "hidden"), c.classList.add("parvus--is-opening"), c.setAttribute("aria-hidden", "false"), (() => {
              const e3 = document.createElement("div");
              e3.className = "parvus__slider", e3.setAttribute("aria-hidden", "true"), n[l].slider = e3, c.appendChild(e3);
            })(), X(d), n[l].slider.setAttribute("aria-hidden", "false"), G(), Z(), V(), K(), ne(), D(d), O(e2, d, () => {
              P(d, true), c.classList.remove("parvus--is-opening"), n[l].slider.classList.add("parvus__slider--animate");
            }), H(d + 1), H(d - 1), fe("open", { source: e2 }), document.body.classList.add("parvus-is-open");
          }, z = () => {
            if (!be())
              throw new Error("Ups, I'm already closed.");
            const e2 = n[l].contentElements[d], t2 = n[l].triggerElements[d];
            ge(), J(), "close" === history.state?.parvus && history.back();
            document.querySelectorAll(".parvus-hidden").forEach((e3) => {
              e3.removeAttribute("aria-hidden"), e3.classList.remove("parvus-hidden");
            }), c.classList.add("parvus--is-closing"), requestAnimationFrame(() => {
              const r3 = t2.getBoundingClientRect();
              if (e2 && "IMG" === e2.tagName) {
                const t3 = e2.getBoundingClientRect(), s2 = r3.width / t3.width, i2 = r3.height / t3.height, n2 = r3.left - t3.left, a2 = r3.top - t3.top;
                e2.style.transform = `translate(${n2}px, ${a2}px) scale(${s2}, ${i2})`;
              }
              e2.style.opacity = 0, e2.style.transition = `transform ${T}ms ${u.transitionTimingFunction}, opacity ${T}ms ${u.transitionTimingFunction} ${T / 2}ms`;
            });
            const r2 = () => {
              W(d), C = u.backFocus ? C : n[l].triggerElements[d], C.focus({ preventScroll: true }), c.setAttribute("aria-hidden", "true"), c.classList.remove("parvus--is-closing"), c.classList.remove("parvus--is-vertical-closing"), e2.style.transform = "", e2.removeEventListener("transitionend", r2), n[l].slider.remove(), n[l].slider = null, n[l].sliderElements = [], n[l].contentElements = [], y.removeAttribute("aria-hidden"), f.removeAttribute("aria-hidden"), f.removeAttribute("aria-disabled"), E.removeAttribute("aria-hidden"), E.removeAttribute("aria-disabled"), u.hideScrollbar && (document.body.style.marginInlineEnd = "", document.body.style.overflow = "");
            };
            e2.addEventListener("transitionend", r2, { once: true }), fe("close", { detail: { source: n[l].triggerElements[d] } }), document.body.classList.remove("parvus-is-open");
          }, H = (e2) => {
            e2 < 0 || e2 >= n[l].triggerElements.length || void 0 !== n[l].sliderElements[e2] || (X(e2), O(n[l].triggerElements[e2], e2, () => {
              P(e2);
            }));
          }, D = (e2) => {
            n[l].sliderElements[e2].setAttribute("aria-hidden", "false");
          }, O = (e2, t2, r2) => {
            const { contentElements: s2, sliderElements: i2 } = n[l];
            if (void 0 !== s2[t2])
              return void (r2 && "function" == typeof r2 && r2());
            const a2 = i2[t2].querySelector("div"), o2 = new Image(), d2 = document.createElement("div"), c2 = e2.querySelector("img"), m2 = document.createElement("div");
            d2.className = "parvus__content", m2.className = "parvus__loader", m2.setAttribute("role", "progressbar"), m2.setAttribute("aria-label", u.l10n.lightboxLoadingIndicatorLabel), a2.appendChild(m2);
            new Promise((e3, t3) => {
              o2.onload = () => e3(o2), o2.onerror = (e4) => t3(e4);
            }).then((r3) => {
              r3.style.opacity = 0, d2.appendChild(r3), a2.appendChild(d2), u.captions && ((e3, t3, r4) => {
                const s3 = document.createElement("div");
                let i3 = null;
                if (s3.className = "parvus__caption", "self" === u.captionsSelector)
                  t3.hasAttribute(u.captionsAttribute) && "" !== t3.getAttribute(u.captionsAttribute) && (i3 = t3.getAttribute(u.captionsAttribute));
                else {
                  const e4 = t3.querySelector(u.captionsSelector);
                  null !== e4 && (i3 = e4.hasAttribute(u.captionsAttribute) && "" !== e4.getAttribute(u.captionsAttribute) ? e4.getAttribute(u.captionsAttribute) : e4.innerHTML);
                }
                if (null !== i3) {
                  const t4 = `parvus__caption-${r4}`;
                  s3.setAttribute("aria-labelledby", t4), s3.id = t4, s3.innerHTML = `<p>${i3}</p>`, e3.appendChild(s3);
                }
              })(a2, e2, t2), s2[t2] = r3, r3.setAttribute("width", r3.naturalWidth), r3.setAttribute("height", r3.naturalHeight), te(i2[t2], r3);
            }).catch(() => {
              const e3 = document.createElement("div");
              e3.classList.add("parvus__content"), e3.classList.add("parvus__content--error"), e3.innerHTML = `${u.l10n.lightboxLoadingError}`, a2.appendChild(e3), s2[t2] = e3;
            }).finally(() => {
              a2.removeChild(m2), r2 && "function" == typeof r2 && r2();
            }), e2.hasAttribute("data-sizes") && "" !== e2.getAttribute("data-sizes") && o2.setAttribute("sizes", e2.getAttribute("data-sizes")), e2.hasAttribute("data-srcset") && "" !== e2.getAttribute("data-srcset") && o2.setAttribute("srcset", e2.getAttribute("data-srcset")), "A" === e2.tagName ? o2.setAttribute("src", e2.href) : o2.setAttribute("src", e2.getAttribute("data-target")), c2 && c2.hasAttribute("alt") && "" !== c2.getAttribute("alt") ? o2.alt = c2.alt : e2.hasAttribute("data-alt") && "" !== e2.getAttribute("data-alt") ? o2.alt = e2.getAttribute("data-alt") : o2.alt = "";
          }, P = (e2, t2) => {
            const r2 = n[l].contentElements[e2];
            if (r2 && "IMG" === r2.tagName) {
              const s2 = n[l].triggerElements[e2];
              if (t2) {
                const e3 = r2.getBoundingClientRect(), t3 = s2.getBoundingClientRect(), i2 = t3.width / e3.width, n2 = t3.height / e3.height, a2 = t3.left - e3.left, o2 = t3.top - e3.top;
                requestAnimationFrame(() => {
                  r2.style.transform = `translate(${a2}px, ${o2}px) scale(${i2}, ${n2})`, r2.style.transition = "transform 0s, opacity 0s", requestAnimationFrame(() => {
                    r2.style.transform = "", r2.style.opacity = 1, r2.style.transition = `transform ${T}ms ${u.transitionTimingFunction}, opacity ${T / 2}ms ${u.transitionTimingFunction}`;
                  });
                });
              } else
                r2.style.opacity = 1;
            } else
              r2.style.opacity = 1;
          }, R = (e2) => {
            const t2 = d;
            if (!be())
              throw new Error("Oops, I'm closed.");
            {
              if ("number" != typeof e2 || isNaN(e2))
                throw new Error("Oops, no slide specified.");
              const t3 = n[l].triggerElements;
              if (e2 === d)
                throw new Error(`Oops, slide ${e2} is already selected.`);
              if (e2 < -1 || e2 >= t3.length)
                throw new Error(`Oops, I can't find slide ${e2}.`);
            }
            void 0 !== n[l].sliderElements[e2] || (X(e2), O(n[l].triggerElements[e2], e2, () => {
              P(e2);
            })), D(e2), d = e2, G(), e2 < t2 ? (V(), H(e2 - 1)) : e2 > t2 && (V(), H(e2 + 1)), W(t2), K(), fe("select", { detail: { source: n[l].triggerElements[d] } });
          }, j = () => {
            if (d > 0)
              R(d - 1);
            else {
              const { slider: e2 } = n[l], t2 = k + u.threshold;
              requestAnimationFrame(() => {
                e2.style.transform = `translate3d(${t2}px, 0, 0)`, setTimeout(() => {
                  G();
                }, 150);
              });
            }
          }, U = () => {
            const { slider: e2, triggerElements: t2 } = n[l];
            if (d < t2.length - 1)
              R(d + 1);
            else {
              const t3 = k - u.threshold;
              requestAnimationFrame(() => {
                e2.style.transform = `translate3d(${t3}px, 0, 0)`, setTimeout(() => {
                  G();
                }, 150);
              });
            }
          }, W = (e2) => {
            void 0 !== n[l].sliderElements[e2] && n[l].sliderElements[e2].setAttribute("aria-hidden", "true");
          }, G = () => {
            l = null !== l ? l : o, $ = -d * c.offsetWidth, n[l].slider.style.transform = `translate3d(${$}px, 0, 0)`, k = $;
          }, V = () => {
            const { triggerElements: e2 } = n[l], t2 = e2.length, r2 = d === t2 - 1;
            t2 > 1 && (0 === d ? (f.setAttribute("aria-disabled", "true"), E.removeAttribute("aria-disabled")) : r2 ? (f.removeAttribute("aria-disabled"), E.setAttribute("aria-disabled", "true")) : (f.removeAttribute("aria-disabled"), E.removeAttribute("aria-disabled")));
          }, K = () => {
            y.textContent = `${d + 1}/${n[l].triggerElements.length}`;
          }, J = () => {
            w = { startX: 0, endX: 0, startY: 0, endY: 0 };
          }, Q = () => {
            const { startX: e2, startY: t2, endX: r2, endY: s2 } = w, i2 = r2 - e2, a2 = s2 - t2, o2 = Math.abs(i2), p2 = Math.abs(a2), { triggerElements: h2 } = n[l], g2 = h2.length;
            L ? i2 > 2 && o2 >= u.threshold && d > 0 ? j() : i2 < 2 && o2 >= u.threshold && d !== g2 - 1 ? U() : G() : _ ? (p2 > 2 && u.swipeClose && p2 >= u.threshold ? z() : (c.classList.remove("parvus--is-vertical-closing"), G()), m.style.opacity = "") : G();
          }, Z = () => {
            const e2 = n[l].triggerElements.length, t2 = n[l].slider, r2 = n[l].sliderElements, s2 = u.simulateTouch || ve(), i2 = t2.classList.contains("parvus__slider--is-draggable");
            s2 && u.swipeClose && !i2 || s2 && e2 > 1 && !i2 ? t2.classList.add("parvus__slider--is-draggable") : t2.classList.remove("parvus__slider--is-draggable"), e2 > 1 ? (t2.setAttribute("role", "region"), t2.setAttribute("aria-roledescription", "carousel"), t2.setAttribute("aria-label", u.l10n.sliderLabel), r2.forEach((t3, r3) => {
              t3.setAttribute("role", "group"), t3.setAttribute("aria-label", `${u.l10n.slideLabel} ${r3 + 1}/${e2}`);
            })) : (t2.removeAttribute("role"), t2.removeAttribute("aria-roledescription"), t2.removeAttribute("aria-label"), r2.forEach((e3) => {
              e3.removeAttribute("role"), e3.removeAttribute("aria-label");
            })), 1 === e2 ? (y.setAttribute("aria-hidden", "true"), f.setAttribute("aria-hidden", "true"), E.setAttribute("aria-hidden", "true")) : (y.removeAttribute("aria-hidden"), f.removeAttribute("aria-hidden"), E.removeAttribute("aria-hidden"));
          }, ee = () => {
            I || (I = true, r.requestAnimationFrame(() => {
              n[l].sliderElements.forEach((e2, t2) => {
                te(e2, n[l].contentElements[t2]);
              }), G(), I = false;
            }));
          }, te = (e2, t2) => {
            if ("IMG" !== t2.tagName)
              return;
            const r2 = getComputedStyle(e2), s2 = e2.querySelector(".parvus__caption"), i2 = s2 ? s2.getBoundingClientRect().height : 0, n2 = t2.getAttribute("height"), a2 = t2.getAttribute("width");
            let o2 = e2.offsetHeight, l2 = e2.offsetWidth;
            o2 -= parseFloat(r2.paddingTop) + parseFloat(r2.paddingBottom) + parseFloat(i2), l2 -= parseFloat(r2.paddingLeft) + parseFloat(r2.paddingRight);
            const d2 = Math.min(l2 / a2 || 0, o2 / n2), u2 = a2 * d2 || 0, c2 = n2 * d2 || 0;
            n2 > c2 && n2 < o2 && a2 > u2 && a2 < l2 || n2 < c2 && n2 < o2 && a2 < u2 && a2 < l2 ? (t2.style.width = "", t2.style.height = "") : (t2.style.width = `${u2}px`, t2.style.height = `${c2}px`);
          }, re = function(e2) {
            e2.preventDefault(), Y(this);
          }, se = (e2) => {
            const { target: t2 } = e2;
            t2 === f ? j() : t2 === E ? U() : (t2 === A || u.docClose && !_ && !L && t2.classList.contains("parvus__slide")) && z(), e2.stopPropagation();
          }, ie = () => Array.from(c.querySelectorAll(s.join(", "))).filter((e2) => null !== e2.offsetParent), ne = () => {
            ie()[0].focus();
          }, ae = (e2) => {
            const t2 = ie(), r2 = t2.indexOf(document.activeElement), s2 = t2.length - 1;
            switch (e2.code) {
              case "Tab":
                e2.shiftKey ? 0 === r2 && (t2[s2].focus(), e2.preventDefault()) : r2 === s2 && (t2[0].focus(), e2.preventDefault());
                break;
              case "Escape":
                z(), e2.preventDefault();
                break;
              case "ArrowLeft":
                j(), e2.preventDefault();
                break;
              case "ArrowRight":
                U(), e2.preventDefault();
            }
          }, oe = (e2) => {
            L = false, _ = false, x = true;
            const { pageX: t2, pageY: r2 } = e2;
            w.startX = t2, w.startY = r2;
            const { slider: s2 } = n[l];
            s2.classList.add("parvus__slider--is-dragging"), s2.style.willChange = "transform", e2.stopPropagation(), p = getComputedStyle(m).opacity;
          }, le = (e2) => {
            if (x) {
              const { pageX: t2, pageY: r2 } = e2;
              w.endX = t2, w.endY = r2, pe();
            }
            e2.preventDefault();
          }, de = () => {
            x = false;
            const { slider: e2 } = n[l];
            e2.classList.remove("parvus__slider--is-dragging"), e2.style.willChange = "", (w.endX || w.endY) && Q(), J();
          }, ue = (e2) => {
            L = false, _ = false;
            const { clientX: t2, clientY: r2 } = e2.changedTouches[0];
            w.startX = parseInt(t2), w.startY = parseInt(r2);
            const { slider: s2 } = n[l];
            s2.classList.add("parvus__slider--is-dragging"), s2.style.willChange = "transform", p = getComputedStyle(m).getPropertyValue("opacity"), e2.stopPropagation();
          }, ce = (e2) => {
            const { clientX: t2, clientY: r2 } = e2.changedTouches[0];
            w.endX = parseInt(t2), w.endY = parseInt(r2), pe(), e2.preventDefault();
          }, me = () => {
            const { slider: e2 } = n[l];
            e2.classList.remove("parvus__slider--is-dragging"), e2.style.willChange = "", (w.endX || w.endY) && Q(), J();
          }, pe = () => {
            const { startX: e2, endX: t2, startY: r2, endY: s2 } = w, i2 = e2 - t2, a2 = s2 - r2, o2 = Math.abs(a2);
            Math.abs(i2) > 2 && !_ && n[l].triggerElements.length > 1 ? (n[l].slider.style.transform = `translate3d(${k - Math.round(i2)}px, 0, 0)`, L = true, _ = false) : Math.abs(a2) > 2 && !L && u.swipeClose && (!S && o2 <= 100 && (m.style.opacity = p - o2 / 100), c.classList.add("parvus--is-vertical-closing"), n[l].slider.style.transform = `translate3d(${k}px, ${Math.round(a2)}px, 0)`, L = false, _ = true);
          }, he = () => {
            r.addEventListener("keydown", ae), r.addEventListener("resize", ee), r.addEventListener("popstate", z), c.addEventListener("click", se), ve() && (c.addEventListener("touchstart", ue), c.addEventListener("touchmove", ce), c.addEventListener("touchend", me)), u.simulateTouch && (c.addEventListener("mousedown", oe), c.addEventListener("mouseup", de), c.addEventListener("mousemove", le));
          }, ge = () => {
            r.removeEventListener("keydown", ae), r.removeEventListener("resize", ee), r.removeEventListener("popstate", z), c.removeEventListener("click", se), ve() && (c.removeEventListener("touchstart", ue), c.removeEventListener("touchmove", ce), c.removeEventListener("touchend", me)), u.simulateTouch && (c.removeEventListener("mousedown", oe), c.removeEventListener("mouseup", de), c.removeEventListener("mousemove", le));
          }, be = () => "false" === c.getAttribute("aria-hidden"), ve = () => "ontouchstart" in window, fe = function(e2) {
            const t2 = new CustomEvent(e2, { detail: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, cancelable: true });
            c.dispatchEvent(t2);
          }, Ee = () => {
            if (u = ((t2) => ({ selector: ".lightbox", gallerySelector: null, captions: true, captionsSelector: "self", captionsAttribute: "data-caption", docClose: true, swipeClose: true, simulateTouch: true, threshold: 50, backFocus: true, hideScrollbar: true, transitionDuration: 300, transitionTimingFunction: "cubic-bezier(0.62, 0.16, 0.13, 1.01)", lightboxIndicatorIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="currentColor"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>', previousButtonIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>', nextButtonIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>', closeButtonIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke="currentColor"><path d="M18 6L6 18M6 6l12 12"/></svg>', l10n: e, ...t2 }))(t), !document.querySelectorAll(u.selector).length)
              return;
            if (B(), c || (c = document.createElement("div"), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("tabindex", "-1"), c.setAttribute("aria-label", u.l10n.lightboxLabel), c.classList.add("parvus"), m = document.createElement("div"), m.classList.add("parvus__overlay"), c.appendChild(m), h = document.createElement("div"), h.className = "parvus__toolbar", g = document.createElement("div"), b = document.createElement("div"), v = document.createElement("div"), v.className = "parvus__controls", v.setAttribute("role", "group"), v.setAttribute("aria-label", u.l10n.controlsLabel), b.appendChild(v), A = document.createElement("button"), A.className = "parvus__btn parvus__btn--close", A.setAttribute("type", "button"), A.setAttribute("aria-label", u.l10n.closeButtonLabel), A.innerHTML = u.closeButtonIcon, v.appendChild(A), f = document.createElement("button"), f.className = "parvus__btn parvus__btn--previous", f.setAttribute("type", "button"), f.setAttribute("aria-label", u.l10n.previousButtonLabel), f.innerHTML = u.previousButtonIcon, v.appendChild(f), E = document.createElement("button"), E.className = "parvus__btn parvus__btn--next", E.setAttribute("type", "button"), E.setAttribute("aria-label", u.l10n.nextButtonLabel), E.innerHTML = u.nextButtonIcon, v.appendChild(E), y = document.createElement("div"), y.className = "parvus__counter", g.appendChild(y), h.appendChild(g), h.appendChild(b), c.appendChild(h), document.body.appendChild(c)), null !== u.gallerySelector) {
              document.querySelectorAll(u.gallerySelector).forEach((e2, t2) => {
                const r2 = t2;
                e2.querySelectorAll(u.selector).forEach((e3) => {
                  e3.setAttribute("data-group", `parvus-gallery-${r2}`), q(e3);
                });
              });
            }
            document.querySelectorAll(`${u.selector}:not(.parvus-trigger)`).forEach(q);
          };
          return Ee(), { init: Ee, open: Y, close: z, select: R, previous: j, next: U, currentIndex: () => d, add: q, remove: F, destroy: () => {
            if (!c)
              return;
            be() && z(), c.remove();
            document.querySelectorAll(".parvus-trigger").forEach(F), fe("destroy");
          }, isOpen: be, on: (e2, t2) => {
            c && c.addEventListener(e2, t2);
          }, off: (e2, t2) => {
            c && c.removeEventListener(e2, t2);
          } };
        };
      });
      var prvs = new Parvus({
        selector: ".js-parvus-lightbox"
      });
    }
  });
  require_stdin();
})();
