export const QUIZ_DATA = {
  initial: {
    text: "Do you have some tofu or just come to take a look?",
  },
  detailed: [
    {
      text: "Take a look",
      subQuestions: [
        {
          text: "knowledge",
          action: {
            message: "Moving to the about",
            link: "/blog/learn",
          },
        },
        {
          text: "Inspiration",
          action: {
            message: "Moving to the inspo",
            link: "/blog/inspo",
          },
        },
      ],
    },
    {
      text: "I do",
      subQuestions: [
        {
          text: "Go to the database",
          action: {
            message: "Moving to the db",
            link: "/finder/database",
          },
        },
        {
          text: "Choose by firmness",
          action: {
            message: "Moving to the firmness",
            link: "/finder/firmness",
          },
        },
      ],
    },
  ],
};
