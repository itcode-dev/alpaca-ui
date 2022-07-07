/**
 * 알파카 Provider 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:51:28
 */

import { ProviderProps } from 'react';

import { ContextProps } from '../../common/context';

export type AlpacaProviderProps = ProviderProps<ContextProps | undefined>