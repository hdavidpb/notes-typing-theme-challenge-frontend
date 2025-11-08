import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-2 text-neutral-950 dark:text-neutral-0">
        <h3 className="text-2xl font-semibold">Create Your Account</h3>
        <p className="text-neutral-600 dark:text-neutral-350 text-sm">
          Sign up to start organizing your notes and boost your productivity.
        </p>
      </div>
      <form className="w-full flex flex-col justify-start items-start pt-6 gap-4 pb-4 border-b border-neutral-300">
        <div className="w-full flex flex-col justify-start items-start gap-1.5">
          <label className="text-sm">Name</label>
          <input
            className="w-full px-4 border border-neutral-300 rounded-lg h-[42px] text-sm placeholder:text-neutral-600"
            placeholder="ex. John doe"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1.5">
          <label className="text-sm">Email Address</label>
          <input
            className="w-full px-4 border border-neutral-300 rounded-lg h-[42px] text-sm placeholder:text-neutral-600"
            placeholder="email@example.com"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1.5">
          <label className="text-sm">Password</label>
          <input
            className="w-full px-4 border border-neutral-300 rounded-lg h-[42px] text-sm placeholder:text-neutral-600"
            placeholder="*******"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1.5">
          <label className="text-sm">Repeat Password</label>
          <input
            className="w-full px-4 border border-neutral-300 rounded-lg h-[42px] text-sm placeholder:text-neutral-600"
            placeholder="Repeat your password"
          />
        </div>
      </form>
      <span className="text-sm text-neutral-600 dark:text-neutral-300">
        Already have an account?{" "}
        <Link className="text-neutral-950 dark:text-neutral-0" to="/auth">
          Login
        </Link>
      </span>
    </>
  );
};

export default RegisterPage;
