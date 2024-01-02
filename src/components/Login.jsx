import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

function Login() {
  const history = useNavigate();
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userData = [
    {
      id: 1,
      userId: "ansh.viyogi@gmail.com",
      password: "anshviyogi",
    },
    {
      id: 2,
      userId: "prateek@gmail.com",
      password: "prateek",
    },
    {
      id: 3,
      userId: "kushagra.kumar@gmail.com",
      password: "kushagra",
    },
  ];

  function submitHandler(e) {
    e.preventDefault();
    if (!userId) return toast.warn("User ID is missing");
    if (!password) return toast.warn("Password is missing");

    let checkUser = userData.filter((item) => {
      return item.userId === userId && item.password === password;
    });

    if (checkUser.length !== 0) {
      toast.success("Logged in successfully");
      setIsLoading(true);

      const obj = {
        user: userId,
        password,
      };

      localStorage.setItem("user", JSON.stringify(obj));

      setTimeout(() => {
        history("/dashboard");
      }, 3000);
    } else {
      toast.warn("Invalid credentials");
    }
  }
  return (
    <>
      <div className="flex">
        <div className="login-background sm:w-[70%] sm:h-screen sm:grid sm:place-items-center  hidden">
          <img
            className="w-96"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Yes_Bank_SVG_Logo.svg/1024px-Yes_Bank_SVG_Logo.svg.png"
          />
        </div>
        <div className="sm:w-[30%] w-full grid place-items-center ">
          <form onSubmit={submitHandler}>
            <div className="flex justify-center">
              <img
                className="w-40"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Yes_Bank_SVG_Logo.svg/1024px-Yes_Bank_SVG_Logo.svg.png"
              />
            </div>

            <input
              placeholder="Username"
              className="my-3 border border-gray-400 rounded-md p-1 outline-gray-200 w-full"
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              placeholder="Password"
              className="my-3 border border-gray-400 rounded-md p-1 outline-gray-200 w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className={`py-2 px-10 flex justify-center login-background font-poppins font-medium text-[18px] text-white outline-none rounded-[10px]`}
            >
              Login
            </button>
          </form>
        </div>
        <LoadingIndicator isOpen={isLoading} />
      </div>
    </>
  );
}

export default Login;
