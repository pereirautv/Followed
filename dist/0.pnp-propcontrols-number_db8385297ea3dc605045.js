webpackJsonp98b95005_3f63_42aa_bd31_57dd1979bbe8_0_0_1([0],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(212));
__export(__webpack_require__(207));



/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(63), exports);


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(64), exports);


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var TextField_1 = __webpack_require__(213);
var telemetry = __webpack_require__(230);
var Utilities_1 = __webpack_require__(205);
var strings = __webpack_require__(204);
var PropertyFieldNumberHost = (function (_super) {
    __extends(PropertyFieldNumberHost, _super);
    function PropertyFieldNumberHost(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Validate if field value is a number
         * @param value
         */
        _this._validateNumber = function (value) {
            if (isNaN(Number(value))) {
                return strings.NotNumberValidationMessage + " " + value + ".";
            }
            var nrValue = parseInt(value);
            // Check if number is lower or equal to minimum value
            if (_this.props.minValue && nrValue < _this.props.minValue) {
                return strings.MinimumNumberValidationMessage + " " + _this.props.minValue;
            }
            // Check if the number is greater than the maximum value
            if (_this.props.maxValue && nrValue > _this.props.maxValue) {
                return strings.MaximumNumberValidationMessage + " " + _this.props.maxValue;
            }
            if (_this.props.onGetErrorMessage) {
                return _this.props.onGetErrorMessage(nrValue);
            }
            else {
                return '';
            }
        };
        /**
         * On field change event handler
         */
        _this._onChanged = function (value) {
            // Update state
            _this.setState({
                value: value
            });
            if (!isNaN(Number(value))) {
                var nrValue = parseInt(value);
                if ((!_this.props.minValue || nrValue >= _this.props.minValue) && (!_this.props.maxValue || nrValue <= _this.props.maxValue)) {
                    // Trigger change for the web part
                    _this.props.onChanged(nrValue);
                }
            }
        };
        telemetry.track('PropertyFieldNumber', {
            disabled: props.disabled
        });
        _this.state = {
            value: _this.props.value ? _this.props.value.toString() : null
        };
        _this._async = new Utilities_1.Async(_this);
        _this._delayedChange = _this._async.debounce(_this._onChanged, _this.props.deferredValidationTime ? _this.props.deferredValidationTime : 200);
        return _this;
    }
    /**
     * componentDidUpdate lifecycle hook
     *
     * @param prevProps
     * @param prevState
     */
    PropertyFieldNumberHost.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                value: this.props.value ? this.props.value.toString() : null
            });
        }
    };
    /**
     * Render field
     */
    PropertyFieldNumberHost.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(TextField_1.TextField, { label: this.props.label, ariaLabel: this.props.ariaLabel, onChanged: this._delayedChange, value: this.state.value, description: this.props.description, placeholder: this.props.placeholder, errorMessage: this.props.errorMessage, onGetErrorMessage: this._validateNumber, deferredValidationTime: this.props.deferredValidationTime, disabled: this.props.disabled })));
    };
    return PropertyFieldNumberHost;
}(React.Component));
exports.default = PropertyFieldNumberHost;



