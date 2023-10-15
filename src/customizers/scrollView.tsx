import { ScrollView, type ScrollViewProps } from 'react-native';

export const customizeScrollView = (customProps: ScrollViewProps) => {
  const ScrollViewRender = (ScrollView as any).render;
  if (!ScrollViewRender) {
    (ScrollView as any).defaultProps = customProps;
    return;
  }
  (ScrollView as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
    };
    return ScrollViewRender.call(this, props, ref);
  };
};
