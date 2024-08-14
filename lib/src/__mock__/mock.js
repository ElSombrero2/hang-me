"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFunctions = exports.FlattedSourceObject = exports.SourceObject = exports.TextResult = exports.Text = void 0;
exports.Text = "\nHello, {{name}} {{lastname}}\nYour pope name is {{colorized: fullname}}\nUser: {{user.name}} {{user.lastname}}\nNested object: {{user.very.long.information.for[0].me.and[0]}}\n";
exports.TextResult = "\nHello, Jean Paul\nYour pope name is \u001B[31mJean Paul II\u001B[0m\nUser: John Paul\nNested object: My Friends\n";
exports.SourceObject = {
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
exports.FlattedSourceObject = {
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
exports.MockFunctions = {
    colorized: function (str) {
        return "\u001B[31m".concat(str, "\u001B[0m");
    },
};
