import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { UIButton } from "../../components/ui/UIButton";
import { UIInput } from "../../components/ui/UIInput";
import { useAuthStore } from "../store/auth.store";


interface FormValue {
  email: string;
  password: string;
}
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginPage = () => {

  const login = useAuthStore(store => store.login);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValue>({});

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values: FormValue) => {

    const response = await login(values.email, values.password);

    if (response) {
        navigate("/notes")
    }

  });

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-2 text-neutral-950 dark:text-neutral-0">
        <h3 className="text-2xl font-semibold">Welcome to Note</h3>
        <p className="text-neutral-600 dark:text-neutral-350 text-sm">
          Please log in to continue
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col justify-start items-start pt-6 gap-4 pb-4 border-b border-neutral-300"
      >
        <UIInput
          label="Email Address"
          placeholder="example@email.com"
          register={{
            ...register("email", {
              required: "El email es obligatorio.",
              pattern: { value: EMAIL_PATTERN, message: "Email no válido." },
            }),
          }}
          error={errors.email}
        />

        <UIInput
          label="Password"
          register={{
            ...register("password", {
              required: "El password is required",
              validate: (value) => {
                if (value.length < 6) return "Must be 6 characters at least";
                return true;
              },
            }),
          }}
          error={errors.password}
        />
        <UIButton type="submit" className="w-full">
          Login
        </UIButton>
      </form>
      <span className="text-sm text-neutral-600 dark:text-neutral-300">
        Not account yet?{" "}
        <Link className="text-neutral-950 dark:text-neutral-0" to="/auth/register">
          Sign Up
        </Link>
      </span>
    </>
  );
};

export default LoginPage;
