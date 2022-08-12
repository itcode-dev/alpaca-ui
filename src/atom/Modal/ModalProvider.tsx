/**
 * ModalProvider 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.12 Fri 19:35:23
 */

import { useEffect, useMemo, useState } from 'react';

import { ModalProviderProps } from './ModalProvider.types';

import { ModalContext, ModalContextProps } from '../../common';

/**
 * ModalProvider 컴포넌트 JSX 반환 메서드
 *
 * @param {ModalProviderProps} param0: ModalProviderProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function ModalProvider({ value, ...props }: ModalProviderProps): JSX.Element
{
	const [ state, setState ] = useState(value);

	const valueMemo = useMemo<ModalContextProps>(() => ({
		isOpen: state,
		setOpen: setState
	}), [ state, setState ]);

	useEffect(() =>
	{
		if (valueMemo.setOpen)
		{
			valueMemo.setOpen(value);
		}
	}, [ value ]);

	return (
		<ModalContext.Provider value={valueMemo} {...props} />
	);
}