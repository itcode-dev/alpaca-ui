/**
 * CategoryItem 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 00:13:02
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CategoryItemProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'children'>
{
	category: string
	checked?: boolean
	name?: string
	image?: string
	count?: string | number
	simplify?: boolean
	refresh?: boolean
	onSelect?: (checked: boolean) => void
}