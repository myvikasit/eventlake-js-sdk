'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * Checks if global variable 'window' is available. If it's available,
 * code runs in browser environment
 */
function isBrowser(warnMsg) {
    if (warnMsg === void 0) { warnMsg = undefined; }
    var isWindowAvailable = !!globalThis.window;
    if (!isWindowAvailable && warnMsg) {
        console.warn(warnMsg);
    }
    return isWindowAvailable;
}
/**
 * @param msg
 * @return {Window}
 */
function requireWindow(msg) {
    if (msg === void 0) { msg = undefined; }
    if (!isBrowser()) {
        throw new Error(msg || "window' is not available. Not a browser environment.");
    }
    return window;
}

function serializeCookie(name, val, opt) {
    var _a;
    if (opt === void 0) { opt = {}; }
    var enc = encodeURIComponent;
    var value = enc(val);
    var str = name + "=" + value;
    str += "; Path=" + ((_a = opt.path) !== null && _a !== void 0 ? _a : "/");
    if (opt.maxAge) {
        str += "; Max-Age=" + Math.floor(opt.maxAge);
    }
    if (opt.domain) {
        str += "; Domain=" + opt.domain;
    }
    if (opt.expires) {
        str += "; Expires=" + opt.expires.toUTCString();
    }
    if (opt.httpOnly) {
        str += "; HttpOnly";
    }
    if (opt.secure) {
        str += "; Secure";
    }
    if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string"
            ? opt.sameSite.toLowerCase()
            : opt.sameSite;
        switch (sameSite) {
            case true:
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError("Given option for sameSite is invalid");
        }
    }
    return str;
}

