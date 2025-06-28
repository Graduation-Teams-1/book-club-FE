export interface Club {
  imageUrl: string;
  coverUrl: string;
  bookClubName: string;
  bookClubMembersNumber: number;
  currentlyReading: string;
  genres: string[];
}

export type clubsResponse = Club[];
