export function useCalculateAnimation(
  value: number,
  top: number,
  bottom: number,
  height: number,
  elemHeight: number,
) {
  const visibleHeight =
    Math.min(Number(bottom), height) - Math.max(Number(top), 0);

  // console.log(height, top, visibleHeight);

  if (bottom < 0) {
    return false;
  }

  return (
    visibleHeight > height ||
    visibleHeight > value ||
    visibleHeight == elemHeight
  );
}
