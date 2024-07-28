export default function ErrorMessage({ message }: { message: string }) {
  return <p className="text-error text-sm font-semibold">{message}</p>;
}
