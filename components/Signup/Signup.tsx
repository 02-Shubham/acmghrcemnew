"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { app } from "@/app/Auth/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      setMessage("Account created successfully, redirecting to home...");
      setIsError(false);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: any) {
      setIsError(true);
      setMessage(error.message);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full h-[90vh] mt-[7.5rem] flex flex-col justify-center items-center border-2 border-transparent"
      id="signupDiv"
    >
      <div className="my-3" id="signUpTitle">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join us at <span className="text-orange-400 font-extrabold">ACM</span>
        </motion.h1>
      </div>
      <motion.div
        whileHover={{
          boxShadow: "0 0 10px #ff8a00",
        }}
        className="w-1/2 h-auto bg-[#161616] rounded-lg flex flex-col items-center p-6 max-[450px]:w-[90%] max-[700px]:w-3/4 min-[700px]:w-[65%] min-[1000px]:w-[50%]"
      >
        <motion.h1
          className="text-3xl  text-orange-500 font-extrabold my-5"
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          Sign Up
        </motion.h1>
        <div className="w-full" id="signUpForm">
          <Form.Root onSubmit={handleSignUp}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Form.Field
                name="email"
                className="text-lg  font-bold w-full mb-4"
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
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Form.Field
                name="password"
                className="text-lg  font-bold w-full mb-6"
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
              transition={{
                duration: 0.2,
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.7 },
              }}
              className="w-3/4 mx-auto flex justify-center items-center"
            >
              <Form.Submit asChild>
                <button className="text-white bg-orange-600 rounded-full w-3/4 p-2 mt-4  font-bold text-center">
                  Register
                </button>
              </Form.Submit>
            </motion.div>
          </Form.Root>
          <div
            className="w-full text-center mt-3 "
            id="messageDiv"
          >
            {isError ? (
              <p className="text-red-500">{message}</p>
            ) : loading ? (
              <p className="text-green-600">Loading...</p>
            ) : (
              <p className="text-green-600">{message}</p>
            )}
          </div>
        </div>
      </motion.div>
      <h1 className="text-lg  mt-4">
        Already have an account?{" "}
        <span className="text-orange-600 font-extrabold">
          <Link href="/Auth/Login">Login</Link>
        </span>
      </h1>
    </div>
  );
}

export default Signup;