var getCookieDomain = function () {
    if (isBrowser()) {
        return window.location.hostname.replace("www.", "");
    }
    return undefined;
};
var cookieParsingCache;
function parseCookieString(cookieStr) {
    if (!cookieStr) {
        return {};
    }
    var res = {};
    var cookies = cookieStr.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var idx = cookie.indexOf("=");
        if (idx > 0) {
            res[cookie.substr(i > 0 ? 1 : 0, i > 0 ? idx - 1 : idx)] = cookie.substr(idx + 1);
        }
    }
    return res;
}
function copyAttributes(source, target) {
    return Array.from(source.attributes).forEach(function (attribute) {
        target.setAttribute(attribute.nodeName, attribute.nodeValue);
    });
}
function insertAndExecute(element, html) {
    element.innerHTML = html;
    var scripts = element.getElementsByTagName("script");
    var index;
    for (index = scripts.length - 1; index >= 0; index--) {
        var script = scripts[index];
        var tag = document.createElement("script");
        copyAttributes(script, tag);
        if (script.innerHTML) {
            tag.innerHTML = script.innerHTML;
        }
        tag.setAttribute("data-eventlake-tag-id", element.id);
        document.getElementsByTagName("head")[0].appendChild(tag);
        scripts[index].parentNode.removeChild(scripts[index]);
    }
}
var getCookies = function (useCache) {
    if (useCache === void 0) { useCache = false; }
    if (useCache && cookieParsingCache) {
        return cookieParsingCache;
    }
    var res = parseCookieString(document.cookie);
    cookieParsingCache = res;
    return res;
};
var getCookie = function (name) {
    if (!name) {
        return null;
    }
    return (decodeURIComponent(requireWindow().document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" +
        encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") +
        "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null);
};
var setCookie = function (name, value, opts) {
    if (opts === void 0) { opts = {}; }
    requireWindow().document.cookie = serializeCookie(name, value, opts);
};
var deleteCookie = function (name, path) {
    if (path === void 0) { path = "/"; }
    document.cookie = name + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT" + (path ? ("; path = " + path) : "");
};
var generateId = function () { return Math.random().toString(36).substring(2, 12); };
var generateRandom = function () { return Math.random().toString(36).substring(2, 7); };
var parseQuery = function (qs) {
    if (!qs) {
        return {};
    }
    var queryString = qs.length > 0 && qs.charAt(0) === "?" ? qs.substring(1) : qs;
    var query = {};
    var pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
};
var UTM_TYPES = {
    utm_source: "source",
    utm_medium: "medium",
    utm_campaign: "campaign",
    utm_term: "term",
    utm_content: "content",
};
var CLICK_IDS = {
    gclid: true,
    fbclid: true,
    dclid: true,
};
var getDataFromParams = function (params) {
    var result = {
        utm: {},
        click_id: {},
    };
    for (var name in params) {
        if (!params.hasOwnProperty(name)) {
            continue;
        }
        var val = params[name];
        var utm = UTM_TYPES[name];
        if (utm) {
            result.utm[utm] = val;
        }
        else if (CLICK_IDS[name]) {
            result.click_id[name] = val;
        }
    }
    return result;
};
//2020-08-24T13:42:16.439Z -> 2020-08-24T13:42:16.439123Z
var reformatDate = function (strDate) {
    var end = strDate.split(".")[1];
    if (!end) {
        return strDate;
    }
    if (end.length >= 7) {
        return strDate;
    }
    return strDate.slice(0, -1) + "0".repeat(7 - end.length) + "Z";
};
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
var getHostWithProtocol = function (host) {
    while (endsWith(host, "/")) {
        host = host.substr(0, host.length - 1);
    }
    if (host.indexOf("https://") === 0 || host.indexOf("http://") === 0) {
        return host;
    }
    else {
        return "//" + host;
    }
};

var LogLevels = {
    DEBUG: { name: "DEBUG", severity: 10 },
    INFO: { name: "INFO", severity: 100 },
    WARN: { name: "WARN", severity: 1000 },
    ERROR: { name: "ERROR", severity: 10000 },
    NONE: { name: "NONE", severity: 10000 }
};
var rootLogger = null;
/**
 * Create logger or return cached instance
 */
function getLogger() {
    if (rootLogger) {
        return rootLogger;
    }
    else {
        return rootLogger = createLogger();
    }
}
function setRootLogLevel(logLevelName) {
    var logLevel = LogLevels[logLevelName.toLocaleUpperCase()];
    if (!logLevel) {
        console.warn("Incorrect log level name: ".concat(logLevelName.toLocaleUpperCase(), ", setting default to INFO"));
        logLevel = LogLevels.INFO;
    }
    rootLogger = createLogger(logLevel);
    return rootLogger;
}
function setDebugVar(name, val) {
    if (!isBrowser()) {
        return;
    }
    var win = window;
    if (!win.__eventlakeDebug) {
        win.__eventlakeDebug = {};
    }
    win.__eventlakeDebug[name] = val;
}
/**
 * Creates a loggger with given log-level
 * @param logLevel
 */
function createLogger(logLevel) {
    var globalLogLevel = isBrowser() && window['__eventlakeLogLevel'];
    var minLogLevel = LogLevels.WARN;
    if (globalLogLevel) {
        var level = LogLevels[globalLogLevel.toUpperCase()];
        if (level && level > 0) {
            minLogLevel = level;
        }
    }
    else if (logLevel) {
        minLogLevel = logLevel;
    }
    var logger = { minLogLevel: minLogLevel };
    Object.values(LogLevels).forEach(function (_a) {
        var name = _a.name, severity = _a.severity;
        logger[name.toLowerCase()] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (severity >= minLogLevel.severity && args.length > 0) {
                var message = args[0];
                var msgArgs = args.splice(1);
                var msgFormatted = "[EL-".concat(name, "] ").concat(message);
                if (name === 'DEBUG' || name === 'INFO') {
                    console.log.apply(console, __spreadArray([msgFormatted], msgArgs, false));
                }
                else if (name === 'WARN') {
                    console.warn.apply(console, __spreadArray([msgFormatted], msgArgs, false));
                }
                else {
                    console.error.apply(console, __spreadArray([msgFormatted], msgArgs, false));
                }
            }
        };
    });
    setDebugVar("logger", logger);
    return logger;
}

var MemoryQueue = /** @class */ (function () {
    function MemoryQueue() {
        this.queue = [];
    }
    MemoryQueue.prototype.flush = function () {
        var queue = this.queue;
        this.queue = [];
        return queue;
    };
    MemoryQueue.prototype.push = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.queue).push.apply(_a, values);
    };
    return MemoryQueue;
}());
var LocalStorageQueue = /** @class */ (function () {
    function LocalStorageQueue(key) {
        this.key = key;
    }
    LocalStorageQueue.prototype.flush = function () {
        var queue = this.get();
        if (queue.length) {
            this.set([]);
        }
        return queue;
    };
    LocalStorageQueue.prototype.push = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var queue = this.get();
        queue.push.apply(queue, values);
        this.set(queue);
    };
    LocalStorageQueue.prototype.set = function (queue) {
        localStorage.setItem(this.key, JSON.stringify(queue));
    };
    LocalStorageQueue.prototype.get = function () {
        var data = localStorage.getItem(this.key);
        if (data !== null && data !== "") {
            return JSON.parse(data);
        }
        return [];
    };
    return LocalStorageQueue;
}());

function tryFormat(string) {
    if (typeof string === "string") {
        try {
            return JSON.stringify(JSON.parse(string), null, 2);
        }
        catch (e) {
            return string;
        }
    }
}
var beaconTransport = function (url, json) {
    getLogger().debug("Using beacon transport", json);
    var blob = new Blob([json], { type: "text/plain" });
    navigator.sendBeacon(url, blob);
    return Promise.resolve();
};
var consoleTransport = function (url, json) {
    console.log("EventLake client sending payload to console only to ".concat(url), tryFormat(json));
    return Promise.resolve();
};

