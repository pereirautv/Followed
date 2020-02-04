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
import * as React from 'react';
import styles from './Paging.module.scss';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
var Paging = (function (_super) {
    __extends(Paging, _super);
    function Paging(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Load the previous page
         */
        _this._prevPage = function () {
            var crntPage = _this.state.crntPage;
            if (crntPage > 0) {
                crntPage--;
                // Update the current page
                _this.setState({
                    crntPage: crntPage
                });
                // Update elements to render
                _this._triggerUpdate(crntPage);
            }
        };
        /**
         * Load the previous page
         */
        _this._nextPage = function () {
            var crntPage = _this.state.crntPage;
            if ((_this.props.nrOfItems * (_this.state.crntPage)) < _this.props.allItems.length) {
                crntPage++;
                // Update the current page
                _this.setState({
                    crntPage: crntPage
                });
                // Update elements to render
                _this._triggerUpdate(crntPage);
            }
        };
        /**
         * Triggers the update function with the new batch of items
         */
        _this._triggerUpdate = function (pageNr) {
            var allItems = _this.props.allItems.slice();
            // Pass the next batch of items to render to the parent component
            _this.props.fUpdateItems(allItems.splice((pageNr * _this.props.nrOfItems), _this.props.nrOfItems));
        };
        _this.state = {
            crntPage: 0
        };
        return _this;
    }
    /**
     * componentWillReceiveProps lifecycle hook
     * @param nextProps
     */
    Paging.prototype.componentWillReceiveProps = function (nextProps) {
        // Check if items were filtered
        if (this.props.allItems.length !== nextProps.allItems.length) {
            this.setState({
                crntPage: 0
            });
        }
    };
    /**
     * Default React render method
     */
    Paging.prototype.render = function () {
        if (this.props.nrOfItems && this.props.allItems && this.props.allItems.length > this.props.nrOfItems) {
            return (React.createElement("div", { className: styles.paging },
                React.createElement(DefaultButton, { onClick: this._prevPage, disabled: this.state.crntPage <= 0 },
                    React.createElement(Icon, { iconName: "ChevronLeft" })),
                React.createElement("span", { className: styles.pagingNrLabels },
                    this.state.crntPage + 1,
                    "/",
                    Math.ceil(this.props.allItems.length / this.props.nrOfItems)),
                React.createElement(DefaultButton, { onClick: this._nextPage, disabled: (this.props.nrOfItems * (this.state.crntPage + 1)) >= this.props.allItems.length },
                    React.createElement(Icon, { iconName: "ChevronRight" }))));
        }
        return null;
    };
    return Paging;
}(React.Component));
export { Paging };

//# sourceMappingURL=Paging.js.map
