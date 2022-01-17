export enum PositionCard {
	"To Do",
	"Doing",
	"Review",
	"Done",
}

export interface ProjectData {
	id: number;
	owner: string;
	description: string;
	dueDate?: string;
	projectName: string;
}