//import { parse } from "node-html-parser";
var VERSION_INFO = {
    env: "production",
    date: "2022-12-10T02:33:48.018Z",
    version: "1.5.0",
};
var EVENTLAKE_VERSION = "".concat(VERSION_INFO.version, "/").concat(VERSION_INFO.env, "@").concat(VERSION_INFO.date);
var EVENTLAKE_API_HOST = "api.eventlake.io";
var MAX_AGE_TEN_YEARS = 31622400 * 10;
// This is a hack to expire all cookies with non-root path left behind by invalid tracking.
// TODO remove soon
function expireNonRootCookies(name, path) {
    if (path === void 0) { path = undefined; }
    path = path !== null && path !== void 0 ? path : window.location.pathname;
    if (path == "" || path == "/") {
        return;
    }
    deleteCookie(name, path);
    expireNonRootCookies(name, path.slice(0, path.lastIndexOf("/")));
}
var CookiePersistence = /** @class */ (function () {
    function CookiePersistence(cookieDomain, cookieName) {
        this.cookieDomain = cookieDomain;
        this.cookieName = cookieName;
    }
    CookiePersistence.prototype.save = function (props) {
        setCookie(this.cookieName, JSON.stringify(props), {
            domain: this.cookieDomain,
            secure: document.location.protocol !== "http:",
            maxAge: MAX_AGE_TEN_YEARS,
        });
    };
    CookiePersistence.prototype.restore = function () {
        expireNonRootCookies(this.cookieName);
        var str = getCookie(this.cookieName);
        if (str) {
            try {
                var parsed = JSON.parse(decodeURIComponent(str));
                if (typeof parsed !== "object") {
                    getLogger().warn("Not able to retrieve value of ".concat(this.cookieName, "@").concat(this.cookieDomain, ", object is expected, but found ").concat(typeof parsed !== "object", ": ").concat(parsed, "."));
                    return undefined;
                }
                return parsed;
            }
            catch (e) {
                getLogger().error("JSON decoding failed: " + str, e);
                return undefined;
            }
        }
        return undefined;
    };
    CookiePersistence.prototype.delete = function () {
        deleteCookie(this.cookieName);
    };
    return CookiePersistence;
}());
var NoPersistence = /** @class */ (function () {
    function NoPersistence() {
    }
    NoPersistence.prototype.save = function (props) { };
    NoPersistence.prototype.restore = function () {
        return undefined;
    };
    NoPersistence.prototype.delete = function () { };
    return NoPersistence;
}());
function eventlakeClient(opts) {
    var client = new EventlakeClientImpl();
    client.init(opts);
    return client;
}
var browserEnv = {
    getSourceIp: function () { return undefined; },
    describeClient: function () { return ({
        referer: document.referrer,
        url: window.location.href,
        page_title: document.title,
        doc_path: document.location.pathname,
        doc_host: document.location.hostname,
        doc_search: window.location.search,
        screen_resolution: screen.width + "x" + screen.height,
        vp_size: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) +
            "x" +
            Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
        user_agent: navigator.userAgent,
        user_language: navigator.language,
        doc_encoding: document.characterSet,
    }); },
    getAnonymousId: function (_a) {
        var name = _a.name, domain = _a.domain;
        expireNonRootCookies(name);
        var idCookie = getCookie(name);
        if (idCookie) {
            getLogger().debug("Existing userId", idCookie);
            return idCookie;
        }
        var newId = generateId();
        getLogger().debug("New userId", newId);
        setCookie(name, newId, {
            domain: domain,
            secure: document.location.protocol !== "http:",
            maxAge: MAX_AGE_TEN_YEARS,
        });
        return newId;
    },
};
function ensurePrefix(prefix, str) {
    if (!str) {
        return str;
    }
    return (str === null || str === void 0 ? void 0 : str.length) > 0 && str.indexOf(prefix) !== 0 ? prefix + str : str;
}
function cutPostfix(postfixes, str) {
    for (var _i = 0, _a = typeof postfixes === "string"
        ? [postfixes]
        : postfixes; _i < _a.length; _i++) {
        var postfix = _a[_i];
        while (str && str.length > 0 && str.charAt(str.length - 1) === postfix) {
            str = str.substring(0, str.length - 1);
        }
    }
    return str;
}
function fetchApi(req, res, opts) {
    if (opts === void 0) { opts = {}; }
    return {
        getAnonymousId: function (_a) {
            var name = _a.name, domain = _a.domain;
            if (opts === null || opts === void 0 ? void 0 : opts.disableCookies) {
                return "";
            }
            var cookie = parseCookieString(req.headers["cookie"])[name];
            if (!cookie) {
                var cookieOpts = {
                    maxAge: 31622400 * 10,
                    httpOnly: false,
                };
                if (domain) {
                    cookieOpts.domain = domain;
                }
                var newId = generateId();
                res.headers.set("Set-Cookie", serializeCookie(name, newId, cookieOpts));
                return newId;
            }
            else {
                return cookie;
            }
        },
        getSourceIp: function () {
            var ip = req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || req["ip"];
            return ip && ip.split(",")[0].trim();
        },
        describeClient: function () {
            var requestHost = req.headers.get("host") || req.headers.get("host");
            var proto = cutPostfix([":", "/"], req.headers["x-forwarded-proto"] || req["nextUrl"]["protocol"] || "http");
            while (proto && proto.length > 0 && proto.charAt(proto.length - 1)) {
                proto = proto.substring(0, proto.length - 1);
            }
            var reqUrl = req.url || "/";
            var queryPos = reqUrl.indexOf("?");
            var path, query;
            if (queryPos >= 0) {
                path = reqUrl.substring(0, queryPos);
                query = reqUrl.substring(queryPos + 1);
            }
            else {
                path = reqUrl;
                query = undefined;
            }
            query = ensurePrefix(query, "?");
            path = ensurePrefix(path, "/");
            return {
                doc_encoding: "",
                doc_host: requestHost,
                doc_path: reqUrl,
                doc_search: query,
                page_title: "",
                referer: req.headers["referrer"],
                screen_resolution: "",
                url: "".concat(proto, "://").concat(requestHost).concat(path || "").concat(query || ""),
                user_agent: req.headers["user-agent"],
                user_language: req.headers["accept-language"] &&
                    req.headers["accept-language"].split(",")[0],
                vp_size: "",
            };
        },
    };
}
function httpApi(req, res, opts) {
    if (opts === void 0) { opts = {}; }
    var header = function (req, name) {
        var vals = req.headers[name.toLowerCase()];
        if (!vals) {
            return undefined;
        }
        if (typeof vals === "string") {
            return vals;
        }
        else if (vals.length > 0) {
            return vals.join(",");
        }
    };
    return {
        getAnonymousId: function (_a) {
            var name = _a.name, domain = _a.domain;
            if (opts === null || opts === void 0 ? void 0 : opts.disableCookies) {
                return "";
            }
            var cookie = parseCookieString(req.headers["cookie"])[name];
            if (!cookie) {
                var cookieOpts = {
                    maxAge: 31622400 * 10,
                    httpOnly: false,
                };
                if (domain) {
                    cookieOpts.domain = domain;
                }
                var newId = generateId();
                res.setHeader("Set-Cookie", serializeCookie(name, newId, cookieOpts));
                return newId;
            }
            else {
                return cookie;
            }
        },
        getSourceIp: function () {
            var ip = header(req, "x-forwarded-for") ||
                header(req, "x-real-ip") ||
                req.socket.remoteAddress;
            return ip && ip.split(",")[0].trim();
        },
        describeClient: function () {
            var url = req.url
                ? new URL(req.url, req.url.startsWith("http") ? undefined : "http://localhost")
                : {};
            var requestHost = header(req, "x-forwarded-host") || header(req, "host") || url.hostname;
            var proto = cutPostfix([":", "/"], header(req, "x-forwarded-proto") || url.protocol);
            var query = ensurePrefix("?", url.search);
            var path = ensurePrefix("/", url.pathname);
            return {
                doc_encoding: "",
                doc_host: requestHost,
                doc_path: req.url,
                doc_search: query,
                page_title: "",
                referer: header(req, "referrer"),
                screen_resolution: "",
                url: "".concat(proto, "://").concat(requestHost).concat(path || "").concat(query || ""),
                user_agent: req.headers["user-agent"],
                user_language: req.headers["accept-language"] &&
                    req.headers["accept-language"].split(",")[0],
                vp_size: "",
            };
        },
    };
}
var emptyEnv = {
    getSourceIp: function () { return undefined; },
    describeClient: function () { return ({}); },
    getAnonymousId: function () { return ""; },
};
/**
 * Dictionary of supported environments
 */
