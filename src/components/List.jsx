import React, { useState } from 'react';
import CheckboxList from './checkBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const ParentComponent = () => {
    const [list1, setList1] = useState([
        { label: 'JS', checked: false },
        { label: 'HTML', checked: false },
        { label: 'CSS', checked: false },
        { label: 'TS', checked: false },
    ]);

    const [list2, setList2] = useState([
        { label: 'React', checked: false },
        { label: 'Angular', checked: false },
        { label: 'Vue', checked: false },
        { label: 'Svelte', checked: false },
    ]);

    const [leftBtn, setLeftBtn] = useState(true);
    const [rightBtn, setRightBtn] = useState(true);

    const handleList1Change = (index) => {
        const newList = [...list1];
        newList[index].checked = !newList[index].checked;
        setList1(newList);
        const anyChecked = newList.some(item => item.checked);
        setRightBtn(!anyChecked);
    };

    const handleList2Change = (index) => {
        const newList = [...list2];
        newList[index].checked = !newList[index].checked;
        setList2(newList);
        const anyChecked = newList.some(item => item.checked);
        setLeftBtn(!anyChecked);
    };

    const moveAllToLeft = () => {
        setList1([...list1, ...list2]);
        setList2([]);
        setLeftBtn(true);
    }

    const moveAllToRight = () => {
        setList2([...list2, ...list1]);
        setList1([]);
        setRightBtn(true);
    }

    const moveToLeft = () => {
        const checkedItems = list2.filter(item => item.checked).map(item => ({ ...item, checked: false }));
        const uncheckedItems = list2.filter(item => !item.checked);

        setList1([...list1, ...checkedItems]);
        setList2(uncheckedItems);
        setLeftBtn(true);
    }

    const moveToRight = () => {
        const checkedItems = list1.filter(item => item.checked).map(item => ({ ...item, checked: false }));
        const uncheckedItems = list1.filter(item => !item.checked);

        setList2([...list2, ...checkedItems]);
        setList1(uncheckedItems);
        setRightBtn(true);
    }

    return (
        <div className='w-2/4 border-2 border-black h-fit'>
            <header className='w-30 text-xl text-center p-10 border-2 border-black'>Transfer List</header>
            <div className='flex '>
                <div className='w-full '>
                    <CheckboxList checkboxes={list1} handleChange={handleList1Change} />
                </div>
                <div className='flex flex-col gap-8 w-20 border-r-2 border-l-2 border-black p-6'>
                    <button className='grid place-content-center p-2 px-5 bg-slate-200'>
                        <FontAwesomeIcon icon={faAnglesLeft} onClick={moveAllToLeft} />
                    </button>
                    <button disabled={leftBtn} className='grid place-content-center p-2 px-5 bg-slate-200 disabled:bg-red-100'>
                        <FontAwesomeIcon icon={faAngleLeft} onClick={moveToLeft} />
                    </button>
                    <button disabled={rightBtn} className='grid place-content-center p-2 px-5 bg-slate-200 disabled:bg-red-100'>
                        <FontAwesomeIcon icon={faAngleRight} onClick={moveToRight} />
                    </button>
                    <button className='grid place-content-center p-2 px-5 bg-slate-200'>
                        <FontAwesomeIcon icon={faAnglesRight} onClick={moveAllToRight} />
                    </button>
                </div>
                <div className='w-full'>
                    <CheckboxList checkboxes={list2} handleChange={handleList2Change} />
                </div>
            </div>
        </div>
    );
};

export default ParentComponent;
