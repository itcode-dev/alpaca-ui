/**
 * Utterances 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.15 Mon 04:48:12
 */

import { useRef, useState, useEffect } from 'react';

import { UtterancesProps } from './Utterances.types';

/**
 * Utterances 컴포넌트 JSX 반환 메서드
 *
 * @param {UtterancesProps} param0: UtterancesProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Utterances({ repo, issueTerm, label, theme = 'github-light', ...props }: UtterancesProps): JSX.Element
{
	const [ state, setState ] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() =>
	{
		if (ref.current)
		{
			if (state)
			{
				const tag: HTMLIFrameElement | null = document.querySelector('.utterances-frame');

				if (tag)
				{
					tag.contentWindow?.postMessage({ theme, type: 'set-theme' }, 'https://utteranc.es');
				}
			}

			else
			{
				const script = document.createElement('script');
				script.src = 'https://utteranc.es/client.js';
				script.async = true;
				script.setAttribute('repo', repo);
				script.setAttribute('issue-term', issueTerm);
				script.setAttribute('theme', theme);
				script.setAttribute('crossOrigin', 'anonymous');

				if (label)
				{
					script.setAttribute('label', label);
				}

				ref.current.appendChild(script);

				setState(true);
			}
		}
	}, [ repo, issueTerm, label, theme, state, setState ]);

	return (
		<div data-component='Utterances' ref={ref} {...props} />
	);
}