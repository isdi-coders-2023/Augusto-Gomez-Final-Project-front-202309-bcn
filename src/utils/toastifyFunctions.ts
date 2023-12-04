export const setStyle = (color: string, progressBar: string) => {
  return {
    style: { backgroundColor: color },
    progressStyle: { backgroundColor: progressBar },
  };
};
