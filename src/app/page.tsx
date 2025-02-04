'use client'
import Image from 'next/image';
import UnderTab from './component/startPage/underTab';

export default function StartPage() {

  return (
    <div className={` px-12 pt-12 relative h-full`}>
      <h3 className='text-center text-xl'>さあ、始めよう</h3>
      <Image src='/images/first.png' alt='さあはじめよう' width='300' height='300' />
      {/* <TitleText mainTitle={currentText.mainTitle} subTitle={currentText.subTitle} secondTitle={currentText.secondTitle} /> */}
      {/* <button onClick={() => setCount(count + 1)} className={style.nextButton}></button> */}

      {/* <button onClick={() => setCount(count + 1)} className={style.nextButton}></button> */}
      <UnderTab />
    </div>
  );
}