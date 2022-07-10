/**
 * 아트박스 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 00:33:45
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type ArtType = 'image' | 'video'

export interface ArtProps
{
	title: string | number | HTMLElement
	subtitle?: string | number | HTMLElement
	url: string,
	type: ArtType
}

export interface ArtBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
{
	media: ArtProps[]
	width?: string | number
	height?: string | number
}