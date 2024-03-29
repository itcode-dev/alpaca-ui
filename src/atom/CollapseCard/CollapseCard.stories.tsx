/**
 * CollapseCard Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:58
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useContext, useEffect } from 'react';

import { CollapseCardProps } from './CollapseCard.types';

import { AlpacaContext } from '../../common';
import styles from '../../stories.module.scss';

import CollapseCard from '.';

export default {
	component: CollapseCard,
	title: 'Atom/CollapseCard'
} as ComponentMeta<typeof CollapseCard>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {CollapseCardProps} param0: CollapseCardProps 인터페이스
 *
 * @returns {ComponentStory<typeof CollapseCard>} ComponentStory 객체
 */
function getTemplate({ theme, ...props }: Omit<CollapseCardProps, 'children'>): ComponentStory<typeof CollapseCard>
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
				<div style={{ width: 500 }}>
					<CollapseCard {...props}>
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
					</CollapseCard>
				</div>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { theme: 'light' } as Omit<CollapseCardProps, 'children'>;