[![Node.js Package](https://github.com/jaswantsandhu/jssignal/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/jaswantsandhu/jssignal/actions/workflows/npm-publish.yml)

# JSSignal

JSSignal is a lightweight JavaScript library for creating and managing custom signals and effects, making it easier to develop reactive applications with vanilla JavaScript or within a larger framework.

## Features

- **Simple API**: Easy to use and integrate.
- **Lightweight**: Minimal overhead, focusing solely on signals and effects.
- **Flexible**: Useful for a wide range of applications, from simple DOM manipulations to complex state management.

## Installation

To use JSSignal in your project, you can clone the repository or include it directly in your HTML.

### Clone the Repository

```bash
git clone https://github.com/jaswantsandhu/jssignal.git
cd jssignal
npm install
```

## Using in Your Project
After cloning and building the project, you can use the distribution files in your project.

### Usage
Start by importing JSSignal in your project:

```bash
import { signal, effect } from 'path/to/dist/jssignal';
```

### Creating a Signal
const mySignal = signal(10); // Initialize a signal with a value of 10

### Listening to Changes
```bash
effect(() => {
  console.log(`Signal value changed to: ${mySignal.get()}`);
}, [mySignal]);
```
### Changing the Signal Value
```bash
mySignal.set(20); // This will trigger the effect and log the new value
```

## Development
To run the JSSignal library locally for development:
```bash
npm run start
```

This will use nodemon and ts-node to run a demo application located at demo/application.ts.

### Building for Production

To build the library for production:

```bash
npm run build
```
This script cleans the dist directory and rebuilds the library using Webpack.

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

### License

JSSignal is MIT licensed.

### Notes:
- **Customize Further**: You might want to add more sections depending on your library's complexity and features, such as API documentation, examples, or advanced configurations.
- **Keep Updated**: Ensure that the information in the README is up to date with your library's current state and capabilities.
- **Engage Your Users**: Consider adding a "Getting Help" section with links to resources or community channels if available.
