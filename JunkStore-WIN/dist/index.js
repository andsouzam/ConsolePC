(function (deckyFrontendLib, React) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
  };
  var IconContext = React__default["default"].createContext && /*#__PURE__*/React__default["default"].createContext(DefaultContext);

  var _excluded = ["attr", "size", "title"];
  function _objectWithoutProperties$2(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
  function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive$1(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function Tree2Element(tree) {
    return tree && tree.map((node, i) => /*#__PURE__*/React__default["default"].createElement(node.tag, _objectSpread({
      key: i
    }, node.attr), Tree2Element(node.child)));
  }
  function GenIcon(data) {
    return props => /*#__PURE__*/React__default["default"].createElement(IconBase, _extends$3({
      attr: _objectSpread({}, data.attr)
    }, props), Tree2Element(data.child));
  }
  function IconBase(props) {
    var elem = conf => {
      var {
          attr,
          size,
          title
        } = props,
        svgProps = _objectWithoutProperties$2(props, _excluded);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className) className = conf.className;
      if (props.className) className = (className ? className + " " : "") + props.className;
      return /*#__PURE__*/React__default["default"].createElement("svg", _extends$3({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className: className,
        style: _objectSpread(_objectSpread({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && /*#__PURE__*/React__default["default"].createElement("title", null, title), props.children);
    };
    return IconContext !== undefined ? /*#__PURE__*/React__default["default"].createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
  }

  // THIS FILE IS AUTO GENERATED
  function FaSlidersH (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"},"child":[]}]})(props);
  }function FaSkullCrossbones (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"},"child":[]}]})(props);
  }function FaCog (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},"child":[]}]})(props);
  }function FaBoxOpen (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"},"child":[]}]})(props);
  }function FaRegCheckCircle (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"},"child":[]}]})(props);
  }

  const isLoggerEnabled = () => { return localStorage.getItem('enableLogger') === 'true' || false; };
  const log = (name) => {
      if (isLoggerEnabled()) {
          return console.info.bind(window.console, `%c Junk Store %c ${name} %c`, 'background: #16a085; color: black;', 'background: #1abc9c; color: black;', 'background: transparent;');
      }
      else {
          return function (..._) { };
      }
  };
  const debug = (name) => {
      if (isLoggerEnabled()) {
          return console.debug.bind(window.console, `%c Junk Store %c ${name} %c`, 'background: #16a085; color: black;', 'background: #1abc9c; color: black;', 'color: blue;');
      }
      else {
          return function (..._) { };
      }
  };
  const error = (name) => {
      return console.error.bind(window.console, `%c Junk Store %c ${name} %c`, 'background: #16a085; color: black;', 'background: #FF0000;', 'background: transparent;');
  };
  const warn = (name) => {
      return console.warn.bind(window.console, `%c Junk Store %c ${name} %c`, 'background: #16a085; color: black;', 'background: #c4a000;', 'background: transparent;');
  };
  class Logger {
      get log() {
          return this._log;
      }
      get debug() {
          return this._debug;
      }
      get error() {
          return this._error;
      }
      get warn() {
          return this._warn;
      }
      constructor(name) {
          this.name = name;
          this._log = log.bind(this)(this.name).bind(this);
          this._debug = debug.bind(this)(this.name).bind(this);
          this._error = error.bind(this)(this.name).bind(this);
          this._warn = warn.bind(this)(this.name).bind(this);
          this.name = name;
      }
  }

  const ErrorDisplay = ({ error }) => {
      return (window.SP_REACT.createElement("div", null,
          window.SP_REACT.createElement("div", null,
              "ActionSet: ",
              error.ActionSet),
          window.SP_REACT.createElement("div", null,
              "ActionName:",
              error.ActionName),
          window.SP_REACT.createElement("div", null,
              "Message: ",
              error.Message),
          window.SP_REACT.createElement("div", { dangerouslySetInnerHTML: { __html: error.Data } })));
  };

  // THIS FILE IS AUTO GENERATED
  function MdSocialDistance (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"},"child":[]},{"tag":"path","attr":{"d":"M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM22 17l-4-4v3H6v-3l-4 4 4 4v-3h12v3l4-4z"},"child":[]}]})(props);
  }function MdNoFood (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"},"child":[]},{"tag":"path","attr":{"d":"M11.35 8.52 11 5h5V1h2v4h5l-1.38 13.79L11.35 8.52zM1 21v1c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1H1zm20.9.9L2.1 2.1.69 3.51l5.7 5.7C3.28 9.87 1 11.99 1 15h11.17l2 2H1v2h15v-.17l4.49 4.49 1.41-1.42z"},"child":[]}]})(props);
  }function MdErrorOutline (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"},"child":[]},{"tag":"path","attr":{"d":"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"child":[]}]})(props);
  }

  // THIS FILE IS AUTO GENERATED
  function SiX (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"},"child":[]}]})(props);
  }function SiReddit (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"},"child":[]}]})(props);
  }function SiPatreon (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"},"child":[]}]})(props);
  }function SiKofi (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493 1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182 2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195-1.09-2-1.298-4.155-1.298-7.506 0-2.181.857-3.402 3.012-3.714 1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545 1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142 0 1.533.858 2.857 1.949 3.897.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896 1.117-1.039 1.974-2.364 1.974-3.897 0-1.662-1.247-3.142-3.039-3.142-1.065 0-1.792.545-2.338 1.298-.493-.753-1.246-1.298-2.312-1.298"},"child":[]}]})(props);
  }function SiGithubsponsors (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.625 1.499c-2.32 0-4.354 1.203-5.625 3.03-1.271-1.827-3.305-3.03-5.625-3.03C3.129 1.499 0 4.253 0 8.249c0 4.275 3.068 7.847 5.828 10.227a33.14 33.14 0 0 0 5.616 3.876l.028.017.008.003-.001.003c.163.085.342.126.521.125.179.001.358-.041.521-.125l-.001-.003.008-.003.028-.017a33.14 33.14 0 0 0 5.616-3.876C20.932 16.096 24 12.524 24 8.249c0-3.996-3.129-6.75-6.375-6.75zm-.919 15.275a30.766 30.766 0 0 1-4.703 3.316l-.004-.002-.004.002a30.955 30.955 0 0 1-4.703-3.316c-2.677-2.307-5.047-5.298-5.047-8.523 0-2.754 2.121-4.5 4.125-4.5 2.06 0 3.914 1.479 4.544 3.684.143.495.596.797 1.086.796.49.001.943-.302 1.085-.796.63-2.205 2.484-3.684 4.544-3.684 2.004 0 4.125 1.746 4.125 4.5 0 3.225-2.37 6.216-5.048 8.523z"},"child":[]}]})(props);
  }function SiGithub (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},"child":[]}]})(props);
  }function SiDiscord (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"},"child":[]}]})(props);
  }function SiCodingninjas (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23.198 0c-.499.264-1.209.675-1.79.984a542.82 542.82 0 000 6.242c.995-.526 1.761-.834 1.79-2.066V0zM8.743.181C7.298.144 5.613.65 4.47 1.414c-1.17.8-1.987 1.869-2.572 3.179A16.787 16.787 0 00.9 8.87c-.15 1.483-.128 3.079.025 4.677.27 1.855.601 3.724 1.616 5.456 1.57 2.62 4.313 4.109 7.262 4.19 3.41.246 7.233.53 11.411.807.022-2.005.01-5.418 0-6.25-3.206-.21-7.398-.524-11.047-.782-.443-.043-.896-.056-1.324-.172-1.086-.295-1.806-.802-2.374-1.757-.643-1.107-.875-2.832-.797-4.294.11-1.27.287-2.41 1.244-3.44.669-.56 1.307-.758 2.161-.84 5.17.345 7.609.53 12.137.858.032-1.133.01-3.46 0-6.229C16.561.752 12.776.474 8.743.181zm-.281 9.7c.174.675.338 1.305.729 1.903.537.832 1.375 1.127 2.388.877.76-.196 1.581-.645 2.35-1.282zm12.974 1.04l-5.447.689c.799.739 1.552 1.368 2.548 1.703.988.319 1.78.01 2.308-.777.209-.329.56-1.148.591-1.614zm.842 6.461c-.388.01-.665.198-.87.355.002 1.798 0 4.127 0 6.223.586-.297 1.135-.644 1.793-.998-.005-1.454.002-3.137-.005-4.707a.904.904 0 00-.917-.873z"},"child":[]}]})(props);
  }function SiBrave (props) {
    return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.68 0l2.096 2.38s1.84-.512 2.709.358c.868.87 1.584 1.638 1.584 1.638l-.562 1.381.715 2.047s-2.104 7.98-2.35 8.955c-.486 1.919-.818 2.66-2.198 3.633-1.38.972-3.884 2.66-4.293 2.916-.409.256-.92.692-1.38.692-.46 0-.97-.436-1.38-.692a185.796 185.796 0 01-4.293-2.916c-1.38-.973-1.712-1.714-2.197-3.633-.247-.975-2.351-8.955-2.351-8.955l.715-2.047-.562-1.381s.716-.768 1.585-1.638c.868-.87 2.708-.358 2.708-.358L8.321 0h7.36zm-3.679 14.936c-.14 0-1.038.317-1.758.69-.72.373-1.242.637-1.409.742-.167.104-.065.301.087.409.152.107 2.194 1.69 2.393 1.866.198.175.489.464.687.464.198 0 .49-.29.688-.464.198-.175 2.24-1.759 2.392-1.866.152-.108.254-.305.087-.41-.167-.104-.689-.368-1.41-.741-.72-.373-1.617-.69-1.757-.69zm0-11.278s-.409.001-1.022.206-1.278.46-1.584.46c-.307 0-2.581-.434-2.581-.434S4.119 7.152 4.119 7.849c0 .697.339.881.68 1.243l2.02 2.149c.192.203.59.511.356 1.066-.235.555-.58 1.26-.196 1.977.384.716 1.042 1.194 1.464 1.115.421-.08 1.412-.598 1.776-.834.364-.237 1.518-1.19 1.518-1.554 0-.365-1.193-1.02-1.413-1.168-.22-.15-1.226-.725-1.247-.95-.02-.227-.012-.293.284-.851.297-.559.831-1.304.742-1.8-.089-.495-.95-.753-1.565-.986-.615-.232-1.799-.671-1.947-.74-.148-.068-.11-.133.339-.175.448-.043 1.719-.212 2.292-.052.573.16 1.552.403 1.632.532.079.13.149.134.067.579-.081.445-.5 2.581-.541 2.96-.04.38-.12.63.288.724.409.094 1.097.256 1.333.256s.924-.162 1.333-.256c.408-.093.329-.344.288-.723-.04-.38-.46-2.516-.541-2.961-.082-.445-.012-.45.067-.579.08-.129 1.059-.372 1.632-.532.573-.16 1.845.009 2.292.052.449.042.487.107.339.175-.148.069-1.332.508-1.947.74-.615.233-1.476.49-1.565.986-.09.496.445 1.241.742 1.8.297.558.304.624.284.85-.02.226-1.026.802-1.247.95-.22.15-1.413.804-1.413 1.169 0 .364 1.154 1.317 1.518 1.554.364.236 1.355.755 1.776.834.422.079 1.08-.4 1.464-1.115.384-.716.039-1.422-.195-1.977-.235-.555.163-.863.355-1.066l2.02-2.149c.341-.362.68-.546.68-1.243 0-.697-2.695-3.96-2.695-3.96s-2.274.436-2.58.436c-.307 0-.972-.256-1.585-.461-.613-.205-1.022-.206-1.022-.206z"},"child":[]}]})(props);
  }

  // THIS FILE IS AUTO GENERATED
  function FaRebel (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256.5 504C117.2 504 9 387.8 13.2 249.9 16 170.7 56.4 97.7 129.7 49.5c.3 0 1.9-.6 1.1.8-5.8 5.5-111.3 129.8-14.1 226.4 49.8 49.5 90 2.5 90 2.5 38.5-50.1-.6-125.9-.6-125.9-10-24.9-45.7-40.1-45.7-40.1l28.8-31.8c24.4 10.5 43.2 38.7 43.2 38.7.8-29.6-21.9-61.4-21.9-61.4L255.1 8l44.3 50.1c-20.5 28.8-21.9 62.6-21.9 62.6 13.8-23 43.5-39.3 43.5-39.3l28.5 31.8c-27.4 8.9-45.4 39.9-45.4 39.9-15.8 28.5-27.1 89.4.6 127.3 32.4 44.6 87.7-2.8 87.7-2.8 102.7-91.9-10.5-225-10.5-225-6.1-5.5.8-2.8.8-2.8 50.1 36.5 114.6 84.4 116.2 204.8C500.9 400.2 399 504 256.5 504z"},"child":[]}]})(props);
  }function FaUserSecret (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48l-59.9 0C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4l-59.9 0c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208l-12.4 0c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2L168 224c-22.1 0-40-17.9-40-40l0-14.4c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4l0 14.4c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"},"child":[]}]})(props);
  }function FaStore (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"},"child":[]}]})(props);
  }function FaStar (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"},"child":[]}]})(props);
  }function FaGears (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"},"child":[]}]})(props);
  }function FaEgg (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"},"child":[]}]})(props);
  }function FaCat (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M320 192l17.1 0c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4l0 4 0 32 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8L280 448l56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-223.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3l0 85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5s0 0 0 0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32c0 0 0 0 0 0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128c0 0 0 0 0 0l0-96 0-20 0-1.3C352 4.8 356.7 .1 362.6 0l.2 0c3.3 0 6.4 1.6 8.4 4.2c0 0 0 0 0 .1L384 21.3l27.2 36.3L416 64l64 0 4.8-6.4L512 21.3 524.8 4.3c0 0 0 0 0-.1c2-2.6 5.1-4.2 8.4-4.2l.2 0C539.3 .1 544 4.8 544 10.7l0 1.3 0 20 0 96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"},"child":[]}]})(props);
  }

  const achievements = [
      {
          name: 'Oops! My bad!',
          description: 'You just got your first error!',
          icon: window.SP_REACT.createElement(MdErrorOutline, null)
      },
      {
          name: 'Hack-mode Activate!',
          description: 'You enabled developer mode!',
          icon: window.SP_REACT.createElement(SiCodingninjas, null)
      },
      {
          name: 'Curiosity killed the cat',
          description: 'You inspected your first achievement!',
          icon: window.SP_REACT.createElement(FaCat, null)
      },
      {
          name: 'Hidden treasure',
          description: 'Installed a custom backend!',
          icon: window.SP_REACT.createElement(FaUserSecret, null)
      },
      {
          name: "Don't feed the gremlins!",
          description: "Started a new gaming session, just after midnight!",
          icon: window.SP_REACT.createElement(MdNoFood, null)
      },
      {
          name: 'Fearless Friday',
          description: 'You played on Friday the 13th!',
          icon: window.SP_REACT.createElement(FaSkullCrossbones, null)
      },
      {
          name: 'Rebel clicker',
          description: 'You clicked the button!',
          icon: window.SP_REACT.createElement(FaRebel, null)
      },
      {
          name: 'Chicken clicker',
          description: 'Not so brave now, are we?',
          icon: window.SP_REACT.createElement(FaEgg, null)
      },
      {
          name: 'Daredevil clicker',
          description: 'Consequenced be damned.',
          icon: window.SP_REACT.createElement(SiBrave, null)
      },
      {
          name: 'Social Butterfly',
          description: 'Clicked on a social link!',
          icon: window.SP_REACT.createElement(MdSocialDistance, null)
      },
      {
          name: 'Gold Star',
          description: 'Unlocked 10 achievements',
          icon: window.SP_REACT.createElement(FaStar, null)
      }
  ];
  const logger = new Logger("ahcivements");
  const getAchievementDetails = (achievementBase64) => {
      try {
          const achievement = parseInt(atob(achievementBase64), 2);
          return achievements[achievement - 1];
      }
      catch (e) {
          logger.error("Error getting achievement details: ", e);
          return {
              name: 'Unknown',
              description: 'Unknown',
              icon: window.SP_REACT.createElement(MdErrorOutline, null)
          };
      }
  };
  const resetAchievements = () => {
      try {
          localStorage.removeItem('achievements');
      }
      catch (e) {
          logger.error("Error resetting achievements: ", e);
      }
  };
  const checkAchievements = () => {
      try {
          const achievements = localStorage.getItem('achievements');
          return achievements ? parseInt(atob(achievements), 2) : 0;
      }
      catch (e) {
          logger.error("Error checking achievements: ", e);
          return 0;
      }
  };
  let toastAchievement;
  const toastFactory = (toaster) => {
      toastAchievement = (achievement) => {
          try {
              const temp = getAchievementDetails(achievement);
              if (temp) {
                  const toast = {
                      title: "Achievement unlocked: " + temp.name,
                      body: temp.description,
                      icon: temp.icon,
                  };
                  toaster.toast(toast);
              }
          }
          catch (e) {
          }
      };
  };
  const addAchievement = (achievementBase64) => {
      try {
          const achievement = parseInt(atob(achievementBase64), 2);
          if (!hasAchievement(achievementBase64)) {
              let achievements = checkAchievements();
              achievements |= 1 << achievement;
              localStorage.setItem('achievements', btoa(achievements.toString(2)));
              toastAchievement(achievementBase64);
              if (getAchievements().length == 10) {
                  addAchievement("MTAxMQ==");
              }
          }
      }
      catch (e) {
          logger.error("Error adding achievement: ", e);
      }
  };
  const hasAchievement = (achievementBase64) => {
      try {
          const achievement = parseInt(atob(achievementBase64), 2);
          const achievements = checkAchievements();
          return (achievements & (1 << achievement)) !== 0;
      }
      catch (e) {
          logger.error("Error checking achievement: ", e);
          return false;
      }
  };
  const getAchievements = () => {
      try {
          let achievementsBitField = checkAchievements();
          const achievements = [];
          let achievementNumber = 0;
          while (achievementsBitField > 0) {
              if ((achievementsBitField & 1) === 1) {
                  achievements.push(btoa(achievementNumber.toString(2)));
              }
              achievementsBitField >>= 1;
              achievementNumber++;
          }
          logger.log(`Achievements: ${achievements}`);
          return achievements;
      }
      catch (e) {
          logger.error("Error getting achievements: ", e);
          return [];
      }
  };
  const hasAchievements = () => {
      try {
          return getAchievements().length > 0;
      }
      catch (e) {
          logger.error("Error checking achievements: ", e);
          return false;
      }
  };

  const ErrorModal = ({ Error, onCancel, onOK, onEscKeypress, bAllowFullSize, bCancelDisabled, bOKDisabled, closeModal }) => {
      addAchievement("MQ==");
      return (window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, { onCancel: onCancel, onOK: onOK, onEscKeypress: onEscKeypress, bAllowFullSize: bAllowFullSize, bCancelDisabled: bCancelDisabled, bOKDisabled: bOKDisabled, closeModal: closeModal },
          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { focusable: true, noFocusRing: false },
              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, { title: "Junk-Store Error" },
                  window.SP_REACT.createElement(ErrorDisplay, { error: Error })))));
  };

  var AppRunStateChange;
  (function (AppRunStateChange) {
      AppRunStateChange[AppRunStateChange["START"] = 0] = "START";
      AppRunStateChange[AppRunStateChange["END"] = 1] = "END";
      AppRunStateChange[AppRunStateChange["BOTH"] = 2] = "BOTH";
  })(AppRunStateChange || (AppRunStateChange = {}));
  function gameIDFromAppID(appid) {
      let game = appStore.GetAppOverviewByAppID(appid);
      if (game) {
          return game.m_gameid;
      }
      else {
          return -1;
      }
  }
  async function getAppDetails(appId) {
      const id = typeof appId === 'string' ? parseInt(appId) : appId;
      await appDetailsStore.RequestAppDetails(id);
      return appDetailsStore.GetAppDetails(id);
  }
  function runApp(appId, onAppClose, onAppLaunch) {
      const logger = new Logger('runApp');
      logger.debug(`Running appId: ${appId}`);
      if (onAppLaunch) {
          const { unregister } = registerForAppRunStateChange(appId, () => {
              onAppLaunch();
              unregister();
          }, AppRunStateChange.START);
      }
      if (onAppClose) {
          const { unregister } = registerForAppRunStateChange(appId, () => {
              // Add a delay due to UI not updating in time - this is a workaround for now
              setTimeout(() => {
                  logger.debug(`App ${appId} closed running onAppClose callback`);
                  onAppClose();
              }, 1000);
              unregister();
          }, AppRunStateChange.END);
      }
      let gid = gameIDFromAppID(appId);
      if (gid && gid !== -1)
          SteamClient.Apps.RunGame(gid, "", -1, 100);
  }
  function registerForAppRunStateChange(appId, callback, stateChange) {
      return SteamClient.GameSessions.RegisterForAppLifetimeNotifications((data) => {
          if (data.unAppID !== appId)
              return;
          switch (stateChange) {
              case AppRunStateChange.START:
                  if (data.bRunning)
                      callback();
                  break;
              case AppRunStateChange.END:
                  if (!data.bRunning)
                      callback();
                  break;
              case AppRunStateChange.BOTH:
                  callback();
          }
      });
  }
  function configureShortcut(id, launchOptions) {
      const logger = new Logger("configureShortcut");
      if (launchOptions) {
          logger.debug("launchOptions: ", launchOptions);
          SteamClient.Apps.SetAppLaunchOptions(id, launchOptions.Options);
          SteamClient.Apps.SetShortcutExe(id, launchOptions.Exe);
          SteamClient.Apps.SetShortcutStartDir(id, launchOptions.WorkingDir);
          if (launchOptions.Compatibility) {
              SteamClient.Apps.SpecifyCompatTool(id, launchOptions.CompatToolName ?? '');
          }
      }
  }

  //* this is where you will be assuming the type of content and if the case is amibigous you can use type unions and deal with each possiblitiy outside the function
  async function executeAction$1(serverAPI, actionSet, actionName, args, onExeExit) {
      const logger = new Logger("executeAction");
      // logger.log(`actionSet: ${actionSet}, actionName: ${actionName}`);
      // logger.debug("Args: ", args);
      const res = await serverAPI.callPluginMethod("execute_action", {
          actionSet: actionSet,
          actionName: actionName,
          ...args
      });
      if (!res.success) { //TODO: need to handle server response errors as well, idk if you wanna make it show the modal too
          //const errorMsg = res.result;
          return null;
      }
      if (res.result.Type === 'RunExe') {
          const newLaunchOptions = res.result.Content;
          if (args.appId) {
              const id = parseInt(args.appId);
              //await appDetailsStore.RequestAppDetails(id);
              const details = await getAppDetails(id);
              logger.log("details: ", details);
              const oldLaunchOptions = {
                  Name: details?.strDisplayName || "",
                  Exe: details?.strShortcutExe || "",
                  WorkingDir: details?.strShortcutStartDir || "",
                  Options: details?.strShortcutLaunchOptions || "",
                  CompatToolName: details?.strCompatToolName,
                  Compatibility: !!details?.strCompatToolName
              };
              configureShortcut(id, newLaunchOptions);
              runApp(id, onExeExit, () => configureShortcut(id, oldLaunchOptions));
          }
          return null; //* does caller need to be able to distinguish this case or not
      }
      if (res.result.Type === 'Success') {
          const success = res.result.Content;
          logger.debug("result: ", res);
          const data = {
              title: "Junk-Store",
              body: success.Message,
          };
          if (success.Title) {
              data.title = success.Title;
          }
          if (success.Toast !== false) {
              logger.debug("toasting: ", data);
              serverAPI.toaster.toast(data);
          }
      }
      if (res.result.Type === 'Error') {
          const error = res.result.Content; //only acceptable if this is gauranteed that in this case (res.result.Type === 'Error') Content is indeed ContentError
          deckyFrontendLib.showModal(window.SP_REACT.createElement(ErrorModal, { Error: error }));
          logger.error("result: ", res);
          return null;
      }
      return res.result; //only acceptable because we've handle the other possibilities explicitly
  }

  const steamSpinnerClasses = deckyFrontendLib.findClassModule(m => !!m['SpinnerLoaderContainer']);
  const footerClasses = deckyFrontendLib.findClassModule(m => !!m['QuickAccessFooter']);
  const basicAppDetailsClasses = deckyFrontendLib.findClassModule(m => !!m['AppDetailSectionList']);
  const appActionButtonClasses = deckyFrontendLib.findClassModule(m => !!m['PlayButtonContainer']);
  const libraryAssetImageClasses = deckyFrontendLib.findClassModule(m => !!m['LongTitles'] && !!m['GreyBackground']);
  const gamepadLibraryClasses = deckyFrontendLib.findClassModule(m => !!m['GamepadLibrary']);
  const focusRingClasses = deckyFrontendLib.findClassModule(m => !!m['FocusRingRoot']);

  const spinnerContainer = 'spinner-container';
  const Loading = () => {
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement("style", null, `
                .${spinnerContainer} .${steamSpinnerClasses.ContainerBackground} {
                    background: unset;
                }
                .${deckyFrontendLib.quickAccessMenuClasses.TabGroupPanel} .spinner-container {
                    position: absolute;
                    width: -webkit-fill-available;
                    height: -webkit-fill-available;
                    padding-bottom: 16px;
                }
                .${deckyFrontendLib.quickAccessMenuClasses.TabGroupPanel} .spinner-container .${steamSpinnerClasses.Medium}{
                    width: 110px;
                    height: 110px;
                }
                .spinner-container {
                    width: 100%;
                    height: 100%;
                }
                .${spinnerContainer} .${steamSpinnerClasses.LoadingStatus} {
                    display: none;
                }
            `),
          window.SP_REACT.createElement("div", { className: spinnerContainer },
              window.SP_REACT.createElement(deckyFrontendLib.SteamSpinner, null))));
  };

  // Define the game image
  const GameGridItem = ({ gameData, imgAreaWidth, imgAreaHeight, onClick, noName }) => {
      const [isFocused, setIsFocused] = React.useState(false);
      const [isImgLoaded, setIsImgLoaded] = React.useState(false);
      const [imgError, setImgError] = React.useState(false);
      const [isInBounds, setIsInBounds] = React.useState(false);
      const hasImage = gameData.Images.length > 0;
      return (window.SP_REACT.createElement(deckyFrontendLib.Focusable, { key: `item-root-${gameData.ID}`, style: { width: imgAreaWidth, position: 'relative' }, onGamepadFocus: () => setIsFocused(true), onGamepadBlur: () => setIsFocused(false), noFocusRing: true, onActivate: onClick, onOKActionDescription: "Show details" }, !isInBounds ? window.SP_REACT.createElement(ScreenBoundChecker, { marginBottom: '1500px', onEnterBounds: () => setIsInBounds(true), imgAreaHeight: imgAreaHeight, imgAreaWidth: imgAreaWidth }) :
          window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
              window.SP_REACT.createElement("div", { style: { height: imgAreaHeight, display: 'flex', alignItems: 'center' } },
                  window.SP_REACT.createElement("div", { key: `container-${gameData.ID}`, style: {
                          position: 'relative',
                          margin: 'auto',
                          ...(!hasImage || !isImgLoaded ? { width: '100%', height: '100%', display: 'flex' } : {})
                      } },
                      !hasImage || imgError ? window.SP_REACT.createElement(FaGears, { style: { alignSelf: 'center', flex: 'auto', height: '30%', color: '#6767675e' } }) :
                          window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                              !isImgLoaded && window.SP_REACT.createElement(deckyFrontendLib.Spinner, { style: { alignSelf: 'center', flex: 'auto', height: '25%', color: '#7f7f7f4d' } }),
                              window.SP_REACT.createElement("img", { key: `img-${gameData.ID}`, className: libraryAssetImageClasses.Image, style: {
                                      width: 'auto',
                                      height: 'auto',
                                      maxWidth: imgAreaWidth,
                                      maxHeight: imgAreaHeight,
                                      opacity: isImgLoaded ? 1 : 0,
                                      transition: 'opacity 0.5s'
                                  }, src: hasImage ? gameData.Images[0] : "", onLoad: () => setIsImgLoaded(true), onError: () => setImgError(true) })),
                      isFocused && (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                          window.SP_REACT.createElement("img", { style: {
                                  filter: 'saturate(3) brightness(200%) blur(50px)',
                                  zIndex: '-99',
                                  position: 'absolute',
                                  width: '100%',
                                  height: '100%',
                                  top: '0',
                                  left: '0',
                                  visibility: isImgLoaded ? 'visible' : 'hidden'
                              }, src: hasImage ? gameData.Images[0] : "" }),
                          window.SP_REACT.createElement("div", { style: {
                                  position: 'absolute',
                                  width: '100%',
                                  height: '100%',
                                  top: '0px',
                                  left: '0px',
                              }, className: focusRingClasses.FocusRing }))))),
              !noName && (window.SP_REACT.createElement("div", { style: { padding: '6px 1px 0', fontSize: '13px', textAlign: 'center', color: '#c2c0c0' } }, gameData.Name)))));
  };
  const ScreenBoundChecker = ({ imgAreaWidth, imgAreaHeight, marginBottom, onEnterBounds }) => {
      const topRef = React.useRef(null);
      React.useEffect(() => {
          const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && onEnterBounds(), { root: null, threshold: 0 });
          if (topRef.current) {
              observer.observe(topRef.current);
          }
          return () => {
              if (topRef.current) {
                  observer.unobserve(topRef.current);
              }
          };
      }, []);
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement("div", { style: { height: imgAreaHeight } }),
          window.SP_REACT.createElement("div", { style: { width: imgAreaWidth, position: 'absolute', top: `calc(${marginBottom} * -1)`, bottom: '0' }, ref: topRef })));
  };

  var ValueType;
  (function (ValueType) {
      ValueType["Number"] = "Number";
      ValueType["Range"] = "Range";
      ValueType["String"] = "String";
      ValueType["Enum"] = "Enum";
      ValueType["Boolean"] = "Boolean";
  })(ValueType || (ValueType = {}));

  // THIS FILE IS AUTO GENERATED
  function RiArrowUpSFill (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M12 8L18 14H6L12 8Z"},"child":[]}]})(props);
  }function RiArrowDownSFill (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M12 16L6 10H18L12 16Z"},"child":[]}]})(props);
  }

  const sectionEditorFieldFlexShrink = 'editor-field-flex-shrink';
  const sectionEditorFieldContainerNumber = 'editor-field-number';
  const FieldItem = ({ field, value, onChange, fieldType }) => {
      const label = field.Label ?? formatLabel(field.Key);
      const [parentValue, setParentValue] = React.useState("");
      React.useEffect(() => {
          if (field.Parents && field.Parents.length > 0) {
              setParentValue("[Parent: " +
                  field.Parents[0].Parent +
                  ", Value: " +
                  field.Parents[0].Value +
                  "]");
          }
      }, [field.Parents]);
      switch (fieldType) {
          case ValueType.Boolean:
              return (window.SP_REACT.createElement(deckyFrontendLib.ToggleField, { label: label + " " + parentValue, checked: value === "true", onChange: (newValue) => onChange(newValue.toString()) }));
          case ValueType.Number:
              return (window.SP_REACT.createElement(deckyFrontendLib.Field, { label: label + " " + parentValue, className: sectionEditorFieldContainerNumber },
                  window.SP_REACT.createElement(deckyFrontendLib.TextField, { style: { overflow: 'hidden' }, value: value, onChange: (e) => onChange(e.target.value), 
                      //@ts-ignore
                      type: "number" })));
          case ValueType.Range:
              return (window.SP_REACT.createElement(deckyFrontendLib.SliderField, { label: label + " " + parentValue, value: Number(value), onChange: (newValue) => onChange(newValue.toString()), min: field.Min, max: field.Max, showValue: true, editableValue: true }));
          case ValueType.String:
              return (window.SP_REACT.createElement(deckyFrontendLib.Field, { label: label + " " + parentValue, className: sectionEditorFieldFlexShrink, inlineWrap: 'keep-inline' },
                  window.SP_REACT.createElement(deckyFrontendLib.TextField, { value: value, onChange: (e) => onChange(e.target.value) })));
          case ValueType.Enum:
              return (window.SP_REACT.createElement(deckyFrontendLib.Field, { label: label + " " + parentValue, className: sectionEditorFieldFlexShrink, inlineWrap: 'keep-inline' },
                  window.SP_REACT.createElement(deckyFrontendLib.Dropdown, { menuLabel: label, selectedOption: value, rgOptions: field.EnumValues.map((enumValue) => ({
                          data: enumValue.Key,
                          label: enumValue.Label || enumValue.Key,
                      })), onChange: (e) => onChange(e.data) })));
          default:
              return null;
      }
  };
  const FieldEditor = ({ field, onChange, updateHelpText }) => {
      const [value, setValue] = React.useState(field.Value);
      const [fieldType, setFieldType] = React.useState(field.Type);
      const handleValueChange = (newValue) => {
          setValue(newValue);
          onChange({ ...field, Value: newValue });
      };
      const handleFieldTypeChange = (newFieldType) => {
          setFieldType(newFieldType);
      };
      const changeType = (e) => {
          deckyFrontendLib.showContextMenu(window.SP_REACT.createElement(deckyFrontendLib.Menu, { label: "Menu", cancelText: "CANCEL", onCancel: () => { } },
              window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => handleFieldTypeChange(ValueType.Boolean) }, "Boolean"),
              window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => handleFieldTypeChange(ValueType.Number) }, "Number"),
              field.Min !== 0 && field.Max !== 0 && field.Min < field.Max && (window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => handleFieldTypeChange(ValueType.Range) }, "Range")),
              window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => handleFieldTypeChange(ValueType.String) }, "String"),
              field.EnumValues && field.EnumValues.length > 0 && (window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => handleFieldTypeChange(ValueType.Enum) }, "List"))), e.currentTarget ?? window);
      };
      return (window.SP_REACT.createElement(deckyFrontendLib.PanelSectionRow, null,
          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: {
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  padding: '0'
              }, 
              //@ts-ignore
              resetNavOnEntry: true },
              window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { flex: 'auto' }, onFocus: () => updateHelpText(field) },
                  window.SP_REACT.createElement(FieldItem, { field: field, value: value, onChange: handleValueChange, fieldType: fieldType })),
              window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { style: {
                      width: '48px',
                      minWidth: '48px',
                      padding: 'initial',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '36px'
                  }, onClick: changeType },
                  window.SP_REACT.createElement(FaCog, null)))));
  };
  function formatLabel(key) {
      return key.split(/[_ ]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  const sectionEditorFieldRoot = 'section-editor-field-editors';
  const SectionEditor = ({ section, updateHelpText, modeLevel, onChange }) => {
      // const [name, setName] = useState(section.Name);
      // const [description, setDescription] = useState(section.Description);
      const [options, setOptions] = React.useState(section.Options);
      const [collapsed, setCollapsed] = React.useState(true);
      const handleOptionChange = (index, option) => {
          const newOptions = [...options];
          newOptions[index] = option;
          setOptions(newOptions);
          onChange({ ...section, Options: newOptions });
      };
      const OnInit = () => {
          if (section.Visible) {
              setCollapsed(!section.Visible);
          }
      };
      React.useEffect(() => {
          OnInit();
      }, []);
      return (window.SP_REACT.createElement(deckyFrontendLib.PanelSectionRow
      //@ts-ignore
      , { 
          //@ts-ignore
          style: { display: "flex", flexDirection: "column", gap: "1em" } },
          window.SP_REACT.createElement("div", { style: { display: 'contents' } },
              window.SP_REACT.createElement(deckyFrontendLib.ButtonItem, { label: window.SP_REACT.createElement("div", { className: deckyFrontendLib.quickAccessMenuClasses.PanelSectionTitle, style: { padding: 0 } }, `[${section.Name}]`), onClick: () => setCollapsed(!collapsed) }, collapsed ? window.SP_REACT.createElement(RiArrowDownSFill, null) : window.SP_REACT.createElement(RiArrowUpSFill, null))),
          !collapsed && (window.SP_REACT.createElement("div", { className: sectionEditorFieldRoot, style: { display: "flex", flexDirection: "column" } }, options.map((option, index) => {
              if (modeLevel >= option.ModeLevel)
                  return (window.SP_REACT.createElement(FieldEditor, { field: option, onChange: updatedOption => handleOptionChange(index, updatedOption), updateHelpText: field => updateHelpText(field) }));
              else
                  return null;
          })))));
  };

  const confEditorRootClass = 'conf-editor-modal-root';
  const ConfEditor = ({ serverAPI, initActionSet, initAction, contentId, closeModal, refreshParent }) => {
      const logger = new Logger("ConfEditor");
      logger.log(`initActionSet: ${initActionSet}, initAction: ${initAction}, contentId: ${contentId}`);
      const [confData, setConfData] = React.useState();
      const focusRef = React.useRef(null);
      const [modeLevel, setModeLevel] = React.useState(0);
      const [actionSetName, setActionSetName] = React.useState("");
      const [helpText, setHelpText] = React.useState({
          Key: "",
          Description: "",
          DefaultValue: "",
          Value: "",
          Type: ValueType.String,
          Min: 0,
          ModeLevel: 0,
          Max: 100,
          Parents: [],
          EnumValues: [],
      });
      const [sectionHelpText, setSectionHelpText] = React.useState();
      React.useEffect(() => {
          OnInit();
      }, []);
      const OnInit = async () => {
          const actionSetResult = await executeAction$1(serverAPI, initActionSet, initAction, {
              content_id: contentId
          });
          logger.log("OnInit result: ", actionSetResult);
          if (!actionSetResult) {
              closeModal();
              return;
          }
          const setName = actionSetResult.Content.SetName;
          logger.log("SetName: ", setName);
          const configDataResult = await executeAction$1(//supposedly here we know that this action will return this type of Content
          serverAPI, setName, "GetContent", {
              content_id: contentId
          });
          if (!configDataResult) {
              closeModal();
              return;
          }
          setActionSetName(setName);
          setConfData(configDataResult.Content);
      };
      const handleSectionChange = (section) => {
          if (!confData) {
              return;
          }
          const updatedSections = confData.Sections.map((s) => s.Name === section.Name ? section : s); //as per type def Sections should always be defined
          setConfData({ ...confData, Sections: updatedSections });
      };
      const updateHelpText = (field) => {
          setHelpText(field);
      };
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          confEditorStyle,
          window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, { className: confEditorRootClass, closeModal: closeModal },
              window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { display: "flex", minHeight: '400px' }, onCancel: () => closeModal(), onCancelActionDescription: "Go back to Game Details" },
                  window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: {
                          flex: "5",
                          paddingTop: '20px'
                      }, onSecondaryActionDescription: "Save config", onSecondaryButton: async () => {
                          logger.log("Saving config: ", confData);
                          const result = await executeAction$1(serverAPI, actionSetName, "SaveContent", {
                              content_id: contentId,
                              inputData: confData
                          });
                          logger.log("Save result: ", result);
                          // if (!result) {
                          //     closeModal();
                          //     return;
                          // }
                          //Router.Navigate("/game/" + tabindex + "/" + shortname)
                          closeModal();
                      } },
                      window.SP_REACT.createElement(deckyFrontendLib.PanelSection, { title: "Configuration: " },
                          window.SP_REACT.createElement("div", { style: { marginBottom: '10px' } },
                              window.SP_REACT.createElement(deckyFrontendLib.Dropdown, { rgOptions: [
                                      { data: 0, label: "Basic" },
                                      { data: 1, label: "Advanced" },
                                      { data: 2, label: "Expert" },
                                      { data: 3, label: "All" },
                                  ], onChange: (e) => setModeLevel(e.data), selectedOption: modeLevel })),
                          confData?.Sections?.map((section) => {
                              if (section && modeLevel >= section.ModeLevel)
                                  return (window.SP_REACT.createElement(SectionEditor, { key: section.Name, section: section, modeLevel: modeLevel, onChange: (updatedSection) => handleSectionChange(updatedSection), updateHelpText: (field) => {
                                          updateHelpText(field);
                                          setSectionHelpText(section.Description);
                                      } }));
                              else
                                  return null;
                          })),
                      confData?.AutoexecEnabled && confData?.Autoexec && (window.SP_REACT.createElement(deckyFrontendLib.PanelSection, { title: "[Autoexec]" },
                          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { noFocusRing: true, onFocusCapture: () => (focusRef && focusRef.current != null) && focusRef.current.focus(), onActivate: () => { }, onSecondaryActionDescription: "Save config", onSecondaryButton: async () => {
                                  logger.log("Saving config: ", confData);
                                  const result = await executeAction$1(//pass multiple possible Content types with a union
                                  serverAPI, actionSetName, "SaveContent", {
                                      content_id: contentId,
                                      inputData: confData
                                  });
                                  logger.log("Save result: ", result);
                                  if (!result) {
                                      closeModal();
                                      return;
                                  }
                                  if (result.Type === "Refresh") {
                                      const tmp = result.Content; //if some other possibilties then you can cast here
                                      if (tmp.Refresh) {
                                          refreshParent();
                                      }
                                  }
                                  //Router.Navigate("/game/" + tabindex + "/" + shortname)
                                  closeModal();
                              }, onCancel: () => closeModal(), onCancelActionDescription: "Go back to Game Details" },
                              window.SP_REACT.createElement("textarea", { className: "", ref: focusRef, style: { width: "100%", height: "200px" }, value: confData.Autoexec, onChange: (e) => setConfData({ ...confData, Autoexec: e.target.value }) }))))),
                  window.SP_REACT.createElement("div", { style: {
                          flex: '4',
                          background: '#02000b8a',
                          borderRadius: 'var(--round-radius-size)'
                      } },
                      window.SP_REACT.createElement(deckyFrontendLib.Focusable, { onActivate: () => { }, style: {
                              minHeight: 0,
                              position: "sticky",
                              height: "fit-content",
                              top: "40px",
                              margin: '0 20px'
                          }, noFocusRing: false },
                          window.SP_REACT.createElement("h4", { style: { margin: 0, marginBottom: '5px', textTransform: 'uppercase' } }, sectionHelpText),
                          window.SP_REACT.createElement("div", null, helpText.Description),
                          helpText.EnumValues &&
                              helpText.EnumValues.map((enumValue) => (window.SP_REACT.createElement("div", null,
                                  enumValue.Key,
                                  " ",
                                  enumValue.Description)))))))));
  };
  const confEditorStyle = window.SP_REACT.createElement("style", null, `
    .${confEditorRootClass} {
        padding: 0 !important;
        width: 100% !important;
    }
    .${confEditorRootClass} .${deckyFrontendLib.quickAccessControlsClasses.PanelSection} {
        padding: 0 2.8vw;
    }
    .${confEditorRootClass} .${sectionEditorFieldRoot} .${deckyFrontendLib.gamepadDialogClasses.Field} {
        margin: 0;
    }
    .${confEditorRootClass} .${sectionEditorFieldRoot} .${deckyFrontendLib.gamepadDialogClasses.FieldLabelRow} {
        height: 40px;
    }
    .${confEditorRootClass} .${sectionEditorFieldFlexShrink} .${deckyFrontendLib.gamepadDialogClasses.FieldLabel} {
        flex: 0 1 auto;
    }
    .${confEditorRootClass} .${sectionEditorFieldFlexShrink} .${deckyFrontendLib.gamepadDialogClasses.FieldChildrenWithIcon} {
        flex: auto;
    }
    .${confEditorRootClass} .${sectionEditorFieldFlexShrink} .${deckyFrontendLib.gamepadDialogClasses.DropDownControlButtonContents}>:first-child {
        overflow: hidden;
    }
    .${confEditorRootClass} .${sectionEditorFieldFlexShrink} .${deckyFrontendLib.gamepadDialogClasses.FieldChildrenInner}>:first-child {
        max-width: 140px;
        min-width: 80px;
        margin-left: auto;
    }
    .${confEditorRootClass} .${deckyFrontendLib.gamepadDialogClasses.DropDownControlButtonContents}>svg {
        min-width: 1em;
    }
    .${confEditorRootClass} .${sectionEditorFieldContainerNumber} .${deckyFrontendLib.gamepadDialogClasses.FieldChildrenInner} {
        width: 80px;
    }
    `);

  const batEditorRootClass = 'bat-editor-modal-root';
  const BatEditor = ({ serverAPI, initActionSet, initAction, contentId, closeModal, refreshParent }) => {
      const [batData, setBatData] = React.useState([{ Id: 0, GameId: 0, Path: '', Content: '' }]);
      //const [editorText, setEditorText] = useState("test" as string);
      const [selectedBat, setSelectedBat] = React.useState({ Id: 0, GameId: 0, Content: "", Path: "" });
      const focusRef = React.useRef(null);
      const [actionSetName, setActionSetName] = React.useState("");
      const OnInit = async () => {
          const actionSetResult = await executeAction$1(serverAPI, initActionSet, initAction, { content_id: contentId });
          if (actionSetResult === null) {
              return;
          }
          const setName = actionSetResult.Content.SetName;
          const fileDataResult = await executeAction$1(serverAPI, setName, "GetContent", { content_id: contentId });
          if (fileDataResult === null) {
              return;
          }
          const res = fileDataResult.Content.Files;
          if (res.length > 0) {
              setSelectedBat(res[0]);
          }
          setBatData(res);
          setActionSetName(setName);
      };
      React.useEffect(() => {
          OnInit();
      }, []);
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement("style", null,
              `
        .${batEditorRootClass}.GenericConfirmDialog {
            width: 100% !important,
            height: 100% !important,
        }
    `,
              " "),
          window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, { className: batEditorRootClass, bAllowFullSize: true, bAllowFullSizeMobile: true, closeModal: closeModal },
              window.SP_REACT.createElement(deckyFrontendLib.ScrollPanelGroup, { focusable: false, style: { margin: "0px" } },
                  window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { background: "inherit" } },
                      window.SP_REACT.createElement(deckyFrontendLib.Focusable, { onSecondaryActionDescription: "Save bat files", onSecondaryButton: async () => {
                              const result = await executeAction$1(//* will SaveContent always return this type? if so remove the check below, if not put all the possibities here
                              serverAPI, actionSetName, "SaveContent", {
                                  content_id: contentId,
                                  inputData: batData
                              });
                              if (result === null) {
                                  return;
                              }
                              if (result.Type === "Refresh") { //remove check if this is the only type
                                  const tmp = result.Content;
                                  if (tmp.Refresh) {
                                      refreshParent();
                                  }
                              }
                              //Router.Navigate("/game/" + tabindex + "/" + shortname)
                              closeModal();
                          }, onCancel: () => closeModal(), onCancelActionDescription: "Go back to Game Details" },
                          window.SP_REACT.createElement(deckyFrontendLib.PanelSection, { title: "Configuration: " + contentId }, batData.length > 0 && (window.SP_REACT.createElement(deckyFrontendLib.Focusable, { noFocusRing: false, style: {
                                  marginTop: "40px",
                                  height: "calc( 100% - 40px )",
                                  justifyContent: "center",
                                  margin: "40px",
                              } },
                              window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { marginBottom: "1em" } },
                                  window.SP_REACT.createElement(deckyFrontendLib.Dropdown, { rgOptions: batData.map((bat) => {
                                          return { data: bat.Id, label: bat.Path };
                                      }), selectedOption: batData[0].Id, onChange: (e) => {
                                          const temp = batData.find((bat) => bat.Id == e.data);
                                          setSelectedBat(temp);
                                      } })),
                              window.SP_REACT.createElement(deckyFrontendLib.Focusable, { focusableIfNoChildren: true, noFocusRing: true, onFocusCapture: () => (focusRef && focusRef.current != null) && focusRef.current.focus() },
                                  window.SP_REACT.createElement("textarea", { ref: focusRef, style: { width: "calc( 100% - 10px )", height: "200px " }, value: selectedBat.Content, onChange: (e) => {
                                          const newContent = e.target.value;
                                          setSelectedBat(prevSelectedBat => ({ ...prevSelectedBat, Content: newContent }));
                                          setBatData(prevBatData => {
                                              const newData = [...prevBatData];
                                              const batIndex = newData.findIndex(bat => bat.Id === selectedBat.Id);
                                              if (batIndex !== -1) {
                                                  newData[batIndex] = { ...newData[batIndex], Content: newContent };
                                              }
                                              return newData;
                                          });
                                      } })))))))))));
  };

  const exeRunnerRootClass = 'exe-runner-modal-root';
  const ExeRunner = ({ serverAPI, initActionSet, initAction, contentId, closeModal, shortName, refreshParent, onExeExit, closeParent }) => {
      const logger = new Logger("ExeRunner");
      const [actionSetName, setActionSetName] = React.useState("");
      const [filesData, setFilesData] = React.useState({ Files: [] });
      const [busy, setBusy] = React.useState(false);
      const getFilePath = (path, pathRoot) => {
          logger.debug("getFilePath: " + path + " " + pathRoot);
          let unquotedPath = path;
          if (path.startsWith("\"") && path.endsWith("\"")) {
              unquotedPath = path.substring(1, path.length - 1);
          }
          return pathRoot + unquotedPath.substring(1);
      };
      const OnInit = async () => {
          logger.debug("OnInit");
          logger.debug("initActionSet: ", initActionSet);
          logger.debug("initAction: ", initAction);
          logger.debug("contentId: ", contentId);
          const gameId = gameIDFromAppID(parseInt(contentId));
          const actionSetResult = await executeAction$1(serverAPI, initActionSet, initAction, {
              gameId: String(gameId),
              appId: String(contentId),
              content_id: contentId,
          });
          const setName = actionSetResult?.Content.SetName;
          if (setName == null) {
              logger.error("setName is null");
              return;
          }
          logger.debug("setName: ", setName);
          logger.debug("result: ", actionSetResult);
          const details = await getAppDetails(contentId);
          if (details == null) {
              logger.error("details is null");
              return;
          }
          else {
              const filesDataResult = await executeAction$1(serverAPI, setName, "GetContent", {
                  gameId: String(gameId),
                  appId: String(contentId),
                  SteamClientId: contentId,
                  shortName: shortName
              });
              if (filesDataResult?.Content == null) {
                  logger.error("res is null");
                  return;
              }
              logger.debug("FilesData: ", filesDataResult?.Content);
              setActionSetName(setName);
              setFilesData(filesDataResult?.Content);
          }
      };
      React.useEffect(() => {
          OnInit();
      }, []);
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement("style", null,
              `
    .${exeRunnerRootClass}.GenericConfirmDialog {
        width: 100% !important,
        height: 100% !important,
    }
`,
              " "),
          window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, { className: exeRunnerRootClass, bAllowFullSize: true, closeModal: closeModal },
              window.SP_REACT.createElement("div", null, "Select executable to run"),
              busy && window.SP_REACT.createElement(deckyFrontendLib.SteamSpinner, null),
              !busy && filesData.Files && filesData.Files.map((file) => {
                  const runExe = async () => {
                      setBusy(true);
                      logger.debug(`steamclientid ${contentId}`);
                      const appDetails = await getAppDetails(contentId);
                      logger.debug("app details: ", appDetails);
                      if (appDetails == null) {
                          logger.error("app details is null");
                          return;
                      }
                      const compatToolName = appDetails.strCompatToolName;
                      const startDir = appDetails.strShortcutStartDir;
                      const gameExe = file.Path.startsWith(startDir) ? file.Path.substring(startDir.length + 1) : file.Path;
                      const gameId = gameIDFromAppID(parseInt(contentId));
                      closeParent && closeParent();
                      const result = await executeAction$1(serverAPI, actionSetName, "RunBinary", {
                          gameId: String(gameId),
                          appId: String(contentId),
                          SteamClientId: contentId,
                          shortName: shortName,
                          GameExe: gameExe.replace("\\", "\\\\"),
                          AdditionalArguments: false,
                          CompatToolName: compatToolName
                      }, onExeExit);
                      if (result?.Type === "Refresh") {
                          const tmp = result.Content;
                          if (tmp.Refresh) {
                              refreshParent();
                          }
                      }
                      closeModal();
                      setBusy(false);
                  };
                  const setExecutable = async () => {
                      logger.debug(`steamclientid ${parseInt(contentId)}`);
                      const appDetails = await getAppDetails(contentId);
                      logger.debug("app details: ", appDetails);
                      if (appDetails == null) {
                          logger.error("app details is null");
                          return;
                      }
                      //const startDir = appDetails.strShortcutStartDir;
                      const gameExe = getFilePath(file.Path, filesData.PathRoot || "");
                      logger.debug("gameExe: ", gameExe);
                      SteamClient.Apps.SetShortcutExe(parseInt(contentId), "\"" + gameExe + "\"");
                      closeModal();
                  };
                  return (window.SP_REACT.createElement(deckyFrontendLib.ScrollPanelGroup, { focusable: false, style: { margin: "0px" } },
                      window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                          window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onOKButton: runExe, onClick: runExe, onSecondaryButton: setExecutable, onSecondaryActionDescription: "Set game executable" }, file.Path))));
              }))));
  };

  const ScrollableWindow = ({ height, fadeAmount, scrollBarWidth, alwaysFocus, noScrollDescription, children, actionDescriptionMap, ...focusableProps }) => {
      const fade = fadeAmount === undefined || fadeAmount === '' ? '10px' : fadeAmount;
      const barWidth = scrollBarWidth === undefined || scrollBarWidth === '' ? '4px' : scrollBarWidth;
      const [isOverflowing, setIsOverflowing] = React.useState(false);
      const scrollPanelRef = React.useRef();
      React.useLayoutEffect(() => {
          const { current } = scrollPanelRef;
          const trigger = () => {
              if (current) {
                  const hasOverflow = current.scrollHeight > current.clientHeight;
                  setIsOverflowing(hasOverflow);
              }
          };
          if (current) {
              trigger();
          }
      }, [children, height]);
      const panel = (
      //@ts-ignore
      window.SP_REACT.createElement(deckyFrontendLib.ScrollPanelGroup, { ref: scrollPanelRef, focusable: false, style: { flex: 1, minHeight: 0 } },
          window.SP_REACT.createElement(deckyFrontendLib.Focusable
          //@ts-ignore
          , { 
              //@ts-ignore
              focusable: alwaysFocus || isOverflowing, key: 'scrollable-window-focusable-element', noFocusRing: true, actionDescriptionMap: Object.assign(noScrollDescription ? {} :
                  {
                      [deckyFrontendLib.GamepadButton.DIR_UP]: 'Scroll Up',
                      [deckyFrontendLib.GamepadButton.DIR_DOWN]: 'Scroll Down'
                  }, actionDescriptionMap ?? {}), ...focusableProps }, children)));
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement("style", null, `.modal-position-container .${deckyFrontendLib.gamepadDialogClasses.ModalPosition} {
			top: 0;
			bottom: 0;
			padding: 0;
		  }
		  .modal-position-container .${deckyFrontendLib.scrollPanelClasses.ScrollPanel}::-webkit-scrollbar {
			display: initial !important;
			width: ${barWidth};
		  }
		  .modal-position-container .${deckyFrontendLib.scrollPanelClasses.ScrollPanel}::-webkit-scrollbar-thumb {
			border: 0;
		  }
		  .modal-position-container .${deckyFrontendLib.scrollPanelClasses.ScrollPanel}.gpfocuswithin::-webkit-scrollbar-thumb {
			background-color: currentColor;
		  }
          `),
          window.SP_REACT.createElement("div", { className: 'modal-position-container', style: {
                  position: 'relative',
                  height: height,
                  WebkitMask: `linear-gradient(to right , transparent, transparent calc(100% - ${barWidth}), white calc(100% - ${barWidth})), linear-gradient(to bottom, transparent, black ${fade}, black calc(100% - ${fade}), transparent 100%)`
              } }, isOverflowing ? (window.SP_REACT.createElement(deckyFrontendLib.ModalPosition, { key: 'scrollable-window-modal-position' }, panel)) : (window.SP_REACT.createElement("div", { className: `${deckyFrontendLib.gamepadDialogClasses.ModalPosition} ${deckyFrontendLib.gamepadDialogClasses.WithStandardPadding} Panel`, key: 'modal-position' }, panel)))));
  };
  const ScrollableWindowRelative = ({ heightPercent, ...props }) => {
      return (window.SP_REACT.createElement("div", { style: { flex: 'auto' } },
          window.SP_REACT.createElement(ScrollableWindow, { height: `${heightPercent ?? 100}%`, ...props })));
  };

  const GameDisplay = ({ serverApi, closeModal, name, shortName, images, steamClientID, installer, uninstaller, cancelInstall, runner, description, installing, progress, editors, initActionSet, actions, resetLaunchOptions, scriptRunner, reloadData, onExeExit }) => {
      const logger = new Logger("GameDisplay");
      const isInstalled = !!steamClientID;
      const [gameSize, setGameSize] = React.useState('');
      logger.log(`initActionSet: ${initActionSet}`);
      const contextMenu = (e) => {
          deckyFrontendLib.showContextMenu(window.SP_REACT.createElement(deckyFrontendLib.Menu, { label: "Configuration", cancelText: "Cancel", onCancel: () => { } }, editors.map((editor) => {
              return window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => {
                      if (editor.Type == "IniEditor")
                          deckyFrontendLib.showModal(window.SP_REACT.createElement(ConfEditor, { serverAPI: serverApi, initActionSet: initActionSet, initAction: editor.InitActionId, contentId: editor.ContentId, refreshParent: reloadData }));
                      if (editor.Type == "FileEditor")
                          deckyFrontendLib.showModal(window.SP_REACT.createElement(BatEditor, { serverAPI: serverApi, initActionSet: initActionSet, initAction: editor.InitActionId, contentId: editor.ContentId, refreshParent: reloadData }));
                  } }, editor.Title);
          })), e.currentTarget ?? window);
      };
      const actionsMenu = (e) => {
          deckyFrontendLib.showContextMenu(window.SP_REACT.createElement(deckyFrontendLib.Menu, { label: "Actions", cancelText: "Cancel", onCancel: () => { } },
              isInstalled &&
                  window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => deckyFrontendLib.showModal(window.SP_REACT.createElement(ExeRunner, { serverAPI: serverApi, initActionSet: initActionSet, initAction: "GetExeActions", contentId: steamClientID, shortName: shortName, refreshParent: reloadData, onExeExit: onExeExit, closeParent: closeModal })) }, "Run exe in Game folder"),
              isInstalled &&
                  window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                      window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: resetLaunchOptions }, "Reset Launch Options")),
              window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => deckyFrontendLib.showModal(window.SP_REACT.createElement(deckyFrontendLib.ConfirmModal, { strTitle: "Confirm", strDescription: "Uninstall " + name + "?", onOK: () => { uninstaller(); } })) },
                  " ",
                  "Uninstall Game"),
              actions && actions.length > 0 && actions.map((action) => {
                  const mustBeInstalled = action.InstalledOnly != undefined && action.InstalledOnly == true;
                  const show = isInstalled || !mustBeInstalled;
                  if (show)
                      return window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: () => {
                              const args = {
                                  shortname: shortName,
                                  steamClientID: "",
                                  startDir: "",
                                  compatToolName: "",
                                  inputData: "",
                                  gameId: "",
                                  appId: ""
                              };
                              if (isInstalled) {
                                  logger.debug("steamClientID: ", steamClientID, action);
                                  const details = getAppDetails(steamClientID);
                                  if (details == null) {
                                      logger.error("details is null");
                                      return;
                                  }
                                  else {
                                      logger.debug("details: ", details);
                                      const compatToolName = details.strCompatToolName;
                                      const startDir = details.strShortcutStartDir;
                                      args.startDir = startDir;
                                      args.compatToolName = compatToolName;
                                      args.steamClientID = steamClientID;
                                      args.gameId = steamClientID;
                                      args.appId = steamClientID;
                                  }
                              }
                              if (action.Type == "ScriptActionConfirm") {
                                  deckyFrontendLib.showModal(window.SP_REACT.createElement(deckyFrontendLib.ConfirmModal, { strTitle: "Confirm", strDescription: action.Title + '?', onOK: () => { scriptRunner(initActionSet, action.ActionId, args); } }));
                              }
                              else {
                                  scriptRunner(initActionSet, action.ActionId, args);
                              }
                          } }, action.Title);
                  else
                      return null;
              })), e.currentTarget ?? window);
      };
      React.useEffect(() => {
          setGameSize('');
          (async () => {
              const gameSizeResult = await executeAction$1(serverApi, initActionSet, 'GetGameSize', { shortname: shortName, installed: String(isInstalled) });
              if (!gameSizeResult)
                  return;
              setGameSize(gameSizeResult.Content.Size);
          })();
      }, [isInstalled]);
      const focusableProps = !isInstalled ? {} :
          {
              onOptionsButton: () => {
                  closeModal && closeModal();
                  deckyFrontendLib.Navigation.Navigate(`/library/app/${steamClientID}`);
              },
              onOptionsActionDescription: 'Go to Steam App Page'
          };
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement("div", { style: {
                  padding: '20px 24px',
                  background: 'linear-gradient(0deg, #77777712, transparent)'
                  // background: 'linear-gradient(0deg, #0000007d, transparent)'
              } },
              window.SP_REACT.createElement(ImageMarquee, { sources: images, height: '165px' })),
          window.SP_REACT.createElement(FocusOnMount, { style: {
                  display: 'grid',
                  gridTemplateColumns: '340px auto',
                  flex: 'auto',
                  gap: '40px',
                  padding: '20px 24px',
                  background: 'radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%)'
              }, ...focusableProps },
              window.SP_REACT.createElement("div", { style: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '30px 0' } },
                  window.SP_REACT.createElement("div", { style: { fontSize: '28px', fontWeight: 'bold' } }, name),
                  window.SP_REACT.createElement("div", null,
                      installing ? (window.SP_REACT.createElement("div", { key: 'download', style: { margin: '5px 2px 10px', animation: 'fadeIn .3s ease-in-out forwards' } },
                          window.SP_REACT.createElement("div", { style: { marginBottom: '5px', color: '#969696', fontSize: '11px', lineHeight: '11px' } }, progress.Description),
                          window.SP_REACT.createElement(deckyFrontendLib.ProgressBar, { nProgress: progress.Percentage }))) : !!gameSize && (window.SP_REACT.createElement("div", { key: 'size', style: { margin: '0 2px 5px', color: '#969696', fontSize: '11px', lineHeight: '11px', animation: 'fadeIn .3s ease-in-out forwards' } }, gameSize)),
                      window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', height: '40px' } },
                          window.SP_REACT.createElement("div", { className: deckyFrontendLib.joinClassNames(basicAppDetailsClasses.AppActionButton, appActionButtonClasses.PlayButtonContainer, installing || steamClientID == "" ? '' : appActionButtonClasses.Green), style: { height: '100%', width: '100%' } },
                              window.SP_REACT.createElement(deckyFrontendLib.Button, { style: { display: 'flex', justifyContent: 'left', fontSize: '14px' }, className: installing ? 'DialogButton' : deckyFrontendLib.joinClassNames(appActionButtonClasses.PlayButton, appActionButtonClasses.ButtonChild), onClick: installing ? cancelInstall : !isInstalled ? installer : runner }, installing ? 'Cancel' : !isInstalled ? 'Install Game' : 'Play Game')),
                          window.SP_REACT.createElement("div", { style: { display: 'flex', gap: '15px', height: '100%' } },
                              window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: actionsMenu, style: { width: "48px", minWidth: 'initial', padding: 'initial' } },
                                  window.SP_REACT.createElement(FaSlidersH, { style: { verticalAlign: 'middle' } })),
                              editors.length > 0 && (window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: contextMenu, style: { width: "48px", minWidth: 'initial', padding: 'initial' } },
                                  window.SP_REACT.createElement(FaCog, { style: { verticalAlign: 'middle' } }))))))),
              window.SP_REACT.createElement("div", { style: { width: '100%', padding: '8px 0', color: '#c2c0c0' } },
                  window.SP_REACT.createElement(ScrollableWindow, { height: '100%', onCancel: closeModal, ...focusableProps },
                      window.SP_REACT.createElement("div", { style: { paddingRight: '10px', whiteSpace: 'pre-wrap' }, dangerouslySetInnerHTML: { __html: description } }),
                      steamClientID && (window.SP_REACT.createElement("div", { style: { marginTop: '20px' } },
                          "Steam Client ID: ",
                          steamClientID)))))));
  };
  const ImageMarquee = ({ sources, height }) => {
      const [key, setKey] = React.useState(0); //used to force marquee to remount so it works properly
      const ref = React.useRef(null);
      const checkOverflow = () => {
          if (ref.current?.parentElement?.parentElement) {
              const hasOverflow = ref.current.parentElement.parentElement.clientWidth < ref.current.scrollWidth;
              if (hasOverflow)
                  setKey(1);
          }
      };
      return (window.SP_REACT.createElement(deckyFrontendLib.Marquee, { key: key, play: true, center: true, delay: 0, speed: 10 },
          window.SP_REACT.createElement("div", { key: 'content', style: { height: height }, ref: ref }, sources.map((src) => (window.SP_REACT.createElement(MarqueeImage, { src: src, onLoad: checkOverflow }))))));
  };
  const MarqueeImage = ({ src, onLoad }) => {
      const [isImgLoaded, setIsImgLoaded] = React.useState(false);
      const [error, setError] = React.useState(false);
      React.useEffect(onLoad, [isImgLoaded]);
      return error ? null :
          window.SP_REACT.createElement("img", { key: src, style: {
                  height: '100%',
                  borderRadius: '3px',
                  opacity: isImgLoaded ? 1 : 0,
                  margin: isImgLoaded ? '0 8px' : 0,
                  transition: 'opacity 1.5s ease',
              }, src: src, onLoad: () => setIsImgLoaded(true), onError: () => setError(true) });
  };
  const FocusOnMount = (props) => {
      const [shouldFocus, setShouldFocus] = React.useState(true);
      const focusable = window.SP_REACT.createElement(deckyFrontendLib.Focusable, { ...props });
      if (shouldFocus) {
          deckyFrontendLib.afterPatch(focusable.type, 'render', (_, ret) => {
              setShouldFocus(() => {
                  ret.props.value.BTakeFocus(3);
                  return false;
              });
              return ret;
          }, { singleShot: true });
      }
      return focusable;
  };

  function die(error) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
  }

  var mockGlobal = {};
  function getGlobal() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    return mockGlobal;
  }

  // We shorten anything used > 5 times
  var assign = Object.assign;
  var getDescriptor = Object.getOwnPropertyDescriptor;
  var defineProperty = Object.defineProperty;
  var objectPrototype = Object.prototype;
  var EMPTY_ARRAY = [];
  Object.freeze(EMPTY_ARRAY);
  var EMPTY_OBJECT = {};
  Object.freeze(EMPTY_OBJECT);
  var hasProxy = typeof Proxy !== "undefined";
  var plainObjectString = /*#__PURE__*/Object.toString();
  function assertProxies() {
    if (!hasProxy) {
      die("Proxy not available");
    }
  }
  /**
   * Makes sure that the provided function is invoked at most once.
   */
  function once(func) {
    var invoked = false;
    return function () {
      if (invoked) {
        return;
      }
      invoked = true;
      return func.apply(this, arguments);
    };
  }
  var noop = function noop() {};
  function isFunction(fn) {
    return typeof fn === "function";
  }
  function isStringish(value) {
    var t = typeof value;
    switch (t) {
      case "string":
      case "symbol":
      case "number":
        return true;
    }
    return false;
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto == null) {
      return true;
    }
    var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
  }
  // https://stackoverflow.com/a/37865170
  function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) {
      return false;
    }
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
      return true;
    }
    return false;
  }
  function addHiddenProp(object, propName, value) {
    defineProperty(object, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value: value
    });
  }
  function addHiddenFinalProp(object, propName, value) {
    defineProperty(object, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value: value
    });
  }
  function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function (x) {
      return isObject(x) && x[propName] === true;
    };
  }
  /**
   * Yields true for both native and observable Map, even across different windows.
   */
  function isES6Map(thing) {
    return thing != null && Object.prototype.toString.call(thing) === "[object Map]";
  }
  /**
   * Makes sure a Map is an instance of non-inherited native or observable Map.
   */
  function isPlainES6Map(thing) {
    var mapProto = Object.getPrototypeOf(thing);
    var objectProto = Object.getPrototypeOf(mapProto);
    var nullProto = Object.getPrototypeOf(objectProto);
    return nullProto === null;
  }
  /**
   * Yields true for both native and observable Set, even across different windows.
   */
  function isES6Set(thing) {
    return thing != null && Object.prototype.toString.call(thing) === "[object Set]";
  }
  var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
  /**
   * Returns the following: own enumerable keys and symbols.
   */
  function getPlainObjectKeys(object) {
    var keys = Object.keys(object);
    // Not supported in IE, so there are not going to be symbol props anyway...
    if (!hasGetOwnPropertySymbols) {
      return keys;
    }
    var symbols = Object.getOwnPropertySymbols(object);
    if (!symbols.length) {
      return keys;
    }
    return [].concat(keys, symbols.filter(function (s) {
      return objectPrototype.propertyIsEnumerable.call(object, s);
    }));
  }
  // From Immer utils
  // Returns all own keys, including non-enumerable and symbolic
  var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
  } : /* istanbul ignore next */Object.getOwnPropertyNames;
  function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
  }
  function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
  }
  // From Immer utils
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
    // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
    var res = {};
    // Note: without polyfill for ownKeys, symbols won't be picked up
    ownKeys(target).forEach(function (key) {
      res[key] = getDescriptor(target, key);
    });
    return res;
  };
  function getFlag(flags, mask) {
    return !!(flags & mask);
  }
  function setFlag(flags, mask, newValue) {
    if (newValue) {
      flags |= mask;
    } else {
      flags &= ~mask;
    }
    return flags;
  }

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelperLoose(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (t) return (t = t.call(r)).next.bind(t);
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var o = 0;
      return function () {
        return o >= r.length ? {
          done: !0
        } : {
          done: !1,
          value: r[o++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _extends$2() {
    return _extends$2 = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends$2.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
  /**
   * Creates a function that acts as
   * - decorator
   * - annotation object
   */
  function createDecoratorAnnotation(annotation) {
    function decorator(target, property) {
      if (is20223Decorator(property)) {
        return annotation.decorate_20223_(target, property);
      } else {
        storeAnnotation(target, property, annotation);
      }
    }
    return Object.assign(decorator, annotation);
  }
  /**
   * Stores annotation to prototype,
   * so it can be inspected later by `makeObservable` called from constructor
   */
  function storeAnnotation(prototype, key, annotation) {
    if (!hasProp(prototype, storedAnnotationsSymbol)) {
      addHiddenProp(prototype, storedAnnotationsSymbol, _extends$2({}, prototype[storedAnnotationsSymbol]));
    }
    // Ignore override
    if (!isOverride(annotation)) {
      prototype[storedAnnotationsSymbol][key] = annotation;
    }
  }
  function is20223Decorator(context) {
    return typeof context == "object" && typeof context["kind"] == "string";
  }

  var $mobx = /*#__PURE__*/Symbol("mobx administration");
  var Atom = /*#__PURE__*/function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name_) {
      if (name_ === void 0) {
        name_ = "Atom";
      }
      this.name_ = void 0;
      this.flags_ = 0;
      this.observers_ = new Set();
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
      // onBecomeObservedListeners
      this.onBOL = void 0;
      // onBecomeUnobservedListeners
      this.onBUOL = void 0;
      this.name_ = name_;
    }
    // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
    var _proto = Atom.prototype;
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function (listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (listener) {
          return listener();
        });
      }
    }
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */;
    _proto.reportObserved = function reportObserved$1() {
      return reportObserved(this);
    }
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */;
    _proto.reportChanged = function reportChanged() {
      startBatch();
      propagateChanged(this);
      endBatch();
    };
    _proto.toString = function toString() {
      return this.name_;
    };
    return _createClass(Atom, [{
      key: "isBeingObserved",
      get: function get() {
        return getFlag(this.flags_, Atom.isBeingObservedMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Atom.isBeingObservedMask_, newValue);
      }
    }, {
      key: "isPendingUnobservation",
      get: function get() {
        return getFlag(this.flags_, Atom.isPendingUnobservationMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Atom.isPendingUnobservationMask_, newValue);
      }
    }, {
      key: "diffValue",
      get: function get() {
        return getFlag(this.flags_, Atom.diffValueMask_) ? 1 : 0;
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Atom.diffValueMask_, newValue === 1 ? true : false);
      }
    }]);
  }();
  Atom.isBeingObservedMask_ = 1;
  Atom.isPendingUnobservationMask_ = 2;
  Atom.diffValueMask_ = 4;
  var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
  function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop;
    }
    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop;
    }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
      onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
      onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
  }

  function identityComparer(a, b) {
    return a === b;
  }
  function structuralComparer(a, b) {
    return deepEqual(a, b);
  }
  function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
  }
  function defaultComparer(a, b) {
    if (Object.is) {
      return Object.is(a, b);
    }
    return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
  }
  var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
  };

  function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v)) {
      return v;
    }
    // something that can be converted and mutated?
    if (Array.isArray(v)) {
      return observable.array(v, {
        name: name
      });
    }
    if (isPlainObject(v)) {
      return observable.object(v, undefined, {
        name: name
      });
    }
    if (isES6Map(v)) {
      return observable.map(v, {
        name: name
      });
    }
    if (isES6Set(v)) {
      return observable.set(v, {
        name: name
      });
    }
    if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
      if (isGenerator(v)) {
        return flow(v);
      } else {
        return autoAction(name, v);
      }
    }
    return v;
  }
  function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null) {
      return v;
    }
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
      return v;
    }
    if (Array.isArray(v)) {
      return observable.array(v, {
        name: name,
        deep: false
      });
    }
    if (isPlainObject(v)) {
      return observable.object(v, undefined, {
        name: name,
        deep: false
      });
    }
    if (isES6Map(v)) {
      return observable.map(v, {
        name: name,
        deep: false
      });
    }
    if (isES6Set(v)) {
      return observable.set(v, {
        name: name,
        deep: false
      });
    }
  }
  function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
  }
  function refStructEnhancer(v, oldValue) {
    if (deepEqual(v, oldValue)) {
      return oldValue;
    }
    return v;
  }

  var OVERRIDE = "override";
  function isOverride(annotation) {
    return annotation.annotationType_ === OVERRIDE;
  }

  function createActionAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$1,
      extend_: extend_$1,
      decorate_20223_: decorate_20223_$1
    };
  }
  function make_$1(adm, key, descriptor, source) {
    var _this$options_;
    // bound
    if ((_this$options_ = this.options_) != null && _this$options_.bound) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 1 /* MakeResult.Break */;
    }
    // own
    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 2 /* MakeResult.Continue */;
    }
    // prototype
    if (isAction(descriptor.value)) {
      // A prototype could have been annotated already by other constructor,
      // rest of the proto chain must be annotated already
      return 1 /* MakeResult.Break */;
    }
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
    defineProperty(source, key, actionDescriptor);
    return 2 /* MakeResult.Continue */;
  }
  function extend_$1(adm, key, descriptor, proxyTrap) {
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, actionDescriptor, proxyTrap);
  }
  function decorate_20223_$1(mthd, context) {
    var kind = context.kind,
      name = context.name,
      addInitializer = context.addInitializer;
    var ann = this;
    var _createAction = function _createAction(m) {
      var _ann$options_$name, _ann$options_, _ann$options_$autoAct, _ann$options_2;
      return createAction((_ann$options_$name = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.name) != null ? _ann$options_$name : name.toString(), m, (_ann$options_$autoAct = (_ann$options_2 = ann.options_) == null ? void 0 : _ann$options_2.autoAction) != null ? _ann$options_$autoAct : false);
    };
    if (kind == "field") {
      return function (initMthd) {
        var _ann$options_3;
        var mthd = initMthd;
        if (!isAction(mthd)) {
          mthd = _createAction(mthd);
        }
        if ((_ann$options_3 = ann.options_) != null && _ann$options_3.bound) {
          mthd = mthd.bind(this);
          mthd.isMobxAction = true;
        }
        return mthd;
      };
    }
    if (kind == "method") {
      var _this$options_2;
      if (!isAction(mthd)) {
        mthd = _createAction(mthd);
      }
      if ((_this$options_2 = this.options_) != null && _this$options_2.bound) {
        addInitializer(function () {
          var self = this;
          var bound = self[name].bind(self);
          bound.isMobxAction = true;
          self[name] = bound;
        });
      }
      return mthd;
    }
    die("Cannot apply '" + ann.annotationType_ + "' to '" + String(name) + "' (kind: " + kind + "):" + ("\n'" + ann.annotationType_ + "' can only be used on properties with a function value."));
  }
  function assertActionDescriptor(adm, _ref, key, _ref2) {
    _ref.annotationType_;
    _ref2.value;
  }
  function createActionDescriptor(adm, annotation, key, descriptor,
  // provides ability to disable safeDescriptors for prototypes
  safeDescriptors) {
    var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }
    assertActionDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
      var _adm$proxy_;
      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return {
      value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false,
      // https://github.com/mobxjs/mobx/discussions/3140
      (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : undefined),
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }

  function createFlowAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$2,
      extend_: extend_$2,
      decorate_20223_: decorate_20223_$2
    };
  }
  function make_$2(adm, key, descriptor, source) {
    var _this$options_;
    // own
    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 2 /* MakeResult.Continue */;
    }
    // prototype
    // bound - must annotate protos to support super.flow()
    if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
      if (this.extend_(adm, key, descriptor, false) === null) {
        return 0 /* MakeResult.Cancel */;
      }
    }
    if (isFlow(descriptor.value)) {
      // A prototype could have been annotated already by other constructor,
      // rest of the proto chain must be annotated already
      return 1 /* MakeResult.Break */;
    }
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
    defineProperty(source, key, flowDescriptor);
    return 2 /* MakeResult.Continue */;
  }
  function extend_$2(adm, key, descriptor, proxyTrap) {
    var _this$options_2;
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
    return adm.defineProperty_(key, flowDescriptor, proxyTrap);
  }
  function decorate_20223_$2(mthd, context) {
    var _this$options_3;
    var name = context.name,
      addInitializer = context.addInitializer;
    if (!isFlow(mthd)) {
      mthd = flow(mthd);
    }
    if ((_this$options_3 = this.options_) != null && _this$options_3.bound) {
      addInitializer(function () {
        var self = this;
        var bound = self[name].bind(self);
        bound.isMobXFlow = true;
        self[name] = bound;
      });
    }
    return mthd;
  }
  function assertFlowDescriptor(adm, _ref, key, _ref2) {
    _ref.annotationType_;
    _ref2.value;
  }
  function createFlowDescriptor(adm, annotation, key, descriptor, bound,
  // provides ability to disable safeDescriptors for prototypes
  safeDescriptors) {
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }
    assertFlowDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    // In case of flow.bound, the descriptor can be from already annotated prototype
    if (!isFlow(value)) {
      value = flow(value);
    }
    if (bound) {
      var _adm$proxy_;
      // We do not keep original function around, so we bind the existing flow
      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
      // This is normally set by `flow`, but `bind` returns new function...
      value.isMobXFlow = true;
    }
    return {
      value: value,
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }

  function createComputedAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$3,
      extend_: extend_$3,
      decorate_20223_: decorate_20223_$3
    };
  }
  function make_$3(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 1 /* MakeResult.Break */;
  }
  function extend_$3(adm, key, descriptor, proxyTrap) {
    assertComputedDescriptor(adm, this, key, descriptor);
    return adm.defineComputedProperty_(key, _extends$2({}, this.options_, {
      get: descriptor.get,
      set: descriptor.set
    }), proxyTrap);
  }
  function decorate_20223_$3(get, context) {
    var ann = this;
    var key = context.name,
      addInitializer = context.addInitializer;
    addInitializer(function () {
      var adm = asObservableObject(this)[$mobx];
      var options = _extends$2({}, ann.options_, {
        get: get,
        context: this
      });
      options.name || (options.name = "ObservableObject." + key.toString());
      adm.values_.set(key, new ComputedValue(options));
    });
    return function () {
      return this[$mobx].getObservablePropValue_(key);
    };
  }
  function assertComputedDescriptor(adm, _ref, key, _ref2) {
    _ref.annotationType_;
    _ref2.get;
  }

  function createObservableAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$4,
      extend_: extend_$4,
      decorate_20223_: decorate_20223_$4
    };
  }
  function make_$4(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 1 /* MakeResult.Break */;
  }
  function extend_$4(adm, key, descriptor, proxyTrap) {
    var _this$options_$enhanc, _this$options_;
    assertObservableDescriptor(adm, this);
    return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
  }
  function decorate_20223_$4(desc, context) {
    var ann = this;
    var kind = context.kind,
      name = context.name;
    // The laziness here is not ideal... It's a workaround to how 2022.3 Decorators are implemented:
    //   `addInitializer` callbacks are executed _before_ any accessors are defined (instead of the ideal-for-us right after each).
    //   This means that, if we were to do our stuff in an `addInitializer`, we'd attempt to read a private slot
    //   before it has been initialized. The runtime doesn't like that and throws a `Cannot read private member
    //   from an object whose class did not declare it` error.
    // TODO: it seems that this will not be required anymore in the final version of the spec
    // See TODO: link
    var initializedObjects = new WeakSet();
    function initializeObservable(target, value) {
      var _ann$options_$enhance, _ann$options_;
      var adm = asObservableObject(target)[$mobx];
      var observable = new ObservableValue(value, (_ann$options_$enhance = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.enhancer) != null ? _ann$options_$enhance : deepEnhancer, "ObservableObject." + name.toString(), false);
      adm.values_.set(name, observable);
      initializedObjects.add(target);
    }
    if (kind == "accessor") {
      return {
        get: function get() {
          if (!initializedObjects.has(this)) {
            initializeObservable(this, desc.get.call(this));
          }
          return this[$mobx].getObservablePropValue_(name);
        },
        set: function set(value) {
          if (!initializedObjects.has(this)) {
            initializeObservable(this, value);
          }
          return this[$mobx].setObservablePropValue_(name, value);
        },
        init: function init(value) {
          if (!initializedObjects.has(this)) {
            initializeObservable(this, value);
          }
          return value;
        }
      };
    }
    return;
  }
  function assertObservableDescriptor(adm, _ref, key, descriptor) {
    _ref.annotationType_;
  }

  var AUTO = "true";
  var autoAnnotation = /*#__PURE__*/createAutoAnnotation();
  function createAutoAnnotation(options) {
    return {
      annotationType_: AUTO,
      options_: options,
      make_: make_$5,
      extend_: extend_$5,
      decorate_20223_: decorate_20223_$5
    };
  }
  function make_$5(adm, key, descriptor, source) {
    var _this$options_3, _this$options_4;
    // getter -> computed
    if (descriptor.get) {
      return computed.make_(adm, key, descriptor, source);
    }
    // lone setter -> action setter
    if (descriptor.set) {
      // TODO make action applicable to setter and delegate to action.make_
      var set = isAction(descriptor.set) ? descriptor.set // See #4553
      : createAction(key.toString(), descriptor.set);
      // own
      if (source === adm.target_) {
        return adm.defineProperty_(key, {
          configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
          set: set
        }) === null ? 0 /* MakeResult.Cancel */ : 2 /* MakeResult.Continue */;
      }
      // proto
      defineProperty(source, key, {
        configurable: true,
        set: set
      });
      return 2 /* MakeResult.Continue */;
    }
    // function on proto -> autoAction/flow
    if (source !== adm.target_ && typeof descriptor.value === "function") {
      var _this$options_2;
      if (isGenerator(descriptor.value)) {
        var _this$options_;
        var flowAnnotation = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
        return flowAnnotation.make_(adm, key, descriptor, source);
      }
      var actionAnnotation = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
      return actionAnnotation.make_(adm, key, descriptor, source);
    }
    // other -> observable
    // Copy props from proto as well, see test:
    // "decorate should work with Object.create"
    var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
    // if function respect autoBind option
    if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
      var _adm$proxy_;
      descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return observableAnnotation.make_(adm, key, descriptor, source);
  }
  function extend_$5(adm, key, descriptor, proxyTrap) {
    var _this$options_5, _this$options_6;
    // getter -> computed
    if (descriptor.get) {
      return computed.extend_(adm, key, descriptor, proxyTrap);
    }
    // lone setter -> action setter
    if (descriptor.set) {
      // TODO make action applicable to setter and delegate to action.extend_
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: createAction(key.toString(), descriptor.set)
      }, proxyTrap);
    }
    // other -> observable
    // if function respect autoBind option
    if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
      var _adm$proxy_2;
      descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
    }
    var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
    return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
  }
  function decorate_20223_$5(desc, context) {
    die("'" + this.annotationType_ + "' cannot be used as a decorator");
  }

  var OBSERVABLE = "observable";
  var OBSERVABLE_REF = "observable.ref";
  var OBSERVABLE_SHALLOW = "observable.shallow";
  var OBSERVABLE_STRUCT = "observable.struct";
  // Predefined bags of create observable options, to avoid allocating temporarily option objects
  // in the majority of cases
  var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
  };
  Object.freeze(defaultCreateObservableOptions);
  function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
  }
  var observableAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE);
  var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_REF, {
    enhancer: referenceEnhancer
  });
  var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_SHALLOW, {
    enhancer: shallowEnhancer
  });
  var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_STRUCT, {
    enhancer: refStructEnhancer
  });
  var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
  function getEnhancerFromOptions(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
  }
  function getAnnotationFromOptions(options) {
    var _options$defaultDecor;
    return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
  }
  function getEnhancerFromAnnotation(annotation) {
    var _annotation$options_$, _annotation$options_;
    return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
  }
  /**
   * Turns an object, array or function into a reactive structure.
   * @param v the value which should become observable.
   */
  function createObservable(v, arg2, arg3) {
    // @observable someProp; (2022.3 Decorators)
    if (is20223Decorator(arg2)) {
      return observableAnnotation.decorate_20223_(v, arg2);
    }
    // @observable someProp;
    if (isStringish(arg2)) {
      storeAnnotation(v, arg2, observableAnnotation);
      return;
    }
    // already observable - ignore
    if (isObservable(v)) {
      return v;
    }
    // plain object
    if (isPlainObject(v)) {
      return observable.object(v, arg2, arg3);
    }
    // Array
    if (Array.isArray(v)) {
      return observable.array(v, arg2);
    }
    // Map
    if (isES6Map(v)) {
      return observable.map(v, arg2);
    }
    // Set
    if (isES6Set(v)) {
      return observable.set(v, arg2);
    }
    // other object - ignore
    if (typeof v === "object" && v !== null) {
      return v;
    }
    // anything else
    return observable.box(v, arg2);
  }
  assign(createObservable, observableDecoratorAnnotation);
  var observableFactories = {
    box: function box(value, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function map(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function set(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function object(props, decorators, options) {
      return initObservable(function () {
        return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
      });
    },
    ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
    shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
  };
  // eslint-disable-next-line
  var observable = /*#__PURE__*/assign(createObservable, observableFactories);

  var COMPUTED = "computed";
  var COMPUTED_STRUCT = "computed.struct";
  var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
  var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural
  });
  /**
   * Decorator for class properties: @computed get value() { return expr; }.
   * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
   */
  var computed = function computed(arg1, arg2) {
    if (is20223Decorator(arg2)) {
      // @computed (2022.3 Decorators)
      return computedAnnotation.decorate_20223_(arg1, arg2);
    }
    if (isStringish(arg2)) {
      // @computed
      return storeAnnotation(arg1, arg2, computedAnnotation);
    }
    if (isPlainObject(arg1)) {
      // @computed({ options })
      return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
    }
    var opts = isPlainObject(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name || (opts.name = arg1.name || ""); /* for generated name */
    return new ComputedValue(opts);
  };
  Object.assign(computed, computedAnnotation);
  computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

  var _getDescriptor$config, _getDescriptor;
  // we don't use globalState for these in order to avoid possible issues with multiple
  // mobx versions
  var currentActionId = 0;
  var nextActionId = 1;
  var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
  // we can safely recycle this object
  var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
  };
  function createAction(actionName, fn, autoAction, ref) {
    if (autoAction === void 0) {
      autoAction = false;
    }
    function res() {
      return executeAction(actionName, autoAction, fn, ref || this, arguments);
    }
    res.isMobxAction = true;
    res.toString = function () {
      return fn.toString();
    };
    if (isFunctionNameConfigurable) {
      tmpNameDescriptor.value = actionName;
      defineProperty(res, "name", tmpNameDescriptor);
    }
    return res;
  }
  function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation);
    try {
      return fn.apply(scope, args);
    } catch (err) {
      runInfo.error_ = err;
      throw err;
    } finally {
      _endAction(runInfo);
    }
  }
  function _startAction(actionName, canRunAsDerivation,
  // true for autoAction
  scope, args) {
    var notifySpy_ = "production" !== "production"  ;
    var startTime_ = 0;
    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow
    if (runAsAction) {
      untrackedStart();
      prevAllowStateChanges_ = allowStateChangesStart(true);
    }
    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
      runAsAction_: runAsAction,
      prevDerivation_: prevDerivation_,
      prevAllowStateChanges_: prevAllowStateChanges_,
      prevAllowStateReads_: prevAllowStateReads_,
      notifySpy_: notifySpy_,
      startTime_: startTime_,
      actionId_: nextActionId++,
      parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
  }
  function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) {
      die(30);
    }
    currentActionId = runInfo.parentActionId_;
    if (runInfo.error_ !== undefined) {
      globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_) {
      untrackedEnd(runInfo.prevDerivation_);
    }
    globalState.suppressReactionErrors = false;
  }
  function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    try {
      return func();
    } finally {
      allowStateChangesEnd(prev);
    }
  }
  function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
  }
  function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
  }
  var ObservableValue = /*#__PURE__*/function (_Atom) {
    function ObservableValue(value, enhancer, name_, notifySpy, equals) {
      var _this;
      if (name_ === void 0) {
        name_ = "ObservableValue";
      }
      if (equals === void 0) {
        equals = comparer["default"];
      }
      _this = _Atom.call(this, name_) || this;
      _this.enhancer = void 0;
      _this.name_ = void 0;
      _this.equals = void 0;
      _this.hasUnreportedChange_ = false;
      _this.interceptors_ = void 0;
      _this.changeListeners_ = void 0;
      _this.value_ = void 0;
      _this.dehancer = void 0;
      _this.enhancer = enhancer;
      _this.name_ = name_;
      _this.equals = equals;
      _this.value_ = enhancer(value, undefined, name_);
      return _this;
    }
    _inheritsLoose(ObservableValue, _Atom);
    var _proto = ObservableValue.prototype;
    _proto.dehanceValue = function dehanceValue(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.set = function set(newValue) {
      this.value_;
      newValue = this.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        this.setNewValue_(newValue);
      }
    };
    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this,
          type: UPDATE,
          newValue: newValue
        });
        if (!change) {
          return globalState.UNCHANGED;
        }
        newValue = change.newValue;
      }
      // apply modifier
      newValue = this.enhancer(newValue, this.value_, this.name_);
      return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };
    _proto.setNewValue_ = function setNewValue_(newValue) {
      var oldValue = this.value_;
      this.value_ = newValue;
      this.reportChanged();
      if (hasListeners(this)) {
        notifyListeners(this, {
          type: UPDATE,
          object: this,
          newValue: newValue,
          oldValue: oldValue
        });
      }
    };
    _proto.get = function get() {
      this.reportObserved();
      return this.dehanceValue(this.value_);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately) {
        listener({
          observableKind: "value",
          debugObjectName: this.name_,
          object: this,
          type: UPDATE,
          newValue: this.value_,
          oldValue: undefined
        });
      }
      return registerListener(this, listener);
    };
    _proto.raw = function raw() {
      // used by MST ot get undehanced value
      return this.value_;
    };
    _proto.toJSON = function toJSON() {
      return this.get();
    };
    _proto.toString = function toString() {
      return this.name_ + "[" + this.value_ + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[Symbol.toPrimitive] = function () {
      return this.valueOf();
    };
    return ObservableValue;
  }(Atom);

  /**
   * A node in the state dependency root that observes other nodes, and can be observed itself.
   *
   * ComputedValue will remember the result of the computation for the duration of the batch, or
   * while being observed.
   *
   * During this time it will recompute only when one of its direct dependencies changed,
   * but only when it is being accessed with `ComputedValue.get()`.
   *
   * Implementation description:
   * 1. First time it's being accessed it will compute and remember result
   *    give back remembered result until 2. happens
   * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
   * 3. When it's being accessed, recompute if any shallow dependency changed.
   *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
   *    go to step 2. either way
   *
   * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
   */
  var ComputedValue = /*#__PURE__*/function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.observing_ = [];
      // nodes we are looking at. Our value depends on these nodes
      this.newObserving_ = null;
      // during tracking it's an array with new observed observers
      this.observers_ = new Set();
      this.runId_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      this.unboundDepsCount_ = 0;
      this.value_ = new CaughtException(null);
      this.name_ = void 0;
      this.triggeredBy_ = void 0;
      this.flags_ = 0;
      this.derivation = void 0;
      // N.B: unminified as it is used by MST
      this.setter_ = void 0;
      this.isTracing_ = TraceMode.NONE;
      this.scope_ = void 0;
      this.equals_ = void 0;
      this.requiresReaction_ = void 0;
      this.keepAlive_ = void 0;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      if (!options.get) {
        die(31);
      }
      this.derivation = options.get;
      this.name_ = options.name || ("ComputedValue");
      if (options.set) {
        this.setter_ = createAction("ComputedValue-setter", options.set);
      }
      this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
      this.scope_ = options.context;
      this.requiresReaction_ = options.requiresReaction;
      this.keepAlive_ = !!options.keepAlive;
    }
    var _proto = ComputedValue.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      propagateMaybeChanged(this);
    };
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function (listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (listener) {
          return listener();
        });
      }
    }
    // to check for cycles
  ;
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    _proto.get = function get() {
      if (this.isComputing) {
        die(32, this.name_, this.derivation);
      }
      if (globalState.inBatch === 0 &&
      // !globalState.trackingDerivatpion &&
      this.observers_.size === 0 && !this.keepAlive_) {
        if (shouldCompute(this)) {
          this.warnAboutUntrackedRead_();
          startBatch(); // See perf test 'computed memoization'
          this.value_ = this.computeValue_(false);
          endBatch();
        }
      } else {
        reportObserved(this);
        if (shouldCompute(this)) {
          var prevTrackingContext = globalState.trackingContext;
          if (this.keepAlive_ && !prevTrackingContext) {
            globalState.trackingContext = this;
          }
          if (this.trackAndCompute()) {
            propagateChangeConfirmed(this);
          }
          globalState.trackingContext = prevTrackingContext;
        }
      }
      var result = this.value_;
      if (isCaughtException(result)) {
        throw result.cause;
      }
      return result;
    };
    _proto.set = function set(value) {
      if (this.setter_) {
        if (this.isRunningSetter) {
          die(33, this.name_);
        }
        this.isRunningSetter = true;
        try {
          this.setter_.call(this.scope_, value);
        } finally {
          this.isRunningSetter = false;
        }
      } else {
        die(34, this.name_);
      }
    };
    _proto.trackAndCompute = function trackAndCompute() {
      // N.B: unminified as it is used by MST
      var oldValue = this.value_;
      var wasSuspended = /* see #1208 */this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
      var newValue = this.computeValue_(true);
      var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
      if (changed) {
        this.value_ = newValue;
      }
      return changed;
    };
    _proto.computeValue_ = function computeValue_(track) {
      this.isComputing = true;
      // don't allow state changes during computation
      var prev = allowStateChangesStart(false);
      var res;
      if (track) {
        res = trackDerivedFunction(this, this.derivation, this.scope_);
      } else {
        if (globalState.disableErrorBoundaries === true) {
          res = this.derivation.call(this.scope_);
        } else {
          try {
            res = this.derivation.call(this.scope_);
          } catch (e) {
            res = new CaughtException(e);
          }
        }
      }
      allowStateChangesEnd(prev);
      this.isComputing = false;
      return res;
    };
    _proto.suspend_ = function suspend_() {
      if (!this.keepAlive_) {
        clearObserving(this);
        this.value_ = undefined; // don't hold on to computed value!
      }
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      var _this = this;
      var firstTime = true;
      var prevValue = undefined;
      return autorun(function () {
        // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
        var newValue = _this.get();
        if (!firstTime || fireImmediately) {
          var prevU = untrackedStart();
          listener({
            observableKind: "computed",
            debugObjectName: _this.name_,
            type: UPDATE,
            object: _this,
            newValue: newValue,
            oldValue: prevValue
          });
          untrackedEnd(prevU);
        }
        firstTime = false;
        prevValue = newValue;
      });
    };
    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
      {
        return;
      }
    };
    _proto.toString = function toString() {
      return this.name_ + "[" + this.derivation.toString() + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[Symbol.toPrimitive] = function () {
      return this.valueOf();
    };
    return _createClass(ComputedValue, [{
      key: "isComputing",
      get: function get() {
        return getFlag(this.flags_, ComputedValue.isComputingMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, ComputedValue.isComputingMask_, newValue);
      }
    }, {
      key: "isRunningSetter",
      get: function get() {
        return getFlag(this.flags_, ComputedValue.isRunningSetterMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, ComputedValue.isRunningSetterMask_, newValue);
      }
    }, {
      key: "isBeingObserved",
      get: function get() {
        return getFlag(this.flags_, ComputedValue.isBeingObservedMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, ComputedValue.isBeingObservedMask_, newValue);
      }
    }, {
      key: "isPendingUnobservation",
      get: function get() {
        return getFlag(this.flags_, ComputedValue.isPendingUnobservationMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, ComputedValue.isPendingUnobservationMask_, newValue);
      }
    }, {
      key: "diffValue",
      get: function get() {
        return getFlag(this.flags_, ComputedValue.diffValueMask_) ? 1 : 0;
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, ComputedValue.diffValueMask_, newValue === 1 ? true : false);
      }
    }]);
  }();
  ComputedValue.isComputingMask_ = 1;
  ComputedValue.isRunningSetterMask_ = 2;
  ComputedValue.isBeingObservedMask_ = 4;
  ComputedValue.isPendingUnobservationMask_ = 8;
  ComputedValue.diffValueMask_ = 16;
  var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

  var IDerivationState_;
  (function (IDerivationState_) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
  })(IDerivationState_ || (IDerivationState_ = {}));
  var TraceMode;
  (function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
  })(TraceMode || (TraceMode = {}));
  var CaughtException = function CaughtException(cause) {
    this.cause = void 0;
    this.cause = cause;
    // Empty
  };
  function isCaughtException(e) {
    return e instanceof CaughtException;
  }
  /**
   * Finds out whether any dependency of the derivation has actually changed.
   * If dependenciesState is 1 then it will recalculate dependencies,
   * if any dependency changed it will propagate it by changing dependenciesState to 2.
   *
   * By iterating over the dependencies in the same order that they were reported and
   * stopping on the first change, all the recalculations are only called for ComputedValues
   * that will be tracked by derivation. That is because we assume that if the first x
   * dependencies of the derivation doesn't change then the derivation should run the same way
   * up until accessing x-th dependency.
   */
  function shouldCompute(derivation) {
    switch (derivation.dependenciesState_) {
      case IDerivationState_.UP_TO_DATE_:
        return false;
      case IDerivationState_.NOT_TRACKING_:
      case IDerivationState_.STALE_:
        return true;
      case IDerivationState_.POSSIBLY_STALE_:
        {
          // state propagation can occur outside of action/reactive context #2195
          var prevAllowStateReads = allowStateReadsStart(true);
          var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
          var obs = derivation.observing_,
            l = obs.length;
          for (var i = 0; i < l; i++) {
            var obj = obs[i];
            if (isComputedValue(obj)) {
              if (globalState.disableErrorBoundaries) {
                obj.get();
              } else {
                try {
                  obj.get();
                } catch (e) {
                  // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                  untrackedEnd(prevUntracked);
                  allowStateReadsEnd(prevAllowStateReads);
                  return true;
                }
              }
              // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
              // and `derivation` is an observer of `obj`
              // invariantShouldCompute(derivation)
              if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
          }
          changeDependenciesStateTo0(derivation);
          untrackedEnd(prevUntracked);
          allowStateReadsEnd(prevAllowStateReads);
          return false;
        }
    }
  }
  function checkIfStateModificationsAreAllowed(atom) {
    {
      return;
    }
  }
  /**
   * Executes the provided function `f` and tracks which observables are being accessed.
   * The tracking information is stored on the `derivation` object and the derivation is registered
   * as observer of any of the accessed observables.
   */
  function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    changeDependenciesStateTo0(derivation);
    // Preallocate array; will be trimmed by bindDependencies.
    derivation.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    derivation.runId_ === 0 ? 100 : derivation.observing_.length);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;
    if (globalState.disableErrorBoundaries === true) {
      result = f.call(context);
    } else {
      try {
        result = f.call(context);
      } catch (e) {
        result = new CaughtException(e);
      }
    }
    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
  }
  /**
   * diffs newObserving with observing.
   * update observing to be newObserving with unique observables
   * notify observers that become observed/unobserved
   */
  function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0,
      l = derivation.unboundDepsCount_;
    for (var i = 0; i < l; i++) {
      var dep = observing[i];
      if (dep.diffValue === 0) {
        dep.diffValue = 1;
        if (i0 !== i) {
          observing[i0] = dep;
        }
        i0++;
      }
      // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
      // not hitting the condition
      if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
        lowestNewObservingDerivationState = dep.dependenciesState_;
      }
    }
    observing.length = i0;
    derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
      var _dep = prevObserving[l];
      if (_dep.diffValue === 0) {
        removeObserver(_dep, derivation);
      }
      _dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
      var _dep2 = observing[i0];
      if (_dep2.diffValue === 1) {
        _dep2.diffValue = 0;
        addObserver(_dep2, derivation);
      }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
      derivation.dependenciesState_ = lowestNewObservingDerivationState;
      derivation.onBecomeStale_();
    }
  }
  function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i = obs.length;
    while (i--) {
      removeObserver(obs[i], derivation);
    }
    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  }
  function untracked(action) {
    var prev = untrackedStart();
    try {
      return action();
    } finally {
      untrackedEnd(prev);
    }
  }
  function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
  }
  function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
  }
  function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
  }
  function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
  }
  /**
   * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
   *
   */
  function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      return;
    }
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i = obs.length;
    while (i--) {
      obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }
  var MobXGlobals = function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 6;
    /**
     * globally unique token to signal unchanged
     */
    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */
    this.trackingDerivation = null;
    /**
     * Currently running reaction. This determines if we currently have a reactive context.
     * (Tracking derivation is also set for temporal tracking of computed values inside actions,
     * but trackingReaction can only be set by a form of Reaction)
     */
    this.trackingContext = null;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */
    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */
    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */
    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */
    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */
    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */
    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */
    this.allowStateChanges = false;
    /**
     * Is it allowed to read observables at this point?
     * Used to hold the state needed for `observableRequiresReaction`
     */
    this.allowStateReads = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */
    this.enforceActions = true;
    /**
     * Spy callbacks
     */
    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */
    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */
    this.computedRequiresReaction = false;
    /**
     * (Experimental)
     * Warn if you try to create to derivation / reactive context without accessing any observable.
     */
    this.reactionRequiresObservable = false;
    /**
     * (Experimental)
     * Warn if observables are accessed outside a reactive context
     */
    this.observableRequiresReaction = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */
    this.disableErrorBoundaries = false;
    /*
     * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
     * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
     */
    this.suppressReactionErrors = false;
    this.useProxies = true;
    /*
     * print warnings about code that would fail if proxies weren't available
     */
    this.verifyProxies = false;
    /**
     * False forces all object's descriptors to
     * writable: true
     * configurable: true
     */
    this.safeDescriptors = true;
  };
  var canMergeGlobalState = true;
  var globalState = /*#__PURE__*/function () {
    var global = /*#__PURE__*/getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) {
      canMergeGlobalState = false;
    }
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) {
      canMergeGlobalState = false;
    }
    if (!canMergeGlobalState) {
      // Because this is a IIFE we need to let isolateCalled a chance to change
      // so we run it after the event loop completed at least 1 iteration
      setTimeout(function () {
        {
          die(35);
        }
      }, 1);
      return new MobXGlobals();
    } else if (global.__mobxGlobals) {
      global.__mobxInstanceCount += 1;
      if (!global.__mobxGlobals.UNCHANGED) {
        global.__mobxGlobals.UNCHANGED = {};
      } // make merge backward compatible
      return global.__mobxGlobals;
    } else {
      global.__mobxInstanceCount = 1;
      return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
    }
  }();
  // function invariantObservers(observable: IObservable) {
  //     const list = observable.observers
  //     const map = observable.observersIndexes
  //     const l = list.length
  //     for (let i = 0; i < l; i++) {
  //         const id = list[i].__mapid
  //         if (i) {
  //             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
  //         } else {
  //             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
  //         }
  //     }
  //     invariant(
  //         list.length === 0 || Object.keys(map).length === list.length - 1,
  //         "INTERNAL ERROR there is no junk in map"
  //     )
  // }
  function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers_.add(node);
    if (observable.lowestObserverState_ > node.dependenciesState_) {
      observable.lowestObserverState_ = node.dependenciesState_;
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
  }
  function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers_["delete"](node);
    if (observable.observers_.size === 0) {
      // deleting last observer
      queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
  }
  function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
      // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
      observable.isPendingUnobservation = true;
      globalState.pendingUnobservations.push(observable);
    }
  }
  /**
   * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
   * During a batch `onBecomeUnobserved` will be called at most once per observable.
   * Avoids unnecessary recalculations.
   */
  function startBatch() {
    globalState.inBatch++;
  }
  function endBatch() {
    if (--globalState.inBatch === 0) {
      runReactions();
      // the batch is actually about to finish, all unobserving should happen here.
      var list = globalState.pendingUnobservations;
      for (var i = 0; i < list.length; i++) {
        var observable = list[i];
        observable.isPendingUnobservation = false;
        if (observable.observers_.size === 0) {
          if (observable.isBeingObserved) {
            // if this observable had reactive observers, trigger the hooks
            observable.isBeingObserved = false;
            observable.onBUO();
          }
          if (observable instanceof ComputedValue) {
            // computed values are automatically teared down when the last observer leaves
            // this process happens recursively, this computed might be the last observabe of another, etc..
            observable.suspend_();
          }
        }
      }
      globalState.pendingUnobservations = [];
    }
  }
  function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
      /**
       * Simple optimization, give each derivation run an unique id (runId)
       * Check if last time this observable was accessed the same runId is used
       * if this is the case, the relation is already known
       */
      if (derivation.runId_ !== observable.lastAccessedBy_) {
        observable.lastAccessedBy_ = derivation.runId_;
        // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
        derivation.newObserving_[derivation.unboundDepsCount_++] = observable;
        if (!observable.isBeingObserved && globalState.trackingContext) {
          observable.isBeingObserved = true;
          observable.onBO();
        }
      }
      return observable.isBeingObserved;
    } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
      queueForUnobservation(observable);
    }
    return false;
  }
  // function invariantLOS(observable: IObservable, msg: string) {
  //     // it's expensive so better not run it in produciton. but temporarily helpful for testing
  //     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
  //     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
  //     throw new Error(
  //         "lowestObserverState is wrong for " +
  //             msg +
  //             " because " +
  //             min +
  //             " < " +
  //             observable.lowestObserverState
  //     )
  // }
  /**
   * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
   * It will propagate changes to observers from previous run
   * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
   * Hopefully self reruning autoruns aren't a feature people should depend on
   * Also most basic use cases should be ok
   */
  // Called by Atom when its value changes
  function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
      return;
    }
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        d.onBecomeStale_();
      }
      d.dependenciesState_ = IDerivationState_.STALE_;
    });
    // invariantLOS(observable, "changed end");
  }
  // Called by ComputedValue when it recalculate and its value changed
  function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
      return;
    }
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
        d.dependenciesState_ = IDerivationState_.STALE_;
      } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
      ) {
        observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      }
    });
    // invariantLOS(observable, "confirmed end");
  }
  // Used by computed when its dependency changed, but we don't wan't to immediately recompute.
  function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
      return;
    }
    observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
        d.onBecomeStale_();
      }
    });
    // invariantLOS(observable, "maybe end");
  }

  var Reaction = /*#__PURE__*/function () {
    function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
      if (name_ === void 0) {
        name_ = "Reaction";
      }
      this.name_ = void 0;
      this.onInvalidate_ = void 0;
      this.errorHandler_ = void 0;
      this.requiresObservable_ = void 0;
      this.observing_ = [];
      // nodes we are looking at. Our value depends on these nodes
      this.newObserving_ = [];
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.runId_ = 0;
      this.unboundDepsCount_ = 0;
      this.flags_ = 0;
      this.isTracing_ = TraceMode.NONE;
      this.name_ = name_;
      this.onInvalidate_ = onInvalidate_;
      this.errorHandler_ = errorHandler_;
      this.requiresObservable_ = requiresObservable_;
    }
    var _proto = Reaction.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      this.schedule_();
    };
    _proto.schedule_ = function schedule_() {
      if (!this.isScheduled) {
        this.isScheduled = true;
        globalState.pendingReactions.push(this);
        runReactions();
      }
    }
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */;
    _proto.runReaction_ = function runReaction_() {
      if (!this.isDisposed) {
        startBatch();
        this.isScheduled = false;
        var prev = globalState.trackingContext;
        globalState.trackingContext = this;
        if (shouldCompute(this)) {
          this.isTrackPending = true;
          try {
            this.onInvalidate_();
            if ("production" !== "production" && this.isTrackPending && isSpyEnabled()) ;
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }
        globalState.trackingContext = prev;
        endBatch();
      }
    };
    _proto.track = function track(fn) {
      if (this.isDisposed) {
        return;
        // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
      }
      startBatch();
      this.isRunning = true;
      var prevReaction = globalState.trackingContext; // reactions could create reactions...
      globalState.trackingContext = this;
      var result = trackDerivedFunction(this, fn, undefined);
      globalState.trackingContext = prevReaction;
      this.isRunning = false;
      this.isTrackPending = false;
      if (this.isDisposed) {
        // disposed during last run. Clean up everything that was bound after the dispose call.
        clearObserving(this);
      }
      if (isCaughtException(result)) {
        this.reportExceptionInDerivation_(result.cause);
      }
      endBatch();
    };
    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
      var _this = this;
      if (this.errorHandler_) {
        this.errorHandler_(error, this);
        return;
      }
      if (globalState.disableErrorBoundaries) {
        throw error;
      }
      var message = "[mobx] uncaught error in '" + this + "'";
      if (!globalState.suppressReactionErrors) {
        console.error(message, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
      } // prettier-ignore
      globalState.globalReactionErrorHandlers.forEach(function (f) {
        return f(error, _this);
      });
    };
    _proto.dispose = function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        if (!this.isRunning) {
          // if disposed while running, clean up later. Maybe not optimal, but rare case
          startBatch();
          clearObserving(this);
          endBatch();
        }
      }
    };
    _proto.getDisposer_ = function getDisposer_(abortSignal) {
      var _this2 = this;
      var dispose = function dispose() {
        _this2.dispose();
        abortSignal == null || abortSignal.removeEventListener == null || abortSignal.removeEventListener("abort", dispose);
      };
      abortSignal == null || abortSignal.addEventListener == null || abortSignal.addEventListener("abort", dispose);
      dispose[$mobx] = this;
      if ("dispose" in Symbol && typeof Symbol.dispose === "symbol") {
        dispose[Symbol.dispose] = dispose;
      }
      return dispose;
    };
    _proto.toString = function toString() {
      return "Reaction[" + this.name_ + "]";
    };
    _proto.trace = function trace$1(enterBreakPoint) {
    };
    return _createClass(Reaction, [{
      key: "isDisposed",
      get: function get() {
        return getFlag(this.flags_, Reaction.isDisposedMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Reaction.isDisposedMask_, newValue);
      }
    }, {
      key: "isScheduled",
      get: function get() {
        return getFlag(this.flags_, Reaction.isScheduledMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Reaction.isScheduledMask_, newValue);
      }
    }, {
      key: "isTrackPending",
      get: function get() {
        return getFlag(this.flags_, Reaction.isTrackPendingMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Reaction.isTrackPendingMask_, newValue);
      }
    }, {
      key: "isRunning",
      get: function get() {
        return getFlag(this.flags_, Reaction.isRunningMask_);
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Reaction.isRunningMask_, newValue);
      }
    }, {
      key: "diffValue",
      get: function get() {
        return getFlag(this.flags_, Reaction.diffValueMask_) ? 1 : 0;
      },
      set: function set(newValue) {
        this.flags_ = setFlag(this.flags_, Reaction.diffValueMask_, newValue === 1 ? true : false);
      }
    }]);
  }();
  Reaction.isDisposedMask_ = 1;
  Reaction.isScheduledMask_ = 2;
  Reaction.isTrackPendingMask_ = 4;
  Reaction.isRunningMask_ = 8;
  Reaction.diffValueMask_ = 16;
  /**
   * Magic number alert!
   * Defines within how many times a reaction is allowed to re-trigger itself
   * until it is assumed that this is gonna be a never ending loop...
   */
  var MAX_REACTION_ITERATIONS = 100;
  var reactionScheduler = function reactionScheduler(f) {
    return f();
  };
  function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions) {
      return;
    }
    reactionScheduler(runReactionsHelper);
  }
  function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
      if (++iterations === MAX_REACTION_ITERATIONS) {
        console.error("[mobx] cycle in reaction: " + allReactions[0]);
        allReactions.splice(0); // clear reactions
      }
      var remainingReactions = allReactions.splice(0);
      for (var i = 0, l = remainingReactions.length; i < l; i++) {
        remainingReactions[i].runReaction_();
      }
    }
    globalState.isRunningReactions = false;
  }
  var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);

  function isSpyEnabled() {
    return "production" !== "production" ;
  }
  function spyReport(event) {
    {
      return;
    } // dead code elimination can do the rest
  }
  function spyReportStart(event) {
    {
      return;
    }
  }
  function spyReportEnd(change) {
    {
      return;
    }
  }
  function spy(listener) {
    {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function () {};
    }
  }

  var ACTION = "action";
  var ACTION_BOUND = "action.bound";
  var AUTOACTION = "autoAction";
  var AUTOACTION_BOUND = "autoAction.bound";
  var DEFAULT_ACTION_NAME = "<unnamed action>";
  var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
  var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
    bound: true
  });
  var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
    autoAction: true
  });
  var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: true,
    bound: true
  });
  function createActionFactory(autoAction) {
    var res = function action(arg1, arg2) {
      // action(fn() {})
      if (isFunction(arg1)) {
        return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction);
      }
      // action("name", fn() {})
      if (isFunction(arg2)) {
        return createAction(arg1, arg2, autoAction);
      }
      // @action (2022.3 Decorators)
      if (is20223Decorator(arg2)) {
        return (autoAction ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
      }
      // @action
      if (isStringish(arg2)) {
        return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
      }
      // action("name") & @action("name")
      if (isStringish(arg1)) {
        return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
          name: arg1,
          autoAction: autoAction
        }));
      }
    };
    return res;
  }
  var action = /*#__PURE__*/createActionFactory(false);
  Object.assign(action, actionAnnotation);
  var autoAction = /*#__PURE__*/createActionFactory(true);
  Object.assign(autoAction, autoActionAnnotation);
  action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
  autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
  function isAction(thing) {
    return isFunction(thing) && thing.isMobxAction === true;
  }

  /**
   * Creates a named reactive view and keeps it alive, so that the view is always
   * updated if one of the dependencies changes, even when the view is not further used by something else.
   * @param view The reactive view
   * @returns disposer function, which can be used to stop the view from being updated in the future.
   */
  function autorun(view, opts) {
    var _opts$name, _opts, _opts2, _opts3;
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : "Autorun";
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
      // normal autorun
      reaction = new Reaction(name, function () {
        this.track(reactionRunner);
      }, opts.onError, opts.requiresObservable);
    } else {
      var scheduler = createSchedulerFromOptions(opts);
      // debounced autorun
      var isScheduled = false;
      reaction = new Reaction(name, function () {
        if (!isScheduled) {
          isScheduled = true;
          scheduler(function () {
            isScheduled = false;
            if (!reaction.isDisposed) {
              reaction.track(reactionRunner);
            }
          });
        }
      }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
      view(reaction);
    }
    if (!((_opts2 = opts) != null && (_opts2 = _opts2.signal) != null && _opts2.aborted)) {
      reaction.schedule_();
    }
    return reaction.getDisposer_((_opts3 = opts) == null ? void 0 : _opts3.signal);
  }
  var run = function run(f) {
    return f();
  };
  function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
      return setTimeout(f, opts.delay);
    } : run;
  }
  function reaction(expression, effect, opts) {
    var _opts$name2, _opts4, _opts5;
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    var name = (_opts$name2 = opts.name) != null ? _opts$name2 : "Reaction";
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
    var r = new Reaction(name, function () {
      if (firstTime || runSync) {
        reactionRunner();
      } else if (!isScheduled) {
        isScheduled = true;
        scheduler(reactionRunner);
      }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
      isScheduled = false;
      if (r.isDisposed) {
        return;
      }
      var changed = false;
      var oldValue = value;
      r.track(function () {
        var nextValue = allowStateChanges(false, function () {
          return expression(r);
        });
        changed = firstTime || !equals(value, nextValue);
        value = nextValue;
      });
      if (firstTime && opts.fireImmediately) {
        effectAction(value, oldValue, r);
      } else if (!firstTime && changed) {
        effectAction(value, oldValue, r);
      }
      firstTime = false;
    }
    if (!((_opts4 = opts) != null && (_opts4 = _opts4.signal) != null && _opts4.aborted)) {
      r.schedule_();
    }
    return r.getDisposer_((_opts5 = opts) == null ? void 0 : _opts5.signal);
  }
  function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
      try {
        return baseFn.apply(this, arguments);
      } catch (e) {
        errorHandler.call(this, e);
      }
    };
  }

  var ON_BECOME_OBSERVED = "onBO";
  var ON_BECOME_UNOBSERVED = "onBUO";
  function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
  }
  function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
  }
  function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";
    if (atom[listenersKey]) {
      atom[listenersKey].add(cb);
    } else {
      atom[listenersKey] = new Set([cb]);
    }
    return function () {
      var hookListeners = atom[listenersKey];
      if (hookListeners) {
        hookListeners["delete"](cb);
        if (hookListeners.size === 0) {
          delete atom[listenersKey];
        }
      }
    };
  }

  function extendObservable(target, properties, annotations, options) {
    // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)
    var descriptors = getOwnPropertyDescriptors(properties);
    initObservable(function () {
      var adm = asObservableObject(target, options)[$mobx];
      ownKeys(descriptors).forEach(function (key) {
        adm.extend_(key, descriptors[key],
        // must pass "undefined" for { key: undefined }
        !annotations ? true : key in annotations ? annotations[key] : true);
      });
    });
    return target;
  }

  var generatorId = 0;
  var FlowCancellationError = /*#__PURE__*/function (_Error) {
    function FlowCancellationError() {
      var _this;
      _this = _Error.call(this, "FLOW_CANCELLED") || this;
      Object.setPrototypeOf(_this, (this instanceof FlowCancellationError ? this.constructor : void 0).prototype);
      _this.name = "FlowCancellationError";
      return _this;
    }
    _inheritsLoose(FlowCancellationError, _Error);
    var _proto = FlowCancellationError.prototype;
    _proto.toString = function toString() {
      return "Error: " + this.message;
    };
    return FlowCancellationError;
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
  var flowBoundAnnotation = /*#__PURE__*/createFlowAnnotation("flow.bound", {
    bound: true
  });
  var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
    // @flow (2022.3 Decorators)
    if (is20223Decorator(arg2)) {
      return flowAnnotation.decorate_20223_(arg1, arg2);
    }
    // @flow
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, flowAnnotation);
    }
    var generator = arg1;
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    var res = function res() {
      var ctx = this;
      var args = arguments;
      var runId = ++generatorId;
      var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
      var rejector;
      var pendingPromise = undefined;
      var promise = new Promise(function (resolve, reject) {
        var stepId = 0;
        rejector = reject;
        function onFulfilled(res) {
          pendingPromise = undefined;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function onRejected(err) {
          pendingPromise = undefined;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function next(ret) {
          if (isFunction(ret == null ? void 0 : ret.then)) {
            // an async iterator
            ret.then(next, reject);
            return;
          }
          if (ret.done) {
            return resolve(ret.value);
          }
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }
        onFulfilled(undefined); // kick off the process
      });
      promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
        try {
          if (pendingPromise) {
            cancelPromise(pendingPromise);
          }
          // Finally block can return (or yield) stuff..
          var _res = gen["return"](undefined);
          // eat anything that promise would do, it's cancelled!
          var yieldedPromise = Promise.resolve(_res.value);
          yieldedPromise.then(noop, noop);
          cancelPromise(yieldedPromise); // maybe it can be cancelled :)
          // reject our original promise
          rejector(new FlowCancellationError());
        } catch (e) {
          rejector(e); // there could be a throwing finally block
        }
      });
      return promise;
    };
    res.isMobXFlow = true;
    return res;
  }, flowAnnotation);
  flow.bound = /*#__PURE__*/createDecoratorAnnotation(flowBoundAnnotation);
  function cancelPromise(promise) {
    if (isFunction(promise.cancel)) {
      promise.cancel();
    }
  }
  function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
  }

  function _isObservable(value, property) {
    if (!value) {
      return false;
    }
    if (property !== undefined) {
      if (isObservableObject(value)) {
        return value[$mobx].values_.has(property);
      }
      return false;
    }
    // For first check, see #701
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
  }
  function isObservable(value) {
    return _isObservable(value);
  }

  /**
   * During a transaction no views are updated until the end of the transaction.
   * The transaction will be run synchronously nonetheless.
   *
   * @param action a function that updates some reactive state
   * @returns any value that was returned by the 'action' parameter.
   */
  function transaction(action, thisArg) {
    if (thisArg === void 0) {
      thisArg = undefined;
    }
    startBatch();
    try {
      return action.apply(thisArg);
    } finally {
      endBatch();
    }
  }

  function getAdm(target) {
    return target[$mobx];
  }
  // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
  // and skip either the internal values map, or the base object with its property descriptors!
  var objectProxyTraps = {
    has: function has(target, name) {
      return getAdm(target).has_(name);
    },
    get: function get(target, name) {
      return getAdm(target).get_(name);
    },
    set: function set(target, name, value) {
      var _getAdm$set_;
      if (!isStringish(name)) {
        return false;
      }
      // null (intercepted) -> true (success)
      return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
    },
    deleteProperty: function deleteProperty(target, name) {
      var _getAdm$delete_;
      if (!isStringish(name)) {
        return false;
      }
      // null (intercepted) -> true (success)
      return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
    },
    defineProperty: function defineProperty(target, name, descriptor) {
      var _getAdm$definePropert;
      // null (intercepted) -> true (success)
      return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
    },
    ownKeys: function ownKeys(target) {
      return getAdm(target).ownKeys_();
    },
    preventExtensions: function preventExtensions(target) {
      die(13);
    }
  };
  function asDynamicObservableObject(target, options) {
    var _target$$mobx, _target$$mobx$proxy_;
    assertProxies();
    target = asObservableObject(target, options);
    return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
  }

  function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
  }
  function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function () {
      var idx = interceptors.indexOf(handler);
      if (idx !== -1) {
        interceptors.splice(idx, 1);
      }
    });
  }
  function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
      // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
      var interceptors = [].concat(interceptable.interceptors_ || []);
      for (var i = 0, l = interceptors.length; i < l; i++) {
        change = interceptors[i](change);
        if (change && !change.type) {
          die(14);
        }
        if (!change) {
          break;
        }
      }
      return change;
    } finally {
      untrackedEnd(prevU);
    }
  }

  function hasListeners(listenable) {
    return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
  }
  function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function () {
      var idx = listeners.indexOf(handler);
      if (idx !== -1) {
        listeners.splice(idx, 1);
      }
    });
  }
  function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) {
      return;
    }
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i](change);
    }
    untrackedEnd(prevU);
  }

  var SPLICE = "splice";
  var UPDATE = "update";
  var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
  var arrayTraps = {
    get: function get(target, name) {
      var adm = target[$mobx];
      if (name === $mobx) {
        return adm;
      }
      if (name === "length") {
        return adm.getArrayLength_();
      }
      if (typeof name === "string" && !isNaN(name)) {
        return adm.get_(parseInt(name));
      }
      if (hasProp(arrayExtensions, name)) {
        return arrayExtensions[name];
      }
      return target[name];
    },
    set: function set(target, name, value) {
      var adm = target[$mobx];
      if (name === "length") {
        adm.setArrayLength_(value);
      }
      if (typeof name === "symbol" || isNaN(name)) {
        target[name] = value;
      } else {
        // numeric string
        adm.set_(parseInt(name), value);
      }
      return true;
    },
    preventExtensions: function preventExtensions() {
      die(15);
    }
  };
  var ObservableArrayAdministration = /*#__PURE__*/function () {
    function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
      if (name === void 0) {
        name = "ObservableArray";
      }
      this.owned_ = void 0;
      this.legacyMode_ = void 0;
      this.atom_ = void 0;
      this.values_ = [];
      // this is the prop that gets proxied, so can't replace it!
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.enhancer_ = void 0;
      this.dehancer = void 0;
      this.proxy_ = void 0;
      this.lastKnownLength_ = 0;
      this.owned_ = owned_;
      this.legacyMode_ = legacyMode_;
      this.atom_ = new Atom(name);
      this.enhancer_ = function (newV, oldV) {
        return enhancer(newV, oldV, "ObservableArray[..]");
      };
    }
    var _proto = ObservableArrayAdministration.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.dehanceValues_ = function dehanceValues_(values) {
      if (this.dehancer !== undefined && values.length > 0) {
        return values.map(this.dehancer);
      }
      return values;
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === void 0) {
        fireImmediately = false;
      }
      if (fireImmediately) {
        listener({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        });
      }
      return registerListener(this, listener);
    };
    _proto.getArrayLength_ = function getArrayLength_() {
      this.atom_.reportObserved();
      return this.values_.length;
    };
    _proto.setArrayLength_ = function setArrayLength_(newLength) {
      if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
        die("Out of range: " + newLength);
      }
      var currentLength = this.values_.length;
      if (newLength === currentLength) {
        return;
      } else if (newLength > currentLength) {
        var newItems = new Array(newLength - currentLength);
        for (var i = 0; i < newLength - currentLength; i++) {
          newItems[i] = undefined;
        } // No Array.fill everywhere...
        this.spliceWithArray_(currentLength, 0, newItems);
      } else {
        this.spliceWithArray_(newLength, currentLength - newLength);
      }
    };
    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
      if (oldLength !== this.lastKnownLength_) {
        die(16);
      }
      this.lastKnownLength_ += delta;
      if (this.legacyMode_ && delta > 0) {
        reserveArrayBuffer(oldLength + delta + 1);
      }
    };
    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
      var _this = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      var length = this.values_.length;
      if (index === undefined) {
        index = 0;
      } else if (index > length) {
        index = length;
      } else if (index < 0) {
        index = Math.max(0, length + index);
      }
      if (arguments.length === 1) {
        deleteCount = length - index;
      } else if (deleteCount === undefined || deleteCount === null) {
        deleteCount = 0;
      } else {
        deleteCount = Math.max(0, Math.min(deleteCount, length - index));
      }
      if (newItems === undefined) {
        newItems = EMPTY_ARRAY;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_,
          type: SPLICE,
          index: index,
          removedCount: deleteCount,
          added: newItems
        });
        if (!change) {
          return EMPTY_ARRAY;
        }
        deleteCount = change.removedCount;
        newItems = change.added;
      }
      newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
        return _this.enhancer_(v, undefined);
      });
      if (this.legacyMode_ || "production" !== "production") {
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
      }
      var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
      if (deleteCount !== 0 || newItems.length !== 0) {
        this.notifyArraySplice_(index, newItems, res);
      }
      return this.dehanceValues_(res);
    };
    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
      if (newItems.length < MAX_SPLICE_SIZE) {
        var _this$values_;
        return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
      } else {
        // The items removed by the splice
        var res = this.values_.slice(index, index + deleteCount);
        // The items that that should remain at the end of the array
        var oldItems = this.values_.slice(index + deleteCount);
        // New length is the previous length + addition count - deletion count
        this.values_.length += newItems.length - deleteCount;
        for (var i = 0; i < newItems.length; i++) {
          this.values_[index + i] = newItems[i];
        }
        for (var _i = 0; _i < oldItems.length; _i++) {
          this.values_[index + newItems.length + _i] = oldItems[_i];
        }
        return res;
      }
    };
    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        type: UPDATE,
        debugObjectName: this.atom_.name_,
        index: index,
        newValue: newValue,
        oldValue: oldValue
      } : null;
      this.atom_.reportChanged();
      if (notify) {
        notifyListeners(this, change);
      }
    };
    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: SPLICE,
        index: index,
        removed: removed,
        added: added,
        removedCount: removed.length,
        addedCount: added.length
      } : null;
      this.atom_.reportChanged();
      // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
      if (notify) {
        notifyListeners(this, change);
      }
    };
    _proto.get_ = function get_(index) {
      if (this.legacyMode_ && index >= this.values_.length) {
        console.warn("[mobx] Out of bounds read: " + index);
        return undefined;
      }
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    };
    _proto.set_ = function set_(index, newValue) {
      var values = this.values_;
      if (this.legacyMode_ && index > values.length) {
        // out of bounds
        die(17, index, values.length);
      }
      if (index < values.length) {
        // update at index in range
        checkIfStateModificationsAreAllowed(this.atom_);
        var oldValue = values[index];
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: UPDATE,
            object: this.proxy_,
            // since "this" is the real array we need to pass its proxy
            index: index,
            newValue: newValue
          });
          if (!change) {
            return;
          }
          newValue = change.newValue;
        }
        newValue = this.enhancer_(newValue, oldValue);
        var changed = newValue !== oldValue;
        if (changed) {
          values[index] = newValue;
          this.notifyArrayChildUpdate_(index, newValue, oldValue);
        }
      } else {
        // For out of bound index, we don't create an actual sparse array,
        // but rather fill the holes with undefined (same as setArrayLength_).
        // This could be considered a bug.
        var newItems = new Array(index + 1 - values.length);
        for (var i = 0; i < newItems.length - 1; i++) {
          newItems[i] = undefined;
        } // No Array.fill everywhere...
        newItems[newItems.length - 1] = newValue;
        this.spliceWithArray_(values.length, 0, newItems);
      }
    };
    return ObservableArrayAdministration;
  }();
  function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    assertProxies();
    return initObservable(function () {
      var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
      addHiddenFinalProp(adm.values_, $mobx, adm);
      var proxy = new Proxy(adm.values_, arrayTraps);
      adm.proxy_ = proxy;
      if (initialValues && initialValues.length) {
        adm.spliceWithArray_(0, 0, initialValues);
      }
      return proxy;
    });
  }
  // eslint-disable-next-line
  var arrayExtensions = {
    clear: function clear() {
      return this.splice(0);
    },
    replace: function replace(newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
      return this.slice();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function splice(index, deleteCount) {
      for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        newItems[_key - 2] = arguments[_key];
      }
      var adm = this[$mobx];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return adm.spliceWithArray_(index);
        case 2:
          return adm.spliceWithArray_(index, deleteCount);
      }
      return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
      return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
      var adm = this[$mobx];
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }
      adm.spliceWithArray_(adm.values_.length, 0, items);
      return adm.values_.length;
    },
    pop: function pop() {
      return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
      return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
      var adm = this[$mobx];
      for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        items[_key3] = arguments[_key3];
      }
      adm.spliceWithArray_(0, 0, items);
      return adm.values_.length;
    },
    reverse: function reverse() {
      // reverse by default mutates in place before returning the result
      // which makes it both a 'derivation' and a 'mutation'.
      if (globalState.trackingDerivation) {
        die(37, "reverse");
      }
      this.replace(this.slice().reverse());
      return this;
    },
    sort: function sort() {
      // sort by default mutates in place before returning the result
      // which goes against all good practices. Let's not change the array in place!
      if (globalState.trackingDerivation) {
        die(37, "sort");
      }
      var copy = this.slice();
      copy.sort.apply(copy, arguments);
      this.replace(copy);
      return this;
    },
    remove: function remove(value) {
      var adm = this[$mobx];
      var idx = adm.dehanceValues_(adm.values_).indexOf(value);
      if (idx > -1) {
        this.splice(idx, 1);
        return true;
      }
      return false;
    }
  };
  /**
   * Wrap function from prototype
   * Without this, everything works as well, but this works
   * faster as everything works on unproxied values
   */
  addArrayExtension("at", simpleFunc);
  addArrayExtension("concat", simpleFunc);
  addArrayExtension("flat", simpleFunc);
  addArrayExtension("includes", simpleFunc);
  addArrayExtension("indexOf", simpleFunc);
  addArrayExtension("join", simpleFunc);
  addArrayExtension("lastIndexOf", simpleFunc);
  addArrayExtension("slice", simpleFunc);
  addArrayExtension("toString", simpleFunc);
  addArrayExtension("toLocaleString", simpleFunc);
  addArrayExtension("toSorted", simpleFunc);
  addArrayExtension("toSpliced", simpleFunc);
  addArrayExtension("with", simpleFunc);
  // map
  addArrayExtension("every", mapLikeFunc);
  addArrayExtension("filter", mapLikeFunc);
  addArrayExtension("find", mapLikeFunc);
  addArrayExtension("findIndex", mapLikeFunc);
  addArrayExtension("findLast", mapLikeFunc);
  addArrayExtension("findLastIndex", mapLikeFunc);
  addArrayExtension("flatMap", mapLikeFunc);
  addArrayExtension("forEach", mapLikeFunc);
  addArrayExtension("map", mapLikeFunc);
  addArrayExtension("some", mapLikeFunc);
  addArrayExtension("toReversed", mapLikeFunc);
  // reduce
  addArrayExtension("reduce", reduceLikeFunc);
  addArrayExtension("reduceRight", reduceLikeFunc);
  function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") {
      arrayExtensions[funcName] = funcFactory(funcName);
    }
  }
  // Report and delegate to dehanced array
  function simpleFunc(funcName) {
    return function () {
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  // Make sure callbacks receive correct array arg #2326
  function mapLikeFunc(funcName) {
    return function (callback, thisArg) {
      var _this2 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName](function (element, index) {
        return callback.call(thisArg, element, index, _this2);
      });
    };
  }
  // Make sure callbacks receive correct array arg #2326
  function reduceLikeFunc(funcName) {
    return function () {
      var _this3 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      // #2432 - reduce behavior depends on arguments.length
      var callback = arguments[0];
      arguments[0] = function (accumulator, currentValue, index) {
        return callback(accumulator, currentValue, index, _this3);
      };
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
  function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
  }

  var ObservableMapMarker = {};
  var ADD = "add";
  var DELETE = "delete";
  // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
  // But: https://github.com/mobxjs/mobx/issues/1556
  var ObservableMap = /*#__PURE__*/function () {
    function ObservableMap(initialData, enhancer_, name_) {
      var _this = this;
      if (enhancer_ === void 0) {
        enhancer_ = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = "ObservableMap";
      }
      this.enhancer_ = void 0;
      this.name_ = void 0;
      this[$mobx] = ObservableMapMarker;
      this.data_ = void 0;
      this.hasMap_ = void 0;
      // hasMap, not hashMap >-).
      this.keysAtom_ = void 0;
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = enhancer_;
      this.name_ = name_;
      if (!isFunction(Map)) {
        die(18);
      }
      initObservable(function () {
        _this.keysAtom_ = createAtom("production" !== "production" ? _this.name_ + ".keys()" : "ObservableMap.keys()");
        _this.data_ = new Map();
        _this.hasMap_ = new Map();
        if (initialData) {
          _this.merge(initialData);
        }
      });
    }
    var _proto = ObservableMap.prototype;
    _proto.has_ = function has_(key) {
      return this.data_.has(key);
    };
    _proto.has = function has(key) {
      var _this2 = this;
      if (!globalState.trackingDerivation) {
        return this.has_(key);
      }
      var entry = this.hasMap_.get(key);
      if (!entry) {
        var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, "ObservableMap.key?", false);
        this.hasMap_.set(key, newEntry);
        onBecomeUnobserved(newEntry, function () {
          return _this2.hasMap_["delete"](key);
        });
      }
      return entry.get();
    };
    _proto.set = function set(key, value) {
      var hasKey = this.has_(key);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: hasKey ? UPDATE : ADD,
          object: this,
          newValue: value,
          name: key
        });
        if (!change) {
          return this;
        }
        value = change.newValue;
      }
      if (hasKey) {
        this.updateValue_(key, value);
      } else {
        this.addValue_(key, value);
      }
      return this;
    };
    _proto["delete"] = function _delete(key) {
      var _this3 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          name: key
        });
        if (!change) {
          return false;
        }
      }
      if (this.has_(key)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: this.data_.get(key).value_,
          name: key
        } : null;
        transaction(function () {
          var _this3$hasMap_$get;
          _this3.keysAtom_.reportChanged();
          (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null || _this3$hasMap_$get.setNewValue_(false);
          var observable = _this3.data_.get(key);
          observable.setNewValue_(undefined);
          _this3.data_["delete"](key);
        });
        if (notify) {
          notifyListeners(this, _change);
        }
        return true;
      }
      return false;
    };
    _proto.updateValue_ = function updateValue_(key, newValue) {
      var observable = this.data_.get(key);
      newValue = observable.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: UPDATE,
          object: this,
          oldValue: observable.value_,
          name: key,
          newValue: newValue
        } : null;
        observable.setNewValue_(newValue);
        if (notify) {
          notifyListeners(this, change);
        }
      }
    };
    _proto.addValue_ = function addValue_(key, newValue) {
      var _this4 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      transaction(function () {
        var _this4$hasMap_$get;
        var observable = new ObservableValue(newValue, _this4.enhancer_, "ObservableMap.key", false);
        _this4.data_.set(key, observable);
        newValue = observable.value_; // value might have been changed
        (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null || _this4$hasMap_$get.setNewValue_(true);
        _this4.keysAtom_.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        name: key,
        newValue: newValue
      } : null;
      if (notify) {
        notifyListeners(this, change);
      }
    };
    _proto.get = function get(key) {
      if (this.has(key)) {
        return this.dehanceValue_(this.data_.get(key).get());
      }
      return this.dehanceValue_(undefined);
    };
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.keys = function keys() {
      this.keysAtom_.reportObserved();
      return this.data_.keys();
    };
    _proto.values = function values() {
      var self = this;
      var keys = this.keys();
      return makeIterableForMap({
        next: function next() {
          var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;
          return {
            done: done,
            value: done ? undefined : self.get(value)
          };
        }
      });
    };
    _proto.entries = function entries() {
      var self = this;
      var keys = this.keys();
      return makeIterableForMap({
        next: function next() {
          var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;
          return {
            done: done,
            value: done ? undefined : [value, self.get(value)]
          };
        }
      });
    };
    _proto[Symbol.iterator] = function () {
      return this.entries();
    };
    _proto.forEach = function forEach(callback, thisArg) {
      for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
        callback.call(thisArg, value, key, this);
      }
    }
    /** Merge another object into this object, returns this. */;
    _proto.merge = function merge(other) {
      var _this5 = this;
      if (isObservableMap(other)) {
        other = new Map(other);
      }
      transaction(function () {
        if (isPlainObject(other)) {
          getPlainObjectKeys(other).forEach(function (key) {
            return _this5.set(key, other[key]);
          });
        } else if (Array.isArray(other)) {
          other.forEach(function (_ref) {
            var key = _ref[0],
              value = _ref[1];
            return _this5.set(key, value);
          });
        } else if (isES6Map(other)) {
          if (!isPlainES6Map(other)) {
            die(19, other);
          }
          other.forEach(function (value, key) {
            return _this5.set(key, value);
          });
        } else if (other !== null && other !== undefined) {
          die(20, other);
        }
      });
      return this;
    };
    _proto.clear = function clear() {
      var _this6 = this;
      transaction(function () {
        untracked(function () {
          for (var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var key = _step2.value;
            _this6["delete"](key);
          }
        });
      });
    };
    _proto.replace = function replace(values) {
      var _this7 = this;
      // Implementation requirements:
      // - respect ordering of replacement map
      // - allow interceptors to run and potentially prevent individual operations
      // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
      // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
      // - note that result map may differ from replacement map due to the interceptors
      transaction(function () {
        // Convert to map so we can do quick key lookups
        var replacementMap = convertToMap(values);
        var orderedData = new Map();
        // Used for optimization
        var keysReportChangedCalled = false;
        // Delete keys that don't exist in replacement map
        // if the key deletion is prevented by interceptor
        // add entry at the beginning of the result map
        for (var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
          var key = _step3.value;
          // Concurrently iterating/deleting keys
          // iterator should handle this correctly
          if (!replacementMap.has(key)) {
            var deleted = _this7["delete"](key);
            // Was the key removed?
            if (deleted) {
              // _keysAtom.reportChanged() was already called
              keysReportChangedCalled = true;
            } else {
              // Delete prevented by interceptor
              var value = _this7.data_.get(key);
              orderedData.set(key, value);
            }
          }
        }
        // Merge entries
        for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
          var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];
          // We will want to know whether a new key is added
          var keyExisted = _this7.data_.has(_key);
          // Add or update value
          _this7.set(_key, _value);
          // The addition could have been prevent by interceptor
          if (_this7.data_.has(_key)) {
            // The update could have been prevented by interceptor
            // and also we want to preserve existing values
            // so use value from _data map (instead of replacement map)
            var _value2 = _this7.data_.get(_key);
            orderedData.set(_key, _value2);
            // Was a new key added?
            if (!keyExisted) {
              // _keysAtom.reportChanged() was already called
              keysReportChangedCalled = true;
            }
          }
        }
        // Check for possible key order change
        if (!keysReportChangedCalled) {
          if (_this7.data_.size !== orderedData.size) {
            // If size differs, keys are definitely modified
            _this7.keysAtom_.reportChanged();
          } else {
            var iter1 = _this7.data_.keys();
            var iter2 = orderedData.keys();
            var next1 = iter1.next();
            var next2 = iter2.next();
            while (!next1.done) {
              if (next1.value !== next2.value) {
                _this7.keysAtom_.reportChanged();
                break;
              }
              next1 = iter1.next();
              next2 = iter2.next();
            }
          }
        }
        // Use correctly ordered map
        _this7.data_ = orderedData;
      });
      return this;
    };
    _proto.toString = function toString() {
      return "[object ObservableMap]";
    };
    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    _proto.observe_ = function observe_(listener, fireImmediately) {
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    return _createClass(ObservableMap, [{
      key: "size",
      get: function get() {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: Symbol.toStringTag,
      get: function get() {
        return "Map";
      }
    }]);
  }();
  // eslint-disable-next-line
  var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);
  function makeIterableForMap(iterator) {
    iterator[Symbol.toStringTag] = "MapIterator";
    return makeIterable(iterator);
  }
  function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
      return dataStructure;
    } else if (Array.isArray(dataStructure)) {
      return new Map(dataStructure);
    } else if (isPlainObject(dataStructure)) {
      var map = new Map();
      for (var key in dataStructure) {
        map.set(key, dataStructure[key]);
      }
      return map;
    } else {
      return die(21, dataStructure);
    }
  }

  var ObservableSetMarker = {};
  var ObservableSet = /*#__PURE__*/function () {
    function ObservableSet(initialData, enhancer, name_) {
      var _this = this;
      if (enhancer === void 0) {
        enhancer = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = "ObservableSet";
      }
      this.name_ = void 0;
      this[$mobx] = ObservableSetMarker;
      this.data_ = new Set();
      this.atom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = void 0;
      this.name_ = name_;
      if (!isFunction(Set)) {
        die(22);
      }
      this.enhancer_ = function (newV, oldV) {
        return enhancer(newV, oldV, name_);
      };
      initObservable(function () {
        _this.atom_ = createAtom(_this.name_);
        if (initialData) {
          _this.replace(initialData);
        }
      });
    }
    var _proto = ObservableSet.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.clear = function clear() {
      var _this2 = this;
      transaction(function () {
        untracked(function () {
          for (var _iterator = _createForOfIteratorHelperLoose(_this2.data_.values()), _step; !(_step = _iterator()).done;) {
            var value = _step.value;
            _this2["delete"](value);
          }
        });
      });
    };
    _proto.forEach = function forEach(callbackFn, thisArg) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
        var value = _step2.value;
        callbackFn.call(thisArg, value, value, this);
      }
    };
    _proto.add = function add(value) {
      var _this3 = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: ADD,
          object: this,
          newValue: value
        });
        if (!change) {
          return this;
        }
        // implemented reassignment same as it's done for ObservableMap
        value = change.newValue;
      }
      if (!this.has(value)) {
        transaction(function () {
          _this3.data_.add(_this3.enhancer_(value, undefined));
          _this3.atom_.reportChanged();
        });
        var notifySpy = "production" !== "production" ;
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: ADD,
          object: this,
          newValue: value
        } : null;
        if (notify) {
          notifyListeners(this, _change);
        }
      }
      return this;
    };
    _proto["delete"] = function _delete(value) {
      var _this4 = this;
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          oldValue: value
        });
        if (!change) {
          return false;
        }
      }
      if (this.has(value)) {
        var notifySpy = "production" !== "production" ;
        var notify = hasListeners(this);
        var _change2 = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: value
        } : null;
        transaction(function () {
          _this4.atom_.reportChanged();
          _this4.data_["delete"](value);
        });
        if (notify) {
          notifyListeners(this, _change2);
        }
        return true;
      }
      return false;
    };
    _proto.has = function has(value) {
      this.atom_.reportObserved();
      return this.data_.has(this.dehanceValue_(value));
    };
    _proto.entries = function entries() {
      var values = this.values();
      return makeIterableForSet({
        next: function next() {
          var _values$next = values.next(),
            value = _values$next.value,
            done = _values$next.done;
          return !done ? {
            value: [value, value],
            done: done
          } : {
            value: undefined,
            done: done
          };
        }
      });
    };
    _proto.keys = function keys() {
      return this.values();
    };
    _proto.values = function values() {
      this.atom_.reportObserved();
      var self = this;
      var values = this.data_.values();
      return makeIterableForSet({
        next: function next() {
          var _values$next2 = values.next(),
            value = _values$next2.value,
            done = _values$next2.done;
          return !done ? {
            value: self.dehanceValue_(value),
            done: done
          } : {
            value: undefined,
            done: done
          };
        }
      });
    };
    _proto.intersection = function intersection(otherSet) {
      if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
        return otherSet.intersection(this);
      } else {
        var dehancedSet = new Set(this);
        return dehancedSet.intersection(otherSet);
      }
    };
    _proto.union = function union(otherSet) {
      if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
        return otherSet.union(this);
      } else {
        var dehancedSet = new Set(this);
        return dehancedSet.union(otherSet);
      }
    };
    _proto.difference = function difference(otherSet) {
      return new Set(this).difference(otherSet);
    };
    _proto.symmetricDifference = function symmetricDifference(otherSet) {
      if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
        return otherSet.symmetricDifference(this);
      } else {
        var dehancedSet = new Set(this);
        return dehancedSet.symmetricDifference(otherSet);
      }
    };
    _proto.isSubsetOf = function isSubsetOf(otherSet) {
      return new Set(this).isSubsetOf(otherSet);
    };
    _proto.isSupersetOf = function isSupersetOf(otherSet) {
      return new Set(this).isSupersetOf(otherSet);
    };
    _proto.isDisjointFrom = function isDisjointFrom(otherSet) {
      if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
        return otherSet.isDisjointFrom(this);
      } else {
        var dehancedSet = new Set(this);
        return dehancedSet.isDisjointFrom(otherSet);
      }
    };
    _proto.replace = function replace(other) {
      var _this5 = this;
      if (isObservableSet(other)) {
        other = new Set(other);
      }
      transaction(function () {
        if (Array.isArray(other)) {
          _this5.clear();
          other.forEach(function (value) {
            return _this5.add(value);
          });
        } else if (isES6Set(other)) {
          _this5.clear();
          other.forEach(function (value) {
            return _this5.add(value);
          });
        } else if (other !== null && other !== undefined) {
          die("Cannot initialize set from " + other);
        }
      });
      return this;
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };
    _proto.toString = function toString() {
      return "[object ObservableSet]";
    };
    _proto[Symbol.iterator] = function () {
      return this.values();
    };
    return _createClass(ObservableSet, [{
      key: "size",
      get: function get() {
        this.atom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: Symbol.toStringTag,
      get: function get() {
        return "Set";
      }
    }]);
  }();
  // eslint-disable-next-line
  var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);
  function makeIterableForSet(iterator) {
    iterator[Symbol.toStringTag] = "SetIterator";
    return makeIterable(iterator);
  }

  var descriptorCache = /*#__PURE__*/Object.create(null);
  var REMOVE = "remove";
  var ObservableObjectAdministration = /*#__PURE__*/function () {
    function ObservableObjectAdministration(target_, values_, name_,
    // Used anytime annotation is not explicitely provided
    defaultAnnotation_) {
      if (values_ === void 0) {
        values_ = new Map();
      }
      if (defaultAnnotation_ === void 0) {
        defaultAnnotation_ = autoAnnotation;
      }
      this.target_ = void 0;
      this.values_ = void 0;
      this.name_ = void 0;
      this.defaultAnnotation_ = void 0;
      this.keysAtom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.proxy_ = void 0;
      this.isPlainObject_ = void 0;
      this.appliedAnnotations_ = void 0;
      this.pendingKeys_ = void 0;
      this.target_ = target_;
      this.values_ = values_;
      this.name_ = name_;
      this.defaultAnnotation_ = defaultAnnotation_;
      this.keysAtom_ = new Atom("ObservableObject.keys");
      // Optimization: we use this frequently
      this.isPlainObject_ = isPlainObject(this.target_);
    }
    var _proto = ObservableObjectAdministration.prototype;
    _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
      return this.values_.get(key).get();
    };
    _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
      var observable = this.values_.get(key);
      if (observable instanceof ComputedValue) {
        observable.set(newValue);
        return true;
      }
      // intercept
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: newValue
        });
        if (!change) {
          return null;
        }
        newValue = change.newValue;
      }
      newValue = observable.prepareNewValue_(newValue);
      // notify spy & observers
      if (newValue !== globalState.UNCHANGED) {
        var notify = hasListeners(this);
        var notifySpy = "production" !== "production" ;
        var _change = notify || notifySpy ? {
          type: UPDATE,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          oldValue: observable.value_,
          name: key,
          newValue: newValue
        } : null;
        observable.setNewValue_(newValue);
        if (notify) {
          notifyListeners(this, _change);
        }
      }
      return true;
    };
    _proto.get_ = function get_(key) {
      if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
        // Key doesn't exist yet, subscribe for it in case it's added later
        this.has_(key);
      }
      return this.target_[key];
    }
    /**
     * @param {PropertyKey} key
     * @param {any} value
     * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */;
    _proto.set_ = function set_(key, value, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      // Don't use .has(key) - we care about own
      if (hasProp(this.target_, key)) {
        // Existing prop
        if (this.values_.has(key)) {
          // Observable (can be intercepted)
          return this.setObservablePropValue_(key, value);
        } else if (proxyTrap) {
          // Non-observable - proxy
          return Reflect.set(this.target_, key, value);
        } else {
          // Non-observable
          this.target_[key] = value;
          return true;
        }
      } else {
        // New prop
        return this.extend_(key, {
          value: value,
          enumerable: true,
          writable: true,
          configurable: true
        }, this.defaultAnnotation_, proxyTrap);
      }
    }
    // Trap for "in"
  ;
    _proto.has_ = function has_(key) {
      if (!globalState.trackingDerivation) {
        // Skip key subscription outside derivation
        return key in this.target_;
      }
      this.pendingKeys_ || (this.pendingKeys_ = new Map());
      var entry = this.pendingKeys_.get(key);
      if (!entry) {
        entry = new ObservableValue(key in this.target_, referenceEnhancer, "ObservableObject.key?", false);
        this.pendingKeys_.set(key, entry);
      }
      return entry.get();
    }
    /**
     * @param {PropertyKey} key
     * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
     */;
    _proto.make_ = function make_(key, annotation) {
      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }
      if (annotation === false) {
        return;
      }
      if (!(key in this.target_)) {
        var _this$target_$storedA;
        // Throw on missing key, except for decorators:
        // Decorator annotations are collected from whole prototype chain.
        // When called from super() some props may not exist yet.
        // However we don't have to worry about missing prop,
        // because the decorator must have been applied to something.
        if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
          return; // will be annotated by subclass constructor
        } else {
          die(1, annotation.annotationType_, this.name_ + "." + key.toString());
        }
      }
      var source = this.target_;
      while (source && source !== objectPrototype) {
        var descriptor = getDescriptor(source, key);
        if (descriptor) {
          var outcome = annotation.make_(this, key, descriptor, source);
          if (outcome === 0 /* MakeResult.Cancel */) {
            return;
          }
          if (outcome === 1 /* MakeResult.Break */) {
            break;
          }
        }
        source = Object.getPrototypeOf(source);
      }
      recordAnnotationApplied(this, annotation, key);
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */;
    _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }
      if (annotation === false) {
        return this.defineProperty_(key, descriptor, proxyTrap);
      }
      var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
      if (outcome) {
        recordAnnotationApplied(this, annotation, key);
      }
      return outcome;
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */;
    _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      try {
        startBatch();
        // Delete
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        }
        // ADD interceptor
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: descriptor.value
          });
          if (!change) {
            return null;
          }
          var newValue = change.newValue;
          if (descriptor.value !== newValue) {
            descriptor = _extends$2({}, descriptor, {
              value: newValue
            });
          }
        }
        // Define
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        // Notify
        this.notifyPropertyAddition_(key, descriptor.value);
      } finally {
        endBatch();
      }
      return true;
    }
    // If original descriptor becomes relevant, move this to annotation directly
  ;
    _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      try {
        startBatch();
        // Delete
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        }
        // ADD interceptor
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: value
          });
          if (!change) {
            return null;
          }
          value = change.newValue;
        }
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: true,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        };
        // Define
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        var observable = new ObservableValue(value, enhancer, "production" !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
        this.values_.set(key, observable);
        // Notify (value possibly changed by ObservableValue)
        this.notifyPropertyAddition_(key, observable.value_);
      } finally {
        endBatch();
      }
      return true;
    }
    // If original descriptor becomes relevant, move this to annotation directly
  ;
    _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      try {
        startBatch();
        // Delete
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        }
        // ADD interceptor
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: undefined
          });
          if (!change) {
            return null;
          }
        }
        options.name || (options.name = "production" !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key");
        options.context = this.proxy_ || this.target_;
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: false,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        };
        // Define
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        this.values_.set(key, new ComputedValue(options));
        // Notify
        this.notifyPropertyAddition_(key, undefined);
      } finally {
        endBatch();
      }
      return true;
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */;
    _proto.delete_ = function delete_(key, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      // No such prop
      if (!hasProp(this.target_, key)) {
        return true;
      }
      // Intercept
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: REMOVE
        });
        // Cancelled
        if (!change) {
          return null;
        }
      }
      // Delete
      try {
        var _this$pendingKeys_;
        startBatch();
        var notify = hasListeners(this);
        var notifySpy = "production" !== "production" && isSpyEnabled();
        var observable = this.values_.get(key);
        // Value needed for spies/listeners
        var value = undefined;
        // Optimization: don't pull the value unless we will need it
        if (!observable && (notify || notifySpy)) {
          var _getDescriptor;
          value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
        }
        // delete prop (do first, may fail)
        if (proxyTrap) {
          if (!Reflect.deleteProperty(this.target_, key)) {
            return false;
          }
        } else {
          delete this.target_[key];
        }
        // Allow re-annotating this field
        if ("production" !== "production") ;
        // Clear observable
        if (observable) {
          this.values_["delete"](key);
          // for computed, value is undefined
          if (observable instanceof ObservableValue) {
            value = observable.value_;
          }
          // Notify: autorun(() => obj[key]), see #1796
          propagateChanged(observable);
        }
        // Notify "keys/entries/values" observers
        this.keysAtom_.reportChanged();
        // Notify "has" observers
        // "in" as it may still exist in proto
        (_this$pendingKeys_ = this.pendingKeys_) == null || (_this$pendingKeys_ = _this$pendingKeys_.get(key)) == null || _this$pendingKeys_.set(key in this.target_);
        // Notify spies/listeners
        if (notify || notifySpy) {
          var _change2 = {
            type: REMOVE,
            observableKind: "object",
            object: this.proxy_ || this.target_,
            debugObjectName: this.name_,
            oldValue: value,
            name: key
          };
          if ("production" !== "production" && notifySpy) ;
          if (notify) {
            notifyListeners(this, _change2);
          }
          if ("production" !== "production" && notifySpy) ;
        }
      } finally {
        endBatch();
      }
      return true;
    }
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */;
    _proto.observe_ = function observe_(callback, fireImmediately) {
      return registerListener(this, callback);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
      var _this$pendingKeys_2;
      var notify = hasListeners(this);
      var notifySpy = "production" !== "production" ;
      if (notify || notifySpy) {
        var change = notify || notifySpy ? {
          type: ADD,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: value
        } : null;
        if (notify) {
          notifyListeners(this, change);
        }
      }
      (_this$pendingKeys_2 = this.pendingKeys_) == null || (_this$pendingKeys_2 = _this$pendingKeys_2.get(key)) == null || _this$pendingKeys_2.set(true);
      // Notify "keys/entries/values" observers
      this.keysAtom_.reportChanged();
    };
    _proto.ownKeys_ = function ownKeys_() {
      this.keysAtom_.reportObserved();
      return ownKeys(this.target_);
    };
    _proto.keys_ = function keys_() {
      // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
      // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
      // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
      // We choose to over-report in Object.keys(object), because:
      // - typically it's used with simple data objects
      // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
      this.keysAtom_.reportObserved();
      return Object.keys(this.target_);
    };
    return ObservableObjectAdministration;
  }();
  function asObservableObject(target, options) {
    var _options$name;
    if (hasProp(target, $mobx)) {
      return target;
    }
    var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : "ObservableObject";
    var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
    addHiddenProp(target, $mobx, adm);
    return target;
  }
  var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
  function getCachedObservablePropDescriptor(key) {
    return descriptorCache[key] || (descriptorCache[key] = {
      get: function get() {
        return this[$mobx].getObservablePropValue_(key);
      },
      set: function set(value) {
        return this[$mobx].setObservablePropValue_(key, value);
      }
    });
  }
  function isObservableObject(thing) {
    if (isObject(thing)) {
      return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
  }
  function recordAnnotationApplied(adm, annotation, key) {
    var _adm$target_$storedAn;
    // Remove applied decorator annotation so we don't try to apply it again in subclass constructor
    (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null || delete _adm$target_$storedAn[key];
  }

  // Bug in safari 9.* (or iOS 9 safari mobile). See #364
  var ENTRY_0 = /*#__PURE__*/createArrayEntryDescriptor(0);
  var safariPrototypeSetterInheritanceBug = /*#__PURE__*/function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
      set: function set() {
        v = true;
      }
    });
    Object.create(p)["0"] = 1;
    return v === false;
  }();
  /**
   * This array buffer contains two lists of properties, so that all arrays
   * can recycle their property definitions, which significantly improves performance of creating
   * properties on the fly.
   */
  var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
  // Typescript workaround to make sure ObservableArray extends Array
  var StubArray = function StubArray() {};
  function inherit(ctor, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ctor.prototype, proto);
    } else if (ctor.prototype.__proto__ !== undefined) {
      ctor.prototype.__proto__ = proto;
    } else {
      ctor.prototype = proto;
    }
  }
  inherit(StubArray, Array.prototype);
  // Weex proto freeze protection was here,
  // but it is unclear why the hack is need as MobX never changed the prototype
  // anyway, so removed it in V6
  var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
    function LegacyObservableArray(initialValues, enhancer, name, owned) {
      var _this;
      if (name === void 0) {
        name = "ObservableArray";
      }
      if (owned === void 0) {
        owned = false;
      }
      _this = _StubArray.call(this) || this;
      initObservable(function () {
        var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
        adm.proxy_ = _this;
        addHiddenFinalProp(_this, $mobx, adm);
        if (initialValues && initialValues.length) {
          // @ts-ignore
          _this.spliceWithArray(0, 0, initialValues);
        }
        if (safariPrototypeSetterInheritanceBug) {
          // Seems that Safari won't use numeric prototype setter until any * numeric property is
          // defined on the instance. After that it works fine, even if this property is deleted.
          Object.defineProperty(_this, "0", ENTRY_0);
        }
      });
      return _this;
    }
    _inheritsLoose(LegacyObservableArray, _StubArray);
    var _proto = LegacyObservableArray.prototype;
    _proto.concat = function concat() {
      this[$mobx].atom_.reportObserved();
      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
      }
      return Array.prototype.concat.apply(this.slice(),
      //@ts-ignore
      arrays.map(function (a) {
        return isObservableArray(a) ? a.slice() : a;
      }));
    };
    _proto[Symbol.iterator] = function () {
      var self = this;
      var nextIndex = 0;
      return makeIterable({
        next: function next() {
          return nextIndex < self.length ? {
            value: self[nextIndex++],
            done: false
          } : {
            done: true,
            value: undefined
          };
        }
      });
    };
    return _createClass(LegacyObservableArray, [{
      key: "length",
      get: function get() {
        return this[$mobx].getArrayLength_();
      },
      set: function set(newLength) {
        this[$mobx].setArrayLength_(newLength);
      }
    }, {
      key: Symbol.toStringTag,
      get: function get() {
        return "Array";
      }
    }]);
  }(StubArray);
  Object.entries(arrayExtensions).forEach(function (_ref) {
    var prop = _ref[0],
      fn = _ref[1];
    if (prop !== "concat") {
      addHiddenProp(LegacyObservableArray.prototype, prop, fn);
    }
  });
  function createArrayEntryDescriptor(index) {
    return {
      enumerable: false,
      configurable: true,
      get: function get() {
        return this[$mobx].get_(index);
      },
      set: function set(value) {
        this[$mobx].set_(index, value);
      }
    };
  }
  function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
  }
  function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
      for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
        createArrayBufferItem(index);
      }
      OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
  }
  reserveArrayBuffer(1000);
  function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
  }

  function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
      if (isObservableArray(thing)) {
        if (property !== undefined) {
          die(23);
        }
        return thing[$mobx].atom_;
      }
      if (isObservableSet(thing)) {
        return thing.atom_;
      }
      if (isObservableMap(thing)) {
        if (property === undefined) {
          return thing.keysAtom_;
        }
        var observable = thing.data_.get(property) || thing.hasMap_.get(property);
        if (!observable) {
          die(25, property, getDebugName(thing));
        }
        return observable;
      }
      if (isObservableObject(thing)) {
        if (!property) {
          return die(26);
        }
        var _observable = thing[$mobx].values_.get(property);
        if (!_observable) {
          die(27, property, getDebugName(thing));
        }
        return _observable;
      }
      if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
      }
    } else if (isFunction(thing)) {
      if (isReaction(thing[$mobx])) {
        // disposer function
        return thing[$mobx];
      }
    }
    die(28);
  }
  function getAdministration(thing, property) {
    if (!thing) {
      die(29);
    }
    if (property !== undefined) {
      return getAdministration(getAtom(thing, property));
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
    if (isObservableMap(thing) || isObservableSet(thing)) {
      return thing;
    }
    if (thing[$mobx]) {
      return thing[$mobx];
    }
    die(24, thing);
  }
  function getDebugName(thing, property) {
    var named;
    if (property !== undefined) {
      named = getAtom(thing, property);
    } else if (isAction(thing)) {
      return thing.name;
    } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
      named = getAdministration(thing);
    } else {
      // valid for arrays as well
      named = getAtom(thing);
    }
    return named.name_;
  }
  /**
   * Helper function for initializing observable structures, it applies:
   * 1. allowStateChanges so we don't violate enforceActions.
   * 2. untracked so we don't accidentaly subscribe to anything observable accessed during init in case the observable is created inside derivation.
   * 3. batch to avoid state version updates
   */
  function initObservable(cb) {
    var derivation = untrackedStart();
    var allowStateChanges = allowStateChangesStart(true);
    startBatch();
    try {
      return cb();
    } finally {
      endBatch();
      allowStateChangesEnd(allowStateChanges);
      untrackedEnd(derivation);
    }
  }

  var toString = objectPrototype.toString;
  function deepEqual(a, b, depth) {
    if (depth === void 0) {
      depth = -1;
    }
    return eq(a, b, depth);
  }
  // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
  // Modified: "Deep compare objects" part to iterate over keys in forward order instead of reverse order.
  //
  // Internal recursive comparison function for `isEqual`.
  function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) {
      return false;
    }
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) {
      return b !== b;
    }
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object") {
      return false;
    }
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) {
      return false;
    }
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case "[object RegExp]":
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case "[object String]":
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return "" + a === "" + b;
      case "[object Number]":
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) {
          return +b !== +b;
        }
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case "[object Symbol]":
        return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
      case "[object Map]":
      case "[object Set]":
        // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
        // Hide this extra level by increasing the depth.
        if (depth >= 0) {
          depth++;
        }
        break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object") {
        return false;
      }
      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor,
        bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
        return false;
      }
    }
    if (depth === 0) {
      return false;
    } else if (depth < 0) {
      depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) {
        return bStack[length] === b;
      }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) {
        return false;
      }
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
          return false;
        }
      }
    } else {
      // Deep compare objects.
      var keys = Object.keys(a);
      var _length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (Object.keys(b).length !== _length) {
        return false;
      }
      for (var i = 0; i < _length; i++) {
        // Deep compare each member
        var key = keys[i];
        if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
          return false;
        }
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  }
  function unwrap(a) {
    if (isObservableArray(a)) {
      return a.slice();
    }
    if (isES6Map(a) || isObservableMap(a)) {
      return Array.from(a.entries());
    }
    if (isES6Set(a) || isObservableSet(a)) {
      return Array.from(a.entries());
    }
    return a;
  }

  var _getGlobal$Iterator;
  // safely get iterator prototype if available
  var maybeIteratorPrototype = ((_getGlobal$Iterator = getGlobal().Iterator) == null ? void 0 : _getGlobal$Iterator.prototype) || {};
  function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return Object.assign(Object.create(maybeIteratorPrototype), iterator);
  }
  function getSelf() {
    return this;
  }

  /**
   * (c) Michel Weststrate 2015 - 2020
   * MIT Licensed
   *
   * Welcome to the mobx sources! To get a global overview of how MobX internally works,
   * this is a good place to start:
   * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
   *
   * Source folders:
   * ===============
   *
   * - api/     Most of the public static methods exposed by the module can be found here.
   * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
   * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
   * - utils/   Utility stuff.
   *
   */
  ["Symbol", "Map", "Set"].forEach(function (m) {
    var g = getGlobal();
    if (typeof g[m] === "undefined") {
      die("MobX requires global '" + m + "' to be available or polyfilled");
    }
  });
  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy: spy,
      extras: {
        getDebugName: getDebugName
      },
      $mobx: $mobx
    });
  }

  const gameDetailsRootClass = 'game-details-modal-root';
  const GameDetailsItem = ({ serverAPI, shortname, initActionSet, closeModal }) => {
      const logger = new Logger("GameDetailsItem");
      logger.log("GameDetailsItem startup");
      const [scriptActions, setScriptActions] = React.useState([]);
      const [gameData, setGameData] = React.useState({ Type: "Empty", Content: { Details: {} } });
      logger.log("GameDetailsItem gameData", gameData);
      const [steamClientID, setSteamClientID] = React.useState("");
      logger.log("GameDetailsItem steamClientID", steamClientID);
      const [installing, setInstalling] = React.useState(false);
      logger.log("GameDetailsItem installing", installing);
      const [shouldUpdateShortcut, setShouldUpdateShortcut] = React.useState(false);
      logger.log("GameDetailsItem shouldUpdateshortcut", shouldUpdateShortcut);
      const originRoute = location.pathname.replace('/routes', '');
      // useEffect(() => reaction(() => SteamUIStore.WindowStore.GamepadUIMainWindowInstance?.LocationPathName, closeModal), []);
      const [progress, setProgress] = React.useState({
          Percentage: 0,
          Description: ""
      });
      logger.log("GameDetailsItem progress", progress);
      const installingRef = React.useRef(installing);
      logger.log("GameDetailsItem installingRef", installingRef);
      React.useEffect(() => {
          logger.log("GameDetailsItem installingRef.current = installing");
          installingRef.current = installing;
      }, [installing]);
      //const [] = useState("Play Game");
      React.useEffect(() => {
          logger.log("GameDetailsItem onInit");
          reaction(() => SteamUIStore.WindowStore.GamepadUIMainWindowInstance?.LocationPathName, closeModal);
          onInit();
      }, []);
      const reloadData = async () => {
          setGameData({ Type: "Empty", Content: { Details: {} } });
          onInit();
      };
      const onInit = async () => {
          try {
              logger.debug("onInit starting");
              const gameDetailsResponse = await executeAction$1(serverAPI, initActionSet, "GetDetails", {
                  shortname: shortname
              });
              logger.debug("onInit res", gameDetailsResponse);
              if (gameDetailsResponse === null) {
                  return;
              }
              setSteamClientID(gameDetailsResponse.Content.SteamClientID);
              logger.debug("onInit finished");
              const scriptActionResponse = await executeAction$1(serverAPI, initActionSet, "GetGameScriptActions", {
                  shortname: shortname
              });
              logger.debug("onInit actionRes", scriptActionResponse);
              if (scriptActionResponse === null) {
                  return;
              }
              logger.debug("onInit scriptActions", scriptActionResponse.Content);
              setGameData(gameDetailsResponse);
              setScriptActions(scriptActionResponse.Content.Actions);
          }
          catch (error) {
              logger.error(error);
          }
      };
      const updateProgress = async () => {
          while (installingRef.current) {
              logger.debug("updateProgress loop starting");
              try {
                  logger.debug("updateProgress");
                  const progressUpdateResponse = await executeAction$1(serverAPI, initActionSet, "GetProgress", {
                      shortname: shortname
                  });
                  if (progressUpdateResponse === null) {
                      return;
                  }
                  const progressUpdate = progressUpdateResponse.Content;
                  if (progressUpdate != null) {
                      logger.debug(progressUpdate);
                      setProgress(progressUpdate);
                      logger.debug(progressUpdate.Percentage);
                      if (progressUpdate.Error != null) {
                          deckyFrontendLib.showModal(window.SP_REACT.createElement(ErrorModal, { Error: { ActionName: "GetProgress", ActionSet: initActionSet, Message: "Installation failed", Data: progressUpdate.Error ?? "" } }));
                          cancelInstall();
                          break;
                      }
                      if (progressUpdate.Percentage >= 100) {
                          if (shouldUpdateShortcut) {
                              await install();
                          }
                          else {
                              setInstalling(false);
                          }
                          break;
                      }
                  }
              }
              catch (e) {
                  logger.error('Error in progress updater', e);
              }
              logger.debug("sleeping");
              await deckyFrontendLib.sleep(1000);
              logger.debug("woke up");
          }
      };
      React.useEffect(() => {
          if (installing) {
              logger.log("GameDetailsItem updateProgress");
              updateProgress().then(() => {
                  logger.log("GameDetailsItem updateProgress finished");
              });
          }
      }, [installing]);
      const uninstall = async () => {
          try {
              await executeAction$1(serverAPI, initActionSet, "Uninstall", {
                  shortname: shortname
              });
              SteamClient.Apps.RemoveShortcut(parseInt(steamClientID));
              setSteamClientID("");
          }
          catch (error) {
              logger.error(error);
          }
      };
      const download = async (update) => {
          try {
              const result = await executeAction$1(serverAPI, initActionSet, update ? "Update" : "Download", {
                  shortname: shortname
              });
              if (result?.Type == "Progress") {
                  setShouldUpdateShortcut(true);
                  setInstalling(true);
              }
          }
          catch (error) {
              logger.error(error);
          }
      };
      const onExeExit = () => {
          deckyFrontendLib.Navigation.CloseSideMenus();
          deckyFrontendLib.Navigation.Navigate(originRoute);
          const modal = deckyFrontendLib.showModal(window.SP_REACT.createElement(GameDetailsItem, { shortname: shortname, initActionSet: initActionSet, serverAPI: serverAPI, closeModal: () => modal.Close() }));
      };
      const runScript = async (actionSet, actionId, args) => {
          const result = await executeAction$1(serverAPI, actionSet, actionId, args, onExeExit);
          if (result?.Type == "Progress") {
              setInstalling(true);
          }
      };
      const cancelInstall = async () => {
          try {
              setInstalling(false);
              await executeAction$1(serverAPI, initActionSet, "CancelInstall", {
                  shortname: shortname
              });
          }
          catch (error) {
              logger.error(error);
          }
      };
      const checkid = async () => {
          let id = parseInt(steamClientID);
          logger.debug("checkid", id);
          const apps = appStore.allApps.filter(app => app.appid == id && app.per_client_data[0].client_name == "This Machine");
          if (apps.length == 0) {
              return await getSteamId();
          }
          else {
              return id;
          }
      };
      const resetLaunchOptions = async () => {
          let id = await checkid();
          logger.debug("resetLaunchOptions id:", id);
          configureShortcut(id);
      };
      const configureShortcut = async (id) => {
          const result = await executeAction$1(serverAPI, initActionSet, "Install", {
              shortname: shortname,
              steamClientID: id.toString()
          });
          if (gameData.Type !== "GameDetails") {
              return;
          }
          const name = gameData.Content.Name; //* this should be dealt with
          const apps = appStore.allApps.filter(app => app.display_name == name && app.app_type == 1073741824 && app.appid != id);
          logger.debug("apps", apps);
          // for (const app of apps) {
          //     logger.debug("removing shortcut", app.appid);
          //     SteamClient.Apps.RemoveShortcut(app.appid);
          // }
          //cleanupIds();
          if (result == null) {
              logger.error("install result is null");
              return;
          }
          if (result.Type === "LaunchOptions") {
              const launchOptions = result.Content;
              //await SteamClient.Apps.SetAppLaunchOptions(gid, "");
              await appDetailsCache.FetchDataForApp(id);
              await appDetailsStore.RequestAppDetails(id);
              SteamClient.Apps.SetAppLaunchOptions(id, launchOptions.Options);
              SteamClient.Apps.SetShortcutName(id, gameData.Content.Name);
              SteamClient.Apps.SetShortcutExe(id, launchOptions.Exe);
              SteamClient.Apps.SetShortcutStartDir(id, launchOptions.WorkingDir);
              const defaultProton = settingsStore.settings.strCompatTool;
              if (launchOptions.Compatibility && launchOptions.Compatibility == true) {
                  logger.debug("Setting compatibility", launchOptions.CompatToolName);
                  if (defaultProton) {
                      SteamClient.Apps.SpecifyCompatTool(id, defaultProton);
                  }
                  else {
                      const compatTools = await SteamClient.Apps.GetAvailableCompatTools(1);
                      const firstAvailable = compatTools.filter(tool => tool.strToolName.startsWith('proton') && tool.strToolName.indexOf('experimental') == -1);
                      if (firstAvailable.length > 0) {
                          SteamClient.Apps.SpecifyCompatTool(id, firstAvailable[0].CompatToolName);
                      }
                  }
              }
              else {
                  logger.debug("Setting compatibility to empty string");
                  SteamClient.Apps.SpecifyCompatTool(id, "");
              }
              setInstalling(false);
              serverAPI.toaster.toast({
                  title: "Junk-Store",
                  body: "Launch options set",
              });
              await appDetailsCache.FetchDataForApp(id);
              await appDetailsStore.RequestAppDetails(id);
              setSteamClientID(id.toString());
          }
          const imageResult = await executeAction$1(serverAPI, initActionSet, "GetJsonImages", {
              shortname: shortname
          });
          if (imageResult == null) {
              logger.error("imageResult is null");
              return;
          }
          const images = imageResult.Content;
          logger.debug("images", images);
          if (images.Grid !== null) {
              logger.debug("setting grid image:" + id);
              await SteamClient.Apps.SetCustomArtworkForApp(id, images.Grid, 'png', 0);
          }
          if (images.Hero !== null) {
              logger.debug("setting hero image:" + id);
              await SteamClient.Apps.SetCustomArtworkForApp(id, images.Hero, "png", 1);
          }
          if (images.Logo !== null) {
              logger.debug("setting logo image:" + id);
              await SteamClient.Apps.SetCustomArtworkForApp(id, images.Logo, "png", 2);
          }
          if (images.GridH !== null) {
              logger.debug("setting gridh image:" + id);
              await SteamClient.Apps.SetCustomArtworkForApp(id, images.GridH, "png", 3);
          }
          //await appDetailsStore.RequestAppDetails(id);
      };
      const getSteamId = async () => {
          const gameDetails = gameData.Content;
          const name = gameDetails.Name;
          logger.debug("GetSteamId name:", name);
          // 
          if (gameDetails.SteamClientID != "") {
              const steamClientID = parseInt(gameDetails.SteamClientID);
              const apps = appStore.allApps.filter(app => app.appid == steamClientID);
              if (apps.length > 0) {
                  return steamClientID;
              }
          }
          // else {
          const id = await SteamClient.Apps.AddShortcut("Name", "/bin/bash", "", "");
          // if (gameData.Type !== "GameDetails") {
          //     return id;
          // }
          await appDetailsCache.FetchDataForApp(id);
          await appDetailsStore.RequestAppDetails(id);
          SteamClient.Apps.SetShortcutName(id, gameData.Content.Name);
          return id;
          //    }
      };
      const install = async () => {
          try {
              const id = await getSteamId();
              await configureShortcut(id);
          }
          catch (error) {
              logger.error(error);
          }
      };
      return (window.SP_REACT.createElement("div", { className: gameDetailsRootClass },
          window.SP_REACT.createElement("style", null, `
                .${gameDetailsRootClass} .GenericConfirmDialog {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    border: 0;
                    border-radius: 0;
                    background: #0e172175;
                    backdrop-filter: blur(8px);
                }
                .${gameDetailsRootClass} .${deckyFrontendLib.gamepadDialogClasses.ModalPosition} {
                    padding: 0;
                }
                .${footerClasses.BasicFooter} {
                    border-top: unset;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `),
          window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, { onCancel: closeModal },
              window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { height: '100%', display: 'flex', flexDirection: 'column' }, onCancelActionDescription: "Go back to Store" },
                  gameData.Type === "Empty" && window.SP_REACT.createElement(Loading, null),
                  gameData.Type === "GameDetails" &&
                      window.SP_REACT.createElement(GameDisplay, { serverApi: serverAPI, name: gameData.Content.Name, shortName: gameData.Content.ShortName, description: gameData.Content.Description, images: gameData.Content.Images, steamClientID: steamClientID, closeModal: closeModal, installing: installing, installer: () => download(false), progress: progress, cancelInstall: cancelInstall, uninstaller: uninstall, editors: gameData.Content.Editors, initActionSet: initActionSet, runner: () => {
                              closeModal && closeModal();
                              runApp(parseInt(steamClientID), onExeExit);
                          }, actions: scriptActions, resetLaunchOptions: resetLaunchOptions, updater: () => download(true), scriptRunner: runScript, reloadData: reloadData, onExeExit: onExeExit })))));
  };

  const LoginContent = ({ serverAPI, initActionSet, initAction }) => {
      const logger = new Logger("LoginContent");
      const [content, setContent] = React.useState({ Type: "Empty", Content: {} });
      const [actionSetName, setActionSetName] = React.useState("");
      const [LoggedIn, setLoggedIn] = React.useState("false");
      const [SteamClientId, setSteamClientId] = React.useState("");
      const originRoute = location.pathname.replace('/routes', '');
      React.useEffect(() => {
          if (actionSetName !== "") {
              updateLoginStatus();
          }
      }, [LoggedIn, actionSetName]);
      const updateLoginStatus = async () => {
          logger.debug("Updating login status with actionSetName: ", actionSetName);
          const result = await executeAction$1(serverAPI, actionSetName, "GetContent", {
              inputData: ""
          });
          if (result == null) {
              logger.error("Login status is null");
              return;
          }
          setContent(result);
          logger.debug("Login status: ", result);
      };
      const onLoginExit = (id) => {
          deckyFrontendLib.Navigation.CloseSideMenus();
          deckyFrontendLib.Navigation.Navigate(originRoute);
          setTimeout(() => {
              SteamClient.Apps.RemoveShortcut(id);
          }, 1000);
      };
      const createShortcut = async (launchOptions) => {
          logger.debug("Creating shortcut for login: ", launchOptions);
          const id = await SteamClient.Apps.AddShortcut("Login", launchOptions.Exe, "", "");
          logger.debug("Shortcut created for login: ", id);
          SteamClient.Apps.SetShortcutLaunchOptions(id, launchOptions.Options);
          SteamClient.Apps.SetShortcutName(id, launchOptions.Name);
          logger.debug("Saving shortcut for login: ", id);
          await executeAction$1(serverAPI, actionSetName, "SaveSetting", {
              name: "LoginSteamClientId",
              value: id.toString()
          });
          logger.debug("Shortcut created for login: ", id);
          setSteamClientId(id.toString());
          return id;
      };
      const getSteamClientId = async (launchOptions) => {
          if (SteamClientId === "") {
              logger.debug("No Shortcut found, creating one...");
              return await createShortcut(launchOptions);
          }
          else {
              const id = parseInt(SteamClientId);
              logger.debug("Shortcut configured: ", id);
              const app = appStore.allApps.find(a => a.appid == id);
              if (app) {
                  logger.debug("Shortcut found: ", id);
                  return id;
              }
              else {
                  logger.debug("Shortcut not found, creating one...");
                  return await createShortcut(launchOptions);
              }
          }
      };
      const login = async () => {
          try {
              const launchOptionsResult = await executeAction$1(serverAPI, actionSetName, "LoginLaunchOptions", {});
              logger.debug("launchOptionsResult: ", launchOptionsResult);
              if (launchOptionsResult == null) {
                  logger.error("launchOptionsResult is null");
                  return;
              }
              const launchOptions = launchOptionsResult?.Content;
              if (launchOptions == null) {
                  logger.error("LaunchOptions is null");
                  return;
              }
              const id = await getSteamClientId(launchOptions);
              const gameId = gameIDFromAppID(id);
              await executeAction$1(serverAPI, actionSetName, "Login", {
                  appId: String(id),
                  gameId: String(gameId)
              }, () => onLoginExit(id));
              setContent(launchOptionsResult);
              setLoggedIn("true");
          }
          catch (error) {
              logger.error("Login: ", error);
          }
      };
      const logout = async () => {
          try {
              setContent({ Type: "Empty", Content: {} });
              const data = await executeAction$1(serverAPI, actionSetName, "Logout", {
                  inputData: ""
              });
              if (data == null) {
                  logger.error("login status is null");
                  return;
              }
              setLoggedIn("false");
              setContent(data);
          }
          catch (error) {
              logger.error("Logout: ", error);
          }
      };
      const onInit = async () => {
          try {
              logger.debug(`Initializing LoginContent with initActionSet: ${initActionSet} and initAction: ${initAction}`);
              const data = await executeAction$1(serverAPI, initActionSet, initAction, {
                  inputData: ""
              });
              logger.debug("init result: ", data);
              const result = data?.Content;
              const tmp = await executeAction$1(serverAPI, result.SetName, "GetSetting", {
                  name: "LoginSteamClientId",
                  inputData: ""
              });
              const settings = tmp?.Content;
              if (settings.value !== "") {
                  setSteamClientId(settings.value);
              }
              setActionSetName(result.SetName);
              setLoggedIn("unknown");
          }
          catch (error) {
              logger.error("OnInit: ", error);
          }
      };
      React.useEffect(() => {
          onInit();
      }, []);
      const labelStyle = { flex: 'auto', margin: '0', display: 'flex', alignItems: 'center' };
      let innerElement = window.SP_REACT.createElement(window.SP_REACT.Fragment, null);
      switch (content.Type) {
          case 'LoginStatus':
              const isLoggedIn = content.Content.LoggedIn;
              innerElement = (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                  window.SP_REACT.createElement(deckyFrontendLib.DialogLabel, { style: labelStyle },
                      "Logged in as ",
                      content.Content.Username),
                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: isLoggedIn ? logout : login, style: { width: "100px", verticalAlign: "middle" } }, isLoggedIn ? 'Logout' : 'Login')));
              break;
          case 'Empty':
              innerElement = window.SP_REACT.createElement(deckyFrontendLib.DialogLabel, { style: labelStyle }, "Checking status...");
              break;
          case 'Error':
              innerElement = window.SP_REACT.createElement(ErrorDisplay, { error: content.Content });
      }
      return (window.SP_REACT.createElement("div", { style: { display: "flex", height: '40px' } }, innerElement));
  };

  const contentTabsContainerClass = 'content-tabs-container';
  const gridContentContainerClass = 'grid-content-container';
  const GridContent = ({ content, serverAPI, initActionSet, refreshContent, argsCache, setArgsCache }) => {
      const logger = new Logger('ContentGrid');
      const [isLimited, setIsLimited] = React.useState(true);
      const [isLimitedLoading, setIsLimitedLoading] = React.useState(false);
      const [installedFilterLoading, setInstalledLoading] = React.useState(false);
      const [scriptActions, setScriptActions] = React.useState();
      const [filter, setFilter] = React.useState(argsCache.filter);
      React.useEffect(() => {
          (async () => {
              try {
                  const actionRes = await executeAction$1(serverAPI, initActionSet, "GetScriptActions", {});
                  logger.debug('Get sscript actions result', actionRes);
                  if (!actionRes) {
                      return;
                  }
                  const scriptActions = actionRes.Content;
                  setScriptActions(scriptActions.Actions);
              }
              catch (e) {
                  logger.error(e);
              }
          })();
      }, []);
      const actionsMenu = (e) => {
          deckyFrontendLib.showContextMenu(window.SP_REACT.createElement(deckyFrontendLib.Menu, { label: "Actions", cancelText: "Cancel", onCancel: () => { } }, scriptActions?.map((action) => window.SP_REACT.createElement(deckyFrontendLib.MenuItem, { onSelected: async () => {
                  const args = {
                      shortname: "",
                      steamClientID: "",
                      startDir: "",
                      compatToolName: "",
                      inputData: "",
                      gameId: "",
                      appId: ""
                  };
                  const result = await executeAction$1(serverAPI, initActionSet, action.ActionId, args);
                  if (result?.Type == "RefreshContent") {
                      refreshContent({ ...argsCache, limited: isLimited });
                  }
                  logger.debug("runScript result", result);
              } }, action.Title))), e.currentTarget ?? window);
      };
      const updateCache = (param, value, onFinish) => {
          const newCache = { ...argsCache, [param]: value };
          refreshContent({ ...newCache, limited: isLimited }, () => {
              setArgsCache(newCache);
              onFinish?.();
          });
      };
      return (window.SP_REACT.createElement(deckyFrontendLib.Focusable, { className: gridContentContainerClass, onSecondaryButton: () => {
              setInstalledLoading(true);
              updateCache('installed', !argsCache.installed, () => setInstalledLoading(false));
          }, onOptionsButton: () => {
              setIsLimitedLoading(true);
              refreshContent({ ...argsCache, limited: !isLimited }, () => {
                  setIsLimited(!isLimited);
                  setIsLimitedLoading(false);
              });
          }, onSecondaryActionDescription: window.SP_REACT.createElement("div", { style: { display: 'flex', gap: '4px' } },
              window.SP_REACT.createElement("text", null, "Toggle Installed"),
              argsCache.installed && window.SP_REACT.createElement(FaRegCheckCircle, { style: { alignSelf: 'center' }, size: '14px' }),
              installedFilterLoading && window.SP_REACT.createElement(deckyFrontendLib.Spinner, { style: { width: '20px' } })), onOptionsActionDescription: window.SP_REACT.createElement("div", { style: { display: 'flex', gap: '4px' } },
              window.SP_REACT.createElement("text", null, isLimited ? 'Show All' : 'Limit Results'),
              isLimitedLoading && window.SP_REACT.createElement(deckyFrontendLib.Spinner, { style: { width: '20px' } })) },
          window.SP_REACT.createElement("style", null, `
                .${contentTabsContainerClass} .${deckyFrontendLib.gamepadTabbedPageClasses.TabContentsScroll} {
                    scroll-padding-top: calc( var(--basicui-header-height) + 140px ) !important;
                    scroll-padding-bottom: 80px;
                }
                .${contentTabsContainerClass} .${deckyFrontendLib.gamepadTabbedPageClasses.TabContents} .${gridContentContainerClass} {
                    padding-top: 15px;
                }
            `),
          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { display: "flex", gap: '15px' } },
              window.SP_REACT.createElement("div", { style: { width: '100%' } },
                  window.SP_REACT.createElement(deckyFrontendLib.TextField, { placeholder: "Search", value: filter, onChange: (e) => {
                          updateCache('filter', e.target.value);
                          setFilter(e.target.value);
                      } })),
              window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: actionsMenu, disabled: !scriptActions, style: { width: "48px", minWidth: 'initial', padding: 'initial' } },
                  window.SP_REACT.createElement(FaSlidersH, { style: { verticalAlign: 'middle' } })),
              window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: () => deckyFrontendLib.showModal(window.SP_REACT.createElement(ConfEditor, { serverAPI: serverAPI, initActionSet: initActionSet, initAction: "GetTabConfigActions", contentId: "0", refreshParent: () => refreshContent({ ...argsCache, limited: isLimited }) })), style: { width: "48px", minWidth: 'initial', padding: 'initial' } },
                  window.SP_REACT.createElement(FaCog, { style: { verticalAlign: 'middle' } })),
              content.storeURL &&
                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: () => {
                          if (content.storeURL)
                              deckyFrontendLib.Navigation.NavigateToExternalWeb(content.storeURL);
                      }, style: { width: "48px", minWidth: 'initial', padding: 'initial' } },
                      window.SP_REACT.createElement(FaStore, null))),
          content.NeedsLogin === "true" && (window.SP_REACT.createElement("div", { style: { paddingTop: '15px' } },
              window.SP_REACT.createElement(LoginContent, { serverAPI: serverAPI, initActionSet: initActionSet, initAction: "GetLoginActions" }))),
          argsCache.installed && (window.SP_REACT.createElement("div", { style: { margin: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' } },
              window.SP_REACT.createElement("div", { style: { backgroundColor: '#8b929a66', flex: 'auto', height: '1px' } }),
              window.SP_REACT.createElement("div", { style: { color: '#ffffffb3', fontSize: '12px', textTransform: 'uppercase' } }, "Installed"),
              window.SP_REACT.createElement("div", { style: { backgroundColor: '#8b929a66', flex: 'auto', height: '1px' } }))),
          content.Games?.length === 0 && (window.SP_REACT.createElement("div", { style: { textAlign: 'center', padding: '15px' } },
              argsCache.filter !== "" && (window.SP_REACT.createElement("div", null,
                  "No games match the filter: ",
                  argsCache.filter,
                  ". Clear the search bar.")),
              argsCache.installed && (window.SP_REACT.createElement("div", null, "No installed games. Push X to toggle installed games off.")))),
          window.SP_REACT.createElement(GridItems, { serverAPI: serverAPI, games: content.Games ?? [], initActionSet: initActionSet, initAction: "" })));
  };
  const GridItems = React.memo(({ serverAPI, games, initActionSet, initAction }) => {
      const logger = new Logger("GridContainer");
      const imgAreaWidth = '120px';
      const imgAreaHeight = '165px';
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: {
                  display: "grid",
                  justifyContent: "space-between",
                  gridGap: "16px 12px",
                  gridTemplateColumns: `repeat(auto-fill, ${imgAreaWidth})`,
                  marginTop: '15px'
              }, 
              //@ts-ignore
              navEntryPreferPosition: 2 }, games.map((game) => (window.SP_REACT.createElement(GameGridItem, { gameData: game, imgAreaWidth: imgAreaWidth, imgAreaHeight: imgAreaHeight, onClick: () => {
                  logger.debug("onClick game: ", game);
                  // logger.debug("setActiveGame", game.ShortName);
                  // setActiveGame(game.ShortName);
                  deckyFrontendLib.showModal(window.SP_REACT.createElement(GameDetailsItem, { serverAPI: serverAPI, shortname: game.ShortName, initActionSet: initActionSet, initAction: initAction, clearActiveGame: () => { } }));
              } }))))));
  });

  const HtmlContent = ({ content }) => {
      return (window.SP_REACT.createElement(deckyFrontendLib.DialogBody, null,
          window.SP_REACT.createElement(deckyFrontendLib.DialogControlsSection, { style: { height: "calc(100%)" } },
              window.SP_REACT.createElement("div", { dangerouslySetInnerHTML: { __html: content } }))));
  };

  const TextContent = ({ content }) => {
      return (window.SP_REACT.createElement(deckyFrontendLib.DialogBody, null,
          window.SP_REACT.createElement(deckyFrontendLib.DialogControlsSection, { style: { height: "calc(100%)" } }, content)));
  };

  var lib = {};

  var propTypes$2 = {exports: {}};

  var reactIs_production_min = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
  reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
  reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
  reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes$2.exports = factoryWithThrowingShims();
  }

  var ErrorCorrectLevel = {
  	L : 1,
  	M : 0,
  	Q : 3,
  	H : 2
  };

  var mode$1 = {
  	MODE_NUMBER :		1 << 0,
  	MODE_ALPHA_NUM : 	1 << 1,
  	MODE_8BIT_BYTE : 	1 << 2,
  	MODE_KANJI :		1 << 3
  };

  var mode = mode$1;

  function QR8bitByte(data) {
  	this.mode = mode.MODE_8BIT_BYTE;
  	this.data = data;
  }

  QR8bitByte.prototype = {

  	getLength : function(buffer) {
  		return this.data.length;
  	},
  	
  	write : function(buffer) {
  		for (var i = 0; i < this.data.length; i++) {
  			// not JIS ...
  			buffer.put(this.data.charCodeAt(i), 8);
  		}
  	}
  };

  var _8BitByte = QR8bitByte;

  // ErrorCorrectLevel
  var ECL = ErrorCorrectLevel;

  function QRRSBlock(totalCount, dataCount) {
  	this.totalCount = totalCount;
  	this.dataCount  = dataCount;
  }

  QRRSBlock.RS_BLOCK_TABLE = [

  	// L
  	// M
  	// Q
  	// H

  	// 1
  	[1, 26, 19],
  	[1, 26, 16],
  	[1, 26, 13],
  	[1, 26, 9],
  	
  	// 2
  	[1, 44, 34],
  	[1, 44, 28],
  	[1, 44, 22],
  	[1, 44, 16],

  	// 3
  	[1, 70, 55],
  	[1, 70, 44],
  	[2, 35, 17],
  	[2, 35, 13],

  	// 4		
  	[1, 100, 80],
  	[2, 50, 32],
  	[2, 50, 24],
  	[4, 25, 9],
  	
  	// 5
  	[1, 134, 108],
  	[2, 67, 43],
  	[2, 33, 15, 2, 34, 16],
  	[2, 33, 11, 2, 34, 12],
  	
  	// 6
  	[2, 86, 68],
  	[4, 43, 27],
  	[4, 43, 19],
  	[4, 43, 15],
  	
  	// 7		
  	[2, 98, 78],
  	[4, 49, 31],
  	[2, 32, 14, 4, 33, 15],
  	[4, 39, 13, 1, 40, 14],
  	
  	// 8
  	[2, 121, 97],
  	[2, 60, 38, 2, 61, 39],
  	[4, 40, 18, 2, 41, 19],
  	[4, 40, 14, 2, 41, 15],
  	
  	// 9
  	[2, 146, 116],
  	[3, 58, 36, 2, 59, 37],
  	[4, 36, 16, 4, 37, 17],
  	[4, 36, 12, 4, 37, 13],
  	
  	// 10		
  	[2, 86, 68, 2, 87, 69],
  	[4, 69, 43, 1, 70, 44],
  	[6, 43, 19, 2, 44, 20],
  	[6, 43, 15, 2, 44, 16],

  	// 11
  	[4, 101, 81],
  	[1, 80, 50, 4, 81, 51],
  	[4, 50, 22, 4, 51, 23],
  	[3, 36, 12, 8, 37, 13],

  	// 12
  	[2, 116, 92, 2, 117, 93],
  	[6, 58, 36, 2, 59, 37],
  	[4, 46, 20, 6, 47, 21],
  	[7, 42, 14, 4, 43, 15],

  	// 13
  	[4, 133, 107],
  	[8, 59, 37, 1, 60, 38],
  	[8, 44, 20, 4, 45, 21],
  	[12, 33, 11, 4, 34, 12],

  	// 14
  	[3, 145, 115, 1, 146, 116],
  	[4, 64, 40, 5, 65, 41],
  	[11, 36, 16, 5, 37, 17],
  	[11, 36, 12, 5, 37, 13],

  	// 15
  	[5, 109, 87, 1, 110, 88],
  	[5, 65, 41, 5, 66, 42],
  	[5, 54, 24, 7, 55, 25],
  	[11, 36, 12],

  	// 16
  	[5, 122, 98, 1, 123, 99],
  	[7, 73, 45, 3, 74, 46],
  	[15, 43, 19, 2, 44, 20],
  	[3, 45, 15, 13, 46, 16],

  	// 17
  	[1, 135, 107, 5, 136, 108],
  	[10, 74, 46, 1, 75, 47],
  	[1, 50, 22, 15, 51, 23],
  	[2, 42, 14, 17, 43, 15],

  	// 18
  	[5, 150, 120, 1, 151, 121],
  	[9, 69, 43, 4, 70, 44],
  	[17, 50, 22, 1, 51, 23],
  	[2, 42, 14, 19, 43, 15],

  	// 19
  	[3, 141, 113, 4, 142, 114],
  	[3, 70, 44, 11, 71, 45],
  	[17, 47, 21, 4, 48, 22],
  	[9, 39, 13, 16, 40, 14],

  	// 20
  	[3, 135, 107, 5, 136, 108],
  	[3, 67, 41, 13, 68, 42],
  	[15, 54, 24, 5, 55, 25],
  	[15, 43, 15, 10, 44, 16],

  	// 21
  	[4, 144, 116, 4, 145, 117],
  	[17, 68, 42],
  	[17, 50, 22, 6, 51, 23],
  	[19, 46, 16, 6, 47, 17],

  	// 22
  	[2, 139, 111, 7, 140, 112],
  	[17, 74, 46],
  	[7, 54, 24, 16, 55, 25],
  	[34, 37, 13],

  	// 23
  	[4, 151, 121, 5, 152, 122],
  	[4, 75, 47, 14, 76, 48],
  	[11, 54, 24, 14, 55, 25],
  	[16, 45, 15, 14, 46, 16],

  	// 24
  	[6, 147, 117, 4, 148, 118],
  	[6, 73, 45, 14, 74, 46],
  	[11, 54, 24, 16, 55, 25],
  	[30, 46, 16, 2, 47, 17],

  	// 25
  	[8, 132, 106, 4, 133, 107],
  	[8, 75, 47, 13, 76, 48],
  	[7, 54, 24, 22, 55, 25],
  	[22, 45, 15, 13, 46, 16],

  	// 26
  	[10, 142, 114, 2, 143, 115],
  	[19, 74, 46, 4, 75, 47],
  	[28, 50, 22, 6, 51, 23],
  	[33, 46, 16, 4, 47, 17],

  	// 27
  	[8, 152, 122, 4, 153, 123],
  	[22, 73, 45, 3, 74, 46],
  	[8, 53, 23, 26, 54, 24],
  	[12, 45, 15, 28, 46, 16],

  	// 28
  	[3, 147, 117, 10, 148, 118],
  	[3, 73, 45, 23, 74, 46],
  	[4, 54, 24, 31, 55, 25],
  	[11, 45, 15, 31, 46, 16],

  	// 29
  	[7, 146, 116, 7, 147, 117],
  	[21, 73, 45, 7, 74, 46],
  	[1, 53, 23, 37, 54, 24],
  	[19, 45, 15, 26, 46, 16],

  	// 30
  	[5, 145, 115, 10, 146, 116],
  	[19, 75, 47, 10, 76, 48],
  	[15, 54, 24, 25, 55, 25],
  	[23, 45, 15, 25, 46, 16],

  	// 31
  	[13, 145, 115, 3, 146, 116],
  	[2, 74, 46, 29, 75, 47],
  	[42, 54, 24, 1, 55, 25],
  	[23, 45, 15, 28, 46, 16],

  	// 32
  	[17, 145, 115],
  	[10, 74, 46, 23, 75, 47],
  	[10, 54, 24, 35, 55, 25],
  	[19, 45, 15, 35, 46, 16],

  	// 33
  	[17, 145, 115, 1, 146, 116],
  	[14, 74, 46, 21, 75, 47],
  	[29, 54, 24, 19, 55, 25],
  	[11, 45, 15, 46, 46, 16],

  	// 34
  	[13, 145, 115, 6, 146, 116],
  	[14, 74, 46, 23, 75, 47],
  	[44, 54, 24, 7, 55, 25],
  	[59, 46, 16, 1, 47, 17],

  	// 35
  	[12, 151, 121, 7, 152, 122],
  	[12, 75, 47, 26, 76, 48],
  	[39, 54, 24, 14, 55, 25],
  	[22, 45, 15, 41, 46, 16],

  	// 36
  	[6, 151, 121, 14, 152, 122],
  	[6, 75, 47, 34, 76, 48],
  	[46, 54, 24, 10, 55, 25],
  	[2, 45, 15, 64, 46, 16],

  	// 37
  	[17, 152, 122, 4, 153, 123],
  	[29, 74, 46, 14, 75, 47],
  	[49, 54, 24, 10, 55, 25],
  	[24, 45, 15, 46, 46, 16],

  	// 38
  	[4, 152, 122, 18, 153, 123],
  	[13, 74, 46, 32, 75, 47],
  	[48, 54, 24, 14, 55, 25],
  	[42, 45, 15, 32, 46, 16],

  	// 39
  	[20, 147, 117, 4, 148, 118],
  	[40, 75, 47, 7, 76, 48],
  	[43, 54, 24, 22, 55, 25],
  	[10, 45, 15, 67, 46, 16],

  	// 40
  	[19, 148, 118, 6, 149, 119],
  	[18, 75, 47, 31, 76, 48],
  	[34, 54, 24, 34, 55, 25],
  	[20, 45, 15, 61, 46, 16]
  ];

  QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
  	
  	var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
  	
  	if (rsBlock == undefined) {
  		throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  	}

  	var length = rsBlock.length / 3;
  	
  	var list = new Array();
  	
  	for (var i = 0; i < length; i++) {

  		var count = rsBlock[i * 3 + 0];
  		var totalCount = rsBlock[i * 3 + 1];
  		var dataCount  = rsBlock[i * 3 + 2];

  		for (var j = 0; j < count; j++) {
  			list.push(new QRRSBlock(totalCount, dataCount) );	
  		}
  	}
  	
  	return list;
  };

  QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {

  	switch(errorCorrectLevel) {
  	case ECL.L :
  		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
  	case ECL.M :
  		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
  	case ECL.Q :
  		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
  	case ECL.H :
  		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
  	default :
  		return undefined;
  	}
  };

  var RSBlock$1 = QRRSBlock;

  function QRBitBuffer() {
  	this.buffer = new Array();
  	this.length = 0;
  }

  QRBitBuffer.prototype = {

  	get : function(index) {
  		var bufIndex = Math.floor(index / 8);
  		return ( (this.buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
  	},
  	
  	put : function(num, length) {
  		for (var i = 0; i < length; i++) {
  			this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
  		}
  	},
  	
  	getLengthInBits : function() {
  		return this.length;
  	},
  	
  	putBit : function(bit) {
  	
  		var bufIndex = Math.floor(this.length / 8);
  		if (this.buffer.length <= bufIndex) {
  			this.buffer.push(0);
  		}
  	
  		if (bit) {
  			this.buffer[bufIndex] |= (0x80 >>> (this.length % 8) );
  		}
  	
  		this.length++;
  	}
  };

  var BitBuffer$1 = QRBitBuffer;

  var QRMath = {

  	glog : function(n) {
  	
  		if (n < 1) {
  			throw new Error("glog(" + n + ")");
  		}
  		
  		return QRMath.LOG_TABLE[n];
  	},
  	
  	gexp : function(n) {
  	
  		while (n < 0) {
  			n += 255;
  		}
  	
  		while (n >= 256) {
  			n -= 255;
  		}
  	
  		return QRMath.EXP_TABLE[n];
  	},
  	
  	EXP_TABLE : new Array(256),
  	
  	LOG_TABLE : new Array(256)

  };
  	
  for (var i = 0; i < 8; i++) {
  	QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
  	QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
  		^ QRMath.EXP_TABLE[i - 5]
  		^ QRMath.EXP_TABLE[i - 6]
  		^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
  	QRMath.LOG_TABLE[QRMath.EXP_TABLE[i] ] = i;
  }

  var math$2 = QRMath;

  var math$1 = math$2;

  function QRPolynomial(num, shift) {

  	if (num.length == undefined) {
  		throw new Error(num.length + "/" + shift);
  	}

  	var offset = 0;

  	while (offset < num.length && num[offset] == 0) {
  		offset++;
  	}

  	this.num = new Array(num.length - offset + shift);
  	for (var i = 0; i < num.length - offset; i++) {
  		this.num[i] = num[i + offset];
  	}
  }

  QRPolynomial.prototype = {

  	get : function(index) {
  		return this.num[index];
  	},
  	
  	getLength : function() {
  		return this.num.length;
  	},
  	
  	multiply : function(e) {
  	
  		var num = new Array(this.getLength() + e.getLength() - 1);
  	
  		for (var i = 0; i < this.getLength(); i++) {
  			for (var j = 0; j < e.getLength(); j++) {
  				num[i + j] ^= math$1.gexp(math$1.glog(this.get(i) ) + math$1.glog(e.get(j) ) );
  			}
  		}
  	
  		return new QRPolynomial(num, 0);
  	},
  	
  	mod : function(e) {
  	
  		if (this.getLength() - e.getLength() < 0) {
  			return this;
  		}
  	
  		var ratio = math$1.glog(this.get(0) ) - math$1.glog(e.get(0) );
  	
  		var num = new Array(this.getLength() );
  		
  		for (var i = 0; i < this.getLength(); i++) {
  			num[i] = this.get(i);
  		}
  		
  		for (var i = 0; i < e.getLength(); i++) {
  			num[i] ^= math$1.gexp(math$1.glog(e.get(i) ) + ratio);
  		}
  	
  		// recursive call
  		return new QRPolynomial(num, 0).mod(e);
  	}
  };

  var Polynomial$2 = QRPolynomial;

  var Mode = mode$1;
  var Polynomial$1 = Polynomial$2;
  var math = math$2;

  var QRMaskPattern = {
  	PATTERN000 : 0,
  	PATTERN001 : 1,
  	PATTERN010 : 2,
  	PATTERN011 : 3,
  	PATTERN100 : 4,
  	PATTERN101 : 5,
  	PATTERN110 : 6,
  	PATTERN111 : 7
  };

  var QRUtil = {

      PATTERN_POSITION_TABLE : [
  	    [],
  	    [6, 18],
  	    [6, 22],
  	    [6, 26],
  	    [6, 30],
  	    [6, 34],
  	    [6, 22, 38],
  	    [6, 24, 42],
  	    [6, 26, 46],
  	    [6, 28, 50],
  	    [6, 30, 54],		
  	    [6, 32, 58],
  	    [6, 34, 62],
  	    [6, 26, 46, 66],
  	    [6, 26, 48, 70],
  	    [6, 26, 50, 74],
  	    [6, 30, 54, 78],
  	    [6, 30, 56, 82],
  	    [6, 30, 58, 86],
  	    [6, 34, 62, 90],
  	    [6, 28, 50, 72, 94],
  	    [6, 26, 50, 74, 98],
  	    [6, 30, 54, 78, 102],
  	    [6, 28, 54, 80, 106],
  	    [6, 32, 58, 84, 110],
  	    [6, 30, 58, 86, 114],
  	    [6, 34, 62, 90, 118],
  	    [6, 26, 50, 74, 98, 122],
  	    [6, 30, 54, 78, 102, 126],
  	    [6, 26, 52, 78, 104, 130],
  	    [6, 30, 56, 82, 108, 134],
  	    [6, 34, 60, 86, 112, 138],
  	    [6, 30, 58, 86, 114, 142],
  	    [6, 34, 62, 90, 118, 146],
  	    [6, 30, 54, 78, 102, 126, 150],
  	    [6, 24, 50, 76, 102, 128, 154],
  	    [6, 28, 54, 80, 106, 132, 158],
  	    [6, 32, 58, 84, 110, 136, 162],
  	    [6, 26, 54, 82, 110, 138, 166],
  	    [6, 30, 58, 86, 114, 142, 170]
      ],

      G15 : (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
      G18 : (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
      G15_MASK : (1 << 14) | (1 << 12) | (1 << 10)	| (1 << 4) | (1 << 1),

      getBCHTypeInfo : function(data) {
  	    var d = data << 10;
  	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
  		    d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) ) ); 	
  	    }
  	    return ( (data << 10) | d) ^ QRUtil.G15_MASK;
      },

      getBCHTypeNumber : function(data) {
  	    var d = data << 12;
  	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
  		    d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) ) ); 	
  	    }
  	    return (data << 12) | d;
      },

      getBCHDigit : function(data) {

  	    var digit = 0;

  	    while (data != 0) {
  		    digit++;
  		    data >>>= 1;
  	    }

  	    return digit;
      },

      getPatternPosition : function(typeNumber) {
  	    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
      },

      getMask : function(maskPattern, i, j) {
  	    
  	    switch (maskPattern) {
  		    
  	    case QRMaskPattern.PATTERN000 : return (i + j) % 2 == 0;
  	    case QRMaskPattern.PATTERN001 : return i % 2 == 0;
  	    case QRMaskPattern.PATTERN010 : return j % 3 == 0;
  	    case QRMaskPattern.PATTERN011 : return (i + j) % 3 == 0;
  	    case QRMaskPattern.PATTERN100 : return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0;
  	    case QRMaskPattern.PATTERN101 : return (i * j) % 2 + (i * j) % 3 == 0;
  	    case QRMaskPattern.PATTERN110 : return ( (i * j) % 2 + (i * j) % 3) % 2 == 0;
  	    case QRMaskPattern.PATTERN111 : return ( (i * j) % 3 + (i + j) % 2) % 2 == 0;

  	    default :
  		    throw new Error("bad maskPattern:" + maskPattern);
  	    }
      },

      getErrorCorrectPolynomial : function(errorCorrectLength) {

  	    var a = new Polynomial$1([1], 0);

  	    for (var i = 0; i < errorCorrectLength; i++) {
  		    a = a.multiply(new Polynomial$1([1, math.gexp(i)], 0) );
  	    }

  	    return a;
      },

      getLengthInBits : function(mode, type) {

  	    if (1 <= type && type < 10) {

  		    // 1 - 9

  		    switch(mode) {
  		    case Mode.MODE_NUMBER 	: return 10;
  		    case Mode.MODE_ALPHA_NUM 	: return 9;
  		    case Mode.MODE_8BIT_BYTE	: return 8;
  		    case Mode.MODE_KANJI  	: return 8;
  		    default :
  			    throw new Error("mode:" + mode);
  		    }

  	    } else if (type < 27) {

  		    // 10 - 26

  		    switch(mode) {
  		    case Mode.MODE_NUMBER 	: return 12;
  		    case Mode.MODE_ALPHA_NUM 	: return 11;
  		    case Mode.MODE_8BIT_BYTE	: return 16;
  		    case Mode.MODE_KANJI  	: return 10;
  		    default :
  			    throw new Error("mode:" + mode);
  		    }

  	    } else if (type < 41) {

  		    // 27 - 40

  		    switch(mode) {
  		    case Mode.MODE_NUMBER 	: return 14;
  		    case Mode.MODE_ALPHA_NUM	: return 13;
  		    case Mode.MODE_8BIT_BYTE	: return 16;
  		    case Mode.MODE_KANJI  	: return 12;
  		    default :
  			    throw new Error("mode:" + mode);
  		    }

  	    } else {
  		    throw new Error("type:" + type);
  	    }
      },

      getLostPoint : function(qrCode) {
  	    
  	    var moduleCount = qrCode.getModuleCount();
  	    
  	    var lostPoint = 0;
  	    
  	    // LEVEL1
  	    
  	    for (var row = 0; row < moduleCount; row++) {

  		    for (var col = 0; col < moduleCount; col++) {

  			    var sameCount = 0;
  			    var dark = qrCode.isDark(row, col);

  				for (var r = -1; r <= 1; r++) {

  				    if (row + r < 0 || moduleCount <= row + r) {
  					    continue;
  				    }

  				    for (var c = -1; c <= 1; c++) {

  					    if (col + c < 0 || moduleCount <= col + c) {
  						    continue;
  					    }

  					    if (r == 0 && c == 0) {
  						    continue;
  					    }

  					    if (dark == qrCode.isDark(row + r, col + c) ) {
  						    sameCount++;
  					    }
  				    }
  			    }

  			    if (sameCount > 5) {
  				    lostPoint += (3 + sameCount - 5);
  			    }
  		    }
  	    }

  	    // LEVEL2

  	    for (var row = 0; row < moduleCount - 1; row++) {
  		    for (var col = 0; col < moduleCount - 1; col++) {
  			    var count = 0;
  			    if (qrCode.isDark(row,     col    ) ) count++;
  			    if (qrCode.isDark(row + 1, col    ) ) count++;
  			    if (qrCode.isDark(row,     col + 1) ) count++;
  			    if (qrCode.isDark(row + 1, col + 1) ) count++;
  			    if (count == 0 || count == 4) {
  				    lostPoint += 3;
  			    }
  		    }
  	    }

  	    // LEVEL3

  	    for (var row = 0; row < moduleCount; row++) {
  		    for (var col = 0; col < moduleCount - 6; col++) {
  			    if (qrCode.isDark(row, col)
  					    && !qrCode.isDark(row, col + 1)
  					    &&  qrCode.isDark(row, col + 2)
  					    &&  qrCode.isDark(row, col + 3)
  					    &&  qrCode.isDark(row, col + 4)
  					    && !qrCode.isDark(row, col + 5)
  					    &&  qrCode.isDark(row, col + 6) ) {
  				    lostPoint += 40;
  			    }
  		    }
  	    }

  	    for (var col = 0; col < moduleCount; col++) {
  		    for (var row = 0; row < moduleCount - 6; row++) {
  			    if (qrCode.isDark(row, col)
  					    && !qrCode.isDark(row + 1, col)
  					    &&  qrCode.isDark(row + 2, col)
  					    &&  qrCode.isDark(row + 3, col)
  					    &&  qrCode.isDark(row + 4, col)
  					    && !qrCode.isDark(row + 5, col)
  					    &&  qrCode.isDark(row + 6, col) ) {
  				    lostPoint += 40;
  			    }
  		    }
  	    }

  	    // LEVEL4
  	    
  	    var darkCount = 0;

  	    for (var col = 0; col < moduleCount; col++) {
  		    for (var row = 0; row < moduleCount; row++) {
  			    if (qrCode.isDark(row, col) ) {
  				    darkCount++;
  			    }
  		    }
  	    }
  	    
  	    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
  	    lostPoint += ratio * 10;

  	    return lostPoint;		
      }
  };

  var util$1 = QRUtil;

  var BitByte = _8BitByte;
  var RSBlock = RSBlock$1;
  var BitBuffer = BitBuffer$1;
  var util = util$1;
  var Polynomial = Polynomial$2;

  function QRCode$1(typeNumber, errorCorrectLevel) {
  	this.typeNumber = typeNumber;
  	this.errorCorrectLevel = errorCorrectLevel;
  	this.modules = null;
  	this.moduleCount = 0;
  	this.dataCache = null;
  	this.dataList = [];
  }

  // for client side minification
  var proto = QRCode$1.prototype;

  proto.addData = function(data) {
  	var newData = new BitByte(data);
  	this.dataList.push(newData);
  	this.dataCache = null;
  };

  proto.isDark = function(row, col) {
  	if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
  		throw new Error(row + "," + col);
  	}
  	return this.modules[row][col];
  };

  proto.getModuleCount = function() {
  	return this.moduleCount;
  };

  proto.make = function() {
  	// Calculate automatically typeNumber if provided is < 1
  	if (this.typeNumber < 1 ){
  		var typeNumber = 1;
  		for (typeNumber = 1; typeNumber < 40; typeNumber++) {
  			var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

  			var buffer = new BitBuffer();
  			var totalDataCount = 0;
  			for (var i = 0; i < rsBlocks.length; i++) {
  				totalDataCount += rsBlocks[i].dataCount;
  			}

  			for (var i = 0; i < this.dataList.length; i++) {
  				var data = this.dataList[i];
  				buffer.put(data.mode, 4);
  				buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
  				data.write(buffer);
  			}
  			if (buffer.getLengthInBits() <= totalDataCount * 8)
  				break;
  		}
  		this.typeNumber = typeNumber;
  	}
  	this.makeImpl(false, this.getBestMaskPattern() );
  };

  proto.makeImpl = function(test, maskPattern) {
  	
  	this.moduleCount = this.typeNumber * 4 + 17;
  	this.modules = new Array(this.moduleCount);
  	
  	for (var row = 0; row < this.moduleCount; row++) {
  		
  		this.modules[row] = new Array(this.moduleCount);
  		
  		for (var col = 0; col < this.moduleCount; col++) {
  			this.modules[row][col] = null;//(col + row) % 3;
  		}
  	}

  	this.setupPositionProbePattern(0, 0);
  	this.setupPositionProbePattern(this.moduleCount - 7, 0);
  	this.setupPositionProbePattern(0, this.moduleCount - 7);
  	this.setupPositionAdjustPattern();
  	this.setupTimingPattern();
  	this.setupTypeInfo(test, maskPattern);
  	
  	if (this.typeNumber >= 7) {
  		this.setupTypeNumber(test);
  	}

  	if (this.dataCache == null) {
  		this.dataCache = QRCode$1.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
  	}

  	this.mapData(this.dataCache, maskPattern);
  };

  proto.setupPositionProbePattern = function(row, col)  {
  	
  	for (var r = -1; r <= 7; r++) {
  		
  		if (row + r <= -1 || this.moduleCount <= row + r) continue;
  		
  		for (var c = -1; c <= 7; c++) {
  			
  			if (col + c <= -1 || this.moduleCount <= col + c) continue;
  			
  			if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
  					|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
  					|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
  				this.modules[row + r][col + c] = true;
  			} else {
  				this.modules[row + r][col + c] = false;
  			}
  		}		
  	}		
  };

  proto.getBestMaskPattern = function() {

  	var minLostPoint = 0;
  	var pattern = 0;

  	for (var i = 0; i < 8; i++) {
  		
  		this.makeImpl(true, i);

  		var lostPoint = util.getLostPoint(this);

  		if (i == 0 || minLostPoint >  lostPoint) {
  			minLostPoint = lostPoint;
  			pattern = i;
  		}
  	}

  	return pattern;
  };

  proto.createMovieClip = function(target_mc, instance_name, depth) {

  	var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
  	var cs = 1;

  	this.make();

  	for (var row = 0; row < this.modules.length; row++) {
  		
  		var y = row * cs;
  		
  		for (var col = 0; col < this.modules[row].length; col++) {

  			var x = col * cs;
  			var dark = this.modules[row][col];
  		
  			if (dark) {
  				qr_mc.beginFill(0, 100);
  				qr_mc.moveTo(x, y);
  				qr_mc.lineTo(x + cs, y);
  				qr_mc.lineTo(x + cs, y + cs);
  				qr_mc.lineTo(x, y + cs);
  				qr_mc.endFill();
  			}
  		}
  	}
  	
  	return qr_mc;
  };

  proto.setupTimingPattern = function() {
  	
  	for (var r = 8; r < this.moduleCount - 8; r++) {
  		if (this.modules[r][6] != null) {
  			continue;
  		}
  		this.modules[r][6] = (r % 2 == 0);
  	}

  	for (var c = 8; c < this.moduleCount - 8; c++) {
  		if (this.modules[6][c] != null) {
  			continue;
  		}
  		this.modules[6][c] = (c % 2 == 0);
  	}
  };

  proto.setupPositionAdjustPattern = function() {

  	var pos = util.getPatternPosition(this.typeNumber);
  	
  	for (var i = 0; i < pos.length; i++) {
  	
  		for (var j = 0; j < pos.length; j++) {
  		
  			var row = pos[i];
  			var col = pos[j];
  			
  			if (this.modules[row][col] != null) {
  				continue;
  			}
  			
  			for (var r = -2; r <= 2; r++) {
  			
  				for (var c = -2; c <= 2; c++) {
  				
  					if (r == -2 || r == 2 || c == -2 || c == 2
  							|| (r == 0 && c == 0) ) {
  						this.modules[row + r][col + c] = true;
  					} else {
  						this.modules[row + r][col + c] = false;
  					}
  				}
  			}
  		}
  	}
  };

  proto.setupTypeNumber = function(test) {

  	var bits = util.getBCHTypeNumber(this.typeNumber);

  	for (var i = 0; i < 18; i++) {
  		var mod = (!test && ( (bits >> i) & 1) == 1);
  		this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
  	}

  	for (var i = 0; i < 18; i++) {
  		var mod = (!test && ( (bits >> i) & 1) == 1);
  		this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
  	}
  };

  proto.setupTypeInfo = function(test, maskPattern) {

  	var data = (this.errorCorrectLevel << 3) | maskPattern;
  	var bits = util.getBCHTypeInfo(data);

  	// vertical		
  	for (var i = 0; i < 15; i++) {

  		var mod = (!test && ( (bits >> i) & 1) == 1);

  		if (i < 6) {
  			this.modules[i][8] = mod;
  		} else if (i < 8) {
  			this.modules[i + 1][8] = mod;
  		} else {
  			this.modules[this.moduleCount - 15 + i][8] = mod;
  		}
  	}

  	// horizontal
  	for (var i = 0; i < 15; i++) {

  		var mod = (!test && ( (bits >> i) & 1) == 1);
  		
  		if (i < 8) {
  			this.modules[8][this.moduleCount - i - 1] = mod;
  		} else if (i < 9) {
  			this.modules[8][15 - i - 1 + 1] = mod;
  		} else {
  			this.modules[8][15 - i - 1] = mod;
  		}
  	}

  	// fixed module
  	this.modules[this.moduleCount - 8][8] = (!test);
  };

  proto.mapData = function(data, maskPattern) {
  	
  	var inc = -1;
  	var row = this.moduleCount - 1;
  	var bitIndex = 7;
  	var byteIndex = 0;
  	
  	for (var col = this.moduleCount - 1; col > 0; col -= 2) {

  		if (col == 6) col--;

  		while (true) {

  			for (var c = 0; c < 2; c++) {
  				
  				if (this.modules[row][col - c] == null) {
  					
  					var dark = false;

  					if (byteIndex < data.length) {
  						dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
  					}

  					var mask = util.getMask(maskPattern, row, col - c);

  					if (mask) {
  						dark = !dark;
  					}
  					
  					this.modules[row][col - c] = dark;
  					bitIndex--;

  					if (bitIndex == -1) {
  						byteIndex++;
  						bitIndex = 7;
  					}
  				}
  			}
  							
  			row += inc;

  			if (row < 0 || this.moduleCount <= row) {
  				row -= inc;
  				inc = -inc;
  				break;
  			}
  		}
  	}
  };

  QRCode$1.PAD0 = 0xEC;
  QRCode$1.PAD1 = 0x11;

  QRCode$1.createData = function(typeNumber, errorCorrectLevel, dataList) {
  	
  	var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  	
  	var buffer = new BitBuffer();
  	
  	for (var i = 0; i < dataList.length; i++) {
  		var data = dataList[i];
  		buffer.put(data.mode, 4);
  		buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
  		data.write(buffer);
  	}

  	// calc num max data.
  	var totalDataCount = 0;
  	for (var i = 0; i < rsBlocks.length; i++) {
  		totalDataCount += rsBlocks[i].dataCount;
  	}

  	if (buffer.getLengthInBits() > totalDataCount * 8) {
  		throw new Error("code length overflow. ("
  			+ buffer.getLengthInBits()
  			+ ">"
  			+  totalDataCount * 8
  			+ ")");
  	}

  	// end code
  	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
  		buffer.put(0, 4);
  	}

  	// padding
  	while (buffer.getLengthInBits() % 8 != 0) {
  		buffer.putBit(false);
  	}

  	// padding
  	while (true) {
  		
  		if (buffer.getLengthInBits() >= totalDataCount * 8) {
  			break;
  		}
  		buffer.put(QRCode$1.PAD0, 8);
  		
  		if (buffer.getLengthInBits() >= totalDataCount * 8) {
  			break;
  		}
  		buffer.put(QRCode$1.PAD1, 8);
  	}

  	return QRCode$1.createBytes(buffer, rsBlocks);
  };

  QRCode$1.createBytes = function(buffer, rsBlocks) {

  	var offset = 0;
  	
  	var maxDcCount = 0;
  	var maxEcCount = 0;
  	
  	var dcdata = new Array(rsBlocks.length);
  	var ecdata = new Array(rsBlocks.length);
  	
  	for (var r = 0; r < rsBlocks.length; r++) {

  		var dcCount = rsBlocks[r].dataCount;
  		var ecCount = rsBlocks[r].totalCount - dcCount;

  		maxDcCount = Math.max(maxDcCount, dcCount);
  		maxEcCount = Math.max(maxEcCount, ecCount);
  		
  		dcdata[r] = new Array(dcCount);
  		
  		for (var i = 0; i < dcdata[r].length; i++) {
  			dcdata[r][i] = 0xff & buffer.buffer[i + offset];
  		}
  		offset += dcCount;
  		
  		var rsPoly = util.getErrorCorrectPolynomial(ecCount);
  		var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);

  		var modPoly = rawPoly.mod(rsPoly);
  		ecdata[r] = new Array(rsPoly.getLength() - 1);
  		for (var i = 0; i < ecdata[r].length; i++) {
              var modIndex = i + modPoly.getLength() - ecdata[r].length;
  			ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
  		}

  	}
  	
  	var totalCodeCount = 0;
  	for (var i = 0; i < rsBlocks.length; i++) {
  		totalCodeCount += rsBlocks[i].totalCount;
  	}

  	var data = new Array(totalCodeCount);
  	var index = 0;

  	for (var i = 0; i < maxDcCount; i++) {
  		for (var r = 0; r < rsBlocks.length; r++) {
  			if (i < dcdata[r].length) {
  				data[index++] = dcdata[r][i];
  			}
  		}
  	}

  	for (var i = 0; i < maxEcCount; i++) {
  		for (var r = 0; r < rsBlocks.length; r++) {
  			if (i < ecdata[r].length) {
  				data[index++] = ecdata[r][i];
  			}
  		}
  	}

  	return data;
  };

  var QRCode_1 = QRCode$1;

  var QRCodeSvg$1 = {};

  Object.defineProperty(QRCodeSvg$1, "__esModule", {
    value: true
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _propTypes$1 = propTypes$2.exports;

  var _propTypes2$1 = _interopRequireDefault$1(_propTypes$1);

  var _react$1 = React__default["default"];

  var _react2$1 = _interopRequireDefault$1(_react$1);

  function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var propTypes$1 = {
    bgColor: _propTypes2$1.default.oneOfType([_propTypes2$1.default.object, _propTypes2$1.default.string]).isRequired,
    bgD: _propTypes2$1.default.string.isRequired,
    fgColor: _propTypes2$1.default.oneOfType([_propTypes2$1.default.object, _propTypes2$1.default.string]).isRequired,
    fgD: _propTypes2$1.default.string.isRequired,
    size: _propTypes2$1.default.number.isRequired,
    title: _propTypes2$1.default.string,
    viewBoxSize: _propTypes2$1.default.number.isRequired,
    xmlns: _propTypes2$1.default.string
  };

  var QRCodeSvg = (0, _react$1.forwardRef)(function (_ref, ref) {
    var bgColor = _ref.bgColor,
        bgD = _ref.bgD,
        fgD = _ref.fgD,
        fgColor = _ref.fgColor,
        size = _ref.size,
        title = _ref.title,
        viewBoxSize = _ref.viewBoxSize,
        _ref$xmlns = _ref.xmlns,
        xmlns = _ref$xmlns === undefined ? "http://www.w3.org/2000/svg" : _ref$xmlns,
        props = _objectWithoutProperties$1(_ref, ["bgColor", "bgD", "fgD", "fgColor", "size", "title", "viewBoxSize", "xmlns"]);

    return _react2$1.default.createElement(
      "svg",
      _extends$1({}, props, { height: size, ref: ref, viewBox: "0 0 " + viewBoxSize + " " + viewBoxSize, width: size, xmlns: xmlns }),
      title ? _react2$1.default.createElement(
        "title",
        null,
        title
      ) : null,
      _react2$1.default.createElement("path", { d: bgD, fill: bgColor }),
      _react2$1.default.createElement("path", { d: fgD, fill: fgColor })
    );
  });

  QRCodeSvg.displayName = "QRCodeSvg";
  QRCodeSvg.propTypes = propTypes$1;

  QRCodeSvg$1.default = QRCodeSvg;

  Object.defineProperty(lib, "__esModule", {
    value: true
  });
  lib.QRCode = undefined;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _propTypes = propTypes$2.exports;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _ErrorCorrectLevel = ErrorCorrectLevel;

  var _ErrorCorrectLevel2 = _interopRequireDefault(_ErrorCorrectLevel);

  var _QRCode = QRCode_1;

  var _QRCode2 = _interopRequireDefault(_QRCode);

  var _react = React__default["default"];

  var _react2 = _interopRequireDefault(_react);

  var _QRCodeSvg = QRCodeSvg$1;

  var _QRCodeSvg2 = _interopRequireDefault(_QRCodeSvg);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  // A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.


  function bytesToBinaryString(bytes) {
    return bytes.map(function (b) {
      return String.fromCharCode(b & 0xff);
    }).join("");
  }

  function encodeStringToUtf8Bytes(input) {
    return Array.from(new TextEncoder().encode(input));
  }

  var propTypes = {
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    fgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    level: _propTypes2.default.string,
    size: _propTypes2.default.number,
    value: _propTypes2.default.string.isRequired
  };

  var QRCode = (0, _react.forwardRef)(function (_ref, ref) {
    var _ref$bgColor = _ref.bgColor,
        bgColor = _ref$bgColor === undefined ? "#FFFFFF" : _ref$bgColor,
        _ref$fgColor = _ref.fgColor,
        fgColor = _ref$fgColor === undefined ? "#000000" : _ref$fgColor,
        _ref$level = _ref.level,
        level = _ref$level === undefined ? "L" : _ref$level,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 256 : _ref$size,
        value = _ref.value,
        props = _objectWithoutProperties(_ref, ["bgColor", "fgColor", "level", "size", "value"]);

    var qrcode = new _QRCode2.default(-1, _ErrorCorrectLevel2.default[level]);
    var utf8Bytes = encodeStringToUtf8Bytes(value);
    var binaryString = bytesToBinaryString(utf8Bytes);
    qrcode.addData(binaryString, "Byte");
    qrcode.make();
    var cells = qrcode.modules;
    return _react2.default.createElement(_QRCodeSvg2.default, _extends({}, props, {
      bgColor: bgColor,
      bgD: cells.map(function (row, rowIndex) {
        return row.map(function (cell, cellIndex) {
          return !cell ? "M " + cellIndex + " " + rowIndex + " l 1 0 0 1 -1 0 Z" : "";
        }).join(" ");
      }).join(" "),
      fgColor: fgColor,
      fgD: cells.map(function (row, rowIndex) {
        return row.map(function (cell, cellIndex) {
          return cell ? "M " + cellIndex + " " + rowIndex + " l 1 0 0 1 -1 0 Z" : "";
        }).join(" ");
      }).join(" "),
      ref: ref,
      size: size,
      viewBoxSize: cells.length
    }));
  });

  lib.QRCode = QRCode;
  QRCode.displayName = "QRCode";
  QRCode.propTypes = propTypes;

  var _default = lib.default = QRCode;

  const NEWS_READ_KEY = 'js_news_read_items';
  const NEWS_LAST_CHECK_KEY = 'js_news_last_check';
  function getReadNewsItems() {
      const stored = localStorage.getItem(NEWS_READ_KEY);
      return stored ? JSON.parse(stored) : [];
  }
  function markNewsItemAsRead(itemId) {
      const readItems = getReadNewsItems();
      if (!readItems.includes(itemId)) {
          readItems.push(itemId);
          localStorage.setItem(NEWS_READ_KEY, JSON.stringify(readItems));
      }
  }
  function markNewsItemAsUnread(itemId) {
      const readItems = getReadNewsItems();
      const updated = readItems.filter(id => id !== itemId);
      localStorage.setItem(NEWS_READ_KEY, JSON.stringify(updated));
  }
  function toggleNewsItemRead(itemId) {
      if (isNewsItemRead(itemId)) {
          markNewsItemAsUnread(itemId);
      }
      else {
          markNewsItemAsRead(itemId);
      }
  }
  function isNewsItemRead(itemId) {
      return getReadNewsItems().includes(itemId);
  }
  function getUnreadCount(items) {
      const readItems = getReadNewsItems();
      return items.filter(item => !readItems.includes(item.id)).length;
  }
  function getLastCheckTimestamp() {
      const stored = localStorage.getItem(NEWS_LAST_CHECK_KEY);
      return stored ? parseInt(stored, 10) : 0;
  }
  function updateLastCheckTimestamp() {
      localStorage.setItem(NEWS_LAST_CHECK_KEY, Date.now().toString());
  }
  function getNewItemsSinceLastCheck(items) {
      const lastCheck = getLastCheckTimestamp();
      return items.filter(item => {
          const itemDate = new Date(item.pubDate).getTime();
          return itemDate > lastCheck;
      });
  }

  function useNewsUnreadCount(serverAPI, pollInterval = 300000) {
      const [unreadCount, setUnreadCount] = React.useState(0);
      const logger = new Logger("useNewsUnreadCount");
      const checkUnreadNews = async () => {
          try {
              const result = await serverAPI.callPluginMethod("fetch_rss_feed", {
                  url: "https://www.junkstore.xyz/feed.xml",
                  excluded_categories: [],
              });
              if (result.success && result.result) {
                  const count = getUnreadCount(result.result.items);
                  setUnreadCount(count);
                  logger.debug(`Unread news count: ${count}`);
              }
          }
          catch (err) {
              logger.error("Error checking unread news:", err);
          }
      };
      React.useEffect(() => {
          checkUnreadNews();
          const interval = setInterval(checkUnreadNews, pollInterval);
          return () => clearInterval(interval);
      }, []);
      const refresh = () => {
          checkUnreadNews();
      };
      return { unreadCount, refresh };
  }

  const showQrModal = (url) => {
      deckyFrontendLib.showModal(window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, null,
          window.SP_REACT.createElement("div", { style: {
                  margin: "0 auto 1.5em auto",
                  padding: "1em",
                  borderRadius: "2em",
                  background: "#F5F5F5",
                  boxShadow: "0 1em 2em rgba(0, 0, 0, 0.5)", // Dark gray shadow color
              } },
              window.SP_REACT.createElement(_default, { value: url, size: 256, fgColor: "#000000", bgColor: "#F5F5F5" })),
          window.SP_REACT.createElement("span", { style: { textAlign: "center", wordBreak: "break-word" } }, url)), window);
  };
  const MainMenu = ({ serverApi, content, initAction, initActionSet, closeModal }) => {
      const { unreadCount } = useNewsUnreadCount(serverApi);
      React.useEffect(() => {
          if (localStorage.getItem('js_firstlaunch') != "false") {
              deckyFrontendLib.Navigation.CloseSideMenus();
              deckyFrontendLib.Navigation.Navigate("/about-junk-store");
              localStorage.setItem('js_firstlaunch', 'false');
          }
          // Inject CSS for pulse animation
          const style = document.createElement('style');
          style.textContent = `
            @keyframes newsNotificationPulse {
                0%, 100% {
                    transform: scale(1);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 0.8;
                }
            }
        `;
          document.head.appendChild(style);
          return () => {
              document.head.removeChild(style);
          };
      }, []);
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          content.Panels.map((panel) => (window.SP_REACT.createElement(deckyFrontendLib.PanelSection, { title: panel.Title }, panel.Actions && panel.Actions.map((action) => (window.SP_REACT.createElement(deckyFrontendLib.PanelSectionRow, null,
              window.SP_REACT.createElement(deckyFrontendLib.ButtonItem, { layout: "below", onClick: () => {
                      deckyFrontendLib.Navigation.CloseSideMenus();
                      if (closeModal)
                          closeModal();
                      deckyFrontendLib.Navigation.Navigate(`/junk-store-content/${encodeURIComponent(initActionSet)}/${encodeURIComponent(action.ActionId)}`);
                  } }, action.Title))))))),
          window.SP_REACT.createElement(deckyFrontendLib.PanelSection, { title: "" },
              window.SP_REACT.createElement(deckyFrontendLib.PanelSectionRow, { style: { position: 'relative' } },
                  window.SP_REACT.createElement(deckyFrontendLib.ButtonItem, { layout: "below", onClick: () => {
                          deckyFrontendLib.Navigation.CloseSideMenus();
                          if (closeModal)
                              closeModal();
                          deckyFrontendLib.Navigation.Navigate("/junk-store-news");
                      } }, "News"),
                  unreadCount > 0 && (window.SP_REACT.createElement("div", { style: {
                          position: 'absolute',
                          top: '0px',
                          right: '-5px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: '#ff4444',
                          border: '2px solid #1a1a1a',
                          boxShadow: '0 0 8px rgba(255, 68, 68, 0.8), 0 0 12px rgba(255, 68, 68, 0.6)',
                          animation: 'newsNotificationPulse 2s ease-in-out infinite',
                          zIndex: 10,
                          pointerEvents: 'none'
                      } }))),
              window.SP_REACT.createElement(deckyFrontendLib.PanelSectionRow, null,
                  window.SP_REACT.createElement(deckyFrontendLib.ButtonItem, { layout: "below", onClick: () => {
                          deckyFrontendLib.Navigation.CloseSideMenus();
                          if (closeModal)
                              closeModal();
                          deckyFrontendLib.Navigation.Navigate("/about-junk-store");
                      } }, "About")))));
  };

  function useCachedState(initActionSet, initAction, keySuffix, defaultData) {
      const key = `JunkStore_${initActionSet}_${initAction}_${keySuffix}`;
      const cache = localStorage.getItem(key);
      const hadCache = !!cache;
      const [cacheState, setCacheState] = React.useState(hadCache ? JSON.parse(cache) : defaultData);
      const hasRendered = React.useRef(false);
      const saveCache = () => localStorage.setItem(key, JSON.stringify(cacheState));
      React.useEffect(() => {
          if (!hasRendered.current)
              hasRendered.current = true;
          else
              saveCache();
      }, [cacheState]);
      return { cacheState, setCacheState, saveCache, hadCache };
  }

  const ContentTabs = ({ serverAPI, content, initAction, initActionSet, layout, subActionSet }) => {
      new Logger("StoreTabs");
      const { cacheState: cacheData, setCacheState: setCacheData } = useCachedState(initActionSet, initAction, 'tabcontent', { currentTab: "-1" });
      const getTabs = () => {
          return content.Tabs.map((tab, index) => ({
              title: tab.Title,
              content: window.SP_REACT.createElement(Content, { key: tab.ActionId, serverAPI: serverAPI, initActionSet: subActionSet, initAction: tab.ActionId }),
              id: index.toString()
          }));
      };
      const getPages = () => {
          return content.Tabs.map((tab) => ({
              title: tab.Title,
              content: window.SP_REACT.createElement(Content, { key: tab.ActionId, serverAPI: serverAPI, initActionSet: subActionSet, initAction: tab.ActionId }),
              identifier: tab.Title,
              hideTitle: true
          }));
      };
      return (window.SP_REACT.createElement(deckyFrontendLib.DialogBody, { key: initActionSet + "_" + initAction, className: contentTabsContainerClass }, content.Tabs.length === 0 ? window.SP_REACT.createElement(Loading, null) : (layout === "horizontal" ? (window.SP_REACT.createElement(deckyFrontendLib.DialogControlsSection, { key: initActionSet + "_" + initAction + "horizontal", className: gamepadLibraryClasses.GamepadLibrary },
          window.SP_REACT.createElement(deckyFrontendLib.Tabs, { key: "0", activeTab: cacheData.currentTab, onShowTab: (tabID) => setCacheData({ currentTab: tabID }), tabs: getTabs(), autoFocusContents: true, 
              //@ts-ignore
              canBeHeaderBackground: 'always' }))) : (window.SP_REACT.createElement(deckyFrontendLib.DialogControlsSection, { key: initActionSet + "_" + initAction + "vertical", style: { height: "100%" } },
          window.SP_REACT.createElement(deckyFrontendLib.SidebarNavigation, { key: "1", pages: getPages() }))))));
  };
  const Content = ({ serverAPI, initActionSet, initAction, closeModal }) => {
      const logger = new Logger("Content");
      const [content, setContent] = React.useState({ Type: "Empty", Content: {} });
      const [actionSetName, setActionSetName] = React.useState("");
      const { cacheState: gridContentCache, setCacheState: setGridContentCache, hadCache: hadGridCache } = useCachedState(initActionSet, initAction, 'gridcontentparams', {
          filter: "",
          installed: false,
      });
      React.useEffect(() => {
          (async () => {
              try {
                  logger.debug(`Initializing Content with initActionSet: ${initActionSet} and initAction: ${initAction}`);
                  const actionSetRes = await executeAction$1(serverAPI, initActionSet, initAction, {});
                  logger.debug("init result: ", actionSetRes);
                  if (actionSetRes === null)
                      return;
                  const actionSet = actionSetRes.Content;
                  logger.debug(`Getting Content ${hadGridCache ? 'with args cache' : ''}`, hadGridCache ? gridContentCache : '');
                  const contentRes = await getContent(actionSet.SetName, hadGridCache ? stringifyArgs(gridContentCache) : {});
                  logger.debug("GetContent result: ", contentRes);
                  if (contentRes === null)
                      return;
                  setActionSetName(actionSet.SetName);
                  setContent(contentRes);
              }
              catch (error) {
                  logger.error("OnInit: ", error);
              }
          })();
      }, []);
      const getContent = async (actionSet, actionArgs) => executeAction$1(serverAPI, actionSet, "GetContent", actionArgs);
      const refreshContent = (args, onFinish) => {
          (async () => {
              logger.debug("Refreshing Content with args: ", args);
              const contentRes = await getContent(actionSetName, stringifyArgs(args));
              if (contentRes === null) {
                  return;
              }
              setContent(contentRes);
              onFinish?.();
          })();
      };
      switch (content.Type) {
          case "GameGrid":
              return window.SP_REACT.createElement(GridContent, { serverAPI: serverAPI, content: content.Content, initActionSet: actionSetName, refreshContent: refreshContent, argsCache: gridContentCache, setArgsCache: setGridContentCache });
          case "StoreTabs":
              return window.SP_REACT.createElement(ContentTabs, { serverAPI: serverAPI, content: content.Content, layout: "horizontal", initAction: initAction, initActionSet: initActionSet, subActionSet: actionSetName });
          case "SideBarPage":
              return window.SP_REACT.createElement(ContentTabs, { serverAPI: serverAPI, content: content.Content, layout: "vertical", initAction: initAction, initActionSet: initActionSet, subActionSet: actionSetName });
          case "MainMenu":
              return window.SP_REACT.createElement(MainMenu //key={initActionSet + "_" + initAction} 
              , { serverApi: serverAPI, content: content.Content, initActionSet: actionSetName, initAction: "", closeModal: closeModal });
          case "Text":
              return window.SP_REACT.createElement(TextContent //key={initActionSet + "_" + initAction} 
              , { content: content.Content });
          case "Html":
              return window.SP_REACT.createElement(HtmlContent //key={initActionSet + "_" + initAction}
              , { content: content.Content });
          case "Error":
              return window.SP_REACT.createElement(ErrorDisplay //key={initActionSet + "_" + initAction}
              , { error: content.Content });
          case "Empty":
              return window.SP_REACT.createElement(Loading, null);
          default:
              return null;
      }
  };
  function stringifyArgs(args) {
      let out = {};
      for (let key in args) {
          out[key] = String(args[key]);
      }
      return out;
  }

  // THIS FILE IS AUTO GENERATED
  function HiOutlineQrCode (props) {
    return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"1.5","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"},"child":[]}]})(props);
  }

  const LogViewer = ({ serverAPI }) => {
      const [logs, setLogs] = React.useState([]);
      const [logContent, setLogContent] = React.useState("");
      const logger = new Logger("LogViewer");
      const fetchLogs = async () => {
          try {
              const response = await serverAPI.callPluginMethod("get_logs", {});
              logger.log(response);
              if (response.result instanceof Array) {
                  setLogs(response.result);
                  if (response.result.length > 0) {
                      setLogContent(response.result[0].Content);
                  }
              }
          }
          catch (e) {
              logger.error(e);
          }
      };
      React.useEffect(() => {
          fetchLogs();
      }, []);
      return (window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              height: '100%',
              padding: '0 15px'
          } }, logs.length > 0 && (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement(deckyFrontendLib.Dropdown, { rgOptions: logs.map((log) => {
                  return { data: log.FileName, label: log.FileName };
              }), selectedOption: logs[0].FileName, onChange: (e) => {
                  const temp = logs.find((log) => log.FileName == e.data);
                  setLogContent(temp?.Content || "");
              } }),
          window.SP_REACT.createElement(ScrollableWindowRelative, null,
              window.SP_REACT.createElement("div", { style: { padding: '5px 0', whiteSpace: 'pre-wrap' } }, logContent))))));
  };

  const Developer = ({ serverAPI }) => {
      const [logging, setLogging] = React.useState(localStorage.getItem('enableLogger') === 'true');
      const [firstLaunch, setFirstLaunch] = React.useState(localStorage.getItem('js_firstlaunch') === 'true');
      const [doubleStick, setDoubleStick] = React.useState(localStorage.getItem('js_doubleStick') === 'true');
      const toggleFirstLaunch = async (value) => {
          localStorage.setItem('js_firstlaunch', value);
      };
      const toggleLogging = async (value) => {
          localStorage.setItem('enableLogger', value);
      };
      const toggleDoubleStick = async (value) => {
          localStorage.setItem('js_doubleStick', value);
      };
      return (window.SP_REACT.createElement("div", null,
          window.SP_REACT.createElement(deckyFrontendLib.ToggleField, { label: "Enable UI Logging", checked: logging, onChange: (newValue) => toggleLogging(newValue.toString()) }),
          window.SP_REACT.createElement(deckyFrontendLib.ToggleField, { label: "Set first Launch", checked: firstLaunch, onChange: (newValue) => toggleFirstLaunch(newValue.toString()) }),
          window.SP_REACT.createElement(deckyFrontendLib.ToggleField, { label: "Enable double stick quick access", checked: doubleStick, onChange: (newValue) => toggleDoubleStick(newValue.toString()) }),
          window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: async () => {
                  deckyFrontendLib.showModal(window.SP_REACT.createElement(deckyFrontendLib.ConfirmModal, { strTitle: "Confirm", strDescription: "Reset all achievements?", onOK: () => { resetAchievements(); } }));
              } }, "Reset Achievements")));
  };

  const AchievementDisplay = ({ achievement, onCancel, onOK, onEscKeypress, bAllowFullSize, bCancelDisabled, bOKDisabled, closeModal }) => {
      return (window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, { onCancel: onCancel, onOK: onOK, onEscKeypress: onEscKeypress, bAllowFullSize: bAllowFullSize, bCancelDisabled: bCancelDisabled, bOKDisabled: bOKDisabled, closeModal: closeModal },
          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { focusable: true, noFocusRing: false },
              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, { title: "Achievement" },
                  window.SP_REACT.createElement("div", null,
                      window.SP_REACT.createElement(IconContext.Provider, { value: { className: "shared-class", size: 100 } },
                          window.SP_REACT.createElement("div", { style: { display: 'flex', alignItems: 'center' } }, achievement.icon),
                          window.SP_REACT.createElement("h2", null, achievement.name),
                          window.SP_REACT.createElement("p", null, achievement.description)))))));
  };
  const Achievements = ({ serverAPI }) => {
      const [achievements, setAchievements] = React.useState(getAchievements());
      return (window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
          window.SP_REACT.createElement("style", null, `
                .${contentTabsContainerClass} .${deckyFrontendLib.gamepadTabbedPageClasses.TabContentsScroll} {
                    scroll-padding-top: calc( var(--basicui-header-height) + 140px ) !important;
                    scroll-padding-bottom: 80px;
                }
                .${contentTabsContainerClass} .${deckyFrontendLib.gamepadTabbedPageClasses.TabContents} .${gridContentContainerClass} {
                    padding-top: 15px;
                }
            `),
          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { className: gridContentContainerClass, style: {
                  display: "flex", gap: '15px', width: '100%', flexWrap: 'wrap', padding: '15px'
              } },
              window.SP_REACT.createElement(IconContext.Provider, { value: { className: "shared-class", size: 100 } }, achievements.map((achievement) => {
                  const details = getAchievementDetails(achievement);
                  return (window.SP_REACT.createElement(deckyFrontendLib.Focusable, { onActivate: () => {
                          deckyFrontendLib.showModal(window.SP_REACT.createElement(AchievementDisplay, { achievement: details }));
                          if (hasAchievement('MTE=') === false) {
                              addAchievement('MTE=');
                              setAchievements(getAchievements());
                          }
                      }, onOKActionDescription: "Show details", style: { width: 100, position: 'relative' } },
                      window.SP_REACT.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                          window.SP_REACT.createElement("div", { style: {
                                  position: 'relative',
                                  margin: 'auto',
                                  display: 'flex'
                              }, key: achievement }, details.icon))));
              })))));
  };

  const About = ({ serverAPI }) => {
      const [url, setUrl] = React.useState("");
      const [backup, setBackup] = React.useState("false");
      const [reloading, setReloading] = React.useState(false);
      const logger = new Logger("About");
      const [output, setOutput] = React.useState("");
      const textareaRef = React.useRef(null);
      const socket = React.useRef(null);
      const [isInstalling, setIsInstalling] = React.useState(false);
      const [isDownloading, setIsDownloading] = React.useState(false);
      const [isDeveloperMode, setIsDeveloperMode] = React.useState(localStorage.getItem('js_developermode') === "true");
      const showDeveloperMode = (show) => {
          setIsDeveloperMode(show);
          localStorage.setItem('js_developermode', show.toString());
          if (show)
              addAchievement('MTA=');
      };
      const download = async () => {
          console.log("Download: ", url);
          setIsDownloading(true);
          await serverAPI.callPluginMethod("download_custom_backend", {
              url: url,
              backup: backup
          });
          await serverAPI.callPluginMethod("reload", {});
          setIsDownloading(false);
          addAchievement('MTAw');
      };
      const socialLinks = [
          {
              label: "Need help or want to upgrade? Visit our website",
              icon: window.SP_REACT.createElement(SiDiscord, null),
              link: "https://www.junkstore.xyz",
              buttonText: "Visit",
          },
          {
              label: "Discord",
              icon: window.SP_REACT.createElement(SiDiscord, null),
              link: "https://discord.gg/uqemZ6cfHe",
              buttonText: "Join Us",
          },
          {
              label: "Patreon",
              icon: window.SP_REACT.createElement(SiPatreon, null),
              link: "https://www.patreon.com/junkstore",
              buttonText: "Become a Patreon",
          },
          {
              label: "Ko-Fi",
              icon: window.SP_REACT.createElement(SiKofi, null),
              link: "https://ko-fi.com/junkstore",
              buttonText: "Buy me a coffee",
          },
          {
              label: "Sponsor on GitHub",
              icon: window.SP_REACT.createElement(SiGithubsponsors, null),
              link: "https://github.com/sponsors/ebenbruyns",
              buttonText: "Sponsor",
          },
          {
              label: "GitHub",
              icon: window.SP_REACT.createElement(SiGithub, null),
              link: "https://github.com/ebenbruyns/junkstore",
              buttonText: "Report issues",
          },
          {
              label: "Reddit Community",
              icon: window.SP_REACT.createElement(SiReddit, null),
              link: "https://www.reddit.com/r/JunkStore",
              buttonText: "Reddit",
          },
          {
              label: "X (Twitter)",
              icon: window.SP_REACT.createElement(SiX, null),
              link: "https://x.com/JunkStore4deck",
              buttonText: "Follow",
          }
      ];
      React.useEffect(() => {
          // Create a WebSocket connection to the backend server
          logger.debug("Connecting to WebSocket");
          serverAPI.callPluginMethod("get_websocket_port", {}).then((port) => {
              logger.debug("configuring WebSocket on port: " + port.result);
              const address = "ws://localhost:" + port.result + "/ws";
              logger.debug("Connecting to WebSocket: " + address);
              socket.current = new WebSocket(address);
              // Listen for messages from the backend server
              socket.current.onmessage = (event) => {
                  logger.debug("Received message: " + event.data);
                  const message = JSON.parse(event.data);
                  // Update the UI with the received output
                  setOutput((prevOutput) => prevOutput + message.data + "\n");
                  if (textareaRef.current !== null) {
                      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
                  }
                  if (message.status === "closed") {
                      setIsInstalling(false);
                  }
              };
          });
          // Clean up the WebSocket connection
          return () => {
              if (socket.current) {
                  socket.current.close();
              }
          };
      }, []);
      const getRuntimeId = (name) => {
          // @ts-ignore
          const app = appStore.allApps.filter(a => a.display_name.startsWith(name));
          if (app.length === 0) {
              return -1;
          }
          else
              return app[0].appid;
      };
      const isRuntimeInstalled = (name) => {
          // @ts-ignore
          return appStore.GetAppOverviewByAppID(getRuntimeId(name)).local_per_client_data.installed;
      };
      return (window.SP_REACT.createElement(deckyFrontendLib.DialogBody, null,
          window.SP_REACT.createElement(deckyFrontendLib.DialogControlsSection, { style: { height: "calc(100%)" } },
              window.SP_REACT.createElement(deckyFrontendLib.SidebarNavigation, { key: "1", pages: [
                      {
                          title: "About",
                          content: (window.SP_REACT.createElement("div", { style: { padding: '0 15px', height: '100%', display: 'flex' } },
                              window.SP_REACT.createElement(ScrollableWindowRelative, null,
                                  window.SP_REACT.createElement("div", { style: { padding: '5px 0' } },
                                      window.SP_REACT.createElement("div", null,
                                          "Junk Store emerged from a simple need: I wanted a way to play DOS games through Steam utilising Steam input for controller mapping.",
                                          window.SP_REACT.createElement("br", null),
                                          window.SP_REACT.createElement("br", null),
                                          "Starting with DOS classics, it quickly evolved to encompass a wider array of collections. The plugin's versatility extends far beyond its Epic extension; with basic to intermediate programming skills, you can create your own extensions to tailor it to your needs.",
                                          window.SP_REACT.createElement("br", null),
                                          window.SP_REACT.createElement("br", null),
                                          "While initially designed to address my requirements, I have made it available to become a community project. I am open to suggestions and PR's. However, not all features may be feasible to implement. Your support is invaluable in shaping the project's direction and expanding its capabilities.",
                                          window.SP_REACT.createElement("br", null),
                                          window.SP_REACT.createElement("br", null),
                                          "Please note: Before diving in, make sure to install the listed dependencies from the 'Dependencies' tab.",
                                          window.SP_REACT.createElement("br", null),
                                          window.SP_REACT.createElement("br", null),
                                          "Join us on Discord to contribute, seek assistance, or connect with fellow enthusiasts.",
                                          window.SP_REACT.createElement("br", null),
                                          window.SP_REACT.createElement("br", null),
                                          window.SP_REACT.createElement("h2", null, "Contributors"),
                                          window.SP_REACT.createElement("ul", null,
                                              window.SP_REACT.createElement("li", null, "Eben Bruyns (junkrunner) - Software Sorcerer"),
                                              window.SP_REACT.createElement("li", null, "Annie Ryan (mrs junkrunner) - Order Oracle"),
                                              window.SP_REACT.createElement("li", null, "Jesse Bofill - Visual Virtuoso"),
                                              window.SP_REACT.createElement("li", null, "Tech - Glitch Gladiator")),
                                          window.SP_REACT.createElement("h2", null, "Special Thanks - inactive contributors"),
                                          window.SP_REACT.createElement("ul", null,
                                              window.SP_REACT.createElement("li", null, "Logan (Beebles) - UI Developer")))),
                                  window.SP_REACT.createElement(deckyFrontendLib.ToggleField, { label: "Enable Developer Mode", checked: isDeveloperMode, onChange: (newValue) => showDeveloperMode(newValue) }))))
                      },
                      {
                          title: "Dependencies",
                          content: window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { disabled: isInstalling, onClick: async () => {
                                          try {
                                              logger.debug("Sending message: install_dependencies");
                                              if (socket.current) {
                                                  setOutput("");
                                                  setIsInstalling(true);
                                                  socket.current.send(JSON.stringify({ action: "install_dependencies" }));
                                              }
                                          }
                                          catch (e) {
                                              logger.debug(e);
                                          }
                                      } }, isInstalling ? "Working... Do not close this screen." : "Install Dependencies"),
                                  window.SP_REACT.createElement("textarea", { ref: textareaRef, style: { width: "100%", height: "200px", marginTop: "10px" }, value: output })),
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { disabled: reloading, onClick: async () => {
                                          setReloading(true);
                                          await serverAPI.callPluginMethod("reload", {});
                                          setReloading(false);
                                      } }, reloading == true ? "Reloading Scripts..." : "Reload scripts")),
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { disabled: isRuntimeInstalled("Proton EasyAntiCheat Runtime"), onClick: async () => {
                                          SteamClient.Installs.OpenInstallWizard([getRuntimeId("Proton EasyAntiCheat Runtime")]);
                                      } }, "Install Proton Easy Anti Cheat")),
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { disabled: isRuntimeInstalled("Proton BattlEye Runtime"), onClick: async () => {
                                          SteamClient.Installs.OpenInstallWizard([getRuntimeId("Proton BattlEye Runtime")]);
                                      } }, "Install Proton BattlEye Runtime")),
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { disabled: isInstalling, onClick: () => deckyFrontendLib.showModal(window.SP_REACT.createElement(deckyFrontendLib.ConfirmModal, { strTitle: "Confirm", strDescription: "Uninstall dependencies?", onOK: async () => {
                                              try {
                                                  logger.debug("Sending message: uninstall_dependencies");
                                                  if (socket.current) {
                                                      setOutput("");
                                                      setIsInstalling(true);
                                                      socket.current.send(JSON.stringify({ action: "uninstall_dependencies" }));
                                                  }
                                              }
                                              catch (e) {
                                                  logger.debug(e);
                                              }
                                          } })) }, isInstalling ? "Working... Do not close this screen." : "Uninstall Dependencies")),
                              !hasAchievement("MTEx") &&
                                  window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                      window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: () => {
                                              addAchievement("MTEx");
                                              deckyFrontendLib.showModal(window.SP_REACT.createElement(deckyFrontendLib.ConfirmModal, { strTitle: "Do you feel luck?", strDescription: "I told you not to click this button!", strOKButtonText: "Yes", onOK: () => {
                                                      if (!hasAchievement("MTAwMA=="))
                                                          addAchievement("MTAwMQ==");
                                                  }, strCancelButtonText: "No", onCancel: () => {
                                                      if (!hasAchievement("MTAwMQ=="))
                                                          addAchievement("MTAwMA==");
                                                  } }));
                                          } }, "Do NOT click this Button!")))
                      },
                      {
                          title: "Custom Backend",
                          content: window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement("div", null,
                                      "Junk Store is a flexible and extensible frontend. You can use a custom backend to provide the content for the store. This does come with security concerns so beware of what you download. You can create your own custom backends too by following the instructions on github.",
                                      window.SP_REACT.createElement("br", null),
                                      window.SP_REACT.createElement("br", null),
                                      window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: () => {
                                              deckyFrontendLib.Navigation.NavigateToExternalWeb("https://github.com/ebenbruyns/junkstore/wiki/Custom-Backends");
                                          } }, "Learn More")),
                                  window.SP_REACT.createElement("br", null)),
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement(deckyFrontendLib.TextField, { placeholder: "Enter URL", value: url, onChange: (e) => setUrl(e.target.value) })),
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  " ",
                                  window.SP_REACT.createElement(deckyFrontendLib.ToggleField, { label: "Backup", checked: backup === "true", onChange: (newValue) => setBackup(newValue.toString()) })),
                              window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null,
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { disabled: isDownloading, onClick: download },
                                      isDownloading ? "Downloading..." : "Download",
                                      " ")))
                      },
                      {
                          title: "Support",
                          content: window.SP_REACT.createElement(window.SP_REACT.Fragment, null,
                              window.SP_REACT.createElement("div", { style: {
                                      display: 'flex',
                                      flex: 'auto',
                                      flexDirection: 'column',
                                      gap: '10px'
                                  } },
                                  window.SP_REACT.createElement("div", { style: { padding: '0 15px', flex: 'auto', display: 'flex' } },
                                      window.SP_REACT.createElement(ScrollableWindowRelative, null,
                                          window.SP_REACT.createElement("div", { style: { padding: '5px 0' } },
                                              "I try to make the Junk Store as easy to use as possible, but it is still a work in progress. While it  is free for you to use and download, this is first and foremost a passion project.",
                                              window.SP_REACT.createElement("br", null),
                                              window.SP_REACT.createElement("br", null),
                                              "There is quite a large vision for Junk Store and a lot that I would like to add, such as support for more stores, platforms, features, etc. Ultimately I would like to create a platform that allows anyone to create their own scripts and share them with the community. A platform that allows anyone to contribute settings and scripts for games and stores.",
                                              window.SP_REACT.createElement("br", null),
                                              window.SP_REACT.createElement("br", null),
                                              "To test the waters and to try and gauge interest in something like this, the first part has been gifted to the community to help you get more out of your gaming collection and experience.",
                                              window.SP_REACT.createElement("br", null),
                                              window.SP_REACT.createElement("br", null),
                                              "This is something I would like to continue adding to for your benefit, however as the saying goes 'time is money'. I would love to be able to work on this full time, however that is simply not possible without some form of income. To make my vision a reality, I would be grateful if you would consider contributing to the growth of Junk Store and this project.",
                                              window.SP_REACT.createElement("br", null),
                                              window.SP_REACT.createElement("br", null),
                                              "If you like what I'm doing please consider supporting me. I have a Github Sponsors page. I have also arranged to accept donations in Bitcoin, Etherium and Monero as requested by some. If you would like to support me in other ways please contact me on Discord.",
                                              window.SP_REACT.createElement("br", null),
                                              window.SP_REACT.createElement("br", null),
                                              "See the links Tab for more information on how you can support me.")))))
                      },
                      {
                          title: "Links",
                          content: window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { display: "flex", flexDirection: "column" } }, socialLinks.map((linkInfo, index) => (window.SP_REACT.createElement(deckyFrontendLib.Field, { key: index, label: linkInfo.label, icon: linkInfo.icon, bottomSeparator: "none", padding: "none", indentLevel: 1 },
                              window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: {
                                      marginLeft: "auto",
                                      boxShadow: "none",
                                      display: "flex",
                                      justifyContent: "right",
                                      padding: "4px",
                                  } },
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: () => {
                                          deckyFrontendLib.Navigation.NavigateToExternalWeb(linkInfo.link);
                                          addAchievement("MTAxMA==");
                                      }, style: {
                                          padding: "10px",
                                          fontSize: "14px",
                                      } }, linkInfo.buttonText),
                                  window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { onClick: () => {
                                          showQrModal(linkInfo.link);
                                      }, style: {
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          padding: "10px",
                                          maxWidth: "40px",
                                          minWidth: "auto",
                                          marginLeft: ".5em",
                                      } },
                                      window.SP_REACT.createElement(HiOutlineQrCode, null)))))))
                      },
                      {
                          title: "Logs",
                          content: window.SP_REACT.createElement(LogViewer, { serverAPI: serverAPI })
                      },
                      {
                          title: "Achievements",
                          visible: hasAchievements(),
                          content: window.SP_REACT.createElement(Achievements, { serverAPI: serverAPI })
                      },
                      {
                          title: "Developer",
                          visible: isDeveloperMode,
                          content: window.SP_REACT.createElement("div", null,
                              window.SP_REACT.createElement(Developer, { serverAPI: serverAPI }))
                      }
                  ], showTitle: true }))));
  };

  const News = ({ serverAPI }) => {
      const logger = new Logger("News");
      const [feedItems, setFeedItems] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
      const [error, setError] = React.useState(null);
      const [, forceUpdate] = React.useState({});
      const focusedIndexRef = React.useRef(-1);
      const [excludedCategories] = React.useState([]);
      React.useEffect(() => {
          loadFeed();
      }, []);
      React.useEffect(() => {
          return () => {
              updateLastCheckTimestamp();
          };
      }, []);
      const loadFeed = async () => {
          try {
              setLoading(true);
              setError(null);
              const result = await serverAPI.callPluginMethod("fetch_rss_feed", {
                  url: "https://www.junkstore.xyz/feed.xml",
                  excluded_categories: excludedCategories
              });
              if (result.success && result.result) {
                  logger.debug("RSS feed loaded:", result.result);
                  setFeedItems(result.result.items || []);
              }
              else {
                  setError("Failed to load RSS feed");
                  logger.error("Failed to load RSS feed");
              }
          }
          catch (err) {
              logger.error("Error loading RSS feed:", err);
              setError("Error loading RSS feed: " + String(err));
          }
          finally {
              setLoading(false);
          }
      };
      const formatDate = (dateString) => {
          try {
              const date = new Date(dateString);
              return date.toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
              });
          }
          catch {
              return dateString;
          }
      };
      const stripHtml = (html) => {
          const tmp = document.createElement("DIV");
          tmp.innerHTML = html;
          return tmp.textContent || tmp.innerText || "";
      };
      return (window.SP_REACT.createElement(deckyFrontendLib.DialogBody, null,
          window.SP_REACT.createElement(deckyFrontendLib.Focusable, { onOptionsButton: () => {
                  logger.debug("Refetching RSS feed...");
                  loadFeed();
              }, onOptionsActionDescription: "Refresh Feed" },
              window.SP_REACT.createElement(deckyFrontendLib.DialogControlsSection, null,
                  loading && (window.SP_REACT.createElement("div", { style: { textAlign: 'center', padding: '20px' } }, "Loading news...")),
                  error && (window.SP_REACT.createElement("div", { style: { color: '#d32f2f', padding: '20px', textAlign: 'center' } }, error)),
                  !loading && !error && feedItems.length === 0 && (window.SP_REACT.createElement("div", { style: { textAlign: 'center', padding: '20px' } }, "No news items available")),
                  !loading && !error && feedItems.length > 0 && (window.SP_REACT.createElement("div", { style: { padding: '40px', display: 'flex', flexDirection: 'column', gap: '10px' } }, feedItems.map((item, index) => {
                      const isRead = isNewsItemRead(item.id);
                      return (window.SP_REACT.createElement(deckyFrontendLib.Focusable, { key: item.id, style: {
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                              padding: '15px',
                              backgroundColor: isRead ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.3)',
                              borderRadius: '8px',
                              border: isRead ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(66, 135, 245, 0.5)',
                              opacity: isRead ? 0.6 : 1
                          }, onActivate: () => {
                              if (item.link) {
                                  markNewsItemAsRead(item.id);
                                  deckyFrontendLib.Navigation.NavigateToExternalWeb(item.link);
                                  forceUpdate({});
                              }
                          }, onSecondaryActionDescription: isRead ? "Mark as Unread" : "Mark as Read", onSecondaryButton: () => {
                              focusedIndexRef.current = index;
                              toggleNewsItemRead(item.id);
                              forceUpdate({});
                          }, onFocus: () => {
                              focusedIndexRef.current = index;
                          } },
                          window.SP_REACT.createElement("div", { style: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  marginBottom: '4px'
                              } },
                              !isRead && (window.SP_REACT.createElement("div", { style: {
                                      width: '8px',
                                      height: '8px',
                                      borderRadius: '50%',
                                      backgroundColor: '#4287f5',
                                      flexShrink: 0
                                  } })),
                              window.SP_REACT.createElement("div", { style: {
                                      fontSize: '16px',
                                      fontWeight: isRead ? 'normal' : 'bold'
                                  } }, item.title)),
                          window.SP_REACT.createElement("div", { style: {
                                  fontSize: '12px',
                                  opacity: 0.7
                              } }, formatDate(item.pubDate)),
                          item.categories && item.categories.length > 0 && (window.SP_REACT.createElement("div", { style: {
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  gap: '5px',
                                  marginTop: '4px'
                              } }, item.categories.map((category, catIndex) => (window.SP_REACT.createElement("span", { key: catIndex, style: {
                                  fontSize: '11px',
                                  padding: '2px 8px',
                                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                  borderRadius: '10px'
                              } }, category))))),
                          window.SP_REACT.createElement("div", { style: {
                                  fontSize: '14px',
                                  lineHeight: '1.5',
                                  marginTop: '4px'
                              } }, stripHtml(item.description))));
                  })))))));
  };

  const MainMenuModal = ({ serverApi, onCancel, onOK, onEscKeypress, bAllowFullSize, bCancelDisabled, bOKDisabled, closeModal }) => {
      return (window.SP_REACT.createElement(deckyFrontendLib.ModalRoot, { onCancel: onCancel, onOK: onOK, onEscKeypress: onEscKeypress, bAllowFullSize: bAllowFullSize, bCancelDisabled: bCancelDisabled, bOKDisabled: bOKDisabled, closeModal: closeModal },
          window.SP_REACT.createElement(Content, { serverAPI: serverApi, initActionSet: "init", initAction: "InitActions", closeModal: closeModal })));
  };

  //@ts-ignore
  var index = deckyFrontendLib.definePlugin((serverApi) => {
      toastFactory(serverApi.toaster);
      let l3Pressed = false;
      let r3Pressed = false;
      const unregister = SteamClient.Input.RegisterForControllerInputMessages((e) => {
          if (Array.isArray(e)) {
              if (e[0]) {
                  if (e[0].nA == 35) {
                      e[0].bS;
                  }
                  if (e[0].nA == 36) {
                      e[0].bS;
                  }
                  if (e[0].nA == 25) {
                      l3Pressed = e[0].bS;
                  }
                  if (e[0].nA == 41) {
                      r3Pressed = e[0].bS;
                  }
              }
          }
          if (l3Pressed && r3Pressed && localStorage.getItem('js_doubleStick') === 'true') {
              deckyFrontendLib.Navigation.CloseSideMenus();
              deckyFrontendLib.showModal(window.SP_REACT.createElement(MainMenuModal, { serverApi: serverApi }));
          }
      });
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      if (currentHour === 0 && currentMinute >= 0 && currentMinute <= 15) {
          addAchievement("MTAx");
      }
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
      const currentMonth = currentDate.getMonth() + 1;
      if (currentDay === 5 && currentMonth === 13) {
          addAchievement("MTEw");
      }
      const checkForNewNews = async () => {
          try {
              const result = await serverApi.callPluginMethod("fetch_rss_feed", {
                  url: "https://www.junkstore.xyz/feed.xml",
                  excluded_categories: [],
              });
              if (result.success && result.result) {
                  const newItems = getNewItemsSinceLastCheck(result.result.items);
                  if (newItems.length > 0) {
                      serverApi.toaster.toast({
                          title: "Junk Store News",
                          body: `${newItems.length} new article${newItems.length > 1 ? 's' : ''} available!`,
                          duration: 8000,
                          onClick: () => {
                              deckyFrontendLib.Navigation.Navigate("/junk-store-news");
                          },
                      });
                  }
                  updateLastCheckTimestamp();
              }
          }
          catch (err) {
              console.error("Error checking for new news:", err);
          }
      };
      checkForNewNews();
      const newsCheckInterval = setInterval(checkForNewNews, 60 * 60 * 1000);
      serverApi.routerHook.addRoute("/junk-store-content/:initActionSet/:initAction", () => {
          const { initActionSet, initAction } = deckyFrontendLib.useParams();
          return window.SP_REACT.createElement(Content, { key: initActionSet + "_" + initAction, serverAPI: serverApi, initActionSet: initActionSet, initAction: initAction });
      }, {
          exact: true,
      });
      serverApi.routerHook.addRoute("/about-junk-store", () => {
          return window.SP_REACT.createElement(About, { serverAPI: serverApi });
      }, {
          exact: true,
      });
      serverApi.routerHook.addRoute("/junk-store-news", () => {
          return window.SP_REACT.createElement(News, { serverAPI: serverApi });
      }, {
          exact: true,
      });
      return {
          title: window.SP_REACT.createElement("div", { className: deckyFrontendLib.staticClasses.Title }, "Custom Games Store"),
          content: window.SP_REACT.createElement(Content, { serverAPI: serverApi, initActionSet: "init", initAction: "InitActions" }),
          icon: window.SP_REACT.createElement(FaBoxOpen, null),
          onDismount() {
              serverApi.routerHook.removeRoute("/junk-store-content/:initActionSet/:initAction");
              serverApi.routerHook.removeRoute("/about-junk-store");
              serverApi.routerHook.removeRoute("/junk-store-news");
              unregister.unregister();
              clearInterval(newsCheckInterval);
          },
      };
  });

  return index;

})(DFL, SP_REACT);
