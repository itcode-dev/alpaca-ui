/**
 * ArtBox 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 00:33:45
 */

import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type ArtType = 'image' | 'video'

export interface ArtProps
{
	title: string | number | ReactNode
	subtitle?: string | number | ReactNode
	url: string,
	type: ArtType
}

export interface ArtBoxProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'>
{
	media: ArtProps[]
	width?: CSSProperties['width']
	height?: CSSProperties['height']
}