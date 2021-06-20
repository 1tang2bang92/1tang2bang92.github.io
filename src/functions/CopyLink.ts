const copy = async (link: string) => {
  const clipboard = navigator.clipboard;
  await clipboard.writeText(link);
};

export default copy;
