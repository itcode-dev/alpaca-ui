/**
 * AlpacaProvider 컴포넌트
 *
 * @author RWB
 * @since 2022.07.03 Sun 22:55:11
 */

import { AlpacaProviderProps } from '@alpaca/atom/AlpacaProvider';
import { AlpacaContext, AlpacaContextProps, Theme } from '@alpaca/common';
import { useEffect, useMemo, useState } from 'react';

import './AlpacaProvider.scss';

/**
 * AlpacaProvider 컴포넌트 JSX 반환 메서드
 *
 * @param {AlpacaProviderProps} props: AlpacaProviderProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function AlpacaProvider({ value, children }: AlpacaProviderProps): JSX.Element
{
	const [ state, setState ] = useState<Theme | undefined>(value);

	const valueMemo = useMemo<AlpacaContextProps>(() => ({
		setTheme: setState,
		theme: state
	}), [ state, setState ]);

	useEffect(() =>
	{
		const tag = document.getElementsByTagName('html')[0];

		// 다크 테마일 경우
		if (valueMemo.theme === 'dark')
		{
			// 클래스에 light가 이미 있을 경우
			if (tag.classList.contains('light'))
			{
				tag.classList.remove('light');
			}
		}

		// 클래스에 dark가 이미 있을 경우
		else if (tag.classList.contains('dark'))
		{
			tag.classList.remove('dark');
		}

		tag.classList.add(valueMemo.theme);
	}, [ valueMemo ]);

	return (
		<AlpacaContext.Provider value={valueMemo}>
			<main>
				{children}
			</main>
		</AlpacaContext.Provider>
	);
}