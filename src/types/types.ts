export interface UserData {
  googleSub: string;
  imgKey: string;
  firstName: string;
  lastName: string;
  role: string[];
  birthday: string;
  email: string;
  mentoringArchive: string[];
  availableDays: string[];
  mentorProfession?: string[];
  mentorCanHelpWith?: string[];
  description?: string;
  connections: string[];
}

export type s3UploadData = {
  url: string;
  file: File;
};
