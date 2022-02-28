# Angular Coding Challenge for Tripoint Solutions

This basic coding challenge is to demonstrate your abilities with the essential skills required for this position: Angular, TypeScript, and RxJS.

## Getting Started

Clone this repo to your computer.

`git clone https://github.com/jason-heiser/tps-angular-coding-challenge.git`

If you do not have Node.js, [install it](https://nodejs.org/dist/v16.14.0/node-v16.14.0.pkg).

Open the command line and `cd` to the `tps-angular-coding-challenge` folder and run  `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Existing Functionality
In `AppComponent` there is a filtration interface that helps project managers find projects of interest to them.

Presently it searches for projects by only the `projectName` field. If you type `omega` in the search field, you will see only one project: `Project Omega`.

The filtration mechanism performs partial string matches and is not case sensitive.

## The Challenge
### Requirement A) “Multi-Field Filtration”
Project Managers want to filter projects by all three fields in the table: `projectName`, `projectSize` and `projectManager`.

### Requirement B) “Ranked Results”
Project managers are more interested in projects that belong to them. Although they do want to see projects belonging to others, their own projects should “float to the top” and come first in the filtration results. You do not need to alphabetize or sort the results by any other field.

## Solution
You must modify the logic in `app.component.ts` so that it satisfies both requirements outlined above.

The entirety of your solution should not take more than one hour to develop and should be confined to this component’s TS file.

You are free to change anything in this component but your solution should adopt the conventions established by the existing filtration functionality.

Your solution should add no more than 20 lines of code to the file. Ideally, it will consist of fewer than ten lines.

### Hints

Although everything you need to solve the challenge is already present in the `app.component.ts` file, you should examine its two service dependencies (`projects.service.ts` and `user.service.ts`) to learn more about the data they provide.

#### A. “Multi-Field Filtration” Hint
Whatever text the user types in the filter field can match any one of the three fields, so you will need to use a logical `or` operation.

#### B. “Ranked Results” Hint
The `UserService` has an asynchronous property called `currentUser$` that returns an object representing the current user. Use its `userId` property in conjunction with a project’s `projectManagerId` property for the “Ranked Results” requirement.

## Submitting Your Solution

When you have solved the challenge, zip up the `src` folder inside this project and email it to jason.heiser@tripointsolutons.com.
