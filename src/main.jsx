import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { LampsWeb } from "./LampsWeb";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <LampsWeb />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
