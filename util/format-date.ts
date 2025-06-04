export function formatDate(d: string, { hideHour = false }: { hideHour?: boolean } = {}) {
  const date = new Date(d);
  if (hideHour) {
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
