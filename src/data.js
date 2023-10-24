export const QUIZ_DATA = {
  initial: {
    text: "Do you have some tofu or just come to take a look?",
  },
  detailed: {
    text: "I do",
    subQuestions: [
      {
        text: "Go to the database",
        action: {
          message: "Moving to the db",
          link: "/database",
        },
      },
      {
        text: "Choose by type",
        action: {
          message: "Moving to the types",
          link: "/types",
        },
      },
    ],
  },
  general: {
    text: "Take a look",
    action: {
      message: "Moving to the main page",
      link: "/main",
    },
  },
};
