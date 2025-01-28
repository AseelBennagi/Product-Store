import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "next-themes";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ChakraProvider value={defaultSystem}> */}
      <ChakraProvider>
        {/* <ThemeProvider attribute="class" disableTransitionOnChange> */}
        <App />
        {/* </ThemeProvider> */}
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
