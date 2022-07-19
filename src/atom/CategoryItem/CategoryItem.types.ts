/**
 * 카테고리 아이템 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 00:13:02
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CategoryItemProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'children'>
{
	category: string
	name?: string
	image?: string
	count?: string | number
	simplify?: boolean
	isCheck?: boolean
	refresh?: boolean
	onSelect?: (isCheck: boolean) => void
}