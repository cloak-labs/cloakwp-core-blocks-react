"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const Columns = ({ className, style, children, ...props }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, styles_1.cx)("grid", className), style: style, ...props, children: children }));
exports.Columns = Columns;
