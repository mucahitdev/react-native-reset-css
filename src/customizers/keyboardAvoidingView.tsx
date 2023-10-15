import {
  KeyboardAvoidingView,
  type KeyboardAvoidingViewProps,
} from 'react-native';

export const customizeKeyboardAvoidingView = (
  customProps: KeyboardAvoidingViewProps
) => {
  const KeyboardAvoidingViewRender = (KeyboardAvoidingView as any).render;
  if (!KeyboardAvoidingViewRender) {
    (KeyboardAvoidingView as any).defaultProps = customProps;
    return;
  }
  (KeyboardAvoidingView as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
    };
    return KeyboardAvoidingViewRender.call(this, props, ref);
  };
};
