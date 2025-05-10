// app/components/agenda/types.ts
export interface Speaker {
  _id: string;
  name: string;
  position?: string;
  image?: string;
}

export interface AgendaItem {
  _id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  type: string;
  speakers: Speaker[];
}

export interface AgendaSession {
  _id: string;
  title: string;
  startTime: string;
  endTime: string;
  venue?: string;
  color?: string;
  items: AgendaItem[];
}

export interface AgendaDay {
  _id: string;
  name: string;
  date: string;
  dayNumber: number;
  sessions: AgendaSession[];
}