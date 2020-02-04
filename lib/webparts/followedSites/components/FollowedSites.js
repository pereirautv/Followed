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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
import * as React from 'react';
import styles from './FollowedSites.module.scss';
//import { IFollowedSitesProps } from './IFollowedSitesProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient } from '@microsoft/sp-http';
import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
import { SortOrder } from '../FollowedSitesWebPart';
import { Link } from 'office-ui-fabric-react/lib/components/Link';
import { TextField } from 'office-ui-fabric-react/lib/components/TextField';
import * as strings from 'FollowedSitesWebPartStrings';
import { Paging } from './paging';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
var FollowedSites = (function (_super) {
    __extends(FollowedSites, _super);
    function FollowedSites(props) {
        var _this = _super.call(this, props) || this;
        _this._allFollowing = [];
        /**
         * Updates the current following site state
         */
        _this._updateFollowingSites = function (fSites) {
            var allSites = fSites.slice();
            // Check if the array has to be limited
            if (_this.props.nrOfItems) {
                fSites = fSites.slice(0, _this.props.nrOfItems);
            }
            _this.setState({
                following: fSites,
                allFollowing: allSites,
                loading: false
            });
        };
        /**
         * Update the current site results array
         */
        _this._updatePagedItems = function (pagedItems) {
            if (pagedItems) {
                _this.setState({
                    following: pagedItems
                });
            }
        };
        _this._onFilterChanged = function (event, val) {
            // Check if a value was provided
            if (val) {
                var allSites = _this._allFollowing.slice();
                var filteredItems = allSites.filter(function (f) { return f.Name.toLowerCase().indexOf(val.toLowerCase()) !== -1; });
                _this._updateFollowingSites(filteredItems);
            }
            else {
                _this._updateFollowingSites(_this._allFollowing);
            }
        };
        _this.state = {
            following: null,
            allFollowing: [],
            loading: true,
            error: null
        };
        return _this;
    }
    /**
     * Retrieves all the current user its followed sites
     */
    FollowedSites.prototype._fetchFollowedSites = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var apiUrl;
            return __generator(this, function (_a) {
                this.setState({
                    loading: true,
                    error: null
                });
                apiUrl = this.props.context.pageContext.web.absoluteUrl + "/_vti_bin/homeapi.ashx/sites/followed?";
                this.props.context.spHttpClient.fetch(apiUrl, SPHttpClient.configurations.v1, {
                    method: "GET",
                })
                    .then(function (data) { return data.json(); })
                    .then(function (data) {
                    // Check if data was retrieved
                    if (data && data.value) {
                        var fSites = data.value;
                        // Check if items need to be sorted by their name
                        if (_this.props.sortOrder && _this.props.sortOrder === SortOrder.name) {
                            fSites = fSites.sort(_this._sortByName);
                        }
                        else {
                            // Last added item is last in the list, so we use reverse to turn it around
                            fSites = data.value.reverse();
                        }
                        // Locally store the followed site results
                        _this._allFollowing = fSites.slice();
                        // Pass sites to trigger state update
                        _this._updateFollowingSites(fSites);
                    }
                    // Check if an error occured
                    if (data && data.error) {
                        // Error occured while fetching personal sites
                        _this.setState({
                            loading: false,
                            error: strings.error
                        });
                    }
                })
                    .catch(function (err) {
                    _this.setState({
                        loading: false,
                        error: strings.error
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Sort array by their name
     * @param a First item
     * @param b Second item
     */
    FollowedSites.prototype._sortByName = function (a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase())
            return -1;
        if (a.Name.toLowerCase() > b.Name.toLowerCase())
            return 1;
        return 0;
    };
    /**
     * componentDidMount lifecycle hook
     */
    FollowedSites.prototype.componentDidMount = function () {
        this._fetchFollowedSites();
    };
    /**
     * componentDidUpdate lifecycle hook
     * @param prevProps
     * @param prevState
     */
    FollowedSites.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.nrOfItems !== prevProps.nrOfItems ||
            this.props.sortOrder !== prevProps.sortOrder) {
            this._fetchFollowedSites();
        }
    };
    /**
     * Default React render method
     */
    FollowedSites.prototype.render = function () {
        return (React.createElement("div", { className: styles.followedSites },
            React.createElement(WebPartTitle, { displayMode: this.props.displayMode, title: this.props.title, updateProperty: this.props.updateProperty }),
            this.state.loading && (React.createElement(Spinner, { label: strings.loading, size: SpinnerSize.large })),
            this.state.following ? (React.createElement("div", { className: styles.list },
                React.createElement("div", { className: styles.filter },
                    React.createElement(TextField, { placeholder: strings.SitesFilterLabel, iconProps: { iconName: 'Filter' }, underlined: true, onChange: this._onFilterChanged })),
                React.createElement("ul", null, this.state.following.length > 0 ? (this.state.following.map(function (follow) { return (React.createElement("li", { key: follow.Id, className: styles.site },
                    React.createElement(Link, { href: follow.Uri, title: follow.Name }, follow.Name))); })) : (React.createElement("li", { className: styles.site }, strings.NoFollowSitesFoundMsg))),
                React.createElement(Paging, { allItems: this.state.allFollowing, nrOfItems: this.props.nrOfItems, fUpdateItems: this._updatePagedItems }))) : (!this.state.loading && (this.state.error ?
                React.createElement("span", { className: styles.error }, this.state.error) :
                React.createElement("span", { className: styles.noSites }, strings.NoFollowedSitesMsg)))));
    };
    return FollowedSites;
}(React.Component));
export default FollowedSites;

//# sourceMappingURL=FollowedSites.js.map
