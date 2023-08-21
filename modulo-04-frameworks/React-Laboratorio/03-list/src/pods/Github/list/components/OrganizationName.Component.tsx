import React, { FC } from "react";

interface Props {
    name: String
}

export const OrganizationName: FC<Props> = ({name}) =>{
    return <h2>Hello from List page
      {name}
    </h2>;
  }