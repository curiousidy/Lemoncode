import React from "react";
import RoutesComponent from "./core/router/routesComponent";
import OrganizationProvider from "./core/context/organization/organizationProvider";

export const App = () => {
  return (
    <OrganizationProvider>
      <RoutesComponent/>
    </OrganizationProvider>
  );
};
