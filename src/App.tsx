import GlobalStyles from "styles/GlobalStyles";

// Lessons
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_07_Practise from "lessons/Lesson_07_Practise/Lesson_07_Practise";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";

// Homeworks
import Homework_07 from "homeworks/Homework_07/Homework_07";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_07_Practise /> */}
      {/* <Lesson_08 /> */}
      <Lesson_09 />
      {/* <Homework_07 /> */}
    </>
  );
}

export default App;
