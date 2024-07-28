type InputProps = {
  type: string;
  name: string;
  errorMessage?: string | undefined;
  value?: string | undefined;
  readOnly?: boolean;
  required?: boolean;
  label: string;
  onChange?: (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export default function Input({
  type,
  name,
  errorMessage,
  value = undefined,
  readOnly = false,
  label,
  required,
  onChange,
  ...props
}: InputProps) {
  const className =
    "p-4 backdrop-blur-lg bg-background/50 border border-primary/30 rounded-md shadow-xl max-h-[150px] focus:outline-none focus:border-primary focus:bg-background focus:shadow-primary/20";
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <Label htmlFor={name} text={label} required={required} />
      {type === "textArea" ? (
        <textarea
          name={name}
          id={name}
          placeholder={label}
          value={value}
          readOnly={readOnly}
          onChange={onChange}
          className={className}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={label}
          value={value}
          readOnly={readOnly}
          onChange={onChange}
          className={className}
        />
      )}
    </div>
  );
}

export function Label({
  htmlFor,
  text,
  required,
}: {
  htmlFor: string;
  text: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="cursor-pointer text-base font-medium">
      {text} {required && <span className="text-accent">*</span>}
    </label>
  );
}