var envs = {
    httpApi: httpApi,
    nextjsApi: httpApi,
    // fetchApi: fetchApi,
    // nextjsMiddleware: fetchApi,
    browser: function () { return browserEnv; },
    express: httpApi,
    empty: function () { return emptyEnv; },
};
var xmlHttpTransport = function (url, jsonPayload, additionalHeaders, handler) {
    if (handler === void 0) { handler = function (code, body) { }; }
    var req = new window.XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        req.onerror = function (e) {
            getLogger().error("Payload sending failed", jsonPayload, e);
            handler(-1, {});
            reject(new Error("JSON sending failed"));
        };
        req.onload = function () {
            if (req.status !== 200) {
                handler(req.status, {});
                getLogger().warn("Data sending failed to ".concat(url, " (#").concat(req.status, " - ").concat(req.statusText, ")"), jsonPayload);
                reject(new Error("JSON sending failed. Response status code: ".concat(req.status, ".")));
            }
            else {
                handler(req.status, req.responseText);
            }
            resolve();
        };
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        Object.entries(additionalHeaders || {}).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            return req.setRequestHeader(key, val);
        });
        req.send(jsonPayload);
        getLogger().debug("Payload sent to server", jsonPayload);
    });
};
var fetchTransport = function (fetch) {
    return function (url, jsonPayload, additionalHeaders, handler) {
        if (handler === void 0) { handler = function (code, body) { }; }
        return __awaiter(void 0, void 0, void 0, function () {
            var res, e_1, resJson, text, contentType, e_2;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                headers: __assign({ Accept: "application/json", "Content-Type": "application/json" }, (additionalHeaders || {})),
                                body: jsonPayload,
                            })];
                    case 1:
                        res = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _c.sent();
                        getLogger().error("Payload sending failed", jsonPayload, e_1);
                        handler(-1, {});
                        return [2 /*return*/];
                    case 3:
                        if (res.status !== 200) {
                            getLogger().warn("Failed to send data to ".concat(url, " (#").concat(res.status, " - ").concat(res.statusText, ")"), jsonPayload);
                            handler(res.status, {});
                            return [2 /*return*/];
                        }
                        resJson = {};
                        text = "";
                        contentType = (_b = (_a = res.headers) === null || _a === void 0 ? void 0 : _a.get('Content-Type')) !== null && _b !== void 0 ? _b : "";
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, res.text()];
                    case 5:
                        text = _c.sent();
                        resJson = JSON.parse(text);
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _c.sent();
                        getLogger().error("Response parsing failed for ".concat(url, ". Content-type: ").concat(contentType, " text: ").concat(text), e_2);
                        return [3 /*break*/, 7];
                    case 7:
                        try {
                            handler(res.status, resJson);
                        }
                        catch (e) {
                            getLogger().error("".concat(url, " response handling failed. Content-type: ").concat(contentType, " text: ").concat(text), e);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
};
/**
 * Abstraction on top of HTTP calls. Implementation can be either based on XMLHttpRequest, Beacon API or
 * fetch (if running in Node env)
 *
 * Implementation should reject promise if request is unsuccessful. Parameters are:
 *    - url - URL
 *    - jsonPayload - POST payload. If not string, result should be converted to string with JSON.parse()
 *    - an optional handler that will be called in any case (both for failed and succesfull requests)
 */
