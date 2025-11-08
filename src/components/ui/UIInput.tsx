import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  register: ReturnType<any>;
}




export const UIInput = ({label,type="text",error,register,...rest}:InputProps) => {
  return (
      <div className="w-full flex flex-col justify-start items-start gap-1.5">
          <label className="text-sm">{label}</label>
          <input
            className="w-full px-4 border border-neutral-300 rounded-lg h-[42px] text-sm placeholder:text-neutral-600"
            placeholder="email@example.com"
            type={type}
            {...register}
            {...rest}

          />
          {error && <span className="text-xs text-red-600">{error.message}</span>}
        </div>
  )
}