/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Label_1 = __webpack_require__(215);
var Icon_1 = __webpack_require__(219);
var Utilities_1 = __webpack_require__(205);
var stylesImport = __webpack_require__(226);
var styles = stylesImport;
var Styling_1 = __webpack_require__(206);
var TextField = /** @class */ (function (_super) {
    tslib_1.__extends(TextField, _super);
    function TextField(props) {
        var _this = _super.call(this, props) || this;
        _this._textElement = Utilities_1.createRef();
        _this._onRenderLabel = function (props) {
            if (props.label) {
                return (React.createElement(Label_1.Label, { htmlFor: _this._id }, props.label));
            }
            return null;
        };
        _this._onRenderDescription = function (props) {
            if (props.description) {
                return (React.createElement("span", { className: Utilities_1.css('ms-TextField-description', styles.description) }, props.description));
            }
            return null;
        };
        _this._warnDeprecations({
            'iconClass': 'iconProps',
            'addonString': 'prefix',
            'onRenderAddon': 'onRenderPrefix'
        });
        _this._warnMutuallyExclusive({
            'value': 'defaultValue'
        });
        _this._id = Utilities_1.getId('TextField');
        _this._descriptionId = Utilities_1.getId('TextFieldDescription');
        if (props.value !== undefined) {
            _this._latestValue = props.value;
        }
        else if (props.defaultValue !== undefined) {
            _this._latestValue = props.defaultValue;
        }
        else {
            _this._latestValue = '';
        }
        _this.state = {
            value: _this._latestValue,
            isFocused: false,
            errorMessage: ''
        };
        _this._onInputChange = _this._onInputChange.bind(_this);
        _this._onFocus = _this._onFocus.bind(_this);
        _this._onBlur = _this._onBlur.bind(_this);
        _this._delayedValidate = _this._async.debounce(_this._validate, _this.props.deferredValidationTime);
        _this._lastValidation = 0;
        _this._isDescriptionAvailable = false;
        return _this;
    }
    Object.defineProperty(TextField.prototype, "value", {
        /**
         * Gets the current value of the text field.
         */
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype.componentDidMount = function () {
        this._isMounted = true;
        this._adjustInputHeight();
        if (this.props.validateOnLoad) {
            this._validate(this.state.value);
        }
    };
    TextField.prototype.componentWillReceiveProps = function (newProps) {
        var _this = this;
        var onBeforeChange = this.props.onBeforeChange;
        if (newProps.value !== undefined && newProps.value !== this.state.value) {
            if (onBeforeChange) {
                onBeforeChange(newProps.value);
            }
            this._latestValue = newProps.value;
            this.setState({
                value: newProps.value,
                errorMessage: ''
            }, function () {
                _this._adjustInputHeight();
            });
            this._delayedValidate(newProps.value);
        }
    };
    TextField.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    TextField.prototype.render = function () {
        var _a = this.props, className = _a.className, description = _a.description, disabled = _a.disabled, iconClass = _a.iconClass, iconProps = _a.iconProps, multiline = _a.multiline, required = _a.required, underlined = _a.underlined, borderless = _a.borderless, addonString = _a.addonString, // @deprecated
        prefix = _a.prefix, suffix = _a.suffix, _b = _a.onRenderAddon, onRenderAddon = _b === void 0 ? this._onRenderAddon : _b, // @deprecated
        _c = _a.onRenderPrefix, // @deprecated
        onRenderPrefix = _c === void 0 ? this._onRenderPrefix : _c, _d = _a.onRenderSuffix, onRenderSuffix = _d === void 0 ? this._onRenderSuffix : _d, _e = _a.onRenderLabel, onRenderLabel = _e === void 0 ? this._onRenderLabel : _e, _f = _a.onRenderDescription, onRenderDescription = _f === void 0 ? this._onRenderDescription : _f;
        var isFocused = this.state.isFocused;
        var errorMessage = this._errorMessage;
        // If a custom description render function is supplied then treat description as always available.
        // Otherwise defer to the presence of description or error message text.
        this._isDescriptionAvailable = Boolean(this.props.onRenderDescription || description || errorMessage);
        var textFieldClassName = Utilities_1.css('ms-TextField', styles.root, className, (_g = {},
            _g['is-required ' + styles.rootIsRequiredLabel] = this.props.label && required,
            _g['is-required ' + styles.rootIsRequiredPlaceholderOnly] = !this.props.label && required,
            _g['is-disabled ' + styles.rootIsDisabled] = disabled,
            _g['is-active ' + styles.rootIsActive] = isFocused,
            _g['ms-TextField--multiline ' + styles.rootIsMultiline] = multiline,
            _g['ms-TextField--underlined ' + styles.rootIsUnderlined] = underlined,
            _g['ms-TextField--borderless ' + styles.rootIsBorderless] = borderless,
            _g));
        return (React.createElement("div", { className: textFieldClassName },
            React.createElement("div", { className: Utilities_1.css('ms-TextField-wrapper', styles.wrapper, underlined ? errorMessage && styles.invalid : '') },
                onRenderLabel(this.props, this._onRenderLabel),
                React.createElement("div", { className: Utilities_1.css('ms-TextField-fieldGroup', styles.fieldGroup, isFocused && styles.fieldGroupIsFocused, errorMessage && styles.invalid) },
                    (addonString !== undefined || this.props.onRenderAddon) && (React.createElement("div", { className: Utilities_1.css('ms-TextField-prefix', styles.fieldPrefixSuffix) }, onRenderAddon(this.props, this._onRenderAddon))),
                    (prefix !== undefined || this.props.onRenderPrefix) && (React.createElement("div", { className: Utilities_1.css('ms-TextField-prefix', styles.fieldPrefixSuffix) }, onRenderPrefix(this.props, this._onRenderPrefix))),
                    multiline ? this._renderTextArea() : this._renderInput(),
                    (iconClass || iconProps) && React.createElement(Icon_1.Icon, tslib_1.__assign({ className: Utilities_1.css(iconClass, styles.icon) }, iconProps)),
                    (suffix !== undefined || this.props.onRenderSuffix) && (React.createElement("div", { className: Utilities_1.css('ms-TextField-suffix', styles.fieldPrefixSuffix) }, onRenderSuffix(this.props, this._onRenderSuffix))))),
            this._isDescriptionAvailable &&
                React.createElement("span", { id: this._descriptionId },
                    onRenderDescription(this.props, this._onRenderDescription),
                    errorMessage &&
                        React.createElement("div", { "aria-live": 'assertive' },
                            React.createElement(Utilities_1.DelayedRender, null,
                                React.createElement("p", { className: Utilities_1.css('ms-TextField-errorMessage', Styling_1.AnimationClassNames.slideDownIn20, styles.errorMessage) },
                                    React.createElement("span", { className: styles.errorText, "data-automation-id": 'error-message' }, errorMessage)))))));
        var _g;
    };
    /**
     * Sets focus on the text field
     */
    TextField.prototype.focus = function () {
        if (this._textElement.current) {
            this._textElement.current.focus();
        }
    };
    /**
     * Selects the text field
     */
    TextField.prototype.select = function () {
        if (this._textElement.current) {
            this._textElement.current.select();
        }
    };
    /**
     * Sets the selection start of the text field to a specified value
     */
    TextField.prototype.setSelectionStart = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionStart = value;
        }
    };
    /**
     * Sets the selection end of the text field to a specified value
     */
    TextField.prototype.setSelectionEnd = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionEnd = value;
        }
    };
    Object.defineProperty(TextField.prototype, "selectionStart", {
        /**
         * Gets the selection start of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextField.prototype, "selectionEnd", {
        /**
         * Gets the selection end of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start Index of the start of the selection.
     * @param end Index of the end of the selection.
     */
    TextField.prototype.setSelectionRange = function (start, end) {
        if (this._textElement.current) {
            this._textElement.current.setSelectionRange(start, end);
        }
    };
    TextField.prototype._onFocus = function (ev) {
        if (this.props.onFocus) {
            this.props.onFocus(ev);
        }
        this.setState({ isFocused: true });
        if (this.props.validateOnFocusIn) {
            this._validate(this.state.value);
        }
    };
    TextField.prototype._onBlur = function (ev) {
        if (this.props.onBlur) {
            this.props.onBlur(ev);
        }
        this.setState({ isFocused: false });
        if (this.props.validateOnFocusOut) {
            this._validate(this.state.value);
        }
    };
    // @deprecated
    TextField.prototype._onRenderAddon = function (props) {
        var addonString = props.addonString;
        return (React.createElement("span", { style: { paddingBottom: '1px' } }, addonString));
    };
    TextField.prototype._onRenderPrefix = function (props) {
        var prefix = props.prefix;
        return (React.createElement("span", { style: { paddingBottom: '1px' } }, prefix));
    };
    TextField.prototype._onRenderSuffix = function (props) {
        var suffix = props.suffix;
        return (React.createElement("span", { style: { paddingBottom: '1px' } }, suffix));
    };
    TextField.prototype._getTextElementClassName = function () {
        var textFieldClassName;
        if (this.props.multiline && !this.props.resizable) {
            textFieldClassName = Utilities_1.css('ms-TextField-field ms-TextField-field--unresizable', styles.field, styles.fieldIsUnresizable);
        }
        else {
            textFieldClassName = Utilities_1.css('ms-TextField-field', styles.field);
        }
        return Utilities_1.css(textFieldClassName, this.props.inputClassName, (_a = {},
            _a[styles.hasIcon] = !!this.props.iconClass,
            _a));
        var _a;
    };
    Object.defineProperty(TextField.prototype, "_errorMessage", {
        get: function () {
            var errorMessage = this.state.errorMessage;
            if (!errorMessage) {
                errorMessage = this.props.errorMessage;
            }
            return errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype._renderTextArea = function () {
        var textAreaProps = Utilities_1.getNativeProps(this.props, Utilities_1.textAreaProperties, ['defaultValue']);
        return (React.createElement("textarea", tslib_1.__assign({ id: this._id }, textAreaProps, { ref: this._textElement, value: this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._getTextElementClassName(), "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this.state.errorMessage, "aria-label": this.props.ariaLabel, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextField.prototype._renderInput = function () {
        var inputProps = Utilities_1.getNativeProps(this.props, Utilities_1.inputProperties, ['defaultValue']);
        return (React.createElement("input", tslib_1.__assign({ type: 'text', id: this._id }, inputProps, { ref: this._textElement, value: this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._getTextElementClassName(), "aria-label": this.props.ariaLabel, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this.state.errorMessage, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextField.prototype._onInputChange = function (event) {
        var _this = this;
        var element = event.target;
        var value = element.value;
        // Avoid doing unnecessary work when the value has not changed.
        if (value === this._latestValue) {
            return;
        }
        this._latestValue = value;
        this.setState({
            value: value
        }, function () {
            _this._adjustInputHeight();
            if (_this.props.onChanged) {
                _this.props.onChanged(value);
            }
        });
        var _a = this.props, validateOnFocusIn = _a.validateOnFocusIn, validateOnFocusOut = _a.validateOnFocusOut;
        if (!(validateOnFocusIn || validateOnFocusOut)) {
            this._delayedValidate(value);
        }
        var onBeforeChange = this.props.onBeforeChange;
        onBeforeChange(value);
    };
    TextField.prototype._validate = function (value) {
        var _this = this;
        var _a = this.props, validateOnFocusIn = _a.validateOnFocusIn, validateOnFocusOut = _a.validateOnFocusOut;
        // In case of _validate called multi-times during executing validate logic with promise return.
        if (this._latestValidateValue === value && !(validateOnFocusIn || validateOnFocusOut)) {
            return;
        }
        this._latestValidateValue = value;
        var onGetErrorMessage = this.props.onGetErrorMessage;
        var result = onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string') {
                this.setState({
                    errorMessage: result
                });
                this._notifyAfterValidate(value, result);
            }
            else {
                var currentValidation_1 = ++this._lastValidation;
                result.then(function (errorMessage) {
                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
                        _this.setState({ errorMessage: errorMessage });
                    }
                    _this._notifyAfterValidate(value, errorMessage);
                });
            }
        }
        else {
            this._notifyAfterValidate(value, '');
        }
    };
    TextField.prototype._notifyAfterValidate = function (value, errorMessage) {
        if (this._isMounted &&
            value === this.state.value &&
            this.props.onNotifyValidationResult) {
            this.props.onNotifyValidationResult(errorMessage, value);
        }
    };
    TextField.prototype._adjustInputHeight = function () {
        if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
            var textField = this._textElement.current;
            textField.style.height = '';
            var scrollHeight = textField.scrollHeight + 2; // +2 to avoid vertical scroll bars
            textField.style.height = scrollHeight + 'px';
        }
    };
    TextField.defaultProps = {
        multiline: false,
        resizable: true,
        autoAdjustHeight: false,
        underlined: false,
        borderless: false,
        onChanged: function () { },
        onBeforeChange: function () { },
        onNotifyValidationResult: function () { },
        onGetErrorMessage: function () { return undefined; },
        deferredValidationTime: 200,
        errorMessage: '',
        validateOnFocusIn: false,
        validateOnFocusOut: false,
        validateOnLoad: true,
    };
    return TextField;
}(Utilities_1.BaseComponent));
exports.TextField = TextField;


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable */
var React = __webpack_require__(2);
/* tslint:enable */
var Icon_types_1 = __webpack_require__(210);
var Image_1 = __webpack_require__(222);
var Image_types_1 = __webpack_require__(211);
var Utilities_1 = __webpack_require__(205);
var Styling_1 = __webpack_require__(206);
var getClassNames = Utilities_1.classNamesFunction();
var IconBase = /** @class */ (function (_super) {
    tslib_1.__extends(IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === Image_types_1.ImageLoadState.error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false,
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, getStyles = _a.getStyles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs, styles = _a.styles;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = this.props.iconType === Icon_types_1.IconType.image || this.props.iconType === Icon_types_1.IconType.Image;
        var _b = this._getIconContent(iconName), iconClassName = _b.iconClassName, children = _b.children;
        var classNames = getClassNames(getStyles, {
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder,
            styles: styles
        });
        var containerProps = ariaLabel ?
            {
                'aria-label': ariaLabel,
            } : {
            role: 'presentation',
            'aria-hidden': true,
        };
        var RootType = isImage ? 'div' : 'i';
        var nativeProps = Utilities_1.getNativeProps(this.props, Utilities_1.htmlElementProperties);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = tslib_1.__assign({}, this.props.imageProps, { onLoadingStateChange: this.onImageLoadingStateChange });
        var ImageType = imageLoadError && imageErrorAs || Image_1.Image;
        return (React.createElement(RootType, tslib_1.__assign({ "data-icon-name": iconName }, nativeProps, containerProps, { className: classNames.root }), isImage ? (React.createElement(ImageType, tslib_1.__assign({}, imageProps))) : (children)));
    };
    IconBase.prototype._getIconContent = function (name) {
        var iconDefinition = Styling_1.getIcon(name) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return {
            children: iconDefinition.code,
            iconClassName: iconDefinition.subset.className
        };
    };
    return IconBase;
}(Utilities_1.BaseComponent));
exports.IconBase = IconBase;


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType = exports.IconType || (exports.IconType = {}));


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit = exports.ImageFit || (exports.ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle = exports.ImageCoverStyle || (exports.ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState = exports.ImageLoadState || (exports.ImageLoadState = {}));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(26);
var sp_webpart_base_1 = __webpack_require__(61);
var PropertyFieldNumberHost_1 = __webpack_require__(207);
var PropertyFieldNumberBuilder = (function () {
    function PropertyFieldNumberBuilder(_targetProperty, _properties) {
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this._render.bind(this);
        this.properties.onDispose = this._dispose.bind(this);
    }
    PropertyFieldNumberBuilder.prototype._render = function (elem, context, changeCallback) {
        var props = this.properties;
        var element = React.createElement(PropertyFieldNumberHost_1.default, __assign({}, props, { onChanged: this._onChanged.bind(this) }));
        ReactDOM.render(element, elem);
        if (changeCallback) {
            this._onChangeCallback = changeCallback;
        }
    };
    PropertyFieldNumberBuilder.prototype._dispose = function (elem) {
        ReactDOM.unmountComponentAtNode(elem);
    };
    PropertyFieldNumberBuilder.prototype._onChanged = function (value) {
        if (this._onChangeCallback) {
            this._onChangeCallback(this.targetProperty, value);
        }
    };
    return PropertyFieldNumberBuilder;
}());
function PropertyFieldNumber(targetProperty, properties) {
    return new PropertyFieldNumberBuilder(targetProperty, __assign({}, properties, { onRender: null, onDispose: null }));
}
exports.PropertyFieldNumber = PropertyFieldNumber;



/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(214), exports);


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(208), exports);
tslib_1.__exportStar(__webpack_require__(228), exports);


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(216), exports);


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(217), exports);


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(205);
var Label_classNames_1 = __webpack_require__(218);
var Label = /** @class */ (function (_super) {
    tslib_1.__extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, required = _a.required, children = _a.children, className = _a.className, theme = _a.theme;
        return (React.createElement("label", tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { className: Label_classNames_1.getLabelClassNames(theme, className, !!disabled, !!required).root }), children));
    };
    Label = tslib_1.__decorate([
        Utilities_1.customizable('Label', ['theme'])
    ], Label);
    return Label;
}(Utilities_1.BaseComponent));
exports.Label = Label;


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(205);
var Styling_1 = __webpack_require__(206);
exports.getLabelClassNames = Utilities_1.memoizeFunction(function (theme, className, disabled, required) {
    return Styling_1.mergeStyleSets({
        root: ['ms-Label',
            {
                color: theme.semanticColors.bodyText,
                boxSizing: 'border-box',
                boxShadow: 'none',
                margin: 0,
                display: 'block',
                padding: '5px 0',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
            },
            disabled && {
                color: theme.semanticColors.disabledBodyText,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        color: 'GrayText'
                    },
                    _a)
            },
            required && {
                selectors: {
                    '::after': {
                        content: "' *'",
                        color: theme.semanticColors.errorText,
                        paddingRight: 12
                    }
                }
            },
            className]
    });
    var _a;
});


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(220), exports);


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(221), exports);
tslib_1.__exportStar(__webpack_require__(209), exports);
tslib_1.__exportStar(__webpack_require__(210), exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(205);
var Icon_base_1 = __webpack_require__(209);
var Icon_styles_1 = __webpack_require__(225);
/**
 * Icons are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
exports.Icon = Utilities_1.styled(Icon_base_1.IconBase, Icon_styles_1.getStyles);


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(205);
var Image_base_1 = __webpack_require__(223);
var Image_styles_1 = __webpack_require__(224);
exports.Image = Utilities_1.styled(Image_base_1.ImageBase, Image_styles_1.getStyles);


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(205);
var Image_types_1 = __webpack_require__(211);
var getClassNames = Utilities_1.classNamesFunction();
var KEY_PREFIX = 'fabricImage';
var ImageBase = /** @class */ (function (_super) {
    tslib_1.__extends(ImageBase, _super);
    function ImageBase(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = Image_types_1.ImageCoverStyle.portrait;
        _this._imageElement = Utilities_1.createRef();
        _this._frameElement = Utilities_1.createRef();
        _this._onImageLoaded = function (ev) {
            var _a = _this.props, src = _a.src, onLoad = _a.onLoad;
            if (onLoad) {
                onLoad(ev);
            }
            _this._computeCoverStyle(_this.props);
            if (src) {
                _this.setState({
                    loadState: Image_types_1.ImageLoadState.loaded
                });
            }
        };
        _this._onImageError = function (ev) {
            if (_this.props.onError) {
                _this.props.onError(ev);
            }
            _this.setState({
                loadState: Image_types_1.ImageLoadState.error
            });
        };
        _this.state = {
            loadState: Image_types_1.ImageLoadState.notLoaded
        };
        return _this;
    }
    ImageBase_1 = ImageBase;
    ImageBase.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: Image_types_1.ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === Image_types_1.ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange
            && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    ImageBase.prototype.render = function () {
        var imageProps = Utilities_1.getNativeProps(this.props, Utilities_1.imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame, getStyles = _a.getStyles, theme = _a.theme;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var classNames = getClassNames(getStyles, {
            theme: theme,
            className: className,
            width: width,
            height: height,
            maximizeFrame: maximizeFrame,
            shouldFadeIn: shouldFadeIn,
            shouldStartVisible: shouldStartVisible,
            isLoaded: loadState === Image_types_1.ImageLoadState.loaded || (loadState === Image_types_1.ImageLoadState.notLoaded && this.props.shouldStartVisible),
            isLandscape: coverStyle === Image_types_1.ImageCoverStyle.landscape,
            isCenter: imageFit === Image_types_1.ImageFit.center,
            isContain: imageFit === Image_types_1.ImageFit.contain,
            isCover: imageFit === Image_types_1.ImageFit.cover,
            isNone: imageFit === Image_types_1.ImageFit.none,
            isError: loadState === Image_types_1.ImageLoadState.error,
            isNotImageFit: imageFit === undefined
        });
        // If image dimensions aren't specified, the natural size of the image is used.
        return (React.createElement("div", { className: classNames.root, style: { width: width, height: height }, ref: this._frameElement },
            React.createElement("img", tslib_1.__assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: classNames.image, ref: this._imageElement, src: src, alt: alt, role: role }))));
    };
    ImageBase.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === Image_types_1.ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = this._imageElement.current ? src && (this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0) ||
                (this._imageElement.current.complete && ImageBase_1._svgRegex.test(src)) : false;
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: Image_types_1.ImageLoadState.loaded
                });
            }
        }
    };
    ImageBase.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === Image_types_1.ImageFit.cover || imageFit === Image_types_1.ImageFit.contain) &&
            this.props.coverStyle === undefined &&
            this._imageElement.current &&
            this._frameElement.current) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = Image_types_1.ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = Image_types_1.ImageCoverStyle.portrait;
            }
        }
    };
    ImageBase.defaultProps = {
        shouldFadeIn: true
    };
    ImageBase._svgRegex = /\.svg$/i;
    ImageBase = ImageBase_1 = tslib_1.__decorate([
        Utilities_1.customizable('Image', ['theme'])
    ], ImageBase);
    return ImageBase;
    var ImageBase_1;
}(Utilities_1.BaseComponent));
exports.ImageBase = ImageBase;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(206);
var GlobalClassNames = {
    root: 'ms-Image',
    rootMaximizeFrame: 'ms-Image--maximizeFrame',
    image: 'ms-Image-image',
    imageCenter: 'ms-Image-image--center',
    imageContain: 'ms-Image-image--contain',
    imageCover: 'ms-Image-image--cover',
    imageNone: 'ms-Image-image--none',
    imageLandscape: 'ms-Image-image--landscape',
    imagePortrait: 'ms-Image-image--portrait',
};
exports.getStyles = function (props) {
    var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var ImageFitStyles = {
        position: 'absolute',
        left: '50% /* @noflip */',
        top: '50%',
        transform: 'translate(-50%,-50%)' // @todo test RTL renders transform: translate(50%,-50%);
    };
    return ({
        root: [
            classNames.root,
            {
                overflow: 'hidden'
            },
            maximizeFrame && [
                classNames.rootMaximizeFrame,
                {
                    height: '100%',
                    width: '100%'
                }
            ],
            (isCenter || isContain || isCover) && {
                position: 'relative',
            },
            className
        ],
        image: [
            classNames.image,
            {
                display: 'block',
                opacity: 0
            },
            isLoaded && [
                'is-loaded',
                {
                    opacity: 1
                }
            ],
            isCenter && [
                classNames.imageCenter,
                ImageFitStyles
            ],
            isContain && [
                classNames.imageContain,
                isLandscape && {
                    width: '100%',
                    height: 'auto'
                },
                !isLandscape && {
                    width: 'auto',
                    height: '100%'
                },
                ImageFitStyles
            ],
            isCover && [
                classNames.imageCover,
                isLandscape && {
                    width: 'auto',
                    height: '100%'
                },
                !isLandscape && {
                    width: '100%',
                    height: 'auto'
                },
                ImageFitStyles
            ],
            isNone && [
                classNames.imageNone,
                {
                    width: 'auto',
                    height: 'auto'
                }
            ],
            isNotImageFit && [
                !!width && !height && {
                    height: 'auto',
                    width: '100%'
                },
                !width && !!height && {
                    height: '100%',
                    width: 'auto'
                },
                !!width && !!height && {
                    height: '100%',
                    width: '100%'
                }
            ],
            isLoaded && shouldFadeIn && !shouldStartVisible && Styling_1.AnimationClassNames.fadeIn400,
            isLandscape && classNames.imageLandscape,
            !isLandscape && classNames.imagePortrait,
            !isLoaded && 'is-notLoaded',
            shouldFadeIn && 'is-fadeIn',
            isError && 'is-error'
        ]
    });
};


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isImage && 'ms-Icon-imageContainer',
            isPlaceholder && 'ms-Icon-placeHolder',
            {
                display: 'inline-block',
            },
            isPlaceholder && {
                width: '1em'
            },
            isImage && {
                overflow: 'hidden'
            },
            iconClassName,
            className,
            styles && styles.root,
            styles && styles.imageContainer
        ],
    };
};


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(227);
load_themed_styles_1.loadStyles([{ "rawString": ".root_df60a678{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;position:relative}.screenReaderOnly_df60a678{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.fieldGroup_df60a678{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;border:1px solid " }, { "theme": "inputBorder", "defaultValue": "#a6a6a6" }, { "rawString": ";background:" }, { "theme": "inputBackground", "defaultValue": "#ffffff" }, { "rawString": ";height:32px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:relative}.fieldGroup_df60a678:hover{border-color:" }, { "theme": "inputBorderHovered", "defaultValue": "#212121" }, { "rawString": "}.fieldGroup_df60a678.fieldGroupIsFocused_df60a678{border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.fieldGroup_df60a678.fieldGroupIsFocused_df60a678{border-width:2px}.fieldGroup_df60a678.fieldGroupIsFocused_df60a678 .field_df60a678{padding:0 11px 0 11px}[dir='rtl'] .fieldGroup_df60a678.fieldGroupIsFocused_df60a678 .field_df60a678{padding:0 11px 0 11px}}.fieldGroup_df60a678.fieldGroupIsFocused_df60a678.invalid_df60a678{border-color:" }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": "}.rootIsDisabled_df60a678 .fieldGroup_df60a678{background-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.fieldGroup_df60a678:hover,.fieldGroup_df60a678.fieldGroupIsFocused_df60a678{border-color:Highlight}}.fieldGroup_df60a678::-ms-clear{display:none}.fieldGroup_df60a678 :-ms-input-placeholder,.fieldGroup_df60a678 :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup_df60a678 ::-ms-input-placeholder,.fieldGroup_df60a678 :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup :-ms-input-placeholder,.fieldGroup :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup ::-ms-input-placeholder,.fieldGroup :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.fieldGroup_df60a678 ::placeholder,.fieldGroup_df60a678 :-ms-input-placeholder{color:" }, { "theme": "inputPlaceholderText", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.root_df60a678.rootIsDisabled_df60a678 .field{background-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": "}.fieldPrefixSuffix_df60a678{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;line-height:1;padding:0 10px;white-space:nowrap}.field_df60a678{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;font-size:14px;border-radius:0;border:none;background:none;background-color:transparent;color:" }, { "theme": "bodyText", "defaultValue": "#333333" }, { "rawString": ";padding:0 12px 0 12px;width:100%;min-width:0;text-overflow:ellipsis;outline:0}[dir='rtl'] .field_df60a678{padding:0 12px 0 12px}.field_df60a678:active,.field_df60a678:focus,.field_df60a678:hover{outline:0}[dir='ltr'] .field_df60a678.hasIcon_df60a678{padding-right:24px}[dir='rtl'] .field_df60a678.hasIcon_df60a678{padding-left:24px}.field_df60a678[disabled]{background-color:transparent;border-color:transparent}.field_df60a678 .field_df60a678::-webkit-input-placeholder{color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.field_df60a678 .field_df60a678:-ms-input-placeholder{color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.field_df60a678 .field_df60a678::-ms-input-placeholder{color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.field .field::-webkit-input-placeholder{color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.field .field:-ms-input-placeholder{color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.field .field::-ms-input-placeholder{color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.field_df60a678 .field_df60a678::placeholder{color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.root_df60a678.rootIsRequiredLabel_df60a678 .ms-Label::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.root_df60a678.rootIsRequiredPlaceholderOnly_df60a678 .ms-TextField-fieldGroup::after{content:'*';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": ";position:absolute;top:-5px}[dir='ltr'] .root_df60a678.rootIsRequiredPlaceholderOnly_df60a678 .ms-TextField-fieldGroup::after{right:-10px}[dir='rtl'] .root_df60a678.rootIsRequiredPlaceholderOnly_df60a678 .ms-TextField-fieldGroup::after{left:-10px}.root_df60a678.rootIsActive_df60a678{border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_df60a678.rootIsActive_df60a678{border-width:2px}.root_df60a678.rootIsActive_df60a678 .field_df60a678{padding:0 11px 0 11px}[dir='rtl'] .root_df60a678.rootIsActive_df60a678 .field_df60a678{padding:0 11px 0 11px}}.icon_df60a678{pointer-events:none;position:absolute;bottom:5px;top:auto;font-size:16px;line-height:18px}html[dir='ltr'] .icon_df60a678{right:8px}html[dir='rtl'] .icon_df60a678{left:8px}.description_df60a678{color:" }, { "theme": "bodySubtext", "defaultValue": "#666666" }, { "rawString": ";font-size:11px}.rootIsBorderless_df60a678 .fieldGroup_df60a678{border-color:transparent;border-width:0}.root_df60a678.rootIsUnderlined_df60a678{border:0px solid " }, { "theme": "inputBorder", "defaultValue": "#a6a6a6" }, { "rawString": "}.root_df60a678.rootIsUnderlined_df60a678 .wrapper_df60a678{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:inherit;width:100%}.root_df60a678.rootIsUnderlined_df60a678 .wrapper_df60a678.invalid_df60a678,.root_df60a678.rootIsUnderlined_df60a678 .wrapper_df60a678.invalid_df60a678:focus,.root_df60a678.rootIsUnderlined_df60a678 .wrapper_df60a678.invalid_df60a678:hover{border-bottom:1px solid " }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": "}.root_df60a678.rootIsUnderlined_df60a678 .ms-Label{font-size:14px;line-height:22px;height:32px}[dir='ltr'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{margin-right:8px}[dir='rtl'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{margin-left:8px}[dir='ltr'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{padding-left:12px}[dir='rtl'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{padding-right:12px}.root_df60a678.rootIsUnderlined_df60a678 .fieldGroup_df60a678{-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0px;border-width:0}[dir='ltr'] .root_df60a678.rootIsUnderlined_df60a678 .fieldGroup_df60a678{text-align:left}[dir='rtl'] .root_df60a678.rootIsUnderlined_df60a678 .fieldGroup_df60a678{text-align:right}.root_df60a678.rootIsUnderlined_df60a678.rootIsDisabled_df60a678{border-color:" }, { "theme": "disabledBackground", "defaultValue": "#f4f4f4" }, { "rawString": "}.root_df60a678.rootIsUnderlined_df60a678.rootIsDisabled_df60a678 .ms-Label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.root_df60a678.rootIsUnderlined_df60a678.rootIsDisabled_df60a678 .field_df60a678{background-color:transparent;color:" }, { "theme": "disabledText", "defaultValue": "#a6a6a6" }, { "rawString": "}.root_df60a678.rootIsUnderlined_df60a678.rootIsDisabled_df60a678 .fieldGroup_df60a678{background-color:transparent}.root_df60a678.rootIsUnderlined_df60a678:hover:not(.rootIsActive_df60a678):not(.rootIsDisabled_df60a678){border-color:" }, { "theme": "inputBorderHovered", "defaultValue": "#212121" }, { "rawString": "}.root_df60a678.rootIsUnderlined_df60a678.rootIsActive_df60a678{border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_df60a678.rootIsUnderlined_df60a678.rootIsActive_df60a678{border-width:2px}.root_df60a678.rootIsUnderlined_df60a678.rootIsActive_df60a678 .field_df60a678{padding:0 11px 0 11px}[dir='rtl'] .root_df60a678.rootIsUnderlined_df60a678.rootIsActive_df60a678 .field_df60a678{padding:0 11px 0 11px}}@media screen and (-ms-high-contrast: active){.root_df60a678.rootIsUnderlined_df60a678:hover:not(.rootIsDisabled_df60a678) .wrapper_df60a678,.root_df60a678.rootIsUnderlined_df60a678.rootIsActive_df60a678 .wrapper_df60a678{border-color:Highlight}}.root_df60a678.rootIsMultiline_df60a678 .fieldGroup_df60a678{min-height:60px;height:auto;display:-webkit-box;display:-ms-flexbox;display:flex}.root_df60a678.rootIsMultiline_df60a678 .field_df60a678{line-height:17px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-top:6px;overflow:auto;width:100%}[dir='ltr'] .root_df60a678.rootIsMultiline_df60a678 .field_df60a678.hasIcon_df60a678{padding-right:40px}[dir='rtl'] .root_df60a678.rootIsMultiline_df60a678 .field_df60a678.hasIcon_df60a678{padding-left:40px}.errorMessage_df60a678{font-size:12px;font-weight:400;color:" }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": ";margin:0;padding-top:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.invalid_df60a678,.invalid_df60a678:focus,.invalid_df60a678:hover{border-color:" }, { "theme": "errorText", "defaultValue": "#a80000" }, { "rawString": "}[dir='ltr'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{padding-left:12px}[dir='rtl'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{padding-right:12px}[dir='ltr'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{padding-right:0}[dir='rtl'] .root_df60a678.rootIsUnderlined_df60a678 .ms-Label{padding-left:0}html[dir='ltr'] .root_df60a678.rootIsUnderlined_df60a678 .field_df60a678{text-align:left}html[dir='rtl'] .root_df60a678.rootIsUnderlined_df60a678 .field_df60a678{text-align:right}.root_df60a678.rootIsMultiline_df60a678 .icon_df60a678{padding-bottom:8px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}[dir='ltr'] .root_df60a678.rootIsMultiline_df60a678 .icon_df60a678{padding-right:24px}[dir='rtl'] .root_df60a678.rootIsMultiline_df60a678 .icon_df60a678{padding-left:24px}.root_df60a678.rootIsMultiline_df60a678 .field_df60a678.fieldIsUnresizable_df60a678{resize:none}.hidden_df60a678{display:none}\n" }]);
exports.root = "root_df60a678";
exports.screenReaderOnly = "screenReaderOnly_df60a678";
exports.fieldGroup = "fieldGroup_df60a678";
exports.fieldGroupIsFocused = "fieldGroupIsFocused_df60a678";
exports.field = "field_df60a678";
exports.invalid = "invalid_df60a678";
exports.rootIsDisabled = "rootIsDisabled_df60a678";
exports.fieldPrefixSuffix = "fieldPrefixSuffix_df60a678";
exports.hasIcon = "hasIcon_df60a678";
exports.rootIsRequiredLabel = "rootIsRequiredLabel_df60a678";
exports.rootIsRequiredPlaceholderOnly = "rootIsRequiredPlaceholderOnly_df60a678";
exports.rootIsActive = "rootIsActive_df60a678";
exports.icon = "icon_df60a678";
exports.description = "description_df60a678";
exports.rootIsBorderless = "rootIsBorderless_df60a678";
exports.rootIsUnderlined = "rootIsUnderlined_df60a678";
exports.wrapper = "wrapper_df60a678";
exports.rootIsMultiline = "rootIsMultiline_df60a678";
exports.errorMessage = "errorMessage_df60a678";
exports.fieldIsUnresizable = "fieldIsUnresizable_df60a678";
exports.hidden = "hidden_df60a678";


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["loadStyles"] = loadStyles;
/* harmony export (immutable) */ __webpack_exports__["configureLoadStyles"] = configureLoadStyles;
/* harmony export (immutable) */ __webpack_exports__["configureRunMode"] = configureRunMode;
/* harmony export (immutable) */ __webpack_exports__["flush"] = flush;
/* harmony export (immutable) */ __webpack_exports__["loadTheme"] = loadTheme;
/* harmony export (immutable) */ __webpack_exports__["clearStyles"] = clearStyles;
/* harmony export (immutable) */ __webpack_exports__["detokenize"] = detokenize;
/* harmony export (immutable) */ __webpack_exports__["splitStyles"] = splitStyles;
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // eslint-disable-line @rushstack/no-null
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(27)))

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var TextField_1 = __webpack_require__(208);
var Utilities_1 = __webpack_require__(205);
var inputMask_1 = __webpack_require__(229);
exports.DEFAULT_MASK_CHAR = '_';
var inputChangeType;
(function (inputChangeType) {
    inputChangeType[inputChangeType["default"] = 0] = "default";
    inputChangeType[inputChangeType["backspace"] = 1] = "backspace";
    inputChangeType[inputChangeType["delete"] = 2] = "delete";
    inputChangeType[inputChangeType["textPasted"] = 3] = "textPasted";
})(inputChangeType || (inputChangeType = {}));
var MaskedTextField = /** @class */ (function (_super) {
    tslib_1.__extends(MaskedTextField, _super);
    function MaskedTextField(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        // Translate mask into charData
        _this._maskCharData = inputMask_1.parseMask(props.mask, props.maskFormat);
        // If an initial value is provided, use it to populate the format chars
        props.value && _this.setValue(props.value);
        _this._isFocused = false;
        _this._moveCursorOnMouseUp = false;
        _this.state = {
            displayValue: inputMask_1.getMaskDisplay(props.mask, _this._maskCharData, props.maskChar),
        };
        return _this;
    }
    MaskedTextField.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.mask !== this.props.mask) {
            this._maskCharData = inputMask_1.parseMask(newProps.mask, newProps.maskFormat);
            this.state = {
                displayValue: inputMask_1.getMaskDisplay(newProps.mask, this._maskCharData, newProps.maskChar),
            };
        }
    };
    MaskedTextField.prototype.componentDidUpdate = function () {
        // Move the cursor to the start of the mask format on update
        if (this.state.maskCursorPosition) {
            this._textField.setSelectionRange(this.state.maskCursorPosition, this.state.maskCursorPosition);
        }
    };
    MaskedTextField.prototype.render = function () {
        return (React.createElement(TextField_1.TextField, tslib_1.__assign({}, this.props, { onFocus: this._onFocus, onBlur: this._onBlur, onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp, onChanged: this._onInputChange, onBeforeChange: this._onBeforeChange, onKeyDown: this._onKeyDown, onPaste: this._onPaste, value: this.state.displayValue, ref: this._resolveRef('_textField') })));
    };
    Object.defineProperty(MaskedTextField.prototype, "value", {
        /**
         * @return The value of all filled format characters or undefined if not all format characters are filled
         */
        get: function () {
            var value = '';
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    return undefined;
                }
                value += this._maskCharData[i].value;
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    MaskedTextField.prototype.setValue = function (newValue) {
        var valueIndex = 0, charDataIndex = 0;
        while (valueIndex < newValue.length &&
            charDataIndex < this._maskCharData.length) {
            // Test if the next character in the new value fits the next format character
            var testVal = newValue[valueIndex];
            if (this._maskCharData[charDataIndex].format.test(testVal)) {
                this._maskCharData[charDataIndex].value = testVal;
                charDataIndex++;
            }
            valueIndex++;
        }
    };
    MaskedTextField.prototype.focus = function () {
        this._textField && this._textField.focus();
    };
    MaskedTextField.prototype.select = function () {
        this._textField && this._textField.select();
    };
    MaskedTextField.prototype.setSelectionStart = function (value) {
        this._textField && this._textField.setSelectionStart(value);
    };
    MaskedTextField.prototype.setSelectionEnd = function (value) {
        this._textField && this._textField.setSelectionEnd(value);
    };
    MaskedTextField.prototype.setSelectionRange = function (start, end) {
        this._textField && this._textField.setSelectionRange(start, end);
    };
    Object.defineProperty(MaskedTextField.prototype, "selectionStart", {
        get: function () {
            return this._textField && this._textField.selectionStart !== null ? this._textField.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextField.prototype, "selectionEnd", {
        get: function () {
            return this._textField && this._textField.selectionEnd ? this._textField.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    MaskedTextField.prototype._onFocus = function (event) {
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
        this._isFocused = true;
        // Move the cursor position to the leftmost unfilled position
        for (var i = 0; i < this._maskCharData.length; i++) {
            if (!this._maskCharData[i].value) {
                this.setState({
                    maskCursorPosition: this._maskCharData[i].displayIndex
                });
                break;
            }
        }
    };
    MaskedTextField.prototype._onBlur = function (event) {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        this._isFocused = false;
        this._moveCursorOnMouseUp = true;
    };
    MaskedTextField.prototype._onMouseDown = function (event) {
        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
        if (!this._isFocused) {
            this._moveCursorOnMouseUp = true;
        }
    };
    MaskedTextField.prototype._onMouseUp = function (event) {
        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
        // Move the cursor on mouseUp after focusing the textField
        if (this._moveCursorOnMouseUp) {
            this._moveCursorOnMouseUp = false;
            // Move the cursor position to the rightmost unfilled position
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    this.setState({
                        maskCursorPosition: this._maskCharData[i].displayIndex
                    });
                    break;
                }
            }
        }
    };
    MaskedTextField.prototype._onBeforeChange = function (value) {
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(value);
        }
        if (this._changeSelectionData === null) {
            this._changeSelectionData = {
                changeType: inputChangeType.default,
                selectionStart: this._textField.selectionStart !== null ? this._textField.selectionStart : -1,
                selectionEnd: this._textField.selectionEnd !== null ? this._textField.selectionEnd : -1
            };
        }
    };
    MaskedTextField.prototype._onInputChange = function (value) {
        if (this.props.onChanged) {
            this.props.onChanged(value);
        }
        if (!this._changeSelectionData) {
            return;
        }
        var displayValue = this.state.displayValue;
        // The initial value of cursorPos does not matter
        var cursorPos = 0;
        var _a = this._changeSelectionData, changeType = _a.changeType, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
        if (changeType === inputChangeType.textPasted) {
            var charsSelected = selectionEnd - selectionStart, charCount = value.length + charsSelected - displayValue.length, startPos = selectionStart, pastedString = value.substr(startPos, charCount);
            // Clear any selected characters
            if (charsSelected) {
                this._maskCharData = inputMask_1.clearRange(this._maskCharData, selectionStart, charsSelected);
            }
            cursorPos = inputMask_1.insertString(this._maskCharData, startPos, pastedString);
        }
        else if (changeType === inputChangeType.delete ||
            changeType === inputChangeType.backspace) {
            // isDel is true If the characters are removed LTR, otherwise RTL
            var isDel = changeType === inputChangeType.delete, charCount = selectionEnd - selectionStart;
            if (charCount) { // charCount is > 0 if range was deleted
                this._maskCharData = inputMask_1.clearRange(this._maskCharData, selectionStart, charCount);
                cursorPos = inputMask_1.getRightFormatIndex(this._maskCharData, selectionStart);
            }
            else { // If charCount === 0, there was no selection and a single character was deleted
                if (isDel) {
                    this._maskCharData = inputMask_1.clearNext(this._maskCharData, selectionStart);
                    cursorPos = inputMask_1.getRightFormatIndex(this._maskCharData, selectionStart);
                }
                else {
                    this._maskCharData = inputMask_1.clearPrev(this._maskCharData, selectionStart);
                    cursorPos = inputMask_1.getLeftFormatIndex(this._maskCharData, selectionStart);
                }
            }
        }
        else if (value.length > displayValue.length) {
            // This case is if the user added characters
            var charCount = value.length - displayValue.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            cursorPos = inputMask_1.insertString(this._maskCharData, startPos, enteredString);
        }
        else if (value.length <= displayValue.length) {
            /**
             * This case is reached only if the user has selected a block of 1 or more
             * characters and input a character replacing the characters they've selected.
             */
            var charCount = 1, selectCount = displayValue.length + charCount - value.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            // Clear the selected range
            this._maskCharData = inputMask_1.clearRange(this._maskCharData, startPos, selectCount);
            // Insert the printed character
            cursorPos = inputMask_1.insertString(this._maskCharData, startPos, enteredString);
        }
        this._changeSelectionData = null;
        this.setState({
            displayValue: inputMask_1.getMaskDisplay(this.props.mask, this._maskCharData, this.props.maskChar),
            maskCursorPosition: cursorPos
        });
    };
    MaskedTextField.prototype._onKeyDown = function (event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
        this._changeSelectionData = null;
        if (this._textField.value) {
            var keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
            // Ignore ctrl and meta keydown
            if (ctrlKey || metaKey) {
                return;
            }
            // On backspace or delete, store the selection and the keyCode
            if (keyCode === 8 /* backspace */ || keyCode === 46 /* del */) {
                var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
                // Check if backspace or delete press is valid.
                if (!(keyCode === 8 /* backspace */ && selectionEnd && selectionEnd > 0)
                    && !(keyCode === 46 /* del */ && selectionStart !== null && selectionStart < this._textField.value.length)) {
                    return;
                }
                this._changeSelectionData = {
                    changeType: keyCode === 8 /* backspace */ ?
                        inputChangeType.backspace :
                        inputChangeType.delete,
                    selectionStart: selectionStart !== null ? selectionStart : -1,
                    selectionEnd: selectionEnd !== null ? selectionEnd : -1
                };
            }
        }
    };
    MaskedTextField.prototype._onPaste = function (event) {
        if (this.props.onPaste) {
            this.props.onPaste(event);
        }
        var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
        // Store the paste selection range
        this._changeSelectionData = {
            changeType: inputChangeType.textPasted,
            selectionStart: selectionStart !== null ? selectionStart : -1,
            selectionEnd: selectionEnd !== null ? selectionEnd : -1
        };
    };
    MaskedTextField.defaultProps = {
        maskChar: exports.DEFAULT_MASK_CHAR,
        maskFormat: inputMask_1.DEFAULT_MASK_FORMAT_CHARS,
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onBlur", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onMouseDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onMouseUp", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onBeforeChange", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onInputChange", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], MaskedTextField.prototype, "_onPaste", null);
    return MaskedTextField;
}(Utilities_1.BaseComponent));
exports.MaskedTextField = MaskedTextField;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_MASK_FORMAT_CHARS = {
    '9': /[0-9]/,
    'a': /[a-zA-Z]/,
    '*': /[a-zA-Z0-9]/
};
/**
 * Takes in the mask string and the formatCharacters and returns an array of MaskValues
 * Example:
 * mask = 'Phone Number: (999) - 9999'
 * return = [
 *    { value: undefined, displayIndex: 16, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 17, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 18, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 22, format: /[0-9]/ },
 * ]
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param formatChars An object defining how certain characters in the mask should accept input.
 */
function parseMask(mask, formatChars) {
    if (formatChars === void 0) { formatChars = exports.DEFAULT_MASK_FORMAT_CHARS; }
    if (!mask) {
        return [];
    }
    var maskCharData = [];
    // Count the escape characters in the mask string.
    var escapedChars = 0;
    for (var i = 0; i + escapedChars < mask.length; i++) {
        var maskChar = mask.charAt(i + escapedChars);
        if (maskChar === '\\') {
            escapedChars++;
        }
        else {
            // Check if the maskChar is a format character.
            var maskFormat = formatChars[maskChar];
            if (maskFormat) {
                maskCharData.push({
                    /**
                     * Do not add escapedChars to the displayIndex.
                     * The index refers to a position in the mask's displayValue.
                     * Since the backslashes don't appear in the displayValue,
                     * we do not add them to the charData displayIndex.
                     */
                    displayIndex: i,
                    format: maskFormat
                });
            }
        }
    }
    return maskCharData;
}
exports.parseMask = parseMask;
/**
 * Takes in the mask string, an array of MaskValues, and the maskCharacter
 * returns the mask string formatted with the input values and maskCharacter.
 * If the maskChar is undefined, the maskDisplay is truncated to the last filled format character.
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * maskCharData = '12345'
 * maskChar = '_'
 * return = 'Phone Number: (123) 45_ - ___'
 *
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * value = '12345'
 * maskChar = undefined
 * return = 'Phone Number: (123) 45'
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param maskCharData The input values to insert into the mask string for displaying.
 * @param maskChar? A character to display in place of unfilled mask format characters.
 */
function getMaskDisplay(mask, maskCharData, maskChar) {
    var maskDisplay = mask;
    if (!maskDisplay) {
        return '';
    }
    // Remove all backslashes
    maskDisplay = maskDisplay.replace(/\\/g, '');
    // lastDisplayIndex is is used to truncate the string if necessary.
    var lastDisplayIndex = 0;
    if (maskCharData.length > 0) {
        lastDisplayIndex = maskCharData[0].displayIndex - 1;
    }
    /**
     * For each input value, replace the character in the maskDisplay with the value.
     * If there is no value set for the format character, use the maskChar.
     */
    for (var _i = 0, maskCharData_1 = maskCharData; _i < maskCharData_1.length; _i++) {
        var charData = maskCharData_1[_i];
        var nextChar = ' ';
        if (charData.value) {
            nextChar = charData.value;
            if (charData.displayIndex > lastDisplayIndex) {
                lastDisplayIndex = charData.displayIndex;
            }
        }
        else {
            if (maskChar) {
                nextChar = maskChar;
            }
        }
        // Insert the character into the maskdisplay at its corresponding index
        maskDisplay = maskDisplay.slice(0, charData.displayIndex) + nextChar +
            maskDisplay.slice(charData.displayIndex + 1);
    }
    // Cut off all mask characters after the last filled format value
    if (!maskChar) {
        maskDisplay = maskDisplay.slice(0, lastDisplayIndex + 1);
    }
    return maskDisplay;
}
exports.getMaskDisplay = getMaskDisplay;
/**
 * Get the next format index right of or at a specified index.
 * If no index exists, returns the rightmost index.
 * @param maskCharData
 * @param index
 */
function getRightFormatIndex(maskCharData, index) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[maskCharData.length - 1].displayIndex;
}
exports.getRightFormatIndex = getRightFormatIndex;
/**
 * Get the next format index left of a specified index.
 * If no index exists, returns the leftmost index.
 * @param maskCharData
 * @param index
 */
function getLeftFormatIndex(maskCharData, index) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[0].displayIndex;
}
exports.getLeftFormatIndex = getLeftFormatIndex;
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 */
function clearRange(maskCharData, selectionStart, selectionCount) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            if (maskCharData[i].displayIndex >= selectionStart + selectionCount) {
                break;
            }
            maskCharData[i].value = undefined;
        }
    }
    return maskCharData;
}
exports.clearRange = clearRange;
/**
 * Deletes the input character at or after a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearNext(maskCharData, selectionStart) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
exports.clearNext = clearNext;
/**
 * Deletes the input character before a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearPrev(maskCharData, selectionStart) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
exports.clearPrev = clearPrev;
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * Modifies the maskCharData inplace with the passed string and returns the display index of the
 * next format character after the inserted string.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 * @return The displayIndex of the next format character
 */
