"use client";

export default function TextInput(props: any) {
  return (
    <div className="m-6">
      <div className="relative z-0 w-full mb-2">
        <input
          id={props.name}
          className={` text-white block w-full pt-4 pb-1 pl-px mb-0 text-sm bg-transparent border-0 border-b appearance-none border-grey-dark focus:outline-none focus:ring-0 autofill:bg-transparent peer ${props.className}`}
          required
          type="text"
          name={props.name}
          disabled={props.disabled}
          // lder=" "
          autoComplete={props.autoComplete}
          value={props.value || ""}
          onChange={props.onChange}
        />
        <label
          htmlFor={props.name}
          className="text-white absolute text-sm duration-300"
        >
          {props.label}
        </label>
      </div>
    </div>
  );
}
