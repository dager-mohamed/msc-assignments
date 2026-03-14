interface APIresponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    role: string;
    email: string;
    isActive: boolean;
    courses: Course[];
  };
}

interface Course {
  id: number;
  title: string;
}
