import { customizeView } from './customizers/view';
import { customizeText } from './customizers/text';

const Customizer = {
  Text: customizeText,
  View: customizeView,
};

export { customizeText, customizeView };

export default Customizer;
