/**
 * 알파카 Provider Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:58:17
 */

import { ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useState } from 'react';

import { ContextProps, Theme } from '../../common/context';
import styles from '../../stories.module.scss';

import AlpacaProvider from '.';

export default {
	component: AlpacaProvider,
	title: 'Atom/AlpacaProvider'
} as ComponentMeta<typeof AlpacaProvider>;

const cn = classNames.bind(styles);

/**
 * 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Example(): JSX.Element
{
	const [ state, setState ] = useState<ContextProps>({ theme: 'light' });

	// 클릭 시 Provide 상태 변경 메서드
	const handleClick = (theme: Theme) =>
	{
		const changeTheme = theme === 'light' ? 'dark' : 'light';

		setState({ theme: changeTheme });
	};

	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<AlpacaProvider value={state}>
					<button onClick={() => handleClick(state.theme)}>{state.theme}</button>
				</AlpacaProvider>
			</div>
		</section>
	);
}