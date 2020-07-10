import typesAndColorsStorage from '../../res/types';
export function GetColorsType(types = []) {
  if (types) {
    return typesAndColorsStorage
      .filter(typeAndColors => {
        return types.includes(typeAndColors.type);
      })
      .sort(selected => {
        return selected.type === types[0] ? -1 : 1;
      });
  }

  return [];
}
