/**
 * 알파카 Provider 컴포넌트
 *
 * @author RWB
 * @since 2022.07.03 Sun 22:55:11
 */

import { useEffect } from 'react';

import { AlpacaProviderProps } from './AlpacaProvider.types';

import { Context } from '../../common/context';

import './AlpacaProvider.scss';

/**
 * 알파카 Provider 컴포넌트 JSX 반환 메서드
 *
 * @param {AlpacaProviderProps} props: AlpacaProviderProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function AlpacaProvider({ value, children }: AlpacaProviderProps): JSX.Element
{
	useEffect(() =>
	{
		const tag = document.getElementsByTagName('html')[0];

		// 다크 테마일 경우
		if (value?.theme === 'dark')
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

		tag.classList.add(value?.theme);
	}, [ value ]);

	return (
		<Context.Provider value={value}>
			<main>
				{children}
			</main>
		</Context.Provider>
	);
}