/**
 * Will remove the banner that syncfusion creates since I do not have a licence, it's temporary I swear :)
 */
export const removeSyncfusionLicenceBanner = () => {
  const js_licence_banner = document.getElementById('js-licensing');
  if (js_licence_banner) js_licence_banner.remove();
};

/**
 * Will remove the banner that syncfusion creates since I do not have a licence, it's temporary I swear :)
 * @param arr Any array of objects
 * @param removeKeys An array of keys to remove
 * @returns string[]
 */
export const getUniqueKeysFromArrayOfObj = (
  arr: any[],
  removeKeys?: string[]
): string[] => {
  let keys: string[] = [];
  arr.forEach((el) => {
    keys = [...keys, ...Object.keys(el)];
  });
  keys = [...new Set(keys)];

  if (removeKeys && removeKeys.length > 0) {
    keys = keys.filter((key) => !removeKeys.includes(key));
  }
  return keys;
};
