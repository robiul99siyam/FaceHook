import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "./Field";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigator = useNavigate();
  const { setAuth } = useAuth();
  const sumbitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        const authToken = token.token;
        const refreshToken = token.refreshToken;

        setAuth({ user, authToken, refreshToken });
        navigator("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(sumbitForm)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
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
          Login
        </button>
      </form>
    </>
  );
}
