/**
 * AlpacaProvider Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:58:17
 */

import { ComponentMeta } from '@storybook/react';
import React, { CSSProperties } from 'react';

import { AlpacaContext } from '../../common/context';
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
	const style: CSSProperties = {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
		height: '100vh',
		justifyContent: 'center'
	};

	return (
		<AlpacaProvider value='light'>
			<div style={style}>
				<AlpacaContext.Consumer>
					{({ theme, setTheme }) => <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme}</Button>}
				</AlpacaContext.Consumer>

				<p>위 버튼을 누르면 테마 모드가 변경됩니다.</p>
			</div>
		</AlpacaProvider>
	);
}