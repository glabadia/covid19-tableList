import React, { useState, useEffect } from "react";

import { InfoBlock, InfoGrid, HeaderInfo } from "../styles/presentationStyles";
import GetWorldTotals from "../logic/GetWorldTotals";

const ShowTotalCount = () => {
  const { status, total } = GetWorldTotals();
  const { confirmed, deaths, recovered } = total;

  if (status === "idle") return <p>Initializing...</p>;
  if (status === "pending") return <p>Loading...</p>;
  if (status === "resolved")
    return (
      <>
        <HeaderInfo title>Totals</HeaderInfo>
        <InfoGrid>
          <InfoBlock confirmed>
            <h4>Confirmed</h4>
            <p>{confirmed}</p>
          </InfoBlock>
          <InfoBlock deaths>
            <h4>Deaths</h4>
            <p>{deaths}</p>
          </InfoBlock>
          <InfoBlock recovered>
            <h4>Recovered</h4>
            <p>{recovered}</p>
          </InfoBlock>
        </InfoGrid>
      </>
    );
};

export default ShowTotalCount;
