import { RemoteUser, User, USER_STATUS } from "./user"


interface AppContext {
    users: RemoteUser[]
    setUsers: (
        users: RemoteUser[] | ((users: RemoteUser[]) => RemoteUser[]),
    ) => void
    currentUser: User
    setCurrentUser: (user: User) => void
    status: USER_STATUS
    setStatus: (status: USER_STATUS) => void
}

export { AppContext }
