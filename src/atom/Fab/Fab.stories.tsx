/**
 * Fab Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 19:03:12
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { CSSProperties, useContext, useEffect } from 'react';

import { FabProps } from './Fab.types';

import { AlpacaContext } from '../../common';
import styles from '../../stories.module.scss';

import Fab from '.';

export default {
	component: Fab,
	title: 'Atom/Fab'
} as ComponentMeta<typeof Fab>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {FabProps} param0: FabProps 인터페이스
 *
 * @returns {ComponentStory<typeof Header>} ComponentStory 객체
 */
function getTemplate({ theme, ...props }: FabProps): ComponentStory<typeof Header>
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
		<section className={cn('root', 'full')}>
			<Fab {...props} />
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	bottom: 50,
	children: 'Fab Test',
	right: 50,
	theme: 'light'
} as FabProps;

/**
 * 테마 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Theme(): JSX.Element
{
	const position = 25;
	const style: CSSProperties = { position: 'relative' };

	return (
		<section>
			<div className={cn('root', 'header')} style={style}>
				<Fab bottom={position} right={position}>Light Theme</Fab>
			</div>

			<div className={cn('root', 'dark', 'header')} style={style}>
				<Fab bottom={position} right={position} theme='dark'>Dark Theme</Fab>
			</div>
		</section>
	);
}