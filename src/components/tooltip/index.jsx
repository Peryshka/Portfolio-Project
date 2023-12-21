import React, {useState} from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const ToolTipComp = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [value, setValue] = useState('');
  const [tooltipType, setTooltipType] = useState('');
  const {
    type,
    to,
    className
  } = props;

  const classes = clsx(
    styles['card-link'],
    {[className]: className}
  )
  const handleMouseEnter = (type) => {
    setTooltipType(type);
    if (type === 'Company') {
      setValue(type + ': ' + 'Self-employed')
    } else if (type === 'Location') {
      setValue(type + ': ' + 'Home')
    } else if (type === 'Contract') {
      setValue(type + ': ' + 'Self-employed')
    } else if (type === 'Javascript') {
      setValue(type)
    } else if (type === 'Typescript') {
      setValue(type)
    } else {
      setValue(type)
    }
    setShowTooltip(true);
  }

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={styles.boxWrap}>
      <a href={to}
         data-label={value}
         className={classes}
         onMouseEnter={() => handleMouseEnter(type)}
         onMouseLeave={handleMouseLeave}
      >
        {type === 'Company' && (
          <i className={styles['building-icon']}></i>
        )}
        {type === 'Location' && (
          <i className={styles['location-icon']}></i>
        )}
        {type === 'Contract' && (
          <i className={styles['contract-icon']}></i>
        )}
        {type === 'Javascript' && (
          <i className={styles['javascript-icon']}></i>
        )}
        {type === 'Typescript' && (
          <i className={styles['typescript-icon']}></i>
        )}
      </a>
    </div>
  )
}

export default ToolTipComp;

