export default function omit(obj) {
  delete obj.override;
  return obj;
}
