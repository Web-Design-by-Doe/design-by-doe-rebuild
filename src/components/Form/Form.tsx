type FormProps = {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

export default function Form({ onSubmit, children }: FormProps) {
  return (
    <form className="flex flex-col gap-4 m-auto w-full" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
