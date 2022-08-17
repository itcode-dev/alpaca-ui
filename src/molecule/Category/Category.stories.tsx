/**
 * Category 아이템 Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 00:40:19
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useContext, useEffect } from 'react';

import Category from './Category';
import { CategoryProps } from './Category.types';

import { AlpacaContext } from '../../common';
import styles from '../../stories.module.scss';

export default {
	argTypes: { header: { control: false } },
	component: Category,
	title: 'Moleclue/Category'
} as ComponentMeta<typeof Category>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {CategoryProps} param0: CategoryProps 객체
 *
 * @returns {ComponentStory<typeof Category>} ComponentStory 객체
 */
function getTemplate({ theme, ...props }: Omit<CategoryProps, 'header'>): ComponentStory<typeof Category>
{
	const { setTheme } = useContext(AlpacaContext);

	useEffect(() =>
	{
		// setTheme 메서드가 유효할 경우
		if (setTheme)
		{
			setTheme(theme);
		}
	}, [ theme ]);

	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<div style={{ width: 800 }}>
					<Category header={<h2>카테고리</h2>} {...props} />
				</div>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	column: 4,
	list: [
		{
			category: '카테고리1',
			checked: false,
			count: Math.ceil(Math.random() * 100),
			image: 'https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1',
			name: '카테고리 이름',
			simplify: false
		},
		{
			category: '카테고리2',
			checked: false,
			count: Math.ceil(Math.random() * 100),
			image: 'https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1',
			simplify: false
		},
		{
			category: '카테고리3',
			checked: false,
			count: Math.ceil(Math.random() * 100),
			image: 'https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1',
			simplify: false
		},
		{
			category: '카테고리4',
			checked: false,
			count: Math.ceil(Math.random() * 100),
			image: 'https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1',
			name: '내용',
			simplify: false
		},
		{
			category: '카테고리5',
			checked: false,
			count: Math.ceil(Math.random() * 100),
			image: 'https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1',
			simplify: false
		},
		{
			category: '카테고리6',
			checked: false,
			count: Math.ceil(Math.random() * 100),
			image: 'https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1',
			simplify: false
		}
	],
	useRefresh: true
} as Omit<CategoryProps, 'header'>;