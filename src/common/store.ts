/**
 * 저장소 모듈
 *
 * @author RWB
 * @since 2022.07.27 Wed 24:41:38
 */

import { atom } from 'recoil';

export const accordionAtom = new atom<boolean | undefined>({
	default: undefined,
	key: 'accordionState'
});