import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

export default forwardRef(function TextInput(
  {
    type = "text",
    className = "",
    isFocused = false,
    ...props
  }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
  ref
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <textarea
      {...props}
      type={type}
      className={
        "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 " +
        className
      }
      //   @ts-ignore
      ref={localRef}
    />
  );
});
