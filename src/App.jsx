import { useEffect, useRef, useState } from "react";
import Input from "./components/Input";

function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;

  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    let total = images.length;
    let current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }

      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };

    imageSlider();

    let interval = setInterval(() => imageSlider(), 2000);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center gap-x-8 justify-center">
      <div className="w-[380px] h-[581px] bg-home-img relative bg-[length:468.32px_634.15px] bg-[top_left_-46px] ">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 transition duration-700  transition-opacity ease-linear"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screenshot-instagram-1496746464.jpg?crop=1xw:1xh;center,top&resize=480:*"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 transition duration-700 transition-opacity ease-linear"
            src="https://i.pinimg.com/474x/e9/58/73/e9587345e7752c987c5e6b576f4379ea--yogaposes-mobile-design.jpg"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 transition duration-700 transition-opacity ease-linear"
            src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/48/1480338651-instagram-screenshot.png?resize=480:*"
            alt=""
          />
        </div>
      </div>

      <div className="w-[350px] bg-white border p-[40px] pt-8 pb-2">
        <a href="#" className=" flex justify-center mb-8">
          <img
            className="h-[51px]"
            src="https://www.citypng.com/public/uploads/preview/-11590321744kgx0vygeu0.png"
            alt=""
          />
        </a>
        <form className="grid gap-y-1.5">
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Phone number, username or email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          {/* <label className="block relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-zinc-50 border w-full h-[38px] rounded-sm focus:border-gray-500 px-2 text-sm outline-none peer text-sm valid:pt-3"
              required={true}
            />
            <small className="absolute top-1/2 cursor-text left-[9px] pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
              Phone number, username or email
            </small>
          </label>
          <label className="block relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-50 border w-full h-[38px] rounded-sm focus:border-gray-500 px-2 text-sm outline-none peer text-sm valid:pt-3"
              required={true}
            />
            <small className="absolute top-1/2 cursor-text left-[9px] pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
              Password
            </small>
          </label> */}
          <button
            type="submit"
            className="h-[38px] bg-login text-white rounded text-sm font-medium disabled:opacity-50"
            disabled={!enable}
          >
            Log In
          </button>
          <div className="flex items-center">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-[13px] text-gray-500 font-semibold">
              OR
            </span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
