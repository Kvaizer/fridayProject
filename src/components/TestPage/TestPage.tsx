import React from 'react';
import SuperInputText from '../common/c1-SuperInputText/SuperInputText';
import SuperButton from '../common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../common/c3-SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperSelect from '../common/c5-SuperSelect/SuperSelect';
import SuperRadio from '../common/c6-SuperRadio/SuperRadio';
import s from './TestPage.module.css'

const TestPage = () => {

    return (
        <div className={s.testBox}>
            <SuperInputText/>
            <SuperButton>Test</SuperButton>
            <SuperCheckbox/>
            <SuperEditableSpan/>
            <SuperSelect value={'test'} options={['1', '2', '3']} onChangeOption={() => {}}/>
            <SuperRadio value={'test'} onChangeOption={() => {}}/>
        </div>
    );
};

export default TestPage;