/**
 * Chip 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.21 Thu 00:48:16
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Theme } from '../../common/context';

export interface ChipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	theme?: Theme
}