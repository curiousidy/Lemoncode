import React from "react";
import OrganizationProvider from "./core/context/organization/OrganizationProvider";
import RoutesComponent from "./core/router/routesComponent";

export const App = () => {
  return (
    <OrganizationProvider>
      <RoutesComponent/>
    </OrganizationProvider>
  );
};
