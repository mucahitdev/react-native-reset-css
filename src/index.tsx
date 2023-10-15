import { customizeView } from './customizers/view';
import { customizeText } from './customizers/text';
import { customizeImage } from './customizers/image';
import { customizeTextInput } from './customizers/textInput';
import { customizeTextSwitch } from './customizers/switch';
import { customizeModal } from './customizers/modal';
import { customizePressable } from './customizers/pressable';
import { customizeStatusBar } from './customizers/statusBar';
import { customizeButton } from './customizers/button';
import { customizeImageBackground } from './customizers/imageBackground';
import { customizeKeyboardAvoidingView } from './customizers/keyboardAvoidingView';
import { customizeRefreshControl } from './customizers/refreshControl';
import { customizeScrollView } from './customizers/scrollView';
import { customizeFlatList } from './customizers/flatList';
import { customizeSectionList } from './customizers/sectionList';
import {
  customizeTouchableHighlight,
  customizeTouchableNativeFeedback,
  customizeTouchableWithoutFeedback,
  customizeTouchableOpacity,
} from './customizers/touchable';

const Customizer = {
  Text: customizeText,
  View: customizeView,
  Image: customizeImage,
  TextInput: customizeTextInput,
  Switch: customizeTextSwitch,
  Modal: customizeModal,
  Pressable: customizePressable,
  StatusBar: customizeStatusBar,
  Button: customizeButton,
  ImageBackground: customizeImageBackground,
  KeyboardAvoidingView: customizeKeyboardAvoidingView,
  RefreshControl: customizeRefreshControl,
  ScrollView: customizeScrollView,
  FlatList: customizeFlatList,
  SectionList: customizeSectionList,
  TouchableHighlight: customizeTouchableHighlight,
  TouchableNativeFeedback: customizeTouchableNativeFeedback,
  TouchableWithoutFeedback: customizeTouchableWithoutFeedback,
  TouchableOpacity: customizeTouchableOpacity,
};

export {
  customizeText,
  customizeView,
  customizeImage,
  customizeTextInput,
  customizeTextSwitch,
  customizeModal,
  customizePressable,
  customizeStatusBar,
  customizeButton,
  customizeImageBackground,
  customizeKeyboardAvoidingView,
  customizeRefreshControl,
  customizeScrollView,
  customizeFlatList,
  customizeSectionList,
  customizeTouchableHighlight,
  customizeTouchableNativeFeedback,
  customizeTouchableWithoutFeedback,
  customizeTouchableOpacity,
};

export default Customizer;
