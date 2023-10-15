import { FlatList, type FlatListProps } from 'react-native';

export const customizeFlatList = (customProps: FlatListProps<any>) => {
  const FlatListRender = (FlatList as any).render;
  if (!FlatListRender) {
    (FlatList as any).defaultProps = customProps;
    return;
  }
  (FlatList as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
    };
    return FlatListRender.call(this, props, ref);
  };
};
