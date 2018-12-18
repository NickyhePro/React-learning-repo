import * as React from 'react';
import "../NavigationItems/NavigationItems.css"
import NavigationItem from './NavigationItem/NavigationItem';

export default class NavigationItems extends React.Component {
    
    public render() {
        return (
            <ul className="NavigationItems">
                <NavigationItem link="#" active={true}>Burger Builder</NavigationItem>
                <NavigationItem link="#" active={false}>Checkout</NavigationItem>
            </ul>
        );
    }
}