/**
 * 알파카 Provider Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:58:17
 */

import { ComponentMeta } from '@storybook/react';
import React, { CSSProperties, useState } from 'react';

import { ContextProps, Theme } from '../../common/context';
import Button from '../Button/Button';

import AlpacaProvider from '.';

export default {
	component: AlpacaProvider,
	title: 'Atom/AlpacaProvider'
} as ComponentMeta<typeof AlpacaProvider>;

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

	const style: CSSProperties = {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
		height: '100vh',
		justifyContent: 'center'
	};

	return (
		<AlpacaProvider value={state}>
			<div style={style}>
				<Button onClick={() => handleClick(state.theme)}>{state.theme}</Button>
				<p>위 버튼을 누르면 테마 모드가 변경됩니다.</p>
			</div>
		</AlpacaProvider>
	);
}