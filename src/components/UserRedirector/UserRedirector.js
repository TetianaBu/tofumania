"use client";

import Quiz from "@/components/Quiz";
import Main from "@/components/Main";

import { useEffect, useState } from "react";

function UserRedirector() {
  // const [isFirstTimeVisitor, setIsFirstTimeVisitor] = useState(false);

  // useEffect(() => {
  //   const visitedBefore = localStorage.getItem("visitedBefore");

  //   if (!visitedBefore) {
  //     setIsFirstTimeVisitor(true);
  //     localStorage.setItem("visitedBefore", "true");
  //   }
  // }, []);
  // return <>{isFirstTimeVisitor ? <Quiz /> : <Main/> }</>
  return <Quiz />;
}

export default UserRedirector;
