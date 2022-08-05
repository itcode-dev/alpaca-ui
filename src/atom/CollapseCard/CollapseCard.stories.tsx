/**
 * CollapseCard Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:58
 */

import CollapseCard, { CollapseCardProps } from '@alpaca/atom/CollapseCard';
import styles from '@alpaca/stories.module.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

export default {
	component: CollapseCard,
	title: 'Atom/CollapseCard'
} as ComponentMeta<typeof CollapseCard>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {CollapseCardProps} args: CollapseCardProps 인터페이스
 *
 * @returns {ComponentStory<typeof CollapseCard>} ComponentStory 객체
 */
function getTemplate(args: CollapseCardProps): ComponentStory<typeof CollapseCard>
{
	return (
		<section className={cn('root', args.theme)}>
			<div className={cn('row')}>
				<div style={{ width: 500 }}>
					<CollapseCard {...args} />
				</div>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: (
		<>
			<CollapseCard.Thumb image='https://blog.kakaocdn.net/dn/uR4bZ/btqH47v1x5Z/RuDV0p6v1cOsy7SnpNocp0/img.png' link='https://www.youtube.com/watch?v=JC6budcACNE' />

			<CollapseCard.Body>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nihil distinctio laboriosam quia cupiditate sed rerum dignissimos rem alias voluptas ab laborum nulla ea repudiandae, debitis sunt. Error, ratione a.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nihil distinctio laboriosam quia cupiditate sed rerum dignissimos rem alias voluptas ab laborum nulla ea repudiandae, debitis sunt. Error, ratione a.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nihil distinctio laboriosam quia cupiditate sed rerum dignissimos rem alias voluptas ab laborum nulla ea repudiandae, debitis sunt. Error, ratione a.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nihil distinctio laboriosam quia cupiditate sed rerum dignissimos rem alias voluptas ab laborum nulla ea repudiandae, debitis sunt. Error, ratione a.</p>
			</CollapseCard.Body>

			<CollapseCard.Footer>
				<p>2022-05-01</p>
			</CollapseCard.Footer>

			<CollapseCard.Extra>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
			</CollapseCard.Extra>
		</>
	),
	theme: 'light'
} as CollapseCardProps;