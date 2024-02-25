import React, { HTMLAttributes } from "react";

import { FieldError } from "react-hook-form";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  error?: FieldError;
}

const ErrorMessage = React.forwardRef<HTMLSpanElement, Props>(({ error, className, ...props }, ref) => {
  if (!error) return null;
  return (
    <small ref={ref} className={cn("text-red-500", className)} {...props}>
      {error.message}
    </small>
  );
});

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
