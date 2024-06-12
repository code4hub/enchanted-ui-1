"use strict";
/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMuiLinkThemeOverrides = void 0;
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("@mui/material/Link"));
/**
 * Override out of the box styling from mui to align with designer theme
 * @returns override Link component styles and prop
 */
const getMuiLinkThemeOverrides = () => {
    return {
        MuiLink: {
            defaultProps: {
                align: 'inherit',
                gutterBottom: false,
                noWrap: false,
                paragraph: false,
            },
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        '&[disabled]': {
                            color: theme.palette.text.disabled,
                            cursor: 'default',
                            pointerEvents: 'none',
                            outline: 'none',
                            border: 'transparent 1px solid',
                            textDecorationColor: theme.palette.text.disabled,
                            '&:focus': {
                                border: 'transparent 1px solid',
                            },
                        },
                        '&:hover': {
                            color: theme.palette.primary.dark,
                            textDecorationColor: theme.palette.primary.dark,
                        },
                        '&.Mui-focusVisible': {
                            border: `${theme.palette.primary.main} 1px solid`,
                            outline: 'none',
                            borderRadius: '2px',
                            '&:hover': {
                                color: theme.palette.primary.dark,
                                textDecorationColor: theme.palette.primary.dark,
                            },
                        },
                        paddingLeft: '2px',
                        paddingRight: '2px',
                        display: 'inline-block',
                        border: 'transparent 1px solid',
                    };
                },
                underlineAlways: ({ theme }) => {
                    return {
                        textDecoration: 'underline',
                        textDecorationColor: theme.palette.primary.main,
                    };
                },
            },
        },
    };
};
exports.getMuiLinkThemeOverrides = getMuiLinkThemeOverrides;
const Link = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement(Link_1.default, Object.assign({}, props)));
};
Link.defaultProps = {
    disabled: false,
};
exports.default = Link;
