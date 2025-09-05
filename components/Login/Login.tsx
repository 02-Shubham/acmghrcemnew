"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { app } from "@/app/Auth/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth(app);
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      setLoading(true);
      setMessage(""); // Clear any previous messages
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login Successful!");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error: any) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="w-full h-[90vh] mt-[7.5rem] flex flex-col justify-center items-center border-2 border-transparent px-4"
        id="loginDiv"
      >
        <div className="my-3 text-center" id="loginTitle">
          <motion.h1
            className="text-3xl "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.0 }}
          >
            Welcome back to{" "}
            <span className="text-orange-500 font-extrabold">ACM</span>
          </motion.h1>
        </div>
        <motion.div
          whileHover={{
            boxShadow: "0 0 10px #ff8a00",
          }}
          className="w-full max-w-md h-auto bg-[#161616] rounded-lg flex flex-col items-center p-6"
        >
          <div>
            <motion.h1
              className="text-3xl text-orange-800 font-extrabold my-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Log In
            </motion.h1>
          </div>
          <div className="w-full" id="loginForm">
            <Form.Root onSubmit={handleSignIn}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Form.Field
                  name="email"
                  className="text-lg font-bold w-full mb-4"
                >
                  <Form.Label className="ml-5 text-white">
                    Email :
                    <Form.Message
                      match="valueMissing"
                      className="ml-5 text-red-500 text-sm"
                    >
                      Email is required
                    </Form.Message>
                  </Form.Label>
                  <Form.Control asChild>
                    <motion.input
                      type="email"
                      name="email"
                      className="text-white bg-transparent border-[1px] border-orange-600 rounded-full p-2 w-full mt-1"
                      required
                      whileFocus={{
                        boxShadow: "0 0 10px #ff8a00",
                      }}
                    />
                  </Form.Control>
                </Form.Field>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Form.Field
                  name="password"
                  className="text-lg font-bold w-full mb-6"
                >
                  <Form.Label className="ml-5 text-white">
                    Password :
                    <Form.Message
                      match="valueMissing"
                      className="ml-5 text-red-500 text-sm"
                    >
                      Password is required
                    </Form.Message>
                    <div className="float-right">
                      {showPassword ? (
                        <EyeOpenIcon
                          className="cursor-pointer mt-[8px] mr-[10px] relative top-[40px] right-3"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <EyeClosedIcon
                          className="cursor-pointer mt-[8px] mr-[10px] relative top-[40px] right-3"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </div>
                  </Form.Label>
                  <Form.Control asChild>
                    <motion.input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="text-white bg-transparent border-[1px] border-orange-600 rounded-full p-2 w-full mt-1"
                      required
                      whileFocus={{
                        boxShadow: "0 0 10px #ff8a00",
                      }}
                    />
                  </Form.Control>
                </Form.Field>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 1,
                }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
                className="w-full flex justify-center items-center"
              >
                <Form.Submit asChild>
                  <button
                    className="text-white bg-orange-500 rounded-full w-3/4 p-2 mt-4  font-bold text-center"
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Login"}
                  </button>
                </Form.Submit>
              </motion.div>
            </Form.Root>
            {message && (
              <div
                className={`text-center my-2 ${
                  message.includes("Successful")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </motion.div>
        <h1 className="text-lg mt-4 text-center">
          Create an account?{" "}
          <span className="text-orange-600 font-extrabold">
            <Link href="/Auth/Signup">Sign Up</Link>
          </span>
        </h1>
      </div>
    </>
  );
}

export default Login;
