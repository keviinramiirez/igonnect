import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './JoinHero.css';
import ConnectIcon from '../../assets/SVG/contact_connect.svg';
import InvestIcon from '../../assets/SVG/contact_invest.svg';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const boxInfo = [
  {
    Icon: <img height='35' width='35' src={ConnectIcon} alt='' />,
    title: 'The PRIB',
    context: 'Daily trainings, upselling, cross-selling, presenting, ' +
      'retaining, events, social media presence, and all the ' +
      'resources for you to begin and generate residual income online ' +
      'in your free time without neglecting what your doing.'
  },
  {
    Icon: <img height='35' width='35' src={InvestIcon} alt='' />,
    title: 'Invest on Yourself',
    context: 'We are way past monotonous Network Marketing. Become an ' +
      'entrepreneur with our exclusive technologies.'
  },
  {
    Icon: <i className="far fa-gem"></i>,
    title: 'Worldclass Leadership',
    context: 'Join us and our proven leadership in more than 72 countries ' +
      'led by CEO Holton Buggs.'
  }
]



const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 180,
    boxShadow: 'inset 2px 2px 5px #cbced1, inset -5px -5px 10px #fff',
    borderRadius: '300px',
  },
}));


function JoinHero() {
  const classes = useStyles();
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [about, setAbout] = useState('');
  // const [message, setMessage] = useState('')
  const [name, setName] = useState('KEVIN')
  const [email, setEmail] = useState('kevjramirez@yahoo.com')
  const [about, setAbout] = useState('');
  const [message, setMessage] = useState('MESSAGE')
  const [test, setTest] = useState('NO VALUE')

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleAboutChange = e => {
    setAbout(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = async e => {
    if (!isButtonEnabled())
      return;
    e.preventDefault();


    // setName('')
    // setEmail('')
    // setAbout('')
    // setMessage('')
  }

  const isButtonEnabled = () => {
    return name.length > 0 && email.length > 0 && message.length > 0
  }

  return (
    <div className='join__wrapper'>
      <div className='join__card'>
        <h1>Contact Me</h1>
        {test}
        <form className='join__fields' onSubmit={handleSubmit}>
          <div className='join__name'>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='join__email'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">About</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={about}
              onChange={handleAboutChange}
              disableUnderline
            >
              <MenuItem value={'ibuumerang'}>iBuumerang</MenuItem>
              <MenuItem value={'igo'}>iGo</MenuItem>
              <MenuItem value={'zence'}>Zence</MenuItem>
              <MenuItem value={'billgenius'}>Bill Genius</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>

          <div className='join__inputBox'>
            <textarea
              type='text'
              name=''
              value={message}
              onChange={handleMessageChange}
              required='required'
            />
            <span>Type your Message...</span>
          </div>

          {/* <button className={`join__button${isButtonDisabled() ? '_disabled' : ''}`} onSubmit={handleSubmit} > */}
          <button className={`join__button ${isButtonEnabled() ? '' : 'join__button_disabled'}`} onSubmit={handleSubmit} >
            <i className="far fa-paper-plane"></i>
            Send
          </button>
        </form>
      </div>

      <div className='join__buumInfo'>
        {boxInfo.map(({ Icon, title, context }) =>
          <div className='join__box' key={title}>
            <div className='join__boxIcon'>
              {Icon}
            </div>
            <div className='join__boxText'>
              <h3>{title}</h3>
              <p>
                {context}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default JoinHero
