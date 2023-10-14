import { customizeView } from './customizers/view';
import { customizeText } from './customizers/text';
import { customizeImage } from './customizers/image';
import { customizeTextInput } from './customizers/textInput';
import { customizeTextSwitch } from './customizers/switch';

const Customizer = {
  Text: customizeText,
  View: customizeView,
  Image: customizeImage,
  TextInput: customizeTextInput,
  Switch: customizeTextSwitch,
};

export {
  customizeText,
  customizeView,
  customizeImage,
  customizeTextInput,
  customizeTextSwitch,
};

export default Customizer;
