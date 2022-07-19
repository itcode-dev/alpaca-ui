/**
 * 아트박스 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 00:33:45
 */

import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export type ArtType = 'image' | 'video'

export interface ArtProps
{
	title: string | number | HTMLElement
	subtitle?: string | number | HTMLElement
	url: string,
	type: ArtType
}

export interface ArtBoxProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'>
{
	media: ArtProps[]
	width?: CSSProperties['width']
	height?: CSSProperties['height']
}