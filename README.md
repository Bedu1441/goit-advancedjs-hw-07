# goit-advancedjs-hw-07

Homework for Topic 11: Object-Oriented Programming and TypeScript.

## Description

This project contains practical TypeScript tasks focused on object-oriented programming.

The homework includes four main tasks:

1. Short constructor property initialization
2. Classes with access modifiers
3. Interfaces for a game character
4. Interaction between a person, a key, and a house

All source files are located in the `src` folder.

## Completed tasks

### Task 1 — Student class

The `Student` class was refactored using short constructor property initialization.

Instead of declaring properties separately and assigning them manually inside the constructor, the class uses TypeScript constructor parameter properties:

```ts
constructor(
  public name: string,
  public age: number,
  public grade: string
) {}
```

This makes the class shorter and cleaner.

### Task 2 — Employee and Manager classes

The `Employee` and `Manager` classes were implemented.

The `Employee` class uses access modifiers:

- `public name`
- `private department`
- `protected salary`

The `Manager` class extends `Employee` and calls the parent constructor using `super`.

The manager salary is increased by `10000` during initialization.

### Task 3 — Wizard interfaces

The `Wizard` class implements two interfaces:

- `ICharacter`
- `ISpellCaster`

The `ICharacter` interface describes:

- `name`
- `level`
- `introduce()`
- `levelUp()`

The `ISpellCaster` interface describes:

- `castSpell()`

This task demonstrates how interfaces can define required class structure and behavior.

### Task 4 — Key, Person, House, and MyHouse

The following classes were implemented:

- `Key`
- `Person`
- `House`
- `MyHouse`

The task demonstrates interaction between objects:

1. A `Key` object is created.
2. A `House` is created with this key.
3. A `Person` receives the same key.
4. The person uses the key to open the house.
5. If the key matches, the person can enter the house.

The `House` class is abstract and contains an abstract `openDoor()` method.

The `MyHouse` class extends `House` and implements the door opening logic.

## Project structure

```text
src/
  1.ts
  2.ts
  3.ts
  4.ts
package.json
tsconfig.json
README.md
```

## Technologies used

- TypeScript
- Node.js
- npm

## TypeScript concepts practiced

- classes
- constructors
- constructor parameter properties
- inheritance
- `extends`
- `super`
- interfaces
- `implements`
- abstract classes
- abstract methods
- access modifiers:
  - `public`
  - `private`
  - `protected`
- arrays of class instances
- method return types
- object interaction through class instances

## Installation

Install dependencies:

```bash
npm install
```

## Build

Run TypeScript compilation:

```bash
npm run build
```

If the command finishes without errors, the homework is completed successfully.

## Watch mode

For automatic TypeScript compilation during development, run:

```bash
npm run watch
```

## Source files

The source files are located in the `src` folder:

```text
src/1.ts
src/2.ts
src/3.ts
src/4.ts
```

## Notes

Each TypeScript file contains `export {}` to make it an isolated module and avoid naming conflicts between files.

The project was completed according to the homework requirements from the repository README.
