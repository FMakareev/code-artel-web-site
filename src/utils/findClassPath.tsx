export const findClassInPath = (path: any, className: any) => {
  try {
    return path.findIndex((item: any) => item.className && item.className.indexOf(className) >= 0);
  } catch (error) {
    return null;
  }
};

export default findClassInPath;
