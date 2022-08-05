/**
 * Fab Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 19:03:12
 */

import Fab, { FabProps } from '@alpaca/atom/Fab';
import styles from '@alpaca/stories.module.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { CSSProperties } from 'react';

export default {
	component: Fab,
	title: 'Atom/Fab'
} as ComponentMeta<typeof Fab>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {FabProps} args: FabProps 인터페이스
 *
 * @returns {ComponentStory<typeof Header>} ComponentStory 객체
 */
function getTemplate(args: FabProps): ComponentStory<typeof Header>
{
	return (
		<section className={cn('root', args.theme, 'full')}>
			<Fab {...args} />
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