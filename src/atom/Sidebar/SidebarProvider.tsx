/**
 * SidebarProvider 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.15 Mon 18:15:36
 */

import { useEffect, useMemo, useState } from 'react';

import { SidebarProviderProps } from './SidebarProvider.types';

import { SidebarContext, SidebarContextProps } from '../../common';

/**
 * SidebarProvider 컴포넌트 JSX 반환 메서드
 *
 * @param {SidebarProviderProps} param0: SidebarProviderProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function SidebarProvider({ value, ...props }: SidebarProviderProps): JSX.Element
{
	const [ state, setState ] = useState(value);

	const valueMemo = useMemo<SidebarContextProps>(() => ({
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
		<SidebarContext.Provider value={valueMemo} {...props} />
	);
}