export function loadDrawingRecord() {
  const drawingRecord = localStorage.getItem("drawingRecord");
  const today = new Date().toDateString();

  if (drawingRecord) {
    const { lastAttemptDate, remainingTries } = JSON.parse(drawingRecord);
    if (lastAttemptDate === today) {
      return { lastAttemptDate, remainingTries };
    }
  }

  return { lastAttemptDate: today, remainingTries: 3 };
}
