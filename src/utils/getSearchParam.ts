export default function getSearchParam(value: string) {
  return new URLSearchParams(window.location.search).get(value);
}
