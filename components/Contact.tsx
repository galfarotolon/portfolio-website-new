"use client";
import React, { useRef, useState } from "react";
import { useForm, FieldError } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  const onSubmit = async (data: FormData) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "0067d62d-bc46-48ca-9edc-5261f6a1a185",
        ...data,
      }),
    });

    const result = await response.json();
    console.log(result);
    if (result.success) {
      setSuccess(true);
      formRef.current?.reset();
    } else {
      setError(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="contact flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto py-12 mb-10"
      variants={formVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="textContainer flex-1 space-y-8"
        variants={formVariants}
      >
        <motion.h2
          variants={formVariants}
          className="heading text-4xl lg:max-w-[45vw] font-bold"
        >
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </motion.h2>
        <motion.div className="item" variants={formVariants}>
          <p className="text-white-200 md:mt-10 my-5 text-center font-bold">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
        </motion.div>
        <motion.div className="item" variants={formVariants}>
          <h2 className="text-xl font-semibold">Mail</h2>
          <span className="text-gray-500">hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={formVariants}>
          <h2 className="text-xl font-semibold">Address</h2>
          <span className="text-gray-500">Hello street New York</span>
        </motion.div>
        <motion.div className="item" variants={formVariants}>
          <h2 className="text-xl font-semibold">Phone</h2>
          <span className="text-gray-500">+1 234 5678</span>
        </motion.div>
      </motion.div>
      <div className="formContainer flex-1 relative">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 32.666 32.666"
            className="stroke-orange-500"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
              M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
              C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
              c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
              c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
              c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
              c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
              c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
              c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
              c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
              c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
              l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
              C32.666,7.326,25.339,0,16.333,0z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="space-y-6 absolute inset-0"
        >
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className={`mt-1 block w-full px-3 py-2 border-2 rounded-md ${
                errors.name ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 block">
                {(errors.name as FieldError).message}
              </span>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border-2 rounded-md ${
                errors.email ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {(errors.email as FieldError).message}
              </span>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Enter your message"
              {...register("message", { required: "Message is required" })}
              className={`mt-1 block w-full px-3 py-2 border-2 rounded-md h-36 ${
                errors.message ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1 block">
                {(errors.message as FieldError).message}
              </span>
            )}
          </LabelInputContainer>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
