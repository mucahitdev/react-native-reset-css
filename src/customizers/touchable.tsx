import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  type TouchableHighlightProps,
  type TouchableNativeFeedbackProps,
  type TouchableWithoutFeedbackProps,
  type TouchableOpacityProps,
} from 'react-native';

export const customizeTouchableHighlight = (
  customProps: TouchableHighlightProps
) => {
  const TouchableHighlightRender = (TouchableHighlight as any).render;
  if (!TouchableHighlightRender) {
    (TouchableHighlight as any).defaultProps = customProps;
    return;
  }
  (TouchableHighlight as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TouchableHighlightRender.call(this, props, ref);
  };
};

export const customizeTouchableNativeFeedback = (
  customProps: TouchableNativeFeedbackProps
) => {
  const TouchableNativeFeedbackRender = (TouchableNativeFeedback as any).render;
  if (!TouchableNativeFeedbackRender) {
    (TouchableNativeFeedback as any).defaultProps = customProps;
    return;
  }
  (TouchableNativeFeedback as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TouchableNativeFeedbackRender.call(this, props, ref);
  };
};

export const customizeTouchableWithoutFeedback = (
  customProps: TouchableWithoutFeedbackProps
) => {
  const TouchableWithoutFeedbackRender = (TouchableWithoutFeedback as any)
    .render;
  if (!TouchableWithoutFeedbackRender) {
    (TouchableWithoutFeedback as any).defaultProps = customProps;
    return;
  }
  (TouchableWithoutFeedback as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TouchableWithoutFeedbackRender.call(this, props, ref);
  };
};

export const customizeTouchableOpacity = (
  customProps: TouchableOpacityProps
) => {
  const TouchableOpacityRender = (TouchableOpacity as any).render;
  if (!TouchableOpacityRender) {
    (TouchableOpacity as any).defaultProps = customProps;
    return;
  }
  (TouchableOpacity as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TouchableOpacityRender.call(this, props, ref);
  };
};
