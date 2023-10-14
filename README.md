# react-native-reset-css

Bringing the web's reset CSS experience to React Native for a consistent mobile UI

## Installation

```sh
npm install react-native-reset-css

or

yarn add react-native-reset-css
```

## Usage

### Basic Usage

#### 1. Import the `reset` function

```js
import { customizeView } from 'react-native-reset-css';

or;

import Customizer from 'react-native-reset-css';
```

#### 2. Customize your Component

```js
customizeView({
  style: {
    backgroundColor: 'blue',
  },
});

or;

Customizer.View({
  style: {
    backgroundColor: 'yellow',
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
