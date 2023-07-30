import React from "react";
import OrganizationProvider from "./core/context/organization/OrganizationProvider";
import RoutesComponent from "./core/router/Routes.Component";

export const App = () => {
  return (
    <OrganizationProvider>
      <RoutesComponent/>
    </OrganizationProvider>
  );
};
