import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function tdesignMobileVue1() {
  return {
    uiName: 'tdesign-mobile-vue',
    lib: 'tdesign-mobile-vue',
    map: getPropsMap(),
  }
}

export function tdesignMobileVue1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: true,
    prefix: 't',
    isReact: false,
    lib: 'tdesign-mobile-vue',
    // directives: directives.tdesignMobileVue1,
  }
}
