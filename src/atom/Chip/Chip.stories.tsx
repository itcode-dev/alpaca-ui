/**
 * Chip Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.21 Thu 00:56:01
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useContext, useEffect } from 'react';

import { ChipProps } from './Chip.types';

import { AlpacaContext } from '../../common';
import styles from '../../stories.module.scss';

import Chip from '.';

export default {
	component: Chip,
	title: 'Atom/Chip'
} as ComponentMeta<typeof Chip>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {ChipProps} param0: ChipProps 인터페이스
 *
 * @returns {ComponentStory<typeof Chip>} ComponentStory 객체
 */
function getTemplate({ theme, ...props }: ChipProps): ComponentStory<typeof Chip>
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
				<Chip {...props} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { children: 'Chip' } as ChipProps;

/**
 * 테마 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Theme(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Chip>Light Chip</Chip>
			</div>

			<div className={cn('row', 'dark')}>
				<Chip theme='dark'>Dark Chip</Chip>
			</div>
		</section>
	);
}