// Interfaces on Typescript

interface student {
  readonly id: number;
  firstName: string;
  lastName?: string;
  department: any;
}
const Student: student = {
  id: 6,
  firstName: "Feyruza",
  department: "Computer Science",
};
