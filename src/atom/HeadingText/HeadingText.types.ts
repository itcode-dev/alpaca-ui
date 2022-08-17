/**
 * HeadingText 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.17 Wed 00:36:36
 */

import { HTMLAttributes, DetailedHTMLProps } from 'react';

export type HeadingTextLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement>
{
	level: HeadingTextLevel
}