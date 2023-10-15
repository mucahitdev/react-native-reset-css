import { View, type ViewProps } from 'react-native';

export const customizeView = (customProps: ViewProps) => {
  const ViewRender = (View as any).render;
  if (!ViewRender) {
    (View as any).defaultProps = customProps;
    return;
  }
  (View as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return ViewRender.call(this, props, ref);
  };
};
