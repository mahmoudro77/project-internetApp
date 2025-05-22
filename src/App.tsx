import { useState } from "react";

interface Student {
  name: string;
  level: number;
  averageScore: number;
}

const students: Student[] = [
  { name: "Aiden Carter", level: 1, averageScore: 88 },
  { name: "Bella Thompson", level: 2, averageScore: 91 },
  { name: "Caleb Johnson", level: 3, averageScore: 84 },
  { name: "Daisy Nguyen", level: 3, averageScore: 93 },
  { name: "Ethan Wright", level: 1, averageScore: 76 },
  { name: "Fiona Lopez", level: 3, averageScore: 89 },
  { name: "Gavin Smith", level: 2, averageScore: 82 },
  { name: "Hannah Patel", level: 3, averageScore: 95 },
  { name: "Isaac Chen", level: 1, averageScore: 79 },
  { name: "Jasmine Rivera", level: 2, averageScore: 87 },
];

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const filteredStudents = selectedLevel
    ? students.filter((student) => student.level === parseInt(selectedLevel))
    : students;

  return (
    <div>
      <h1>Student Data</h1>
      <div className="select-box">
        <label htmlFor="level">Filter by Level: </label>
        <select
          id="level"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
      </div>
      <div className="table">
        <table>
          <thead>
          <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.level}</td>
                <td>{student.averageScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
