export const Text = `
Hello, {{name}} {{lastname}}
Your pope name is {{colorized: fullname}}
User: {{user.name}} {{user.lastname}}
Nested object: {{user.very.long.information.for[0].me.and[0]}}
`;

export const TextResult = `
Hello, Jean Paul
Your pope name is \x1b[31mJean Paul II\x1b[0m
User: John Paul
Nested object: My Friends
`

export const SourceObject = {
  user: {
    name: "John",
    lastname: "Paul",
    very: {
      long: {
        information: {
          for: [{ me: { and: ["My Friends"] } }],
        },
      },
    },
  },
  arr: ["First element", "Second element", "Third element", "Last element"],
  name: "Jean",
  lastname: "Paul",
  fullname: "Jean Paul II",
};

export const FlattedSourceObject = {
  arr: ["First element", "Second element", "Third element", "Last element"],
  name: "Jean",
  lastname: "Paul",
  fullname: "Jean Paul II",
  "arr[0]": "First element",
  "arr[1]": "Second element",
  "arr[2]": "Third element",
  "arr[3]": "Last element",
  "user.name": "John",
  "user.lastname": "Paul",
  "user.very.long.information.for": [
    {
      me: {
        and: ["My Friends"],
      },
    },
  ],
  "user.very.long.information.for[0].me.and": ["My Friends"],
  "user.very.long.information.for[0].me.and[0]": "My Friends",
};

export const MockFunctions = {
  colorized: (str: string) => {
    return `\x1b[31m${str}\x1b[0m`;
  },
}