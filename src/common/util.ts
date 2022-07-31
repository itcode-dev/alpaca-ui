/**
 * 유틸 모듈
 *
 * @author RWB
 * @since 2022.07.31 Sun 22:12:46
 */

export function slide(tag: HTMLElement, open: boolean | undefined): void
{
	tag.style.height = open ? `${tag.scrollHeight}px` : '0px';
}