/**
 * 스크리너 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.06.30 Thu 21:35:11
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type MediaType = 'image' | 'video'

export interface MediaProps
{
	url: string,
	type: MediaType
}

export interface ScreenerProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
{
	title: string | number | HTMLElement
	accent?: string | number | HTMLElement
	subtitle?: string | number | HTMLElement
	media: MediaProps | MediaProps[]
	width?: string | number
	height?: string | number
}