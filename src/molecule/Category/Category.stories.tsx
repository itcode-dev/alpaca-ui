/**
 * Category 아이템 Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 00:40:19
 */

import Category, { CategoryProps } from '@alpaca/molecule/Category';
import styles from '@alpaca/stories.module.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

export default {
	component: Category,
	title: 'Moleclue/Category'
} as ComponentMeta<typeof Category>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {CategoryProps} args: CategoryProps 객체
 *
 * @returns {ComponentStory<typeof Category>} ComponentStory 객체
 */
function getTemplate(args: CategoryProps): ComponentStory<typeof Category>
{
	return (
		<section className={cn('root', args.theme)}>
			<div className={cn('row')}>
				<div style={{ width: 800 }}>
					<Category {...args} />
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
	title: <h3>🎉 카테고리</h3>
} as CategoryProps;