import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './JoinMeHero.css'
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
    Icon: <i class="far fa-gem"></i>,
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


function ContactForm() {
  const classes = useStyles();
  const [about, setAbout] = React.useState('');

  const handleChange = (event) => {
    setAbout(event.target.value);
  };

  return (
    <div className='joinme__wrapper'>
      <div className='joinme__card'>
        <h1>Contact Me</h1>
        <div className='joinme__fields'>
          <div className='joinme__name'>
            <input type='name' placeholder='Name' />
          </div>
          <div className='joinme__email'>
            <input type='email' placeholder='Email' />
          </div>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">About</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={about}
              onChange={handleChange}
              disableUnderline
            >
              <MenuItem value={'ibuumerang'}>iBuumerang</MenuItem>
              <MenuItem value={'igo'}>iGo</MenuItem>
              <MenuItem value={'zence'}>Zence</MenuItem>
              <MenuItem value={'billgenius'}>Bill Genius</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>

          <div className='joinme__inputBox'>
            <textarea type='text' name='' required='required' />
            <span>Type your Message...</span>
          </div>

          <button className='joinme__button'>
            <i class="far fa-paper-plane"></i>
            Send
          </button>
        </div>
      </div>

      <div className='joinme__buumInfo'>
        {boxInfo.map(({ Icon, title, context }) =>
          <div className='joinme__box'>
            <div className='joinme__boxIcon'>
              {Icon}
            </div>
            <div className='joinme__boxText'>
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

export default ContactForm
