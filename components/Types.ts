export interface TimelineData {
	from_month?: number;
	from_year?: number;
	to_month?: number;
	to_year?: number;
	company?: string;
	desc?: string;
	tools?: string[];
}

export interface ProptypeTimeline {
	id: number;
	item: TimelineData;
}