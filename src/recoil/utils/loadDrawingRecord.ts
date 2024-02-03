export const defaultTries = 7;
export function loadDrawingRecord() {
  const drawingRecord = localStorage.getItem("drawingRecord");
  const today = new Date().toDateString();

  if (drawingRecord) {
    const { lastAttemptDate, remainingTries, beforeImages } =
      JSON.parse(drawingRecord);
    if (lastAttemptDate === today) {
      return { lastAttemptDate, remainingTries, beforeImages };
    }
  }

  return {
    lastAttemptDate: today,
    remainingTries: defaultTries,
    beforeImages: [],
  };
}
