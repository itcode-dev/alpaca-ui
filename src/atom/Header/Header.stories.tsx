/**
 * Header Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.06 Wed 00:05:36
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useContext, useEffect } from 'react';

import { HeaderProps } from './Header.types';

import { AlpacaContext } from '../../common';
import styles from '../../stories.module.scss';

import Header from '.';

export default {
	component: Header,
	title: 'Atom/Header'
} as ComponentMeta<typeof Header>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {HeaderProps} param0: HeaderProps 인터페이스
 *
 * @returns {ComponentStory<typeof Header>} ComponentStory 객체
 */
function getTemplate({ theme, ...props }: HeaderProps): ComponentStory<typeof Header>
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
		<section className={cn('root', 'header')}>
			<Header {...props} />
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: 'Header Test',
	theme: 'light',
	transparent: false
} as HeaderProps;

/**
 * 투명 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Transparent(): JSX.Element
{
	return (
		<section>
			<div className={cn('root', 'header')}>
				<Header transparent>
					<h1>Header Light Transparent Theme</h1>
				</Header>
			</div>

			<div className={cn('root', 'dark', 'header')}>
				<Header theme='dark' transparent>
					<h1>Header Dark Transparent Theme</h1>
				</Header>
			</div>
		</section>
	);
}