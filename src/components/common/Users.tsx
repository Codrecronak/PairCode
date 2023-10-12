import { useAppContext } from "../../context/AppContext";
import { RemoteUser, STATUS } from "../../types/user";
import Avatar from "react-avatar";

function Users() {
  const { users } = useAppContext();

  return (
      <div className="flex justify-center overflow-y-auto py-2">
          {/* flex overflow-y-auto py-2 */}
          <div className="flex h-full w-full flex-wrap items-start gap-x-2 gap-y-6">
              {users.map((user) => {
                  return <User key={user.socketId} user={user} />;
              })}
          </div>
      </div>
  );
}

const User = ({ user }: { user: RemoteUser }) => {
  const { username, status } = user;
  const title = `${username} - ${
    status === STATUS.ACTIVE ? "active" : "inactive"
  }`;

  return (
    <div
      className="relative flex w-[100px] flex-col items-center gap-2"
      title={title}
    >
      <Avatar name={username} size="50" round={"12px"} title={title} />
      <p className="line-clamp-2 max-w-full text-ellipsis break-words">
        {username}
      </p>
      <div
        className={`absolute right-5 top-0 h-3 w-3 rounded-full ${
          status === STATUS.ACTIVE ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
    </div>
  );
};

export default Users;
