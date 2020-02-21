# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
  - React is a JavaScript library that is used for building user interfaces.
  - The main problem that React solved was state on large applications.
  - React allows the breaking down of code into individual components with their own individual states.

1. What does it mean to think in react?
  - It means looking at how you go about building your application
        - Mock up design
        - Break The UI Into A Component Hierarchy
        - Build A Static Version in React
        - Identify Where Your State Should Live
        - Add Inverse Data Flow

1. Describe state.
  - It's something that represents the parts of the app that can change.

1. Describe props.
  - Props are essentially traits/properties passed down from parent component to child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
  - A side effect is anything that affects something outside of the scope of a function.
  - By passing a dependency array as the second argument to your useEffect hook.