function interceptSegmentCalls(t) {
    var win = window;
    if (!win.analytics) {
        win.analytics = [];
    }
    t.interceptAnalytics(win.analytics);
}
var EventlakeClientImpl = /** @class */ (function () {
    function EventlakeClientImpl() {
        this.userProperties = {};
        this.permanentProperties = {
            globalProps: {},
            propsPerEvent: {},
        };
        this.cookieDomain = "";
        this.apiHost = "";
        this.idCookieName = "";
        this.obfuscateUrl = false;
        this.apiKey = "";
        this.initialized = false;
        this._3pCookies = {};
        this.cookiePolicy = "keep";
        this.ipPolicy = "keep";
        this.beaconApi = false;
        this.transport = xmlHttpTransport;
        this.customHeaders = function () { return ({}); };
        this.queue = new MemoryQueue();
        this.maxSendAttempts = 4;
        this.retryTimeout = [500, 1e12];
        this.flushing = false;
        this.attempt = 1;
    }
    EventlakeClientImpl.prototype.identify = function (props, doNotSendEvent) {
        this.userProperties = __assign(__assign({}, this.userProperties), props);
        getLogger().debug("identify() executed for user", props);
        if (this.userIdPersistence) {
            this.userIdPersistence.save(props);
        }
        else {
            getLogger().warn("identify() method is called before Eventlake initialization");
        }
        if (!doNotSendEvent) {
            return this.track("user_identify", {});
        }
        else {
            return Promise.resolve();
        }
    };
    EventlakeClientImpl.prototype.rawTrack = function (payload) {
        return this.sendJson(payload);
    };
    EventlakeClientImpl.prototype.makeEvent = function (event_type, src, payload) {
        var _a;
        var env = payload.env, payloadData = __rest(payload, ["env"]);
        if (!env) {
            env = isBrowser() ? envs.browser() : envs.empty();
        }
        this.restoreId();
        var context = this.getCtx(env);
        var persistentProps = __assign(__assign({}, this.permanentProperties.globalProps), ((_a = this.permanentProperties.propsPerEvent[event_type]) !== null && _a !== void 0 ? _a : {}));
        var base = __assign({ api_key: this.apiKey, src: src, event_type: event_type }, payloadData);
        var sourceIp = env.getSourceIp();
        if (sourceIp) {
            base["source_ip"] = sourceIp;
        }
        return __assign(__assign(__assign({}, persistentProps), context), base);
    };
    EventlakeClientImpl.prototype._send3p = function (sourceType, object, type) {
        var eventType = "3rdparty";
        if (type && type !== "") {
            eventType = type;
        }
        var e = this.makeEvent(eventType, sourceType, {
            src_payload: object,
        });
        return this.sendJson(e);
    };
    EventlakeClientImpl.prototype.sendJson = function (json) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.maxSendAttempts > 1)) return [3 /*break*/, 1];
                        this.queue.push([json, 0]);
                        this.scheduleFlush(0);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.doSendJson(json)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventlakeClientImpl.prototype.doSendJson = function (json) {
        var _this = this;
        var cookiePolicy = this.cookiePolicy !== "keep" ? "&cookie_policy=".concat(this.cookiePolicy) : "";
        var ipPolicy = this.ipPolicy !== "keep" ? "&ip_policy=".concat(this.ipPolicy) : "";
        var urlPrefix = isBrowser() ? "/api/v1/event" : "/api/v1/s2s/event";
        var url = "".concat(this.apiHost).concat(urlPrefix, "?token=").concat(this.apiKey).concat(cookiePolicy).concat(ipPolicy);
        if (this.obfuscateUrl) {
            url = "".concat(this.apiHost, "/api.").concat(generateRandom(), "?p_").concat(generateRandom(), "=").concat(this.apiKey).concat(cookiePolicy).concat(ipPolicy);
        }
        var jsonString = JSON.stringify(json);
        getLogger().debug("Sending payload to ".concat(url), jsonString);
        return this.transport(url, jsonString, this.customHeaders(), function (code, body) { return _this.postHandle(code, body); });
    };
    EventlakeClientImpl.prototype.scheduleFlush = function (timeout) {
        var _this = this;
        if (this.flushing) {
            return;
        }
        this.flushing = true;
        if (typeof timeout === "undefined") {
            var random = Math.random() + 1;
            var factor = Math.pow(2, this.attempt++);
            timeout = Math.min(this.retryTimeout[0] * random * factor, this.retryTimeout[1]);
        }
        getLogger().debug("Event queue will be flushed in ".concat(timeout, " ms."));
        setTimeout(function () { return _this.flush(); }, timeout);
    };
    EventlakeClientImpl.prototype.flush = function () {
        return __awaiter(this, void 0, Promise, function () {
            var queue;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (isBrowser() && !window.navigator.onLine) {
                            this.flushing = false;
                            this.scheduleFlush();
                        }
                        queue = this.queue.flush();
                        this.flushing = false;
                        if (queue.length === 0) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.doSendJson(queue.map(function (el) { return el[0]; }))];
                    case 2:
                        _b.sent();
                        this.attempt = 1;
                        getLogger().debug("".concat(queue.length, " events has been flushed from queue"));
                        return [3 /*break*/, 4];
                    case 3:
                        _b.sent();
                        queue = queue.map(function (el) { return [el[0], el[1] + 1]; }).filter(function (el) {
                            if (el[1] >= _this.maxSendAttempts) {
                                getLogger().error("Max attemp (".concat(_this.maxSendAttempts, ") done. Queued events will be dropped after ").concat(el[1], " attempt."));
                                return false;
                            }
                            return true;
                        });
                        if (queue.length > 0) {
                            (_a = this.queue).push.apply(_a, queue);
                            this.scheduleFlush();
                        }
                        else {
                            this.attempt = 1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EventlakeClientImpl.prototype.postHandle = function (status, response) {
        if (this.cookiePolicy === "strict" || this.cookiePolicy === "comply") {
            if (status === 200) {
                var data = response;
                if (typeof response === "string") {
                    data = JSON.parse(response);
                }
                if (!data["delete_cookie"]) {
                    return;
                }
            }
            this.userIdPersistence.delete();
            this.propsPersistance.delete();
            deleteCookie(this.idCookieName);
        }
        if (status === 200) {
            var data = response;
            if (typeof response === "string" && response.length > 0) {
                data = JSON.parse(response);
                var extras = data["eventlake_sdk_extras"];
                if (extras && extras.length > 0) {
                    var isWindow = isBrowser();
                    if (!isWindow) {
                        getLogger().error("Tags are supported only in browsers.");
                    }
                    else {
                        for (var _i = 0, extras_1 = extras; _i < extras_1.length; _i++) {
                            var _a = extras_1[_i], type = _a.type, id = _a.id, value = _a.value;
                            if (type === "tag") {
                                var tag = document.createElement("div");
                                tag.id = id;
                                insertAndExecute(tag, value);
                                if (tag.childElementCount > 0) {
                                    document.body.appendChild(tag);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    EventlakeClientImpl.prototype.getCtx = function (env) {
        var now = new Date();
        var props = env.describeClient() || {};
        return __assign(__assign({ event_id: "", user: __assign({ anonymous_id: this.cookiePolicy !== "strict"
                    ? env.getAnonymousId({
                        name: this.idCookieName,
                        domain: this.cookieDomain,
                    })
                    : "" }, this.userProperties), ids: this._getIds(), utc_time: reformatDate(now.toISOString()), local_tz_offset: now.getTimezoneOffset() }, props), getDataFromParams(parseQuery(props.doc_search)));
    };
    EventlakeClientImpl.prototype._getIds = function () {
        if (!isBrowser()) {
            return {};
        }
        var cookies = getCookies(false);
        var res = {};
        for (var _i = 0, _a = Object.entries(cookies); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (this._3pCookies[key]) {
                res[key.charAt(0) == "_" ? key.substr(1) : key] = value;
            }
        }
        return res;
    };
    EventlakeClientImpl.prototype.track = function (type, payload) {
        var data = payload || {};
        getLogger().debug("track() executed for event type", type, data);
        var e = this.makeEvent(type, "eventlake", payload || {});
        return this.sendJson(e);
    };
    EventlakeClientImpl.prototype.init = function (options) {
        var _this = this;
        var _a, _b, _c, _d;
        if (isBrowser() && !options.force_use_fetch) {
            if (options.fetch) {
                getLogger().warn("Custom fetch is passed. Eventlake in browser will ignore this");
            }
            this.transport = this.beaconApi ? beaconTransport : xmlHttpTransport;
        }
        else {
            if (!options.fetch && !globalThis.fetch) {
                throw new Error("EventLake runs in Node environment. However, neither EventlakeOptions.fetch is provided, nor global fetch function is defined. \n" +
                    "Please, provide custom fetch implementation. You can get it via node-fetch package");
            }
            this.transport = fetchTransport(options.fetch || globalThis.fetch);
        }
        if (options.custom_headers &&
            typeof options.custom_headers === "function") {
            this.customHeaders = options.custom_headers;
        }
        else if (options.custom_headers) {
            this.customHeaders = function () { return options.custom_headers; };
        }
        if (options.console_transport === true) {
            getLogger().warn('eventlakeClient is configured with "echo" transport. Outgoing requests will be written to console');
            this.transport = consoleTransport;
        }
        if (options.ip_policy) {
            this.ipPolicy = options.ip_policy;
        }
        if (options.cookie_policy) {
            this.cookiePolicy = options.cookie_policy;
        }
        if (options.privacy_policy === "strict") {
            this.ipPolicy = "strict";
            this.cookiePolicy = "strict";
        }
        if (options.use_beacon_api && navigator.sendBeacon) {
            this.beaconApi = true;
        }
        //can't handle delete cookie response when beacon api
        if (this.cookiePolicy === "comply" && this.beaconApi) {
            this.cookiePolicy = "strict";
        }
        if (options.log_level) {
            setRootLogLevel(options.log_level);
        }
        this.initialOptions = options;
        getLogger().debug("Initializing EventLake", options, EVENTLAKE_VERSION);
        if (!options.key) {
            getLogger().error("Failed to initialize EventLake. API key is not passed.");
            return;
        }
        this.cookieDomain = options.cookie_domain || getCookieDomain();
        this.apiHost = getHostWithProtocol(options["api_host"] || EVENTLAKE_API_HOST);
        this.obfuscateUrl = options.obfuscate_url || false;
        this.idCookieName = options.cookie_name || "__eventlake_id";
        this.apiKey = options.key;
        if (this.cookiePolicy === "strict") {
            this.propsPersistance = new NoPersistence();
        }
        else {
            this.propsPersistance = isBrowser()
                ? new CookiePersistence(this.cookieDomain, this.idCookieName + "_props")
                : new NoPersistence();
        }
        if (this.cookiePolicy === "strict") {
            this.userIdPersistence = new NoPersistence();
        }
        else {
            this.userIdPersistence = isBrowser()
                ? new CookiePersistence(this.cookieDomain, this.idCookieName + "_usr")
                : new NoPersistence();
        }
        if (this.propsPersistance) {
            var restored = this.propsPersistance.restore();
            if (restored) {
                this.permanentProperties = restored;
                this.permanentProperties.globalProps = (_a = restored.globalProps) !== null && _a !== void 0 ? _a : {};
                this.permanentProperties.propsPerEvent = (_b = restored.propsPerEvent) !== null && _b !== void 0 ? _b : {};
            }
            getLogger().debug("Properties loaded from cookies", this.permanentProperties);
        }
        if (options.capture_3rd_party_cookies === false) {
            this._3pCookies = {};
        }
        else {
            (options.capture_3rd_party_cookies || [
                "_ga",
                "_fbp",
                "_ym_uid",
                "ajs_user_id",
                "ajs_anonymous_id",
            ]).forEach(function (name) { return (_this._3pCookies[name] = true); });
        }
        if (options.ga_interceptor) {
            getLogger().warn("GA event interceptor isn't supported anymore");
        }
        if (options.segment_interceptor) {
            interceptSegmentCalls(this);
        }
        if (isBrowser()) {
            if (!options.disable_event_persistence) {
                this.queue = new LocalStorageQueue("eventlake-event-queue");
                this.scheduleFlush(0);
            }
            window.addEventListener("beforeunload", function () { return _this.flush(); });
        }
        this.retryTimeout = [
            (_c = options.min_send_timeout) !== null && _c !== void 0 ? _c : this.retryTimeout[0],
            (_d = options.max_send_timeout) !== null && _d !== void 0 ? _d : this.retryTimeout[1],
        ];
        if (!!options.max_send_attempts) {
            this.maxSendAttempts = options.max_send_attempts;
        }
        this.initialized = true;
    };
    EventlakeClientImpl.prototype.interceptAnalytics = function (analytics) {
        var _this = this;
        var interceptor = function (chain) {
            var _a;
            try {
                var payload = __assign({}, chain.payload);
                getLogger().debug("Segment payload intercepted", payload.obj);
                var integration = chain.integrations["Segment.io"];
                if (integration && integration.analytics) {
                    var analyticsOriginal = integration.analytics;
                    if (typeof analyticsOriginal.user === "function" &&
                        analyticsOriginal.user() &&
                        typeof analyticsOriginal.user().id === "function") {
                        payload.obj.userId = analyticsOriginal.user().id();
                    }
                }
                if ((_a = payload === null || payload === void 0 ? void 0 : payload.obj) === null || _a === void 0 ? void 0 : _a.timestamp) {
                    payload.obj.sentAt = payload.obj.timestamp;
                }
                var type = chain.payload.type();
                if (type === "track") {
                    type = chain.payload.event();
                }
                _this._send3p("ajs", payload, type);
            }
            catch (e) {
                getLogger().warn("Event sending failed", e);
            }
            chain.next(chain.payload);
        };
        if (typeof analytics.addSourceMiddleware === "function") {
            //analytics is fully initialized
            getLogger().debug("analytics.js is initialized");
            getLogger().debug("Calling addSourceMiddleware of analytics");
            analytics.addSourceMiddleware(interceptor);
        }
        else {
            getLogger().debug("analytics.js initialization failed");
            analytics.push(["addSourceMiddleware", interceptor]);
        }
    };
    EventlakeClientImpl.prototype.restoreId = function () {
        if (this.userIdPersistence) {
            var props = this.userIdPersistence.restore();
            if (props) {
                this.userProperties = __assign(__assign({}, props), this.userProperties);
            }
        }
    };
    EventlakeClientImpl.prototype.set = function (properties, opts) {
        var _a;
        var eventType = opts === null || opts === void 0 ? void 0 : opts.eventType;
        var persist = (opts === null || opts === void 0 ? void 0 : opts.persist) === undefined || (opts === null || opts === void 0 ? void 0 : opts.persist);
        if (eventType !== undefined) {
            var current = (_a = this.permanentProperties.propsPerEvent[eventType]) !== null && _a !== void 0 ? _a : {};
            this.permanentProperties.propsPerEvent[eventType] = __assign(__assign({}, current), properties);
        }
        else {
            this.permanentProperties.globalProps = __assign(__assign({}, this.permanentProperties.globalProps), properties);
        }
        if (this.propsPersistance && persist) {
            this.propsPersistance.save(this.permanentProperties);
        }
    };
    EventlakeClientImpl.prototype.unset = function (propertyName, opts) {
        requireWindow();
        var eventType = opts === null || opts === void 0 ? void 0 : opts.eventType;
        var persist = (opts === null || opts === void 0 ? void 0 : opts.persist) === undefined || (opts === null || opts === void 0 ? void 0 : opts.persist);
        if (!eventType) {
            delete this.permanentProperties.globalProps[propertyName];
        }
        else if (this.permanentProperties.propsPerEvent[eventType]) {
            delete this.permanentProperties.propsPerEvent[eventType][propertyName];
        }
        if (this.propsPersistance && persist) {
            this.propsPersistance.save(this.permanentProperties);
        }
    };
    return EventlakeClientImpl;
}());

exports.CookiePersistence = CookiePersistence;
exports.EVENTLAKE_API_HOST = EVENTLAKE_API_HOST;
exports.EVENTLAKE_VERSION = EVENTLAKE_VERSION;
exports.NoPersistence = NoPersistence;
exports.envs = envs;
exports.eventlakeClient = eventlakeClient;
exports.fetchApi = fetchApi;
exports.fetchTransport = fetchTransport;
exports.httpApi = httpApi;
exports.interceptSegmentCalls = interceptSegmentCalls;
exports.xmlHttpTransport = xmlHttpTransport;
