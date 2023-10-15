import { SectionList, type SectionListProps } from 'react-native';

export const customizeSectionList = (customProps: SectionListProps<any>) => {
  const SectionListRender = (SectionList as any).render;
  if (!SectionListRender) {
    (SectionList as any).defaultProps = customProps;
    return;
  }
  (SectionList as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
    };
    return SectionListRender.call(this, props, ref);
  };
};
