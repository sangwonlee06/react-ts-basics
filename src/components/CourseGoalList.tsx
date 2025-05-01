import CourseGoal from "./CourseGoal"
import {type CourseGoal as CGoal} from '../App.tsx'

type CourseGoalListProps = {
    goals: CGoal[];
}

export default function CourseGoalList({goals}: CourseGoalListProps): JSX.Element {
    return (
        <ul>
            {goals.map((goal) => (
                <li>
                    <CourseGoal title={goal.title}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}