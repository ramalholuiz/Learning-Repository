# Typescript crash course

## What is Typescript?

- Additional features to Javascript including static types;
- Using types is **optional**;
- Compiles down to regula JS;
- Useful in both frontend and backend
- Includes most features from modern ES6, ES7 (arrow function,s classes, etc);
- Types from 3rd party libraries can be added with **type definitions** (typedef maybe?).
- The main reason to use Typescript is to add static typing.

## Pros & Cons

### Pros:

- More robust;
- Easier to spot bugs;
- Predictability;
- Readability;
- Popular;
- It really shines when working with multiple developers.

### Cons:

- More code to write (more verbose);
- Learning curve;
- Required compilation;
- Not true static typing (because it compiles to javascript).

## Compiling Typescript

- Uses .ts and .tsx extensions
- TSC (Typescript Compiler) is used to compile .ts files to JS;
- TSC can watch files and report errors at compile time;
- Many tools include TS compilation by default (create-react-app, nextjs, etc);
- Most IDEs have great support for TS;
- Use the **tsconfig.json** file to configure Typescript behavior.
