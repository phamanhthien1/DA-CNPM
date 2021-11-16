import React, { Component } from "react";

import "./NavigationMenu.scss";
import { currentPath } from "../../helpers";
import NavigationMenuItem from "../NavigationMenuItem/NavigationMenuItem";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface INavigationMenuState {
  shouldRenderMenu?: boolean;
}

class NavigationMenu extends Component<INavigationMenuState> {
  private get shouldRenderMenu(): boolean {
    return !currentPath.isHomeSubroute();
  }

  render() {
    return (
      <ErrorBoundary>
        {this.shouldRenderMenu ? (
          <div className="NavigationMenu">
          </div>) : null}
          
        
      </ErrorBoundary>
    );
  }
}

export default NavigationMenu;
{/* <NavigationMenuItem
              title="Kitchen orders"
              path="/home/kitchen-orders"
            />
            <NavigationMenuItem
              title="Menu Manager"
              path="/home/menu-manager"
            /> */}