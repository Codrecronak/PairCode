import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useSocket } from "../context/SocketContext";
import { useEffect } from "react";
import { User, USER_STATUS } from "../types/user";
import { SocketEvent } from "../types/socket";
import Connection from "./Connection";
import Splitter from "../components/Splitter";
import Sidebar from "../components/sidebar/Sidebar";
import WorkSpace from "../components/workspace";

const Editor = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  if (roomId === undefined) {
    navigate("/", {
      state: { roomId },
    });
  }
  const { status, setCurrentUser, currentUser } = useAppContext();
  const { socket } = useSocket();
  const location = useLocation();

  useEffect(() => {
    if (currentUser.username.length > 0) return;
    const username = location.state?.username;
    if (username === undefined) {
      navigate("/", {
        state: { roomId },
      });
    } else if (roomId) {
      const user: User = { username, roomId };
      setCurrentUser(user);
      socket.emit(SocketEvent.JOIN_REQUEST, user);
    }
  }, [
    currentUser.username,
    location.state?.username,
    navigate,
    roomId,
    setCurrentUser,
    socket,
  ]);

  if (status === USER_STATUS.CONNECTION_FAILED) {
    return <Connection />;
  }

  return (
    <Splitter>
      <Sidebar />
      <WorkSpace />
    </Splitter>
  );
};

export default Editor;
