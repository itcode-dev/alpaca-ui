/**
 * 카테고리 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.14 Thu 14:48:12
 */

import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Category.module.scss';
import { CategoryProps } from './Category.types';

import Accordion from '../../atom/Accordion';
import CategoryItem from '../../atom/CategoryItem';
import { CategoryItemProps } from '../../atom/CategoryItem/CategoryItem.types';

export default function Category({ open, title, list, theme, onSelectCategory }: CategoryProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const [ selectCategory, setSelectCategory ] = useState<CategoryItemProps[]>([]);

	const categories = list?.map((item, idx) => (
		<CategoryItem {...item} key={`category-item-${idx + 1}`} onSelect={(isCheck) => handleSelect(isCheck, item)} />
	)) || (
		<p>경고</p>
	);

	const handleSelect = (isCheck: boolean, category: CategoryItemProps) =>
	{
		let temp = selectCategory.slice();

		if (temp.findIndex((item) => item.category === category.category) > -1)
		{
			temp = temp.filter((item) => item.category !== category.category);
		}

		else
		{
			temp.push(category);
		}

		setSelectCategory(temp);

		if (onSelectCategory)
		{
			onSelectCategory(temp);
		}
	};

	return (
		<Accordion open={open} theme={theme} title={title}>
			<div className={cn('category-wrapper')}>
				{categories}
			</div>
		</Accordion>
	);
}