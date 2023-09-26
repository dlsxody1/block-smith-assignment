export interface AnnounceProps {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnnounceSummary
  extends Omit<AnnounceProps, "title" | "updatedAt"> {}
export interface RequestProps
  extends Omit<AnnounceProps, "createdAt" | "updatedAt"> {}
export interface SearchProps extends Omit<RequestProps, "id"> {}
