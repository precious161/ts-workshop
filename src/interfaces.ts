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

interface Sum {
  (x: number, y: number): number;
}
const AddNum: Sum = (x: number, y: number): number => x + y;
