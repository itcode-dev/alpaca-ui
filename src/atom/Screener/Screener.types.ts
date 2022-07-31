/**
 * Screener 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.06.30 Thu 21:35:11
 */

import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export type MediaType = 'image' | 'video'

export interface MediaProps
{
	url: string,
	type: MediaType
}

export interface ScreenerProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'>
{
	title: string | number | HTMLElement
	accent?: string | number | HTMLElement
	subtitle?: string | number | HTMLElement
	media: MediaProps | MediaProps[]
	width?: CSSProperties['width']
	height?: CSSProperties['height']
}