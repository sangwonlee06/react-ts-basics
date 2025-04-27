import CourseGoal from "./components/CourseGoal.tsx";

const App = () => {
    return (
        <main>
          <CourseGoal title={"Learn React + TS"}>
            <p>Learn it from the ground up</p>
          </CourseGoal>
        </main>
    );
};

export default App;