import { useEffect, useState } from 'react';
import DropdownListDisplay from './DropdownContext';
import { dateUpdate } from '../Query';

function Header() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  return (
    <>
      <header
        slot="header"
        id="header-title"
        style={{ display: 'flex', width: '100%', padding: '0 1rem' }}
      >
        <img
          src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
          alt="DOTr Logo"
          height={'2.9%'}
          width={'2.9%'}
          style={{ marginBottom: 'auto', marginTop: 'auto' }}
        />
        <b className="headerTitle">SC UTILITY</b>
        <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

        {/* Dropdown List */}
        <DropdownListDisplay />

        <img
          src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
          alt="GCR Logo"
          height={'4.4%'}
          width={'4.4%'}
          style={{
            marginBottom: 'auto',
            marginTop: 'auto',
            marginLeft: 'auto',
            marginRight: '5rem',
          }}
        />
      </header>
    </>
  );
}

export default Header;
