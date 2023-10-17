enum STATUS {
  INACTIVE = "inactive",
  ACTIVE = "active",
}

interface User {
  username: string
  roomId: string
}

interface RemoteUser extends User {
  status: STATUS
  cursorPosition: number
  typing: boolean
  currentFile: string
  socketId: string
}

enum USER_STATUS {
  INITIAL = "initial",
  CONNECTING = "connecting",
  ATTEMPTING_JOIN = "attempting-join",
  JOINED = "joined",
  CONNECTION_FAILED = "connection-failed",
  DISCONNECTED = "disconnected",
}

export { STATUS, USER_STATUS, RemoteUser, User }
