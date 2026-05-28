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
// import Layout from "./components/Layout.tsx";
 // import Counter from "./components/LessonFour/Counter.tsx";
 // import ClassCounter from "./components/LessonFour/ClassCounter.tsx";
 //import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
 //import NameChanger from "./components/LessonFive/NameChanger.tsx";
 //import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
 //import NameChangerWithTitle from "./components/LessonFive/NameChangerWithTitle.tsx";
 //import AutoRedirect from "./components/LessonSix/AutoRedirect.tsx";
 //import AutoRedirectAdvanced from "./components/LessonSix/AutoRedirectAdvanced.tsx";
 //import WindowSize from "./components/LessonSix/WindowSize.tsx";
 //import FocusInput from "./components/LessonSix/FocusInput.tsx";
 //import PreviousValue from "./components/PreviousValue.tsx";





 import {Route, Routes} from "react-router";
 //import NameChanger from "./components/LessonFive/NameChanger.tsx";
 import HomePage from "./pages/HomePage.tsx";
 //import Counter from "./components/LessonFour/Counter.tsx";
 //import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
 import RouterLayout from "./components/RouterLayout.tsx";
 import UserPage from "./pages/UserPage.tsx";
 import SearchPage from "./pages/SearchPage.tsx";
 import MultyFieldForm from "./components/LessonNine/MultyFieldForm.tsx";
 import MultiFieldFormWithValidation from "./components/LessonNine/MultiFieldFormWithValidation.tsx";
 import MultiFieldFormWithValidationWithZod from "./components/LessonTen/MultiFieldFormWithValidationWithZod.tsx";
 import MultiFieldFormWithValidationWithHookForm
     from "./components/LessonTen/MultiFieldFormWithValidationWithHookForm.tsx";

 function App() {

     // useEffect(() => {
     //     history.pushState({}, "","/about");
     // },[]);

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


      {/*<Layout addClasses="bg-gray-50" >*/}
      {/*    /!*<ArrowFunctionalComponentWithProps*!/*/}
      {/*    /!*    title="Second Title"*!/*/}
      {/*    /!*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur fugit, inventore odio quia quibusdam quis ratione rem."*!/*/}
      {/*    /!*<p className="text-red-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta, in labore minima molestiae optio porro quae quidem quo sequi!</p>*!/*/}
      {/*    /!*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, perferendis?</p>*!/*/}
      {/*    /!*<Counter/>*!/*/}
      {/*    /!*<ClassCounter/>*!/*/}
      {/*    /!*<CounterAdvanced/>*!/*/}
      {/*    <NameChanger/>*/}
      {/*    /!*<CounterWithCustomHook/>*!/*/}
      {/*    /!*<NameChangerWithTitle/>*!/*/}
      {/*    /!*<AutoRedirect/>*!/*/}
      {/*    /!*<AutoRedirectAdvanced/>*!/*/}
      {/*    /!*<WindowSize/>*!/*/}
      {/*    /!*<FocusInput/>*!/*/}
      {/*    <PreviousValue/>*/}
      {/*</Layout>*/}

        <Routes>

            <Route element={<RouterLayout />}>
              <Route index element={<HomePage />} />
              {/*<Route path="examples?">*/}
              {/*  <Route path="name-changer" element={<NameChanger />}/>*/}
              {/*  <Route path="counter" element={<Counter />}/>*/}
              {/*  <Route path="counter-advanced" element={<CounterAdvanced />}/>*/}
              {/*</Route>*/}

              <Route path="users">
                <Route path=":userId" element={<UserPage />} />
              </Route>
              <Route path="search" element={<SearchPage />}/>
                {/*/search?query=react-js&page=2   QUERY Params*/}

              <Route path="multyfield-form" element={<MultyFieldForm />}/>
                <Route path="multyfield-form" element={<MultyFieldForm />}/>
                <Route path="multifield-form-validation" element={<MultiFieldFormWithValidation />}/>
                <Route path="multifield-form-zod" element={<MultiFieldFormWithValidationWithZod />}/>
                <Route path="multifield-hook-form" element={<MultiFieldFormWithValidationWithHookForm />}/>

            </Route>

        </Routes>
    </>
  )
}

export default App
