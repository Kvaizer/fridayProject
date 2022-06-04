import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type {AppRootState } from '../store/store'
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

type DispatchType = ThunkDispatch<AppRootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector