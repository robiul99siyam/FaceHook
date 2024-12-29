import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Field from "./Field";

export default function Resgister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { api } = useAxios();
  const navigate = useNavigate();
  const sumbitForm = async (formData) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(sumbitForm)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <Field label="First Name" error={errors.firstName}>
          <input
            {...register("firstName", { required: "First Name is Required" })}
            className={`auth-input ${
              errors.firstName ? "border-red-500" : "border-gray-100"
            }`}
            name="firstName"
            type="firstName"
            id="firstName"
          />
        </Field>
        <Field label="Last Name" error={errors.firstName}>
          <input
            {...register("lastName", { required: "Last Name is Required" })}
            className={`auth-input ${
              errors.lastName ? "border-red-500" : "border-gray-100"
            }`}
            name="lastName"
            type="lastName"
            id="lastName"
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email is Required" })}
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-100"
            }`}
            name="email"
            type="email"
            id="email"
          />
        </Field>
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 charcters",
              },
            })}
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-100"
            }`}
            name="password"
            type="password"
            id="password"
          />
        </Field>

        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
}
