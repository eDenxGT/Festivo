export function formatDate(dateStr: string | Date): string {
	return new Date(dateStr).toLocaleDateString();
}