function insertString(maskCharData, selectionStart, newString) {
    var stringIndex = 0, nextIndex = 0;
    // Iterate through _maskCharData finding values with a displayIndex after the specified range start
    for (var i = 0; i < maskCharData.length && stringIndex < newString.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            nextIndex = maskCharData[i].displayIndex;
            // Find the next character in the newString that matches the format
            while (stringIndex < newString.length) {
                // If the character matches the format regexp, set the maskCharData to the new character
                if (maskCharData[i].format.test(newString.charAt(stringIndex))) {
                    maskCharData[i].value = newString.charAt(stringIndex++);
                    // Set the nextIndex to the display index of the next mask format character.
                    if (i + 1 < maskCharData.length) {
                        nextIndex = maskCharData[i + 1].displayIndex;
                    }
                    else {
                        nextIndex++;
                    }
                    break;
                }
                stringIndex++;
            }
        }
    }
    return nextIndex;
}
exports.insertString = insertString;


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var telemetry_js_1 = __webpack_require__(62);
var version_1 = __webpack_require__(231);
var sp_core_library_1 = __webpack_require__(16);
var CONTROL_TYPE = "property";
function track(componentName, properties) {
    if (properties === void 0) { properties = {}; }
    var telemetry = telemetry_js_1.default.getInstance();
    telemetry.trackEvent(componentName, __assign({ version: version_1.version, controlType: CONTROL_TYPE, debug:  true ? "true" : "false", environment: sp_core_library_1.EnvironmentType[sp_core_library_1.Environment.type] }, properties));
}
exports.track = track;



/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = "1.16.0";



/***/ })

});
//# sourceMappingURL=0.pnp-propcontrols-number_db8385297ea3dc605045.js.map