const modifier = (value) => {
  return value * 2;
};

export default function getModifiedValue(base) {
  return modifier(base.getValue());
}
