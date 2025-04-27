import {type PropsWithChildren} from "react"; // the `type` keyword marks ReactNode as a type-only import, ensuring it's erased in the compiled JavaScript

// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
        return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>DELETE</button>
        </article>
    );
}

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>DELETE</button>
//         </article>
//     );
// };
//
// export default CourseGoal;

