/**
 * 카테고리 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.14 Thu 14:49:03
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CategoryItemProps } from '../../atom/CategoryItem/CategoryItem.types';
import { Theme } from '../../common/context';

export interface CategoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	border?: CategoryItem
	open?: boolean
	title?: string | HTMLElement | null
	list?: CategoryItemProps[]
	theme?: Theme
	onSelectCategory?: (list: CategoryItemProps[]) => void
}