/**
 * 유틸 모듈
 *
 * @author RWB
 * @since 2022.07.31 Sun 22:12:46
 */

import { Theme } from './context';

export type WithThemeProps<T> = T & {
	theme?: Theme
}

export type NullableJSX = JSX.Element | null

/**
 * 슬라이드 메서드
 *
 * @param {HTMLElement} tag: HTML 태그
 * @param {boolean} open: 슬라이딩 여부
 */
export function slide(tag: HTMLElement, open: boolean | undefined): void
{
	tag.style.height = open ? `${tag.scrollHeight}px` : '0px';
}