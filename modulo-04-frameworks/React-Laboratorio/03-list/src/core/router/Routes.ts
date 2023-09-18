import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root:                 string;
  githubexample:        string;
  list:                 string;
  details:              string;
  rickandmorty:         string;
  rickandmortydetails:  string;
}

export const switchRoutes: SwitchRoutes = {
  root:                 "/",
  githubexample:        "/githubexample",
  list:                 "/list",
  details:              "/detail/:id",
  rickandmorty:         "/rickandmorty",
  rickandmortydetails:  "/rickandmortydetail"

};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
};
