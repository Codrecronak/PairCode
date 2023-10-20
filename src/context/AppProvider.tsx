import { ReactNode } from "react";
import { AppContextProvider } from "./AppContext.js";
import { SocketProvider } from "./SocketContext.js";
import { ChatContextProvider } from "./ChatContext.js";
import { SettingContextProvider } from "./SettingContext.js";
import { FileContextProvider } from "./FileContext.js";
import { RunCodeContextProvider } from "./RunCodeContext.js";
import { ViewContextProvider } from "./ViewContext.js";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <AppContextProvider>
      <SocketProvider>
        <SettingContextProvider>
          <ViewContextProvider>
            <FileContextProvider>
              <RunCodeContextProvider>
                <ChatContextProvider>{children}</ChatContextProvider>
              </RunCodeContextProvider>
            </FileContextProvider>
          </ViewContextProvider>
        </SettingContextProvider>
      </SocketProvider>
    </AppContextProvider>
  );
}

export default AppProvider;
