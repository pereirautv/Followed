/// <reference types="react" />
import * as React from 'react';
import { IFollowedSitesProps, IFollowedSitesState } from '.';
export default class FollowedSites extends React.Component<IFollowedSitesProps, IFollowedSitesState> {
    private _allFollowing;
    constructor(props: IFollowedSitesProps);
    /**
     * Retrieves all the current user its followed sites
     */
    private _fetchFollowedSites();
    /**
     * Updates the current following site state
     */
    private _updateFollowingSites;
    /**
     * Sort array by their name
     * @param a First item
     * @param b Second item
     */
    private _sortByName(a, b);
    /**
     * Update the current site results array
     */
    private _updatePagedItems;
    private _onFilterChanged;
    /**
     * componentDidMount lifecycle hook
     */
    componentDidMount(): void;
    /**
     * componentDidUpdate lifecycle hook
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps: IFollowedSitesProps, prevState: IFollowedSitesState): void;
    /**
     * Default React render method
     */
    render(): React.ReactElement<IFollowedSitesProps>;
}
