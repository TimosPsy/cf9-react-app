 //import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
 //import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
 //import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";

// type Props = {
//     title: string,
//     description: string,
// }
//
// type PropsA = {
//     title: string,
//     description: string,
// }
//
// interface PropsB {
//     title: string,
//     description: string,
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// //Intersection
// type Props = PropsA & PropsB;



//import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
 import Layout from "./components/Layout.tsx";
 // import Counter from "./components/LessonFour/Counter.tsx";
 // import ClassCounter from "./components/LessonFour/ClassCounter.tsx";
 import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";

 function App() {

  return (
    <>
      {/*{LESSON THREE}*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}


      {/*{Lesson Three} */}
      {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}


      <Layout addClasses="bg-gray-50" >
          {/*<ArrowFunctionalComponentWithProps*/}
          {/*    title="Second Title"*/}
          {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur fugit, inventore odio quia quibusdam quis ratione rem."*/}
          {/*/>*/}
          {/*<p className="text-red-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta, in labore minima molestiae optio porro quae quidem quo sequi!</p>*/}
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, perferendis?</p>*/}
          {/*<Counter/>*/}
          {/*<ClassCounter/>*/}
          <CounterAdvanced/>
      </Layout>
    </>
  )
}

export default App
