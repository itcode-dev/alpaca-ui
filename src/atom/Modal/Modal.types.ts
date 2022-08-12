/**
 * Modal 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 00:47:18
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Theme } from '../../common';

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	dimmed?: boolean
	forced?: boolean
	open?: boolean
	theme?: Theme
}