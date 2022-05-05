import { SubMenuProps } from 'bellejs';

export const useSubMenu = () => {
  const subMenuProps = (
    key: React.Key,
    title: Pick<SubMenuProps, 'title'>['title'],
    onTitleClick: Pick<SubMenuProps, 'onTitleClick'>['onTitleClick'],
  ) => {
    return {
      key: key,
      title: title,
      onTitleClick: (e: any) => {
        console.log('onTitleClickInternal');
        onTitleClick!(e);
      },
    };
  };
  return subMenuProps;
};
